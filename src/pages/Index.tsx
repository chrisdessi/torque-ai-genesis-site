import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users, User, Zap, Target, BarChart3, MessageSquare, Award, Lightbulb, Heart, Compass } from "lucide-react";
import { Link } from "react-router-dom";

// Animated Icon Component for Path Cards
const AnimatedPathIcon = ({ 
  icon: Icon, 
  secondaryIcon: SecondaryIcon,
  tertiaryIcon: TertiaryIcon,
  gradient 
}: { 
  icon: any; 
  secondaryIcon: any;
  tertiaryIcon: any;
  gradient: string;
}) => (
  <div className="relative w-full h-48 mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100">
    {/* Background animated shapes */}
    <motion.div
      className={`absolute inset-0 opacity-20 ${gradient}`}
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Floating circles */}
    <motion.div
      className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-sky-200/40 to-blue-300/30 blur-xl"
      style={{ top: '10%', right: '10%' }}
      animate={{ 
        x: [0, 20, -10, 0],
        y: [0, -15, 10, 0],
        scale: [1, 1.2, 0.9, 1]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-emerald-200/30 to-green-300/20 blur-lg"
      style={{ bottom: '15%', left: '5%' }}
      animate={{ 
        x: [0, -15, 20, 0],
        y: [0, 10, -20, 0]
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    
    {/* Main icon */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ 
        y: [0, -8, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className={`w-20 h-20 rounded-2xl ${gradient} flex items-center justify-center shadow-lg`}>
        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
      </div>
    </motion.div>
    
    {/* Secondary floating icon */}
    <motion.div
      className="absolute"
      style={{ top: '20%', left: '15%' }}
      animate={{ 
        y: [0, -12, 0],
        x: [0, 8, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center">
        <SecondaryIcon className="w-6 h-6 text-slate-600" strokeWidth={1.5} />
      </div>
    </motion.div>
    
    {/* Tertiary floating icon */}
    <motion.div
      className="absolute"
      style={{ bottom: '20%', right: '15%' }}
      animate={{ 
        y: [0, 10, 0],
        x: [0, -8, 0],
        rotate: [0, -15, 15, 0]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      <div className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center">
        <TertiaryIcon className="w-5 h-5 text-slate-500" strokeWidth={1.5} />
      </div>
    </motion.div>
    
    {/* Animated lines/connections */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M 30% 30% Q 50% 20% 70% 40%"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-slate-300"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    </svg>
  </div>
);

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const paths = [
    {
      label: "For Your Business",
      brand: "Torque AI",
      title: "AI-Powered Marketing & Revenue Systems",
      copy: "We build and optimize marketing engines that drive predictable revenue — using AI to accelerate what works.",
      items: [
        "AI-powered content & ad systems",
        "Funnel optimization & CRM automation",
        "Revenue dashboards & reporting",
        "Strategy sprints & implementation"
      ],
      cta: "Grow your revenue with AI",
      tagline: "Best for founders, CMOs, and revenue leaders.",
      link: "/services",
      icon: TrendingUp,
      secondaryIcon: BarChart3,
      tertiaryIcon: Target,
      gradient: "bg-gradient-to-br from-sky-500 to-blue-600"
    },
    {
      label: "For Your Team",
      brand: "Quantum Shift",
      title: "Leadership Training & Team Development",
      copy: "We train sales teams, leadership groups, and cross-functional orgs to perform at the next level — with workshops, coaching, and programs.",
      items: [
        "Sales kickoffs & team intensives",
        "Leadership development programs",
        "Generational & communication workshops",
        "Train-the-trainer for internal champions"
      ],
      cta: "Level up your team",
      tagline: "Best for HR, L&D, and executive sponsors.",
      link: "/quantum-shift/coach",
      icon: Users,
      secondaryIcon: MessageSquare,
      tertiaryIcon: Award,
      gradient: "bg-gradient-to-br from-emerald-500 to-green-600"
    },
    {
      label: "For You",
      brand: "Memento",
      title: "1:1 Coaching & Personal Growth",
      copy: "Whether you're navigating a career pivot, building new habits, or seeking clarity in chaos — Memento is your personal development partner.",
      items: [
        "1:1 executive and life coaching",
        "Career reinvention & transition support",
        "AI-enabled personal productivity systems",
        "Community access & accountability"
      ],
      cta: "Start your transformation",
      tagline: "Best for individuals ready for change.",
      link: "/quantum-shift/coach",
      icon: User,
      secondaryIcon: Lightbulb,
      tertiaryIcon: Compass,
      gradient: "bg-gradient-to-br from-violet-500 to-purple-600"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
        title="Torque | AI-Powered Growth for Business, Teams & Leaders"
        description="Torque is an AI-powered marketing agency, training partner, and coaching platform. We help you grow revenue with AI-driven marketing, upskill your teams, and support your leadership."
        keywords="AI marketing, business growth, team training, executive coaching, leadership development, revenue systems, AI consulting"
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
          <div className="grid lg:grid-cols-[1.5fr_1.1fr] gap-12 items-center">
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
                AI-powered growth • Marketing • Training • Coaching
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6 text-slate-900"
              >
                One ecosystem to level up{" "}
                <span className="bg-gradient-to-r from-sky-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  your business, your team, and you.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-2xl mb-6 leading-relaxed"
              >
                Torque is an AI-powered marketing agency, training partner, and coaching platform. We help you grow revenue with AI-driven marketing, upskill your teams, and support your leadership in the middle of all this change.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm sm:text-base text-slate-700 mb-6 shadow-sm flex-wrap"
              >
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <span className="font-medium">Torque AI • Quantum Shift • Memento</span>
                <span className="text-slate-500 text-xs sm:text-sm">Used to influence $100M+ in revenue</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <button
                  onClick={() => scrollToSection('paths')}
                  className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold hover:opacity-95 shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all flex items-center gap-2"
                >
                  Start by choosing your path
                  <span>↓</span>
                </button>
                <button
                  onClick={() => scrollToSection('business')}
                  className="px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all flex items-center gap-2"
                >
                  See what we do
                  <span>→</span>
                </button>
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
              
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center gap-2 flex-wrap mb-1">
                    <span className="text-lg font-semibold text-slate-900">1. For Your Business</span>
                    <span className="text-indigo-600 text-sm font-medium">Torque AI</span>
                  </div>
                  <p className="text-slate-500 text-base">
                    AI-powered marketing, revenue systems, and growth strategy.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center gap-2 flex-wrap mb-1">
                    <span className="text-lg font-semibold text-slate-900">2. For Your Team</span>
                    <span className="text-indigo-600 text-sm font-medium">Quantum Shift</span>
                  </div>
                  <p className="text-slate-500 text-base">
                    Leadership training, team development, and workshops.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center gap-2 flex-wrap mb-1">
                    <span className="text-lg font-semibold text-slate-900">3. For You</span>
                    <span className="text-indigo-600 text-sm font-medium">Memento</span>
                  </div>
                  <p className="text-slate-500 text-base">
                    1:1 coaching, career reinvention, and personal growth.
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

      {/* Three Paths Section */}
      <section id="paths" className="py-24 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-4">
              Three paths, one ecosystem
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              Choose where you need the most help.
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Most clients work with Torque across multiple tracks over time. But you don't have to do everything at once. Start with the path that solves your biggest bottleneck today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {paths.map((path, index) => (
              <motion.article
                key={path.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 transition-all"
              >
                {/* Animated Icon Illustration */}
                <AnimatedPathIcon 
                  icon={path.icon}
                  secondaryIcon={path.secondaryIcon}
                  tertiaryIcon={path.tertiaryIcon}
                  gradient={path.gradient}
                />
                
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm tracking-[0.14em] uppercase text-slate-500 font-medium">{path.label}</span>
                  <span className="text-sm text-indigo-600 font-semibold">{path.brand}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{path.title}</h3>
                <p className="text-lg lg:text-xl text-slate-600 mb-6 leading-relaxed">{path.copy}</p>
                <ul className="space-y-3 text-base lg:text-lg text-slate-700 mb-6">
                  {path.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1 text-xl">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={path.link}
                  className="mt-auto inline-flex items-center gap-3 px-6 py-4 rounded-full border-2 border-blue-400 bg-white text-blue-600 text-lg font-semibold hover:bg-blue-50 hover:border-blue-500 hover:-translate-y-0.5 transition-all"
                >
                  {path.cta}
                  <span className="text-xl">→</span>
                </Link>
                <p className="text-base text-slate-500 mt-4">{path.tagline}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* About / Reassurance Section */}
      <section id="business" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-16 text-lg lg:text-xl text-slate-600">
            <div>
              <h3 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900">Why Torque?</h3>
              <p className="mb-8 leading-relaxed text-xl">
                We've spent the last decade building marketing systems, training teams, and coaching leaders through change. Now, we combine that experience with AI to help you move faster without losing what makes your business human.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-green-500 mt-1 text-2xl">✓</span>
                  <span className="text-xl">$100M+ in influenced revenue across clients</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-500 mt-1 text-2xl">✓</span>
                  <span className="text-xl">Dozens of leadership teams trained and transformed</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-500 mt-1 text-2xl">✓</span>
                  <span className="text-xl">AI-native approach that amplifies (not replaces) your team</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900">How it works</h3>
              <p className="mb-8 leading-relaxed text-xl">
                Every engagement starts with understanding where you are, where you want to go, and what's blocking you. From there, we match you to the right track — or combination of tracks — and get to work.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-blue-500 mt-1 text-2xl font-black">1.</span>
                  <span className="text-xl">Choose your path (business, team, or personal)</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-500 mt-1 text-2xl font-black">2.</span>
                  <span className="text-xl">Book a free discovery call</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-500 mt-1 text-2xl font-black">3.</span>
                  <span className="text-xl">Get a tailored plan and start moving</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Ready to level up?
            </h2>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Whether you're growing revenue, training your team, or investing in yourself — Torque has a path for you.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                to="/contact"
                className="px-10 py-5 text-xl rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5 transition-all"
              >
                Book a Free Discovery Call
              </Link>
              <button 
                onClick={() => scrollToSection('paths')}
                className="px-10 py-5 text-xl rounded-full border-2 border-slate-600 text-white font-semibold hover:bg-slate-800 hover:-translate-y-0.5 transition-all"
              >
                Explore All Paths
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
