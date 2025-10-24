import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Linkedin, Youtube } from "lucide-react";
import chrisBioImage from "@/assets/chris-bio.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const solutions = [
    {
      title: "Executive AI Briefing",
      description: "90-minute strategy session to align leadership and identify growth opportunities.",
      price: "$10,000"
    },
    {
      title: "AI Strategy Workshop",
      description: "1-day onsite/virtual workshop to design AI adoption roadmaps and compliance frameworks.",
      price: "$25,000"
    },
    {
      title: "90-Day AI Accelerator",
      description: "Implementation of AI-driven GTM, automation, and analytics systems for measurable ROI.",
      price: "$75,000–$150,000"
    }
  ];

  const metrics = [
    { value: 100, suffix: "%", label: "Leadership Alignment within 4 Weeks" },
    { value: 60, suffix: "%", label: "Reduction in Manual Marketing Workflows" },
    { value: 100, suffix: "%", label: "Brand-Safe AI Adoption Framework" },
    { value: 90, suffix: " Days", label: "Measurable ROI Timeline" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900/50 to-blue-950/50 gradient-animate"></div>
        </div>
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-950 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-[float_7s_ease-in-out_infinite]"></div>
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-white/95 mb-2">Boards Are Replacing Leaders Who</span>
              <span className="block text-cyan-400 font-black text-6xl md:text-7xl lg:text-8xl mb-4">
                Can't Deliver
              </span>
              <span className="block text-white font-bold">
                AI Strategy and Change at Scale
              </span>
            </motion.h1>
            
            <motion.div
              className="bg-black/40 backdrop-blur-sm border-2 border-cyan-500/40 rounded-2xl p-8 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-3xl md:text-4xl text-white font-bold mb-2">
                <span className="text-cyan-400 text-5xl md:text-6xl font-black">
                  <AnimatedCounter end={31} suffix="%" />
                </span>
                <span className="block mt-2">of CEOs lose their roles for failed transformation efforts.</span>
              </p>
            </motion.div>

            <motion.p 
              className="text-2xl md:text-3xl text-white font-semibold mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Don't be next—<span className="text-cyan-400 font-black">lead with alignment</span>.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-7 text-lg shadow-2xl shadow-cyan-500/30"
                  onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
                >
                  Meet With Us
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-7 text-lg border-2 border-white/30"
                  asChild
                >
                  <a href="/torque-ai-guide">Download AI Strategy Guide</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* As Seen On Section */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
        
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <motion.h3 
              className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              As Seen On
            </motion.h3>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 100%" }}
            ></motion.div>
          </motion.div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { src: "/logos/abc-logo.png", alt: "ABC", delay: 0 },
              { src: "/logos/fox-logo.png", alt: "FOX News", delay: 0.05 },
              { src: "/logos/fox-business-logo.png", alt: "Fox Business", delay: 0.1 },
              { src: "/logos/ap-logo.png", alt: "Associated Press", delay: 0.15 },
              { src: "/logos/cbs-logo.png", alt: "CBS", delay: 0.2 },
              { src: "/logos/fortune-logo.png", alt: "Fortune", delay: 0.25 },
              { src: "/logos/cnn-logo.png", alt: "CNN", delay: 0.3 },
              { src: "/logos/sports-illustrated-logo.png", alt: "Sports Illustrated", delay: 0.35 },
              { src: "/logos/time-logo.png", alt: "TIME", delay: 0.4 },
              { src: "/logos/business-insider-logo.png", alt: "Business Insider", delay: 0.45 },
              { src: "/logos/forbes-logo.png", alt: "Forbes", delay: 0.5 }
            ].map((logo, index) => (
              <motion.div
                key={logo.alt}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: logo.delay, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="block"
                >
                  <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-12 w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300" 
                    />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          <DialogTitle className="sr-only">Chris Dessi Highlight Reel</DialogTitle>
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/9J1Kauiq42g"
              title="Chris Dessi Highlight Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* The Hidden Cost of Misalignment */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              The Hidden Cost of Misalignment
            </h2>
            <p className="text-2xl text-gray-600">
              Every day without alignment costs you real revenue
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 flex items-baseline justify-center">
                <AnimatedCounter end={5} decimals={0} />
                <span>–</span>
                <AnimatedCounter end={10} decimals={0} />
                <span>%</span>
              </div>
              <p className="text-lg text-gray-600">of annual revenue wiped out by strategy failures</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                <AnimatedCounter end={80} suffix="%" />
              </div>
              <p className="text-lg text-gray-600">of employees lack time or energy to do their best work</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                <AnimatedCounter end={40} suffix="%" />
              </div>
              <p className="text-lg text-gray-600">of productive time stolen by context switching each week</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="text-center p-8 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl border border-pink-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-lg text-gray-600">of margins silently taxed by meeting and tool overload</p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-10 py-7"
              asChild
            >
              <a href="/assessment">Quantify Your Execution Leak</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Where You're Losing Money */}
      <section className="bg-black text-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Where You're Losing Money
            </h2>
            <p className="text-2xl text-gray-400">
              Identify the leaks draining your bottom line
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4">Revenue Leak</h3>
              <div className="text-6xl font-bold text-destructive mb-4 flex items-baseline justify-center">
                <AnimatedCounter end={5} />
                <span>–</span>
                <AnimatedCounter end={10} />
                <span>%</span>
              </div>
              <p className="text-gray-400 text-lg">of topline wasted through execution drift, duplication and hand-offs</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4">AI Risk</h3>
              <div className="text-6xl font-bold text-destructive mb-4">
                <AnimatedCounter end={4.4} prefix="$" suffix="B" decimals={1} />
              </div>
              <p className="text-gray-400 text-lg">lost by firms without Responsible AI governance (EY 2025)</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4">Lost Time</h3>
              <div className="text-6xl font-bold text-destructive mb-4">
                <AnimatedCounter end={80} suffix="%" />
              </div>
              <p className="text-gray-400 text-lg">of staff already at capacity while leaders demand productivity gains (Microsoft 2025)</p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button 
              variant="success"
              size="lg"
              className="font-semibold px-10 py-7"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Stop the Leak
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Your Competition Isn't Waiting */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Your Competition Isn't Waiting
            </h2>
            <p className="text-2xl text-gray-600">
              Leading enterprises are already leveraging AI for measurable growth
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                <AnimatedCounter end={93} suffix="%" />
              </div>
              <p className="text-lg text-gray-600">of CMOs already report positive ROI from Gen AI</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl border border-cyan-100">
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">Revenue Lift</div>
              <p className="text-lg text-gray-600">Business units using Gen AI see measurable revenue lift (McKinsey 2025)</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center p-8 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl border border-indigo-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
                <AnimatedCounter end={40} suffix="%" />
              </div>
              <p className="text-lg text-gray-600">of enterprise apps will embed AI agents by 2026 (Gartner)</p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-10 py-7"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Catch Up Now
            </Button>
          </motion.div>
        </div>
      </section>


      {/* Our Approach Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Our Approach: Comprehensive AI Strategy, AI Business and AI Software Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We partner with enterprise businesses who have no AI strategy to transform their marketing, sales, and communications operations through strategic AI integration and proven methodologies.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We analyze your infrastructure, data, and industry trends to identify opportunities for transformative AI solutions that meet your unique business needs and drive measurable results.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black mb-4">Areas of Expertise</h3>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    Business Analysis & Infrastructure Assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    AI Strategy Development
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    Data Qualification & Preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    AI Product Solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    Integration & Deployment
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    Maintenance & Support
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500"></div>
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-64 h-64 text-white opacity-20" strokeWidth={0.5} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-4xl font-bold text-white mb-4">AI-Powered Solutions</h3>
                <p className="text-xl text-white/90">Transform your business with cutting-edge AI technology</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-8">Why Choose Torque AI</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <p className="text-lg text-gray-600">Proven track record of transforming enterprise operations</p>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-600">Strategic AI implementation with measurable ROI</p>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-600">End-to-end support from strategy to optimization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Torque AI Difference */}
      <section className="bg-black text-white py-32 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 gradient-animate"></div>
        </div>
        {/* Floating gradient orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <motion.h2 {...fadeInUp} className="text-5xl md:text-6xl font-bold text-center mb-8">
            The Torque AI Difference
          </motion.h2>
          <motion.p {...fadeInUp} className="text-2xl text-gray-400 text-center mb-20">
            Four ways we help you reclaim revenue and rebuild alignment
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">1</div>
                <h3 className="text-2xl font-bold mb-4">Stop the Leak</h3>
                <p className="text-gray-400 text-lg">Quantify execution drift and reclaim that 5–10% revenue.</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">2</div>
                <h3 className="text-2xl font-bold mb-4">Make AI Pay</h3>
                <p className="text-gray-400 text-lg">Apply Responsible-AI guardrails for real ROI.</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 relative overflow-hidden group hover:border-green-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">3</div>
                <h3 className="text-2xl font-bold mb-4">Win the Capacity War</h3>
                <p className="text-gray-400 text-lg">Cut meeting/tool overload, redeploy hours to revenue work.</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 relative overflow-hidden group hover:border-orange-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">4</div>
                <h3 className="text-2xl font-bold mb-4">Match or Pass Peers</h3>
                <p className="text-gray-400 text-lg">Deploy the same Gen AI plays top performers use.</p>
              </div>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-10 py-7"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Book Your Audit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Methodology */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-5xl md:text-6xl font-bold text-black text-center mb-8">
            Our Approach
          </motion.h2>
          <motion.p {...fadeInUp} className="text-2xl text-gray-600 text-center mb-20">
            A proven methodology to transform your operations and empower your team
          </motion.p>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center">
              <div className="text-6xl font-bold text-black mb-6">01</div>
              <h3 className="text-2xl font-bold text-black mb-4">Audit</h3>
              <p className="text-lg text-gray-600">Deep analysis of your current marketing, sales, and communications operations to identify gaps and opportunities.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center">
              <div className="text-6xl font-bold text-black mb-6">02</div>
              <h3 className="text-2xl font-bold text-black mb-4">Optimize</h3>
              <p className="text-lg text-gray-600">Strategic implementation of AI-powered solutions and process improvements to maximize efficiency and results.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center">
              <div className="text-6xl font-bold text-black mb-6">03</div>
              <h3 className="text-2xl font-bold text-black mb-4">Train</h3>
              <p className="text-lg text-gray-600">Comprehensive coaching for your team on new systems, AI tools, and best practices for sustained success.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="text-center">
              <div className="text-6xl font-bold text-black mb-6">04</div>
              <h3 className="text-2xl font-bold text-black mb-4">Hand Off</h3>
              <p className="text-lg text-gray-600">Seamless transition to your empowered team with ongoing support as needed.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-32 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 gradient-animate"></div>
        </div>
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_7s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_9s_ease-in-out_infinite]"></div>
        <div className="section-padding max-w-5xl mx-auto text-center relative z-10">
          <motion.h2 {...fadeInUp} className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p {...fadeInUp} className="text-2xl text-gray-400 mb-12">
            Limited availability for enterprise clients who are serious about leveraging AI to drive measurable results and sustainable growth.
          </motion.p>
          <motion.div {...fadeInUp}>
            <Button 
              size="lg"
              className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-12 py-8 text-xl"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
