import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Gauge, Wrench, Repeat } from "lucide-react";
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

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      to={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
    >
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

export default function NinetyDayPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <SEO 
        title="90-Day Decision Reset | Torque"
        description="A structured intervention to rebuild how your company decides, executes, and scales. Fewer escalations, clearer ownership, calmer leadership."
        keywords="90-day reset, decision system, executive coaching, AI implementation, leadership clarity, business transformation"
        url="/90-day"
      />
      <Header />

      <Section>
        <motion.div 
          className="grid gap-10 md:grid-cols-2 md:items-start"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700">
              Core Intervention
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              The 90-Day Decision Reset
            </h1>
            <p className="mt-4 text-lg text-zinc-700">
              A structured intervention to rebuild how your company decides, executes, and scales.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href="#fit">See If You're a Fit</PrimaryButton>
              <SecondaryLink href="/audit">Start with the Audit →</SecondaryLink>
            </div>
            <p className="mt-6 text-sm text-zinc-700">
              This is not consulting. It's an operating reset: clearer ownership, fewer escalations, less meeting churn, and AI installed where it belongs — after priorities are set.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <h2 className="text-lg font-semibold">What changes in 90 days</h2>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                {[
                  "Repeated decisions are eliminated",
                  "Ownership and escalation rules become explicit",
                  "Founders are removed from unnecessary loops",
                  "AI is deployed as leverage, not distraction",
                  "Execution becomes cleaner and calmer"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-zinc-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold tracking-tight">
            The structure
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 max-w-2xl text-zinc-700">
            We run a tight cadence with clear deliverables. You'll feel the difference by week two.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Gauge, weeks: "Weeks 1–2", title: "Diagnose + Baseline", desc: "Decision bottlenecks, ownership, escalation, and where AI is adding noise." },
              { icon: Wrench, weeks: "Weeks 3–6", title: "System Rebuild", desc: "Decision rules, meeting redesign, execution lanes, and AI copilots installed." },
              { icon: Repeat, weeks: "Weeks 7–12", title: "Automation + Maintain", desc: "Automate repeatables, enforce rules, and shift the founder from bottleneck to leader." },
            ].map((item, i) => (
              <Card key={i}>
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-zinc-700" />
                </div>
                <p className="text-xs font-semibold text-zinc-500 uppercase">{item.weeks}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-700">{item.desc}</p>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      <Section id="fit">
        <motion.div 
          className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Are you a fit?</h2>
              <p className="mt-3 text-zinc-700">
                This is best for teams where growth is real — but leadership feels heavier each quarter.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                {[
                  "Decisions escalate to the founder too often",
                  "Meetings recur without resolution",
                  "AI tools are scattered and unmanaged",
                  "Execution is busy but outcomes aren't compounding"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-zinc-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <h3 className="text-lg font-semibold">Next step</h3>
              <p className="mt-3 text-sm text-zinc-700">
                Start with the Executive Decision Audit. If we find a fit, we'll outline the 90-day plan.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryButton href="/audit">Start with the Audit</PrimaryButton>
              </div>
              <div className="mt-4">
                <SecondaryLink href="/platform">See the Platform →</SecondaryLink>
              </div>
            </Card>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </main>
  );
}
