import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";

const Torque = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Brain,
      title: "AI Strategy",
      description: "Comprehensive AI adoption roadmaps aligned with your business objectives and compliance requirements."
    },
    {
      icon: Zap,
      title: "AI Implementation",
      description: "End-to-end deployment of AI-powered solutions across marketing, sales, and communications."
    },
    {
      icon: Target,
      title: "Executive Briefings",
      description: "90-minute strategy sessions to align leadership and identify growth opportunities."
    },
    {
      icon: TrendingUp,
      title: "90-Day Accelerator",
      description: "Rapid implementation of AI-driven systems with measurable ROI in 90 days."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with brand color */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 gradient-animate"></div>
        </div>
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Torque AI Consulting</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              AI Strategy &<br />Implementation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed">
              Transform your enterprise with strategic AI integration across sales, marketing, and communications.
              From executive alignment to measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-blue-600 font-semibold px-10 py-7 text-lg"
                onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
              >
                Book Strategy Session
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border-white/30 font-semibold px-10 py-7 text-lg"
                onClick={() => window.location.href = '/enterprise-accelerator'}
              >
                View Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              AI Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI transformation from strategy to execution
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-32">
        <div className="section-padding max-w-5xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Book a complimentary strategy session to explore how AI can drive measurable results for your organization.
            </p>
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-blue-600 font-semibold px-12 py-8 text-xl"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Book Your Strategy Session
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Torque;
