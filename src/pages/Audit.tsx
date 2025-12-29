import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, ListChecks, Route, CheckCircle2, Sparkles, Zap, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ZohoContactForm from "@/components/ZohoContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-hidden">
      <SEO 
        title="Executive AI & Decision Audit | Torque"
        description="A diagnostic to uncover where decisions break down — and how AI should actually be used. Start with clarity."
        keywords="executive audit, AI audit, decision audit, leadership assessment, AI consulting, business clarity"
        url="/audit"
      />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Header />

      {/* Hero + Form Section - Above the fold */}
      <section className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 md:pt-12 md:pb-24">
        <motion.div 
          className="grid gap-10 lg:grid-cols-2 lg:items-start"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Left: Hero Content */}
          <motion.div variants={fadeInLeft} className="relative z-10">
            <motion.div 
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400">Entry Point</span>
            </motion.div>
            
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                The Executive AI &
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Decision Audit
              </span>
            </h1>
            
            <p className="mt-6 text-lg text-zinc-300 leading-relaxed max-w-xl">
              A diagnostic to uncover where decisions break down — and how AI should actually be used.
            </p>
            
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-xl">
              This is not a technical audit. This is not a tool inventory. It's an executive-level assessment of decision flow, ownership, and escalation — so clarity can be restored quickly.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#request"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Request the Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a href="/90-day" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4">
                See the 90-Day Reset →
              </a>
            </div>

            {/* What we look for - Compact */}
            <motion.div 
              className="mt-10 rounded-2xl border border-zinc-700/50 bg-zinc-800/50 backdrop-blur-sm p-6"
              variants={fadeInUp}
            >
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                What we look for
              </h2>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
                {[
                  "Repeated decisions (same debate, different week)",
                  "Founder/executive bottlenecks",
                  "Unclear ownership and escalation rules",
                  "AI-driven noise (tools added without a decision system)",
                  "Execution churn without outcome movement"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Form - Prominent and above fold */}
          <motion.div 
            variants={fadeInRight}
            className="relative z-10"
            id="request"
          >
            <motion.div 
              className="rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-b from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl p-8 shadow-2xl shadow-emerald-500/10"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                  <Zap className="w-3 h-3" />
                  FREE AUDIT
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-white text-center mt-2">Request Your Audit</h2>
              <p className="mt-2 text-sm text-zinc-400 text-center">
                Share a few details and we'll respond with next steps.
              </p>
              
              <div className="mt-6">
                <ZohoContactForm />
              </div>
              
              <p className="mt-4 text-xs text-zinc-500 text-center">
                No spam. No sales pitch. Just clarity.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* What You Get Section */}
      <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              What You'll Walk Away With
            </span>
          </motion.h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { 
                icon: Target, 
                title: "Diagnosis", 
                desc: "Clear identification of the highest-cost decision bottlenecks.",
                color: "emerald"
              },
              { 
                icon: ListChecks, 
                title: "Priorities", 
                desc: "A ranked list of what to fix first — and what to ignore for now.",
                color: "cyan"
              },
              { 
                icon: Route, 
                title: "Path Forward", 
                desc: "A recommendation on whether a 90-day reset is warranted.",
                color: "purple"
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={`h-full rounded-2xl border border-${item.color}-500/20 bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm p-6 hover:border-${item.color}-500/40 transition-colors`}>
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-${item.color}-500/20 flex items-center justify-center mb-4`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </motion.div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">You Get</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-zinc-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto max-w-4xl px-6 py-16 md:py-24">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to restore clarity?
            </span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Start with the audit. See what's really happening.
          </p>
          <motion.a
            href="#request"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Request Your Free Audit
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
