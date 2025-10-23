import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react';

// Configuration
const MEETING_URL = "https://calendar.app.google/sgsqiUz4hW6NqKm68";
const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/18931428/urxvjm2/";

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

    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Floating particles animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-12 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <strong className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Torque AI</strong>
          </div>
          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <a href={MEETING_URL} target="_blank" rel="noopener">Meet With Us</a>
          </Button>
        </nav>

        {/* Chooser View */}
        {currentView === 'chooser' && (
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Make AI deliver • 90 days</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">Choose your path</h2>
              <p className="text-muted-foreground text-lg mb-8">We tune the same operating rhythm for two audiences. Pick the one that fits you best.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.a
                  href="#/enterprise"
                  className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover-scale no-underline"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">For Enterprise Leaders</h3>
                  <p className="text-muted-foreground mb-6">Install a weekly cadence across teams. Ship AI outcomes with truth over politics.</p>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    See enterprise path →
                  </Button>
                </motion.a>

                <motion.a
                  href="#/founders"
                  className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-accent/50 transition-all hover-scale no-underline"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">For Founders</h3>
                  <p className="text-muted-foreground mb-6">Focus, ship, and scale. Use AI to create content that sells and a pipeline that moves.</p>
                  <Button className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90">
                    See founder path →
                  </Button>
                </motion.a>
              </div>
            </div>
          </motion.main>
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
