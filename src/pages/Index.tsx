import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServicesScoreApp from "@/components/ServicesScoreApp";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import ZohoContactForm from "@/components/ZohoContactForm";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <SEO 
        title="Torque AI | AI Systems for Real Businesses"
        description="Torque AI installs AI-powered systems that fix bottlenecks, automate work, and unlock new growth for small and mid-market businesses. AI revenue engines, workflow automation, leadership workshops, and executive coaching."
        keywords="AI automation, workflow automation, AI marketing, lead generation, AI consulting, business automation, AI revenue systems, AI workshops, executive coaching"
        url="/"
      />
      <Header />
      
      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
          <div className="max-w-xl space-y-6">
            <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Strategy • Marketing • Training
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              AI That Grows Your Business —
              <span className="block text-emerald-300">
                Not Your Headaches
              </span>
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Torque AI helps business owners implement AI the{" "}
              <span className="font-semibold text-emerald-300">right</span> way:
              <span className="font-semibold">
                {" "}
                Strategy → Marketing → Team Training.
              </span>{" "}
              More leads, more sales, and more efficient operations — without
              needing to be a "tech person."
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#book-call"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition-colors"
              >
                Book Your AI Strategy Call
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-emerald-300 hover:text-emerald-200 transition-colors"
              >
                See How It Works
              </a>
            </div>

            <p className="text-xs text-slate-400">
              Used by business owners, executives, and teams who want real
              results from AI — not just another demo.
            </p>
          </div>

          {/* Hero Right: Simple visual / 3 pillar graphic */}
          <div className="mt-10 w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-2xl shadow-emerald-500/20 lg:mt-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-emerald-300">
              The Torque AI System™
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/60 flex items-center justify-center text-xs font-bold text-emerald-300">
                  1
                </div>
                <div>
                  <p className="text-sm font-semibold">Strategy</p>
                  <p className="text-xs text-slate-300">
                    AI Audit & 90-day roadmap aligned to your business goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/60 flex items-center justify-center text-xs font-bold text-emerald-300">
                  2
                </div>
                <div>
                  <p className="text-sm font-semibold">Marketing</p>
                  <p className="text-xs text-slate-300">
                    AI-powered funnels, campaigns, and automations that drive
                    revenue.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/60 flex items-center justify-center text-xs font-bold text-emerald-300">
                  3
                </div>
                <div>
                  <p className="text-sm font-semibold">Training</p>
                  <p className="text-xs text-slate-300">
                    We train your team so AI becomes part of how you work
                    daily.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 rounded-2xl bg-slate-900/90 p-3 text-xs text-slate-300">
              "In 2 years, we generated{" "}
              <span className="font-semibold text-emerald-300">$32M</span> in
              deals by implementing AI into a commodity business. That's the
              power of doing this right."
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            As Seen On & Trusted By
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>Fox5 News</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>AI Summit NYC</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>Torque Academy</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>Westchester AI Alliance</span>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section
        id="pillars"
        className="border-b border-slate-800 bg-slate-950/60"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold sm:text-3xl">
              The Three Pillars of Torque AI
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              AI isn't a single tool. It's a system. We help you build that
              system across{" "}
              <span className="font-semibold text-emerald-300">
                Strategy, Marketing, and Training
              </span>{" "}
              so the whole business moves forward — not just a side project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Strategy */}
            <div id="strategy" className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Pillar 1
              </p>
              <h3 className="text-lg font-semibold">Strategy</h3>
              <p className="mt-2 text-sm text-slate-300">
                Most businesses don't have an AI problem — they have a{" "}
                <span className="font-semibold">clarity problem</span>. We help
                you decide what to build, what to automate, and what to ignore.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• AI Audit & current state assessment</li>
                <li>• 90-day AI roadmap aligned to revenue goals</li>
                <li>• Funnel & messaging redesign</li>
                <li>• Workflow & automation planning</li>
                <li>• Competitive intelligence & insights</li>
              </ul>
              <p className="mt-4 text-xs font-semibold text-emerald-300">
                Outcome: Clarity, alignment, and no wasted money on random
                tools.
              </p>
            </div>

            {/* Marketing */}
            <div id="marketing" className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Pillar 2
              </p>
              <h3 className="text-lg font-semibold">
                Marketing & Automation
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                We turn your AI strategy into a marketing engine that runs
                every day — capturing leads, nurturing them, and driving sales.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• AI agents for lead capture & qualification</li>
                <li>• CRM, email, SMS & follow-up automation</li>
                <li>• Content & SEO systems powered by AI</li>
                <li>• Ad strategy & AI-driven creative testing</li>
                <li>• Full-funnel performance dashboards</li>
              </ul>
              <p className="mt-4 text-xs font-semibold text-emerald-300">
                Outcome: More leads, more sales, and a pipeline that doesn't
                depend on you.
              </p>
            </div>

            {/* Training */}
            <div id="training" className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Pillar 3
              </p>
              <h3 className="text-lg font-semibold">Training & Enablement</h3>
              <p className="mt-2 text-sm text-slate-300">
                Tools don't transform companies —{" "}
                <span className="font-semibold">people</span> do. We train your
                team so AI becomes part of how you operate every day.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Live workshops & team training (30–90 days)</li>
                <li>• Custom GPTs, SOPs & playbooks</li>
                <li>• Leadership coaching & Q&A</li>
                <li>• Role-based prompts & workflows</li>
                <li>• Ongoing support as you scale</li>
              </ul>
              <p className="mt-4 text-xs font-semibold text-emerald-300">
                Outcome: A confident team that uses AI every day — without
                needing you to be the bottleneck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Real Results with Torque AI
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
                These are the kinds of outcomes you can expect when Strategy,
                Marketing, and Training are working together.
              </p>
            </div>
            <a
              href="#book-call"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/70 px-4 py-2 text-xs font-semibold text-emerald-200 hover:bg-emerald-500/10 transition-colors"
            >
              Talk About Your Use Case
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                E-Commerce
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                92% Year-Over-Year Growth
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                We rebuilt their funnel, automated follow-up, and trained the
                team on daily AI usage — resulting in breakthrough growth.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                B2B Commodity
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                $32M in Closed Deals
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                By combining AI-powered outreach, messaging, and deal
                management, we helped drive $32M in sales in just 2 years.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Local Business
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                More Leads, Less Admin
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                AI agents now handle lead capture, qualification, and follow-up,
                while the team focuses on serving customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="border-b border-slate-800 bg-slate-950/60"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold sm:text-3xl">
              How the Torque AI System™ Works
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              We keep this simple. No jargon. No endless pilots. Just a clear
              path to value.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Step 1
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                Book Your Strategy Call
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                We learn about your business, numbers, constraints, and what
                "success with AI" actually means for you.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Step 2
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                Get Your 90-Day AI Roadmap
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                We map out quick wins, priority workflows, and the marketing
                systems to build first — starting where impact is highest.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Step 3
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                Implement & Train Your Team
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                We build the systems with you or for you and train your team so
                the results keep compounding long after we're gone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS / PROGRAMS */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Choose How You Want to Work with Torque AI
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Different businesses, different starting points. The common thread
              is always the same: Strategy → Marketing → Training.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Strategy Accelerator */}
            <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                30-Day Intensive
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                AI Strategy Accelerator
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                For leaders who want clarity, not more noise. In 30 days, we
                deliver a tailored AI roadmap, quick wins, and a launch plan.
              </p>
              <div className="mt-4 text-xs text-slate-400">
                Includes: AI Audit, 90-Day Roadmap, priority workflows, and
                executive briefing.
              </div>
              <a
                href="#book-call"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-300 transition-colors"
              >
                Apply for Strategy Accelerator
              </a>
            </div>

            {/* 90-Day Growth */}
            <div className="flex flex-col rounded-3xl border border-emerald-500/60 bg-slate-900/90 p-6 shadow-lg shadow-emerald-500/30">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Most Popular
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                90-Day AI Growth Program
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Done-with-you implementation. We build your AI-powered
                marketing systems, fix your funnel, and train your team.
              </p>
              <div className="mt-4 text-xs text-slate-400">
                Includes: Strategy, build-out, training, and ongoing support.
              </div>
              <a
                href="#book-call"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-300 transition-colors"
              >
                See If the 90-Day Program Fits You
              </a>
            </div>

            {/* Platform / Academy */}
            <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Platform & Learning
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                Torque AI Platform & Academy
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                For teams who want tools and training all in one place.
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-300">
                <li>
                  •{" "}
                  <a
                    href="https://www.torqueacademy.ai"
                    className="text-emerald-300 underline hover:text-emerald-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Torque Academy
                  </a>{" "}
                  — on-demand AI training for executives & teams
                </li>
                <li>
                  • AI-powered marketing & automation stack (chatbots, CRM,
                  campaigns)
                </li>
              </ul>
              <a
                href="https://www.torqueacademy.ai"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300 hover:text-emerald-200 transition-colors"
              >
                Explore Torque Academy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI READINESS QUIZ */}
      <section
        id="ai-quiz"
        className="border-b border-slate-800 bg-slate-950/80"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Not Sure Where to Start? Take the AI Readiness Quiz.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              In a few minutes, you'll see where your business stands on Strategy,
              Marketing, and Training — and what to fix first.
            </p>
          </div>

          <div className="mt-6">
            <ServicesScoreApp />
          </div>
        </div>
      </section>

      {/* ABOUT CHRIS */}
      <section
        id="about"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Meet Chris Dessi, Founder of Torque AI
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                I'm Chris, a Chappaqua-based founder, author, and AI strategist.
                Over the past two decades, I've led global sales and marketing
                teams, generated{" "}
                <span className="font-semibold text-emerald-300">$32M</span>{" "}
                using AI to sell a commodity product, and helped business owners
                turn chaos into clarity with AI.
              </p>
              <p className="text-sm text-slate-300 sm:text-base">
                I created Torque AI because most AI advice is either too
                technical or too theoretical. Business owners don't need more
                theory — they need{" "}
                <span className="font-semibold">revenue, systems, and a team</span>{" "}
                that knows how to use AI every day.
              </p>
              <p className="text-sm text-slate-300 sm:text-base">
                I also write and speak about reinvention and the future of work,
                including my latest book{" "}
                <a
                  href="https://www.im2old4thisshift.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-emerald-300 underline hover:text-emerald-200"
                >
                  Too Old For This Shift
                </a>{" "}
                — a guide for executives navigating massive change.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.im2old4thisshift.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300 hover:text-emerald-200 transition-colors"
                >
                  Learn About the Book
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Watch
                </p>
                <h3 className="mt-1 text-sm font-semibold">
                  Highlight Reel & Media
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  See clips from my TV appearances, talks, and workshops where
                  I break down AI for business owners in plain language.
                </p>
                <div className="mt-3 aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/MYX6N3m5y_I?si=CRZBlAGV9KWGzeRD"
                    title="Chris Dessi Highlight Reel"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM & RELATED BRANDS */}
      <section className="border-b border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold sm:text-3xl">
              The Torque AI Ecosystem
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Torque AI powers and supports a broader ecosystem of events,
              communities, and tools designed to help leaders navigate this
              moment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-sm font-semibold mb-1">Events & Summits</h3>
              <ul className="mt-2 space-y-2 text-xs text-emerald-300">
                <li>
                  <a
                    href="https://www.aisummit.nyc"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-200"
                  >
                    AI Summit NYC
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.westchesteraisummit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-200"
                  >
                    Westchester AI Summit
                  </a>
                </li>
                <li>
                  <a
                    href="https://quantumshiftsummit.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-200"
                  >
                    Quantum Shift Summit
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-sm font-semibold mb-1">
                Communities & Alliances
              </h3>
              <ul className="mt-2 space-y-2 text-xs text-emerald-300">
                <li>
                  <a
                    href="https://www.westchesteraialliance.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-200"
                  >
                    Westchester AI Alliance
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-sm font-semibold mb-1">
                Torque-Powered Products
              </h3>
              <ul className="mt-2 space-y-2 text-xs text-emerald-300">
                <li>
                  <a
                    href="https://realtor-easy-button.lovable.app"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-200"
                  >
                    Real Estate DataHub — The Realtor Easy Button
                  </a>
                </li>
                <li>
                  <a
                    href="https://bookgenius.ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-200"
                  >
                    Book Genius AI — For Executives Who Want to Publish
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK CALL / ZOHO / CALENDLY */}
      <section
        id="book-call"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Ready to See What AI Can Really Do for Your Business?
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Tell us a bit about your business, and we'll follow up with a
                strategy session to map out your first (or next) 90 days with
                AI.
              </p>
              <ul className="mt-2 space-y-2 text-xs text-slate-300">
                <li>• No generic pitch — everything is tailored to your world.</li>
                <li>• We'll talk Strategy, Marketing, and Training, not just tools.</li>
                <li>• If we're not a fit, you still leave with clarity.</li>
              </ul>
            </div>

            <div className="space-y-6">
              {/* ZOHO FORM */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs font-semibold text-slate-300 mb-2">
                  Step 1 — Share a Few Details
                </p>
                <ZohoContactForm />
              </div>

              {/* CALENDLY */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs font-semibold text-slate-300 mb-2">
                  Step 2 — Book Your Strategy Call
                </p>
                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
