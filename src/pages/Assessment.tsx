import { useState, useEffect, FormEvent } from 'react';

// Configuration
const MEETING_URL = "https://calendar.app.google/sgsqiUz4hW6NqKm68";
const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/18931428/urxvjm2/";
const META_PIXEL_ID = "";
const LINKEDIN_PARTNER_ID = "";
const LINKEDIN_CONVERSION_ID_RESULTS = null;

// Types
type Audience = 'enterprise' | 'founders';
type View = 'chooser' | 'enterprise' | 'founders' | 'assessment';
type Tier = 'cold' | 'warm' | 'hot';

interface CTA {
  label: string;
  href: string;
  primary: boolean;
}

interface UTM {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export default function Assessment() {
  const [currentView, setCurrentView] = useState<View>('chooser');
  const [audience, setAudience] = useState<Audience>('enterprise');
  const [showResults, setShowResults] = useState(false);
  const [resultData, setResultData] = useState<any>(null);

  // UTM capture
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: UTM = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(k => {
      const val = params.get(k);
      if (val) utm[k as keyof UTM] = val;
    });
    if (Object.keys(utm).length) {
      try {
        localStorage.setItem('utm', JSON.stringify(utm));
      } catch (e) {}
    }

    // Load saved audience
    try {
      const saved = localStorage.getItem('audience') as Audience | null;
      if (saved) setAudience(saved);
    } catch (e) {}
  }, []);

  // Handle view changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === '/enterprise') {
        setCurrentView('enterprise');
        saveAudience('enterprise');
      } else if (hash === '/founders') {
        setCurrentView('founders');
        saveAudience('founders');
      } else if (hash === '/assessment') {
        setCurrentView('assessment');
      } else {
        setCurrentView('chooser');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const saveAudience = (aud: Audience) => {
    setAudience(aud);
    try {
      localStorage.setItem('audience', aud);
    } catch (e) {}
  };

  const getStoredUTM = (): UTM => {
    try {
      return JSON.parse(localStorage.getItem('utm') || '{}');
    } catch (e) {
      return {};
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate commitment
    const weekly = formData.get('weekly');
    if (!weekly) {
      alert("This coaching requires a weekly 60–90 min session. Please confirm the commitment to proceed.");
      return;
    }

    // Extract form data
    const name = (formData.get('name') as string).trim();
    const email = (formData.get('email') as string).trim();
    const phone = (formData.get('phone') as string).trim();
    const situation = formData.get('situation') as string;
    const outcome = formData.get('outcome') as string;
    const obstacle = formData.get('obstacle') as string;
    const solution = formData.get('solution') as string;
    const notes = (formData.get('notes') as string).trim();

    // Calculate score
    let bpScore = 0;
    for (let i = 1; i <= 10; i++) {
      if (formData.get(`bp${i}`) === 'yes') bpScore++;
    }
    const pct = Math.round((bpScore / 10) * 100);

    // Determine tier and recommendations
    let tier: Tier, reveal: string, insights: string[], ctas: CTA[];
    
    const CTA_OPTIONS = {
      book: { label: "Book 1:1 Strategy Session", href: MEETING_URL, primary: true },
      dfy: { label: "Request SOW (Done-for-You)", href: "#", primary: false },
      council: { label: "Apply to Memento Council Dinner", href: "#", primary: true },
      playbook: { label: "Get the Free Playbook", href: "#", primary: true },
      workshop: { label: "Watch the Workshop", href: "#", primary: false }
    };

    if (bpScore <= 4) {
      tier = 'cold';
      reveal = "Foundations first. Install a 90-day plan and a simple weekly scorecard before layering advanced AI plays.";
      insights = [
        "Pick 3–5 outcomes for the next 90 days with clear owners.",
        "Run a 45-minute weekly leadership meeting: commitments, not pontification.",
        "Launch a basic content + pipeline workflow; done is better than perfect."
      ];
      ctas = [CTA_OPTIONS.playbook, CTA_OPTIONS.workshop];
    } else if (bpScore <= 7) {
      tier = 'warm';
      reveal = "Strong signals, uneven cadence. Consistency and cleaner visibility will unlock compounding results.";
      insights = [
        "Publish a single cross-functional scorecard; review it weekly without fail.",
        "Tighten ICP → offer → messaging; ship 2 AI-assisted content pieces/week.",
        "Run a 30-day 'truth over politics' experiment: decisions require data, not titles."
      ];
      ctas = [CTA_OPTIONS.council, CTA_OPTIONS.playbook];
    } else {
      tier = 'hot';
      reveal = "Foundations in place. Press the advantage with AI-assisted GTM and leader-level accountability.";
      insights = [
        "Scale your AI content engine to a weekly publishing rhythm tied to pipeline.",
        "Instrument CRM hygiene alerts; no stage change without next action.",
        "Hold executive reviews focused on blockers, not status."
      ];
      ctas = [CTA_OPTIONS.book, CTA_OPTIONS.dfy];
    }

    // Audience-tailored adjustments
    let audLine = "";
    if (audience === 'enterprise') {
      audLine = "Enterprise path: we'll align leadership, install a single scorecard, and drive weekly cross-team commitments.";
      if (tier === 'warm') ctas = [CTA_OPTIONS.council, CTA_OPTIONS.playbook];
      if (tier === 'hot' && !ctas.includes(CTA_OPTIONS.dfy)) ctas.push(CTA_OPTIONS.dfy);
    } else {
      audLine = "Founder path: we'll tighten offer→message, ship weekly content, and move pipeline with simple rituals.";
      if (tier === 'hot') ctas = [CTA_OPTIONS.book];
      if (tier !== 'hot' && !ctas.includes(CTA_OPTIONS.playbook)) ctas.push(CTA_OPTIONS.playbook);
    }

    const nextStep = (tier === 'hot' && (solution === '1:1 coaching with Chris' || solution === 'Done-for-you implementation'))
      ? "You're a strong fit for 1:1 work. Book a private session to lock your 90-day plan and cadence."
      : (tier !== 'cold' && (solution === 'Memento software + cadence' || solution === 'Education & training'))
      ? "Join a Memento Council dinner or workshop to experience the cadence, then activate the software + rituals."
      : "Start with the free playbook and video workshop. Implement the weekly scorecard, then revisit 1:1 or Council.";

    // Store results
    setResultData({
      bpScore,
      pct,
      tier,
      reveal,
      audLine,
      insights,
      ctas,
      nextStep
    });
    setShowResults(true);

    // Prepare payload
    const utm = getStoredUTM();
    const payload = {
      to_email: "info@torqueapp.ai",
      audience,
      utm,
      name,
      email,
      phone,
      weekly: true,
      bpScore,
      pct,
      tier,
      situation,
      outcome,
      obstacle,
      solution,
      notes,
      meeting_url: MEETING_URL,
      page: window.location.pathname + window.location.hash,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      source: "TorqueAI-Assessment"
    };

    // Save locally
    try {
      const leads = JSON.parse(localStorage.getItem('leads') || '[]');
      leads.push({ ...payload, ts: new Date().toISOString() });
      localStorage.setItem('leads', JSON.stringify(leads));
    } catch (e) {}

    // Send to Zapier
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      console.log("Lead delivered to Zapier");
    } catch (err) {
      console.error("Zapier delivery error", err);
    }

    // Track with pixels if configured
    try {
      if ((window as any).fbq && META_PIXEL_ID) {
        (window as any).fbq('trackCustom', 'AssessmentResult', {
          audience, tier, pct, bpScore, situation, outcome, obstacle, solution, utm, page: payload.page
        });
      }
      if ((window as any).lintrk && LINKEDIN_CONVERSION_ID_RESULTS) {
        (window as any).lintrk('track', { conversion_id: LINKEDIN_CONVERSION_ID_RESULTS });
      }
    } catch (e) {
      console.warn('Pixel event error', e);
    }

    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div style={styles.wrap}>
      <style>{cssStyles}</style>

      {/* Navigation */}
      <div style={styles.nav}>
        <div style={styles.navLogo}>
          <strong>Torque AI</strong>
        </div>
        <div>
          <a className="btn btn-primary" href={MEETING_URL} target="_blank" rel="noopener">Meet With Us</a>
        </div>
      </div>

      {/* Chooser View */}
      {currentView === 'chooser' && (
        <main>
          <section className="card">
            <div className="panel">
              <span className="badge">Make AI deliver • 90 days</span>
              <h2>Choose your path</h2>
              <p className="muted">We tune the same operating rhythm for two audiences. Pick the one that fits you best.</p>
              <div className="chooser">
                <a className="card" href="#/enterprise" style={{ textDecoration: 'none' }}>
                  <div className="panel">
                    <h3>For Enterprise Leaders</h3>
                    <p className="muted">Install a weekly cadence across teams. Ship AI outcomes with truth over politics.</p>
                    <div className="cta-row"><span className="btn btn-primary">See enterprise path →</span></div>
                  </div>
                </a>
                <a className="card" href="#/founders" style={{ textDecoration: 'none' }}>
                  <div className="panel">
                    <h3>For Founders</h3>
                    <p className="muted">Focus, ship, and scale. Use AI to create content that sells and a pipeline that moves.</p>
                    <div className="cta-row"><span className="btn btn-primary">See founder path →</span></div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Enterprise View */}
      {currentView === 'enterprise' && (
        <main>
          <section className="hero">
            <div>
              <span className="badge">Enterprise • Alignment at scale</span>
              <h1>Boards are replacing leaders who can't make AI deliver.</h1>
              <h2>Install a weekly operating rhythm that turns AI talk into revenue, accountability, and momentum.</h2>
              <p className="muted">Start with a free 3-minute assessment. Get your score, three tailored insights, and the next step (1:1, Memento Council, or playbook).</p>
              <div className="proof">
                <span className="chip">$32M closed with AI-driven GTM</span>
                <span className="chip">Founder: Torque AI & Memento</span>
                <span className="chip">TV commentator & author</span>
                <span className="chip">AI Summit NYC</span>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="#/assessment">Start the 3-minute assessment</a>
                <a className="btn btn-ghost" href={MEETING_URL} target="_blank" rel="noopener">Meet With Us</a>
              </div>
              <p className="muted" style={{ marginTop: '6px' }}>31% of CEOs lose their roles for failed transformation. Don't be next—lead with alignment.</p>
            </div>
            <div className="card">
              <div className="panel">
                <h3>As seen on</h3>
                <div className="logos">
                  {['ABC', 'FOX News', 'Fox Business', 'Associated Press', 'CBS', 'Fortune', 'CNN', 'Sports Illustrated', 'TIME', 'Business Insider', 'Forbes'].map(logo => (
                    <span key={logo} className="logo-tag">{logo}</span>
                  ))}
                </div>
              </div>
              <div className="panel">
                <h3>What we install</h3>
                <div className="grid cols-3">
                  <div>
                    <strong>Strategy Clarity</strong>
                    <ul className="list">
                      <li>90-day outcomes & owners</li>
                      <li>ICP, offers, pricing</li>
                      <li>Messaging & proof</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Operating Rhythm</strong>
                    <ul className="list">
                      <li>Weekly commitments</li>
                      <li>Scorecards & reviews</li>
                      <li>Truth over politics</li>
                    </ul>
                  </div>
                  <div>
                    <strong>AI Leverage</strong>
                    <ul className="list">
                      <li>Content engine</li>
                      <li>Pipeline automation</li>
                      <li>Insight → action</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section card">
            <div className="panel">
              <h3>Why now</h3>
              <div className="grid cols-4">
                <div><strong>5–10% revenue leak</strong><p className="small">Execution drift, duplication & hand-offs silently tax topline.</p></div>
                <div><strong>40% time lost</strong><p className="small">Context switching & meetings drain productive hours.</p></div>
                <div><strong>AI adoption is compounding</strong><p className="small">Top performers embed AI into apps & workflows.</p></div>
                <div><strong>31% CEO attrition</strong><p className="small">Boards replace leaders who can't ship transformation.</p></div>
              </div>
            </div>
          </section>

          <section className="section card">
            <div className="panel">
              <h3>How it works</h3>
              <div className="grid cols-3">
                <div><strong>1) Assess</strong><p className="muted">3-minute scorecard reveals gaps across Strategy, Rhythm, and AI Leverage.</p></div>
                <div><strong>2) Plan</strong><p className="muted">Lock a 90-day plan, owners, and a single weekly scorecard.</p></div>
                <div><strong>3) Ship</strong><p className="muted">Install the cadence. Scale AI content + pipeline while leadership models accountability.</p></div>
              </div>
              <div className="cta-row" style={{ marginTop: '10px' }}>
                <a className="btn btn-primary" href="#/assessment">Start the 3-minute assessment</a>
                <a className="btn btn-ghost" href={MEETING_URL} target="_blank" rel="noopener">Meet With Us</a>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="pill">Torque AI</div><div className="pill">Memento</div><div className="pill">Quantum Shift</div>
            <p style={{ marginTop: '10px' }}>It's free to start. You'll see your score and recommendations instantly.</p>
          </footer>
        </main>
      )}

      {/* Founders View */}
      {currentView === 'founders' && (
        <main>
          <section className="hero">
            <div>
              <span className="badge">Founders • Focus & ship</span>
              <h1>Make AI pay—without burning the week on busywork.</h1>
              <h2>Get a weekly cadence that publishes, pipelines, and closes. No politics. No fluff.</h2>
              <p className="muted">Take the 3-minute assessment. You'll get a score, three tailored insights, and your next step (1:1, Council, or playbook).</p>
              <div className="proof">
                <span className="chip">$32M closed with AI-driven GTM</span>
                <span className="chip">Founder: Torque AI & Memento</span>
                <span className="chip">TV commentator & author</span>
                <span className="chip">AI Summit NYC</span>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="#/assessment">Start the 3-minute assessment</a>
                <a className="btn btn-ghost" href={MEETING_URL} target="_blank" rel="noopener">Meet With Us</a>
              </div>
              <p className="muted" style={{ marginTop: '6px' }}>Cut tool bloat, ship weekly, and move the only metrics that matter.</p>
            </div>
            <div className="card">
              <div className="panel">
                <h3>What you'll install</h3>
                <div className="grid cols-3">
                  <div><strong>Offer & ICP</strong><ul className="list"><li>Dial productized offers</li><li>Proof & pricing</li><li>Messaging</li></ul></div>
                  <div><strong>Operating Rhythm</strong><ul className="list"><li>Weekly commitments</li><li>Scorecard</li><li>Post-mortems</li></ul></div>
                  <div><strong>AI Engine</strong><ul className="list"><li>Content → pipeline</li><li>CRM hygiene</li><li>Sequenced outreach</li></ul></div>
                </div>
              </div>
            </div>
          </section>

          <section className="section card">
            <div className="panel">
              <h3>Why now</h3>
              <div className="grid cols-3">
                <div><strong>Focus = growth</strong><p className="small">Most founders lose 40% to context switching. We claw it back.</p></div>
                <div><strong>AI compounding</strong><p className="small">Founders using AI publish more, learn faster, and sell more.</p></div>
                <div><strong>Ship weekly</strong><p className="small">Cadence beats heroics. Keep promises, compound results.</p></div>
              </div>
            </div>
          </section>

          <section className="section card">
            <div className="panel">
              <h3>How it works</h3>
              <div className="grid cols-3">
                <div><strong>1) Assess</strong><p className="muted">3-minute scorecard across Offer, Rhythm, and AI Engine.</p></div>
                <div><strong>2) Plan</strong><p className="muted">Lock a 90-day plan + single scorecard. Ruthless focus.</p></div>
                <div><strong>3) Ship</strong><p className="muted">Publish weekly, pipeline daily, review blockers Friday.</p></div>
              </div>
              <div className="cta-row" style={{ marginTop: '10px' }}>
                <a className="btn btn-primary" href="#/assessment">Start the 3-minute assessment</a>
                <a className="btn btn-ghost" href={MEETING_URL} target="_blank" rel="noopener">Meet With Us</a>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="pill">Torque AI</div><div className="pill">Memento</div><div className="pill">Quantum Shift</div>
            <p style={{ marginTop: '10px' }}>It's free to start. You'll see your score and recommendations instantly.</p>
          </footer>
        </main>
      )}

      {/* Assessment View */}
      {currentView === 'assessment' && (
        <main>
          <AssessmentForm
            audience={audience}
            onAudienceChange={saveAudience}
            onSubmit={handleSubmit}
            showResults={showResults}
            resultData={resultData}
          />
        </main>
      )}
    </div>
  );
}

