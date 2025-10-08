import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, DollarSign, TrendingDown, Clock, AlertTriangle, Users, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import heroProfessional from "@/assets/hero-professional.jpg";

const Index = () => {
  const process = [
    {
      number: "01",
      title: "Audit",
      description: "Deep analysis of your current marketing, sales, and communications operations to identify gaps and opportunities."
    },
    {
      number: "02",
      title: "Optimize",
      description: "Strategic implementation of AI-powered solutions and process improvements to maximize efficiency and results."
    },
    {
      number: "03",
      title: "Train",
      description: "Comprehensive coaching for your team on new systems, AI tools, and best practices for sustained success."
    },
    {
      number: "04",
      title: "Hand Off",
      description: "Seamless transition to your empowered team with ongoing support as needed."
    }
  ];

  const expertise = [
    "Business Analysis & Infrastructure Assessment",
    "AI Strategy Development",
    "Data Qualification & Preparation",
    "AI Product Solutions",
    "Integration & Deployment",
    "Maintenance & Support"
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroProfessional} 
            alt="Torque AI - Professional AI Consulting Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight drop-shadow-2xl">
              Torque AI
            </h1>
            <p className="text-2xl md:text-4xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Marketing, Sales and Communications Consulting
              <br />
              <span className="text-white font-normal">Specializing in AI Integration, Training and Optimization</span>
            </p>
            
            <div className="pt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block"
              >
            <a href="mailto:info@torqueapp.ai">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 font-semibold px-12 py-6 text-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Why Now / The Cost of Inaction */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              The Hidden Cost of Misalignment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every day without alignment costs you real revenue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { stat: "5–10%", label: "of annual revenue wiped out by strategy failures", icon: DollarSign },
              { stat: "80%", label: "of employees lack time or energy to do their best work", icon: Users },
              { stat: "40%", label: "of productive time stolen by context switching each week", icon: Clock },
              { stat: "100%", label: "of margins silently taxed by meeting and tool overload", icon: TrendingDown }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-muted p-8 rounded-lg text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-foreground" />
                <div className="text-4xl font-bold mb-3">{item.stat}</div>
                <p className="text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href="mailto:info@torqueapp.ai?subject=Execution%20Leak%20Audit">
              <Button size="lg" className="font-semibold">
                Quantify Your Execution Leak
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Where You're Losing Money */}
      <section className="py-32 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Where You're Losing Money
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Identify the leaks draining your bottom line
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
              className="bg-white p-10 rounded-lg"
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-4">💸 Revenue Leak</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Execution drift wastes <strong>5–10% of topline</strong> through duplication and hand-offs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-lg"
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-4">📉 AI Risk</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                EY (2025): firms without Responsible AI governance lost <strong>$4.4B</strong> in a year.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-10 rounded-lg"
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-4">⏱ Lost Time</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Microsoft (2025): leaders want productivity gains while <strong>80% of staff are at capacity</strong>.
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <a href="mailto:info@torqueapp.ai?subject=Stop%20the%20Leak">
              <Button size="lg" className="font-semibold">
                Stop the Leak
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Your Competition Isn't Waiting
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading enterprises are already leveraging AI for measurable growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
              className="bg-muted p-10 rounded-lg text-center"
            >
              <div className="text-5xl font-bold mb-4">93%</div>
              <p className="text-lg text-muted-foreground">
                of CMOs already report positive ROI from Gen AI
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-muted p-10 rounded-lg text-center"
            >
              <div className="text-5xl font-bold mb-4">Revenue Lift</div>
              <p className="text-lg text-muted-foreground">
                Business units using Gen AI see measurable revenue lift (McKinsey 2025)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-muted p-10 rounded-lg text-center"
            >
              <div className="text-5xl font-bold mb-4">40%</div>
              <p className="text-lg text-muted-foreground">
                of enterprise apps will embed AI agents by 2026 (Gartner)
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <a href="mailto:info@torqueapp.ai?subject=Competitive%20Advantage%20Consultation">
              <Button size="lg" className="font-semibold">
                Catch Up Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Career Risk / Leadership Pressure */}
      <section className="py-24 bg-destructive text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Boards Are Replacing Leaders Who Can't Deliver Change
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            <strong>31% of CEOs</strong> lose their roles for failed transformation efforts.
            <br />
            Don't be next—lead with alignment.
          </p>
          <a href="mailto:info@torqueapp.ai?subject=Leadership%20Alignment">
            <Button 
              size="lg" 
              className="bg-white text-destructive hover:bg-gray-100 font-semibold"
            >
              Secure Your Seat
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Our Approach: Comprehensive AI Strategy,
              <br />
              <span className="text-muted-foreground">AI Business and AI Software Solutions</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We partner with enterprise businesses who have no AI strategy to transform their marketing, sales, and communications operations through strategic AI integration and proven methodologies.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We analyze your infrastructure, data, and industry trends to identify opportunities for transformative AI solutions that meet your unique business needs and drive measurable results.
                </p>
                
                <div className="pt-8">
                  <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expertise.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-muted p-12 rounded-lg">
                <h3 className="text-3xl font-bold mb-8">Why Choose Torque AI</h3>
                <ul className="space-y-4">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0 * 0.1 }}
                    className="text-lg text-foreground border-l-4 border-black pl-6 py-2"
                  >
                    Proven track record of transforming enterprise operations
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 * 0.1 }}
                    className="text-lg text-foreground border-l-4 border-black pl-6 py-2"
                  >
                    Strategic AI implementation with measurable ROI
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2 * 0.1 }}
                    className="text-lg text-foreground border-l-4 border-black pl-6 py-2"
                  >
                    End-to-end support from strategy to optimization
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Torque AI Difference */}
      <section className="py-32 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              The Torque AI Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four ways we help you reclaim revenue and rebuild alignment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
              className="bg-white p-10 rounded-lg border-2 border-transparent hover:border-foreground transition-all duration-300"
            >
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Stop the Leak</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quantify execution drift and reclaim that 5–10% revenue.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-lg border-2 border-transparent hover:border-foreground transition-all duration-300"
            >
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Make AI Pay</h3>
              <p className="text-muted-foreground leading-relaxed">
                Apply Responsible-AI guardrails for real ROI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-10 rounded-lg border-2 border-transparent hover:border-foreground transition-all duration-300"
            >
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Win the Capacity War</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cut meeting/tool overload, redeploy hours to revenue work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-10 rounded-lg border-2 border-transparent hover:border-foreground transition-all duration-300"
            >
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                4
              </div>
              <h3 className="text-2xl font-bold mb-4">Match or Pass Peers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deploy the same Gen AI plays top performers use.
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <a href="mailto:info@torqueapp.ai?subject=Torque%20AI%20Audit">
              <Button size="lg" className="font-semibold">
                Book Your Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology to transform your operations and empower your team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white p-8 rounded-lg border-2 border-transparent hover:border-black transition-all duration-300"
              >
                <div className="text-6xl font-bold text-muted-foreground/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Transform
            <br />
            Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Limited availability for enterprise clients who are serious about leveraging AI
            to drive measurable results and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:info@torqueapp.ai">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 font-semibold px-12 py-6 text-lg"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
