import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mic, Youtube, BookOpen, Compass } from "lucide-react";

const QuantumShift = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const pillars = [
    {
      icon: Mic,
      title: "The Quantum Shift Podcast",
      description: "Conversations with leaders navigating the intersection of AI, transparency, and human potential.",
      href: "https://www.youtube.com/playlist?list=PL1uIG3i2RBhHIqRMlUAaHP0NksIAdSzQ2"
    },
    {
      icon: Compass,
      title: "The Philosophy",
      description: "People first. Truth second. Tools third. A framework for leading in an algorithmic world.",
      href: "/about"
    },
    {
      icon: BookOpen,
      title: "The TM System",
      description: "Trademarked methodologies including the Quantum Shift Confidentiality Code™ and Shift Breath protocol.",
      href: "/momento-council"
    },
    {
      icon: Youtube,
      title: "Events Module",
      description: "Workshops, dinners, and immersive experiences designed to shift how leaders think and operate.",
      href: "/events"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with brand color */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 text-white min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 gradient-animate"></div>
        </div>
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">The Quantum Shift</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              The Ethos.<br />The Podcast.<br />The Movement.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed">
              A philosophy and content platform exploring how leaders can thrive in an AI-driven world 
              while staying grounded in human truth and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-purple-900 font-semibold px-10 py-7 text-lg"
                onClick={() => window.open('https://www.youtube.com/playlist?list=PL1uIG3i2RBhHIqRMlUAaHP0NksIAdSzQ2', '_blank')}
              >
                Watch the Podcast
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border-white/30 font-semibold px-10 py-7 text-lg"
                onClick={() => window.location.href = '/events'}
              >
                Explore Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              The Four Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Content, philosophy, systems, and experiences
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  if (pillar.href.startsWith('http')) {
                    window.open(pillar.href, '_blank');
                  } else {
                    window.location.href = pillar.href;
                  }
                }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-black text-white py-32">
        <div className="section-padding max-w-5xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              People first. Truth second. Tools third.
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              This isn't just a tagline—it's our operating philosophy. In a world obsessed with AI tools and automation, 
              we believe the real breakthrough happens when leaders prioritize human connection, speak uncomfortable truths, 
              and only then deploy technology with intention.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-12 py-8 text-xl border-0"
              onClick={() => window.location.href = '/about'}
            >
              Learn More About Our Philosophy
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumShift;
