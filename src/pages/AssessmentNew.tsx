import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

const MEETING_URL = "https://calendar.app.google/sgsqiUz4hW6NqKm68";
const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/18931428/urxvjm2/";

type Audience = 'enterprise' | 'founders';
type View = 'chooser' | 'enterprise' | 'founders' | 'assessment';

export default function Assessment() {
  const [currentView, setCurrentView] = useState<View>('chooser');
  const [audience, setAudience] = useState<Audience>('enterprise');
  const [showResults, setShowResults] = useState(false);
  const [resultData, setResultData] = useState<any>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === '/enterprise') { setCurrentView('enterprise'); setAudience('enterprise'); }
      else if (hash === '/founders') { setCurrentView('founders'); setAudience('founders'); }
      else if (hash === '/assessment') setCurrentView('assessment');
      else setCurrentView('chooser');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!formData.get('weekly')) {
      alert("Please confirm weekly commitment");
      return;
    }

    let bpScore = 0;
    for (let i = 1; i <= 10; i++) {
      if (formData.get(`bp${i}`) === 'yes') bpScore++;
    }
    const pct = Math.round((bpScore / 10) * 100);

    setResultData({ bpScore, pct });
    setShowResults(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bpScore, pct, audience })
      });
    } catch (e) {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{ width: Math.random() * 4 + 2, height: Math.random() * 4 + 2 }}
            initial={{ x: Math.random() * 1000, y: Math.random() * 1000, opacity: 0 }}
            animate={{ y: [null, Math.random() * 1000], x: [null, Math.random() * 1000], opacity: [0, 0.6, 0] }}
            transition={{ duration: Math.random() * 15 + 15, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <nav className="flex items-center justify-between mb-12 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <strong className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Torque AI</strong>
          </div>
          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <a href={MEETING_URL} target="_blank" rel="noopener">Meet With Us</a>
          </Button>
        </nav>

        {currentView === 'chooser' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="gradient-text">Make AI deliver • 90 days</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">Choose your path</h2>
            <p className="text-muted-foreground text-lg mb-8">Pick the one that fits you best.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.a href="#/enterprise" className="group bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all no-underline" whileHover={{ y: -4 }}>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">For Enterprise Leaders</h3>
                <p className="text-muted-foreground mb-6">Ship AI outcomes with truth over politics.</p>
                <Button className="w-full bg-gradient-to-r from-primary to-accent">See enterprise path →</Button>
              </motion.a>

              <motion.a href="#/founders" className="group bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 hover:border-accent/50 transition-all no-underline" whileHover={{ y: -4 }}>
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">For Founders</h3>
                <p className="text-muted-foreground mb-6">Create content that sells and pipeline that moves.</p>
                <Button className="w-full bg-gradient-to-r from-accent to-primary">See founder path →</Button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
