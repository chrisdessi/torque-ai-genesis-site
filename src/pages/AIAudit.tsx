import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, BarChart3, Target, Zap, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZapierContactForm from "@/components/ZapierContactForm";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const AIAudit = () => {
  useEffect(() => {
    const script = document.createElement('script');
    // Stripe script removed
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const benefits = [
    {
      icon: Target,
      title: "Uncover Hidden AI Opportunities",
      description: "We analyze every department and workflow to find the highest-ROI automation opportunities your competitors are missing.",
      stat: "Average 40% time savings",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Implementation Plan",
      description: "No fluff, no theory. Get a step-by-step roadmap with specific tools, timelines, and projected cost savings.",
      stat: "Avg $120K saved annually",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "30-Day Quick Win Strategy",
      description: "Walk away with 3-5 AI implementations you can deploy immediately—no technical team required.",
      stat: "Deploy in 30 days",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Competitive Intelligence Report",
      description: "See exactly how your competitors are using AI and where you can leapfrog them in your market.",
      stat: "Beat 80% of competitors",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery Call",
      description: "We start with a comprehensive discussion about your business challenges, goals, and current processes."
    },
    {
      step: "2",
      title: "Deep Dive Analysis",
      description: "Our team conducts a thorough analysis of your operations, identifying AI opportunities across all departments."
    },
    {
      step: "3",
      title: "Strategy Session",
      description: "We present our findings in a detailed strategy session with prioritized recommendations and ROI projections."
    },
    {
      step: "4",
      title: "Implementation Roadmap",
      description: "Receive a custom roadmap with timeline, budget estimates, and clear next steps for AI adoption."
    }
  ];

  const deliverables = [
    "Comprehensive AI Opportunity Assessment Report (20+ pages)",
    "Custom AI Implementation Roadmap with Timeline & Milestones",
    "ROI Analysis & Budget Projections (Year 1-3)",
    "Technology Stack Recommendations with Vendor Comparison",
    "Quick Wins Implementation Guide (Deploy Within 30 Days)",
    "60-Minute Strategy Presentation & Recording",
    "Competitive AI Intelligence Brief"
  ];

  return (
    <>
      <SEO
        title="2-Week AI Audit - Transform Your Business with AI"
        description="Get a comprehensive AI audit for just $297. Discover high-impact AI opportunities, receive a custom implementation roadmap, and identify quick wins for your business in just 2 weeks."
        keywords="AI audit, AI assessment, AI strategy, business AI transformation, AI implementation roadmap, AI consulting, enterprise AI audit, AI opportunities analysis"
        url="/ai-audit"
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <Header />
        
        {/* Hero Section */}
        <section className="section-padding pt-32 pb-20 relative overflow-hidden">
          {/* Animated background gradients */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-purple-600 rounded-full mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white font-semibold">⚡ While Your Competitors Wait, You Act</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Is Your Business Being Left Behind
                </span>
                <br />
                <span className="text-foreground">by the AI Revolution?</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="font-semibold text-foreground">76% of businesses</span> are already using AI to cut costs and scale faster.
                <br />
                <span className="text-foreground font-semibold">Are you one of them?</span>
              </motion.p>

              <motion.div 
                className="flex items-center justify-center gap-3 mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-left">
                  <div className="text-sm text-muted-foreground line-through">Regular: $997</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">$297</span>
                    <span className="text-muted-foreground">limited time</span>
                  </div>
                </div>
              </motion.div>

              <motion.p 
                className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                In just 2 weeks, discover the <span className="text-primary font-semibold">exact AI opportunities</span> hiding in your business—
                and get a battle-tested roadmap to implement them <span className="text-primary font-semibold">before your competitors do.</span>
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all"
                >
                  Get Your AI Audit Now
                  <Zap className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg px-8 border-2 hover:bg-primary/10"
                >
                  Have Questions? Talk to Us
                </Button>
              </motion.div>

              <motion.div 
                className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>2-Week Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>No Technical Team Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Actionable From Day 1</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-gradient-to-b from-background to-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Here's What You're Actually Getting
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  No generic advice. No cookie-cutter templates. Just <span className="text-primary font-semibold">battle-tested strategies</span> tailored to your business.
                </p>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="relative bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-border/50 group overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-4`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                      {benefit.stat}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 -z-10" />
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Clock className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why You Need This <span className="text-red-500">Right Now</span>
              </h2>
              <div className="bg-background rounded-2xl p-8 shadow-xl border-2 border-red-500/20">
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  The businesses dominating your industry aren't smarter than you. They just <span className="text-foreground font-semibold">moved faster on AI.</span>
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">40%</div>
                    <p className="text-sm text-muted-foreground">Average efficiency gain in first 90 days</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-500 mb-2">$120K+</div>
                    <p className="text-sm text-muted-foreground">Average annual savings from AI automation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">2 Years</div>
                    <p className="text-sm text-muted-foreground">How far behind you'll be if you wait</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">The 2-Week Process</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Fast, focused, and designed to get you <span className="text-primary font-semibold">results you can implement immediately</span>
                </p>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connection line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary to-purple-500" />
                  )}
                  
                  <motion.div 
                    className="bg-gradient-to-br from-primary to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg relative z-10"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.step}
                  </motion.div>
                  
                  <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-center">{item.title}</h3>
                    <p className="text-muted-foreground text-center text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 -z-10" />
          
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full mb-6 font-semibold">
                  $3,500+ Value • Yours for $297
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Your Complete AI Transformation Package
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Everything you need to leapfrog your competition—delivered in <span className="text-primary font-semibold">14 days or less</span>
                </p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-border/50 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-background rounded-2xl p-8 shadow-xl border-2 border-primary/20">
                <p className="text-lg text-muted-foreground mb-2">
                  <span className="text-foreground font-semibold">Plus:</span> Direct access to our team via email during your audit
                </p>
                <p className="text-sm text-primary font-semibold">
                  ⚡ No question left unanswered. No roadblock unresolved.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Payment Section */}
        <section id="payment" className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl -z-10 animate-pulse" />
          
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Zap className="w-20 h-20 text-primary" />
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Stop Watching.
                </span>
                <br />
                <span className="text-foreground">Start Leading.</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Your competitors are making their move. <span className="text-foreground font-semibold">Every day you wait costs you more.</span>
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-8">
                <Clock className="w-4 h-4 text-red-500" />
                <span className="text-red-500 font-semibold text-sm">Limited slots available this month</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-6">
                🎯 Results guaranteed or money back
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>2-Week Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>20+ Page Report</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Implementation Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="section-padding bg-card/30">
          <ZapierContactForm 
            title="Not Ready Yet? We Get It."
            description="Book a free 15-minute consultation. No pitch, no pressure—just honest answers about whether AI is right for your business right now."
          />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIAudit;
