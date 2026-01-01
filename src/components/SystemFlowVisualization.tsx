import { motion } from "framer-motion";
import { useState } from "react";

const nodes = {
  before: [
    { id: 1, label: "CRM Data Entry", status: "warning", x: 10, y: 20 },
    { id: 2, label: "Manual Input", status: "error", x: 30, y: 35 },
    { id: 3, label: "Data Validation", status: "error", x: 50, y: 20 },
    { id: 4, label: "Sales Pipeline", status: "warning", x: 70, y: 35 },
    { id: 5, label: "Reporting", status: "error", x: 90, y: 20 },
  ],
  after: [
    { id: 1, label: "CRM Data Entry", status: "success", x: 10, y: 20 },
    { id: 2, label: "AI Validation", status: "success", x: 30, y: 35 },
    { id: 3, label: "Auto-Enrichment", status: "success", x: 50, y: 20 },
    { id: 4, label: "Sales Pipeline", status: "success", x: 70, y: 35 },
    { id: 5, label: "Real-time Insights", status: "success", x: 90, y: 20 },
  ],
};

const metrics = {
  before: [
    { label: "Data Accuracy", value: "62%", trend: "down" },
    { label: "Decision Time", value: "4.2 days", trend: "down" },
    { label: "Manual Reviews", value: "127/week", trend: "down" },
    { label: "Pipeline Velocity", value: "Slow", trend: "down" },
  ],
  after: [
    { label: "Data Accuracy", value: "98%", trend: "up" },
    { label: "Decision Time", value: "4 hours", trend: "up" },
    { label: "Manual Reviews", value: "8/week", trend: "up" },
    { label: "Pipeline Velocity", value: "3.2x Faster", trend: "up" },
  ],
};

const bottleneckDetails = [
  { icon: "⚠️", title: "Duplicate Entries", desc: "37% of leads duplicated" },
  { icon: "❌", title: "Missing Fields", desc: "52% incomplete records" },
  { icon: "🔄", title: "Manual Cleanup", desc: "18 hrs/week wasted" },
  { icon: "📉", title: "Lost Deals", desc: "$420K pipeline leakage" },
];

const aiSolutions = [
  { icon: "🤖", title: "Auto-Deduplication", desc: "AI merges duplicates instantly" },
  { icon: "✨", title: "Smart Enrichment", desc: "Auto-fills missing data" },
  { icon: "⚡", title: "Real-time Validation", desc: "Errors caught at entry" },
  { icon: "📈", title: "Clean Pipeline", desc: "100% actionable leads" },
];

