import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Target, Brain, Database, Rocket, Cog, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import SEO from "@/components/SEO";
import PricingTable from "@/components/PricingTable";
import ZapierContactForm from "@/components/ZapierContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const Services = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  const coreServices = [
    {
      icon: Target,
      title: "AI Strategy & Consulting",
      description: "Transform AI complexity into actionable strategies that deliver measurable business outcomes and competitive advantages."
    },
    {
      icon: Brain,
      title: "AI Model Development",
      description: "Build custom AI solutions with advanced engineering, retrieval systems, and models trained specifically on your business data."
    },
    {
      icon: Database,
      title: "Data Engineering & Optimization",
      description: "Convert fragmented data sources into unified, AI-ready infrastructure that drives intelligent decision-making."
    },
    {
      icon: Rocket,
      title: "AI-Driven Transformation",
      description: "Leverage AI to modernize legacy systems, eliminate technical debt, and accelerate innovation."
    }
  ];

  const useCases = [
    {
      title: "Process Automation",
      description: "Eliminate manual workflows and redeploy resources to high-value strategic activities."
    },
    {
      title: "Content Generation & Analysis",
      description: "Transform raw data into actionable insights, compelling content, and strategic reports."
    },
    {
      title: "Intelligent Virtual Assistants",
      description: "Deploy AI agents that enhance customer experiences and support team efficiency."
    },
    {
      title: "Personalization Engines",
      description: "Deliver targeted experiences through behavioral analysis and predictive recommendations."
    },
    {
      title: "Risk Detection & Security",
      description: "Implement real-time monitoring and AI-powered threat prevention systems."
    },
    {
      title: "Predictive Analytics",
      description: "Anticipate trends, optimize operations, and make data-driven strategic decisions."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "Analyze your operations to identify high-impact AI opportunities and create a roadmap prioritized by ROI.",
      features: ["Opportunity Assessment", "Use Case Development", "Workflow Analysis"]
    },
    {
      number: "02",
      title: "Data Foundation",
      description: "Consolidate and prepare your data infrastructure for AI implementation with quality assurance at every stage.",
      features: ["Data Quality Audit", "Integration Architecture", "Data Enhancement"]
    },
    {
      number: "03",
      title: "Model Engineering",
      description: "Design and train AI models customized to your objectives with rigorous validation and ethical compliance.",
      features: ["Model Selection", "Performance Optimization", "Quality Assurance"]
    },
    {
      number: "04",
      title: "Implementation & Integration",
      description: "Deploy scalable AI solutions with seamless system integration and enterprise-grade security.",
      features: ["MVP Development", "System Integration", "Interface Design"]
    },
    {
      number: "05",
      title: "Optimization & Support",
      description: "Monitor performance, refine accuracy, and ensure sustained value through continuous improvement.",
      features: ["Performance Monitoring", "Accuracy Refinement", "Ongoing Enhancement"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Consulting & Development Services"
        description="Comprehensive AI solutions for enterprise transformation. AI strategy consulting, custom model development, data engineering, automation, and 90-day implementation programs. Proven methodology for measurable ROI."
        keywords="AI consulting services, AI development, AI model development, data engineering, AI automation, AI strategy, enterprise AI solutions, custom AI development, AI implementation, machine learning consulting, generative AI solutions, AI workflow optimization, intelligent automation, AI system integration, predictive analytics, AI security solutions, business process automation, AI transformation services"
        url="/services"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI Consulting & Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Torque AI transforms business challenges into competitive advantages through 
              strategic AI implementation that delivers measurable results and lasting impact.
            </p>
            <div className="mt-10">
              <a href="mailto:info@torqueapp.ai">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-12 py-6 text-lg">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end AI services that turn emerging technology into business transformation.
              <a href="/about" className="text-primary hover:underline ml-2">Meet our team →</a>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-muted p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              High-Impact AI Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic AI implementation across operations and customer experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-lg border-2 border-transparent hover:border-black transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center bg-gradient-to-br from-cyan-50 to-blue-50 p-12 rounded-2xl border-2 border-cyan-200"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a comprehensive 2-week AI audit of your business and discover high-impact opportunities
            </p>
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-semibold px-12 py-6 text-lg"
              asChild
            >
              <a href="https://buy.stripe.com/6oU6oHgzWdDp1kheiT8g005" target="_blank" rel="noopener noreferrer">
                Get Started with 2-Week AI Audit — Just $297
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to AI success, from concept to continuous optimization
            </p>
          </motion.div>

          <div className="space-y-16">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                  <div className="text-6xl font-bold text-muted-foreground/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-muted rounded-lg p-12 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="aspect-square flex items-center justify-center">
                    <div className="text-8xl font-black text-muted-foreground/10">
                      {step.number}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Accelerate with AI?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Partner with Torque AI to transform your business with strategic AI implementation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 font-semibold px-12 py-6 text-lg"
                onClick={() => setIsContactFormOpen(true)}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-12 py-6 text-lg border-2 border-white/30"
                asChild
              >
                <a href="https://buy.stripe.com/bJeeVdfvSeHtaURfmX8g004" target="_blank" rel="noopener noreferrer">
                  Join Executive AI Cohort
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendly Booking */}
      <CalendlyEmbed />

      {/* Newsletter and Pricing Side by Side */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
            <div className="border-t border-border pt-8">
              <h3 className="text-3xl font-bold text-center mb-6">7 Day Free Trial</h3>
              <stripe-pricing-table 
                pricing-table-id="prctbl_1SQ9v7G7cympBc4IoqBe5mIF"
                publishable-key="pk_live_51Qn6VFG7cympBc4IA08eEyFC0UcNTBmHxl4SvxBr2nQugXsezKLcEiKdEcmdeTLxbYNQIXnhnrXtHNTvoribSpV700GFoEAA3a">
              </stripe-pricing-table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      
      {/* Contact Form Dialog */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">Contact Form</DialogTitle>
          <ZapierContactForm 
            title="Schedule Your Consultation"
            description="Fill out the form and our team will reach out within 24 hours"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
