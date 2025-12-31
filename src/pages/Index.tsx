import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServicesScoreApp from "@/components/ServicesScoreApp";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import ZohoContactForm from "@/components/ZohoContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <SEO 
        title="AI Consulting & Strategy for Business Growth"
        description="Torque AI is a leading AI consulting firm helping businesses implement AI strategy, marketing automation, and team training. Get expert AI consulting services to drive revenue growth and operational efficiency."
        keywords="AI consulting, AI strategy consultant, AI consulting firm, AI business consulting, enterprise AI solutions, AI implementation services, AI marketing automation, AI workflow optimization, business AI transformation, ChatGPT consulting, AI training workshops, Christopher Dessi"
        url="/"
      />
      <Header />
      
      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-border"
      >
        {/* Dynamic animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
          
          {/* Animated glow orbs */}
          <motion.div 
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[100px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/40 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-28 lg:flex-row lg:items-center lg:justify-between lg:py-36">
          <motion.div 
            className="max-w-2xl space-y-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p 
              variants={fadeInUp}
              className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-base font-semibold uppercase tracking-wide text-primary"
            >
              Strategy • Marketing • Training
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]"
            >
              <span className="text-foreground">AI That Grows Your Business —</span>
              <span className="block mt-2 gradient-text">
                Not Your Headaches
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-muted-foreground sm:text-2xl leading-relaxed max-w-xl"
            >
              Torque AI helps business owners implement AI the{" "}
              <span className="font-semibold text-primary">right</span> way:
              <span className="font-semibold text-foreground">
                {" "}Strategy → Marketing → Team Training.
              </span>{" "}
              More leads, more sales, and more efficient operations.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
              <motion.a
                href="#book-call"
                className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all duration-300 hover:-translate-y-1 animate-electric"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your AI Strategy Call
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border-2 border-border px-8 py-4 text-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-300 glass"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See How It Works
              </motion.a>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-base text-muted-foreground">
              Used by business owners, executives, and teams who want real
              results from AI — not just another demo.
            </motion.p>
          </motion.div>

          {/* Hero Right: Torque AI System card */}
          <motion.div 
            className="w-full max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-3xl glass-card p-8 animate-electric">
              <p className="mb-6 text-base font-semibold uppercase tracking-wide text-primary glow-text">
                The Torque AI System™
              </p>
              <div className="space-y-6">
                {[
                  { num: "1", title: "Strategy", desc: "AI Audit & 90-day roadmap aligned to your business goals." },
                  { num: "2", title: "Marketing", desc: "AI-powered funnels, campaigns, and automations that drive revenue." },
                  { num: "3", title: "Training", desc: "We train your team so AI becomes part of how you work daily." }
                ].map((item, i) => (
                  <motion.div 
                    key={item.num}
                    className="flex items-start gap-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                  >
                    <motion.div 
                      className="h-12 w-12 rounded-full bg-primary/20 ring-2 ring-primary flex items-center justify-center text-lg font-bold text-primary flex-shrink-0"
                      animate={{ 
                        boxShadow: ['0 0 20px hsl(217 91% 60% / 0.3)', '0 0 30px hsl(217 91% 60% / 0.5)', '0 0 20px hsl(217 91% 60% / 0.3)']
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      {item.num}
                    </motion.div>
                    <div>
                      <p className="text-xl font-semibold text-foreground">{item.title}</p>
                      <p className="text-lg text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-5 text-lg text-foreground border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                "In 2 years, we generated{" "}
                <span className="font-bold text-primary glow-text">$32M</span> in
                deals by implementing AI into a commodity business."
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-semibold uppercase tracking-wide text-muted-foreground">
            As Seen On & Trusted By
          </p>
          <div className="flex flex-wrap items-center gap-6 text-base font-medium text-foreground">
            <motion.span whileHover={{ color: 'hsl(217 91% 60%)' }} className="cursor-default transition-colors">Fox5 News</motion.span>
            <span className="h-2 w-2 rounded-full bg-primary/50 animate-pulse" />
            <motion.span whileHover={{ color: 'hsl(217 91% 60%)' }} className="cursor-default transition-colors">AI Summit NYC</motion.span>
            <span className="h-2 w-2 rounded-full bg-primary/50 animate-pulse" />
            <motion.span whileHover={{ color: 'hsl(217 91% 60%)' }} className="cursor-default transition-colors">Torque Academy</motion.span>
            <span className="h-2 w-2 rounded-full bg-primary/50 animate-pulse" />
            <motion.span whileHover={{ color: 'hsl(217 91% 60%)' }} className="cursor-default transition-colors">Westchester AI Alliance</motion.span>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="pillars" className="border-b border-border bg-background relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-16 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              The Three Pillars of <span className="gradient-text">Torque AI</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground sm:text-2xl leading-relaxed">
              AI isn't a single tool. It's a system. We help you build that
              system across{" "}
              <span className="font-semibold text-primary">
                Strategy, Marketing, and Training
              </span>{" "}
              so the whole business moves forward.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Strategy */}
            <motion.div 
              id="strategy" 
              className="group flex flex-col rounded-3xl glass-card p-10 hover:border-primary/50 transition-all duration-500"
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.p 
                className="mb-4 text-base font-semibold uppercase tracking-wide text-primary"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Pillar 1
              </motion.p>
              <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all">Strategy</h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Most businesses don't have an AI problem — they have a{" "}
                <span className="font-semibold text-foreground">clarity problem</span>. We help
                you decide what to build, what to automate, and what to ignore.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  AI Audit & current state assessment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  90-day AI roadmap aligned to revenue
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Funnel & messaging redesign
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Workflow & automation planning
                </li>
              </ul>
              <p className="mt-6 text-base font-semibold text-primary">
                Outcome: Clarity, alignment, and no wasted money.
              </p>
            </motion.div>

            {/* Marketing */}
            <motion.div 
              id="marketing" 
              className="group flex flex-col rounded-3xl glass-card p-10 hover:border-primary/50 transition-all duration-500"
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.p 
                className="mb-4 text-base font-semibold uppercase tracking-wide text-primary"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                Pillar 2
              </motion.p>
              <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all">
                Marketing & Automation
              </h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We turn your AI strategy into a marketing engine that runs
                every day — capturing leads, nurturing them, and driving sales.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  AI agents for lead capture & qualification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  CRM, email, SMS & follow-up automation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Content & SEO systems powered by AI
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Full-funnel performance dashboards
                </li>
              </ul>
              <p className="mt-6 text-base font-semibold text-primary">
                Outcome: More leads, more sales, less dependency on you.
              </p>
            </motion.div>

            {/* Training */}
            <motion.div 
              id="training" 
              className="group flex flex-col rounded-3xl glass-card p-10 hover:border-primary/50 transition-all duration-500"
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.p 
                className="mb-4 text-base font-semibold uppercase tracking-wide text-primary"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                Pillar 3
              </motion.p>
              <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all">Training & Enablement</h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Tools don't transform companies —{" "}
                <span className="font-semibold text-foreground">people</span> do. We train your
                team so AI becomes part of how you operate.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Live workshops & team training (30–90 days)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Custom GPTs, SOPs & playbooks
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Leadership coaching & Q&A
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Ongoing support as you scale
                </li>
              </ul>
              <p className="mt-6 text-base font-semibold text-primary">
                Outcome: A confident team using AI every day.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-b border-border bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
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
                Real Results with <span className="gradient-text">Torque AI</span>
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-muted-foreground leading-relaxed">
                These are the kinds of outcomes you can expect when Strategy,
                Marketing, and Training work together.
              </p>
            </div>
            <motion.a
              href="#book-call"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk About Your Use Case
            </motion.a>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { tag: "E-Commerce", title: "92% Year-Over-Year Growth", desc: "We rebuilt their funnel, automated follow-up, and trained the team on daily AI usage — resulting in breakthrough growth." },
              { tag: "B2B Commodity", title: "$32M in Closed Deals", desc: "By combining AI-powered outreach, messaging, and deal management, we helped drive $32M in sales in just 2 years." },
              { tag: "Local Business", title: "More Leads, Less Admin", desc: "AI agents now handle lead capture, qualification, and follow-up, while the team focuses on serving customers." }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                className="group rounded-3xl glass-card p-8 hover:border-primary/50 transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.p 
                  className="text-base font-semibold uppercase tracking-wide text-primary"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  {item.tag}
                </motion.p>
                <h3 className="mt-4 text-2xl font-bold text-foreground group-hover:gradient-text transition-all">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-b border-border bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217_91%_60%_/_0.05)_0%,_transparent_70%)]" />
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
              How the <span className="gradient-text">Torque AI System™</span> Works
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We keep this simple. No jargon. No endless pilots. Just a clear
              path to value.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { step: "Step 1", title: "Book Your Strategy Call", desc: "We learn about your business, numbers, constraints, and what \"success with AI\" actually means for you." },
              { step: "Step 2", title: "Get Your 90-Day AI Roadmap", desc: "We map out quick wins, priority workflows, and the marketing systems to build first." },
              { step: "Step 3", title: "Implement & Train Your Team", desc: "We build the systems with you or for you and train your team so results keep compounding." }
            ].map((item, i) => (
              <motion.div 
                key={item.step}
                className="group rounded-3xl glass-card p-10 relative overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Animated border glow */}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OFFERS / PROGRAMS */}
      <section className="border-b border-border bg-secondary/30 relative overflow-hidden">
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
              Choose How You Want to Work with <span className="gradient-text">Torque AI</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Different businesses, different starting points. The common thread
              is always the same: Strategy → Marketing → Training.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Strategy Accelerator */}
            <motion.div 
              className="flex flex-col rounded-3xl glass-card p-10"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <p className="text-base font-semibold uppercase tracking-wide text-primary">
                30-Day Intensive
              </p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                AI Strategy Accelerator
              </h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                For leaders who want clarity, not more noise. In 30 days, we
                deliver a tailored AI roadmap, quick wins, and a launch plan.
              </p>
              <div className="mt-6 text-base text-muted-foreground">
                Includes: AI Audit, 90-Day Roadmap, priority workflows, and
                executive briefing.
              </div>
              <motion.a
                href="#book-call"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Strategy Accelerator
              </motion.a>
            </motion.div>

            {/* 90-Day Growth - Featured */}
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
                Most Popular
              </motion.div>
              <p className="text-base font-semibold uppercase tracking-wide text-primary mt-2">
                90-Day Program
              </p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                90-Day AI Growth Program
              </h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Done-with-you implementation. We build your AI-powered
                marketing systems, fix your funnel, and train your team.
              </p>
              <div className="mt-6 text-base text-muted-foreground">
                Includes: Strategy, build-out, training, and ongoing support.
              </div>
              <motion.a
                href="#book-call"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See If This Program Fits You
              </motion.a>
            </motion.div>

            {/* Platform / Academy */}
            <motion.div 
              className="flex flex-col rounded-3xl glass-card p-10"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <p className="text-base font-semibold uppercase tracking-wide text-primary">
                Platform & Learning
              </p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                Torque AI Platform & Academy
              </h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                For teams who want tools and training all in one place.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-muted-foreground">
                <li>
                  •{" "}
                  <a
                    href="https://www.torqueacademy.ai"
                    className="text-primary underline hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Torque Academy
                  </a>{" "}
                  — on-demand AI training
                </li>
                <li>
                  • AI-powered marketing stack (chatbots, CRM, campaigns)
                </li>
              </ul>
              <motion.a
                href="https://www.torqueacademy.ai"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-border px-6 py-4 text-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Torque Academy
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI READINESS QUIZ */}
      <section id="ai-quiz" className="border-b border-border bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217_91%_60%_/_0.08)_0%,_transparent_60%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="max-w-4xl mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              Not Sure Where to <span className="gradient-text">Start?</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Take the AI Readiness Quiz. In a few minutes, you'll see where your 
              business stands on Strategy, Marketing, and Training — and what to fix first.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ServicesScoreApp />
          </motion.div>
        </div>
      </section>

      {/* ABOUT CHRIS */}
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
                I'm Chris, a Chappaqua-based founder, author, and AI strategist.
                Over the past two decades, I've led global sales and marketing
                teams, generated{" "}
                <span className="font-bold text-primary glow-text">$32M</span>{" "}
                using AI to sell a commodity product, and helped business owners
                turn chaos into clarity with AI.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I created Torque AI because most AI advice is either too
                technical or too theoretical. Business owners don't need more
                theory — they need{" "}
                <span className="font-semibold text-foreground">revenue, systems, and a team</span>{" "}
                that knows how to use AI every day.
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
      <section className="border-b border-border bg-background relative overflow-hidden">
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
              The <span className="gradient-text">Torque AI</span> Ecosystem
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Torque AI powers and supports a broader ecosystem of events,
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

      {/* BOOK CALL / ZOHO / CALENDLY */}
      <section id="book-call" className="border-b border-border bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(217_91%_60%_/_0.1)_0%,_transparent_60%)]" />
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              Ready to See What <span className="gradient-text">AI Can Really Do?</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Tell us a bit about your business, and we'll follow up with a
              strategy session to map out your first (or next) 90 days with AI.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-lg text-muted-foreground">
              <motion.span 
                className="flex items-center gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-primary">✓</span> No generic pitch
              </motion.span>
              <motion.span 
                className="flex items-center gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <span className="text-primary">✓</span> Strategy, Marketing, and Training
              </motion.span>
              <motion.span 
                className="flex items-center gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <span className="text-primary">✓</span> Leave with clarity
              </motion.span>
            </div>
          </motion.div>

          <motion.div 
            className="grid gap-10 lg:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Schedule a Call
              </h3>
              <CalendlyEmbed />
            </div>
            <div className="rounded-3xl glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Or Send Us a Message
              </h3>
              <ZohoContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