export default function SystemFlowVisualization() {
  const [showAfter, setShowAfter] = useState(false);
  const currentNodes = showAfter ? nodes.after : nodes.before;
  const currentMetrics = showAfter ? metrics.after : metrics.before;
  const currentDetails = showAfter ? aiSolutions : bottleneckDetails;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-emerald-500";
      case "warning": return "bg-amber-500";
      case "error": return "bg-red-500";
      default: return "bg-muted";
    }
  };

  const getStatusGlow = (status: string) => {
    switch (status) {
      case "success": return "shadow-emerald-500/50";
      case "warning": return "shadow-amber-500/50";
      case "error": return "shadow-red-500/50";
      default: return "";
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217_91%_60%_/_0.03)_0%,_transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            System Transformation
          </p>
          <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl leading-tight">
            See where we unlock{" "}
            <span className="highlight-text">your bottlenecks</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Bad data creates decision debt. We install AI where it matters most — at the source.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border-2 border-border bg-secondary p-1">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                !showAfter
                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Before: The Bottleneck
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                showAfter
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              After: AI-Powered Flow
            </button>
          </div>
        </div>

        {/* Flow Visualization */}
        <motion.div
          className="relative rounded-3xl border-2 border-border bg-secondary/50 p-8 mb-12 overflow-hidden"
          layout
        >
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Section Label */}
          <div className="relative mb-8">
            <motion.div
              key={showAfter ? "after" : "before"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className={`w-3 h-3 rounded-full ${showAfter ? "bg-emerald-500" : "bg-red-500"} animate-pulse`} />
              <span className={`text-lg font-bold ${showAfter ? "text-emerald-400" : "text-red-400"}`}>
                {showAfter ? "Sales Operations — Optimized" : "Sales Operations — Typical Bottleneck"}
              </span>
            </motion.div>
          </div>

          {/* Flow Nodes */}
          <div className="relative h-48">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {currentNodes.slice(0, -1).map((node, i) => {
                const nextNode = currentNodes[i + 1];
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={`${node.x}%`}
                    y1={`${node.y + 15}%`}
                    x2={`${nextNode.x}%`}
                    y2={`${nextNode.y + 15}%`}
                    stroke={showAfter ? "hsl(152, 76%, 45%)" : "hsl(0, 84%, 60%)"}
                    strokeWidth="2"
                    strokeDasharray={showAfter ? "0" : "8 4"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {currentNodes.map((node, i) => (
              <motion.div
                key={`${showAfter ? "after" : "before"}-${node.id}`}
                className="absolute transform -translate-x-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`relative flex flex-col items-center`}>
                  {/* Node Circle */}
                  <motion.div
                    className={`w-12 h-12 rounded-full ${getStatusColor(node.status)} flex items-center justify-center shadow-lg ${getStatusGlow(node.status)}`}
                    animate={node.status === "error" ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span className="text-white text-lg font-bold">{i + 1}</span>
                  </motion.div>
                  
                  {/* Label */}
                  <div className="mt-3 px-3 py-1.5 rounded-lg bg-background border border-border text-center">
                    <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                      {node.label}
                    </span>
                  </div>

                  {/* Bottleneck Indicator */}
                  {!showAfter && node.status === "error" && (
                    <motion.div
                      className="absolute -top-6 left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <span className="text-2xl">🚨</span>
                    </motion.div>
                  )}

                  {/* Success Indicator */}
                  {showAfter && (
                    <motion.div
                      className="absolute -top-6 left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    >
                      <span className="text-2xl">✓</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* AI Integration Badge */}
            {showAfter && (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <div className="px-4 py-2 rounded-full bg-primary/20 border border-primary/50 backdrop-blur-sm">
                  <span className="text-sm font-bold text-primary">🤖 AI Layer Active</span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Details Grid */}
        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          {/* Problem/Solution Cards */}
          <motion.div
            className="rounded-3xl border-2 border-border bg-secondary/50 p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-xl font-bold mb-6 ${showAfter ? "text-emerald-400" : "text-red-400"}`}>
              {showAfter ? "🤖 AI Solutions Deployed" : "⚠️ Bottleneck Analysis"}
            </h3>
            <div className="grid gap-4">
              {currentDetails.map((item, i) => (
                <motion.div
                  key={`${showAfter}-${i}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            className="rounded-3xl border-2 border-border bg-secondary/50 p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              📊 Impact Metrics
            </h3>
            <div className="grid gap-4">
              {currentMetrics.map((metric, i) => (
                <motion.div
                  key={`${showAfter}-metric-${i}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-background/50 border border-border"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-muted-foreground font-medium">{metric.label}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xl font-bold ${
                      showAfter ? "text-emerald-400" : "text-red-400"
                    }`}>
                      {metric.value}
                    </span>
                    <span className={`text-lg ${
                      metric.trend === "up" ? "text-emerald-400" : "text-red-400"
                    }`}>
                      {metric.trend === "up" ? "↑" : "↓"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl ${
            showAfter 
              ? "bg-emerald-500/10 border-2 border-emerald-500/30" 
              : "bg-red-500/10 border-2 border-red-500/30"
          }`}>
            <span className="text-3xl">{showAfter ? "✨" : "💡"}</span>
            <p className={`text-lg font-bold ${showAfter ? "text-emerald-400" : "text-foreground"}`}>
              {showAfter 
                ? "Clean data = Fewer decisions. Better decisions. Faster execution."
                : "Click 'After' to see how AI transforms this flow →"
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
