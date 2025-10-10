import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Linkedin, Youtube } from "lucide-react";
import chrisBioImage from "@/assets/chris-bio.png";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const solutions = [
    {
      title: "AI Strategy & Roadmap",
      description: "Custom AI implementation strategy tailored to your business objectives and existing infrastructure.",
      price: "Starting at $25k"
    },
    {
      title: "AI Integration & Deployment",
      description: "End-to-end implementation of AI solutions with your team, ensuring smooth adoption and measurable ROI.",
      price: "Starting at $50k"
    },
    {
      title: "Ongoing AI Optimization",
      description: "Continuous improvement and scaling of your AI systems to maximize business impact.",
      price: "Custom pricing"
    }
  ];

  const metrics = [
    { value: "3x", label: "Average ROI Increase" },
    { value: "50%", label: "Time Savings" },
    { value: "90%", label: "Client Satisfaction" },
    { value: "200+", label: "Projects Delivered" }
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
              Unleash the Full Power<br />of AI in Your Business<br />with Torque AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Build, Scale & Automate with Confidence — Learn the Playbook Inside Torque Academy
              <br /><br />
              Torque AI helps forward-thinking teams integrate AI across Sales, Marketing & Communications — and trains them to master it through Torque Academy, your all-in-one AI education and execution hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg"
                  className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-10 py-7 text-lg"
                  onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
                >
                  Meet With Us
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-semibold px-10 py-7 text-lg"
                onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
              >
                Start AI Transformation
              </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Most AI Initiatives Fail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              70% of AI projects never make it to production. The gap isn't technology—it's alignment, strategy, and execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="bg-gray-50 py-24">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our AI Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end AI transformation services designed to deliver measurable results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <p className="text-2xl font-bold text-primary">{solution.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Real impact from real implementations
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Chris Section */}
      <section className="bg-gray-50 py-24">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <img 
                src={chrisBioImage} 
                alt="Chris Dessi" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Chris Dessi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chris Dessi is the founder of Torque AI, a leading AI consulting firm helping businesses transform through artificial intelligence. With over a decade of experience in digital strategy and marketing, Chris has helped hundreds of companies leverage AI to drive growth and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                As a recognized thought leader in AI and business transformation, Chris regularly speaks at industry conferences and has been featured in major publications. His practical approach to AI implementation has helped businesses of all sizes achieve measurable results.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/chrisdessi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a 
                  href="https://www.youtube.com/playlist?list=PL1uIG3i2RBhHIqRMlUAaHP0NksIAdSzQ2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <Youtube className="w-5 h-5 mr-2" />
                    YouTube
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white py-24">
        <div className="section-padding text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can drive growth and innovation in your organization
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
