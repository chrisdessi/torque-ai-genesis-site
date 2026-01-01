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
    <section className="py-24 dark-section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Future-Proof Architecture
          </p>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight">
            AI evolves.{" "}
            <span className="highlight-text">Your system remains.</span>
          </h2>
          <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            We don't build around today's AI. We build decision infrastructure that gets <strong className="text-white">smarter</strong> as AI improves — without rebuilding.
          </p>
        </motion.div>

        {/* Evolution Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />
            
            {/* Timeline Nodes */}
            <div className="relative flex justify-between items-center">
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
                    className="w-16 h-16 rounded-full bg-secondary border-4 border-primary flex items-center justify-center mb-4 relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">🤖</span>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">{step.year}</p>
                    <p className="text-white font-semibold">{step.ai}</p>
                    <p className="text-sm text-white/60 mt-1">{step.improvement}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Layer */}
          <motion.div
            className="mt-12 rounded-3xl border-2 border-primary/30 bg-primary/5 p-8 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,hsl(217_91%_60%_/_0.1)_50%,transparent_100%)] animate-shimmer" />
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-2">
                Your Decision System Layer
              </p>
              <p className="text-2xl font-bold text-white">
                ✓ Stable Architecture &nbsp;·&nbsp; ✓ Plug-and-Play AI &nbsp;·&nbsp; ✓ Zero Rebuild Required
              </p>
              <p className="mt-4 text-white/70">
                The system we build is <strong className="text-white">model-agnostic</strong>. Swap GPT-4 for GPT-5. Add Claude. Integrate Gemini. Your workflows, ownership rules, and decision logic stay intact.
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
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">
              One system. <span className="gradient-text">Replicated everywhere.</span>
            </h3>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              The same decision architecture scales across every department. Fix it once, deploy it everywhere.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {replicableAreas.map((area, i) => (
              <motion.div
                key={area.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{area.icon}</span>
                  <div>
                    <p className="font-bold text-white group-hover:text-primary transition-colors">
                      {area.title}
                    </p>
                    <p className="text-sm text-white/60 mt-1">{area.desc}</p>
                  </div>
                </div>
                
                {/* Replication indicator */}
                <div className="mt-4 flex items-center gap-2 text-xs text-primary/80">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                  <span>Same system, same rules, same clarity</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30">
            <span className="text-4xl">🔄</span>
            <div className="text-left">
              <p className="text-xl font-bold text-white">Build once. Scale infinitely.</p>
              <p className="text-white/70">Your decision system grows with you — not against you.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
