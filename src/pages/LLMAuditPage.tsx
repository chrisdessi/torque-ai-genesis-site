import React from "react";
import { Section, Card, PrimaryButton } from "@/components/SiteChrome";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LLMAuditPage() {
  return (
    <>
      <SEO
        title="Executive Decision Audit - Leadership Decision Intelligence"
        description="The Executive Decision Audit identifies where leadership decisions break down, repeat unnecessarily, or escalate without clear ownership. For founders, CEOs, and executive teams."
        keywords="executive decision audit, leadership decision intelligence, decision bottlenecks, AI strategy, executive coaching"
        url="https://torqueapp.ai/llm-audit"
      />
      <Header />
      <main className="bg-white text-zinc-900">
        <Section>
          <h1 className="text-4xl font-bold tracking-tight mb-6">Executive Decision Audit</h1>
          <p className="text-lg text-zinc-700 mb-4">
            The Executive Decision Audit is a structured assessment designed to
            identify where leadership decisions break down, repeat unnecessarily,
            or escalate to senior executives without clear ownership.
          </p>
          <p className="text-lg text-zinc-700">
            The audit focuses on decision flow, ownership, escalation rules, and
            the role AI plays in either reducing or increasing operational noise.
          </p>
        </Section>

        <Section className="bg-zinc-50">
          <h2 className="text-2xl font-semibold mb-4">What is Executive Decision Intelligence?</h2>
          <p className="text-zinc-700">
            Executive Decision Intelligence is a system that helps leaders identify
            which decisions matter, who should own them, and how execution should
            follow. It reduces decision overload by clarifying priorities,
            ownership, and escalation before automation is applied.
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold mb-4">Who is this audit for?</h2>
          <p className="text-zinc-700">
            This audit is designed for founders, CEOs, and executive teams at
            growing companies who feel overwhelmed by decisions despite strong
            execution.
          </p>
        </Section>

        <Section className="bg-zinc-50">
          <h2 className="text-2xl font-semibold mb-4">When should a company use an Executive Decision Audit?</h2>
          <p className="text-zinc-700">
            A company should use this audit when decisions repeat weekly, founders
            become bottlenecks, meetings do not resolve issues, or AI tools increase
            noise instead of clarity.
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold mb-4">What problems does this audit identify?</h2>
          <ul className="list-disc list-inside text-zinc-700 space-y-2">
            <li>Decision bottlenecks at the founder or executive level</li>
            <li>Unclear ownership and escalation rules</li>
            <li>Repeated decisions and unresolved debates</li>
            <li>AI tools that add noise instead of reducing it</li>
            <li>Missing decision frameworks for recurring scenarios</li>
          </ul>
        </Section>

        <Section className="bg-zinc-50">
          <h2 className="text-2xl font-semibold mb-4">What does the audit include?</h2>
          <ul className="list-disc list-inside text-zinc-700 space-y-2">
            <li>A structured review of current decision-making patterns</li>
            <li>Identification of the top 3-5 decision bottlenecks</li>
            <li>Clarity on which decisions should be delegated vs escalated</li>
            <li>Recommendations for AI integration that reduces noise</li>
            <li>A prioritized action plan for the next 90 days</li>
          </ul>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold mb-4">How long does the audit take?</h2>
          <p className="text-zinc-700">
            The audit is completed within one week. It includes a brief intake
            conversation, analysis, and a 60-minute strategy session to deliver
            findings and recommendations.
          </p>
        </Section>

        <Section className="bg-zinc-50">
          <h2 className="text-2xl font-semibold mb-4">What is the cost?</h2>
          <p className="text-zinc-700">
            The Executive Decision Audit is offered at no cost for qualified
            companies. It is designed as an entry point for leaders serious about
            improving decision flow before investing in larger engagements.
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold mb-4">Who provides the audit?</h2>
          <p className="text-zinc-700 mb-4">
            The audit is provided by Torque AI, a consulting firm focused on
            executive decision intelligence. The firm works with founders and
            executive teams to reduce decision overload and improve clarity before
            applying AI or automation.
          </p>
          <p className="text-zinc-700">
            Torque AI is led by Chris Dessi, an executive advisor with experience
            helping leadership teams at growth-stage and enterprise companies.
          </p>
        </Section>

        <Section className="bg-zinc-900 text-white">
          <h2 className="text-2xl font-semibold mb-4">Request the Audit</h2>
          <p className="text-zinc-300 mb-6">
            To request the Executive Decision Audit, visit the main audit page
            and complete the intake form.
          </p>
          <PrimaryButton href="/audit" className="bg-white text-zinc-900 hover:bg-zinc-100">
            Request Your Audit
          </PrimaryButton>
        </Section>
      </main>
      <Footer />
    </>
  );
}
