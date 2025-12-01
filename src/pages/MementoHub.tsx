import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { ZohoTorqueAIForm } from "@/components/ZohoTorqueAIForm";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Users, Calendar, Code, Heart } from "lucide-react";

const MementoHub = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const offerings = [
    {
      icon: Calendar,
      title: "Memento Council Dinners",
      description: "Intimate executive dinners for VP+ leaders. Off-the-record conversations, transparent commitments, and built-in accountability.",
      href: "/momento-council"
    },
    {
      icon: Users,
      title: "Offsite Events",
      description: "Curated executive retreats designed to build alignment, clarity, and actionable strategies for your leadership team.",
      href: "/events"
    },
    {
      icon: Code,
      title: "Memento Software",
      description: "Transparency and alignment tools designed to help teams commit, track, and deliver on what matters most.",
      href: "/momento"
    },
    {
      icon: Heart,
      title: "Executive Coaching",
      description: "One-on-one coaching for leaders who want to lead with presence, honesty, and transparent operating rhythms.",
      href: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f4f4f5]">
      <SEO 
        title="Memento Hub - Executive Events, Coaching & Transparency Software"
        description="People first. Truth second. Tools third. Memento offers intimate executive dinners, offsite events, coaching, and software designed for transparent leadership and team accountability."
        keywords="Memento, executive events, leadership dinners, executive coaching, team alignment software, transparency tools, executive retreats, leadership accountability, VP executive network, business offsite events, executive development"
        url="/memento-hub"
      />
      <Header />
      
      {/* Hero Section with Memento brand color */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 gradient-animate"></div>
        </div>
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Memento Events & Software</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              People first.<br />Truth second.<br />Tools third.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              Offsite events, intimate dinners, executive coaching, and software designed to help leaders 
              commit transparently and deliver consistently.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-semibold px-10 py-7 text-lg"
                onClick={() => window.location.href = '/momento-council'}
              >
                Join Memento Council
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

      {/* Offerings Grid */}
      <section className="section-padding py-32 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Memento Offerings
            </h2>
            <p className="text-xl text-[#c7c7cc] max-w-3xl mx-auto">
              Events, software, and coaching for leaders committed to transparency
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                onClick={() => window.location.href = offering.href}
                className="bg-[#121212] border border-[#202020] rounded-2xl p-10 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <offering.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{offering.title}</h3>
                <p className="text-[#d7d7db] leading-relaxed">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-32 border-t border-[#1a1a1a] bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Lead with Transparency?
            </h2>
            <p className="text-2xl text-[#c7c7cc] mb-12 max-w-3xl mx-auto">
              Join executive leaders who are committed to honest conversations, clear commitments, and measurable follow-through.
            </p>
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-black font-semibold px-12 py-8 text-xl"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter and Pricing Side by Side */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Join Torque AI's Newsletter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get exclusive AI insights, strategies, and innovation updates delivered directly to your inbox
              </p>
              <div className="flex justify-center">
                <ZohoTorqueAIForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MementoHub;
