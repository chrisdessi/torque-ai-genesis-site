import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServicesScoreApp from "@/components/ServicesScoreApp";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import ZohoContactForm from "@/components/ZohoContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

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
        className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-emerald-50/30 to-white"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-28 lg:flex-row lg:items-center lg:justify-between lg:py-36">
          <motion.div 
            className="max-w-2xl space-y-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p 
              variants={fadeInUp}
              className="inline-flex items-center rounded-full border border-emerald-600/40 bg-emerald-500/10 px-5 py-2 text-base font-semibold uppercase tracking-wide text-emerald-700"
            >
              Strategy • Marketing • Training
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]"
            >
              AI That Grows Your Business —
              <span className="block text-emerald-600 mt-2">
                Not Your Headaches
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-slate-600 sm:text-2xl leading-relaxed max-w-xl"
            >
              Torque AI helps business owners implement AI the{" "}
              <span className="font-semibold text-emerald-600">right</span> way:
              <span className="font-semibold">
                {" "}Strategy → Marketing → Team Training.
              </span>{" "}
              More leads, more sales, and more efficient operations.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
              <a
                href="#book-call"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-emerald-500/25 hover:bg-emerald-700 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Your AI Strategy Call
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-8 py-4 text-lg font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-base text-slate-500">
              Used by business owners, executives, and teams who want real
              results from AI — not just another demo.
            </motion.p>
          </motion.div>

          {/* Hero Right: Torque AI System card */}
          <motion.div 
            className="w-full max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm p-8 shadow-2xl">
              <p className="mb-6 text-base font-semibold uppercase tracking-wide text-emerald-600">
                The Torque AI System™
              </p>
              <div className="space-y-6">
                {[
                  { num: "1", title: "Strategy", desc: "AI Audit & 90-day roadmap aligned to your business goals." },
                  { num: "2", title: "Marketing", desc: "AI-powered funnels, campaigns, and automations that drive revenue." },
                  { num: "3", title: "Training", desc: "We train your team so AI becomes part of how you work daily." }
                ].map((item, i) => (
                  <motion.div 
                    key={item.num}
                    className="flex items-start gap-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                  >
                    <div className="h-12 w-12 rounded-full bg-emerald-100 ring-2 ring-emerald-500 flex items-center justify-center text-lg font-bold text-emerald-700 flex-shrink-0">
                      {item.num}
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-slate-900">{item.title}</p>
                      <p className="text-lg text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-blue-50 p-5 text-lg text-slate-700 border border-emerald-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                "In 2 years, we generated{" "}
                <span className="font-bold text-emerald-600">$32M</span> in
                deals by implementing AI into a commodity business."
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-semibold uppercase tracking-wide text-slate-500">
            As Seen On & Trusted By
          </p>
          <div className="flex flex-wrap items-center gap-6 text-base font-medium text-slate-600">
            <span>Fox5 News</span>
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span>AI Summit NYC</span>
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span>Torque Academy</span>
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span>Westchester AI Alliance</span>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="pillars" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-16 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl leading-tight">
              The Three Pillars of Torque AI
            </h2>
            <p className="mt-6 text-xl text-slate-600 sm:text-2xl leading-relaxed">
              AI isn't a single tool. It's a system. We help you build that
              system across{" "}
              <span className="font-semibold text-emerald-600">
                Strategy, Marketing, and Training
              </span>{" "}
              so the whole business moves forward.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Strategy */}
            <motion.div 
              id="strategy" 
              className="flex flex-col rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-10 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              variants={scaleIn}
            >
              <p className="mb-4 text-base font-semibold uppercase tracking-wide text-emerald-600">
                Pillar 1
              </p>
              <h3 className="text-2xl font-bold text-slate-900">Strategy</h3>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Most businesses don't have an AI problem — they have a{" "}
                <span className="font-semibold">clarity problem</span>. We help
                you decide what to build, what to automate, and what to ignore.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  AI Audit & current state assessment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  90-day AI roadmap aligned to revenue
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  Funnel & messaging redesign
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  Workflow & automation planning
                </li>
              </ul>
              <p className="mt-6 text-base font-semibold text-emerald-600">
                Outcome: Clarity, alignment, and no wasted money.
              </p>
            </motion.div>

            {/* Marketing */}
            <motion.div 
              id="marketing" 
              className="flex flex-col rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-10 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              variants={scaleIn}
            >
              <p className="mb-4 text-base font-semibold uppercase tracking-wide text-emerald-600">
                Pillar 2
              </p>
              <h3 className="text-2xl font-bold text-slate-900">
                Marketing & Automation
              </h3>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                We turn your AI strategy into a marketing engine that runs
                every day — capturing leads, nurturing them, and driving sales.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  AI agents for lead capture & qualification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  CRM, email, SMS & follow-up automation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  Content & SEO systems powered by AI
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  Full-funnel performance dashboards
                </li>
              </ul>
              <p className="mt-6 text-base font-semibold text-emerald-600">
                Outcome: More leads, more sales, less dependency on you.
              </p>
            </motion.div>

            {/* Training */}
            <motion.div 
              id="training" 
              className="flex flex-col rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-10 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              variants={scaleIn}
            >
              <p className="mb-4 text-base font-semibold uppercase tracking-wide text-emerald-600">
                Pillar 3
              </p>
              <h3 className="text-2xl font-bold text-slate-900">Training & Enablement</h3>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Tools don't transform companies —{" "}
                <span className="font-semibold">people</span> do. We train your
                team so AI becomes part of how you operate.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  Live workshops & team training (30–90 days)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  Custom GPTs, SOPs & playbooks
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  Leadership coaching & Q&A
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  Ongoing support as you scale
                </li>
              </ul>
              <p className="mt-6 text-base font-semibold text-emerald-600">
                Outcome: A confident team using AI every day.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                Real Results with Torque AI
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-slate-600 leading-relaxed">
                These are the kinds of outcomes you can expect when Strategy,
                Marketing, and Training work together.
              </p>
            </div>
            <a
              href="#book-call"
              className="inline-flex items-center justify-center rounded-full border-2 border-emerald-500 px-6 py-3 text-base font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              Talk About Your Use Case
            </a>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { tag: "E-Commerce", title: "92% Year-Over-Year Growth", desc: "We rebuilt their funnel, automated follow-up, and trained the team on daily AI usage — resulting in breakthrough growth." },
              { tag: "B2B Commodity", title: "$32M in Closed Deals", desc: "By combining AI-powered outreach, messaging, and deal management, we helped drive $32M in sales in just 2 years." },
              { tag: "Local Business", title: "More Leads, Less Admin", desc: "AI agents now handle lead capture, qualification, and follow-up, while the team focuses on serving customers." }
            ].map((item) => (
              <motion.div 
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
              >
                <p className="text-base font-semibold uppercase tracking-wide text-emerald-600">
                  {item.tag}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-16 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              How the Torque AI System™ Works
            </h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              We keep this simple. No jargon. No endless pilots. Just a clear
              path to value.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { step: "Step 1", title: "Book Your Strategy Call", desc: "We learn about your business, numbers, constraints, and what \"success with AI\" actually means for you." },
              { step: "Step 2", title: "Get Your 90-Day AI Roadmap", desc: "We map out quick wins, priority workflows, and the marketing systems to build first." },
              { step: "Step 3", title: "Implement & Train Your Team", desc: "We build the systems with you or for you and train your team so results keep compounding." }
            ].map((item) => (
              <motion.div 
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-10"
                variants={fadeInUp}
              >
                <p className="text-base font-semibold uppercase tracking-wide text-emerald-600">
                  {item.step}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OFFERS / PROGRAMS */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-16 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Choose How You Want to Work with Torque AI
            </h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Different businesses, different starting points. The common thread
              is always the same: Strategy → Marketing → Training.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Strategy Accelerator */}
            <motion.div 
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-10"
              variants={fadeInUp}
            >
              <p className="text-base font-semibold uppercase tracking-wide text-emerald-600">
                30-Day Intensive
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                AI Strategy Accelerator
              </h3>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                For leaders who want clarity, not more noise. In 30 days, we
                deliver a tailored AI roadmap, quick wins, and a launch plan.
              </p>
              <div className="mt-6 text-base text-slate-500">
                Includes: AI Audit, 90-Day Roadmap, priority workflows, and
                executive briefing.
              </div>
              <a
                href="#book-call"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                Apply for Strategy Accelerator
              </a>
            </motion.div>

            {/* 90-Day Growth - Featured */}
            <motion.div 
              className="flex flex-col rounded-3xl border-2 border-emerald-500 bg-white p-10 shadow-xl shadow-emerald-500/10 relative"
              variants={fadeInUp}
            >
              <div className="absolute -top-4 left-8 bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <p className="text-base font-semibold uppercase tracking-wide text-emerald-600 mt-2">
                90-Day Program
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                90-Day AI Growth Program
              </h3>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Done-with-you implementation. We build your AI-powered
                marketing systems, fix your funnel, and train your team.
              </p>
              <div className="mt-6 text-base text-slate-500">
                Includes: Strategy, build-out, training, and ongoing support.
              </div>
              <a
                href="#book-call"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                See If This Program Fits You
              </a>
            </motion.div>

            {/* Platform / Academy */}
            <motion.div 
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-10"
              variants={fadeInUp}
            >
              <p className="text-base font-semibold uppercase tracking-wide text-emerald-600">
                Platform & Learning
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Torque AI Platform & Academy
              </h3>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                For teams who want tools and training all in one place.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-slate-600">
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
                  — on-demand AI training
                </li>
                <li>
                  • AI-powered marketing stack (chatbots, CRM, campaigns)
                </li>
              </ul>
              <a
                href="https://www.torqueacademy.ai"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-6 py-4 text-lg font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                Explore Torque Academy
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI READINESS QUIZ */}
      <section id="ai-quiz" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="max-w-4xl mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Not Sure Where to Start?
            </h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Take the AI Readiness Quiz. In a few minutes, you'll see where your 
              business stands on Strategy, Marketing, and Training — and what to fix first.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ServicesScoreApp />
          </motion.div>
        </div>
      </section>

      {/* ABOUT CHRIS */}
      <section id="about" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                Meet Chris Dessi
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                I'm Chris, a Chappaqua-based founder, author, and AI strategist.
                Over the past two decades, I've led global sales and marketing
                teams, generated{" "}
                <span className="font-bold text-emerald-600">$32M</span>{" "}
                using AI to sell a commodity product, and helped business owners
                turn chaos into clarity with AI.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                I created Torque AI because most AI advice is either too
                technical or too theoretical. Business owners don't need more
                theory — they need{" "}
                <span className="font-semibold">revenue, systems, and a team</span>{" "}
                that knows how to use AI every day.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                I also write and speak about reinvention and the future of work,
                including my latest book{" "}
                <a
                  href="https://www.im2old4thisshift.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-emerald-600 underline hover:text-emerald-700"
                >
                  Too Old For This Shift
                </a>
                .
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.im2old4thisshift.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-6 py-3 text-lg font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Learn About the Book
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8">
                <p className="text-base font-semibold uppercase tracking-wide text-emerald-600">
                  Watch
                </p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  Highlight Reel & Media
                </h3>
                <p className="mt-3 text-lg text-slate-600">
                  See clips from my TV appearances, talks, and workshops.
                </p>
                <div className="mt-6 aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/MYX6N3m5y_I?si=CRZBlAGV9KWGzeRD"
                    title="Chris Dessi Highlight Reel"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ECOSYSTEM & RELATED BRANDS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div 
            className="mb-12 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              The Torque AI Ecosystem
            </h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Torque AI powers and supports a broader ecosystem of events,
              communities, and tools designed to help leaders navigate this moment.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-10"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Events & Summits</h3>
              <ul className="space-y-4 text-lg text-emerald-600">
                <li>
                  <a href="https://www.aisummit.nyc" target="_blank" rel="noreferrer" className="underline hover:text-emerald-700">
                    AI Summit NYC
                  </a>
                </li>
                <li>
                  <a href="https://www.westchesteraisummit.com" target="_blank" rel="noreferrer" className="underline hover:text-emerald-700">
                    Westchester AI Summit
                  </a>
                </li>
                <li>
                  <a href="https://quantumshiftsummit.com/" target="_blank" rel="noreferrer" className="underline hover:text-emerald-700">
                    Quantum Shift Summit
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-10"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Communities & Alliances
              </h3>
              <ul className="space-y-4 text-lg text-emerald-600">
                <li>
                  <a href="https://www.westchesteraialliance.com" target="_blank" rel="noreferrer" className="underline hover:text-emerald-700">
                    Westchester AI Alliance
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-10"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Torque-Powered Products
              </h3>
              <ul className="space-y-4 text-lg text-emerald-600">
                <li>
                  <a href="https://realtor-easy-button.lovable.app" target="_blank" rel="noreferrer" className="underline hover:text-emerald-700">
                    Real Estate DataHub
                  </a>
                </li>
                <li>
                  <a href="https://bookgenius.ai/" target="_blank" rel="noreferrer" className="underline hover:text-emerald-700">
                    Book Genius AI
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BOOK CALL / ZOHO / CALENDLY */}
      <section id="book-call" className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Ready to See What AI Can Really Do?
            </h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Tell us a bit about your business, and we'll follow up with a
              strategy session to map out your first (or next) 90 days with AI.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-lg text-slate-600">
              <span>✓ No generic pitch</span>
              <span>✓ Strategy, Marketing, and Training</span>
              <span>✓ Leave with clarity</span>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* ZOHO FORM */}
            <motion.div 
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg"
              variants={fadeInUp}
            >
              <p className="text-xl font-semibold text-slate-800 mb-6">
                Step 1 — Share a Few Details
              </p>
              <ZohoContactForm />
            </motion.div>

            {/* CALENDLY */}
            <motion.div 
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg"
              variants={fadeInUp}
            >
              <p className="text-xl font-semibold text-slate-800 mb-6">
                Step 2 — Book Your Strategy Call
              </p>
              <CalendlyEmbed />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
