import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Calendar, Users, Trophy, Mic, Briefcase, TrendingUp, ArrowRight, ExternalLink, MapPin } from "lucide-react";

const AISummitNYC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const tracks = [
    { title: "AI for Sales", description: "Discover how AI accelerates pipelines and personalizes outreach." },
    { title: "AI for Marketing", description: "Transform campaigns with intelligent automation and insights." },
    { title: "AI for Content & Communications", description: "Create compelling content at scale with AI-powered tools." },
    { title: "AI Startup Contest", description: "Showcase your AI innovation and compete for recognition." },
    { title: "AI Founders", description: "Network with pioneering entrepreneurs building the future." },
    { title: "AI for Executives", description: "Learn how leaders can adopt AI ethically and strategically." },
    { title: "AI VC", description: "Connect with investors shaping the AI landscape." },
    { title: "AI Agents & Automation", description: "Explore the future of autonomous AI systems." }
  ];

  const sponsorTiers = [
    {
      name: "Diamond Sponsor",
      price: "$50,000",
      features: [
        "Exclusive title sponsor branding",
        "Keynote opening/closing slot",
        "Premium booth - center stage",
        "Logo on all conference materials",
        "VIP dinner with speakers",
        "15 complimentary passes"
      ],
      featured: true
    },
    {
      name: "Platinum Sponsor",
      price: "$25,000",
      features: [
        "Premier booth location",
        "Keynote speaking opportunity",
        "Logo on all marketing materials",
        "VIP networking access",
        "10 complimentary passes",
        "Featured in event app"
      ],
      featured: false
    },
    {
      name: "Gold Sponsor",
      price: "$15,000",
      features: [
        "Standard booth location",
        "Panel participation",
        "Logo on website & signage",
        "Networking access",
        "5 complimentary passes",
        "Social media mentions"
      ],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-inter">
      <SEO
        title="AI Summit NYC 2026 - The Premier AI Event in New York"
        description="Join AI Summit NYC—a major AI event bringing together cutting-edge technology, machine learning innovations, and practical business applications."
        keywords="AI Summit NYC, artificial intelligence conference, AI event, machine learning, AI startup competition, AI networking"
        url="/partners/ai-summit-nyc"
        type="website"
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-28 pb-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/40 via-transparent to-transparent"></div>
        </div>

        <motion.div 
          className="relative max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 mb-6">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">2026 • New York City</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            AI Summit<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">NYC 2026</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            The premier AI event bringing together cutting-edge technology, machine learning innovations, and practical business applications.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-slate-400 mb-10">
            <MapPin className="w-5 h-5" />
            <span>New York City</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.aisummit.nyc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Register Now
              <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="https://www.aisummit.nyc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-500 hover:border-blue-400 text-slate-300 hover:text-blue-300 rounded-xl font-semibold text-lg transition-all"
            >
              Get Prospectus
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Attend */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Why Attend</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why This Major AI Event?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mic, title: "Learn", description: "Practical AI and ML applications for Sales, Marketing & Communications" },
              { icon: Users, title: "Network", description: "Connect with AI Founders, Venture Capitalists & Technology Executives" },
              { icon: Trophy, title: "Compete", description: "AI Startup Innovation Contest with industry leaders" },
              { icon: Briefcase, title: "Partner", description: "Exclusive AI technology sponsor branding opportunities" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Startup Competition */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Trophy className="w-16 h-16 text-white/80 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">AI Startup Competition</h2>
              <p className="text-xl text-white/90 mb-8">
                Showcase your AI innovation at one of the top startup events in 2026. Present to industry leaders, VCs, and enterprise customers.
              </p>
              <ul className="space-y-3 text-white/90 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Present to top VCs and angel investors
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Gain exposure to enterprise decision-makers
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Network with fellow AI founders
                </li>
              </ul>
              <a 
                href="https://www.aisummit.nyc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all shadow-lg"
              >
                Apply to Compete
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Session Tracks</h3>
                <div className="grid grid-cols-2 gap-4">
                  {tracks.slice(0, 6).map((track) => (
                    <div key={track.title} className="text-white/80 text-sm py-2">
                      • {track.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Tracks */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Event Program</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Explore Session Tracks</h2>
            <p className="text-lg text-slate-600">Sessions designed for business leaders across industries and roles</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{track.title}</h3>
                <p className="text-sm text-slate-600">{track.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Partner With Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Sponsorship Opportunities</h2>
            <p className="text-lg text-slate-600">Connect with AI leaders and technology executives at this major New York event</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`relative rounded-2xl p-8 ${tier.featured ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white' : 'bg-slate-50 border border-slate-200'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-cyan-400 text-blue-900 text-xs font-bold rounded-full">
                    ULTIMATE
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                <p className={`text-3xl font-bold mb-6 ${tier.featured ? 'text-white' : 'text-blue-600'}`}>{tier.price}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-2 text-sm ${tier.featured ? 'text-white/90' : 'text-slate-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${tier.featured ? 'bg-cyan-400' : 'bg-blue-500'}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://www.aisummit.nyc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all ${tier.featured ? 'bg-white text-blue-700 hover:bg-slate-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  Contact Us
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don't Miss the Premier AI Event of 2026
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join industry leaders, innovators, and decision-makers at AI Summit NYC.
          </p>
          <a 
            href="https://www.aisummit.nyc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl"
          >
            Register for AI Summit NYC
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISummitNYC;
