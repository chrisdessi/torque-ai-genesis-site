import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
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
    <section id={id} className={`mx-auto max-w-6xl px-6 py-14 md:py-20 ${className}`}>
      {children}
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
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
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
    >
      {children}
    </a>
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
    <a href={href} className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 transition-colors">
      {children}
    </a>
  );
}

function HeroDecision() {
  return (
    <Section id="top">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p 
            variants={fadeInUp}
            className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700"
          >
            Executive operating clarity in the age of AI
          </motion.p>
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-semibold tracking-tight md:text-5xl text-zinc-900"
          >
            Executive Decision Intelligence
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-zinc-700">
            Make fewer decisions. Make better ones. Let AI handle the rest.
          </motion.p>
          <motion.p variants={fadeInUp} className="mt-4 text-base text-zinc-700">
            Torque helps founders and executive teams cut through noise, eliminate decision bottlenecks, and restore clarity — using AI as leverage, not distraction.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href="/free-ai-audit">Start with the Executive Decision Audit</PrimaryButton>
            <SecondaryLink href="/blog">Explore the Thinking</SecondaryLink>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-6 text-xs text-zinc-500">
            No hype. No tool soup. Just clarity, control, and execution that sticks.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <h3 className="text-lg font-semibold text-zinc-900">If this feels familiar…</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li>• You're over-involved in decisions that shouldn't reach you.</li>
              <li>• AI tools are everywhere, but clarity is nowhere.</li>
              <li>• Meetings repeat. Debates repeat. Decisions repeat.</li>
              <li>• Execution is busy — but outcomes aren't moving.</li>
            </ul>
            <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm text-zinc-800">
                Torque starts with an executive-level diagnostic and ends with a decision system your business can actually run on.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

function DecisionOverload() {
  return (
    <Section id="problem">
      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            The real problem isn't AI.
            <br />
            It's decision overload.
          </h2>
        </motion.div>
        <motion.div variants={fadeInUp} className="text-zinc-700">
          <p>
            Executives today are surrounded by tools, dashboards, and opinions — yet clarity keeps slipping away.
          </p>
          <p className="mt-4">
            AI promised relief.
            <br />
            Instead, it multiplied noise.
          </p>
          <p className="mt-4 font-medium text-zinc-900">
            This isn't a productivity issue. It's a decision issue.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function ReframeDecisionSystem() {
  return (
    <Section id="reframe">
      <motion.div 
        className="grid gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <h3 className="text-xl font-semibold text-zinc-900">
              Torque is not a productivity tool.
              <br />
              It's a decision system for leaders.
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-zinc-700">
              <li>• Decide what actually matters</li>
              <li>• Ignore what doesn't</li>
              <li>• Eliminate repeated decisions</li>
              <li>• Remove founders from unnecessary loops</li>
              <li>• Execute without rework</li>
            </ul>
            <p className="mt-6 text-sm font-semibold text-zinc-900">
              AI should execute decisions — not create more of them.
            </p>
          </Card>
        </motion.div>
        <motion.div variants={fadeInUp} className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h4 className="text-sm font-semibold text-zinc-900">What changes when decision flow is fixed</h4>
          <div className="mt-5 grid gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <p className="text-xs font-semibold text-zinc-500">BEFORE</p>
              <p className="mt-2 text-sm text-zinc-700">
                Constant escalation, "quick questions," recurring debates, reactive priorities, founder as choke point.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <p className="text-xs font-semibold text-zinc-500">AFTER</p>
              <p className="mt-2 text-sm text-zinc-700">
                Clear ownership, stable priorities, fewer meetings, faster execution, calmer leadership.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function DecisionLoop() {
  return (
    <Section id="how-it-works">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-semibold tracking-tight text-zinc-900">
          How it works
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-3 max-w-2xl text-zinc-700">
          We don't start with tools. We start with the decision loop — then we install AI where it actually belongs.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <p className="text-xs font-semibold text-zinc-500">STEP 1</p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Diagnose</h3>
            <p className="mt-3 text-sm text-zinc-700">
              We identify where decisions stall, repeat, or escalate unnecessarily through an Executive Decision Audit.
            </p>
            <div className="mt-5">
              <SecondaryLink href="/free-ai-audit">See the Audit →</SecondaryLink>
            </div>
          </Card>
          <Card>
            <p className="text-xs font-semibold text-zinc-500">STEP 2</p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Reset</h3>
            <p className="mt-3 text-sm text-zinc-700">
              In a structured 90-day intervention, we rebuild how decisions are made, owned, and executed.
            </p>
            <div className="mt-5">
              <SecondaryLink href="/enterprise-accelerator">Explore the 90-Day Reset →</SecondaryLink>
            </div>
          </Card>
          <Card>
            <p className="text-xs font-semibold text-zinc-500">STEP 3</p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Maintain</h3>
            <p className="mt-3 text-sm text-zinc-700">
              Torque becomes the system that preserves clarity — capturing decisions, learning patterns, and automating execution.
            </p>
            <div className="mt-5">
              <SecondaryLink href="/platform">See the Platform →</SecondaryLink>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function ExecutiveFit() {
  return (
    <Section id="fit">
      <motion.div 
        className="grid gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Built for executives who feel stuck despite momentum.
          </h2>
          <p className="mt-4 text-zinc-700">
            Torque is designed for founders, CEOs, operators, and leadership teams who feel:
          </p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-700">
            <li>• Over-involved in everything</li>
            <li>• Behind despite effort</li>
            <li>• Surrounded by tools but lacking clarity</li>
          </ul>
          <p className="mt-6 text-sm text-zinc-700">
            If your company is growing but leadership feels heavier each quarter, you don't need more bandwidth — you need a better decision system.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Card>
            <h3 className="text-lg font-semibold text-zinc-900">Typical outcomes</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li>• Fewer escalations to the founder</li>
              <li>• Faster decisions with clear ownership</li>
              <li>• Less meeting churn, more execution</li>
              <li>• AI deployed as leverage (not distraction)</li>
            </ul>
            <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm text-zinc-800">
                The entry point is simple: we start with clarity.
              </p>
            </div>
            <div className="mt-6">
              <PrimaryButton href="/free-ai-audit">Start with the Executive Decision Audit</PrimaryButton>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function DecisionAuditCTA() {
  return (
    <Section id="cta">
      <motion.div 
        className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Clarity always comes first.</h2>
            <p className="mt-3 text-zinc-700">
              Start with the Executive Decision Audit. We'll identify where decisions break down — and what to fix first.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <PrimaryButton href="/free-ai-audit">Start with the Executive Decision Audit</PrimaryButton>
            <SecondaryLink href="/blog">Listen / Watch</SecondaryLink>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
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
