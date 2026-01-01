import { motion } from "framer-motion";

const evolutionSteps = [
  { year: "2024", ai: "GPT-4", improvement: "Basic automation" },
  { year: "2025", ai: "GPT-5", improvement: "Predictive insights" },
  { year: "2026", ai: "Next Gen", improvement: "Autonomous execution" },
  { year: "Future", ai: "AGI+", improvement: "Full intelligence layer" },
];

const replicableAreas = [
  { icon: "📈", title: "Sales Ops", desc: "Pipeline, forecasting, lead scoring" },
  { icon: "🎯", title: "Marketing", desc: "Campaign optimization, attribution" },
  { icon: "👥", title: "Customer Success", desc: "Churn prediction, health scores" },
  { icon: "💰", title: "Finance", desc: "Reporting, reconciliation, planning" },
  { icon: "🏭", title: "Operations", desc: "Inventory, logistics, scheduling" },
  { icon: "🤝", title: "HR & Recruiting", desc: "Screening, onboarding, retention" },
];

export default function SystemEvolutionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 dark-section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-16 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3 sm:mb-4">
            Future-Proof Architecture
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
            AI evolves.{" "}
            <span className="highlight-text">Your system remains.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            We don't build around today's AI. We build decision infrastructure that gets <strong className="text-white">smarter</strong> as AI improves — without rebuilding.
          </p>
        </motion.div>

        {/* Evolution Timeline */}
        <motion.div
          className="mb-12 sm:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />
            
            {/* Timeline Nodes - Mobile: 2x2 grid, Desktop: horizontal */}
            <div className="grid grid-cols-2 gap-4 sm:gap-0 sm:flex sm:justify-between sm:items-center relative">
              {evolutionSteps.map((step, i) => (
                <motion.div
                  key={step.year}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  {/* Node */}
                  <motion.div
                    className="w-12 h-12 sm:w-14 lg:w-16 sm:h-14 lg:h-16 rounded-full bg-secondary border-2 sm:border-4 border-primary flex items-center justify-center mb-2 sm:mb-4 relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-lg sm:text-xl lg:text-2xl">🤖</span>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <p className="text-sm sm:text-lg font-bold text-primary">{step.year}</p>
                    <p className="text-white font-semibold text-xs sm:text-base">{step.ai}</p>
                    <p className="text-[10px] sm:text-sm text-white/60 mt-0.5 sm:mt-1">{step.improvement}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Layer */}
          <motion.div
            className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl border-2 border-primary/30 bg-primary/5 p-4 sm:p-6 lg:p-8 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,hsl(217_91%_60%_/_0.1)_50%,transparent_100%)] animate-shimmer" />
            <div className="relative">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/80 mb-2">
                Your Decision System Layer
              </p>
              <p className="text-sm sm:text-xl lg:text-2xl font-bold text-white">
                <span className="block sm:inline">✓ Stable Architecture</span>
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline">✓ Plug-and-Play AI</span>
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline">✓ Zero Rebuild</span>
              </p>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/70">
                The system we build is <strong className="text-white">model-agnostic</strong>. Swap GPT-4 for GPT-5. Add Claude. Integrate Gemini. Your workflows stay intact.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Replication Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white">
              One system. <span className="gradient-text">Replicated everywhere.</span>
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto">
              The same decision architecture scales across every department. Fix it once, deploy it everywhere.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {replicableAreas.map((area, i) => (
              <motion.div
                key={area.title}
                className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 lg:p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                  <span className="text-2xl sm:text-3xl">{area.icon}</span>
                  <div>
                    <p className="font-bold text-sm sm:text-base text-white group-hover:text-primary transition-colors">
                      {area.title}
                    </p>
                    <p className="text-[10px] sm:text-sm text-white/60 mt-0.5 sm:mt-1">{area.desc}</p>
                  </div>
                </div>
                
                {/* Replication indicator - Hidden on mobile */}
                <div className="hidden sm:flex mt-3 sm:mt-4 items-center gap-2 text-xs text-primary/80">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                  <span>Same system, same clarity</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30">
            <span className="text-2xl sm:text-4xl">🔄</span>
            <div className="text-left">
              <p className="text-base sm:text-xl font-bold text-white">Build once. Scale infinitely.</p>
              <p className="text-xs sm:text-base text-white/70">Your decision system grows with you.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
