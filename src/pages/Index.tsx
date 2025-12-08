import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import ServicesScoreApp from "@/components/ServicesScoreApp";
import { Clock, UserCheck, FileText, Cog, Users, BookOpen, TrendingUp, Zap, Target, LayoutDashboard, GraduationCap, UserCog, Building2, CheckCircle } from "lucide-react";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const painPoints = [
    {
      title: "You're drowning in repetitive work.",
      description: "Your team is stuck in spreadsheets, inboxes, and manual tasks. AI removes the busywork so your people can finally think again.",
      icon: Clock
    },
    {
      title: "You're losing leads because follow-up is inconsistent.",
      description: "You don't need more traffic. You need better follow-up. AI becomes your 24/7 sales engine.",
      icon: UserCheck
    },
    {
      title: "Your content is slow, chaotic, or nonexistent.",
      description: "We use AI to turn one core idea into blogs, emails, social posts, and video scripts — without losing your voice.",
      icon: FileText
    },
    {
      title: "Your tools don't talk to each other.",
      description: "Ten tools, zero integration. We unify your stack with AI-powered workflows that finally make sense.",
      icon: Cog
    },
    {
      title: "Your team is overworked and you're hiring to fix process problems.",
      description: "AI lets you scale without inflating payroll. Work smarter, not bigger.",
      icon: Users
    },
    {
      title: "Leadership knows AI matters but doesn't know where to start.",
      description: "We train leaders and teams to use AI safely, effectively, and confidently — without the hype or confusion.",
      icon: BookOpen
    }
  ];

  const solutions = [
    { 
      title: "AI Revenue Engines", 
      description: "Automated follow-up, nurturing, appointment setting, and lead scoring that runs 24/7 so you stop leaking opportunities.", 
      icon: TrendingUp 
    },
    { 
      title: "Workflow Automation", 
      description: "We map your processes and design AI automations that handle repetitive work across operations, marketing, and sales.", 
      icon: Zap 
    },
    { 
      title: "Marketing Systems", 
      description: "One idea becomes blogs, emails, social media posts, and scripts — powered by AI and shaped by your expertise.", 
      icon: Target 
    },
    { 
      title: "Dashboards & Insights", 
      description: "Real-time visibility into pipeline, marketing performance, and operations — without digging for data.", 
      icon: LayoutDashboard 
    }
  ];

  const leadershipItems = [
    {
      title: "Leadership Workshops",
      description: "High-impact sessions for founders and executives who need to understand AI's impact on strategy, execution, and culture.",
      icon: GraduationCap
    },
    {
      title: "Team Training & Adoption",
      description: "Hands-on training so your team knows how to use AI in their daily work — safely, effectively, and confidently.",
      icon: Users
    },
    {
      title: "Executive AI Coaching",
      description: "1:1 support for leaders navigating growth, change, and the pressure to 'figure out AI' without a roadmap.",
      icon: UserCog
    },
    {
      title: "Organizational Reinvention",
      description: "We help redesign workflows, communication, and expectations so your operating system matches the speed of modern business.",
      icon: Building2
    }
  ];

  const processSteps = [
    { step: "Audit", description: "We diagnose bottlenecks, leaks, and opportunities in your business." },
    { step: "Blueprint", description: "We design the AI workflows, systems, and training you need." },
    { step: "Build", description: "We implement and integrate automations with your existing tools." },
    { step: "Adopt & Scale", description: "We train your team, monitor performance, and expand what works." }
  ];

  const results = [
    "Helped an eCommerce client grow 92% year-over-year using AI workflows.",
    "Supported over $32M in deals driven by AI-powered pipelines.",
    "Cut 15–20 hours per week of manual work for lean teams."
  ];

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
    <div className="min-h-screen bg-white text-slate-800 font-inter">
      <SEO 
        title="Torque AI | AI Systems for Real Businesses"
        description="Torque AI installs AI-powered systems that fix bottlenecks, automate work, and unlock new growth for small and mid-market businesses. AI revenue engines, workflow automation, leadership workshops, and executive coaching."
        keywords="AI automation, workflow automation, AI marketing, lead generation, AI consulting, business automation, AI revenue systems, AI workshops, executive coaching"
        url="/"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-32 pb-24 min-h-[85vh] flex items-center">
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
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-8 text-slate-900"
            >
              AI Systems That Fix Bottlenecks, Multiply Your Team, and Unlock New Growth.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Your people are smart. Your ideas are good. But your systems are stuck in manual mode. Torque AI installs the AI-powered workflows, revenue engines, and training your team needs to finally move faster — without burning out.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center items-center"
            >
              <Link 
                to="/ai-audit"
                className="px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold hover:from-sky-700 hover:to-blue-700 shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all hover:-translate-y-0.5"
              >
                Get an AI Audit
              </Link>
              <Link 
                to="/fast-track"
                className="px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl rounded-full border-2 border-slate-300 bg-white text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-400 transition-all hover:-translate-y-0.5"
              >
                Explore the 14-Day Fast Track
              </Link>
            </motion.div>
          </motion.div>
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

      {/* Pain Points Section */}
      <section id="pain" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Is This What Your Business Feels Like?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((pain, index) => (
              <motion.div
                key={pain.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl hover:border-sky-200 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pain.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                  {pain.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {pain.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              What Torque AI Builds for You
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all flex items-start gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              AI for Leaders & Teams
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              AI isn't just a technical shift. It's a leadership shift. We don't just install systems — we help your people evolve with them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadershipItems.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl hover:border-violet-200 transition-all flex items-start gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              How We Work With You
            </h2>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-600 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">
                    {item.step}
                  </h3>
                  <p className="text-lg text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Results Our Clients See
            </h2>
          </motion.div>

          <div className="space-y-4">
            {results.map((result, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <p className="text-xl text-white/90" dangerouslySetInnerHTML={{ __html: result.replace(/(\d+%|\$\d+M|\d+–\d+ hours)/g, '<strong class="text-emerald-400">$1</strong>') }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ScoreApp Section */}
      <section id="score" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Get Your Torque AI Score
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Not sure where to start? Take our free 5-minute AI Score assessment and discover exactly where AI can save time and grow revenue in your business.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <ServicesScoreApp />
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Calendly */}
      <section id="cta" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Get an AI Audit or book a call and let's map out what AI can do for your business.
            </p>
            <Link 
              to="/ai-audit"
              className="inline-flex px-10 py-5 text-xl rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold hover:from-sky-700 hover:to-blue-700 shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all hover:-translate-y-0.5"
            >
              Get Your AI Audit
            </Link>
          </motion.div>

          <motion.div {...fadeInUp} className="mt-16">
            <CalendlyEmbed />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
