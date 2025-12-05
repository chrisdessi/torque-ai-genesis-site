import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const pathCards = [
    {
      id: "grow",
      label: "Grow",
      brand: "Torque AI • Memento",
      title: "AI-powered revenue & marketing systems.",
      copy: "Grow is for when you want the business to move: more leads, better pipelines, cleaner operations, and a leadership team that's actually on the same page.",
      items: [
        { bold: "AI Growth Audit", text: "audit of your marketing, sales, and key operations with a prioritized AI roadmap." },
        { bold: "Torque AI Agency Services", text: "strategy, content, ads, email, funnels, and campaigns with AI built into the workflows." },
        { bold: "Revenue & Ops Optimization", text: "lead flow, CRM, automation and reporting so nothing falls through the cracks." },
        { bold: "Memento", text: "an executive feedback and \"health of the team\" system to keep growth aligned with reality." },
      ],
      cta: "Explore Grow – revenue & systems",
      link: "/services",
      tagline: "Best if your biggest question is: \"How do we use AI and better systems to drive more revenue?\""
    },
    {
      id: "train",
      label: "Train",
      brand: "Quantum Shift Workshops • Next Gen",
      title: "AI, sales & leadership training for your team.",
      copy: "Train is for when your people need skills: AI, sales, leadership, and working across generations without losing their minds.",
      items: [
        { bold: "AI Training for Teams", text: "AI 101 for non-technical teams plus role-specific AI playbooks." },
        { bold: "Sales Training", text: "modern sales frameworks and AI-powered outreach, prep, and follow-up." },
        { bold: "\"I'm Too Old For This Shift\"", text: "generational workshops (with Next Gen) to fix culture and communication friction." },
        { bold: "Leadership & Offsites", text: "AI, leadership, and change sessions for exec teams and key managers." },
      ],
      cta: "Explore Train – team & leadership",
      link: "/quantum-shift/coach",
      tagline: "Best if your biggest question is: \"How do we get our people actually using AI and selling/leading differently?\""
    },
    {
      id: "transform",
      label: "Transform",
      brand: "Quantum Shift Coaching",
      title: "1:1 executive coaching for the AI era.",
      copy: "Transform is for you. The human at the center of all this. It's where we work on your leadership, your relationship with AI, and what you want your next chapter to look like.",
      items: [
        { bold: "Executive Coaching", text: "leadership, performance, and reinvention as your world shifts." },
        { bold: "AI Skills Coaching", text: "building your personal AI workflows and systems around your actual job." },
        { bold: "Sales & Communication Coaching", text: "sharpening how you sell, tell the story, and lead tough conversations." },
        { bold: "Programs & Cohorts", text: "including \"I'm Too Old For This Shift\" designed for individual leaders." },
      ],
      cta: "Explore Transform – coaching for you",
      link: "/quantum-shift/coach",
      tagline: "Best if your biggest question is: \"How do I evolve as a leader while all of this changes around me?\""
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-gray-200 font-inter" style={{ background: 'radial-gradient(circle at top, #1f2937 0, #020617 55%, #000 100%)' }}>
      <SEO 
        title="Torque | Grow. Train. Transform."
        description="Torque is an AI-powered marketing agency, training partner, and coaching platform. We help you grow revenue with AI-driven marketing, upskill your teams, and support your leadership."
        keywords="AI marketing, business growth, team training, executive coaching, leadership development, revenue systems, AI consulting"
        url="/"
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-[1120px] mx-auto px-6 py-11 grid grid-cols-1 lg:grid-cols-[1.5fr_1.1fr] gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.18em] uppercase text-indigo-300 mb-3">
              Grow • Train • Transform
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-3">
              AI-powered support for{" "}
              <span className="bg-gradient-to-r from-sky-400 to-green-500 bg-clip-text text-transparent">
                your business, your team, and your own leadership.
              </span>
            </h1>
            <p className="text-base text-gray-400 max-w-[34rem] mb-5">
              Torque is a marketing agency, training partner, and coaching platform. We build AI-driven revenue systems, train your teams on AI and modern sales, and coach you through the transformation as a leader.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-600/50 text-sm text-indigo-200 mb-4 flex-wrap">
              <span>Torque AI • Quantum Shift • Memento</span>
              <span className="text-xs text-gray-400">Used to influence $32M+ in revenue and support dozens of leadership teams</span>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => scrollToSection('paths')}
                className="px-5 py-3 rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-green-950 text-sm font-semibold inline-flex items-center gap-2 shadow-[0_14px_40px_rgba(22,163,74,0.55)] hover:shadow-[0_18px_50px_rgba(22,163,74,0.65)] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Choose Grow, Train, or Transform
                <span>↓</span>
              </button>
              <button
                onClick={() => scrollToSection('grow')}
                className="px-4 py-2.5 rounded-full border border-slate-500/60 bg-slate-900/85 text-gray-200 text-sm inline-flex items-center gap-2 hover:bg-slate-900 hover:border-slate-400 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Go straight to growth
                <span>→</span>
              </button>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[1.4rem] border border-slate-600/40 p-5 text-sm flex flex-col gap-3 shadow-[0_30px_90px_rgba(15,23,42,0.95)]"
            style={{
              background: `
                radial-gradient(circle at top left, rgba(56, 189, 248, 0.16), transparent 58%),
                radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.16), transparent 60%),
                rgba(15, 23, 42, 0.98)
              `
            }}
          >
            <h3 className="font-semibold text-base mb-1">How the ecosystem fits together</h3>

            <div>
              <div className="flex justify-between items-center gap-2 flex-wrap">
                <span className="font-medium">Grow</span>
                <span className="text-xs text-indigo-300">Torque AI • Memento</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                We build and optimize revenue and marketing systems with AI baked in, then keep your exec team aligned with Memento.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center gap-2 flex-wrap">
                <span className="font-medium">Train</span>
                <span className="text-xs text-indigo-300">Quantum Shift Workshops</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                We train your sales teams, leaders, and cross-generational groups to use AI and modern frameworks in the real world.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center gap-2 flex-wrap">
                <span className="font-medium">Transform</span>
                <span className="text-xs text-indigo-300">Quantum Shift Coaching</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                We work 1:1 with you as an executive or founder to reinvent how you lead, sell, and work with AI in this next chapter.
              </p>
            </div>
          </motion.aside>
        </section>

        {/* Path Cards Section */}
        <section id="paths" className="max-w-[1120px] mx-auto px-6 py-9">
          <div className="text-center mb-7">
            <p className="text-xs tracking-[0.18em] uppercase text-indigo-300 mb-2">
              Pick your starting point
            </p>
            <h2 className="text-2xl font-bold mb-1.5">
              Do you need to grow, train, or transform?
            </h2>
            <p className="text-sm text-gray-400 max-w-[38rem] mx-auto">
              All three matter. But today, one of them is loudest. Start there. You can always layer in the others once the first fire is handled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
            {pathCards.map((card, index) => (
              <motion.article
                key={card.id}
                id={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[1.4rem] border border-slate-600/40 bg-slate-900/95 p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(15,23,42,0.95)] hover:border-blue-400/90 transition-all"
              >
                <div className="text-xs tracking-[0.14em] uppercase text-gray-400">
                  {card.label}
                </div>
                <div className="text-sm text-indigo-300 font-medium">
                  {card.brand}
                </div>
                <h3 className="text-lg font-bold text-gray-100">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {card.copy}
                </p>
                <ul className="text-sm text-gray-200 flex flex-col gap-1.5">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>{item.bold}</strong> – {item.text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={card.link}
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/85 bg-slate-900/95 text-sm font-medium text-blue-100 hover:bg-blue-600/25 hover:border-blue-500 hover:-translate-y-0.5 transition-all self-start"
                >
                  {card.cta}
                  <span>→</span>
                </Link>
                <p className="text-xs text-gray-500 mt-1">
                  {card.tagline}
                </p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
