import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const MEETING_URL = "https://calendar.app.google/sgsqiUz4hW6NqKm68";
const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/18931428/urxvjm2/";

type View = 'home' | 'assessment';

interface ResultData {
  bpScore: number;
  pct: number;
  tier: string;
  reveal: string;
  insights: string[];
  ctas: Array<{ label: string; href: string; primary: boolean }>;
  nextStep: string;
}

export default function Assessment() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [showResults, setShowResults] = useState(false);
  const [resultData, setResultData] = useState<ResultData | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === '/assessment') setCurrentView('assessment');
      else setCurrentView('home');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Capture UTM params
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(k => {
      const val = params.get(k);
      if (val) utm[k] = val;
    });
    if (Object.keys(utm).length) {
      try {
        localStorage.setItem('utm', JSON.stringify(utm));
      } catch (e) {}
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!formData.get('weekly')) {
      alert("This coaching requires a weekly 60–90 min session. Please confirm the commitment to proceed.");
      return;
    }

    // Score best practices
    let bpScore = 0;
    for (let i = 1; i <= 10; i++) {
      if (formData.get(`bp${i}`) === 'yes') bpScore++;
    }
    const pct = Math.round((bpScore / 10) * 100);

    // Determine tier and insights
    let tier: string, reveal: string, insights: string[], ctas: Array<{ label: string; href: string; primary: boolean }>;
    
    const CTA = {
      book: { label: "Book 1:1 Strategy Session", href: MEETING_URL, primary: true },
      dfy: { label: "Request SOW (Done-for-You)", href: "#", primary: false },
      council: { label: "Apply to Memento Council Dinner", href: "#", primary: true },
      playbook: { label: "Get the Free Playbook", href: "#", primary: true },
      workshop: { label: "Watch the Workshop", href: "#", primary: false }
    };

    const solution = formData.get('solution') as string;

    if (bpScore <= 4) {
      tier = 'cold';
      reveal = "Foundations first. Install a 90-day plan and a simple weekly scorecard before layering advanced AI plays.";
      insights = [
        "Pick 3–5 outcomes for the next 90 days with clear owners.",
        "Run a 45-minute weekly leadership meeting: commitments, not pontification.",
        "Launch a basic content + pipeline workflow; done is better than perfect."
      ];
      ctas = [CTA.playbook, CTA.workshop];
    } else if (bpScore <= 7) {
      tier = 'warm';
      reveal = "Strong signals, uneven cadence. Consistency and cleaner visibility will unlock compounding results.";
      insights = [
        "Publish a single cross-functional scorecard; review it weekly without fail.",
        "Tighten ICP → offer → messaging; ship 2 AI-assisted content pieces/week.",
        "Run a 30-day 'truth over politics' experiment: decisions require data, not titles."
      ];
      ctas = [CTA.council, CTA.playbook];
    } else {
      tier = 'hot';
      reveal = "Foundations in place. Press the advantage with AI-assisted GTM and leader-level accountability.";
      insights = [
        "Scale your AI content engine to a weekly publishing rhythm tied to pipeline.",
        "Instrument CRM hygiene alerts; no stage change without next action.",
        "Hold executive reviews focused on blockers, not status."
      ];
      ctas = [CTA.book, CTA.dfy];
    }

    const nextStep = (tier === 'hot' && (solution === '1:1 coaching with Chris' || solution === 'Done-for-you implementation'))
      ? "You're a strong fit for 1:1 work. Book a private session to lock your 90-day plan and cadence."
      : (tier !== 'cold' && (solution === 'Memento software + cadence' || solution === 'Education & training'))
      ? "Join a Memento Council dinner or workshop to experience the cadence, then activate the software + rituals."
      : "Start with the free playbook and video workshop. Implement the weekly scorecard, then revisit 1:1 or Council.";

    setResultData({ bpScore, pct, tier, reveal, insights, ctas, nextStep });
    setShowResults(true);

    // Get stored UTM
    let utm = {};
    try {
      utm = JSON.parse(localStorage.getItem('utm') || '{}');
    } catch (e) {}

    // Build payload
    const payload = {
      to_email: "info@torqueapp.ai",
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      weekly: formData.get('weekly'),
      bpScore,
      pct,
      tier,
      situation: formData.get('situation'),
      outcome: formData.get('outcome'),
      obstacle: formData.get('obstacle'),
      solution: formData.get('solution'),
      notes: formData.get('notes'),
      meeting_url: MEETING_URL,
      page: window.location.pathname + window.location.hash,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      source: "TorqueAI-Assessment",
      utm
    };

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
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{ 
              width: Math.random() * 6 + 2, 
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{ 
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <strong className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Torque AI
            </strong>
          </div>
          <div className="flex gap-3">
            {currentView === 'home' && (
              <Button 
                onClick={() => window.location.hash = '#/assessment'}
                variant="outline"
                className="border-primary/30 hover:border-primary/50"
              >
                Start Assessment
              </Button>
            )}
            <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg">
              <a href={MEETING_URL} target="_blank" rel="noopener">Meet With Us</a>
            </Button>
          </div>
        </nav>

        {/* HOME VIEW */}
        {currentView === 'home' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <section className="grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-center mb-16">
              <div>
                <motion.div 
                  className="text-sm font-bold text-primary uppercase tracking-wider mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  AI Strategy and Change at Scale
                </motion.div>
                <motion.h1 
                  className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Boards Are Replacing Leaders Who Can't Deliver
                </motion.h1>
                <motion.h2 
                  className="text-2xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Don't be next—lead with alignment.
                </motion.h2>
                <motion.p 
                  className="text-lg mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <strong className="text-accent">31%</strong> of CEOs lose their roles for failed transformation efforts.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-3 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                    $32M closed with AI-driven GTM
                  </span>
                  <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                    Founder: Torque AI & Memento
                  </span>
                  <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                    TV commentator & author
                  </span>
                </motion.div>

                <motion.div 
                  className="flex flex-wrap gap-3 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button 
                    onClick={() => window.location.hash = '#/assessment'}
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg text-base px-6 py-6"
                  >
                    Start the 3-minute assessment
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="border-border hover:border-primary/50 text-base px-6 py-6"
                  >
                    <a href={MEETING_URL} target="_blank" rel="noopener">Meet With Us</a>
                  </Button>
                </motion.div>
                
                <motion.p 
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  You'll get an instant score, three tailored insights, and the right next step.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 shadow-2xl">
                  <h3 className="text-xl font-bold mb-4">As Seen On</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['ABC', 'FOX News', 'Fox Business', 'Associated Press', 'CBS', 'Fortune', 'CNN', 'Sports Illustrated', 'TIME', 'Business Insider', 'Forbes'].map(logo => (
                      <span key={logo} className="px-3 py-1.5 rounded-lg bg-card/80 border border-border text-xs">
                        {logo}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-border pt-6">
                    <h3 className="text-xl font-bold mb-3">What Happens Next</h3>
                    <p className="text-sm text-muted-foreground">
                      Assess → Plan → Ship. We install a weekly operating rhythm, a single accountability scorecard, 
                      and practical AI plays that move pipeline.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>
          </motion.div>
        )}

        {/* ASSESSMENT VIEW */}
        {currentView === 'assessment' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-2xl"
          >
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
              className="text-sm text-primary hover:underline mb-4 inline-block"
            >
              ← Back to Home
            </a>
            
            <h2 className="text-3xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Clarity & Accountability Assessment
            </h2>
            <p className="text-muted-foreground mb-8">
              Takes ~3 minutes. Name + email first so we can send your score & recommendations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="font-bold">Full name *</Label>
                  <Input id="name" name="name" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email" className="font-bold">Work email *</Label>
                  <Input id="email" name="email" type="email" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone" className="font-bold">Mobile (optional)</Label>
                  <Input id="phone" name="phone" className="mt-2" />
                </div>
                <div>
                  <Label className="font-bold">Weekly commitment *</Label>
                  <div className="flex items-center gap-2 mt-3">
                    <Checkbox id="weekly" name="weekly" required />
                    <label htmlFor="weekly" className="text-sm">
                      I can commit to one 60–90 min session weekly for 12 weeks
                    </label>
                  </div>
                </div>
              </div>

              <div className="border-t border-border" />

              {/* Best Practices */}
              <div>
                <h3 className="text-xl font-bold mb-4">Best Practices (Yes/No)</h3>
                <div className="space-y-4">
                  {[
                    "We have 3–5 90-day outcomes with owners & metrics.",
                    "We run a weekly leadership meeting focused on commitments, not politics.",
                    "Our ICP, offers, and pricing are documented and current.",
                    "A simple accountability scorecard tracks weekly leading indicators.",
                    "We publish consistent, useful content powered by AI workflows.",
                    "Our CRM is clean; pipeline stages are trusted and reviewed weekly.",
                    "We have AI-assisted research and outreach sequences live now.",
                    "Team feedback loops are safe and honest (truth over politics).",
                    "We run post-mortems and publish 'one thing we learned' every sprint.",
                    "Leadership models the behavior: commitments made = commitments kept."
                  ].map((question, idx) => (
                    <div key={idx} className="bg-card/30 p-4 rounded-lg">
                      <div className="mb-2 font-medium">{idx + 1}) {question}</div>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input type="radio" name={`bp${idx + 1}`} value="yes" required />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name={`bp${idx + 1}`} value="no" />
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border" />

              {/* Big Five */}
              <div>
                <h3 className="text-xl font-bold mb-4">Tell me where you are and where you're going</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="situation" className="font-bold">11) Your current role</Label>
                    <select id="situation" name="situation" required className="w-full mt-2 px-3 py-2 rounded-lg bg-background border border-border">
                      <option value="">Choose one…</option>
                      <option>Founder/Owner</option>
                      <option>C-suite executive</option>
                      <option>VP/Head of</option>
                      <option>Director/Manager</option>
                      <option>Solo consultant/Coach</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="outcome" className="font-bold">12) Most important 90-day outcome</Label>
                    <select id="outcome" name="outcome" required className="w-full mt-2 px-3 py-2 rounded-lg bg-background border border-border">
                      <option value="">Choose one…</option>
                      <option>Install weekly operating rhythm that sticks</option>
                      <option>Stand up AI-powered content & pipeline engine</option>
                      <option>Refactor ICP/offers/messaging to convert</option>
                      <option>Executive coaching for accountability & truth</option>
                      <option>Team offsite to align & commit</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="obstacle" className="font-bold">13) Biggest obstacle today</Label>
                    <select id="obstacle" name="obstacle" required className="w-full mt-2 px-3 py-2 rounded-lg bg-background border border-border">
                      <option value="">Choose one…</option>
                      <option>Misaligned leadership / politics</option>
                      <option>No clear 90-day plan / priorities</option>
                      <option>Inconsistent execution / no scorecard</option>
                      <option>Weak content engine / top-of-funnel</option>
                      <option>Data/CRM hygiene & visibility</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="solution" className="font-bold">14) Preferred solution</Label>
                    <select id="solution" name="solution" required className="w-full mt-2 px-3 py-2 rounded-lg bg-background border border-border">
                      <option value="">Choose one…</option>
                      <option>Education & training</option>
                      <option>1:1 coaching with Chris</option>
                      <option>Memento software + cadence</option>
                      <option>Done-for-you implementation</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">
                      Signals budget & appetite: "Done-for-you" implies highest investment.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Label htmlFor="notes" className="font-bold">15) Anything else I should know?</Label>
                  <textarea 
                    id="notes" 
                    name="notes" 
                    rows={3} 
                    className="w-full mt-2 px-3 py-2 rounded-lg bg-background border border-border"
                    placeholder="Deadlines, budget timing, constraints, who's involved…"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 items-center pt-4">
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg px-8 py-6 text-base"
                >
                  See my score & next step
                </Button>
                <span className="text-sm text-muted-foreground">~3 minutes • Instant results</span>
              </div>
            </form>

            {/* RESULTS */}
            {showResults && resultData && (
              <motion.div
                id="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 pt-8 border-t border-border"
              >
                <h3 className="text-2xl font-bold mb-4">Your Dynamic Results</h3>
                
                {/* Score meter */}
                <div className="h-4 bg-card rounded-full overflow-hidden border border-border mb-2">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${resultData.pct}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Best-practice score: {resultData.bpScore}/10 ({resultData.pct}%) — tier: {resultData.tier.toUpperCase()}
                </p>

                {/* Big Reveal */}
                <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-6 mb-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3">Big Reveal</h3>
                  <p>{resultData.reveal}</p>
                </div>

                {/* Insights */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {resultData.insights.map((insight, idx) => (
                    <div key={idx} className="bg-card/30 border border-border rounded-xl p-4">
                      <strong className="block mb-2">Insight #{idx + 1}</strong>
                      <p className="text-sm text-muted-foreground">{insight}</p>
                    </div>
                  ))}
                </div>

                {/* Next Step */}
                <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-6 mb-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3">Recommended next step</h3>
                  <p className="text-muted-foreground mb-4">{resultData.nextStep}</p>
                  <div className="flex flex-wrap gap-3">
                    {resultData.ctas.map((cta, idx) => (
                      <Button
                        key={idx}
                        asChild
                        className={cta.primary ? "bg-gradient-to-r from-primary to-accent hover:opacity-90" : ""}
                        variant={cta.primary ? "default" : "outline"}
                      >
                        <a href={cta.href} target="_blank" rel="noopener">{cta.label}</a>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Offers */}
                <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-6">Work with Chris</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <strong className="block mb-2">90-Minute Diagnostic</strong>
                      <p className="text-sm text-muted-foreground mb-3">
                        Scorecard review, 90-day plan, weekly cadence template.
                      </p>
                      <p className="font-bold mb-3">$1,500 <span className="text-xs font-normal">(creditable within 7 days)</span></p>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={MEETING_URL} target="_blank" rel="noopener">Book Diagnostic</a>
                      </Button>
                    </div>
                    <div>
                      <strong className="block mb-2">90-Day Operating Rhythm</strong>
                      <p className="text-sm text-muted-foreground mb-3">
                        Weekly commits, single scorecard, AI content+pipeline starter.
                      </p>
                      <p className="font-bold mb-3">$9,000 <span className="text-xs font-normal">(or $3,000/mo)</span></p>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={MEETING_URL} target="_blank" rel="noopener">Discuss 90-Day</a>
                      </Button>
                    </div>
                    <div>
                      <strong className="block mb-2">Done-for-You 30-Day Sprint</strong>
                      <p className="text-sm text-muted-foreground mb-3">
                        Publish engine, outreach sequences, CRM hygiene, leadership cadence.
                      </p>
                      <p className="font-bold mb-3">$25,000</p>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={MEETING_URL} target="_blank" rel="noopener">Request SOW</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
