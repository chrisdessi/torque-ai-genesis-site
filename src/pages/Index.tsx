import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Brain, Linkedin, Youtube, ArrowRight } from "lucide-react";
import chrisBioImage from "@/assets/chris-bio.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import ZapierContactForm from "@/components/ZapierContactForm";
import { Link } from "react-router-dom";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import PricingTable from "@/components/PricingTable";

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
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
      <SEO 
        title="Enterprise AI Strategy & Implementation"
        description="Transform your business with strategic AI consulting. From executive briefings to 90-day accelerators, Torque AI delivers measurable ROI through AI-driven marketing, sales, and communications solutions."
        keywords="AI consulting, enterprise AI strategy, AI implementation, AI transformation, business AI solutions, ChatGPT for enterprise, AI-driven marketing, AI sales automation"
        url="/"
      />
      <Header />

      {/* Hero Section with animated waves */}
      <Hero />
      
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
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Hidden Cost of Misalignment
            </h2>
            <p className="text-2xl text-muted-foreground">
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
              <p className="text-lg text-muted-foreground">of annual revenue wiped out by strategy failures</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                <AnimatedCounter end={80} suffix="%" />
              </div>
              <p className="text-lg text-muted-foreground">of employees lack time or energy to do their best work</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                <AnimatedCounter end={40} suffix="%" />
              </div>
              <p className="text-lg text-muted-foreground">of productive time stolen by context switching each week</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="text-center p-8 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl border border-pink-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-lg text-muted-foreground">of margins silently taxed by meeting and tool overload</p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7"
              asChild
            >
              <a href="/assessment">Quantify Your Execution Leak</a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-7"
              asChild
            >
              <a href="https://buy.stripe.com/6oU6oHgzWdDp1kheiT8g005" target="_blank" rel="noopener noreferrer">
                Start with 2-Week AI Audit — $297
              </a>
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
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Your Competition Isn't Waiting
            </h2>
            <p className="text-2xl text-muted-foreground">
              Leading enterprises are already leveraging AI for measurable growth
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                <AnimatedCounter end={93} suffix="%" />
              </div>
              <p className="text-lg text-muted-foreground">of CMOs already report positive ROI from Gen AI</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl border border-cyan-100">
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">Revenue Lift</div>
              <p className="text-lg text-muted-foreground">Business units using Gen AI see measurable revenue lift (McKinsey 2025)</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center p-8 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl border border-indigo-100">
              <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
                <AnimatedCounter end={40} suffix="%" />
              </div>
              <p className="text-lg text-muted-foreground">of enterprise apps will embed AI agents by 2026 (Gartner)</p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Catch Up Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-7"
              asChild
            >
              <a href="https://buy.stripe.com/bJeeVdfvSeHtaURfmX8g004" target="_blank" rel="noopener noreferrer">
                Join 90-Day Executive Cohort
              </a>
            </Button>
          </motion.div>
        </div>
      </section>


      {/* Our Approach Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our Approach: Comprehensive AI Strategy, AI Business and AI Software Solutions
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                We partner with enterprise businesses who have no AI strategy to transform their marketing, sales, and communications operations through strategic AI integration and proven methodologies.
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We analyze your infrastructure, data, and industry trends to identify opportunities for transformative AI solutions that meet your unique business needs and drive measurable results.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-4">Areas of Expertise</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
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
          <motion.div {...fadeInUp} className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-10 py-7"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Book Your Audit
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-7"
              asChild
            >
              <a href="https://buy.stripe.com/bJeeVdfvSeHtaURfmX8g004" target="_blank" rel="noopener noreferrer">
                Executive 90-Day Quantum Shift
              </a>
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
            A proven methodology to transform your operations and empower your team.
            <Link to="/services" className="text-primary hover:underline ml-2">Explore our services →</Link>
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

      {/* Services Component */}
      <Services />
      
      {/* Process Component */}
      <Process />
      
      {/* Results Component */}
      <Results />
      
      {/* Blog Preview Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest AI Insights from Chris Dessi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay ahead with the latest trends, strategies, and breakthroughs in AI transformation
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 font-semibold"
              asChild
            >
              <Link to="/blog">
                Read All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
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
              onClick={() => setIsContactFormOpen(true)}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter and Pricing Side by Side */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Newsletter */}
            <motion.div {...fadeInUp} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Join Chris's Newsletter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get exclusive insights, strategies, and stories delivered directly to your inbox
              </p>
              <div className="w-full mx-auto">
                <iframe 
                  src="https://embeds.beehiiv.com/ed4d369b-b9a6-4dfc-9698-32ed638ae5f9" 
                  data-test-id="beehiiv-embed" 
                  width="100%" 
                  height="320" 
                  frameBorder="0" 
                  scrolling="no"
                  style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: 0, backgroundColor: 'transparent' }}
                />
              </div>
            </motion.div>
            
            {/* Pricing Table */}
            <motion.div {...fadeInUp} className="border-t border-border pt-8">
              <h3 className="text-3xl font-bold text-center mb-6">7 Day Free Trial</h3>
              <stripe-pricing-table 
                pricing-table-id="prctbl_1SQ9v7G7cympBc4IoqBe5mIF"
                publishable-key="pk_live_51Qn6VFG7cympBc4IA08eEyFC0UcNTBmHxl4SvxBr2nQugXsezKLcEiKdEcmdeTLxbYNQIXnhnrXtHNTvoribSpV700GFoEAA3a">
              </stripe-pricing-table>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      
      {/* Contact Form Dialog */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">Contact Form</DialogTitle>
          <ZapierContactForm 
            title="Create Your AI Leadership Blueprint"
            description="Fill out the form and our team will reach out within 24 hours"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
