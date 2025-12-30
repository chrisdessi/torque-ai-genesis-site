import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ZohoLetsTalkButton from "@/components/ZohoLetsTalkButton";
import VideoBackground from "@/components/VideoBackground";
import torqueVideo from "@/assets/videos/torque-ai-13.mp4";

const Hero = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background with subtle overlay */}
      <VideoBackground 
        src={torqueVideo} 
        overlay="gradient" 
        opacity={0.5}
      />

      {/* Floating gradient orbs for additional depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-[float_10s_ease-in-out_infinite]"></div>
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
