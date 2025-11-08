import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";


const MEETING_URL = "https://calendar.app.google/rAZmF5kNNCsfMyBf7";
const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/20826352/2e5d6n0/";

const Assessment = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [tier, setTier] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmTerm: "",
    utmContent: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
      utmTerm: params.get('utm_term') || '',
      utmContent: params.get('utm_content') || '',
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.q1 || !formData.q2 || !formData.q3 || !formData.q4 || !formData.q5 || !formData.q6) {
      toast.error("Please answer all questions");
      return;
    }

    const bpScore =
      parseInt(formData.q1) +
      parseInt(formData.q2) +
      parseInt(formData.q3) +
      parseInt(formData.q4) +
      parseInt(formData.q5) +
      parseInt(formData.q6);

    let calculatedTier = "";
    if (bpScore >= 21) calculatedTier = "Critical";
    else if (bpScore >= 15) calculatedTier = "High";
    else if (bpScore >= 9) calculatedTier = "Moderate";
    else calculatedTier = "Low";

    setScore(bpScore);
    setTier(calculatedTier);
    setShowResults(true);

    // Get the personalized messages before sending
    const whatThisMeans = calculatedTier === "Critical" 
      ? "You're likely losing $500K–$5M+ annually through execution drift, rework, and misaligned priorities."
      : calculatedTier === "High"
      ? "Expect 5–10% of annual revenue to be silently wasted on internal friction, duplication, and context-switching."
      : calculatedTier === "Moderate"
      ? "You're stable but vulnerable. Small inefficiencies compound quickly without active governance."
      : "You're in good shape, but optimization opportunities remain to future-proof your operations.";

    const recommendedNextStep = calculatedTier === "Critical"
      ? "Book a 90-minute AI Strategy Workshop to diagnose your highest-impact gaps and build a 90-day roadmap."
      : calculatedTier === "High"
      ? "Schedule a 90-minute Executive AI Briefing to align leadership and identify quick wins."
      : calculatedTier === "Moderate"
      ? "Book a 60-minute Strategic Consult to identify optimization opportunities and prevent future drift."
      : "Book a 30-minute Alignment Check-In to review your current state and identify any hidden risks.";

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: "Execution Leak",
          executionLeakScore: bpScore,
          riskTier: calculatedTier,
          whatThisMeans: whatThisMeans,
          recommendedNextStep: recommendedNextStep,
          timestamp: new Date().toISOString(),
        }),
      });
      console.log("Data sent to webhook");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const getReveal = () => {
    if (tier === "Critical") return "You're hemorrhaging revenue daily through misalignment, duplication, and shadow workflows.";
    if (tier === "High") return "Your execution leak is costing you 5–10% of topline revenue each quarter.";
    if (tier === "Moderate") return "You have pockets of waste that, if addressed, could free up significant margin.";
    return "You're relatively aligned, but there's still room to tighten execution and prevent future drift.";
  };

  const getInsights = () => {
    if (tier === "Critical") 
      return "You're likely losing $500K–$5M+ annually through execution drift, rework, and misaligned priorities.";
    if (tier === "High") 
      return "Expect 5–10% of annual revenue to be silently wasted on internal friction, duplication, and context-switching.";
    if (tier === "Moderate") 
      return "You're stable but vulnerable. Small inefficiencies compound quickly without active governance.";
    return "You're in good shape, but optimization opportunities remain to future-proof your operations.";
  };

  const getNextStep = () => {
    if (tier === "Critical") 
      return "Book a 90-minute AI Strategy Workshop to diagnose your highest-impact gaps and build a 90-day roadmap.";
    if (tier === "High") 
      return "Schedule a 90-minute Executive AI Briefing to align leadership and identify quick wins.";
    if (tier === "Moderate") 
      return "Book a 60-minute Strategic Consult to identify optimization opportunities and prevent future drift.";
    return "Book a 30-minute Alignment Check-In to review your current state and identify any hidden risks.";
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <Header />
        <div className="section-padding py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
              <h1 className="text-5xl font-bold mb-8 text-center">
                Your Execution Leak Score: <span className="text-cyan-400">{score}/24</span>
              </h1>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Risk Tier: {tier}</h2>
                <p className="text-xl mb-6">{getReveal()}</p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">What This Means:</h3>
                <p className="text-lg mb-6">{getInsights()}</p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Recommended Next Step:</h3>
                <p className="text-lg mb-6">{getNextStep()}</p>
              </div>
              <div className="text-center space-y-4">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-7 text-lg"
                  onClick={() => window.open(MEETING_URL, "_blank")}
                >
                  Book Your Strategy Session
                </Button>
                <div className="pt-4">
                  <p className="text-white/80 mb-4 text-lg">
                    Or transform your leadership with our comprehensive program:
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-7 text-lg border-2 border-white/30"
                    asChild
                  >
                    <a href="https://buy.stripe.com/bJeeVdfvSeHtaURfmX8g004" target="_blank" rel="noopener noreferrer">
                      Join 90-Day Executive Cohort
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Newsletter and Pricing Side by Side */}
        <section className="bg-background py-20">
          <div className="section-padding max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Join Chris's Newsletter
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get exclusive insights, strategies, and stories delivered directly to your inbox
                </p>
                <div className="w-full mx-auto">
                  <iframe 
                    src="https://embeds.beehiiv.com/ed4d369b-b9a6-4dfc-9698-32ed638ae5f9?slim=true" 
                    data-test-id="beehiiv-embed" 
                    height="52" 
                    frameBorder="0" 
                    scrolling="no"
                    style={{ margin: 0, borderRadius: '0px', backgroundColor: 'transparent' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <Header />
      <div className="section-padding py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Quantify Your Execution Leak
            </h1>
            <p className="text-xl text-white/90">
              Take 3 minutes to discover how much revenue misalignment is costing you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-white">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-white">Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
            </div>

            <div className="space-y-8 mt-8">
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-white">
                  1. How often do teams duplicate work or reinvent solutions?
                </Label>
                <RadioGroup value={formData.q1} onValueChange={(value) => setFormData({ ...formData, q1: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="q1-1" />
                    <Label htmlFor="q1-1" className="text-white">Rarely (1)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="q1-2" />
                    <Label htmlFor="q1-2" className="text-white">Occasionally (2)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="q1-3" />
                    <Label htmlFor="q1-3" className="text-white">Frequently (3)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="q1-4" />
                    <Label htmlFor="q1-4" className="text-white">Constantly (4)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold text-white">
                  2. How many hours per week are lost to misaligned priorities or rework?
                </Label>
                <RadioGroup value={formData.q2} onValueChange={(value) => setFormData({ ...formData, q2: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="q2-1" />
                    <Label htmlFor="q2-1" className="text-white">0–5 hours (1)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="q2-2" />
                    <Label htmlFor="q2-2" className="text-white">6–10 hours (2)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="q2-3" />
                    <Label htmlFor="q2-3" className="text-white">11–15 hours (3)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="q2-4" />
                    <Label htmlFor="q2-4" className="text-white">16+ hours (4)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold text-white">
                  3. How clear is your strategy cascade from leadership to frontline teams?
                </Label>
                <RadioGroup value={formData.q3} onValueChange={(value) => setFormData({ ...formData, q3: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="q3-1" />
                    <Label htmlFor="q3-1" className="text-white">Very clear (1)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="q3-2" />
                    <Label htmlFor="q3-2" className="text-white">Somewhat clear (2)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="q3-3" />
                    <Label htmlFor="q3-3" className="text-white">Unclear (3)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="q3-4" />
                    <Label htmlFor="q3-4" className="text-white">Nonexistent (4)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold text-white">
                  4. How many tools does your average employee toggle between daily?
                </Label>
                <RadioGroup value={formData.q4} onValueChange={(value) => setFormData({ ...formData, q4: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="q4-1" />
                    <Label htmlFor="q4-1" className="text-white">1–3 (1)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="q4-2" />
                    <Label htmlFor="q4-2" className="text-white">4–6 (2)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="q4-3" />
                    <Label htmlFor="q4-3" className="text-white">7–10 (3)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="q4-4" />
                    <Label htmlFor="q4-4" className="text-white">11+ (4)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold text-white">
                  5. How confident are you in your AI governance and compliance readiness?
                </Label>
                <RadioGroup value={formData.q5} onValueChange={(value) => setFormData({ ...formData, q5: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="q5-1" />
                    <Label htmlFor="q5-1" className="text-white">Very confident (1)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="q5-2" />
                    <Label htmlFor="q5-2" className="text-white">Somewhat confident (2)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="q5-3" />
                    <Label htmlFor="q5-3" className="text-white">Not confident (3)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="q5-4" />
                    <Label htmlFor="q5-4" className="text-white">No framework in place (4)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold text-white">
                  6. How often do strategic initiatives fail to deliver expected ROI?
                </Label>
                <RadioGroup value={formData.q6} onValueChange={(value) => setFormData({ ...formData, q6: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="q6-1" />
                    <Label htmlFor="q6-1" className="text-white">Rarely (1)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="q6-2" />
                    <Label htmlFor="q6-2" className="text-white">Occasionally (2)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="q6-3" />
                    <Label htmlFor="q6-3" className="text-white">Frequently (3)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="q6-4" />
                    <Label htmlFor="q6-4" className="text-white">Most of the time (4)</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                type="submit"
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-7 text-lg"
              >
                Calculate My Score
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
      {/* Newsletter and Pricing Side by Side */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Join Chris's Newsletter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get exclusive insights, strategies, and stories delivered directly to your inbox
              </p>
              <div className="w-full mx-auto">
                <iframe 
                  src="https://embeds.beehiiv.com/ed4d369b-b9a6-4dfc-9698-32ed638ae5f9?slim=true" 
                  data-test-id="beehiiv-embed" 
                  height="52" 
                  frameBorder="0" 
                  scrolling="no"
                  style={{ margin: 0, borderRadius: '0px', backgroundColor: 'transparent' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Assessment;
