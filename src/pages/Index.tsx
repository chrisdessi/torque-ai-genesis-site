import React from "react";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServicesScoreApp from "@/components/ServicesScoreApp";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import ZohoContactForm from "@/components/ZohoContactForm";
import ZohoTorqueCommunityForm from "@/components/ZohoTorqueCommunityForm";
import ZohoAICommunityButton from "@/components/ZohoAICommunityButton";

import ScrollingWord from "@/components/ScrollingWord";
import ScrollSpinLogo from "@/components/ScrollSpinLogo";
import SystemFlowVisualization from "@/components/SystemFlowVisualization";
import SystemEvolutionSection from "@/components/SystemEvolutionSection";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-lexend">
      <SEO 
        title="Executive Decision Intelligence | AI Consulting for Leaders"
        description="Torque helps founders and executive teams cut through noise, eliminate decision bottlenecks, and restore clarity — using AI as leverage, not distraction. Executive operating clarity in the age of AI."
        keywords="executive decision intelligence, AI consulting, decision system, executive clarity, AI strategy, leadership consulting, decision bottlenecks, business AI, founder coaching, executive AI consulting, Christopher Dessi"
        url="/"
      />
      <Header />
      <ScrollSpinLogo />
      
      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden bg-background"
      >
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 py-20 sm:py-28 lg:flex-row lg:items-center lg:justify-between lg:py-36">
          <motion.div 
            className="max-w-2xl space-y-6 sm:space-y-8 lg:space-y-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p 
              variants={fadeInUp}
              className="inline-flex items-center rounded-full border border-foreground/20 bg-foreground/5 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground"
            >
              Executive Decision Intelligence
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] sm:leading-[1.05]"
            >
              <span className="text-foreground">Make </span>
              <ScrollingWord words={["Fewer", "Better"]} />
              <span className="text-foreground"> Decisions.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Torque helps founders and executive teams{" "}
              <strong className="text-foreground">cut through noise</strong>,
              eliminate decision bottlenecks, and restore clarity — using AI as{" "}
              <strong className="text-foreground">leverage, not distraction.</strong>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5">
              <motion.a
                href="#book-call"
                className="group inline-flex items-center justify-center rounded-full bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-center">Start with the Executive Decision Audit</span>
                <motion.span 
                  className="ml-2 hidden sm:inline"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border-2 border-foreground px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore the Thinking
              </motion.a>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm sm:text-base text-muted-foreground">
              No hype. No tool soup. Just clarity, control, and execution that sticks.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <ZohoAICommunityButton />
            </motion.div>
          </motion.div>

          {/* Hero Right: Decision System card */}
          <motion.div 
            className="w-full max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-3xl border-2 border-foreground/10 bg-secondary p-8">
              <p className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
                If This Feels Familiar...
              </p>
              <div className="space-y-5">
                {[
                  "You're over-involved in decisions that shouldn't reach you.",
                  "AI tools are everywhere, but clarity is nowhere.",
                  "Meetings repeat. Debates repeat. Decisions repeat.",
                  "Execution is busy — but outcomes aren't moving."
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="h-3 w-3 mt-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-lg text-foreground/80">{item}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-8 rounded-2xl bg-accent/30 p-5 text-lg text-foreground border-2 border-accent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                Torque starts with an executive-level diagnostic and ends with a{" "}
                <strong className="text-primary">decision system</strong> your 
                business can actually run on.
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF - TV Logos */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:gap-6 px-4 sm:px-6 py-6 sm:py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground text-center sm:text-left">
            As Seen On
          </p>
          <a 
            href="https://www.youtube.com/watch?v=9J1Kauiq42g" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <img src="/logos/fox-logo.png" alt="Fox" className="h-5 sm:h-6 lg:h-8 object-contain" />
            <img src="/logos/nbc-logo.png" alt="NBC" className="h-5 sm:h-6 lg:h-8 object-contain" />
            <img src="/logos/cbs-logo.png" alt="CBS" className="h-5 sm:h-6 lg:h-8 object-contain" />
            <img src="/logos/abc-logo.png" alt="ABC" className="h-5 sm:h-6 lg:h-8 object-contain" />
            <img src="/logos/cnn-logo.png" alt="CNN" className="h-5 sm:h-6 lg:h-8 object-contain" />
          </a>
        </div>
      </section>

      {/* THE REAL PROBLEM */}
      <section id="problem" className="dark-section py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div 
            className="mb-10 sm:mb-16 max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3 sm:mb-4">
              The Real Problem
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
              The real problem isn't AI.{" "}
              <span className="highlight-text">It's decision overload.</span>
            </h2>
            <p className="mt-4 sm:mt-8 text-base sm:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Executives today are surrounded by tools, dashboards, and opinions — yet clarity keeps slipping away.
              AI promised relief. Instead, it multiplied noise.
            </p>
            <p className="mt-3 sm:mt-4 text-base sm:text-xl text-primary font-bold">
              This isn't a productivity issue. It's a decision issue.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Before */}
            <motion.div 
              className="group flex flex-col rounded-3xl border-2 border-red-500/30 bg-white/5 p-10"
              variants={scaleIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-400">
                Before
              </p>
              <ul className="space-y-4 text-lg text-white/80">
                {[
                  "Constant escalation and \"quick questions\"",
                  "Recurring debates that never resolve",
                  "Reactive priorities shifting daily",
                  "Founder as the bottleneck for everything"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div 
              className="group flex flex-col rounded-3xl border-2 border-primary/30 bg-white/5 p-10"
              variants={scaleIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
                After
              </p>
              <ul className="space-y-4 text-lg text-white/80">
                {[
                  "Clear ownership on every decision",
                  "Stable priorities that hold",
                  "Fewer meetings, faster execution",
                  "Calmer leadership with more capacity"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SYSTEM FLOW VISUALIZATION */}
      <SystemFlowVisualization />
      
      {/* SYSTEM EVOLUTION */}
      <SystemEvolutionSection />

      {/* DECISION SYSTEM */}
      <section id="pillars" className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div 
            className="mb-10 sm:mb-16 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3 sm:mb-4">
              Decision System
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-tight">
              Torque is not a productivity tool.{" "}
              <span className="highlight-text">It's a decision system</span> for leaders.
            </h2>
            <p className="mt-4 sm:mt-8 text-base sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              AI should execute decisions — not create more of them.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { title: "Decide what actually matters", icon: "🎯" },
              { title: "Ignore what doesn't", icon: "🚫" },
              { title: "Eliminate repeated decisions", icon: "🔄" },
              { title: "Remove founders from unnecessary loops", icon: "🔓" },
              { title: "Execute without rework", icon: "⚡" }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                className="group flex flex-col items-center text-center rounded-2xl sm:rounded-3xl border-2 border-border bg-secondary p-4 sm:p-6 lg:p-8 hover:border-primary transition-all duration-300"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">{item.icon}</span>
                <p className="text-xs sm:text-sm lg:text-lg font-bold text-foreground">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES - Updated */}
      <section className="border-b border-border bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217_91%_60%_/_0.05)_0%,_transparent_70%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                What changes when <span className="gradient-text">decision flow is fixed</span>
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-muted-foreground leading-relaxed">
                Real results from executives who restored clarity and took back their time.
              </p>
            </div>
            <motion.a
              href="#book-call"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Decision Audit
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-12 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { tag: "Fewer Escalations", title: "Founder freed from daily fires", desc: "Decisions that used to require founder approval now flow through clear ownership structures — saving 10+ hours per week." },
              { tag: "Faster Decisions", title: "$32M in Closed Deals", desc: "By combining clear decision ownership with AI-powered execution, we helped drive $32M in sales in just 2 years." },
              { tag: "Less Churn", title: "Meetings cut by 60%", desc: "When decisions don't repeat and ownership is clear, recurring meetings become unnecessary. Execution speeds up dramatically." }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                className="group rounded-3xl glass-card p-10 lg:p-12 hover:border-primary/50 transition-all duration-500 max-w-3xl mx-auto w-full"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                  {item.tag}
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS - Updated */}
      <section id="how-it-works" className="border-b border-border bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-16 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              How <span className="gradient-text">Torque</span> Works
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We don't start with tools. We start with the decision loop — then we install AI where it actually belongs.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              { step: "Step 01", title: "Diagnose", desc: "We identify where decisions stall, repeat, or escalate unnecessarily through an Executive Decision Audit.", cta: "See the Audit", href: "#book-call" },
              { step: "Step 02", title: "Reset", desc: "In a structured 90-day intervention, we rebuild how decisions are made, owned, and executed.", cta: "Apply for the 90-Day Cohort", href: "/enterprise-accelerator" },
              { step: "Step 03", title: "Maintain", desc: "Torque becomes the system that preserves clarity — capturing decisions, learning patterns, and automating execution.", cta: "See the Platform", href: "#ecosystem" }
            ].map((item, i) => (
              <motion.div 
                key={item.step}
                className="group rounded-3xl glass-card p-10 relative overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.1) 0%, transparent 50%)' }}
                />
                
                <motion.p 
                  className="text-base font-semibold uppercase tracking-wide text-primary relative z-10"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {item.step}
                </motion.p>
                <h3 className="mt-3 text-2xl font-bold text-foreground relative z-10 group-hover:gradient-text transition-all">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed relative z-10">
                  {item.desc}
                </p>
                <a 
                  href={item.href}
                  className="mt-4 inline-block text-primary font-semibold hover:underline relative z-10"
                >
                  {item.cta} →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="border-b border-border bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217_91%_60%_/_0.08)_0%,_transparent_60%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="grid gap-12 lg:grid-cols-2 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div>
                <p className="text-base font-semibold uppercase tracking-wide text-primary mb-4">
                  Who This Is For
                </p>
                <h2 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
                  Built for executives who feel <span className="gradient-text">stuck despite momentum.</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Torque is designed for founders, CEOs, operators, and leadership teams who feel:
              </p>
              <ul className="space-y-4 text-lg text-muted-foreground">
                {[
                  "Over-involved in everything",
                  "Behind despite effort",
                  "Surrounded by tools but lacking clarity"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4">
                If your company is growing but leadership feels heavier each quarter, you don't need more bandwidth — you need a better decision system.
              </p>
            </motion.div>

            <motion.div 
              className="rounded-3xl glass-card p-10"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Typical Outcomes</h3>
              <ul className="space-y-5">
                {[
                  { icon: "📉", text: "Fewer escalations to the founder" },
                  { icon: "⚡", text: "Faster decisions with clear ownership" },
                  { icon: "🎯", text: "Less meeting churn, more execution" },
                  { icon: "🤖", text: "AI deployed as leverage (not distraction)" }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-4 text-lg text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="border-b border-border bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-16 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              Choose How You Want to Work with <span className="gradient-text">Torque</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              The entry point is simple: we start with clarity.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Executive Decision Audit */}
            <motion.div 
              className="flex flex-col rounded-3xl glass-card p-10"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <p className="text-base font-semibold uppercase tracking-wide text-primary">
                Entry Point
              </p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                Executive Decision Audit
              </h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We identify where decisions stall, repeat, or escalate unnecessarily. 
                Leave with a clear diagnosis and action plan.
              </p>
              <div className="mt-6 text-base text-muted-foreground">
                Includes: Decision flow analysis, bottleneck identification, and priority recommendations.
              </div>
              <motion.a
                href="#book-call"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start with the Audit
              </motion.a>
            </motion.div>

            {/* 90-Day Reset - Featured */}
            <motion.div 
              className="flex flex-col rounded-3xl border-2 border-primary glass-card p-10 relative animate-electric"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className="absolute -top-4 left-8 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Full Intervention
              </motion.div>
              <p className="text-base font-semibold uppercase tracking-wide text-primary mt-2">
                90-Day Program
              </p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                90-Day Decision Reset
              </h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                A structured intervention where we rebuild how decisions are made, 
                owned, and executed across your leadership team.
              </p>
              <div className="mt-6 text-base text-muted-foreground">
                Includes: Audit, system design, team training, and ongoing support.
              </div>
              <motion.a
                href="/enterprise-accelerator"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for the Next Cohort
              </motion.a>
            </motion.div>

            {/* Quantum Coach */}
            <motion.div 
              className="flex flex-col rounded-3xl glass-card p-10"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <p className="text-base font-semibold uppercase tracking-wide text-primary">
                1-on-1 Executive Coaching
              </p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                Quantum Coach
              </h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Work directly with Chris Dessi. Stop wondering what to do next. 
                Start executing with clarity and confidence.
              </p>
              <ul className="mt-6 space-y-2 text-base text-muted-foreground">
                <li>• 60-minute strategic deep dive</li>
                <li>• Clear 30-day action plan</li>
                <li>• Battle-tested frameworks from real deals</li>
              </ul>
              <motion.a
                href="#book-call"
                className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-border px-6 py-4 text-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Quantum Shift
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IN-PERSON WORKSHOP CTA */}
      <section className="border-b border-border bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217_91%_60%_/_0.08)_0%,_transparent_70%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <motion.div 
            className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 sm:p-12 lg:p-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <motion.div 
                  className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-bold text-primary"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎟️ Limited Seats Available
                </motion.div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  AI for Business Operators <span className="gradient-text">Workshop</span>
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  A hands-on, in-person workshop that turns AI into real leverage for your business — workflows, decisions, and execution (not random prompts).
                </p>
                <div className="space-y-3 text-base text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="text-primary">📅</span>
                    <strong className="text-foreground">Friday, February 6th, 2026</strong> — Starting at 10am
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary">📍</span>
                    Prodigy Athletic Center, Somers, NY
                  </p>
                </div>
                <motion.a
                  href="/ai-workshop"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register for the Workshop →
                </motion.a>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                  <h3 className="font-bold text-lg text-foreground mb-4">What you'll walk away with:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {[
                      "Your personal AI Operator Playbook",
                      "10-20 prompts tailored to your role",
                      "1 workflow rebuilt with AI (SOP + checklist)",
                      "A clear 30-day implementation plan"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    WAIA Membership Included
                  </span>
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    Free Summit Ticket
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI READINESS QUIZ - Removed, replaced with Chris quote */}
      <section className="border-b border-border bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217_91%_60%_/_0.08)_0%,_transparent_60%)]" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-base font-semibold uppercase tracking-wide text-primary">
              For Leaders Ready to Transform
            </p>
            <blockquote className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              "Most leaders know what to do. They just don't know{" "}
              <span className="gradient-text">what to do first.</span>{" "}
              That's what I solve."
            </blockquote>
            <p className="text-xl text-muted-foreground">— Chris Dessi</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Work directly with Chris Dessi — author, TV commentator, and the leader who personally 
              closed over $100 million in enterprise deals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT CHRIS - Updated */}
      <section id="about" className="border-b border-border bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                Meet <span className="gradient-text">Chris Dessi</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm Chris, a Chappaqua-based founder, author, and executive strategist.
                Over the past two decades, I've led global sales and marketing
                teams, personally closed over{" "}
                <span className="font-bold text-primary glow-text">$100M</span>{" "}
                in enterprise deals, and helped leaders cut through decision chaos to find clarity.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I created Torque because most AI advice is either too
                technical or too theoretical. Executives don't need more
                tools — they need{" "}
                <span className="font-semibold text-foreground">clarity, control, and a system that works.</span>
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I also write and speak about reinvention and the future of work,
                including my latest book{" "}
                <a
                  href="https://www.im2old4thisshift.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary underline hover:text-primary/80 transition-colors"
                >
                  Too Old For This Shift
                </a>
                .
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="https://www.im2old4thisshift.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-border px-6 py-3 text-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn About the Book
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="rounded-3xl glass-card p-8">
                <p className="text-base font-semibold uppercase tracking-wide text-primary">
                  Watch
                </p>
                <h3 className="mt-3 text-2xl font-bold text-foreground">
                  Highlight Reel & Media
                </h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  See clips from my TV appearances, talks, and workshops.
                </p>
                <div className="mt-6 aspect-video rounded-2xl overflow-hidden ring-1 ring-primary/20">
                  <iframe
                    src="https://www.youtube.com/embed/MYX6N3m5y_I?si=CRZBlAGV9KWGzeRD"
                    title="Chris Dessi Highlight Reel"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ECOSYSTEM & RELATED BRANDS */}
      <section id="ecosystem" className="border-b border-border bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-12 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              The <span className="gradient-text">Torque</span> Ecosystem
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Torque powers and supports a broader ecosystem of events,
              communities, and tools designed to help leaders navigate this moment.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="rounded-3xl glass-card p-10"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Events & Summits</h3>
              <ul className="space-y-4 text-lg text-primary">
                <li>
                  <a href="https://www.aisummit.nyc" target="_blank" rel="noreferrer" className="underline hover:text-primary/80 transition-colors">
                    AI Summit NYC
                  </a>
                </li>
                <li>
                  <a href="https://www.westchesteraisummit.com" target="_blank" rel="noreferrer" className="underline hover:text-primary/80 transition-colors">
                    Westchester AI Summit
                  </a>
                </li>
                <li>
                  <a href="https://quantumshiftsummit.com/" target="_blank" rel="noreferrer" className="underline hover:text-primary/80 transition-colors">
                    Quantum Shift Summit
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="rounded-3xl glass-card p-10"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Communities & Alliances
              </h3>
              <ul className="space-y-4 text-lg text-primary">
                <li>
                  <a href="https://www.westchesteraialliance.com" target="_blank" rel="noreferrer" className="underline hover:text-primary/80 transition-colors">
                    Westchester AI Alliance
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="rounded-3xl glass-card p-10"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Torque-Powered Products
              </h3>
              <ul className="space-y-4 text-lg text-primary">
                <li>
                  <a href="https://realtor-easy-button.lovable.app" target="_blank" rel="noreferrer" className="underline hover:text-primary/80 transition-colors">
                    Real Estate DataHub
                  </a>
                </li>
                <li>
                  <a href="https://bookgenius.ai/" target="_blank" rel="noreferrer" className="underline hover:text-primary/80 transition-colors">
                    Book Genius AI
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARKETING AGENCY SERVICES */}
      <section id="marketing-services" className="border-b border-border bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)_/_0.08)_0%,_transparent_50%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                  Full-Service Marketing
                </p>
                <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                  Marketing that <span className="gradient-text">actually moves the needle</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                  Beyond decision systems, Torque offers complete marketing agency services — 
                  from strategy and positioning to content creation and conversion optimization.
                </p>
              </div>
              
              <motion.a
                href="/marketing-agency-services"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore All Services →
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: "Marketing Strategy", desc: "User personas, positioning, and acquisition channels that actually work", icon: "🎯" },
              { title: "Market Analysis", desc: "Competitor research, customer journey mapping, and actionable insights", icon: "📊" },
              { title: "Conversion Optimization", desc: "Landing pages, pricing strategies, and email sequences that sell", icon: "📈" },
              { title: "Content & SEO", desc: "High-quality blog articles, social posts, and keyword-optimized content", icon: "✍️" },
              { title: "Paid Advertising", desc: "Profitable ad campaigns across Google, Meta, and LinkedIn", icon: "🚀" },
              { title: "AI-Powered Execution", desc: "Save hours on marketing tasks with our AI assistant and research tools", icon: "🤖" }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                className="rounded-2xl bg-background border-2 border-border p-6 hover:border-primary/50 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quiz Teaser */}
          <motion.div 
            className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 p-8 sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
                  Interactive Quiz
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Not sure which services you need?
                </h3>
                <p className="text-lg text-muted-foreground">
                  Take our 2-minute quiz to get personalized recommendations based on your business goals, 
                  challenges, and growth stage.
                </p>
              </div>
              <motion.a
                href="/marketing-agency-services#quiz"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-primary/10 px-8 py-4 text-lg font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">🧠</span> Take the Quiz
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOOK CALL / ZOHO / CALENDLY - Updated */}
      <section id="book-call" className="border-b border-border bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(217_91%_60%_/_0.1)_0%,_transparent_60%)]" />
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              <span className="gradient-text">Clarity always comes first.</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Start with the Executive Decision Audit. We'll identify where decisions break down — and what to fix first.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-lg text-muted-foreground">
              <motion.span 
                className="flex items-center gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-primary">✓</span> No hype
              </motion.span>
              <motion.span 
                className="flex items-center gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <span className="text-primary">✓</span> No tool soup
              </motion.span>
              <motion.span 
                className="flex items-center gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <span className="text-primary">✓</span> Just clarity
              </motion.span>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl glass-card p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Book Your Executive Decision Audit
              </h3>
              <CalendlyEmbed />
            </div>
            
            
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <span className="relative bg-secondary px-6 py-2 text-lg font-medium text-muted-foreground rounded-full">
                Or Send Us a Message
              </span>
            </div>
            
            <div className="rounded-3xl glass-card p-8 lg:p-12">
              <ZohoContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      <ZohoTorqueCommunityForm />

      <Footer />
    </div>
  );
}
