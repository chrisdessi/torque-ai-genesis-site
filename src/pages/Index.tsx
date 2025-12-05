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
    <div className="min-h-screen flex flex-col bg-background font-space">
      <SEO 
        title="Torque AI | Grow. Train. Transform."
        description="Torque is an AI-powered marketing agency, training partner, and coaching platform. We help you grow revenue with AI-driven marketing, upskill your teams, and support your leadership."
        keywords="AI marketing, business growth, team training, executive coaching, leadership development, revenue systems, AI consulting"
        url="/"
      />
      <Header />

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="max-w-[1120px] mx-auto px-6 py-11 grid grid-cols-1 lg:grid-cols-[1.5fr_1.1fr] gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.18em] uppercase text-primary mb-3">
              Grow • Train • Transform
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-3 text-foreground">
              AI-powered support for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                your business, your team, and your own leadership.
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-[34rem] mb-5">
              Torque is a marketing agency, training partner, and coaching platform. We build AI-driven revenue systems, train your teams on AI and modern sales, and coach you through the transformation as a leader.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-foreground mb-4 flex-wrap">
              <span>Torque AI • Quantum Shift • Memento</span>
              <span className="text-xs text-muted-foreground">Used to influence $32M+ in revenue and support dozens of leadership teams</span>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => scrollToSection('paths')}
                className="px-5 py-3 rounded-full bg-gradient-to-r from-accent to-[hsl(84,81%,44%)] text-accent-foreground text-sm font-semibold inline-flex items-center gap-2 shadow-[0_14px_40px_hsl(142_71%_45%/0.35)] hover:shadow-[0_18px_50px_hsl(142_71%_45%/0.45)] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Choose Grow, Train, or Transform
                <span>↓</span>
              </button>
              <button
                onClick={() => scrollToSection('grow')}
                className="px-4 py-2.5 rounded-full border border-border bg-secondary text-foreground text-sm inline-flex items-center gap-2 hover:bg-secondary/80 hover:-translate-y-0.5 transition-all cursor-pointer"
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
            className="rounded-[22px] border border-border bg-card p-5 text-sm flex flex-col gap-3 shadow-[0_10px_30px_hsl(222_47%_11%/0.06)]"
          >
            <h3 className="font-semibold text-base mb-1 text-foreground">How the ecosystem fits together</h3>

            <div>
              <div className="flex justify-between items-center gap-2 flex-wrap">
                <span className="font-medium text-foreground">Grow</span>
                <span className="text-xs text-primary">Torque AI • Memento</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                We build and optimize revenue and marketing systems with AI baked in, then keep your exec team aligned with Memento.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center gap-2 flex-wrap">
                <span className="font-medium text-foreground">Train</span>
                <span className="text-xs text-primary">Quantum Shift Workshops</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                We train your sales teams, leaders, and cross-generational groups to use AI and modern frameworks in the real world.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center gap-2 flex-wrap">
                <span className="font-medium text-foreground">Transform</span>
                <span className="text-xs text-primary">Quantum Shift Coaching</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                We work 1:1 with you as an executive or founder to reinvent how you lead, sell, and work with AI in this next chapter.
              </p>
            </div>
          </motion.aside>
        </section>

        {/* Path Cards Section */}
        <section id="paths" className="max-w-[1120px] mx-auto px-6 py-9">
          <div className="text-center mb-7">
            <p className="text-xs tracking-[0.18em] uppercase text-primary mb-2">
              Pick your starting point
            </p>
            <h2 className="text-2xl font-bold mb-1.5 text-foreground">
              Do you need to grow, train, or transform?
            </h2>
            <p className="text-sm text-muted-foreground max-w-[38rem] mx-auto">
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
                className="rounded-[22px] border border-border bg-card p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-[0_18px_55px_hsl(222_47%_11%/0.08)] hover:border-primary/50 transition-all"
              >
                <div className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
                  {card.label}
                </div>
                <div className="text-sm text-primary font-medium">
                  {card.brand}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {card.copy}
                </p>
                <ul className="text-sm text-foreground flex flex-col gap-1.5">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>{item.bold}</strong> – {item.text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={card.link}
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/80 bg-background text-sm font-medium text-primary hover:bg-primary/10 hover:border-primary hover:-translate-y-0.5 transition-all self-start"
                >
                  {card.cta}
                  <span>→</span>
                </Link>
                <p className="text-xs text-muted-foreground mt-1">
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