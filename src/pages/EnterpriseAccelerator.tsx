import React from "react";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ZohoAI90DayForm } from "@/components/ZohoAI90DayForm";
import { CheckCircle, ArrowRight, X, Clock, Users, Zap, Target, BarChart3, Settings, TrendingUp, Shield } from "lucide-react";
import chrisBioImage from "@/assets/chris-bio.png";

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

export default function EnterpriseAccelerator() {
  return (
    <div className="min-h-screen bg-background text-foreground font-lexend">
      <SEO 
        title="90-Day AI Accelerator | Torque"
        description="Turn AI confusion into revenue, clarity, and momentum in 90 days. A hands-on accelerator for executives and operators who want measurable business results."
        keywords="90-day AI accelerator, executive AI program, AI implementation, business AI transformation, AI consulting"
        url="/enterprise-accelerator"
      />
      <Header />

      {/* HERO - ABOVE THE FOLD */}
      <section className="relative min-h-[90vh] flex items-center bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Turn AI Confusion Into Revenue, Clarity, and Momentum
              <span className="block text-muted-foreground mt-2">— in 90 Days</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A hands-on, done-with-you AI accelerator for executives and operators who want measurable business results — not experiments, tools, or theory.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-4 space-y-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-4 text-lg font-semibold transition-all hover:bg-foreground/90"
              >
                👉 Apply for the 90-Day AI Accelerator
              </a>
              <p className="text-sm text-muted-foreground">
                Selective. Limited capacity. Applications reviewed within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
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
              Built for Leaders Who Know AI Matters — But Don't Want Guesswork
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* For */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-primary">This is for you if:</h3>
              {[
                "CEOs, CMOs, CROs, and senior operators",
                "Teams under pressure to \"do something with AI\"",
                "Organizations tired of pilots that never scale",
                "Leaders who want execution, not education"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </motion.div>

            {/* Not For */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-muted-foreground">This is NOT for:</h3>
              {[
                "Tool shoppers",
                "DIY learners",
                "Anyone looking for a course instead of implementation"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE REAL PROBLEM */}
      <section className="border-t border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-8"
            >
              Most AI Initiatives Fail for One Reason
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-muted-foreground space-y-6 max-w-3xl mx-auto"
            >
              <p>
                AI tools are everywhere. Results are not.
              </p>
              <p>
                Most companies chase features instead of systems — creating noise, confusion, and stalled momentum.
              </p>
              <p className="text-foreground font-semibold text-2xl pt-4">
                Torque exists to fix that.
              </p>
            </motion.div>
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
              The Torque System: How We Drive Results in 90 Days
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              {
                icon: Target,
                title: "Audit",
                description: "Identify real opportunities tied to revenue and efficiency"
              },
              {
                icon: Settings,
                title: "Build",
                description: "Design AI systems around your data and workflows"
              },
              {
                icon: Zap,
                title: "Implement",
                description: "Deploy across marketing, sales, and operations"
              },
              {
                icon: TrendingUp,
                title: "Optimize",
                description: "Measure, refine, and scale what works"
              }
            ].map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="bg-background border border-border rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-foreground/5 mb-4">
                  <step.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-lg font-medium"
          >
            No slide decks. No theory. Everything gets implemented.
          </motion.p>
        </div>
      </section>

      {/* WHAT HAPPENS IN 90 DAYS */}
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
              What You'll Have — 30, 60, and 90 Days From Now
            </motion.h2>
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
                phase: "First 30 Days",
                items: [
                  "AI Opportunity Map",
                  "Priority use cases",
                  "Quick-win automations live"
                ]
              },
              {
                phase: "By 60 Days",
                items: [
                  "AI embedded into real workflows",
                  "Teams aligned around execution",
                  "Clear performance baselines"
                ]
              },
              {
                phase: "By 90 Days",
                items: [
                  "Measurable ROI",
                  "Scalable AI systems",
                  "A repeatable operating model"
                ]
              }
            ].map((column, i) => (
              <motion.div
                key={column.phase}
                variants={fadeInUp}
                className="bg-secondary/30 border border-border rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-border">{column.phase}</h3>
                <ul className="space-y-4">
                  {column.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-lg font-semibold mt-12 text-primary"
          >
            This is not a strategy exercise. It's a business transformation sprint.
          </motion.p>
        </div>
      </section>

      {/* HOW THE ACCELERATOR WORKS */}
      <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-4 text-center"
            >
              A Done-With-You Engagement — Not Consulting Theater
            </motion.h2>
            
            <motion.div 
              variants={staggerContainer}
              className="mt-12 space-y-4"
            >
              {[
                "Weekly working sessions",
                "Direct access to senior guidance",
                "Custom systems built for your business",
                "Implementation alongside your team"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-5 rounded-lg bg-background border border-border"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="text-center text-muted-foreground mt-10"
            >
              Torque has helped leaders turn complexity into clarity across marketing, sales, and operations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHY TORQUE IS DIFFERENT */}
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
              Why This Works When Others Don't
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { label: "Systems", vs: "over tools" },
              { label: "Execution", vs: "over experimentation" },
              { label: "Outcomes", vs: "over buzzwords" },
              { label: "Accountability", vs: "built in" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-center gap-4 p-6 rounded-lg border border-border bg-secondary/20"
              >
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-lg">
                  <span className="font-bold">{item.label}</span>{" "}
                  <span className="text-muted-foreground">{item.vs}</span>
                </p>
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
              Built by Operators. Trusted by Leaders.
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

          {/* Founder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-8 bg-background border border-border rounded-2xl p-8"
          >
            <motion.div variants={fadeInUp} className="flex-shrink-0">
              <img 
                src={chrisBioImage} 
                alt="Chris Dessi" 
                className="w-32 h-32 rounded-full object-cover"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-lg italic text-muted-foreground mb-4">
                "15+ years helping organizations turn emerging technology into business leverage."
              </p>
              <p className="font-semibold">Chris Dessi</p>
              <p className="text-sm text-muted-foreground">Founder, Torque</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* APPLY SECTION */}
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
              Apply for the 90-Day AI Accelerator
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            >
              This program is selective. We work with a limited number of organizations at a time to ensure real results.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="bg-secondary/50 rounded-2xl p-8 border border-border"
            >
              <ZohoAI90DayForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div 
              variants={staggerContainer}
              className="space-y-6"
            >
              {[
                {
                  q: "Is this consulting or training?",
                  a: "Neither. It's implementation. We work alongside your team to build and deploy AI systems that deliver measurable results."
                },
                {
                  q: "What if we already use AI tools?",
                  a: "Good. We'll audit what's working, what's not, and build a system that connects the dots — not add more tools to the pile."
                },
                {
                  q: "How much time is required?",
                  a: "Expect 2-4 hours per week from key stakeholders. We handle the heavy lifting. You provide direction and feedback."
                },
                {
                  q: "Is this right for small teams?",
                  a: "If you have 10+ employees and serious revenue goals, yes. If you're a solo founder exploring AI, this isn't the right fit."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-background border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              Ready to Stop Experimenting and Start Executing?
            </motion.h2>

            <motion.div variants={fadeInUp} className="pt-4 space-y-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-4 text-lg font-semibold transition-all hover:bg-foreground/90"
              >
                👉 Apply for the 90-Day AI Accelerator
              </a>
              <p className="text-sm text-muted-foreground">
                Serious operators only. No pressure. No obligation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
