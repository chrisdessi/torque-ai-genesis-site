import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Zap, Target, RefreshCw, CheckCircle2, TrendingUp, Users, Brain } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

function Card({ children, className = "", gradient = false }: { children: React.ReactNode; className?: string; gradient?: boolean }) {
  return (
    <motion.div 
      className={`rounded-3xl border border-white/20 ${gradient ? 'bg-gradient-to-br from-white/80 to-white/40' : 'bg-white/70'} backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${className}`}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </motion.a>
  );
}

function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a 
      href={href} 
      className="group inline-flex items-center gap-2 text-base font-semibold text-slate-700 hover:text-violet-600 transition-colors"
      whileHover={{ x: 5 }}
    >
      {children}
      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function HeroDecision() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50/50 to-indigo-50/30">
      {/* Animated background orbs */}
      <FloatingOrb className="w-[600px] h-[600px] bg-violet-300/40 -top-40 -right-40" />
      <FloatingOrb className="w-[500px] h-[500px] bg-indigo-300/30 -bottom-40 -left-40" delay={2} />
      <FloatingOrb className="w-[300px] h-[300px] bg-purple-300/30 top-1/2 left-1/3" delay={4} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative mx-auto max-w-6xl px-6 py-20 grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 backdrop-blur px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm"
          >
            <Zap className="w-4 h-4 text-violet-500" />
            Executive operating clarity in the age of AI
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="text-slate-900">Executive</span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Decision Intelligence
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="mt-6 text-xl md:text-2xl text-slate-600 leading-relaxed">
            Make <span className="font-semibold text-violet-600">fewer decisions</span>. Make <span className="font-semibold text-violet-600">better ones</span>. Let AI handle the rest.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-500 max-w-lg">
            Torque helps founders and executive teams cut through noise, eliminate decision bottlenecks, and restore clarity — using AI as leverage, not distraction.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-5">
            <PrimaryButton href="/free-ai-audit">Start with the Executive Decision Audit</PrimaryButton>
            <SecondaryLink href="/blog">Explore the Thinking</SecondaryLink>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="mt-8 text-sm text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            No hype. No tool soup. Just clarity, control, and execution that sticks.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card gradient className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-2xl" />
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              If this feels familiar…
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "You're over-involved in decisions that shouldn't reach you.",
                "AI tools are everywhere, but clarity is nowhere.",
                "Meetings repeat. Debates repeat. Decisions repeat.",
                "Execution is busy — but outcomes aren't moving."
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-3 text-slate-600"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className="mt-8 rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="text-slate-700">
                Torque starts with an <span className="font-semibold text-violet-600">executive-level diagnostic</span> and ends with a decision system your business can actually run on.
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function DecisionOverload() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(99,102,241,0.3) 0%, transparent 50%)"
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <Section className="relative">
        <motion.div 
          className="grid gap-10 md:grid-cols-2 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInLeft}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              The real problem isn't AI.
              <br />
              <span className="text-transparent bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text">
                It's decision overload.
              </span>
            </h2>
          </motion.div>
          <motion.div variants={fadeInRight} className="space-y-6">
            <p className="text-lg text-slate-300">
              Executives today are surrounded by tools, dashboards, and opinions — yet clarity keeps slipping away.
            </p>
            <p className="text-lg text-slate-400">
              AI promised relief.
              <br />
              <span className="text-violet-400">Instead, it multiplied noise.</span>
            </p>
            <p className="text-xl font-semibold text-white border-l-4 border-violet-500 pl-4">
              This isn't a productivity issue. It's a decision issue.
            </p>
          </motion.div>
        </motion.div>
      </Section>
    </section>
  );
}

