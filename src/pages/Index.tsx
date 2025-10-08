import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, DollarSign, TrendingDown, Clock, AlertTriangle, Users, Target, Zap, TrendingUp, Sparkles, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import Hero from "@/components/Hero";
import alignmentVisual from "@/assets/alignment-visual.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import automationFlow from "@/assets/automation-flow.jpg";

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
      <Hero />

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
              { end: 10, prefix: "5–", suffix: "%", label: "of annual revenue wiped out by strategy failures", icon: DollarSign, iconColor: "text-red-600" },
              { end: 80, suffix: "%", label: "of employees lack time or energy to do their best work", icon: Users, iconColor: "text-orange-600" },
              { end: 40, suffix: "%", label: "of productive time stolen by context switching each week", icon: Clock, iconColor: "text-yellow-600" },
              { end: 100, suffix: "%", label: "of margins silently taxed by meeting and tool overload", icon: TrendingDown, iconColor: "text-red-700" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-2 border-transparent hover:border-foreground"
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${item.iconColor} bg-muted rounded-full flex items-center justify-center`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-3">
                  <AnimatedCounter end={item.end} suffix={item.suffix} prefix={item.prefix} duration={2.5} />
                </div>
                <p className="text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/contact">
                Quantify Your Execution Leak
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Where You're Losing Money */}
      <section className="py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={automationFlow} 
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-600"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <DollarSign className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Revenue Leak</h3>
              <div className="text-center mb-4">
                <span className="text-5xl font-bold text-red-600">
                  <AnimatedCounter end={5} duration={2} />–<AnimatedCounter end={10} duration={2} />%
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                of topline wasted through execution drift, duplication and hand-offs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-600"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <AlertTriangle className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Risk</h3>
              <div className="text-center mb-4">
                <span className="text-5xl font-bold text-orange-600">
                  $<AnimatedCounter end={4.4} decimals={1} duration={2} />B
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                lost by firms without Responsible AI governance (EY 2025)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-yellow-600"
            >
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Lost Time</h3>
              <div className="text-center mb-4">
                <span className="text-5xl font-bold text-yellow-600">
                  <AnimatedCounter end={80} duration={2} />%
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                of staff already at capacity while leaders demand productivity gains (Microsoft 2025)
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/contact">
                Stop the Leak
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
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
              className="bg-white p-10 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-600"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <div className="text-6xl font-bold mb-4 text-green-600">
                <AnimatedCounter end={93} duration={2.5} />%
              </div>
              <p className="text-lg text-muted-foreground">
                of CMOs already report positive ROI from Gen AI
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-600"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-5xl font-bold mb-4 text-blue-600">Revenue Lift</div>
              <p className="text-lg text-muted-foreground">
                Business units using Gen AI see measurable revenue lift (McKinsey 2025)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-10 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-600"
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-10 h-10 text-purple-600" />
              </div>
              <div className="text-6xl font-bold mb-4 text-purple-600">
                <AnimatedCounter end={40} duration={2.5} />%
              </div>
              <p className="text-lg text-muted-foreground">
                of enterprise apps will embed AI agents by 2026 (Gartner)
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/contact">
                Catch Up Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
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
          <Button 
            asChild
            size="lg" 
            className="bg-white text-destructive hover:bg-gray-100 font-semibold"
          >
            <Link to="/contact">
              Secure Your Seat
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
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
              <div className="relative">
                <img 
                  src={teamCollaboration} 
                  alt="Team collaborating with AI technology"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              
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
            <Button asChild size="lg" className="font-semibold">
              <Link to="/contact">
                Book Your Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
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
            <Button 
              asChild
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 font-semibold px-12 py-6 text-lg"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
