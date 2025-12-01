import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ZohoTorqueAIButton } from "@/components/ZohoTorqueAIButton";
import { motion } from "framer-motion";
import { Brain, Linkedin, Youtube } from "lucide-react";
import chrisBioImage from "@/assets/chris-bio.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import ZohoEnterpriseForm from "@/components/ZohoEnterpriseForm";

const EnterpriseAccelerator = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };


  const metrics = [
    { value: 100, suffix: "%", label: "Leadership Alignment within 4 Weeks" },
    { value: 60, suffix: "%", label: "Reduction in Manual Marketing Workflows" },
    { value: 100, suffix: "%", label: "Brand-Safe AI Adoption Framework" },
    { value: 90, suffix: " Days", label: "Measurable ROI Timeline" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="90-Day AI Accelerator - Enterprise AI Transformation Program"
        description="Transform your enterprise with our 90-Day AI Accelerator. Comprehensive AI strategy, implementation, and measurable ROI in marketing, sales, and communications. From $1,987 audit to full transformation."
        keywords="90-day AI accelerator, enterprise AI transformation, AI implementation program, AI readiness assessment, AI adoption roadmap, AI compliance framework, AI-driven automation, enterprise AI solutions, business process automation, AI GTM strategy, AI analytics implementation, rapid AI deployment"
        url="/enterprise-accelerator"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-yellow-600/20"></div>
        </div>
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Transform How Your<br />Organization Works<br />with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              In 90 days, Torque AI helps enterprise teams design and implement measurable, compliant AI systems that increase efficiency, accelerate growth, and enhance decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg"
                  className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-10 py-7 text-lg"
                  onClick={() => window.location.href = 'mailto:info@torqueapp.ai?subject=Executive Briefing Request'}
                >
                  Book Executive Briefing
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg"
                  onClick={() => window.location.href = 'mailto:info@torqueapp.ai?subject=AI Transformation Inquiry'}
                >
                  Start AI Transformation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zoho Form Section */}
      <section className="bg-white py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Join the AI Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of the next generation of enterprises leveraging AI for measurable growth.
            </p>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            className="flex justify-center"
          >
            <ZohoEnterpriseForm />
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
                Most Enterprise AI Projects Fail — Not Because of Technology, But Alignment.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Organizations know they need AI, but they don't know where to begin. Teams run isolated pilots. Leaders get flooded with tools. ROI disappears in the noise.
              </p>
              <p className="text-2xl font-semibold text-black mb-8 italic">
                Torque AI changes that.
              </p>
              <Button 
                size="lg"
                className="bg-black hover:bg-black/90 text-white px-10 py-7"
                onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
              >
                Schedule Consultation
              </Button>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="relative h-[500px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl"></div>
              <Brain className="w-64 h-64 text-gray-400 relative z-10" strokeWidth={0.5} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-5xl md:text-6xl font-bold text-black text-center mb-20"
          >
            Tangible Results, Visible Impact
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-black mb-4">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-xl text-gray-600 leading-relaxed">{metric.label}</div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            {...fadeInUp}
            className="text-center mt-16"
          >
            <Button 
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-10 py-7"
              onClick={() => window.location.href = 'mailto:info@torqueapp.ai?subject=Results Discussion'}
            >
              Discuss Results
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Chris Section */}
      <section className="bg-black text-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                <img 
                  src={chrisBioImage} 
                  alt="Chris Dessi - Founder of Torque AI" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Meet Your Partner in AI Transformation
              </h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Chris Dessi is the Founder & CEO of Torque AI, helping enterprises implement AI systems that scale revenue and culture simultaneously.
              </p>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                A former CRO and enterprise SaaS growth leader, Chris has generated over <AnimatedCounter end={30} prefix="$" suffix="M" /> in new business using AI automation.
              </p>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                He's also a best-selling author, keynote speaker, and TV commentator featured on CNN, Fox Business, and Cheddar.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://www.linkedin.com/in/chrisdessi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </a>
                <a 
                  href="https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Youtube className="w-5 h-5 mr-2 text-red-500" />
                    The Quantum Shift
                  </Button>
                </a>
              </div>
              <Button 
                size="lg"
                className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-10 py-7"
                onClick={() => window.location.href = 'mailto:info@torqueapp.ai?subject=Executive Briefing with Chris'}
              >
                Book Chris for an Executive Briefing
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-black py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0074FF]/20 to-transparent"></div>
        <div className="section-padding max-w-5xl mx-auto text-center relative z-10">
          <motion.h2 
            {...fadeInUp}
            className="text-6xl md:text-7xl font-bold text-white mb-8"
          >
            The Future of Work Isn't Coming. It's Already Here.
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            className="text-2xl text-gray-400 mb-12"
          >
            Your competitors are using AI to scale. Don't get left behind.
          </motion.p>
          <motion.div {...fadeInUp}>
            <Button 
              size="lg"
              className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-12 py-8 text-xl"
              onClick={() => window.location.href = 'mailto:info@torqueapp.ai?subject=Start AI Transformation'}
            >
              Start AI Transformation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseAccelerator;
