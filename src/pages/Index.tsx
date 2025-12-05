import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Check, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ZohoContactForm from "@/components/ZohoContactForm";

const Index = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  const formRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (service?: string) => {
    if (service) setSelectedService(service);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToPillars = () => {
    pillarsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const pillars = [
    {
      label: "Pillar 1",
      title: "Strategy Sprint (3–4 Weeks)",
      summary: "A short, intense engagement to identify your highest-ROI opportunities and build a roadmap you can execute immediately.",
      cta: "Book a Strategy Sprint Call",
      service: "Strategy Sprint"
    },
    {
      label: "Pillar 2",
      title: "Marketing & Sales Engine",
      summary: "We design and implement modern marketing and sales systems — content, ads, funnels, CRM, and follow-up — that drive consistent revenue.",
      cta: "Talk about your revenue systems",
      service: "Marketing & Sales Engine"
    },
    {
      label: "Pillar 3",
      title: "Training & Workshops",
      summary: "Live and virtual training to get your team using modern tools, workflows, and playbooks in their day-to-day work.",
      cta: "Book a training session",
      service: "Training & Workshops"
    }
  ];

  const strategyDetails = {
    features: [
      "Executive workshop to align on goals, constraints, and reality.",
      "Deep dive into your funnel, systems, processes, and data.",
      "Opportunity assessment across efficiency, revenue, automation, and modern tools.",
      "Prioritized roadmap with a clear Now / Next / Later / Never plan.",
      "Quick wins implemented during the sprint, not just slides and ideas.",
      "Recommended tech stack and implementation plan for the next 90–180 days."
    ],
    outcome: "Everyone on your leadership team sees the same picture of where you are, where you're going, and the shortest path to get there.",
    patterns: [
      "Leads leaking between marketing, sales, and operations.",
      "Teams using 10 tools when 3 would do more, better.",
      "No clear owner for revenue-critical workflows.",
      "Opportunities to automate 10–30% of repetitive work.",
      "No shared roadmap everyone can actually follow."
    ]
  };

  const marketingDetails = {
    features: [
      "Content creation workflows (social, email, long-form, video support).",
      "Paid advertising structure, creative frameworks, and optimization cycles.",
      "Funnel design and automation from first touch to booked call to closed deal.",
      "CRM setup and automation (HubSpot, Salesforce, Zoho, GoHighLevel & more).",
      "Lead nurturing, follow-up sequences, and pipeline hygiene systems.",
      "Reporting dashboards for marketing, sales, and leadership to see what's working."
    ],
    outcome: "A modern revenue engine that captures, nurtures, and closes more of the opportunities you already have — and scales with you as you grow.",
    howWeWork: [
      "We start from your Strategy Sprint or do a focused diagnostic.",
      "We map your existing funnel and tools before adding new ones.",
      "We prioritize the smallest changes that move the biggest numbers.",
      "We build, test, and iterate in short, focused cycles.",
      "Your team is involved, so they can own the systems long term."
    ]
  };

  const trainingDetails = {
    features: [
      "Foundations: training for non-technical teams on modern tools and workflows.",
      "Department-specific sessions for marketing, sales, operations, and customer success.",
      "Leadership workshops on decision-making, communication, and change management.",
      "Role-specific playbooks your team can reference after the session.",
      "Live, virtual, or on-site delivery depending on the size and needs of your organization.",
      "Optional ongoing office hours and Q&A support."
    ],
    outcome: "Your team becomes confident and capable using the systems you've invested in — instead of reverting back to the old way of doing things.",
    formats: [
      "Half-day executive offsites.",
      "Full-day team intensives.",
      "Multi-week virtual training series.",
      "Department-specific breakout sessions.",
      "\"Train the trainer\" programs for internal champions."
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <SEO 
        title="Torque | Strategy, Marketing & Training"
        description="Torque helps you clarify what to build, design modern marketing & sales systems, and train your team to use them. Strategy Sprints, Revenue Engines, and Workshops."
        keywords="business strategy, marketing systems, sales automation, team training, workshops, CRM setup, funnel design, leadership training, revenue growth, business consulting"
        url="/"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-800 via-slate-950 to-black pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-9 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300 mb-3">
                Strategy • Marketing & Sales • Training
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.1rem] font-extrabold leading-[1.1] mb-4 text-slate-100">
                Three ways to make your business{" "}
                <span className="bg-gradient-to-r from-sky-400 to-green-500 bg-clip-text text-transparent">
                  work smarter, sell more, and level up your people.
                </span>
              </h1>
              <p className="text-base text-slate-400 max-w-2xl mb-5 leading-relaxed">
                Torque helps you clarify what to build, design modern marketing & sales systems, and train your team to use them — with or without AI under the hood.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/85 border border-slate-600/45 text-sm text-indigo-200 mb-5">
                <Sparkles className="w-4 h-4" />
                <span>Built and optimized systems behind $32M+ in influenced revenue</span>
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <Button
                  onClick={() => scrollToForm("Strategy Sprint")}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-green-950 font-semibold hover:opacity-95 shadow-lg shadow-green-500/40"
                >
                  Book a Strategy Sprint Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={scrollToPillars}
                  className="px-5 py-3 rounded-full border-slate-500/60 bg-slate-900/85 text-slate-200 hover:bg-slate-900 hover:border-slate-400"
                >
                  View all services
                  <ArrowDown className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-slate-600/40 p-5 text-sm"
              style={{
                background: `
                  radial-gradient(circle at top left, rgba(56, 189, 248, 0.16), transparent 58%),
                  radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.16), transparent 60%),
                  rgba(15, 23, 42, 0.98)
                `,
                boxShadow: "0 30px 90px rgba(15, 23, 42, 0.95)"
              }}
            >
              <div className="font-semibold text-slate-100 mb-1">Where Torque fits in your business</div>
              
              <div className="space-y-4 mt-4">
                <div>
                  <div className="flex justify-between items-center gap-2 flex-wrap">
                    <span className="text-slate-200">1. Strategy Sprints</span>
                    <span className="text-indigo-300 text-xs">3–4 weeks to a clear roadmap</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">
                    We map your funnel, systems, and workflows, then prioritize what to do now, next, and never.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center gap-2 flex-wrap">
                    <span className="text-slate-200">2. Marketing & Sales Engines</span>
                    <span className="text-indigo-300 text-xs">Systems, automation & execution</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">
                    From content and ads to CRM and follow-up, we design and implement revenue systems that compound.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center gap-2 flex-wrap">
                    <span className="text-slate-200">3. Training & Workshops</span>
                    <span className="text-indigo-300 text-xs">Teams that actually adopt the work</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">
                    Live and virtual training so your people know how to use the tools, systems, and playbooks built for them.
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Pillar Overview */}
      <section ref={pillarsRef} id="pillars" className="py-16 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300 mb-2">
              Three core pillars
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
              Start where the leverage is highest.
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              Most clients work with Torque across all three pillars over time. But you don't have to do everything at once. Start with the pillar that solves the biggest bottleneck today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-slate-600/40 bg-slate-900/96 p-5 flex flex-col gap-3 hover:border-blue-400/90 hover:bg-slate-900/99 hover:-translate-y-1 transition-all duration-150"
                style={{ boxShadow: "0 18px 55px rgba(15, 23, 42, 0.95)" }}
              >
                <div className="text-xs uppercase tracking-[0.14em] text-slate-400">{pillar.label}</div>
                <h3 className="text-lg font-bold text-slate-100">{pillar.title}</h3>
                <p className="text-sm text-slate-400 flex-grow">{pillar.summary}</p>
                <Button
                  variant="outline"
                  onClick={() => scrollToForm(pillar.service)}
                  className="mt-2 w-full rounded-full border-blue-500/85 bg-slate-900/96 text-blue-100 hover:bg-blue-600/25 hover:border-blue-500 text-sm"
                >
                  {pillar.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Detail: Strategy Sprint */}
      <section id="strategy" className="py-12 border-t border-slate-700/25 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-7 items-start">
            <motion.div {...fadeInUp}>
              <div className="text-xs uppercase tracking-[0.16em] text-indigo-300 mb-2">Pillar 1</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">Strategy Sprint</h2>
              <p className="text-sm text-slate-400 mb-4">
                A 3–4 week engagement to step back, see the whole system, and decide what to build now, later, or never.
              </p>
              <ul className="space-y-2 text-sm text-slate-200 mb-4">
                {strategyDetails.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-500">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-400 mb-4">
                <strong className="text-slate-200">Outcome:</strong> {strategyDetails.outcome}
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <Button
                  onClick={() => scrollToForm("Strategy Sprint")}
                  className="rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-green-950 font-semibold hover:opacity-95 shadow-lg shadow-green-500/40"
                >
                  Book a Strategy Sprint Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <span className="text-xs text-slate-500">Ideal for founders, CEOs, CMOs, CROs, and operators.</span>
              </div>
            </motion.div>

            <motion.aside {...fadeInUp} transition={{ delay: 0.2 }} className="rounded-2xl border border-slate-600/40 bg-slate-900/96 p-4 text-sm">
              <div className="font-semibold text-slate-100 mb-1">What we often uncover</div>
              <div className="text-xs text-indigo-300 mb-3">Common patterns</div>
              <ul className="space-y-1.5 text-slate-400">
                {strategyDetails.patterns.map((pattern, i) => (
                  <li key={i}>{pattern}</li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Detail: Marketing & Sales */}
      <section id="marketing-sales" className="py-12 border-t border-slate-700/25 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-7 items-start">
            <motion.div {...fadeInUp}>
              <div className="text-xs uppercase tracking-[0.16em] text-indigo-300 mb-2">Pillar 2</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">Marketing & Sales Engine</h2>
              <p className="text-sm text-slate-400 mb-4">
                We design and build the marketing and sales systems that turn your strategy into consistent revenue.
              </p>
              <ul className="space-y-2 text-sm text-slate-200 mb-4">
                {marketingDetails.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-500">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-400 mb-4">
                <strong className="text-slate-200">Outcome:</strong> {marketingDetails.outcome}
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <Button
                  onClick={() => scrollToForm("Marketing & Sales Engine")}
                  className="rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-green-950 font-semibold hover:opacity-95 shadow-lg shadow-green-500/40"
                >
                  Talk about your revenue systems
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <span className="text-xs text-slate-500">Best for teams ready to implement, not just ideate.</span>
              </div>
            </motion.div>

            <motion.aside {...fadeInUp} transition={{ delay: 0.2 }} className="rounded-2xl border border-slate-600/40 bg-slate-900/96 p-4 text-sm">
              <div className="font-semibold text-slate-100 mb-1">How we work</div>
              <div className="text-xs text-indigo-300 mb-3">Implementation rhythm</div>
              <ul className="space-y-1.5 text-slate-400">
                {marketingDetails.howWeWork.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Detail: Training & Workshops */}
      <section id="training-workshops" className="py-12 border-t border-slate-700/25 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-7 items-start">
            <motion.div {...fadeInUp}>
              <div className="text-xs uppercase tracking-[0.16em] text-indigo-300 mb-2">Pillar 3</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">Training & Workshops</h2>
              <p className="text-sm text-slate-400 mb-4">
                If you want the work to stick, your people need to know how to use it. Training and workshops turn strategy and systems into new habits.
              </p>
              <ul className="space-y-2 text-sm text-slate-200 mb-4">
                {trainingDetails.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-500">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-400 mb-4">
                <strong className="text-slate-200">Outcome:</strong> {trainingDetails.outcome}
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <Button
                  onClick={() => scrollToForm("Training & Workshops")}
                  className="rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-green-950 font-semibold hover:opacity-95 shadow-lg shadow-green-500/40"
                >
                  Book a training session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <span className="text-xs text-slate-500">Great for sales kickoffs, leadership retreats, and rollout phases.</span>
              </div>
            </motion.div>

            <motion.aside {...fadeInUp} transition={{ delay: 0.2 }} className="rounded-2xl border border-slate-600/40 bg-slate-900/96 p-4 text-sm">
              <div className="font-semibold text-slate-100 mb-1">Popular formats</div>
              <div className="text-xs text-indigo-300 mb-3">What clients choose</div>
              <ul className="space-y-1.5 text-slate-400">
                {trainingDetails.formats.map((format, i) => (
                  <li key={i}>{format}</li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} id="form" className="py-16 border-t border-slate-700/25 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="rounded-3xl border border-slate-600/45 p-6 sm:p-8"
            style={{
              background: `
                radial-gradient(circle at top left, rgba(37, 99, 235, 0.17), transparent 55%),
                radial-gradient(circle at bottom right, rgba(22, 163, 74, 0.18), transparent 55%),
                rgba(15, 23, 42, 0.98)
              `,
              boxShadow: "0 26px 70px rgba(15, 23, 42, 0.95)"
            }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-100 mb-1">Work with Torque</h2>
              <p className="text-sm text-slate-300">
                Share a few details and we'll follow up within one business day to schedule a call and recommend a starting point.
              </p>
              {selectedService && (
                <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full border border-slate-500/70 bg-slate-900/90 text-xs text-slate-200">
                  <Sparkles className="w-3 h-3" />
                  <span>Selected service: {selectedService}</span>
                </div>
              )}
            </div>

            <ZohoContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
