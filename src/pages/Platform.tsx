import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Shield, Zap, CheckCircle2 } from "lucide-react";
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

export default function Platform() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <SEO title="The Torque Platform | Executive Decision Intelligence" description="Executive decision intelligence — embedded into daily operations." url="/platform" />
      <Header />
      <Section>
        <motion.div className="grid gap-10 md:grid-cols-2" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700">Retention Layer</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">The Torque Platform</h1>
            <p className="mt-4 text-lg text-zinc-700">Executive decision intelligence — embedded into daily operations.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/audit" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800">Start with the Audit <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <h2 className="text-lg font-semibold">What it does</h2>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                {["Captures decisions (what, why, who owns it)", "Flags repeated debates and bottlenecks", "Recommends delegation or automation", "Enforces escalation rules", "Turns decisions into clean execution workflows"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 mt-0.5 text-zinc-500 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">Why it sticks</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[{ icon: Database, title: "Decision Memory", desc: "Decisions become a system of record." }, { icon: Shield, title: "Rules", desc: "Clear ownership and escalation rules." }, { icon: Zap, title: "Execution", desc: "AI automates repeatable work." }].map((item, i) => (
            <Card key={i}><item.icon className="w-5 h-5 text-zinc-700 mb-4" /><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm text-zinc-700">{item.desc}</p></Card>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