function ReframeDecisionSystem() {
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <FloatingOrb className="w-[400px] h-[400px] bg-emerald-200/30 top-20 -right-20" delay={1} />
      
      <Section>
        <motion.div 
          className="grid gap-10 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInLeft}>
            <Card gradient>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Decision System</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Torque is not a productivity tool.
                <br />
                <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                  It's a decision system for leaders.
                </span>
              </h3>
              <ul className="mt-8 space-y-4">
                {[
                  "Decide what actually matters",
                  "Ignore what doesn't",
                  "Eliminate repeated decisions",
                  "Remove founders from unnecessary loops",
                  "Execute without rework"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p className="mt-8 text-lg font-semibold text-emerald-600 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                AI should execute decisions — not create more of them.
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={fadeInRight} className="space-y-6">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-violet-500" />
              What changes when decision flow is fixed
            </h4>
            
            <motion.div 
              className="rounded-3xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-6"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-3">Before</p>
              <p className="text-slate-700">
                Constant escalation, "quick questions," recurring debates, reactive priorities, founder as choke point.
              </p>
            </motion.div>
            
            <motion.div 
              className="rounded-3xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xs font-bold text-emerald-500 uppercase tracking-wide mb-3">After</p>
              <p className="text-slate-700">
                Clear ownership, stable priorities, fewer meetings, faster execution, calmer leadership.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>
    </section>
  );
}

function DecisionLoop() {
  const steps = [
    {
      num: "01",
      title: "Diagnose",
      desc: "We identify where decisions stall, repeat, or escalate unnecessarily through an Executive Decision Audit.",
      link: "/free-ai-audit",
      linkText: "See the Audit",
      icon: Target,
      color: "from-violet-500 to-purple-600"
    },
    {
      num: "02",
      title: "Reset",
      desc: "In a structured 90-day intervention, we rebuild how decisions are made, owned, and executed.",
      link: "/enterprise-accelerator",
      linkText: "Explore the 90-Day Reset",
      icon: RefreshCw,
      color: "from-indigo-500 to-blue-600"
    },
    {
      num: "03",
      title: "Maintain",
      desc: "Torque becomes the system that preserves clarity — capturing decisions, learning patterns, and automating execution.",
      link: "/platform",
      linkText: "See the Platform",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <FloatingOrb className="w-[500px] h-[500px] bg-violet-600/20 -top-40 left-1/4" delay={0} />
      <FloatingOrb className="w-[400px] h-[400px] bg-indigo-600/20 bottom-0 right-1/4" delay={3} />
      
      <Section className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            How it works
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-lg text-slate-400">
            We don't start with tools. We start with the decision loop — then we install AI where it actually belongs.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-500"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-bold text-violet-400 uppercase tracking-wide">Step {step.num}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 text-slate-400">
                  {step.desc}
                </p>
                <a 
                  href={step.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group/link"
                >
                  {step.linkText}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
    </section>
  );
}

function ExecutiveFit() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <FloatingOrb className="w-[500px] h-[500px] bg-violet-200/30 -top-40 -left-40" delay={2} />
      
      <Section>
        <motion.div 
          className="grid gap-12 lg:grid-cols-2 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInLeft}>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 mb-6">
              <Users className="w-4 h-4" />
              Who This Is For
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Built for executives who feel 
              <span className="text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text"> stuck despite momentum.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Torque is designed for founders, CEOs, operators, and leadership teams who feel:
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Over-involved in everything",
                "Behind despite effort",
                "Surrounded by tools but lacking clarity"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center gap-4 text-lg text-slate-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
            <p className="mt-8 text-slate-600 border-l-4 border-violet-500 pl-4">
              If your company is growing but leadership feels heavier each quarter, you don't need more bandwidth — you need a <span className="font-semibold text-violet-600">better decision system</span>.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInRight}>
            <Card gradient className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                Typical outcomes
              </h3>
              <ul className="mt-8 space-y-5">
                {[
                  "Fewer escalations to the founder",
                  "Faster decisions with clear ownership",
                  "Less meeting churn, more execution",
                  "AI deployed as leverage (not distraction)"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="mt-8 rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 p-5"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-slate-700 font-medium">
                  The entry point is simple: we start with clarity.
                </p>
              </motion.div>
              <div className="mt-8">
                <PrimaryButton href="/free-ai-audit">Start with the Executive Decision Audit</PrimaryButton>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Section>
    </section>
  );
}

function DecisionAuditCTA() {
  return (
    <section className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Animated patterns */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 40%)"
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <Section className="relative">
        <motion.div 
          className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Clarity always comes first.
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg text-white/80"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Start with the Executive Decision Audit. We'll identify where decisions break down — and what to fix first.
              </motion.p>
            </div>
            <motion.div 
              className="flex flex-wrap gap-5 lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="/free-ai-audit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-violet-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start with the Executive Decision Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a 
                href="/blog"
                className="inline-flex items-center gap-2 text-base font-semibold text-white/90 hover:text-white transition-colors"
              >
                Listen / Watch
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </section>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SEO 
        title="Executive Decision Intelligence | AI Consulting & Strategy"
        description="Torque helps founders and executive teams cut through noise, eliminate decision bottlenecks, and restore clarity — using AI as leverage, not distraction. Expert AI consulting services for business leaders."
        keywords="executive decision intelligence, AI consulting, AI strategy consultant, decision system, AI business consulting, enterprise AI solutions, leadership AI, executive coaching AI, business clarity, decision automation"
        url="/"
      />
      <Header />
      <HeroDecision />
      <DecisionOverload />
      <ReframeDecisionSystem />
      <DecisionLoop />
      <ExecutiveFit />
      <DecisionAuditCTA />
      <Footer />
    </main>
  );
}
