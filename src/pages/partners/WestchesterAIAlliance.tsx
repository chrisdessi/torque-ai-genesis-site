import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Users, Building2, Lightbulb, Handshake, MapPin, ArrowRight, ExternalLink } from "lucide-react";

const WestchesterAIAlliance = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const benefits = [
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with local business leaders, entrepreneurs, and professionals exploring AI applications."
    },
    {
      icon: Lightbulb,
      title: "Educational Events",
      description: "Attend workshops, seminars, and meetups focused on practical AI implementation."
    },
    {
      icon: Building2,
      title: "Local Business Focus",
      description: "AI solutions tailored for Westchester businesses and the unique needs of our region."
    },
    {
      icon: Handshake,
      title: "Collaboration Opportunities",
      description: "Partner with fellow alliance members on AI initiatives and shared learning."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-inter">
      <SEO
        title="Westchester AI Alliance - Local AI Community & Business Network"
        description="Join the Westchester AI Alliance—a community of local business leaders and professionals exploring AI applications for regional growth."
        keywords="Westchester AI, AI community, local AI network, Westchester business, AI workshops, AI education"
        url="/partners/westchester-ai-alliance"
        type="website"
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-28 pb-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-200/40 via-transparent to-transparent"></div>
        </div>

        <motion.div 
          className="relative max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-700">Westchester County, NY</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
            Westchester<br />
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">AI Alliance</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            A community of local business leaders, entrepreneurs, and professionals coming together to explore and implement AI solutions for Westchester and beyond.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.westchesteraialliance.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Join the Alliance
              <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="https://www.westchesteraialliance.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-300 hover:border-teal-500 text-slate-700 hover:text-teal-700 rounded-xl font-semibold text-lg transition-all"
            >
              View Upcoming Events
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Why Join</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Alliance Benefits</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Be part of a growing community shaping the future of AI in Westchester
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">About the Alliance</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Building AI Capacity Locally</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  The Westchester AI Alliance brings together forward-thinking professionals and business leaders who recognize the transformative potential of artificial intelligence.
                </p>
                <p>
                  Our mission is to demystify AI, share practical knowledge, and help Westchester businesses adopt AI solutions that drive real results.
                </p>
                <p>
                  Whether you're just curious about AI or actively implementing it in your organization, the Alliance provides resources, connections, and support for your journey.
                </p>
              </div>
            </div>
            <motion.div 
              className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-8 lg:p-10 text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Get Involved</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Attend monthly meetups and workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Connect with local AI practitioners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Access exclusive resources and case studies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Collaborate on community AI projects</span>
                </li>
              </ul>
              <a 
                href="https://www.westchesteraialliance.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold hover:bg-slate-100 transition-all"
              >
                Learn More
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Users className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join the Westchester AI Community
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Connect with local leaders who are embracing AI to transform their businesses and careers.
          </p>
          <a 
            href="https://www.westchesteraialliance.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-teal-700 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
          >
            Visit Westchester AI Alliance
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WestchesterAIAlliance;
