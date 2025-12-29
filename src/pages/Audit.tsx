import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, ListChecks, Route, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ZohoContactForm from "@/components/ZohoContactForm";

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
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 transition-colors">
      {children}
    </a>
  );
}

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <SEO 
        title="Executive AI & Decision Audit | Torque"
        description="A diagnostic to uncover where decisions break down — and how AI should actually be used. Start with clarity."
        keywords="executive audit, AI audit, decision audit, leadership assessment, AI consulting, business clarity"
        url="/audit"
      />
      <Header />

      <Section>
        <motion.div 
          className="grid gap-10 md:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700">
              Entry Point
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              The Executive AI & Decision Audit
            </h1>
            <p className="mt-4 text-lg text-zinc-700">
              A diagnostic to uncover where decisions break down — and how AI should actually be used.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href="#request">Request the Audit</PrimaryButton>
              <SecondaryLink href="/90-day">See the 90-Day Reset →</SecondaryLink>
            </div>
            <p className="mt-6 text-sm text-zinc-700">
              This is not a technical audit. This is not a tool inventory. It's an executive-level assessment of decision flow, ownership, and escalation — so clarity can be restored quickly.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <h2 className="text-lg font-semibold">What we look for</h2>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                {[
                  "Repeated decisions (same debate, different week)",
                  "Founder/executive bottlenecks",
                  "Unclear ownership and escalation rules",
                  "AI-driven noise (tools added without a decision system)",
                  "Execution churn without outcome movement"
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
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { icon: Target, title: "Diagnosis", desc: "Clear identification of the highest-cost decision bottlenecks." },
            { icon: ListChecks, title: "Priorities", desc: "A ranked list of what to fix first — and what to ignore for now." },
            { icon: Route, title: "Path", desc: "A recommendation on whether a 90-day reset is warranted." },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card>
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-zinc-700" />
                </div>
                <p className="text-xs font-semibold text-zinc-500 uppercase">You Get</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-700">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section id="request">
        <motion.div 
          className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Request the Audit</h2>
              <p className="mt-3 text-zinc-700">
                Share a few details and we'll respond with next steps. If there's a fit, we'll schedule a short call to confirm scope and timing.
              </p>
            </div>
            <Card>
              <ZohoContactForm />
            </Card>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </main>
  );
}
