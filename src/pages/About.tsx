import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Linkedin, Youtube, Zap, Target, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import chrisBioImage from "@/assets/chris-bio.png";
import quantumShiftLogo from "@/assets/quantum-shift-podcast-logo.png";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Curious Browser-inspired floating gradient orb
function GradientOrb({ 
  className, 
  colors, 
  delay = 0,
  mouseX,
  mouseY
}: { 
  className: string; 
  colors: string;
  delay?: number;
  mouseX?: any;
  mouseY?: any;
}) {
  const springConfig = { stiffness: 30, damping: 40 };
  const x = useSpring(mouseX || 0, springConfig);
  const y = useSpring(mouseY || 0, springConfig);

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ 
        background: colors,
        x: mouseX ? x : 0, 
        y: mouseY ? y : 0,
        filter: "blur(80px)"
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`mx-auto max-w-6xl px-6 py-16 md:py-24 ${className}`}>{children}</section>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div 
      className={`rounded-3xl border border-slate-700/30 bg-slate-800/50 backdrop-blur-xl p-8 shadow-xl ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left - rect.width / 2) / 20;
      const y = (e.clientY - rect.top - rect.height / 2) / 20;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SEO title="About | Torque" description="Meet Chris Dessi and learn why Torque exists. Executives don't need more tools. They need fewer decisions — and better ones." url="/about" />
      <Header />
      
      {/* Hero Section with Curious Browser-inspired gradient orbs */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[80vh] flex items-center overflow-hidden"
      >
        {/* Large floating gradient orbs - Curious Browser style */}
        <motion.div style={{ y: orbY }}>
          <GradientOrb 
            className="w-[600px] h-[600px] -top-20 -right-40" 
            colors="radial-gradient(circle, rgba(56,189,248,0.5) 0%, rgba(14,165,233,0.3) 50%, transparent 70%)"
            mouseX={mouseX}
            mouseY={mouseY}
          />
          <GradientOrb 
            className="w-[500px] h-[500px] top-1/2 -left-40" 
            colors="radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(79,70,229,0.2) 50%, transparent 70%)"
            delay={2}
            mouseX={mouseX}
            mouseY={mouseY}
          />
          <GradientOrb 
            className="w-[400px] h-[400px] bottom-0 right-1/4" 
            colors="radial-gradient(circle, rgba(148,163,184,0.3) 0%, rgba(71,85,105,0.2) 50%, transparent 70%)"
            delay={4}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        </motion.div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <Section>
          <motion.div 
            className="grid gap-12 md:grid-cols-2 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ y: textY }}
          >
            <motion.div variants={fadeInUp}>
              <motion.div 
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-800/60 backdrop-blur px-4 py-2 text-sm font-semibold text-sky-400"
                variants={fadeInUp}
              >
                <Zap className="w-4 h-4" />
                About Torque
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
                variants={fadeInUp}
              >
                <span className="text-slate-100">Why</span>
                <br />
                <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Torque Exists
                </span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-xl md:text-2xl text-slate-300 leading-relaxed"
                variants={fadeInUp}
              >
                Executives don't need more tools. They need <span className="font-semibold text-sky-400">fewer decisions</span> — and better ones.
              </motion.p>
              
              <motion.p 
                className="mt-4 text-lg text-slate-400 max-w-lg"
                variants={fadeInUp}
              >
                AI should reduce cognitive load, not increase it. Torque exists to rebuild the decision loop: clarity, ownership, and execution that sticks.
              </motion.p>
              
              <motion.div 
                className="mt-10 flex flex-wrap items-center gap-5"
                variants={fadeInUp}
              >
                <Link 
                  to="/audit" 
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300"
                >
                  Start with the Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-sky-400 uppercase tracking-wide">The Principle</span>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  When decision flow is fixed, everything gets lighter: meetings, escalation, execution, and leadership.
                </p>
                <motion.div 
                  className="mt-6 rounded-2xl bg-gradient-to-r from-sky-900/40 to-blue-900/30 border border-sky-500/20 p-5"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-slate-300">
                    Torque is built for leaders who want <span className="font-semibold text-sky-400">calm control</span> — without losing speed.
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </Section>
      </section>
      
      {/* Meet Chris Dessi Section */}
      <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden py-20 md:py-32">
        {/* Accent orb */}
        <GradientOrb 
          className="w-[400px] h-[400px] top-20 -right-20" 
          colors="radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 60%)"
          delay={1}
        />
        
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative"
              variants={fadeInUp}
            >
              <div className="relative">
                {/* Decorative ring */}
                <motion.div 
                  className="absolute -inset-4 rounded-3xl border border-sky-500/20"
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-br from-sky-500/20 via-transparent to-blue-500/10 rounded-3xl blur-2xl" />
                
                <div className="relative aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
                  <img 
                    src={chrisBioImage} 
                    alt="Chris Dessi - Founder of Torque AI" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <motion.div 
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-800/60 backdrop-blur px-4 py-2 text-sm font-semibold text-sky-400"
              >
                <Users className="w-4 h-4" />
                Meet Your Partner
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Chris Dessi
              </h2>
              <p className="text-lg text-sky-400 font-semibold mt-2">
                Founder & CEO of Torque AI
              </p>
              
              <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                Chris helps enterprises implement AI systems that scale revenue and culture simultaneously.
              </p>
              
              <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                A former CRO and enterprise SaaS growth leader, Chris has generated over <span className="font-bold text-sky-400">$30M</span> in new business using AI automation. He understands both sides: the strategic vision executives need and the operational reality teams face.
              </p>
              
              <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                Through Torque, Chris brings a battle-tested approach to executive decision intelligence — helping leaders cut through the noise and build systems that actually stick.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="https://www.linkedin.com/in/chrisdessi/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-sky-500/30 text-sky-400 hover:bg-sky-500/10 hover:text-sky-300">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </a>
                <a href="https://www.youtube.com/@ChristopherDessi" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-sky-500/30 text-sky-400 hover:bg-sky-500/10 hover:text-sky-300 flex items-center gap-2">
                    <img src={quantumShiftLogo} alt="The Quantum Shift Podcast" className="w-6 h-6 rounded" />
                    The Quantum Shift
                  </Button>
                </a>
              </div>
              
              <div className="mt-10">
                <Link 
                  to="/free-ai-audit" 
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300"
                >
                  Start with the Executive Decision Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Values Section with floating orbs */}
      <section className="relative bg-slate-900 overflow-hidden py-20">
        <GradientOrb 
          className="w-[500px] h-[500px] -bottom-40 -left-40" 
          colors="radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 60%)"
          delay={3}
        />
        
        <Section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-16"
              variants={fadeInUp}
            >
              What We Believe
            </motion.h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Clarity over complexity",
                  desc: "The best systems are simple. If it requires a manual, it won't stick.",
                  color: "from-sky-500 to-blue-600"
                },
                {
                  title: "Decisions over tools",
                  desc: "AI should reduce decision load, not create more of it.",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Execution over strategy",
                  desc: "A good decision executed beats a perfect decision debated.",
                  color: "from-indigo-500 to-slate-600"
                }
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  className="group relative rounded-3xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-xl p-8 hover:bg-slate-800/50 hover:border-sky-500/30 transition-all duration-500"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${value.color} mb-6`} />
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-400">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>
      </section>
      
      <Footer />
    </main>
  );
}