// Assessment Form Component
function AssessmentForm({ audience, onAudienceChange, onSubmit, showResults, resultData }: any) {
  const isEnterprise = audience === 'enterprise';

  return (
    <section className="card">
      <div className="panel">
        <a href="#/" className="small">← Choose audience</a>
        <div className="aud-switch">
          <span className="small">You're viewing:</span>
          <span
            className={`aud-pill ${isEnterprise ? 'active' : ''}`}
            onClick={() => onAudienceChange('enterprise')}
          >
            Enterprise
          </span>
          <span
            className={`aud-pill ${!isEnterprise ? 'active' : ''}`}
            onClick={() => onAudienceChange('founders')}
          >
            Founders
          </span>
        </div>
        <h2>{isEnterprise ? 'Clarity & Accountability Assessment' : 'Founder Focus Scorecard'}</h2>
        <p className="muted">
          {isEnterprise
            ? '3 minutes to diagnose gaps across Strategy, Rhythm, and AI Leverage for your org.'
            : '3 minutes to pinpoint the few moves that create weekly momentum and sales.'}
        </p>

        <form onSubmit={onSubmit}>
          {/* Contact Info */}
          <div className="grid cols-2">
            <div className="question">
              <label className="q-title" htmlFor="name">Full name *</label>
              <input className="input" id="name" name="name" required />
            </div>
            <div className="question">
              <label className="q-title" htmlFor="email">Work email *</label>
              <input className="input" id="email" name="email" type="email" required />
            </div>
            <div className="question">
              <label className="q-title" htmlFor="phone">Mobile (optional)</label>
              <input className="input" id="phone" name="phone" />
            </div>
            <div className="question">
              <label className="q-title">I can commit to one 60–90 min session weekly for 12 weeks *</label>
              <div className="inline">
                <label><input type="checkbox" name="weekly" required /> Yes, I can commit weekly</label>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '14px 0' }} />

          {/* Best Practices */}
          <h3>{isEnterprise ? 'Best Practices for Alignment at Scale (Yes/No)' : 'Best Practices for Shipping Weekly (Yes/No)'}</h3>
          {[
            'We have 3–5 90-day outcomes with owners & metrics.',
            'We run a weekly leadership meeting focused on commitments, not politics.',
            'Our ICP, offers, and pricing are documented and current.',
            'A simple accountability scorecard tracks weekly leading indicators.',
            'We publish consistent, useful content powered by AI workflows.',
            'Our CRM is clean; pipeline stages are trusted and reviewed weekly.',
            'We have AI-assisted research and outreach sequences live now.',
            'Team feedback loops are safe and honest (truth over politics).',
            'We run post-mortems and publish "one thing we learned" every sprint.',
            'Leadership models the behavior: commitments made = commitments kept.'
          ].map((q, i) => (
            <div key={i} className="question">
              <div className="q-title">{i + 1}) {q}</div>
              <div className="inline">
                <label><input type="radio" name={`bp${i + 1}`} value="yes" required /> Yes</label>
                <label><input type="radio" name={`bp${i + 1}`} value="no" /> No</label>
              </div>
            </div>
          ))}

          <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '14px 0' }} />

          {/* Big Five Questions */}
          <h3>{isEnterprise ? 'Tell me your role, priorities, and obstacles' : 'Tell me what you\'re building and what\'s blocking you'}</h3>
          
          <div className="question">
            <div className="q-title">11) {isEnterprise ? 'Which best describes your current role?' : 'Which best describes you right now?'}</div>
            <select name="situation" className="input" required>
              <option value="">Choose one…</option>
              <option>Founder/Owner</option>
              <option>C-suite executive</option>
              <option>VP/Head of</option>
              <option>Director/Manager</option>
              <option>Solo consultant/Coach</option>
            </select>
          </div>

          <div className="question">
            <div className="q-title">12) {isEnterprise ? 'Your most important 90-day outcome' : 'Your #1 outcome in the next 90 days'}</div>
            <select name="outcome" className="input" required>
              <option value="">Choose one…</option>
              <option>Install weekly operating rhythm that sticks</option>
              <option>Stand up AI-powered content & pipeline engine</option>
              <option>Refactor ICP/offers/messaging to convert</option>
              <option>Executive coaching for accountability & truth</option>
              <option>Team offsite to align & commit</option>
            </select>
          </div>

          <div className="question">
            <div className="q-title">13) {isEnterprise ? 'What\'s the biggest obstacle today?' : 'What\'s blocking revenue momentum today?'}</div>
            <select name="obstacle" className="input" required>
              <option value="">Choose one…</option>
              <option>Misaligned leadership / politics</option>
              <option>No clear 90-day plan / priorities</option>
              <option>Inconsistent execution / no scorecard</option>
              <option>Weak content engine / top-of-funnel</option>
              <option>Data/CRM hygiene & visibility</option>
            </select>
          </div>

          <div className="question">
            <div className="q-title">14) {isEnterprise ? 'Preferred solution' : 'Pick your preferred path to results'}</div>
            <select name="solution" className="input" required>
              <option value="">Choose one…</option>
              <option>Education & training</option>
              <option>1:1 coaching with Chris</option>
              <option>Memento software + cadence</option>
              <option>Done-for-you implementation</option>
            </select>
            <p className="small muted">
              {isEnterprise
                ? 'Signals budget & appetite: "Done-for-you" implies highest investment.'
                : '"Done-for-you" = highest investment. 1:1 is faster; training is most affordable.'}
            </p>
          </div>

          <div className="question">
            <div className="q-title">15) Anything else I should know?</div>
            <textarea name="notes" rows={3} className="input" placeholder="Deadlines, budget timing, constraints, who's involved…" />
          </div>

          <div className="cta-row">
            <button type="submit" className="btn btn-primary">See my score & next step</button>
            <span className="small">~3 minutes • Instant results</span>
          </div>
        </form>
      </div>

      {/* Results */}
      {showResults && resultData && (
        <div id="results" className="panel">
          <h3>Your dynamic results</h3>
          <div className="meter">
            <div className="fill" style={{ width: `${resultData.pct}%` }} />
          </div>
          <p className="small" style={{ marginTop: '6px' }}>
            Best-practice score: {resultData.bpScore}/10 ({resultData.pct}%) — {audience.toUpperCase()} • tier: {resultData.tier.toUpperCase()}
          </p>

          <div className="card" style={{ marginTop: '14px' }}>
            <div className="panel">
              <h3>Big Reveal</h3>
              <p>{resultData.reveal}</p>
              <p className="small" style={{ marginTop: '6px', color: '#b8c6ff' }}>{resultData.audLine}</p>
            </div>
          </div>

          <div className="grid cols-3" style={{ marginTop: '12px' }}>
            {resultData.insights.map((insight: string, i: number) => (
              <div key={i} className="card">
                <div className="panel">
                  <strong>Insight #{i + 1}</strong>
                  <p className="muted">{insight}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop: '14px' }}>
            <div className="panel">
              <h3>Recommended next step</h3>
              <p className="muted">{resultData.nextStep}</p>
              <div className="cta-row">
                {resultData.ctas.map((cta: CTA, i: number) => (
                  <a
                    key={i}
                    className={`btn ${cta.primary ? 'btn-primary' : 'btn-ghost'}`}
                    href={cta.href}
                    target="_blank"
                    rel="noopener"
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Offers */}
          <div className="card" style={{ marginTop: '14px' }}>
            <div className="panel">
              <h3>Work with Chris</h3>
              <div className="grid cols-3">
                <div>
                  <strong>90-Minute Diagnostic</strong>
                  <p className="small">Scorecard review, 90-day plan, weekly cadence template.</p>
                  <p><b>$1,500</b> (creditable within 7 days)</p>
                  <a className="btn btn-ghost" href={MEETING_URL} target="_blank" rel="noopener">Book Diagnostic</a>
                </div>
                <div>
                  <strong>90-Day Operating Rhythm</strong>
                  <p className="small">Weekly commits, single scorecard, AI content+pipeline starter.</p>
                  <p><b>$9,000</b> (or $3,000/mo)</p>
                  <a className="btn btn-ghost" href={MEETING_URL} target="_blank" rel="noopener">Discuss 90-Day</a>
                </div>
                <div>
                  <strong>Done-for-You 30-Day Sprint</strong>
                  <p className="small">Publish engine, outreach sequences, CRM hygiene, leadership cadence.</p>
                  <p><b>$25,000</b></p>
                  <a className="btn btn-ghost" href={MEETING_URL} target="_blank" rel="noopener">Request SOW</a>
                </div>
              </div>
              <p className="small" style={{ marginTop: '8px', color: '#b8c6ff' }}>
                Fast-action bonus: book within 48 hours and get your first weekly implementation call free.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Inline styles
const styles = {
  wrap: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '28px'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px'
  },
  navLogo: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }
};

// CSS styles as string
const cssStyles = `
  :root {
    --bg: #0b0e13;
    --card: #121622;
    --ink: #eef2ff;
    --muted: #97a0b6;
    --line: #20263b;
    --brand: #6aa5ff;
    --ok: #6ee7b7;
    --warn: #facc15;
    --bad: #fb7185;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid transparent;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
  }
  
  .btn-primary {
    background: var(--brand);
    color: #0b0e13;
  }
  
  .btn-ghost {
    background: transparent;
    border: 1px solid #2a344f;
    color: var(--ink);
  }
  
  .badge {
    display: inline-block;
    padding: 6px 10px;
    border: 1px solid #26325e;
    background: #0f1730;
    color: #b8c6ff;
    border-radius: 20px;
    font-size: 12px;
  }
  
  .hero {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 28px;
    align-items: center;
    padding: 20px 0 8px;
  }
  
  h1 {
    font-size: 42px;
    line-height: 1.05;
    margin: 8px 0 6px;
    font-weight: 900;
  }
  
  h2 {
    font-size: 22px;
    margin: 0 0 8px;
    font-weight: 700;
  }
  
  h3 {
    margin: 0 0 8px;
  }
  
  p {
    color: var(--muted);
    margin: 0 0 12px;
  }
  
  .muted {
    color: var(--muted);
  }
  
  .proof {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin: 8px 0 4px;
  }
  
  .chip {
    background: #0d1220;
    border: 1px solid #1a2140;
    color: #b4bfd8;
    padding: 8px 12px;
    border-radius: 999px;
    font-size: 12px;
  }
  
  .cta-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 14px;
  }
  
  .card {
    background: linear-gradient(180deg, #121622, #0f1320);
    border: 1px solid #1d2338;
    border-radius: 18px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  }
  
  .panel {
    padding: 22px;
  }
  
  .grid {
    display: grid;
    gap: 18px;
  }
  
  .grid.cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .grid.cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid.cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .list {
    margin: 8px 0 0;
    padding: 0 0 0 18px;
  }
  
  .section {
    margin-top: 26px;
  }
  
  .pill {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid #2a3350;
    background: #0f1730;
    font-size: 12px;
  }
  
  .footer {
    margin: 32px 0 8px;
    color: #b8c6ff;
    font-size: 12px;
  }
  
  .input, select, textarea {
    width: 100%;
    padding: 11px 12px;
    border-radius: 10px;
    border: 1px solid #2a3350;
    background: #0d1220;
    color: #eef2ff;
  }
  
  .question {
    margin: 8px 0 14px;
  }
  
  .q-title {
    font-weight: 700;
    margin: 0 0 6px;
  }
  
  .inline {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .meter {
    height: 14px;
    background: #0e1426;
    border: 1px solid #243055;
    border-radius: 999px;
    overflow: hidden;
  }
  
  .fill {
    height: 100%;
    background: linear-gradient(90deg, var(--bad), var(--warn), var(--ok));
    transition: width 0.5s ease;
  }
  
  .small {
    font-size: 12px;
    color: #9aa3b5;
  }
  
  .logos {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .logo-tag {
    border: 1px solid #223;
    background: #0f1730;
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 12px;
    color: #b8c6ff;
  }
  
  .chooser {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 14px;
  }
  
  .chooser .card:hover {
    transform: translateY(-2px);
    transition: transform 0.15s ease;
  }
  
  .aud-switch {
    display: flex;
    gap: 8px;
    align-items: center;
    margin: 8px 0 0;
  }
  
  .aud-pill {
    cursor: pointer;
    border: 1px solid #2a3350;
    background: #0f1730;
    color: #b8c6ff;
    border-radius: 999px;
    padding: 6px 10px;
    font-size: 12px;
  }
  
  .aud-pill.active {
    border-color: #4d68ff;
    color: #fff;
    background: #1b2550;
  }
  
  @media (max-width: 980px) {
    .hero {
      grid-template-columns: 1fr;
    }
    h1 {
      font-size: 34px;
    }
    .chooser {
      grid-template-columns: 1fr;
    }
    .grid.cols-4,
    .grid.cols-3 {
      grid-template-columns: 1fr;
    }
  }
`;
