import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";
import chrisTvImage from "@/assets/chris-tv-appearance.png";

const EnterpriseAccelerator = () => {
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
    { stat: "100%", label: "Leadership Alignment within 4 Weeks" },
    { stat: "60%", label: "Reduction in Manual Marketing Workflows" },
    { stat: "100%", label: "Brand-Safe AI Adoption Framework" },
    { stat: "90 Days", label: "Measurable ROI Timeline" }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                onClick={() => window.location.href = 'mailto:info@torqueapp.ai?subject=Consultation Request'}
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

      {/* The Solution Section */}
      <section className="bg-black text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5C07B] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5C07B] to-transparent"></div>
        </div>
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <motion.h2 
            {...fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-20"
          >
            Enterprise AI, Delivered as a System
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-[#0074FF]/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6">{solution.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">{solution.description}</p>
                <div className="text-3xl font-bold text-[#E5C07B]">{solution.price}</div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            {...fadeInUp}
            className="text-center mt-16"
          >
            <Button 
              size="lg"
              className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-10 py-7 text-lg"
              onClick={() => window.location.href = 'mailto:info@torqueapp.ai?subject=Enterprise Briefing Request'}
            >
              Book My Enterprise Briefing
            </Button>
          </motion.div>
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
                <div className="text-6xl font-bold text-black mb-4">{metric.stat}</div>
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
                  src={chrisTvImage} 
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
                A former CRO and enterprise SaaS growth leader, Chris has generated over $30M in new business using AI automation.
              </p>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                He's also a best-selling author, keynote speaker, and TV commentator featured on CNN, Fox Business, and Cheddar.
              </p>
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
