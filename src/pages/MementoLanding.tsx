import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const MementoLanding = () => {
  const [slotsRemaining, setSlotsRemaining] = useState(5);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const key = 'memento_slots_remaining_qtr';
    const stored = localStorage.getItem(key);
    if (stored) {
      setSlotsRemaining(parseInt(stored, 10));
    }
  }, []);

  const handleBookClick = () => {
    if (slotsRemaining > 1) {
      const newCount = slotsRemaining - 1;
      setSlotsRemaining(newCount);
      localStorage.setItem('memento_slots_remaining_qtr', String(newCount));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "" });
    toast({
      title: "Success!",
      description: "The sample report is on its way to your inbox.",
    });
  };

  return (
    <div className="bg-black text-gray-100 antialiased min-h-screen">
      {/* Sticky Book Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white text-black py-3 px-4 flex items-center justify-between z-40 shadow-lg">
        <div className="text-sm md:text-base font-medium">Leadership clarity in 15 minutes. Book your briefing.</div>
        <a href="#book" onClick={handleBookClick}>
          <Button className="bg-black text-white hover:bg-gray-800">Book Your Briefing</Button>
        </a>
      </div>

      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-white"></div>
            <span className="font-semibold tracking-tight">Memento</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#proof" className="hover:text-white/80 transition-colors">How it works</a>
            <a href="#brief" className="hover:text-white/80 transition-colors">Sample report</a>
            <a href="#offer" className="hover:text-white/80 transition-colors">Pilot program</a>
            <a href="#founder" className="hover:text-white/80 transition-colors">Founder</a>
          </nav>
          <a href="#book" onClick={handleBookClick}>
            <Button className="bg-white text-black hover:bg-gray-100">Book Now</Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Every company tracks revenue.<br className="hidden md:block" />Almost none measure how fast they decide.
            </h1>
            <p className="mt-5 text-gray-300 text-lg">
              Memento shows where clarity breaks down and what to do this week—without reading private messages.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a href="#book" onClick={handleBookClick}>
                <Button className="bg-white text-black hover:bg-gray-100 px-5 py-3">Book Your 15-Minute Briefing</Button>
              </a>
              <a href="#brief">
                <Button variant="outline" className="px-5 py-3 border-white/20 text-white hover:bg-white/10">See Sample Report</Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
              <span className="border border-white/20 px-3 py-1.5 rounded-lg">Privacy-First</span>
              <span className="border border-white/20 px-3 py-1.5 rounded-lg">First report in 14 days</span>
              <span className="border border-white/20 px-3 py-1.5 rounded-lg">Three actions per week</span>
            </div>
          </div>
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-medium mb-3">Leadership Health (example)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-xs text-gray-400">Clarity Lag</p>
                <p className="text-2xl font-semibold">16.8 days</p>
                <p className="text-xs text-green-400 mt-1">Improved 2.2 days</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-xs text-gray-400">Cross-Team Response</p>
                <p className="text-2xl font-semibold">12.1 hours</p>
                <p className="text-xs text-yellow-300 mt-1">Slightly slower</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-xs text-gray-400">Decision Entropy</p>
                <p className="text-2xl font-semibold">23%</p>
                <p className="text-xs text-green-400 mt-1">Better</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-xs text-gray-400">Meeting Load</p>
                <p className="text-2xl font-semibold">0.33</p>
                <p className="text-xs text-green-400 mt-1">Better</p>
              </div>
            </div>
            <div className="mt-5 text-sm space-y-2">
              <p className="flex items-start"><span className="mr-2">✓</span>Name a single decision owner for the pricing project (due in 5 days).</p>
              <p className="flex items-start"><span className="mr-2">✓</span>Hold a 10-minute "Decide or Kill" session Thursday.</p>
              <p className="flex items-start"><span className="mr-2">✓</span>Cut two status meetings; use quick written updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-[1200px] mx-auto px-6 py-10 border-t border-white/10">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">Trusted by leaders</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-80">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-10 bg-white/10 rounded"></div>
          ))}
        </div>
      </section>

      {/* Problem / Solution */}
      <section id="proof" className="max-w-[1200px] mx-auto px-6 py-14 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold">The hidden cost</h2>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li className="flex items-start"><span className="mr-2">✓</span>Decisions drag for weeks</li>
              <li className="flex items-start"><span className="mr-2">✓</span>Meetings multiply and eat the calendar</li>
              <li className="flex items-start"><span className="mr-2">✓</span>Ownership blurs and work loops</li>
              <li className="flex items-start"><span className="mr-2">✓</span>Leaders see the problem when it is too late</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">The weekly fix</h2>
            <p className="mt-4 text-gray-300">Memento reads only public collaboration data (shared channels, calendar headers, project status). No private messages. No personal data. It produces a one-page report with three actions to move faster this week.</p>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li className="flex items-start"><span className="mr-2">✓</span>No extra tools to learn</li>
              <li className="flex items-start"><span className="mr-2">✓</span>No surveys or opinion polls</li>
              <li className="flex items-start"><span className="mr-2">✓</span>First report in 14 days</li>
              <li className="flex items-start"><span className="mr-2">✓</span>Measurable gains in 30–60 days</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section id="brief" className="max-w-[1200px] mx-auto px-6 py-14 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-semibold mb-4">Sample Leadership Health Brief</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-gray-400">
                  <tr>
                    <th className="text-left py-2">Metric</th>
                    <th className="text-left py-2">Meaning</th>
                    <th className="text-left py-2">This Week</th>
                    <th className="text-left py-2">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="py-2">Clarity Lag</td>
                    <td className="py-2 text-gray-300">Request → owner → decision</td>
                    <td className="py-2">16.8 days</td>
                    <td className="py-2 text-green-400">Improved</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2">Cross-Team Response</td>
                    <td className="py-2 text-gray-300">Hours to unblock requests</td>
                    <td className="py-2">12.1 hours</td>
                    <td className="py-2 text-yellow-300">Slightly slower</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2">Decision Entropy</td>
                    <td className="py-2 text-gray-300">% of looping decisions</td>
                    <td className="py-2">23%</td>
                    <td className="py-2 text-green-400">Better</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2">Meeting Load</td>
                    <td className="py-2 text-gray-300">Time in meetings vs focus</td>
                    <td className="py-2">0.33</td>
                    <td className="py-2 text-green-400">Better</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm space-y-2">
              <p className="flex items-start"><span className="mr-2">✓</span>Three recommended actions with named owners and dates</p>
              <p className="flex items-start"><span className="mr-2">✓</span>Board-safe summary you can share</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What changes in the first month</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start"><span className="mr-2">✓</span>Decision cycle time drops on one named initiative</li>
              <li className="flex items-start"><span className="mr-2">✓</span>Cross-team response time improves</li>
              <li className="flex items-start"><span className="mr-2">✓</span>Redundant meetings are removed</li>
              <li className="flex items-start"><span className="mr-2">✓</span>Leaders see a simple score that trends up or down</li>
            </ul>
            <a href="#book" onClick={handleBookClick}>
              <Button className="mt-6 bg-white text-black hover:bg-gray-100 px-5 py-3">Show me our first report</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1200px] mx-auto px-6 py-14 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-2xl p-6">
            <p className="text-gray-300">"We cut decision time by 27% in one quarter. The report made the problem obvious and the actions simple."</p>
            <p className="mt-3 text-sm text-gray-400">Chief Operating Officer, software company</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6">
            <p className="text-gray-300">"The first report hit like a mirror. We finally saw what we were avoiding."</p>
            <p className="mt-3 text-sm text-gray-400">Chief of Staff, healthcare technology group</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6">
            <p className="text-gray-300">"No private messages, no drama. Just clear signals and a weekly cadence that sticks."</p>
            <p className="mt-3 text-sm text-gray-400">Head of Program Management, consumer brand</p>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="offer" className="max-w-[1200px] mx-auto px-6 py-14 border-t border-white/10">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">90-Day Pilot Program</h3>
              <ul className="mt-4 text-gray-300 space-y-2">
                <li className="flex items-start"><span className="mr-2">✓</span>Leadership Health Audit and baselines</li>
                <li className="flex items-start"><span className="mr-2">✓</span>Weekly one-page reports for 12 weeks</li>
                <li className="flex items-start"><span className="mr-2">✓</span>Two private executive workshops with Chris Dessi</li>
                <li className="flex items-start"><span className="mr-2">✓</span>Measurable improvement or no invoice due</li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                <span className="font-semibold text-white">{slotsRemaining}</span> pilot slots remain this quarter.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-3xl font-semibold">$25k–$60k</p>
              <p className="text-gray-400 text-sm mt-1">Fixed scope • Clear results</p>
              <a href="#book" onClick={handleBookClick}>
                <Button className="mt-4 bg-white text-black hover:bg-gray-100 px-5 py-3">Reserve a Pilot Slot</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="max-w-[1200px] mx-auto px-6 py-14 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">Founder</h3>
            <p className="mt-4 text-gray-300">
              <span className="font-semibold">Chris Dessi</span> — author, television commentator, and growth leader who has built and led high-performing sales teams.
              Over two years, Chris personally closed <span className="font-semibold">over $100million</span> in enterprise deals.
              He has seen first-hand what destroys momentum: confusion, misalignment, and fear of hard conversations.
            </p>
            <p className="mt-3 text-gray-300">Memento is his solution: a simple weekly rhythm that restores clarity and speed.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6">
            <p className="text-sm text-gray-300 italic">"We already measure sales, marketing, and finance. Memento measures what drives all three — leadership clarity."</p>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-[1200px] mx-auto px-6 py-14 border-t border-white/10">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-2">Privacy Promise</h3>
          <p className="text-gray-300">Memento never reads private messages or personal data. We analyze only public collaboration patterns to produce leadership signals. Your team's trust and confidentiality are the foundation of this product.</p>
        </div>
      </section>

      {/* Book + Email Capture */}
      <section id="book" className="max-w-[1200px] mx-auto px-6 py-14 border-t border-white/10 mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-semibold mb-2">Book Your 15-Minute Briefing</h3>
            <p className="text-gray-300 mb-4">See what your first Leadership Health Report would look like. No slides. No fluff. Just truth.</p>
            <div className="rounded-lg overflow-hidden border border-white/10">
              <iframe 
                src="https://calendar.app.google/rAZmF5kNNCsfMyBf7" 
                style={{ width: '100%', height: '540px', border: 0 }} 
                title="Booking"
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Do not have a calendar link? Email <a className="underline" href="mailto:info@torqueapp.ai?subject=Book%20Memento%20Briefing">info@torqueapp.ai</a>
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-2">Not ready to book?</h4>
            <p className="text-gray-300 mb-4">Get the sample report and a short checklist to cut one week from your next decision.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                required
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border-white/20 text-white placeholder:text-gray-500"
              />
              <Input
                required
                type="email"
                placeholder="Work email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border-white/20 text-white placeholder:text-gray-500"
              />
              <Input
                required
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-black border-white/20 text-white placeholder:text-gray-500"
              />
              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-100 py-3">
                Send me the Sample Report
              </Button>
              {submitted && (
                <p className="text-green-400 text-sm">Thanks — the sample is on its way.</p>
              )}
            </form>
            <ul className="mt-4 text-gray-300 text-sm space-y-2">
              <li className="flex items-start"><span className="mr-2">✓</span>First look at the report layout</li>
              <li className="flex items-start"><span className="mr-2">✓</span>Checklist: three actions to try this week</li>
              <li className="flex items-start"><span className="mr-2">✓</span>Invite to an executive roundtable (limited seats)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-8 text-sm text-gray-400">
          © 2025 Memento. Leadership health, measured.<br />
          <a className="underline hover:text-gray-300" href="mailto:info@torqueapp.ai">info@torqueapp.ai</a>
        </div>
      </footer>
    </div>
  );
};

export default MementoLanding;
