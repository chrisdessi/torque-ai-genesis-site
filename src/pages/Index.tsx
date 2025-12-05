import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Sparkles, Rocket, LineChart, DollarSign, Users, Presentation, GraduationCap, User, Compass, Heart, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Clean Animated Illustration for Path Cards
const PathIllustration = ({ 
  icon: Icon, 
  secondaryIcon: SecondaryIcon,
  tertiaryIcon: TertiaryIcon,
  accentColor,
  bgColor
}: { 
  icon: LucideIcon; 
  secondaryIcon: LucideIcon;
  tertiaryIcon: LucideIcon;
  accentColor: string;
  bgColor: string;
}) => (
  <div className={`relative w-full h-44 mb-8 overflow-hidden rounded-2xl ${bgColor}`}>
    {/* Subtle animated gradient background */}
    <motion.div
      className="absolute inset-0 opacity-30"
      style={{
        background: `radial-gradient(circle at 30% 70%, ${accentColor}20 0%, transparent 50%)`
      }}
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.35, 0.2]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Main icon - center */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ 
        y: [0, -6, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div 
        className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
        style={{ backgroundColor: accentColor }}
      >
        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
      </div>
    </motion.div>
    
    {/* Secondary icon - top left */}
    <motion.div
      className="absolute top-6 left-8"
      animate={{ 
        y: [0, -8, 0],
        x: [0, 4, 0]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      <div className="w-11 h-11 rounded-xl bg-white shadow-md flex items-center justify-center border border-slate-100">
        <SecondaryIcon className="w-5 h-5 text-slate-700" strokeWidth={1.5} />
      </div>
    </motion.div>
    
    {/* Tertiary icon - bottom right */}
    <motion.div
      className="absolute bottom-6 right-8"
      animate={{ 
        y: [0, 6, 0],
        x: [0, -4, 0]
      }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      <div className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center border border-slate-100">
        <TertiaryIcon className="w-5 h-5 text-slate-600" strokeWidth={1.5} />
      </div>
    </motion.div>
    
    {/* Decorative dots */}
    <motion.div
      className="absolute top-8 right-16 w-2 h-2 rounded-full"
      style={{ backgroundColor: accentColor, opacity: 0.4 }}
      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-10 left-16 w-1.5 h-1.5 rounded-full"
      style={{ backgroundColor: accentColor, opacity: 0.3 }}
      animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
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
      title: "Revenue & Marketing Systems",
      copy: "AI-powered marketing engines that drive predictable revenue.",
      cta: "GROW",
      link: "/services",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80"
    },
    {
      label: "For Your Team",
      brand: "Quantum Shift",
      title: "Leadership & Team Development",
      copy: "Workshops and programs that elevate performance.",
      cta: "TRAIN",
      link: "/quantum-shift/coach",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&q=80"
    },
    {
      label: "For Yourself",
      brand: "Quantum Coaching",
      title: "1:1 Coaching & Growth",
      copy: "Personal transformation with executive coaching.",
      cta: "TRANSFORM",
      link: "/quantum-shift/coach",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&q=80"
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
    <div className="min-h-screen bg-white text-slate-800 font-inter">
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
              {/* Main headline - AI Powered Growth */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.0] mb-6 bg-gradient-to-r from-sky-600 via-emerald-500 to-green-600 bg-clip-text text-transparent"
              >
                AI Powered Growth
              </motion.h1>
              
              {/* Transform scrolling text */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-8"
              >
                Transform:{" "}
                <span className="relative inline-block h-[1.15em] overflow-hidden align-bottom">
                  <motion.span
                    className="block text-indigo-600"
                    animate={{
                      y: ["0em", "0em", "-1.15em", "-1.15em", "-2.3em", "-2.3em", "0em"]
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.30, 0.33, 0.63, 0.66, 0.96, 1]
                    }}
                  >
                    <span className="block h-[1.15em] leading-[1.15]">Your Business</span>
                    <span className="block h-[1.15em] leading-[1.15]">Your Team</span>
                    <span className="block h-[1.15em] leading-[1.15]">Yourself</span>
                  </motion.span>
                </span>
              </motion.div>

              {/* Three Pillars */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-6 sm:gap-10 mb-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-sky-500"></div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700">Marketing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700">Training</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-violet-500"></div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700">Coaching</span>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-2xl mb-6 leading-relaxed"
              >
                Grow Revenue. Upskill Your Teams. Transform Leadership.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm sm:text-base text-slate-700 mb-6 shadow-sm flex-wrap"
              >
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <span className="font-medium">Torque AI • Quantum Shift • Quantum Coaching</span>
                <span className="text-slate-500 text-xs sm:text-sm">$100M+ in influenced revenue</span>
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

            {/* Right Card - Dynamic & Creative */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-3xl border border-slate-200 p-8 lg:p-10 bg-gradient-to-br from-white via-slate-50 to-white shadow-2xl relative overflow-hidden"
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full blur-3xl opacity-50"
                animate={{ scale: [1, 1.2, 1], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-emerald-100 to-green-200 rounded-full blur-3xl opacity-40"
                animate={{ scale: [1, 1.3, 1], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              <div className="relative z-10 space-y-8">
                {/* Item 1 */}
                <motion.div 
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl lg:text-5xl font-black text-sky-500">1.</span>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">For Your Business</h3>
                      <span className="text-lg font-semibold text-sky-600">Torque AI</span>
                    </div>
                  </div>
                  <p className="text-lg lg:text-xl text-slate-600 pl-14 lg:pl-16">
                    AI-powered marketing, revenue systems, and growth strategy.
                  </p>
                </motion.div>
                
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                
                {/* Item 2 */}
                <motion.div 
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl lg:text-5xl font-black text-emerald-500">2.</span>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">For Your Team</h3>
                      <span className="text-lg font-semibold text-emerald-600">Quantum Shift</span>
                    </div>
                  </div>
                  <p className="text-lg lg:text-xl text-slate-600 pl-14 lg:pl-16">
                    Leadership training, team development, and workshops.
                  </p>
                </motion.div>
                
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                
                {/* Item 3 */}
                <motion.div 
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl lg:text-5xl font-black text-violet-500">3.</span>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">For Yourself</h3>
                      <span className="text-lg font-semibold text-violet-600">Quantum Coaching</span>
                    </div>
                  </div>
                  <p className="text-lg lg:text-xl text-slate-600 pl-14 lg:pl-16">
                    1:1 coaching, career reinvention, and personal growth.
                  </p>
                </motion.div>
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
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-4">
              Choose Your Path
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              Three Ways We Drive Results
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Whether you need to grow revenue, develop your team, or transform yourself — we have a proven path for you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {paths.map((path, index) => (
              <motion.article
                key={path.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 transition-all font-inter"
              >
                {/* Stock Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={path.image} 
                    alt={path.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-base tracking-[0.1em] uppercase text-slate-500 font-semibold">{path.label}</span>
                    <span className="text-base text-indigo-600 font-bold">{path.brand}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black text-slate-900 mb-4">{path.title}</h3>
                  <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">{path.copy}</p>
                  <Link 
                    to={path.link}
                    className="mt-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xl font-black tracking-wide hover:from-emerald-600 hover:to-green-700 hover:-translate-y-0.5 transition-all shadow-lg"
                  >
                    {path.cta}
                  </Link>
                </div>
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
