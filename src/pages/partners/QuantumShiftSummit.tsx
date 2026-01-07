import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZohoTorqueCommunityForm from "@/components/ZohoTorqueCommunityForm";
import SEO from "@/components/SEO";
import { Sparkles, Calendar, Users, Bell, ArrowRight, ExternalLink } from "lucide-react";

const QuantumShiftSummit = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-inter">
      <SEO
        title="Quantum Shift Summit - Transformation Event Coming Soon"
        description="The Quantum Shift Summit is launching soon. Join the waitlist for updates on this transformative event focused on personal and professional growth."
        keywords="Quantum Shift Summit, transformation event, personal growth, professional development, leadership summit"
        url="/partners/quantum-shift-summit"
        type="website"
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 pt-28 pb-20 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/40 via-transparent to-transparent"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div 
          className="relative max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Coming Soon</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
            Quantum Shift<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Summit</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
            A transformative event experience is launching soon. Join the waitlist to be the first to know.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://quantumshiftsummit.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Bell className="w-5 h-5" />
              Join the Waitlist
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">Stay Tuned</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What to Expect</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The Quantum Shift Summit will bring together thought leaders, practitioners, and seekers for an immersive transformation experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Transformative Sessions",
                description: "Deep-dive workshops and keynotes designed to shift your perspective and unlock new possibilities."
              },
              {
                icon: Users,
                title: "Community Connection",
                description: "Network with like-minded individuals on their own transformation journey."
              },
              {
                icon: Calendar,
                title: "Immersive Experience",
                description: "A carefully curated event experience that goes beyond traditional conferences."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center hover:border-purple-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Bell className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join the waitlist to receive updates, early access, and exclusive announcements about the Quantum Shift Summit.
          </p>
          <a 
            href="https://quantumshiftsummit.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-purple-700 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
          >
            Visit Quantum Shift Summit
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <ZohoTorqueCommunityForm />

      <Footer />
    </div>
  );
};

export default QuantumShiftSummit;
