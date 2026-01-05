import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import aiMarketingAnalysis from "@/assets/ai-marketing-analysis.jpg";
import aiDataFlow from "@/assets/ai-data-flow.jpg";

export default function FreeAIAudit() {
  // ✅ Your Zoho form (already live)
  const ZOHO_FORM_IFRAME_SRC =
    "https://forms.zohopublic.com/chris283/form/FreeAIMarketingRealityCheckIntake/formperma/wVhFTbhVm9_H9pHB_CmXVfI6EwZvjXnaooAzDz4Rdik";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      <SEO 
        title="Free AI Marketing Audit | AI Consulting Services"
        description="Get a free AI marketing audit from Torque AI. Our expert AI consultants will identify your #1 bottleneck and provide actionable AI strategy recommendations to grow your business."
        keywords="free AI audit, AI marketing audit, AI consulting services, AI strategy assessment, marketing automation audit, AI business analysis, free AI consultation, AI implementation review"
        url="/ai-audit"
      />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Top bar / header */}
      <header className="border-b bg-white/80 backdrop-blur-sm relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-emerald-600"
          >
            TORQUE AI
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
          >
            Free AI Marketing Reality Check
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-3xl text-base leading-7 text-gray-600"
          >
            Apply below and I'll send you a short, personalized video showing the
            <span className="font-semibold text-emerald-600"> #1 bottleneck </span>
            holding your marketing back and the
            <span className="font-semibold text-emerald-600"> fastest AI-enabled fix</span>.
          </motion.p>
          {/* Value chips */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {["~12-minute video", "Website + 1 channel review", "Delivered in 48 business hours", "Not a sales call"].map((chip, index) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="rounded-full border border-emerald-200 bg-emerald-50/50 px-3 py-1 text-xs font-medium text-emerald-700"
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Trusted By / Client Logos - moved up */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="py-10 bg-white/60 backdrop-blur-sm border-b border-gray-100 relative z-10"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Trusted By
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500">
            <img src="/logos/forbes-logo.png" alt="Forbes" className="h-7 object-contain" />
            <img src="/logos/cnn-logo.png" alt="CNN" className="h-7 object-contain" />
            <img src="/logos/fox-logo.png" alt="Fox" className="h-7 object-contain" />
            <img src="/logos/nbc-logo.png" alt="NBC" className="h-7 object-contain" />
            <img src="/logos/cbs-logo.png" alt="CBS" className="h-7 object-contain" />
            <img src="/logos/abc-logo.png" alt="ABC" className="h-7 object-contain" />
            <img src="/logos/fortune-logo.png" alt="Fortune" className="h-7 object-contain" />
          </div>
        </div>
      </motion.section>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* LEFT: Video card */}
          <motion.section 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-lg shadow-emerald-100/20"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Watch first (optional)
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  A quick explanation of what you'll receive and how it works.
                </p>
              </div>
              <span className="rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                60 seconds
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100">
              {/* Synthesia video embed */}
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1920/1080" }}>
                <iframe 
                  src="https://share.synthesia.io/embeds/videos/fbd70762-aeab-408e-978f-24a7ccb96f1c" 
                  loading="lazy" 
                  title="Synthesia video player - Torque AI Intro" 
                  allowFullScreen 
                  allow="encrypted-media; fullscreen; microphone;" 
                  style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0, overflow: "hidden" }}
                />
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-4 border border-emerald-100">
              <p className="text-sm font-semibold text-gray-900">
                What you'll get
              </p>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  The <span className="font-semibold">#1 bottleneck</span> I see
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  The <span className="font-semibold">fastest fix</span> (with AI if it fits)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  What to do next (with or without me)
                </li>
              </ul>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Note: This is a free video review. If you want the full 30–90 day
              execution plan, that's the paid Strategic Diagnostic.
            </p>
          </motion.section>

          {/* RIGHT: Form card */}
          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-lg shadow-emerald-100/20"
          >
            <h2 className="text-lg font-semibold text-gray-900">
              Apply for your Reality Check
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Answer a few quick questions so I know where to focus.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                aria-label="Free AI Marketing Reality Check – Intake"
                title="Free AI Marketing Reality Check – Intake"
                frameBorder="0"
                style={{ height: "560px", width: "100%", border: "none" }}
                src={ZOHO_FORM_IFRAME_SRC}
              />
            </div>

            <div className="mt-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 border border-blue-100">
              <p className="text-sm font-semibold text-gray-900">
                What happens next
              </p>
              <p className="mt-1 text-sm text-gray-600">
                If it's a fit, you'll receive your personalized video within{" "}
                <span className="font-semibold text-emerald-600">48 business hours</span>.
              </p>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              By submitting, you agree to receive follow-ups from Torque AI.
              Unsubscribe anytime.
            </p>
          </motion.section>
        </div>

        {/* Image showcase section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src={aiMarketingAnalysis} 
              alt="AI Marketing Analysis Dashboard" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold">Data-Driven Insights</p>
              <p className="text-white/80 text-sm mt-1">Get personalized analysis of your marketing performance</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src={aiDataFlow} 
              alt="AI Data Flow Visualization" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold">AI-Powered Solutions</p>
              <p className="text-white/80 text-sm mt-1">Leverage cutting-edge technology for your growth</p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 py-12 rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg shadow-emerald-100/30"
        >
          <div className="text-center px-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Ready to Transform Your Marketing?
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Get your free AI Marketing Reality Check or schedule a call to discuss your specific needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#apply"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('iframe[title*="Reality Check"]')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Your Free Audit
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-emerald-500 text-emerald-700 font-semibold hover:bg-emerald-50 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Bottom reassurance bar */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-lg shadow-emerald-100/20"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "No obligation", desc: "The video stands on its own. No pressure." },
              { title: "Clear scope", desc: "Website + one channel. Fast, focused, useful." },
              { title: "Next step (optional)", desc: "Paid Strategic Diagnostic for a full plan + implementation sequence." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex gap-3"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}