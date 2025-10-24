import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, FormEvent, useEffect } from "react";
import { toast } from "sonner";
import torqueLogo from "@/assets/torque-ai-logo.png";

const Index = () => {
  const [view, setView] = useState<'home' | 'assessment'>('home');
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [tier, setTier] = useState<'cold' | 'warm' | 'hot'>('cold');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weekly: false,
    bp1: '', bp2: '', bp3: '', bp4: '', bp5: '', bp6: '', bp7: '', bp8: '', bp9: '', bp10: '',
    situation: '',
    outcome: '',
    obstacle: '',
    solution: '',
    notes: ''
  });
  
  const MEETING_URL = "https://calendar.app.google/ggDwHhM8VExNxGki8";
  const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/18931428/urxvjm2/";

  // UTM tracking
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(key => {
      const value = params.get(key);
      if (value) utm[key] = value;
    });
    if (Object.keys(utm).length > 0) {
      try {
        localStorage.setItem('utm', JSON.stringify(utm));
      } catch (e) {
        console.error('UTM storage error:', e);
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.weekly) {
      toast.error("This coaching requires a weekly 60–90 min session. Please confirm the commitment to proceed.");
      return;
    }

    // Calculate score
    const bpScore = [
      formData.bp1, formData.bp2, formData.bp3, formData.bp4, formData.bp5,
      formData.bp6, formData.bp7, formData.bp8, formData.bp9, formData.bp10
    ].filter(val => val === 'yes').length;

    const pct = Math.round((bpScore / 10) * 100);
    let newTier: 'cold' | 'warm' | 'hot' = 'cold';
    
    if (bpScore <= 4) newTier = 'cold';
    else if (bpScore <= 7) newTier = 'warm';
    else newTier = 'hot';

    setScore(bpScore);
    setTier(newTier);
    setShowResults(true);

    // Get stored UTM
    let utm = {};
    try {
      utm = JSON.parse(localStorage.getItem('utm') || '{}');
    } catch (e) {
      console.error('UTM retrieval error:', e);
    }

    // Send to Zapier
    const payload = {
      to_email: "info@torqueapp.ai",
      ...formData,
      bpScore,
      pct,
      tier: newTier,
      meeting_url: MEETING_URL,
      page: window.location.pathname,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      source: "TorqueAI-Assessment",
      utm
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      console.log("Lead delivered to Zapier");
    } catch (error) {
      console.error("Zapier delivery error", error);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getReveal = () => {
    if (tier === 'cold') return "Foundations first. Install a 90-day plan and a simple weekly scorecard before layering advanced AI plays.";
    if (tier === 'warm') return "Strong signals, uneven cadence. Consistency and cleaner visibility will unlock compounding results.";
    return "Foundations in place. Press the advantage with AI-assisted GTM and leader-level accountability.";
  };

  const getInsights = () => {
    if (tier === 'cold') return [
      "Pick 3–5 outcomes for the next 90 days with clear owners.",
      "Run a 45-minute weekly leadership meeting: commitments, not pontification.",
      "Launch a basic content + pipeline workflow; done is better than perfect."
    ];
    if (tier === 'warm') return [
      "Publish a single cross-functional scorecard; review it weekly without fail.",
      "Tighten ICP → offer → messaging; ship 2 AI-assisted content pieces/week.",
      "Run a 30-day 'truth over politics' experiment: decisions require data, not titles."
    ];
    return [
      "Scale your AI content engine to a weekly publishing rhythm tied to pipeline.",
      "Instrument CRM hygiene alerts; no stage change without next action.",
      "Hold executive reviews focused on blockers, not status."
    ];
  };

  const getNextStep = () => {
    if (tier === 'hot' && (formData.solution === '1:1 coaching with Chris' || formData.solution === 'Done-for-you implementation')) {
      return "You're a strong fit for 1:1 work. Book a private session to lock your 90-day plan and cadence.";
    }
    if (tier !== 'cold' && (formData.solution === 'Memento software + cadence' || formData.solution === 'Education & training')) {
      return "Join a Memento Council dinner or workshop to experience the cadence, then activate the software + rituals.";
    }
    return "Start with the free playbook and video workshop. Implement the weekly scorecard, then revisit 1:1 or Council.";
  };

  if (view === 'assessment') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Nav */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <img src={torqueLogo} alt="Torque AI" className="h-8 rounded" />
              <span className="text-white font-bold text-lg">Torque AI</span>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setView('home')}
                className="bg-transparent border-slate-700 text-white hover:bg-slate-800"
              >
                ← Back to Home
              </Button>
              <Button 
                onClick={() => window.open(MEETING_URL, '_blank')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                Meet With Us
              </Button>
            </div>
          </div>

          {!showResults ? (
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Clarity & Accountability Assessment</h2>
                <p className="text-slate-400 mb-8">Takes ~3 minutes. Name + email first so we can send your score & recommendations.</p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white font-semibold">Full name *</Label>
                      <Input 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-slate-950 border-slate-700 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white font-semibold">Work email *</Label>
                      <Input 
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-slate-950 border-slate-700 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white font-semibold">Mobile (optional)</Label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-slate-950 border-slate-700 text-white"
                      />
                    </div>
                    <div className="flex items-center gap-3 pt-6">
                      <Checkbox 
                        required
                        checked={formData.weekly}
                        onCheckedChange={(checked) => setFormData({...formData, weekly: checked as boolean})}
                        className="border-slate-600"
                      />
                      <Label className="text-white">I can commit to one 60–90 min session weekly for 12 weeks *</Label>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Best Practices (Yes/No)</h3>
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
                        "We run post-mortems and publish \"one thing we learned\" every sprint.",
                        "Leadership models the behavior: commitments made = commitments kept."
                      ].map((q, i) => (
                        <div key={i} className="bg-slate-950 p-4 rounded-lg">
                          <p className="text-white mb-2">{i + 1}) {q}</p>
                          <div className="flex gap-4">
                            <label className="flex items-center gap-2 text-white">
                              <input 
                                type="radio" 
                                required
                                name={`bp${i + 1}`}
                                value="yes"
                                checked={formData[`bp${i + 1}` as keyof typeof formData] === 'yes'}
                                onChange={(e) => setFormData({...formData, [`bp${i + 1}`]: e.target.value})}
                                className="text-blue-600"
                              />
                              Yes
                            </label>
                            <label className="flex items-center gap-2 text-white">
                              <input 
                                type="radio" 
                                name={`bp${i + 1}`}
                                value="no"
                                checked={formData[`bp${i + 1}` as keyof typeof formData] === 'no'}
                                onChange={(e) => setFormData({...formData, [`bp${i + 1}`]: e.target.value})}
                                className="text-blue-600"
                              />
                              No
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Tell me where you are and where you're going</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white font-semibold">11) Your current role</Label>
                        <Select required value={formData.situation} onValueChange={(v) => setFormData({...formData, situation: v})}>
                          <SelectTrigger className="bg-slate-950 border-slate-700 text-white">
                            <SelectValue placeholder="Choose one…" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Founder/Owner">Founder/Owner</SelectItem>
                            <SelectItem value="C-suite executive">C-suite executive</SelectItem>
                            <SelectItem value="VP/Head of">VP/Head of</SelectItem>
                            <SelectItem value="Director/Manager">Director/Manager</SelectItem>
                            <SelectItem value="Solo consultant/Coach">Solo consultant/Coach</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white font-semibold">12) Most important 90-day outcome</Label>
                        <Select required value={formData.outcome} onValueChange={(v) => setFormData({...formData, outcome: v})}>
                          <SelectTrigger className="bg-slate-950 border-slate-700 text-white">
                            <SelectValue placeholder="Choose one…" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Install weekly operating rhythm that sticks">Install weekly operating rhythm that sticks</SelectItem>
                            <SelectItem value="Stand up AI-powered content & pipeline engine">Stand up AI-powered content & pipeline engine</SelectItem>
                            <SelectItem value="Refactor ICP/offers/messaging to convert">Refactor ICP/offers/messaging to convert</SelectItem>
                            <SelectItem value="Executive coaching for accountability & truth">Executive coaching for accountability & truth</SelectItem>
                            <SelectItem value="Team offsite to align & commit">Team offsite to align & commit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white font-semibold">13) Biggest obstacle today</Label>
                        <Select required value={formData.obstacle} onValueChange={(v) => setFormData({...formData, obstacle: v})}>
                          <SelectTrigger className="bg-slate-950 border-slate-700 text-white">
                            <SelectValue placeholder="Choose one…" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Misaligned leadership / politics">Misaligned leadership / politics</SelectItem>
                            <SelectItem value="No clear 90-day plan / priorities">No clear 90-day plan / priorities</SelectItem>
                            <SelectItem value="Inconsistent execution / no scorecard">Inconsistent execution / no scorecard</SelectItem>
                            <SelectItem value="Weak content engine / top-of-funnel">Weak content engine / top-of-funnel</SelectItem>
                            <SelectItem value="Data/CRM hygiene & visibility">Data/CRM hygiene & visibility</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white font-semibold">14) Preferred solution</Label>
                        <Select required value={formData.solution} onValueChange={(v) => setFormData({...formData, solution: v})}>
                          <SelectTrigger className="bg-slate-950 border-slate-700 text-white">
                            <SelectValue placeholder="Choose one…" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Education & training">Education & training</SelectItem>
                            <SelectItem value="1:1 coaching with Chris">1:1 coaching with Chris</SelectItem>
                            <SelectItem value="Memento software + cadence">Memento software + cadence</SelectItem>
                            <SelectItem value="Done-for-you implementation">Done-for-you implementation</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-slate-400 mt-1">Signals budget & appetite: "Done-for-you" implies highest investment.</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label className="text-white font-semibold">15) Anything else I should know?</Label>
                      <Textarea 
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        placeholder="Deadlines, budget timing, constraints, who's involved…"
                        rows={3}
                        className="bg-slate-950 border-slate-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg"
                    >
                      See my score & next step
                    </Button>
                    <span className="text-slate-400">~3 minutes • Instant results</span>
                  </div>
                </form>
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Your Dynamic Results</h3>
                  <div className="h-6 bg-slate-950 border border-slate-700 rounded-full overflow-hidden mb-2">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-1000"
                      style={{ width: `${(score / 10) * 100}%` }}
                    />
                  </div>
                  <p className="text-slate-300">
                    Best-practice score: {score}/10 ({Math.round((score / 10) * 100)}%) — tier: {tier.toUpperCase()}
                  </p>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Big Reveal</h3>
                  <p className="text-slate-200 text-lg">{getReveal()}</p>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-4">
                {getInsights().map((insight, i) => (
                  <Card key={i} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
                    <div className="p-6">
                      <strong className="text-white text-lg">Insight #{i + 1}</strong>
                      <p className="text-slate-300 mt-2">{insight}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Recommended next step</h3>
                  <p className="text-slate-200 mb-6">{getNextStep()}</p>
                  <div className="flex gap-4">
                    <Button 
                      onClick={() => window.open(MEETING_URL, '_blank')}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                    >
                      Book 1:1 Strategy Session
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Work with Chris</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-950 p-6 rounded-lg">
                      <strong className="text-white text-xl block mb-2">90-Minute Diagnostic</strong>
                      <p className="text-slate-300 text-sm mb-4">Scorecard review, 90-day plan, weekly cadence template.</p>
                      <p className="text-white font-bold mb-4">$1,500 <span className="text-sm text-slate-400">(creditable within 7 days)</span></p>
                      <Button 
                        variant="outline"
                        onClick={() => window.open(MEETING_URL, '_blank')}
                        className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-800"
                      >
                        Book Diagnostic
                      </Button>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-lg">
                      <strong className="text-white text-xl block mb-2">90-Day Operating Rhythm</strong>
                      <p className="text-slate-300 text-sm mb-4">Weekly commits, single scorecard, AI content+pipeline starter.</p>
                      <p className="text-white font-bold mb-4">$9,000 <span className="text-sm text-slate-400">(or $3,000/mo)</span></p>
                      <Button 
                        variant="outline"
                        onClick={() => window.open(MEETING_URL, '_blank')}
                        className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-800"
                      >
                        Discuss 90-Day
                      </Button>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-lg">
                      <strong className="text-white text-xl block mb-2">Done-for-You 30-Day Sprint</strong>
                      <p className="text-slate-300 text-sm mb-4">Publish engine, outreach sequences, CRM hygiene, leadership cadence.</p>
                      <p className="text-white font-bold mb-4">$25,000</p>
                      <Button 
                        variant="outline"
                        onClick={() => window.open(MEETING_URL, '_blank')}
                        className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-800"
                      >
                        Request SOW
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Home View
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Nav */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <img src={torqueLogo} alt="Torque AI" className="h-8 rounded" />
            <span className="text-white font-bold text-lg">Torque AI</span>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => setView('assessment')}
              className="bg-transparent border-slate-700 text-white hover:bg-slate-800"
            >
              Start Assessment
            </Button>
            <Button 
              onClick={() => window.open(MEETING_URL, '_blank')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              Meet With Us
            </Button>
          </div>
        </div>

        {/* Hero */}
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-center mb-20">
          <div>
            <div className="text-cyan-400 font-bold uppercase tracking-wider text-sm mb-4">
              AI Strategy and Change at Scale
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
              Boards are replacing leaders who can't make AI deliver.
            </h1>
            <h2 className="text-2xl font-bold text-white mb-4">
              Install a weekly operating rhythm that turns AI talk into revenue, accountability, and momentum in 90 days.
            </h2>
            <p className="text-slate-300 mb-6">
              <strong>31%</strong> of CEOs lose their roles for failed transformation. Don't be next—lead with alignment.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-slate-900 border border-slate-700 text-slate-300 px-3 py-2 rounded-full text-sm">
                $32M closed with AI-driven GTM
              </span>
              <span className="bg-slate-900 border border-slate-700 text-slate-300 px-3 py-2 rounded-full text-sm">
                Founder: Torque AI & Memento
              </span>
              <span className="bg-slate-900 border border-slate-700 text-slate-300 px-3 py-2 rounded-full text-sm">
                TV commentator & author
              </span>
              <span className="bg-slate-900 border border-slate-700 text-slate-300 px-3 py-2 rounded-full text-sm">
                AI Summit NYC
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => setView('assessment')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg"
              >
                Start the 3-minute assessment
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(MEETING_URL, '_blank')}
                className="bg-transparent border-slate-700 text-white hover:bg-slate-800 px-8 py-6 text-lg"
              >
                Meet With Us
              </Button>
            </div>
            <p className="text-sm text-slate-400 mt-3">
              It's free. You'll see your score and recommendations instantly.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
            <div className="p-6 border-b border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">What you'll improve</h3>
              <div className="space-y-3">
                <p className="text-slate-200">
                  <strong>Strategy Clarity</strong> — 90-day outcomes, ICP, offers, and proof that convert.
                </p>
                <p className="text-slate-200">
                  <strong>Operating Rhythm</strong> — Weekly commitments, scorecards, and "truth over politics."
                </p>
                <p className="text-slate-200">
                  <strong>AI Leverage</strong> — Content engine, pipeline automation, and insight→action loops.
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">As seen on</h3>
              <div className="flex flex-wrap gap-2">
                {['ABC', 'FOX News', 'Fox Business', 'Associated Press', 'CBS', 'Fortune', 'CNN', 'Sports Illustrated', 'TIME', 'Business Insider', 'Forbes'].map((logo) => (
                  <span key={logo} className="bg-slate-950 border border-slate-800 text-cyan-300 px-3 py-1 rounded text-xs">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;