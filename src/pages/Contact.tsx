import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      action: "info@torqueapp.ai",
      href: "mailto:info@torqueapp.ai"
    },
    {
      icon: MessageSquare,
      title: "Schedule Consultation",
      description: "Book a strategic planning session with our team",
      action: "Schedule Meeting",
      href: "https://calendar.app.google/rAZmF5kNNCsfMyBf7"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Monday - Friday, 9 AM - 6 PM EST",
      action: "Available Now",
      href: null
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
              Let's Talk AI Strategy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with strategic AI implementation? 
              Get in touch with our team to discuss your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to connect with our team
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-muted p-10 rounded-xl text-center hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <method.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
                <p className="text-muted-foreground mb-8 text-lg">{method.description}</p>
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-lg font-semibold hover:underline"
                  >
                    {method.action}
                    {method.href.startsWith('http') && <ArrowRight className="w-4 h-4" />}
                  </a>
                ) : (
                  <span className="text-lg font-semibold text-primary">{method.action}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Limited availability for enterprise clients serious about AI transformation
            </p>
            <a href="https://calendar.app.google/rAZmF5kNNCsfMyBf7" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-12 py-6 text-lg">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
