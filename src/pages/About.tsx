import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Mic, TrendingUp, Users, Target, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chrisProfile from "@/assets/chris-bio.png";
import ZapierContactForm from "@/components/ZapierContactForm";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const About = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  const credentials = [
    { icon: TrendingUp, text: "25+ years scaling organizations from startup to acquisition" },
    { icon: Award, text: "$32M revenue using Generative AI" },
    { icon: Target, text: "Multiple successful exits & acquisitions" },
    { icon: BookOpen, text: "Author: ChatGPT for Profit" },
    { icon: Mic, text: "TEDx Speaker" },
    { icon: Users, text: "Frequent TV/Media AI Expert" }
  ];

  const values = [
    {
      title: "Strategic Impact",
      description: "We focus on AI implementations that deliver measurable business outcomes and competitive advantages."
    },
    {
      title: "Enterprise Excellence",
      description: "Working exclusively with businesses ready to embrace AI transformation at scale."
    },
    {
      title: "Proven Methodology",
      description: "Our approach combines technical expertise with business acumen for sustainable success."
    },
    {
      title: "Continuous Innovation",
      description: "Staying at the forefront of AI advancement to deliver cutting-edge solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About Torque AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transforming enterprise businesses through strategic AI implementation and proven methodologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Torque AI partners with enterprise businesses who lack an AI strategy to transform 
              their marketing, sales, and communications operations. We deliver comprehensive AI 
              strategy, AI business solutions, and AI software implementations that drive measurable 
              results and sustainable competitive advantages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={chrisProfile} 
                alt="Christopher Dessi - Founder of Torque AI"
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Meet Christopher Dessi
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founder and Chief Strategist of Torque AI
              </p>
              
              <p className="text-lg leading-relaxed">
                Christopher Dessi brings over 25 years of experience scaling organizations from 
                startup to acquisition. As the founder of Torque AI, he specializes in helping 
                enterprise businesses develop and implement comprehensive AI strategies that 
                transform their operations.
              </p>

              <p className="text-lg leading-relaxed">
                With a proven track record of generating $32M in revenue using Generative AI and 
                leading multiple successful exits, Chris combines technical AI expertise with 
                deep business acumen to deliver solutions that drive measurable results.
              </p>

              <div className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Credentials & Recognition</h3>
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <credential.icon className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">{credential.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/chrisdessi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button size="lg" className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </Button>
                </a>
                <a 
                  href="https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button size="lg" variant="outline" className="border-2 font-semibold">
                    <Youtube className="w-5 h-5 text-red-600" />
                    The Quantum Shift Podcast
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our approach to AI consulting and implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-muted p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-black text-white">
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

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Leadership with AI
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Join our Executive 90-Day Cohort for comprehensive AI education and The Quantum Shift methodology.
              <a href="/blog" className="text-primary hover:underline ml-2">Explore our AI insights →</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 font-semibold px-12 py-6 text-lg"
                onClick={() => setIsContactFormOpen(true)}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-12 py-6 text-lg"
                asChild
              >
                <a href="https://buy.stripe.com/bJeeVdfvSeHtaURfmX8g004" target="_blank" rel="noopener noreferrer">
                  Join 90-Day Executive Cohort
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Contact Form Dialog */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">Contact Form</DialogTitle>
          <ZapierContactForm 
            title="Let's Get Started"
            description="Fill out the form and our team will reach out within 24 hours"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;
