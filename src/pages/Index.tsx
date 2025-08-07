
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Mail, Megaphone, Star, MapPin, BarChart3, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import circuitBoard from "@/assets/circuit-board.jpg";
import codeLaptop from "@/assets/code-laptop.jpg";
import officeTeam from "@/assets/office-team.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Index = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "300%", label: "Average ROI Increase" },
    { number: "2.5x", label: "Lead Generation Boost" },
    { number: "90%", label: "Time Saved on Campaigns" }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const aiAgents = [
    {
      icon: Globe,
      title: "Website AI",
      description: "Build professional websites that convert visitors into customers",
      features: ["Drag & Drop Builder", "Mobile Responsive", "SEO Optimized"]
    },
    {
      icon: Users,
      title: "CRM AI", 
      description: "Manage leads and customers with intelligent automation",
      features: ["Contact Management", "Pipeline Tracking", "Automated Follow-ups"]
    },
    {
      icon: Mail,
      title: "Email AI",
      description: "Create and send targeted email campaigns that drive results", 
      features: ["Email Builder", "List Segmentation", "A/B Testing"]
    },
    {
      icon: Megaphone,
      title: "Ads AI",
      description: "Maximize ROI with AI-powered advertising campaigns",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization"]
    },
    {
      icon: Star,
      title: "Reputation AI",
      description: "Monitor and manage your online reputation across platforms",
      features: ["Review Monitoring", "Response Management", "Rating Improvement"]
    },
    {
      icon: MapPin,
      title: "Local AI",
      description: "Ensure consistent business information across all directories",
      features: ["Directory Management", "Citation Building", "Local SEO"]
    },
    {
      icon: BarChart3,
      title: "Analytics AI",
      description: "Data-driven insights to optimize your marketing performance", 
      features: ["Performance Tracking", "ROI Analysis", "Custom Reports"]
    },
    {
      icon: TrendingUp,
      title: "Intelligence AI",
      description: "AI-powered recommendations to accelerate your growth",
      features: ["Predictive Analytics", "Growth Recommendations", "Market Insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-24 overflow-hidden">
        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-highlight-green/20 to-highlight-blue/20 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-highlight-purple/20 to-highlight-yellow/20 rounded-full blur-xl"
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-16 h-16 bg-gradient-to-br from-highlight-orange/20 to-highlight-green/20 rounded-full blur-xl"
          animate={{
            y: [-10, 30, -10],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.p 
                className="text-sm font-medium text-muted-foreground tracking-wider uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                The TorqueApp Platform
              </motion.p>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                TorqueApp is{' '}
                <motion.span 
                  className="highlight-green"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  purpose-built AI
                </motion.span>{' '}
                that helps{' '}
                <motion.span 
                  className="highlight-blue"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  content marketing teams
                </motion.span>{' '}
                work{' '}
                <motion.span 
                  className="highlight-purple"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  smarter
                </motion.span>{' '}
                to achieve{' '}
                <motion.span 
                  className="highlight-yellow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  better outcomes
                </motion.span>
              </motion.h1>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <Button size="lg" className="px-8 py-4 text-lg bg-primary hover:bg-primary/90" asChild>
                <Link to="/quiz">
                  Start Free Trial
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 hover:bg-muted" asChild>
                <Link to="https://torqueapp.ai/centered-heading-with-contact-form/">
                  Get A Demo
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16"
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            initial="hidden"
            animate={controls}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div 
                  className="text-4xl font-bold text-primary mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Intro */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                AI is the{' '}
                <motion.span 
                  className="highlight-orange"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  foundational technology
                </motion.span>{' '}
                at the core of our team.
              </h2>
            </motion.div>
          <motion.div 
            className="space-y-8 text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              From uncovering new insights in their data, to responsive content personalization 
              on an unprecedented scale, AI-first marketing teams deliver a world of new relevance 
              to audiences and ROI for the entire organization.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Getting there requires wide-scale transformation and is best guided by the people 
              who use these tools every day to lead enterprise implementations, custom automation, 
              and fine-tuned AI tools and training for your people. That's TorqueAI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="p-6 bg-background rounded-lg border"
            >
              <p className="mb-4">
                Looking to coach your team on AI?{' '}
                <motion.span 
                  className="highlight-blue font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  Visit TorqueAcademy.ai
                </motion.span>{' '}
                for comprehensive AI training and coaching programs.
              </p>
              <motion.a
                href="https://torqueacademy.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-black transition-all duration-300 group"
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/lovable-uploads/85521d42-7840-4d81-b8ca-c002ab15932e.png" 
                  alt="TorqueAcademy.ai" 
                  className="h-8 w-auto"
                />
                <div>
                  <div className="font-bold text-black group-hover:text-primary transition-colors">
                    TorqueAcademy.ai
                  </div>
                  <div className="text-sm text-muted-foreground">
                    AI Training & Coaching
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { src: circuitBoard, alt: "AI Technology" },
              { src: codeLaptop, alt: "Development Process" },
              { src: officeTeam, alt: "Team Collaboration" }
            ].map((image, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden bg-card rounded-lg shadow-sm"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <motion.img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-80 object-cover transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              We'll guide you on your journey to become an{' '}
              <motion.span 
                className="highlight-green"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                AI-first brand
              </motion.span>.
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px" }}
          >
            {aiAgents.slice(0, 6).map((agent, index) => (
              <motion.a 
                key={index} 
                href="https://torqueapp.ai/ai-agents/"
                className="group block"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="bg-white border border-gray-200 hover:border-black transition-all duration-300 p-8 h-full">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-12 h-12 bg-black flex items-center justify-center mr-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <agent.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-black">
                      {agent.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-gray-500">
                    {agent.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1 h-1 bg-black rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {aiAgents.slice(6, 8).map((agent, index) => (
              <motion.a 
                key={index + 6} 
                href="https://torqueapp.ai/ai-agents/"
                className="group block"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="bg-white border border-gray-200 hover:border-black transition-all duration-300 p-8 h-full">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-12 h-12 bg-black flex items-center justify-center mr-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <agent.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-black">
                      {agent.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-gray-500">
                    {agent.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1 h-1 bg-black rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background px-6">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="highlight-purple"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              NOT SURE
            </motion.span>{' '}
            WHICH AI?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Take our 5-minute quiz to find the perfect AI agent for your business goals,
            or speak with one of our specialists to design a custom solution.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/quiz">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="px-12 py-6 text-lg">
                  Take Quiz
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
            <a href="https://torqueapp.ai/centered-heading-with-contact-form/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="px-12 py-6 text-lg">
                  Talk to Expert
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
