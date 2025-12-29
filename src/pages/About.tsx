import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`mx-auto max-w-6xl px-6 py-14 md:py-20 ${className}`}>{children}</section>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ${className}`}>{children}</div>;
}

export default function About() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <SEO title="About | Torque" description="Executives don't need more tools. They need fewer decisions — and better ones." url="/about" />
      <Header />
      <Section>
        <motion.div className="grid gap-10 md:grid-cols-2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div>
            <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700">About</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Why Torque Exists</h1>
            <p className="mt-4 text-lg text-zinc-700">Executives don't need more tools. They need fewer decisions — and better ones.</p>
            <p className="mt-6 text-sm text-zinc-700">AI should reduce cognitive load, not increase it. Torque exists to rebuild the decision loop: clarity, ownership, and execution that sticks.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/audit" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800">Start with the Audit <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
          <Card>
            <h2 className="text-lg font-semibold">The principle</h2>
            <p className="mt-3 text-sm text-zinc-700">When decision flow is fixed, everything gets lighter: meetings, escalation, execution, and leadership.</p>
            <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm text-zinc-800">Torque is built for leaders who want calm control — without losing speed.</p>
            </div>
          </Card>
        </motion.div>
      </Section>
      <Footer />
    </main>
  );
}
