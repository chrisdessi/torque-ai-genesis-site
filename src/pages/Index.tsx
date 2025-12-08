import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ZohoLetsTalkButton from "@/components/ZohoLetsTalkButton";
import { Zap, Users, FileText, LayoutDashboard, GraduationCap, Target, Clock, TrendingUp, Cog, UserCheck, BookOpen } from "lucide-react";

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
      solution: "AI removes the busywork so your team can finally think again.",
      icon: Clock
    },
    {
      title: "You're losing leads because follow-up is inconsistent.",
      solution: "AI becomes your 24/7 sales engine.",
      icon: UserCheck
    },
    {
      title: "Your content is slow or inconsistent.",
      solution: "One idea → 50 assets. Speed without slop.",
      icon: FileText
    },
    {
      title: "Your tools don't talk to each other.",
      solution: "We unify your stack with AI-powered workflows that finally make sense.",
      icon: Cog
    },
    {
      title: "You're overworked and understaffed.",
      solution: "AI lets you scale without expanding payroll.",
      icon: Users
    },
    {
      title: "Leadership is stuck in outdated playbooks.",
      solution: "We train your team to adopt AI safely and effectively.",
      icon: BookOpen
    }
  ];

  const solutions = [
    { title: "AI Revenue Engines", description: "AI follow-up, lead scoring, and appointment funnels.", icon: TrendingUp },
    { title: "Workflow Automation", description: "Remove repetitive tasks across the organization.", icon: Zap },
    { title: "Marketing Systems", description: "One idea becomes a month of content.", icon: Target },
    { title: "AI Dashboards", description: "Real-time visibility without digging for data.", icon: LayoutDashboard },
    { title: "AI Workshops", description: "Train your team on safe and effective AI usage.", icon: GraduationCap }
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
        title="Torque AI | AI That Fixes Bottlenecks, Automates Work, and Unlocks Growth"
        description="Torque AI installs the systems that remove the bottlenecks holding you back. More leads. Faster workflows. Fewer headaches. Better results."
        keywords="AI automation, workflow automation, AI marketing, lead generation, AI consulting, business automation, AI revenue systems"
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
              AI That Fixes Bottlenecks, Automates Work, and Unlocks New Growth.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Torque AI installs the systems that remove the bottlenecks holding you back. More leads. Faster workflows. Fewer headaches. Better results.
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
                Get Your AI Audit
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
              Why Companies Call Torque AI
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
                  {pain.solution}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg hover:border-emerald-200 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-base text-slate-600">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Track Section */}
      <section id="fast-track" className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              The Torque AI Fast Track – 14 Days to Transformation
            </h2>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              We audit your systems, rebuild your workflows, install automations, train your team, and deliver ROI you can measure.
            </p>
            <Link 
              to="/fast-track"
              className="inline-flex px-10 py-5 text-xl rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold hover:from-emerald-600 hover:to-green-700 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:-translate-y-0.5"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8">
              Ready to Transform Your Business?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/ai-audit"
                className="px-10 py-5 text-xl rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold hover:from-sky-700 hover:to-blue-700 shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all hover:-translate-y-0.5"
              >
                Get Your AI Audit
              </Link>
              <ZohoLetsTalkButton size="large" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
