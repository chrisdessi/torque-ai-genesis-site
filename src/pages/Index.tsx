import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServicesScoreApp from "@/components/ServicesScoreApp";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import ZohoContactForm from "@/components/ZohoContactForm";

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter">
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
        className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:py-32">
          <div className="max-w-xl space-y-8">
            <p className="inline-flex items-center rounded-full border border-emerald-600/40 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Strategy • Marketing • Training
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
              AI That Grows Your Business —
              <span className="block text-emerald-600">
                Not Your Headaches
              </span>
            </h1>
            <p className="text-lg text-slate-700 sm:text-xl leading-relaxed">
              Torque AI helps business owners implement AI the{" "}
              <span className="font-semibold text-emerald-600">right</span> way:
              <span className="font-semibold">
                {" "}
                Strategy → Marketing → Team Training.
              </span>{" "}
              More leads, more sales, and more efficient operations — without
              needing to be a "tech person."
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#book-call"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-700 transition-colors"
              >
                Book Your AI Strategy Call
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                See How It Works
              </a>
            </div>

            <p className="text-sm text-slate-500">
              Used by business owners, executives, and teams who want real
              results from AI — not just another demo.
            </p>
          </div>

          {/* Hero Right: Simple visual / 3 pillar graphic */}
          <div className="mt-10 w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl lg:mt-0">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-emerald-600">
              The Torque AI System™
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 h-10 w-10 rounded-full bg-emerald-100 ring-2 ring-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-700">
                  1
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">Strategy</p>
                  <p className="text-base text-slate-600">
                    AI Audit & 90-day roadmap aligned to your business goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 h-10 w-10 rounded-full bg-emerald-100 ring-2 ring-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-700">
                  2
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">Marketing</p>
                  <p className="text-base text-slate-600">
                    AI-powered funnels, campaigns, and automations that drive
                    revenue.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 h-10 w-10 rounded-full bg-emerald-100 ring-2 ring-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-700">
                  3
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">Training</p>
                  <p className="text-base text-slate-600">
                    We train your team so AI becomes part of how you work
                    daily.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-base text-slate-700 border border-slate-100">
              "In 2 years, we generated{" "}
              <span className="font-semibold text-emerald-600">$32M</span> in
              deals by implementing AI into a commodity business. That's the
              power of doing this right."
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            As Seen On & Trusted By
          </p>
          <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-600">
            <span>Fox5 News</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span>AI Summit NYC</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span>Torque Academy</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span>Westchester AI Alliance</span>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section
        id="pillars"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              The Three Pillars of Torque AI
            </h2>
            <p className="text-lg text-slate-600 sm:text-xl">
              AI isn't a single tool. It's a system. We help you build that
              system across{" "}
              <span className="font-semibold text-emerald-600">
                Strategy, Marketing, and Training
              </span>{" "}
              so the whole business moves forward — not just a side project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Strategy */}
            <div id="strategy" className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Pillar 1
              </p>
              <h3 className="text-xl font-bold text-slate-900">Strategy</h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Most businesses don't have an AI problem — they have a{" "}
                <span className="font-semibold">clarity problem</span>. We help
                you decide what to build, what to automate, and what to ignore.
              </p>
              <ul className="mt-5 space-y-2.5 text-base text-slate-600">
                <li>• AI Audit & current state assessment</li>
                <li>• 90-day AI roadmap aligned to revenue goals</li>
                <li>• Funnel & messaging redesign</li>
                <li>• Workflow & automation planning</li>
                <li>• Competitive intelligence & insights</li>
              </ul>
              <p className="mt-5 text-sm font-semibold text-emerald-600">
                Outcome: Clarity, alignment, and no wasted money on random
                tools.
              </p>
            </div>

            {/* Marketing */}
            <div id="marketing" className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Pillar 2
              </p>
              <h3 className="text-xl font-bold text-slate-900">
                Marketing & Automation
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                We turn your AI strategy into a marketing engine that runs
                every day — capturing leads, nurturing them, and driving sales.
              </p>
              <ul className="mt-5 space-y-2.5 text-base text-slate-600">
                <li>• AI agents for lead capture & qualification</li>
                <li>• CRM, email, SMS & follow-up automation</li>
                <li>• Content & SEO systems powered by AI</li>
                <li>• Ad strategy & AI-driven creative testing</li>
                <li>• Full-funnel performance dashboards</li>
              </ul>
              <p className="mt-5 text-sm font-semibold text-emerald-600">
                Outcome: More leads, more sales, and a pipeline that doesn't
                depend on you.
              </p>
            </div>

            {/* Training */}
            <div id="training" className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Pillar 3
              </p>
              <h3 className="text-xl font-bold text-slate-900">Training & Enablement</h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Tools don't transform companies —{" "}
                <span className="font-semibold">people</span> do. We train your
                team so AI becomes part of how you operate every day.
              </p>
              <ul className="mt-5 space-y-2.5 text-base text-slate-600">
                <li>• Live workshops & team training (30–90 days)</li>
                <li>• Custom GPTs, SOPs & playbooks</li>
                <li>• Leadership coaching & Q&A</li>
                <li>• Role-based prompts & workflows</li>
                <li>• Ongoing support as you scale</li>
              </ul>
              <p className="mt-5 text-sm font-semibold text-emerald-600">
                Outcome: A confident team that uses AI every day — without
                needing you to be the bottleneck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Real Results with Torque AI
              </h2>
              <p className="mt-3 max-w-xl text-lg text-slate-600">
                These are the kinds of outcomes you can expect when Strategy,
                Marketing, and Training are working together.
              </p>
            </div>
            <a
              href="#book-call"
              className="inline-flex items-center justify-center rounded-full border-2 border-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              Talk About Your Use Case
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                E-Commerce
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                92% Year-Over-Year Growth
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                We rebuilt their funnel, automated follow-up, and trained the
                team on daily AI usage — resulting in breakthrough growth.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                B2B Commodity
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                $32M in Closed Deals
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                By combining AI-powered outreach, messaging, and deal
                management, we helped drive $32M in sales in just 2 years.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Local Business
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                More Leads, Less Admin
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
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
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              How the Torque AI System™ Works
            </h2>
            <p className="text-lg text-slate-600">
              We keep this simple. No jargon. No endless pilots. Just a clear
              path to value.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Step 1
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Book Your Strategy Call
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                We learn about your business, numbers, constraints, and what
                "success with AI" actually means for you.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Step 2
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Get Your 90-Day AI Roadmap
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                We map out quick wins, priority workflows, and the marketing
                systems to build first — starting where impact is highest.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Step 3
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Implement & Train Your Team
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                We build the systems with you or for you and train your team so
                the results keep compounding long after we're gone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS / PROGRAMS */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Choose How You Want to Work with Torque AI
            </h2>
            <p className="text-lg text-slate-600">
              Different businesses, different starting points. The common thread
              is always the same: Strategy → Marketing → Training.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Strategy Accelerator */}
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                30-Day Intensive
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                AI Strategy Accelerator
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                For leaders who want clarity, not more noise. In 30 days, we
                deliver a tailored AI roadmap, quick wins, and a launch plan.
              </p>
              <div className="mt-5 text-sm text-slate-500">
                Includes: AI Audit, 90-Day Roadmap, priority workflows, and
                executive briefing.
              </div>
              <a
                href="#book-call"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                Apply for Strategy Accelerator
              </a>
            </div>

            {/* 90-Day Growth */}
            <div className="flex flex-col rounded-3xl border-2 border-emerald-500 bg-white p-8 shadow-lg shadow-emerald-500/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Most Popular
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                90-Day AI Growth Program
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Done-with-you implementation. We build your AI-powered
                marketing systems, fix your funnel, and train your team.
              </p>
              <div className="mt-5 text-sm text-slate-500">
                Includes: Strategy, build-out, training, and ongoing support.
              </div>
              <a
                href="#book-call"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                See If the 90-Day Program Fits You
              </a>
            </div>

            {/* Platform / Academy */}
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Platform & Learning
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Torque AI Platform & Academy
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                For teams who want tools and training all in one place.
              </p>
              <ul className="mt-4 space-y-2.5 text-base text-slate-600">
                <li>
                  •{" "}
                  <a
                    href="https://www.torqueacademy.ai"
                    className="text-emerald-600 underline hover:text-emerald-700"
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
                className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
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
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Not Sure Where to Start? Take the AI Readiness Quiz.
            </h2>
            <p className="text-lg text-slate-600">
              In a few minutes, you'll see where your business stands on Strategy,
              Marketing, and Training — and what to fix first.
            </p>
          </div>

          <div className="mt-8">
            <ServicesScoreApp />
          </div>
        </div>
      </section>

      {/* ABOUT CHRIS */}
      <section
        id="about"
        className="border-b border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Meet Chris Dessi, Founder of Torque AI
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm Chris, a Chappaqua-based founder, author, and AI strategist.
                Over the past two decades, I've led global sales and marketing
                teams, generated{" "}
                <span className="font-semibold text-emerald-600">$32M</span>{" "}
                using AI to sell a commodity product, and helped business owners
                turn chaos into clarity with AI.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I created Torque AI because most AI advice is either too
                technical or too theoretical. Business owners don't need more
                theory — they need{" "}
                <span className="font-semibold">revenue, systems, and a team</span>{" "}
                that knows how to use AI every day.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I also write and speak about reinvention and the future of work,
                including my latest book{" "}
                <a
                  href="https://www.im2old4thisshift.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-emerald-600 underline hover:text-emerald-700"
                >
                  Too Old For This Shift
                </a>{" "}
                — a guide for executives navigating massive change.
              </p>

              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href="https://www.im2old4thisshift.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Learn About the Book
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  Watch
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  Highlight Reel & Media
                </h3>
                <p className="mt-2 text-base text-slate-600">
                  See clips from my TV appearances, talks, and workshops where
                  I break down AI for business owners in plain language.
                </p>
                <div className="mt-4 aspect-video rounded-2xl overflow-hidden">
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
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              The Torque AI Ecosystem
            </h2>
            <p className="text-lg text-slate-600">
              Torque AI powers and supports a broader ecosystem of events,
              communities, and tools designed to help leaders navigate this
              moment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Events & Summits</h3>
              <ul className="space-y-3 text-base text-emerald-600">
                <li>
                  <a
                    href="https://www.aisummit.nyc"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-700"
                  >
                    AI Summit NYC
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.westchesteraisummit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-700"
                  >
                    Westchester AI Summit
                  </a>
                </li>
                <li>
                  <a
                    href="https://quantumshiftsummit.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-700"
                  >
                    Quantum Shift Summit
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Communities & Alliances
              </h3>
              <ul className="space-y-3 text-base text-emerald-600">
                <li>
                  <a
                    href="https://www.westchesteraialliance.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-700"
                  >
                    Westchester AI Alliance
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Torque-Powered Products
              </h3>
              <ul className="space-y-3 text-base text-emerald-600">
                <li>
                  <a
                    href="https://realtor-easy-button.lovable.app"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-700"
                  >
                    Real Estate DataHub — The Realtor Easy Button
                  </a>
                </li>
                <li>
                  <a
                    href="https://bookgenius.ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-700"
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
        className="border-b border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Ready to See What AI Can Really Do for Your Business?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tell us a bit about your business, and we'll follow up with a
                strategy session to map out your first (or next) 90 days with
                AI.
              </p>
              <ul className="space-y-3 text-base text-slate-600">
                <li>• No generic pitch — everything is tailored to your world.</li>
                <li>• We'll talk Strategy, Marketing, and Training, not just tools.</li>
                <li>• If we're not a fit, you still leave with clarity.</li>
              </ul>
            </div>

            <div className="space-y-8">
              {/* ZOHO FORM */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-700 mb-3">
                  Step 1 — Share a Few Details
                </p>
                <ZohoContactForm />
              </div>

              {/* CALENDLY */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-700 mb-3">
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
