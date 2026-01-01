import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ZohoContactForm from "@/components/ZohoContactForm";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle, Play, ArrowRight, Zap, Target, LineChart, Clock } from "lucide-react";

const AIAudit = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById('audit-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <SEO
        title="Free AI Strategy Guide | AI Consulting for Business"
        description="Get your free AI strategy guide from Torque AI. Discover how AI consulting can increase revenue, automate workflows, and transform your business operations. Expert AI strategy insights delivered weekly."
        keywords="free AI strategy guide, AI consulting for business, AI revenue optimization, AI business strategy, AI automation guide, AI implementation strategy, free AI consultation, AI business transformation, AI workflow consulting"
        url="/ai-audit"
      />
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        {/* Hero Section - Two Column Layout */}
        <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">100% Free • No Sales Pitch</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                  Get Your Free<br />
                  <span className="highlight-text">AI Strategy Guide</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Join our AI community and get weekly insights on how to <strong className="text-foreground">increase revenue</strong>, <strong className="text-foreground">save time</strong>, and implement AI in your business — without learning code.
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 pt-2">
                  {[
                    "Step-by-step AI implementation roadmap",
                    "Weekly actionable tips and case studies",
                    "Early access to new tools and workshops"
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button for mobile */}
                <div className="lg:hidden pt-4">
                  <Button 
                    onClick={scrollToForm}
                    size="lg"
                    className="w-full text-lg py-6 bg-foreground text-background hover:bg-foreground/90"
                  >
                    Get Your Free Guide
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>

              {/* Right Column - Form Card */}
              <motion.div
                id="audit-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-card border-2 border-border rounded-2xl p-6 lg:p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-foreground">Start Your AI Journey</h2>
                    <p className="text-sm text-muted-foreground mt-1">Enter your details to get instant access</p>
                  </div>
                  <ZohoContactForm />
                </div>

                {/* Trust indicator below form */}
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Join 2,500+ business owners already getting AI insights
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted By Logos */}
        <section className="py-10 border-y border-border bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              As Featured In
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500">
              <img src="/logos/forbes-logo.png" alt="Forbes" className="h-6 object-contain" />
              <img src="/logos/cnn-logo.png" alt="CNN" className="h-6 object-contain" />
              <img src="/logos/fox-logo.png" alt="Fox" className="h-6 object-contain" />
              <img src="/logos/nbc-logo.png" alt="NBC" className="h-6 object-contain" />
              <img src="/logos/cbs-logo.png" alt="CBS" className="h-6 object-contain" />
              <img src="/logos/fortune-logo.png" alt="Fortune" className="h-6 object-contain" />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get actionable AI insights in three simple steps
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: Target,
                  title: "Sign Up",
                  description: "Enter your email above and get instant access to our AI strategy guide."
                },
                {
                  step: "02",
                  icon: LineChart,
                  title: "Get Weekly Insights",
                  description: "Receive actionable AI tips, case studies, and tools every week."
                },
                {
                  step: "03",
                  icon: Zap,
                  title: "Implement & Grow",
                  description: "Apply what you learn to increase revenue and save time in your business."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  {/* Step number */}
                  <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {item.step}
                  </span>
                  
                  <div className="pt-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 lg:py-24 bg-muted/30 border-y border-border">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">See AI in Action</h2>
              <p className="text-muted-foreground">
                Watch how businesses are transforming with AI
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden border border-border shadow-2xl"
            >
              <div className="aspect-video bg-foreground/5">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HuqJCKx6_3c?si=Xl2uMvR3Lt-Tjr9g"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">What You'll Receive</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to start implementing AI in your business
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📚",
                  title: "AI Strategy Guide",
                  description: "A complete roadmap for implementing AI in your business"
                },
                {
                  icon: "💡",
                  title: "Weekly Insights",
                  description: "Practical tips and real-world case studies"
                },
                {
                  icon: "🎯",
                  title: "Tool Recommendations",
                  description: "Curated AI tools for your specific needs"
                },
                {
                  icon: "🚀",
                  title: "Early Access",
                  description: "Be first to know about workshops and events"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Chris Section */}
        <section className="py-16 lg:py-24 bg-muted/30 border-y border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-2 border-border shadow-xl mx-auto lg:mx-0">
                  <img
                    src="/lovable-uploads/85521d42-7840-4d81-b8ca-c002ab15932e.png"
                    alt="Chris Dessi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Meet Chris Dessi</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm the founder of Torque AI. Over the last decade, I've led sales and marketing teams, built tech companies, and generated <span className="font-semibold text-foreground">over $100 million in deals</span> — including helping one e-commerce client grow <span className="font-semibold text-foreground">92% year over year</span> using AI.
                  </p>
                  <p>
                    I appear on Fox5, Yahoo Finance, and other networks to help business leaders cut through the noise and actually use AI in the real world.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button 
                    onClick={scrollToForm}
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90"
                  >
                    Get Your Free Guide
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Others Are Saying</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Chris helped us uncover an obvious gap we'd been staring at for months. The AI follow-up system he recommended paid for itself in weeks.",
                  name: "Sarah Mitchell",
                  role: "VP of Sales",
                  company: "Nexus Growth Partners"
                },
                {
                  quote: "I'm not technical at all. He showed us one automation that saves my team a full day of work every week.",
                  name: "Michael Torres",
                  role: "Operations Director",
                  company: "Coastal Medical Group"
                },
                {
                  quote: "I've talked to other AI consultants, but Chris was the first one who actually understood my business model first.",
                  name: "Jenna Walker",
                  role: "Founder",
                  company: "Digital Bloom Media"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-24 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
                Join thousands of business owners who are already using AI to save time and increase revenue.
              </p>
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
              >
                Get Your Free AI Strategy Guide
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-background/60 mt-4">
                No credit card required. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Optional Booking Section */}
        <section id="booking" className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Optional • No Obligation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Want More? Book a Free AI Audit Call
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you want personalized guidance, schedule a 10-minute call. I'll show you exactly where AI can make the biggest impact in your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
            >
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/torque-ai/15min" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30 border-t border-border">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: "Is this really free?",
                  answer: "Yes, 100% free. You'll get our AI strategy guide and weekly insights at no cost. No credit card required."
                },
                {
                  question: "How often will I receive emails?",
                  answer: "Once a week. Each email contains actionable AI tips, case studies, and tools you can implement immediately."
                },
                {
                  question: "I'm not technical. Is this for me?",
                  answer: "Absolutely. Everything is designed for non-technical business owners. No coding or tech experience needed."
                },
                {
                  question: "Can I unsubscribe anytime?",
                  answer: "Yes, every email has an unsubscribe link. No hard feelings."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIAudit;
