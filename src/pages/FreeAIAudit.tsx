import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Section, Card, PrimaryButton, SecondaryLink } from "@/components/SiteChrome";

export default function FreeAIAudit() {
  return (
    <main className="bg-white">
      <SEO
        title="Free Executive Decision Audit | Torque AI"
        description="Get a free Executive Decision Audit to uncover where decisions are breaking, why AI feels noisy, and what to fix first. For founders & executive teams."
        keywords="executive decision audit, decision intelligence, AI strategy, leadership clarity, decision bottlenecks, executive coaching"
        url="/audit"
      />
      <Hero />
      <PainMirror />
      <Reframe />
      <WhatYouGet />
      <Fit />
      <Authority />
      <CTARepeat />
      <FormSection />
      <FearRemoval />
    </main>
  );
}

/* ----------------------------- Sections ----------------------------- */

function Hero() {
  return (
    <Section className="pt-24 md:pt-32">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700">
            Free Executive Clarity Session
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Stop Re-Deciding Your Business Every Week
          </h1>
          <p className="mt-4 text-lg text-zinc-700">
            Get a free Executive Decision Audit to uncover where decisions are
            breaking, why AI feels noisy, and what to fix first.
          </p>
          <p className="mt-4 text-sm text-zinc-700">
            For founders & executive teams feeling busy, capable — and still
            behind.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href="#request">Get My Free Decision Audit</PrimaryButton>
            <SecondaryLink href="/how-it-works">How it works →</SecondaryLink>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            20 minutes · No prep · No sales pitch
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <h2 className="text-lg font-semibold text-zinc-900">What you'll get in 20 minutes</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li>• A clear map of your biggest decision bottlenecks</li>
              <li>• The repeated decisions draining leadership time</li>
              <li>• Where AI actually helps (and where it adds noise)</li>
              <li>• A "fix this first" priority path</li>
            </ul>
            <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm text-zinc-800">
                If there's a fit, we'll outline next steps. If not, you'll still
                leave clearer than you arrived.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

function PainMirror() {
  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            This probably feels familiar…
          </h2>
          <p className="mt-4 text-zinc-700">
            You're not lacking effort. You're drowning in decisions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <ul className="space-y-3 text-sm text-zinc-700">
              <li>• You're involved in too many decisions that shouldn't reach you</li>
              <li>• Meetings repeat, debates repeat, decisions repeat</li>
              <li>• AI tools are everywhere — clarity is nowhere</li>
              <li>• Execution is busy, but outcomes aren't compounding</li>
            </ul>
            <p className="mt-6 text-sm font-semibold text-zinc-900">
              This isn't a productivity problem. It's a decision problem.
            </p>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

function Reframe() {
  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <h3 className="text-xl font-semibold text-zinc-900">This is not a technical AI audit.</h3>
            <p className="mt-4 text-sm text-zinc-700">
              We don't review tools. We don't talk prompts. We don't pitch software.
            </p>
            <p className="mt-4 text-sm text-zinc-700">
              This is an <span className="font-semibold text-zinc-900">executive-level decision audit</span> designed to show:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>• Where decisions stall or escalate</li>
              <li>• Where ownership is unclear</li>
              <li>• Where AI is helping — and where it's adding noise</li>
              <li>• What's costing you the most cognitive energy</li>
            </ul>
            <p className="mt-6 text-sm font-semibold text-zinc-900">
              Clarity comes before automation.
            </p>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-zinc-200 bg-white p-6"
        >
          <p className="text-xs font-semibold text-zinc-500">WHY THIS WORKS</p>
          <h4 className="mt-2 text-lg font-semibold text-zinc-900">It's low-risk, high-value.</h4>
          <p className="mt-3 text-sm text-zinc-700">
            Executives don't want more tools. They want fewer decisions, cleaner ownership,
            and calmer execution.
          </p>
          <p className="mt-4 text-sm text-zinc-700">
            This audit creates a fast, honest picture of what's actually happening — and what to fix first.
          </p>
          <div className="mt-6">
            <SecondaryLink href="#request">Request the audit →</SecondaryLink>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function WhatYouGet() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">What you'll walk away with</h2>
        <p className="mt-3 max-w-2xl text-zinc-700">
          Concrete takeaways — not generic advice.
        </p>
      </motion.div>
      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {[
          { title: "Bottleneck Map", desc: "A clear view of where decisions stall and why." },
          { title: "Repeat Triggers", desc: "The recurring debates and escalations draining leadership time." },
          { title: "AI Placement", desc: "Where AI actually earns leverage — and where it's adding noise." },
          { title: "Fix-First Plan", desc: "A prioritized path forward you can act on immediately." },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card>
              <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-700">{item.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-sm text-zinc-700">
        If there's a fit, we'll outline next steps. If there's not, you'll still leave clearer than you arrived.
      </p>
    </Section>
  );
}

function Fit() {
  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">This is for you if…</h2>
          <ul className="mt-6 space-y-3 text-sm text-zinc-700">
            <li>• You're a founder, CEO, or senior operator</li>
            <li>• Your company is growing, but leadership feels heavier</li>
            <li>• You're tired of being the default bottleneck</li>
            <li>• You want clarity — not another dashboard</li>
          </ul>
          <p className="mt-6 text-sm text-zinc-700">
            <span className="font-semibold text-zinc-900">Not a fit:</span>{" "}
            early-stage founders or teams looking for hacks, prompts, or tactics.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#request">Get My Free Decision Audit</PrimaryButton>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <h3 className="text-lg font-semibold text-zinc-900">What happens after the audit?</h3>
            <p className="mt-3 text-sm text-zinc-700">
              If the diagnosis points to a systemic decision breakdown, we'll recommend a structured 90-day reset.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>• Decision ownership + escalation rules</li>
              <li>• Meeting redesign + execution lanes</li>
              <li>• AI installed where it belongs (after priorities are set)</li>
            </ul>
            <div className="mt-6">
              <SecondaryLink href="/90-day">Learn about the 90-Day Reset →</SecondaryLink>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

function Authority() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-12"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold text-zinc-500">WHY THIS WORKS</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
              Because we start where most platforms don't.
            </h2>
            <p className="mt-4 text-zinc-700">
              Growth doesn't stall because leaders aren't smart. It stalls because decision flow breaks — and executives get dragged into everything.
            </p>
            <p className="mt-4 text-zinc-700">
              Torque was built to fix the decision loop first — then deploy AI as leverage.
            </p>
          </div>
          <Card>
            <h3 className="text-lg font-semibold text-zinc-900">Prefer to learn first?</h3>
            <p className="mt-3 text-sm text-zinc-700">
              Explore the thinking behind Executive Decision Intelligence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <SecondaryLink href="/insights">Go to Insights →</SecondaryLink>
              <SecondaryLink href="/how-it-works">How Torque works →</SecondaryLink>
            </div>
          </Card>
        </div>
      </motion.div>
    </Section>
  );
}

function CTARepeat() {
  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Ready to see where decisions are breaking?
          </h2>
          <p className="mt-3 text-zinc-700">
            Get a free Executive Decision Audit. Confidential, fast, and built for real operators.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-4 md:justify-end"
        >
          <PrimaryButton href="#request">Get My Free Decision Audit</PrimaryButton>
        </motion.div>
      </div>
    </Section>
  );
}

function FormSection() {
  const ZOHO_FORM_IFRAME_SRC =
    "https://forms.zohopublic.com/chris283/form/FreeAIMarketingRealityCheckIntake/formperma/wVhFTbhVm9_H9pHB_CmXVfI6EwZvjXnaooAzDz4Rdik";

  return (
    <Section id="request">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-zinc-200 bg-white p-8 md:p-12"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Request Your Executive Decision Audit
            </h2>
            <p className="mt-3 text-zinc-700">
              Share a few details and we'll confirm fit and availability.
            </p>
            <p className="mt-6 text-sm text-zinc-700">
              We review every request personally. If there's a fit, you'll receive a calendar link.
              If not, we'll let you know.
            </p>
          </div>
          <Card>
            <div className="overflow-hidden rounded-xl border border-zinc-200">
              <iframe
                aria-label="Executive Decision Audit Request"
                title="Executive Decision Audit Request"
                frameBorder="0"
                style={{ height: "500px", width: "100%", border: "none" }}
                src={ZOHO_FORM_IFRAME_SRC}
              />
            </div>
          </Card>
        </div>
      </motion.div>
    </Section>
  );
}

function FearRemoval() {
  return (
    <Section className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-sm text-zinc-700">
          No spam. No hard pitch. Just clarity.
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          20 minutes · Confidential · No obligation
        </p>
      </motion.div>
    </Section>
  );
}
