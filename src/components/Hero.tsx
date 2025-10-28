
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroAiWorkspace from "@/assets/hero-ai-workspace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img 
          src={heroAiWorkspace} 
          alt="Torque AI - Enterprise AI Platform for Marketing and Sales"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2, x: -20, y: -20 }}
          animate={{ 
            scale: [1.2, 1.15, 1.1, 1.15, 1.2],
            x: [-20, 0, 20, 0, -20],
            y: [-20, 10, -10, 20, -20]
          }}
          transition={{ 
            duration: 20, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-accent/80"></div>
      </div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating particles animation - enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: i % 3 === 0 ? 'rgba(255,255,255,0.4)' : 'rgba(162,226,255,0.3)',
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span>AI-Powered Enterprise Solutions</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-white leading-[1.1] mb-8 tracking-tight">
            Unleash the Full Power of AI in Your Business with Torque AI
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-4 leading-relaxed font-light">
            Build, Scale & Automate with Confidence — Learn the Playbook Inside{" "}
            <a 
              href="https://www.torqueacademy.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              Torque Academy
            </a>
          </p>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Torque AI helps forward-thinking teams integrate AI across Sales, Marketing & Communications — and trains them to master it through{" "}
            <a 
              href="https://www.torqueacademy.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              Torque Academy
            </a>
            , your all-in-one AI education and execution hub.
          </p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { icon: TrendingUp, text: "Stop Revenue Leak" },
              { icon: Zap, text: "De-Risk AI" },
              { icon: Sparkles, text: "Drive Growth" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              asChild
              size="lg" 
              className="group bg-accent hover:bg-accent/90 text-white border-0"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg" 
              className="group bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:text-white"
            >
              <Link to="/services">
                Learn More
              </Link>
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
