import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import chrisHero from "@/assets/chris-hero-new.jpg";

const Index = () => {
  const process = [
    {
      number: "01",
      title: "Audit",
      description: "Deep analysis of your current marketing, sales, and communications operations to identify gaps and opportunities."
    },
    {
      number: "02",
      title: "Optimize",
      description: "Strategic implementation of AI-powered solutions and process improvements to maximize efficiency and results."
    },
    {
      number: "03",
      title: "Train",
      description: "Comprehensive coaching for your team on new systems, AI tools, and best practices for sustained success."
    },
    {
      number: "04",
      title: "Hand Off",
      description: "Seamless transition to your empowered team with ongoing support as needed."
    }
  ];

  const expertise = [
    "AI Integration & Automation",
    "Marketing Strategy & Execution",
    "Sales Operations & CRM",
    "Team Training & Development",
    "Go-to-Market Strategy",
    "Revenue Growth & Scaling"
  ];

  const credentials = [
    "25+ years scaling organizations",
    "$32M revenue generated at Diamond Standard",
    "Multiple successful exits & acquisitions",
    "Author: ChatGPT for Profit",
    "TEDx Speaker",
    "Frequent TV/Media AI Expert"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={chrisHero} 
            alt="Christopher Dessi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight drop-shadow-2xl">
              Torque AI
            </h1>
            <p className="text-2xl md:text-4xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Marketing, Sales and Communications Consulting
              <br />
              <span className="text-white font-normal">Specializing in AI Integration, Training and Optimization</span>
            </p>
            
            <div className="pt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block"
              >
                <a href="mailto:chris@torqueapp.ai">
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-gray-100 font-semibold px-12 py-6 text-lg"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-black text-white">
        <motion.div 
          className="max-w-5xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="text-3xl md:text-5xl font-light leading-tight mb-8">
            "One 15 minute meeting with Chris made me millions"
          </blockquote>
          <cite className="text-xl md:text-2xl text-gray-400 not-italic">
            — Gary Vaynerchuk
          </cite>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Our Approach: Comprehensive AI Strategy,
              <br />
              <span className="text-muted-foreground">AI Business and AI Software Solutions</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We partner with enterprise businesses who have no AI strategy to transform their marketing, sales, and communications operations through strategic AI integration and proven methodologies.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  With 25+ years of experience scaling organizations from startup to acquisition, we bring a unique blend of technical expertise and business acumen to help you achieve measurable results.
                </p>
                
                <div className="pt-8">
                  <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expertise.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-muted p-12 rounded-lg">
                <h3 className="text-3xl font-bold mb-8">Credentials</h3>
                <ul className="space-y-4">
                  {credentials.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-lg text-foreground border-l-4 border-black pl-6 py-2"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology to transform your operations and empower your team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white p-8 rounded-lg border-2 border-transparent hover:border-black transition-all duration-300"
              >
                <div className="text-6xl font-bold text-muted-foreground/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Transform
            <br />
            Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Limited availability for enterprise clients who are serious about leveraging AI
            to drive measurable results and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:chris@torqueapp.ai">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 font-semibold px-12 py-6 text-lg"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a 
              href="https://www.christopherdessi.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-12 py-6 text-lg"
              >
                Learn More
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
