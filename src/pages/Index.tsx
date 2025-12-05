import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
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

  // Floating orb component
  const FloatingOrb = ({ 
    className, 
    delay = 0, 
    duration = 20,
    size = "w-64 h-64"
  }: { 
    className?: string; 
    delay?: number; 
    duration?: number;
    size?: string;
  }) => (
    <motion.div
      className={`absolute rounded-full blur-3xl ${size} ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <SEO 
        title="Torque | Strategy, Marketing & Training"
        description="Torque helps you clarify what to build, design modern marketing & sales systems, and train your team to use them. Strategy Sprints, Revenue Engines, and Workshops."
        keywords="business strategy, marketing systems, sales automation, team training, workshops, CRM setup, funnel design, leadership training, revenue growth, business consulting"
        url="/"
      />
      <Header />

      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-24 pb-20 min-h-[90vh] flex items-center">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingOrb 
            className="top-10 right-[10%] bg-gradient-to-br from-sky-400/20 to-blue-500/10" 
            size="w-96 h-96"
            duration={25}
          />
          <FloatingOrb 
            className="bottom-20 left-[5%] bg-gradient-to-tr from-emerald-400/15 to-green-300/10" 
            size="w-[500px] h-[500px]"
            delay={2}
            duration={30}
          />
          <FloatingOrb 
            className="top-1/3 left-1/4 bg-gradient-to-r from-indigo-400/15 to-purple-400/10" 
            size="w-72 h-72"
            delay={4}
            duration={22}
          />
          <FloatingOrb 
            className="bottom-1/3 right-[20%] bg-gradient-to-bl from-cyan-300/15 to-teal-400/10" 
            size="w-56 h-56"
            delay={1}
            duration={18}
          />
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.line
              x1="0%" y1="30%" x2="100%" y2="70%"
              stroke="url(#gradient1)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.line
              x1="100%" y1="20%" x2="0%" y2="80%"
              stroke="url(#gradient2)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3.5, delay: 1, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-slate-400/60 rounded-full"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i * 5) % 60}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-4"
              >
                Strategy • Marketing & Sales • Training
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] mb-8 text-slate-900"
              >
                <span className="bg-gradient-to-r from-sky-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  Work smarter,
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  sell more,
                </span>
                <br />
                <span className="text-slate-900">
                  and level up
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                  your people.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-2xl mb-8 leading-relaxed"
              >
                Torque helps you clarify what to build, design modern marketing & sales systems, and train your team to use them.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-base text-indigo-600 mb-8 shadow-sm"
              >
                <Sparkles className="w-5 h-5" />
                <span>Built and optimized systems behind $32M+ in influenced revenue</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <Button
                  onClick={() => scrollToForm("Strategy Sprint")}
                  className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold hover:opacity-95 shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all"
                >
                  Book a Strategy Sprint Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={scrollToPillars}
                  className="px-6 py-4 text-lg rounded-full border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                >
                  View all services
                  <ArrowDown className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Card */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-3xl border border-slate-200 p-6 lg:p-8 bg-white shadow-xl"
            >
              <div className="font-bold text-xl text-slate-900 mb-4">Where Torque fits in your business</div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center gap-2 flex-wrap mb-1">
                    <span className="text-lg font-semibold text-slate-900">1. Strategy Sprints</span>
                    <span className="text-indigo-600 text-sm">3–4 weeks to a clear roadmap</span>
                  </div>
                  <p className="text-slate-500 text-base">
                    We map your funnel, systems, and workflows, then prioritize what to do now, next, and never.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center gap-2 flex-wrap mb-1">
                    <span className="text-lg font-semibold text-slate-900">2. Marketing & Sales Engines</span>
                    <span className="text-indigo-600 text-sm">Systems, automation & execution</span>
                  </div>
                  <p className="text-slate-500 text-base">
                    From content and ads to CRM and follow-up, we design and implement revenue systems that compound.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center gap-2 flex-wrap mb-1">
                    <span className="text-lg font-semibold text-slate-900">3. Training & Workshops</span>
                    <span className="text-indigo-600 text-sm">Teams that actually adopt the work</span>
                  </div>
                  <p className="text-slate-500 text-base">
                    Live and virtual training so your people know how to use the tools, systems, and playbooks built for them.
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-12 border-2 border-slate-300 rounded-full flex justify-center">
            <motion.div 
              className="w-2 h-4 bg-sky-500 rounded-full mt-2"
              animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Pillar Overview */}
      <section ref={pillarsRef} id="pillars" className="py-20 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-3">
              Three core pillars
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Start where the leverage is highest.
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Most clients work with Torque across all three pillars over time. But you don't have to do everything at once. Start with the pillar that solves the biggest bottleneck today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 flex flex-col gap-4 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-150 shadow-lg"
              >
                <div className="text-sm uppercase tracking-[0.14em] text-slate-500">{pillar.label}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-base lg:text-lg text-slate-600 flex-grow">{pillar.summary}</p>
                <Button
                  variant="outline"
                  onClick={() => scrollToForm(pillar.service)}
                  className="mt-3 w-full rounded-full border-blue-500 bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-600 text-base py-3"
                >
                  {pillar.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Detail: Strategy Sprint */}
      <section id="strategy" className="py-16 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
            <motion.div {...fadeInUp}>
              <div className="text-sm uppercase tracking-[0.16em] text-indigo-600 mb-3">Pillar 1</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Strategy Sprint</h2>
              <p className="text-lg lg:text-xl text-slate-600 mb-6">
                A 3–4 week engagement to step back, see the whole system, and decide what to build now, later, or never.
              </p>
              <ul className="space-y-3 text-base lg:text-lg text-slate-700 mb-6">
                {strategyDetails.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-slate-400 text-xl">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base lg:text-lg text-slate-600 mb-6">
                <strong className="text-slate-900">Outcome:</strong> {strategyDetails.outcome}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  onClick={() => scrollToForm("Strategy Sprint")}
                  className="rounded-full px-6 py-3 text-base bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold hover:opacity-95 shadow-lg shadow-green-500/30"
                >
                  Book a Strategy Sprint Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <span className="text-base text-slate-500">Ideal for founders, CEOs, CMOs, CROs, and operators.</span>
              </div>
            </motion.div>

            <motion.aside {...fadeInUp} transition={{ delay: 0.2 }} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <div className="font-bold text-xl text-slate-900 mb-2">What we often uncover</div>
              <div className="text-sm text-indigo-600 mb-4">Common patterns</div>
              <ul className="space-y-3 text-base lg:text-lg text-slate-600">
                {strategyDetails.patterns.map((pattern, i) => (
                  <li key={i}>{pattern}</li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Detail: Marketing & Sales */}
      <section id="marketing-sales" className="py-16 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
            <motion.div {...fadeInUp}>
              <div className="text-sm uppercase tracking-[0.16em] text-indigo-600 mb-3">Pillar 2</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Marketing & Sales Engine</h2>
              <p className="text-lg lg:text-xl text-slate-600 mb-6">
                We design and build the marketing and sales systems that turn your strategy into consistent revenue.
              </p>
              <ul className="space-y-3 text-base lg:text-lg text-slate-700 mb-6">
                {marketingDetails.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-slate-400 text-xl">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base lg:text-lg text-slate-600 mb-6">
                <strong className="text-slate-900">Outcome:</strong> {marketingDetails.outcome}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  onClick={() => scrollToForm("Marketing & Sales Engine")}
                  className="rounded-full px-6 py-3 text-base bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold hover:opacity-95 shadow-lg shadow-green-500/30"
                >
                  Talk about your revenue systems
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <span className="text-base text-slate-500">Best for teams ready to implement, not just ideate.</span>
              </div>
            </motion.div>

            <motion.aside {...fadeInUp} transition={{ delay: 0.2 }} className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
              <div className="font-bold text-xl text-slate-900 mb-2">How we work</div>
              <div className="text-sm text-indigo-600 mb-4">Implementation rhythm</div>
              <ul className="space-y-3 text-base lg:text-lg text-slate-600">
                {marketingDetails.howWeWork.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Detail: Training & Workshops */}
      <section id="training-workshops" className="py-16 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
            <motion.div {...fadeInUp}>
              <div className="text-sm uppercase tracking-[0.16em] text-indigo-600 mb-3">Pillar 3</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Training & Workshops</h2>
              <p className="text-lg lg:text-xl text-slate-600 mb-6">
                If you want the work to stick, your people need to know how to use it. Training and workshops turn strategy and systems into new habits.
              </p>
              <ul className="space-y-3 text-base lg:text-lg text-slate-700 mb-6">
                {trainingDetails.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-slate-400 text-xl">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base lg:text-lg text-slate-600 mb-6">
                <strong className="text-slate-900">Outcome:</strong> {trainingDetails.outcome}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  onClick={() => scrollToForm("Training & Workshops")}
                  className="rounded-full px-6 py-3 text-base bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold hover:opacity-95 shadow-lg shadow-green-500/30"
                >
                  Book a training session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <span className="text-base text-slate-500">Great for sales kickoffs, leadership retreats, and rollout phases.</span>
              </div>
            </motion.div>

            <motion.aside {...fadeInUp} transition={{ delay: 0.2 }} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <div className="font-bold text-xl text-slate-900 mb-2">Popular formats</div>
              <div className="text-sm text-indigo-600 mb-4">What clients choose</div>
              <ul className="space-y-3 text-base lg:text-lg text-slate-600">
                {trainingDetails.formats.map((format, i) => (
                  <li key={i}>{format}</li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} id="form" className="py-20 border-t border-slate-200 bg-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xl"
          >
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">Work with Torque</h2>
              <p className="text-lg text-slate-600">
                Share a few details and we'll follow up within one business day to schedule a call and recommend a starting point.
              </p>
              {selectedService && (
                <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 text-sm text-indigo-700">
                  <Sparkles className="w-4 h-4" />
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
