import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, BarChart3, Target, Zap, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZapierContactForm from "@/components/ZapierContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const AIAudit = () => {
  const benefits = [
    {
      icon: Target,
      title: "Identify AI Opportunities",
      description: "Discover high-impact areas where AI can transform your business operations and drive ROI."
    },
    {
      icon: BarChart3,
      title: "Custom Implementation Roadmap",
      description: "Get a detailed, actionable plan tailored to your business goals and current infrastructure."
    },
    {
      icon: Zap,
      title: "Quick Wins Analysis",
      description: "Identify immediate automation opportunities that can be implemented within 30 days."
    },
    {
      icon: Brain,
      title: "Competitive AI Positioning",
      description: "Understand how AI can give you an edge in your industry and market."
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
    "Comprehensive AI Opportunity Assessment Report",
    "Custom AI Implementation Roadmap",
    "ROI Analysis & Budget Projections",
    "Technology Stack Recommendations",
    "Quick Wins Implementation Guide",
    "30-Minute Strategy Presentation",
    "90 Days of Email Support"
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
        <section className="section-padding pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold">Limited Time Offer</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                2-Week AI Audit
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Discover Your AI Transformation Opportunities
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-5xl font-bold text-primary">$297</span>
                <span className="text-muted-foreground">/ One-Time Investment</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                Get a comprehensive analysis of your business and receive a custom AI implementation roadmap 
                designed to maximize efficiency, reduce costs, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg px-8"
                >
                  Get Started Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg px-8"
                >
                  Schedule a Call
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Get</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive analysis that identifies exactly how AI can transform your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven 4-step process delivers actionable insights in just 2 weeks
              </p>
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
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="section-padding bg-card/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to start your AI transformation journey
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-background p-4 rounded-lg"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have discovered their AI advantage. 
                Get started today for just $297 and receive your custom roadmap in 2 weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={() => window.open('https://buy.stripe.com/your-payment-link', '_blank')}
                >
                  Pay Now & Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg px-8"
                >
                  Schedule Discovery Call
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="section-padding">
          <ZapierContactForm 
            title="Have Questions? Let's Talk"
            description="Fill out the form below and we'll get back to you within 24 hours to discuss your AI audit"
          />
        </section>

        {/* Calendly Section */}
        <section id="calendly" className="section-padding bg-card/50">
          <CalendlyEmbed 
            title="Schedule Your Discovery Call"
            description="Book a 30-minute call to discuss your business goals and how our AI audit can help"
          />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIAudit;
