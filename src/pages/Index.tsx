import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZapierChatbot from "@/components/ZapierChatbot";

const MEETING_URL = "https://calendly.com/cmccarthy-torqueai/30min";
const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/20877806/29kbxse/";

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [tier, setTier] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmData: Record<string, string> = {};
    
    params.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        utmData[key] = value;
      }
    });
    
    if (Object.keys(utmData).length > 0) {
      localStorage.setItem('utmParams', JSON.stringify(utmData));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const responses = [
      formData.q1, formData.q2, formData.q3, formData.q4, formData.q5,
      formData.q6, formData.q7, formData.q8, formData.q9, formData.q10
    ];
    
    const bpScore = responses.reduce((sum, val) => sum + parseInt(val), 0);
    setScore(bpScore);
    
    let calculatedTier = "";
    if (bpScore >= 85) calculatedTier = "elite";
    else if (bpScore >= 70) calculatedTier = "strong";
    else if (bpScore >= 50) calculatedTier = "moderate";
    else calculatedTier = "critical";
    
    setTier(calculatedTier);
    
    const utmParams = JSON.parse(localStorage.getItem('utmParams') || '{}');
    
    const webhookData = {
      ...formData,
      score: bpScore,
      tier: calculatedTier,
      timestamp: new Date().toISOString(),
      ...utmParams
    };
    
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookData)
      });
    } catch (error) {
      console.error("Webhook error:", error);
    }
    
    setShowResults(true);
  };

  const getReveal = () => {
    if (tier === "elite") return "You're in the top 5% of executives we've assessed. Your execution discipline is world-class.";
    if (tier === "strong") return "You're performing above average, but there are still millions in unrealized value sitting in execution gaps.";
    if (tier === "moderate") return "Your execution challenges are costing you 30-40% in lost productivity and revenue.";
    return "Your execution gaps are severe. You're likely losing 50%+ of your strategic value to poor implementation.";
  };

  const getInsights = () => {
    if (tier === "elite") return [
      "Your team executes with precision",
      "Systems scale with minimal friction",
      "Strategic initiatives consistently deliver ROI"
    ];
    if (tier === "strong") return [
      "Good foundation but inconsistent follow-through",
      "Technology adoption lags behind strategy",
      "Scaling creates unexpected bottlenecks"
    ];
    if (tier === "moderate") return [
      "Strategy doesn't translate to execution",
      "Teams work hard but miss targets",
      "Growth is limited by operational capacity"
    ];
    return [
      "Chronic firefighting mode",
      "Systems are manual and fragile",
      "Revenue growth is blocked by execution chaos"
    ];
  };

  const getNextStep = () => {
    if (tier === "elite") return "Let's discuss how AI can help you maintain your competitive edge and scale your success.";
    if (tier === "strong") return "We'll show you exactly where to tighten execution and unlock 2-3x ROI.";
    if (tier === "moderate") return "We'll map out a rapid path to operational excellence using AI-powered systems.";
    return "We'll design an emergency execution overhaul to stop the bleeding and restore growth.";
  };

  const questions = [
    { id: "q1", text: "Our strategic initiatives are completed on time and deliver the expected results" },
    { id: "q2", text: "We have clear, measurable KPIs that everyone understands and tracks" },
    { id: "q3", text: "Our team consistently follows through on commitments without needing reminders" },
    { id: "q4", text: "We use data and analytics to make most of our important decisions" },
    { id: "q5", text: "Our technology and tools actually improve our team's productivity" },
    { id: "q6", text: "When we identify a problem, we implement solutions quickly and effectively" },
    { id: "q7", text: "Our processes are documented and easy for new team members to follow" },
    { id: "q8", text: "We regularly review and optimize our workflows to eliminate waste" },
    { id: "q9", text: "Cross-functional collaboration happens smoothly without constant intervention" },
    { id: "q10", text: "Our growth is limited by market opportunity, not by our ability to execute" }
  ];

  const improvements = [
    {
      title: "Decision Speed",
      desc: "Cut decision-making time by 60% with AI-powered analytics and automated reporting"
    },
    {
      title: "Process Efficiency",
      desc: "Eliminate 15-20 hours/week of manual work through intelligent automation"
    },
    {
      title: "Strategic Clarity",
      desc: "Real-time dashboards that show exactly what's working and what needs attention"
    },
    {
      title: "Team Alignment",
      desc: "Automated systems that keep everyone on the same page without constant meetings"
    }
  ];

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Header />
        <div className="section-padding py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <div className="text-center mb-12">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-block mb-6"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto">
                    <span className="text-5xl font-black text-white">{score}</span>
                  </div>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Your Execution Score
                </h1>
                
                <p className="text-xl text-gray-300 mb-8">
                  {getReveal()}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {getInsights().map((insight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="bg-white/5 p-6 rounded-xl border border-white/10"
                  >
                    <p className="text-gray-300">{insight}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl p-8 mb-8 border border-primary/30">
                <h2 className="text-2xl font-bold text-white mb-4">What You'll Improve</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {improvements.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="flex gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-300 mb-6">{getNextStep()}</p>
                <Button
                  onClick={() => window.open(MEETING_URL, "_blank")}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-glow text-white font-bold px-12 py-6 text-lg hover:scale-105 transition-transform"
                >
                  Book Your Strategy Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
        <ZapierChatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <div className="section-padding py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-black text-white mb-6"
            >
              The 3-Minute
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Execution Leak Assessment
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Discover exactly where you're losing money, time, and competitive advantage. 
              Get your personalized execution score and roadmap to fix it.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input
                    id="firstName"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input
                    id="lastName"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input
                    id="company"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="role" className="text-white">Role</Label>
                  <Input
                    id="role"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  />
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Rate Your Agreement (1-10)</h3>
                <p className="text-gray-300 mb-8">1 = Strongly Disagree | 10 = Strongly Agree</p>
                
                <div className="space-y-8">
                  {questions.map((q, idx) => (
                    <div key={q.id} className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <Label className="text-white text-lg mb-4 block">
                        {idx + 1}. {q.text}
                      </Label>
                      <RadioGroup
                        required
                        value={formData[q.id as keyof typeof formData]}
                        onValueChange={(val) => setFormData({...formData, [q.id]: val})}
                        className="flex flex-wrap gap-3"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <div key={num} className="flex items-center space-x-2">
                            <RadioGroupItem 
                              value={num.toString()} 
                              id={`${q.id}-${num}`}
                              className="border-white/30 text-primary"
                            />
                            <Label 
                              htmlFor={`${q.id}-${num}`}
                              className="text-white cursor-pointer"
                            >
                              {num}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-glow text-white font-bold px-12 py-6 text-lg hover:scale-105 transition-transform"
                >
                  Get My Execution Score
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
      <ZapierChatbot />
    </div>
  );
};

export default Index;