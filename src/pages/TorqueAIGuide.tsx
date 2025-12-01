import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Brain,
  LineChart,
  Users,
  Gauge,
  CheckCircle2,
  BookOpen,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Helmet } from "react-helmet";
import { ZohoTorqueAIForm } from "@/components/ZohoTorqueAIForm";
import { ZohoTorqueAIButton } from "@/components/ZohoTorqueAIButton";

/**
 * Torque AI – Strategy & Deployment Guide
 * Single-file React page for Lovable.
 *
 * Requires: Tailwind CSS, shadcn/ui (button, card), framer-motion, lucide-react
 * PDF: place at /public/downloads/torque-ai-guide.pdf
 */

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Glow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(closest-side,white,transparent)] ${className}`}
  />
);

export default function TorqueAIStrategyGuidePage() {
  const [isPdfDialogOpen, setIsPdfDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Torque AI Strategy & Deployment Guide - Complete AI Implementation Framework</title>
        <meta name="description" content="Comprehensive AI strategy guide featuring the Torque Flywheel framework. Learn AI adoption, implementation workshops, and measurable deployment strategies for enterprise transformation." />
        <meta name="keywords" content="AI strategy guide, AI implementation framework, AI deployment strategy, Torque Flywheel, AI adoption roadmap, enterprise AI workshops, AI transformation guide, AI readiness assessment, AI strategy consulting, AI business transformation" />
        <link rel="canonical" href="https://torqueapp.ai/torque-ai-guide" />
      </Helmet>
      {/* SITE HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="/" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-violet-600/30">⚙️</span>
            <span className="text-sm font-semibold tracking-wide">Torque AI</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#flywheel" className="hover:text-white">Framework</a>
            <a href="#workshops" className="hover:text-white">Workshops</a>
            <a href="#cta" className="hover:text-white">Get Started</a>
          </nav>
          <a
            href="https://calendar.app.google/ggDwHhM8VExNxGki8"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-violet-600 px-3 py-1.5 text-sm font-semibold hover:bg-violet-500"
          >
            Book Call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <Glow className="mx-auto h-[52rem] w-[52rem] translate-y-[-20%] bg-[radial-gradient(circle_at_center,rgba(160,32,240,0.35),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid items-center gap-10 md:grid-cols-2"
          >
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <Sparkles className="h-3.5 w-3.5" />
                Torque AI Playbook
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
                AI Strategy & Deployment Guide
              </h1>
              <p className="mt-4 max-w-xl text-white/70">
                From AI chaos to clarity. A practical, human-centered system to discover, deploy,
                train, and track high-ROI AI workflows—so your teams operate faster, smarter, and safer.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-500">
                  <a href="https://calendar.app.google/ggDwHhM8VExNxGki8" target="_blank" rel="noopener noreferrer">
                    Book Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Dialog open={isPdfDialogOpen} onOpenChange={setIsPdfDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-white/90">
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[600px]">
                    <DialogHeader>
                      <DialogTitle>AI Strategy & Deployment Guide</DialogTitle>
                    </DialogHeader>
                    <iframe 
                      src="https://docsend.com/view/wfwimczj3re9dute" 
                      allow="fullscreen" 
                      className="w-full h-full rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
              <p className="mt-4 text-sm text-white/50">By Chris Dessi, Founder of Torque AI</p>
            </motion.div>
            <motion.div variants={item} className="relative" id="flywheel">
              {/* Abstract flywheel visual */}
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-full border border-violet-500/30" />
                <div className="absolute inset-6 rounded-full border border-violet-500/30" />
                <div className="absolute inset-12 rounded-full border border-violet-500/30" />
                <div className="absolute inset-0 animate-spin-slow rounded-full border-t-2 border-violet-500/60" />
                <div className="absolute inset-8 animate-spin-slower rounded-full border-t-2 border-fuchsia-500/50" />
                <div className="absolute inset-16 animate-spin-slowest rounded-full border-t-2 border-cyan-500/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-xl bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                    The Torque AI Flywheel
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOREWORD */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#120016]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={item} className="text-3xl font-bold md:text-4xl">
              The Age of Applied Intelligence
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-white/70">
              Most AI experiments die in pilot purgatory—trapped between curiosity and commitment. This guide
              turns anxiety into action with a proven sequence: discover inefficiencies, deploy precise workflows,
              train your people, and track real business impact. No hype. No jargon. Only momentum.
            </motion.p>
            <motion.blockquote
              variants={item}
              className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-xl italic text-white/90"
            >
              "AI doesn't replace people. It replaces the people who refuse to evolve."
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* FLYWHEEL EXPLAINED */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: <Gauge className="h-5 w-5" />,
                title: "Discover",
                copy: "Audit teams to surface friction and high-impact AI use cases.",
              },
              {
                icon: <Rocket className="h-5 w-5" />,
                title: "Deploy",
                copy: "Prototype in weeks. Ship secure, compliant, repeatable workflows.",
              },
              {
                icon: <Brain className="h-5 w-5" />,
                title: "Train",
                copy: "Turn fear into fluency with role-based AI workshops and playbooks.",
              },
              {
                icon: <LineChart className="h-5 w-5" />,
                title: "Track",
                copy: "Measure time saved, revenue gained, and adoption—then iterate.",
              },
            ].map((c, i) => (
              <Card key={i} className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="rounded-lg bg-violet-600/30 p-2">{c.icon}</span>
                    {c.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{c.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 1: DISCOVER */}
      <section className="relative border-t border-white/10 bg-[#0A0011]">
        <Glow className="mx-auto h-[40rem] w-[40rem] translate-y-[-10%] bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Step 1 — Discover what's broken</h3>
              <p className="mt-3 text-white/70">
                Start with friction. Ask: "What do we dread but can't avoid?" and "What should be automated, but isn't?"
                These questions surface the truth—your richest AI opportunities.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                {[
                  "Personal Wins: quick automations that boost morale and speed.",
                  "Workflow Wins: end-to-end processes that reduce cycle time by 5–10x.",
                  "Strategic Wins: AI copilots and agents that transform customer experiences.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-violet-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-white">Discovery Questions</CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">
                <ol className="list-decimal space-y-2 pl-4">
                  <li>Which recurring task slows us down the most each week?</li>
                  <li>Where do we copy/paste or re-enter data between tools?</li>
                  <li>Which deliverables take the longest but add the least differentiation?</li>
                  <li>What could a smart copilot do better, faster, safer?</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* STEP 2: DEPLOY */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Step 2 — Deploy with precision</h3>
              <p className="mt-3 text-white/70">
                Execute a 90-day sprint protocol. Move fast, measure hard, and ship workflows that stick.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Weeks 1–2", copy: "Audit & Align: map flows, define success, secure data." },
                  { title: "Weeks 3–6", copy: "Build & Test: prototype with real data and guardrails." },
                  { title: "Weeks 7–12", copy: "Deploy & Measure: integrate, refine, and document." },
                ].map((b, i) => (
                  <Card key={i} className="border-white/10 bg-white/5">
                    <CardHeader>
                      <CardTitle className="text-white">{b.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70">{b.copy}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Rocket className="h-5 w-5" />
                  Deployment Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">
                <ul className="space-y-2">
                  <li>✔️ Data access, PII rules, compliance confirmed</li>
                  <li>✔️ Tooling selected (LLMs, vector DB, agents, orchestration)</li>
                  <li>✔️ Prompts versioned; evals defined; fallbacks documented</li>
                  <li>✔️ Runbooks + owner assigned for every bot/agent</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* STEP 3: TRAIN */}
      <section className="relative border-t border-white/10 bg-[#0A0011]" id="workshops">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Step 3 — Train the humans</h3>
              <p className="mt-3 text-white/70">
                Tools don't transform companies—people do. We replace fear with fluency and turn early adopters
                into internal AI amplifiers.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                {[
                  "Prompt engineering for operators & leaders",
                  "Bias, hallucination handling, and review loops",
                  "Ethical guardrails and role-based governance",
                  "Hands-on playbooks tied to daily workflows",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 text-fuchsia-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <BookOpen className="h-5 w-5" />
                  Workshop Formats
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">
                <p className="mb-3">Choose the format that fits your org:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Executive briefings (90 min)",
                    "Functional deep-dives (half day)",
                    "Team accelerators (2–4 weeks)",
                    "Champion training (6 weeks)",
                  ].map((x, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
                      {x}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* STEP 4: TRACK */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h3 className="text-2xl font-bold md:text-3xl">Step 4 — Track what matters</h3>
          <p className="mt-3 max-w-3xl text-white/70">
            Ditch vanity metrics. Track outcomes that compound: time saved, revenue gained, and adoption.
            Visualize weekly, optimize monthly, and celebrate wins publicly to sustain momentum.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "Time Saved", metric: "↑ 38%", copy: "Hours reclaimed via automation and copilots." },
              { title: "Revenue Impact", metric: "+$1.2M", copy: "Conversion lift, cycle-time reduction, cost savings." },
              { title: "Adoption", metric: "82%", copy: "Active users, win share, and cross-team usage." },
            ].map((k, i) => (
              <Card key={i} className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white">{k.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-extrabold text-violet-400">{k.metric}</div>
                  <p className="mt-2 text-white/70">{k.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE LOOP */}
      <section className="relative border-t border-white/10 bg-[#07070A]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Make AI your competitive habit</h3>
              <p className="mt-3 text-white/70">
                Normalize sharing wins and losses. Nominate champions. Run quarterly workflow audits and AI hack days.
                Momentum creates mastery. Mastery creates market leadership.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { n: "280", label: "hours saved / mo" },
                  { n: "63%", label: "faster cycles" },
                  { n: "3.2x", label: "campaign ROI" },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-3xl font-extrabold text-fuchsia-400">{s.n}</div>
                    <div className="text-sm text-white/70">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-white">New Company Rituals</CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">
                <ul className="space-y-2">
                  <li>• Weekly "AI Win" shoutouts in All-Hands</li>
                  <li>• Quarterly workflow audits with a 30-day pilot goal</li>
                  <li>• Bot ownership: every agent has a named product owner</li>
                  <li>• Prompt + eval repos with versioning and changelogs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="relative">
        <Glow className="mx-auto h-[36rem] w-[36rem] translate-y-[-20%] bg-[radial-gradient(circle_at_center,rgba(160,32,240,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h3 className="text-3xl font-bold md:text-4xl">The Torque Principle</h3>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-white/80 italic">
            "AI doesn't replace people. It replaces the people who refuse to evolve."
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            This isn't about survival. It's about acceleration. Lead the change—and compound returns across every
            workflow you touch.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative border-t border-white/10 bg-gradient-to-b from-[#0F0017] to-black">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h3 className="text-3xl font-bold md:text-4xl">Ready to move from theory to transformation?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Audit. Roadmap. Custom GPTs & agents. Executive coaching. Let's design your next 90-day sprint.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-500">
                <a href="https://calendar.app.google/ggDwHhM8VExNxGki8" target="_blank" rel="noopener noreferrer">
                  Book Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30">
                <a href="https://buy.stripe.com/bJeeVdfvSeHtaURfmX8g004" target="_blank" rel="noopener noreferrer">
                  Join 90-Day Executive Cohort
                </a>
              </Button>
              <Dialog open={isPdfDialogOpen} onOpenChange={setIsPdfDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-white/90">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
            
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h4 className="text-xl font-semibold mb-4 text-white text-left">Join the Torque AI Newsletter</h4>
                <ZohoTorqueAIForm />
              </div>
            </div>
            
            <p className="mt-6 text-sm text-white/50">
              © {new Date().getFullYear()} Torque AI. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      {/* SITE FOOTER */}
      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Torque AI. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <button onClick={() => setIsPdfDialogOpen(true)} className="hover:text-white">
                Download the PDF
              </button>
              <a href="https://www.torqueapp.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Website
              </a>
              <a href="#workshops" className="hover:text-white">
                Workshops
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
