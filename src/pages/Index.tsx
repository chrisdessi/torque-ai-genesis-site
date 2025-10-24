import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
      toast.success("Assessment submitted successfully!");
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
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Assessment Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900/50 to-blue-950/50 gradient-animate"></div>
          </div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-[float_8s_ease-in-out_infinite]"></div>
          
          <div className="section-padding max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Clarity & Accountability Assessment</h1>
              <p className="text-xl text-white/90 mb-8">Takes ~3 minutes. Discover your score and personalized roadmap.</p>
              <Button 
                variant="outline"
                onClick={() => setView('home')}
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30"
              >
                ← Back to Home
              </Button>
            </motion.div>
          </div>
        </section>

        {!showResults ? (
          <section className="bg-white py-16">
            <div className="section-padding max-w-5xl mx-auto">
              <motion.div {...fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-2xl">
                  <div className="p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-10">
                      {/* Contact Info */}
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Information</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label className="text-slate-900 font-semibold text-base">Full name *</Label>
                            <Input 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="mt-2 h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <Label className="text-slate-900 font-semibold text-base">Work email *</Label>
                            <Input 
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="mt-2 h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <Label className="text-slate-900 font-semibold text-base">Mobile (optional)</Label>
                            <Input 
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="mt-2 h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          <div className="flex items-center gap-3 pt-6">
                            <Checkbox 
                              required
                              checked={formData.weekly}
                              onCheckedChange={(checked) => setFormData({...formData, weekly: checked as boolean})}
                              className="border-slate-400 data-[state=checked]:bg-blue-600"
                            />
                            <Label className="text-slate-700">I can commit to one 60–90 min session weekly for 12 weeks *</Label>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-slate-200 pt-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Best Practices Assessment</h3>
                        <p className="text-slate-600 mb-6">Answer honestly - this helps us provide the most relevant recommendations.</p>
                        <div className="space-y-5">
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
                            <motion.div 
                              key={i} 
                              {...fadeInUp}
                              transition={{ delay: i * 0.05 }}
                              className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
                            >
                              <p className="text-slate-900 font-medium mb-3">{i + 1}) {q}</p>
                              <div className="flex gap-6">
                                <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                                  <input 
                                    type="radio" 
                                    required
                                    name={`bp${i + 1}`}
                                    value="yes"
                                    checked={formData[`bp${i + 1}` as keyof typeof formData] === 'yes'}
                                    onChange={(e) => setFormData({...formData, [`bp${i + 1}`]: e.target.value})}
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                  />
                                  <span className="font-medium">Yes</span>
                                </label>
                                <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                                  <input 
                                    type="radio" 
                                    name={`bp${i + 1}`}
                                    value="no"
                                    checked={formData[`bp${i + 1}` as keyof typeof formData] === 'no'}
                                    onChange={(e) => setFormData({...formData, [`bp${i + 1}`]: e.target.value})}
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                  />
                                  <span className="font-medium">No</span>
                                </label>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-slate-200 pt-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Goals & Challenges</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label className="text-slate-900 font-semibold text-base">11) Your current role *</Label>
                            <Select required value={formData.situation} onValueChange={(v) => setFormData({...formData, situation: v})}>
                              <SelectTrigger className="mt-2 h-12 text-base border-slate-300">
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
                            <Label className="text-slate-900 font-semibold text-base">12) Most important 90-day outcome *</Label>
                            <Select required value={formData.outcome} onValueChange={(v) => setFormData({...formData, outcome: v})}>
                              <SelectTrigger className="mt-2 h-12 text-base border-slate-300">
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
                            <Label className="text-slate-900 font-semibold text-base">13) Biggest obstacle today *</Label>
                            <Select required value={formData.obstacle} onValueChange={(v) => setFormData({...formData, obstacle: v})}>
                              <SelectTrigger className="mt-2 h-12 text-base border-slate-300">
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
                            <Label className="text-slate-900 font-semibold text-base">14) Preferred solution *</Label>
                            <Select required value={formData.solution} onValueChange={(v) => setFormData({...formData, solution: v})}>
                              <SelectTrigger className="mt-2 h-12 text-base border-slate-300">
                                <SelectValue placeholder="Choose one…" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Education & training">Education & training</SelectItem>
                                <SelectItem value="1:1 coaching with Chris">1:1 coaching with Chris</SelectItem>
                                <SelectItem value="Memento software + cadence">Memento software + cadence</SelectItem>
                                <SelectItem value="Done-for-you implementation">Done-for-you implementation</SelectItem>
                              </SelectContent>
                            </Select>
                            <p className="text-xs text-slate-500 mt-2">Signals budget & appetite: "Done-for-you" implies highest investment.</p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Label className="text-slate-900 font-semibold text-base">15) Anything else I should know?</Label>
                          <Textarea 
                            value={formData.notes}
                            onChange={(e) => setFormData({...formData, notes: e.target.value})}
                            placeholder="Deadlines, budget timing, constraints, who's involved…"
                            rows={4}
                            className="mt-2 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6 items-center pt-6">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            type="submit"
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-7 text-lg font-semibold shadow-2xl shadow-blue-500/30"
                          >
                            See my score & next step
                          </Button>
                        </motion.div>
                        <span className="text-slate-600">~3 minutes • Instant results</span>
                      </div>
                    </form>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
        ) : (
          <section className="bg-white py-16">
            <div className="section-padding max-w-6xl mx-auto space-y-8">
              <motion.div {...fadeInUp}>
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-2xl">
                  <div className="p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Your Dynamic Results</h3>
                    <div className="h-8 bg-slate-200 border-2 border-slate-300 rounded-full overflow-hidden mb-3">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${(score / 10) * 100}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-lg text-slate-700">
                      Best-practice score: <span className="font-bold text-2xl">{score}/10</span> ({Math.round((score / 10) * 100)}%) — tier: <span className="font-bold text-blue-600">{tier.toUpperCase()}</span>
                    </p>
                  </div>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Big Reveal</h3>
                    <p className="text-xl text-slate-700 leading-relaxed">{getReveal()}</p>
                  </div>
                </Card>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {getInsights().map((insight, i) => (
                  <motion.div 
                    key={i} 
                    {...fadeInUp} 
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow h-full">
                      <div className="p-6">
                        <strong className="text-blue-600 text-xl block mb-3">Insight #{i + 1}</strong>
                        <p className="text-slate-700 leading-relaxed">{insight}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-xl">
                  <div className="p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Recommended Next Step</h3>
                    <p className="text-xl text-slate-700 mb-8 leading-relaxed">{getNextStep()}</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="lg"
                        onClick={() => window.open(MEETING_URL, '_blank')}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg font-semibold shadow-2xl shadow-blue-500/30"
                      >
                        Book 1:1 Strategy Session
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.7 }}>
                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 shadow-2xl">
                  <div className="p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-white mb-8">Work with Chris</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "90-Minute Diagnostic",
                          desc: "Scorecard review, 90-day plan, weekly cadence template.",
                          price: "$1,500",
                          note: "(creditable within 7 days)",
                          cta: "Book Diagnostic"
                        },
                        {
                          title: "90-Day Operating Rhythm",
                          desc: "Weekly commits, single scorecard, AI content+pipeline starter.",
                          price: "$9,000",
                          note: "(or $3,000/mo)",
                          cta: "Discuss 90-Day"
                        },
                        {
                          title: "Done-for-You 30-Day Sprint",
                          desc: "Publish engine, outreach sequences, CRM hygiene, leadership cadence.",
                          price: "$25,000",
                          note: "",
                          cta: "Request SOW"
                        }
                      ].map((offer, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -5 }}
                          className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border-2 border-slate-700 hover:border-blue-500 transition-all"
                        >
                          <strong className="text-white text-xl block mb-3">{offer.title}</strong>
                          <p className="text-slate-300 text-sm mb-4 min-h-[60px]">{offer.desc}</p>
                          <p className="text-white font-bold text-2xl mb-1">{offer.price}</p>
                          {offer.note && <p className="text-sm text-slate-400 mb-6">{offer.note}</p>}
                          <Button 
                            variant="outline"
                            onClick={() => window.open(MEETING_URL, '_blank')}
                            className="w-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/30"
                          >
                            {offer.cta}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    );
  }

  // Home View
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900/50 to-blue-950/50 gradient-animate"></div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-950 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-[float_7s_ease-in-out_infinite]"></div>
        
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-white/95 mb-2">Boards are replacing leaders who</span>
              <span className="block text-cyan-400 font-black text-6xl md:text-7xl lg:text-8xl mb-4">
                can't make AI deliver.
              </span>
            </motion.h1>
            
            <motion.div
              className="bg-black/40 backdrop-blur-sm border-2 border-cyan-500/40 rounded-2xl p-8 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
                Install a weekly operating rhythm that turns AI talk into revenue, accountability, and momentum in 90 days.
              </p>
              <p className="text-xl text-white/90">
                <span className="text-cyan-400 text-4xl font-black">31%</span> of CEOs lose their roles for failed transformation. Don't be next—<span className="text-cyan-400 font-black">lead with alignment</span>.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3 justify-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm">
                $32M closed with AI-driven GTM
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm">
                Founder: Torque AI & Memento
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm">
                TV commentator & author
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm">
                AI Summit NYC
              </span>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-7 text-lg shadow-2xl shadow-cyan-500/30"
                  onClick={() => setView('assessment')}
                >
                  Start the 3-minute assessment
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-7 text-lg border-2 border-white/30"
                  onClick={() => window.open(MEETING_URL, '_blank')}
                >
                  Meet With Us
                </Button>
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-sm text-white/70 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              It's free. You'll see your score and recommendations instantly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What You'll Improve */}
      <section className="bg-white py-24">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              What You'll Improve
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy Clarity",
                desc: "90-day outcomes, ICP, offers, and proof that convert."
              },
              {
                title: "Operating Rhythm",
                desc: "Weekly commitments, scorecards, and \"truth over politics.\""
              },
              {
                title: "AI Leverage",
                desc: "Content engine, pipeline automation, and insight→action loops."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all shadow-lg hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-lg text-slate-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen On */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-24 border-y border-slate-200">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h3 className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">As Seen On</h3>
          </motion.div>
          <motion.div {...fadeInUp} className="flex flex-wrap gap-4 justify-center">
            {['ABC', 'FOX News', 'Fox Business', 'Associated Press', 'CBS', 'Fortune', 'CNN', 'Sports Illustrated', 'TIME', 'Business Insider', 'Forbes'].map((logo, i) => (
              <motion.span 
                key={logo}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white border-2 border-slate-200 hover:border-blue-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all"
              >
                {logo}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;