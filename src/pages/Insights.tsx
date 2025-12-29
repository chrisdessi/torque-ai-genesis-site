import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import quantumShiftLogo from "@/assets/quantum-shift-podcast-logo.png";

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

export default function InsightsPage() {
  const videos = [
    { title: "Why AI added noise", desc: "The hidden reason smart leaders feel behind — even with great tools." },
    { title: "Founder bottlenecks", desc: "How founders become the choke point by accident — and how to fix it." },
    { title: "Make fewer decisions", desc: "The counterintuitive path to speed, scale, and calmer leadership." },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <SEO 
        title="Insights | Torque"
        description="Conversations and ideas on leadership, AI, and decision-making. No hype. No tutorials. Just clarity for people making real decisions."
        keywords="AI insights, leadership podcast, decision-making, executive coaching, business strategy, AI consulting thoughts"
        url="/insights"
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
              Thinking in Public
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Insights
            </h1>
            <p className="mt-4 text-lg text-zinc-700">
              Conversations and ideas on leadership, AI, and decision-making.
            </p>
            <p className="mt-6 text-sm text-zinc-700">
              No hype. No tutorials. Just clarity for people making real decisions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/audit">Start with the Audit</PrimaryButton>
              <SecondaryLink href="/about">Why Torque exists →</SecondaryLink>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <h2 className="text-lg font-semibold">Watch & Listen</h2>
              <p className="mt-3 text-sm text-zinc-700">
                Explore our video content and podcast episodes on executive decision-making and AI.
              </p>
              <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <a 
                  href="https://www.youtube.com/@ChristopherDessi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <img src={quantumShiftLogo} alt="The Quantum Shift Podcast" className="w-10 h-10 rounded-lg" />
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase">YouTube</p>
                    <span className="text-sm font-medium text-zinc-900">
                      The Quantum Shift Podcast →
                    </span>
                  </div>
                </a>
              </div>
              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-200 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase">Podcast</p>
                    <a 
                      href="/quantum-shift"
                      className="text-sm font-medium text-zinc-900 hover:underline"
                    >
                      Quantum Shift Episodes →
                    </a>
                  </div>
                </div>
              </div>
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
            Recommended starting points
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 max-w-2xl text-zinc-700">
            If you're new here, start with the decision loop: why it breaks, how it gets rebuilt, and how AI should actually be deployed.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 grid gap-6 md:grid-cols-3">
            {videos.map((video, i) => (
              <Card key={i}>
                <div className="w-full h-32 rounded-xl bg-zinc-100 flex items-center justify-center mb-4">
                  <Play className="w-8 h-8 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="mt-3 text-sm text-zinc-700">{video.desc}</p>
                <div className="mt-4">
                  <a 
                    href="https://www.youtube.com/@ChristopherDessi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
                  >
                    Watch →
                  </a>
                </div>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      <Footer />
    </main>
  );
}
