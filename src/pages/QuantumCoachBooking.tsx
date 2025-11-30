import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ZohoQuantumCoachWaitlistForm } from "@/components/ZohoQuantumCoachWaitlistForm";
import chrisPortrait from "@/assets/chris-dessi-headshot.jpg";

const QuantumCoachBooking = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Refs for scroll animations
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const bookingRef = useRef(null);

  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const bookingInView = useInView(bookingRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Load Calendly script
    const calendlyScript = document.createElement('script');
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);

    return () => {
      if (document.body.contains(calendlyScript)) {
        document.body.removeChild(calendlyScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      <SEO
        title="Quantum Shift Starter Session - Transform Your Life and Business"
        description="Start your Quantum Shift with a free 30-minute guided transformation session. Break limiting patterns, clarify what you really want, and leave with an aligned action plan."
        keywords="quantum shift, transformation coaching, Chris Dessi coaching, starter session, personal transformation, business transformation, limiting beliefs, life coaching"
        url="/quantum-shift/coach"
        type="website"
      />
      <Header />

      <a id="top"></a>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-300">100% Free • No Commitment</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Join the<br />
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Quantum Shift Community</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Get weekly insights, reflection tools, and guidance from Chris Dessi as you break old patterns 
              and create the life and business you actually want.
            </p>
          </div>

          {/* Main Signup Form */}
          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/60 border-2 border-emerald-500/30 rounded-3xl p-8 lg:p-10 shadow-2xl backdrop-blur">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-3 text-slate-100">Start Your Shift Today</h2>
                <p className="text-base text-slate-300">Enter your email to join the community</p>
              </div>

              <ZohoQuantumCoachWaitlistForm />
            </div>
          </div>

          {/* What You'll Get */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6">
                <div className="text-3xl mb-3">📬</div>
                <h3 className="font-semibold text-slate-100 mb-2">Weekly Insights</h3>
                <p className="text-sm text-slate-400">Reflections and frameworks from Chris to help you stay aligned</p>
              </div>
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="font-semibold text-slate-100 mb-2">Practical Tools</h3>
                <p className="text-sm text-slate-400">Exercises and questions to help you navigate your own shift</p>
              </div>
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-slate-100 mb-2">Community Access</h3>
                <p className="text-sm text-slate-400">Invitations to workshops, sessions, and deeper conversations</p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-6 lg:p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-center text-slate-100">A Message from Chris</h2>
              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-700/50 bg-black shadow-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/GqyALozg1_4?si=Cion5GrWZGyOrJjW" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WANT TO GO DEEPER - OPTIONAL SESSION */}
      <section ref={experienceRef} className="bg-slate-950 py-16 lg:py-24 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-4">
              <span className="text-sm font-medium text-sky-300">Optional • No Pressure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
              Want to Go Deeper?<br />Book a Free 30-Minute Session
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Once you're in the community, you can schedule a free one-on-one session with Chris. 
              It's a grounded conversation designed to help you see where you're stuck and what wants to emerge next.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🔓</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-100">Break One Limiting Pattern</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Get curious about the story running your life and gently dismantle a belief that's no longer serving you.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-100">Clarify What You Really Want</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Move beyond vague goals into a felt sense of the life, business, or creative work you're actually called to.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-100">Design an Aligned Next Step</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Leave with one concrete, doable action that matches who you're becoming — not who you've been.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-100">Get the Quantum Shift Guidebook</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A short PDF with core frameworks, questions, and practices to revisit whenever you feel yourself drifting.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-10"
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <a 
              href="#booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 hover:text-sky-200 rounded-xl transition-all duration-300 font-medium text-lg"
            >
              Book Your Free Session
              <span className="text-xl">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT CHRIS */}
      <section ref={aboutRef} className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 lg:py-24 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 lg:p-12"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-1">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl mx-auto lg:mx-0">
                  <img
                    src={chrisPortrait}
                    alt="Chris Dessi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-slate-100">Meet Your Guide, Chris Dessi</h2>
                <div className="space-y-4 text-base text-slate-300 leading-relaxed">
                  <p>
                    Chris is the creator of the Quantum Shift podcast and project — a conversation series
                    exploring what happens when we stop living from fear and start living from truth.
                  </p>
                  <p>
                    After decades in high-pressure leadership roles, building companies, writing books,
                    and navigating his own unraveling, Chris has become obsessed with one question:
                    <span className="italic text-slate-200"> What actually creates lasting change?</span>
                  </p>
                  <p>
                    The Quantum Shift Starter Session is his way of offering a grounded, no-fluff starting
                    point for that journey — whether your next move is a career reinvention, a business
                    pivot, or simply finding a calmer, truer way to move through your day.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsRef} className="bg-slate-950 py-16 lg:py-24 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
              What the Community Is Saying
            </h2>
            <p className="text-lg text-slate-400">Real conversations, real transformations</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="mb-4">
                <div className="text-sky-400 text-3xl mb-4">"</div>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  One conversation with Chris felt like someone finally turned the lights on in a room I'd been pacing in for years.
                </p>
              </div>
              <p className="text-sm text-slate-400">— Name, Role / Description</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="mb-4">
                <div className="text-emerald-400 text-3xl mb-4">"</div>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  He asks the questions I've been afraid to ask myself. I walked away with clarity and an action I could actually take.
                </p>
              </div>
              <p className="text-sm text-slate-400">— Name, Role / Description</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="mb-4">
                <div className="text-purple-400 text-3xl mb-4">"</div>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  It wasn't hype. It was honest, grounded, and strangely calming. I left feeling more like myself.
                </p>
              </div>
              <p className="text-sm text-slate-400">— Name, Role / Description</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BOOKING CALENDAR */}
      <section ref={bookingRef} id="booking" className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 lg:py-24 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate={bookingInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
              Schedule Your Free Session
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Choose a time that works for you. Sessions are limited each week so there's space for real conversation.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={bookingInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-6 lg:p-8 shadow-2xl">
              {/* Calendly inline widget begin */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/chris-torqueapp/quantum-shift-starter-session?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px' }}
              />
              {/* Calendly inline widget end */}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                <strong className="text-emerald-400">Haven't joined the community yet?</strong> That's okay! 
                <a href="#top" className="text-sky-400 hover:text-sky-300 ml-1 underline">
                  Join first to stay connected
                </a> and get the most value from your session.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA / FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800/60 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-500/10 to-sky-500/10 border-2 border-emerald-500/20 rounded-3xl p-10 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-100">
              Ready to Start Your Quantum Shift?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Join the community for free and start receiving weekly insights, tools, and invitations 
              to go deeper — including how we use AI to build the systems that support your new direction.
            </p>
            <a 
              href="#top" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg shadow-emerald-500/20"
            >
              Join the Community — It's Free
              <span className="text-xl">↑</span>
            </a>
          </div>
        </div>
      </footer>

      <Footer />
    </div>
  );
};

export default QuantumCoachBooking;