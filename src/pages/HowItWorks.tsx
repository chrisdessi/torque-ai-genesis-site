import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`mx-auto max-w-6xl px-6 py-14 md:py-20 ${className}`}>{children}</section>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ${className}`}>{children}</div>;
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link to={href} className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors">
      {children}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link to={href} className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 transition-colors">
      {children}
    </Link>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <SEO 
        title="How Torque Works | Executive Decision Intelligence"
        description="We don't start with tools. We start with the decision loop — then we install AI where it actually belongs."
        keywords="decision intelligence, AI implementation, executive coaching, business transformation, decision system"
        url="/how-it-works"
      />
      <Header />

      {/* HERO */}
      <Section>
        <motion.div 
          className="grid gap-10 md:grid-cols-2 md:items-start"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700">
              The Method
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              How Torque Works
            </h1>
            <p className="mt-4 text-lg text-zinc-700">
              We don't start with tools. We start with the decision loop — then we install AI where it actually belongs.
            </p>
            <p className="mt-6 text-sm text-zinc-700">
              Most companies try to "do AI" by adding software. Torque fixes the underlying operating reality:
              what decisions matter, who owns them, how they get made, and how execution follows without rework.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/audit">Start with the Executive Decision Audit</PrimaryButton>
              <SecondaryLink href="/90-day">Explore the 90-Day Reset →</SecondaryLink>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <h2 className="text-lg font-semibold">The goal</h2>
              <p className="mt-3 text-sm text-zinc-700">
                Make fewer decisions. Make better ones. Protect leadership attention — and let AI handle repeatable execution.
              </p>
              <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-xs font-semibold text-zinc-500">THE CORE SHIFT</p>
                <p className="mt-2 text-sm text-zinc-800">
                  AI should execute decisions — not create more of them.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* 3 STEPS */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold tracking-tight">
            The 3-step loop
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 max-w-2xl text-zinc-700">
            Torque is designed as a sequence: diagnose the decision breakdown, reset the operating system, then maintain clarity over time.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <p className="text-xs font-semibold text-zinc-500">STEP 1</p>
              <h3 className="mt-2 text-lg font-semibold">Diagnose</h3>
              <p className="mt-3 text-sm text-zinc-700">
                We identify where decisions stall, repeat, or escalate unnecessarily — and where AI is adding noise instead of leverage.
              </p>
              <div className="mt-5">
                <SecondaryLink href="/audit">See the Audit →</SecondaryLink>
              </div>
            </Card>
            <Card>
              <p className="text-xs font-semibold text-zinc-500">STEP 2</p>
              <h3 className="mt-2 text-lg font-semibold">Reset</h3>
              <p className="mt-3 text-sm text-zinc-700">
                In a structured 90-day intervention, we rebuild decision ownership, escalation rules, meeting flow, and execution lanes.
              </p>
              <div className="mt-5">
                <SecondaryLink href="/90-day">Explore the 90-Day Reset →</SecondaryLink>
              </div>
            </Card>
            <Card>
              <p className="text-xs font-semibold text-zinc-500">STEP 3</p>
              <h3 className="mt-2 text-lg font-semibold">Maintain</h3>
              <p className="mt-3 text-sm text-zinc-700">
                The Torque platform preserves clarity: decision memory, repeatable rules, and AI-driven execution after priorities are set.
              </p>
              <div className="mt-5">
                <SecondaryLink href="/platform">See the Platform →</SecondaryLink>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* WHAT WE FIX */}
      <Section>
        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-semibold tracking-tight">What we fix first</h2>
            <p className="mt-4 text-zinc-700">
              Most leadership pain comes from a few predictable breakdowns. Torque focuses on the highest-leverage ones:
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              {[
                "Re-deciding the same issues weekly",
                "Founder/executive as default bottleneck",
                "Ownership that's implicit instead of explicit",
                "\"Quick questions\" that become constant escalation",
                "AI tools added without a governing decision system",
                "Meeting churn without clean resolution"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-zinc-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <h3 className="text-lg font-semibold">What it feels like after</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                {[
                  "Fewer decisions reach the founder",
                  "Clear ownership + escalation rules",
                  "Faster execution with less rework",
                  "Calmer leadership and cleaner priorities",
                  "AI deployed where it actually earns its keep"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-zinc-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm text-zinc-800">
                  The entry point is simple: we start with clarity.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section>
        <motion.div 
          className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Ready to see where decisions are breaking?
              </h2>
              <p className="mt-3 text-zinc-700">
                Start with the Executive AI & Decision Audit. We'll map the decision loop, identify the bottlenecks, and outline the cleanest path forward.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <PrimaryButton href="/audit">Start with the Audit</PrimaryButton>
              <SecondaryLink href="/insights">Explore the Thinking →</SecondaryLink>
            </div>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </main>
  );
}
