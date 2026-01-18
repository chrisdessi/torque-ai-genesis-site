import React from "react";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ZohoAI90DayForm } from "@/components/ZohoAI90DayForm";
import { CheckCircle, ArrowRight, Users, TrendingUp, Clock, Zap, Target, BarChart3 } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-lexend">
      <SEO 
        title="90-Day AI Accelerator | Torque AI Consulting"
        description="Transform your business with AI in 90 days. Clarity, revenue, and systems that scale. For executives and operators ready to move beyond the AI noise."
        keywords="AI consulting, 90-day AI accelerator, executive AI strategy, business AI implementation, AI systems, revenue growth, operational clarity"
        url="/"
      />
      <Header />

      {/* HERO - Outcome Focused */}
      <section className="relative min-h-[85vh] flex items-center bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.p 
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full border border-border bg-secondary text-sm font-medium text-muted-foreground"
            >
              For executives and operators ready to move
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Clarity. Revenue. Systems.
              <span className="block text-muted-foreground mt-2">In 90 days.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Torque helps business leaders implement AI that actually works — not more tools, not more noise. 
              A proven system to unlock growth without adding complexity.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-4 text-lg font-semibold transition-all hover:bg-foreground/90"
              >
                Apply for the 90-Day AI Accelerator
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Who this is for
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground"
            >
              Leaders who want results, not experiments.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Users,
                title: "Founders & CEOs",
                description: "Running companies between $1M–$50M who need AI to create leverage, not more overhead."
              },
              {
                icon: TrendingUp,
                title: "Operators & Leaders",
                description: "Responsible for growth, revenue, or operations who want systems that scale."
              },
              {
                icon: Clock,
                title: "Time-Strapped Executives",
                description: "Who can't afford to waste another quarter figuring out AI on their own."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-foreground/5 mb-5">
                  <item.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-t border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-6 text-center"
            >
              The problem with AI today
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            >
              Most businesses are drowning in AI options. The result? Paralysis, wasted money, and zero progress.
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              className="space-y-4"
            >
              {[
                "You've tried ChatGPT, but it hasn't moved the needle.",
                "Your team is experimenting with AI tools — without a plan.",
                "Consultants offer frameworks, not outcomes.",
                "Every vendor promises transformation. None deliver it.",
                "You're spending time on AI instead of on your business."
              ].map((problem, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50"
                >
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                  <p className="text-lg text-foreground/80">{problem}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="text-center text-lg font-medium mt-12"
            >
              Torque cuts through the noise with a system that works.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* THE TORQUE SYSTEM */}
      <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              The Torque System
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A proven 4-phase process that takes you from confusion to clarity in 90 days.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                phase: "01",
                title: "Audit",
                description: "We diagnose your current operations, identify high-impact opportunities, and create a roadmap."
              },
              {
                phase: "02",
                title: "Build",
                description: "We design AI systems tailored to your business — not generic solutions."
              },
              {
                phase: "03",
                title: "Implement",
                description: "We deploy, test, and integrate AI into your workflows with minimal disruption."
              },
              {
                phase: "04",
                title: "Optimize",
                description: "We refine, measure, and scale what works — building momentum that compounds."
              }
            ].map((step, i) => (
              <motion.div
                key={step.phase}
                variants={fadeInUp}
                className="bg-background border border-border rounded-xl p-6"
              >
                <span className="text-4xl font-bold text-muted-foreground/30">{step.phase}</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU ACHIEVE IN 90 DAYS */}
      <section className="border-t border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              What you achieve in 90 days
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground"
            >
              Real outcomes, not just deliverables.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              "A clear AI strategy aligned with your business goals",
              "At least one revenue-generating AI system live and working",
              "Time back — automated workflows that run without you",
              "A team trained to maintain and expand AI capabilities",
              "A roadmap for the next 12 months of AI-driven growth",
              "Confidence that you're ahead of the curve, not behind it"
            ].map((outcome, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4 p-5 rounded-lg border border-border bg-secondary/20"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg">{outcome}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROOF & CREDIBILITY */}
      <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Trusted by leaders who move fast
            </motion.h2>
          </motion.div>

          {/* Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 mb-16 opacity-60"
          >
            <img src="/logos/fox-logo.png" alt="Fox" className="h-6 sm:h-8 object-contain" />
            <img src="/logos/nbc-logo.png" alt="NBC" className="h-6 sm:h-8 object-contain" />
            <img src="/logos/cbs-logo.png" alt="CBS" className="h-6 sm:h-8 object-contain" />
            <img src="/logos/abc-logo.png" alt="ABC" className="h-6 sm:h-8 object-contain" />
            <img src="/logos/cnn-logo.png" alt="CNN" className="h-6 sm:h-8 object-contain" />
            <img src="/logos/forbes-logo.png" alt="Forbes" className="h-6 sm:h-8 object-contain" />
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                quote: "Torque helped us cut through months of indecision and implement AI that actually moved our revenue.",
                name: "CEO",
                company: "B2B SaaS Company"
              },
              {
                quote: "No fluff. No endless workshops. Just a system that works. We saw ROI within the first 30 days.",
                name: "COO",
                company: "E-commerce Brand"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-background border border-border rounded-xl p-8"
              >
                <p className="text-lg italic text-foreground/80 mb-6">"{testimonial.quote}"</p>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="apply" className="border-t border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Ready to move?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            >
              Apply for the 90-Day AI Accelerator. We'll review your application and schedule a strategy call if it's a fit.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="bg-secondary/50 rounded-2xl p-8 border border-border"
            >
              <ZohoAI90DayForm />
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="text-sm text-muted-foreground mt-8"
            >
              Limited spots available. We work with a small number of clients to ensure results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
