import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Brain, Linkedin, Youtube } from "lucide-react";
import chrisBioImage from "@/assets/chris-bio.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import ZohoEnterpriseForm from "@/components/ZohoEnterpriseForm";

const APPLY_URL = "https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e287093a";

const ApplyButton = ({ className = "" }: { className?: string }) => (
  <motion.a
    href={APPLY_URL}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
    className={className}
  >
    <Button 
      size="lg"
      className="bg-[#4fd39e] hover:bg-[#4fd39e]/90 text-white font-semibold px-10 py-7 text-lg"
    >
      APPLY
    </Button>
  </motion.a>
);

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
      
      {/* Hero + Form Section */}
      <section className="bg-black pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Transform How Your<br />Organization Works<br />with AI
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Join the AI Transformation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Be part of the next generation of enterprises leveraging AI for measurable growth.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <ZohoEnterpriseForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="aspect-video w-full"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/MYX6N3m5y_I?si=CRZBlAGV9KWGzeRD" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <ApplyButton />
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
              <ApplyButton />
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
            <ApplyButton />
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
              <ApplyButton />
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
            <ApplyButton />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseAccelerator;
