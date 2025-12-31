import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ZohoLetsTalkButton from "@/components/ZohoLetsTalkButton";

const Hero = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Navy blue background with AI-generated wave effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
        {/* Animated wave layers */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(96, 165, 250, 0.2)" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(37, 99, 235, 0.4)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </linearGradient>
            <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(29, 78, 216, 0.5)" />
              <stop offset="100%" stopColor="rgba(37, 99, 235, 0.4)" />
            </linearGradient>
          </defs>
          
          {/* Wave 1 - Top layer */}
          <motion.path
            d="M0,150 Q250,100 500,150 T1000,150 T1500,150 T2000,150 V0 H0 Z"
            fill="url(#wave-gradient-1)"
            animate={{
              d: [
                "M0,150 Q250,100 500,150 T1000,150 T1500,150 T2000,150 V0 H0 Z",
                "M0,120 Q250,170 500,120 T1000,120 T1500,120 T2000,120 V0 H0 Z",
                "M0,150 Q250,100 500,150 T1000,150 T1500,150 T2000,150 V0 H0 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Wave 2 - Middle layer */}
          <motion.path
            d="M0,300 Q300,250 600,300 T1200,300 T1800,300 T2400,300 V0 H0 Z"
            fill="url(#wave-gradient-2)"
            animate={{
              d: [
                "M0,300 Q300,250 600,300 T1200,300 T1800,300 T2400,300 V0 H0 Z",
                "M0,280 Q300,330 600,280 T1200,280 T1800,280 T2400,280 V0 H0 Z",
                "M0,300 Q300,250 600,300 T1200,300 T1800,300 T2400,300 V0 H0 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Wave 3 - Bottom layer */}
          <motion.path
            d="M0,450 Q350,380 700,450 T1400,450 T2100,450 T2800,450 V0 H0 Z"
            fill="url(#wave-gradient-3)"
            animate={{
              d: [
                "M0,450 Q350,380 700,450 T1400,450 T2100,450 T2800,450 V0 H0 Z",
                "M0,420 Q350,490 700,420 T1400,420 T2100,420 T2800,420 V0 H0 Z",
                "M0,450 Q350,380 700,450 T1400,450 T2100,450 T2800,450 V0 H0 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Floating gradient orbs for AI effect */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_10s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-[float_12s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding py-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-light text-cyan-300 mb-2 tracking-wide">
              Torque AI - The Quantum Shift
            </h2>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Artificial Intelligence
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Learn how we help you capture the power of AI
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ZohoLetsTalkButton size="large" />
            <Button 
              variant="outline"
              size="lg" 
              className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 hover:text-white font-semibold px-10 py-7 text-lg"
              asChild
            >
              <a href="/torque-ai-guide">
                Download the AI Strategy Guide
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;