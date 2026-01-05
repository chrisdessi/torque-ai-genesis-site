import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ZohoQuantumCoachWaitlistForm } from "@/components/ZohoQuantumCoachWaitlistForm";
import { ZohoQuantumShiftButton } from "@/components/ZohoQuantumShiftButton";
import ZohoLetsTalkButton from "@/components/ZohoLetsTalkButton";
import chrisPortrait from "@/assets/chris-dessi-headshot.jpg";

const QuantumCoachBooking = () => {
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

  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const bookingRef = useRef(null);

  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const bookingInView = useInView(bookingRef, { once: true, margin: "-100px" });

  useEffect(() => {
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
    <div className="min-h-screen bg-white text-slate-800 font-inter">
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
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-24 pb-16">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-200/40 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-12 lg:py-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-700">100% Free • No Commitment</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
              Join the<br />
              <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">Quantum Shift Community</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Get weekly insights, reflection tools, and guidance from Chris Dessi as you break old patterns 
              and create the life and business you actually want.
            </p>
          </div>

          {/* Video Section - moved above form */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center text-slate-900">A Message from Chris</h2>
              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/GqyALozg1_4" 
                  title="A Message from Chris Dessi" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Main Signup Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border-2 border-emerald-500/30 rounded-3xl p-6 lg:p-8 shadow-xl">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold mb-2 text-slate-900">Start Your Shift Today</h2>
                <p className="text-sm text-slate-600">Enter your email to join the community</p>
              </div>

              <ZohoQuantumCoachWaitlistForm />
            </div>
          </div>

          {/* What You'll Get */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="text-center mb-6">
              <ZohoQuantumShiftButton />
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">📬</div>
                <h3 className="font-semibold text-slate-900 mb-2">Weekly Insights</h3>
                <p className="text-sm text-slate-600">Reflections and frameworks from Chris to help you stay aligned</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="font-semibold text-slate-900 mb-2">Practical Tools</h3>
                <p className="text-sm text-slate-600">Exercises and questions to help you navigate your own shift</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-slate-900 mb-2">Community Access</h3>
                <p className="text-sm text-slate-600">Invitations to workshops, sessions, and deeper conversations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WANT TO GO DEEPER */}
      <section ref={experienceRef} className="bg-slate-50 py-16 lg:py-24 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 mb-4">
              <span className="text-sm font-medium text-sky-700">Optional • No Pressure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
              Want to Go Deeper?<br />Book a Free 30-Minute Session
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-sky-400 hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mb-4">
                <span className="text-2xl">🔓</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-900">Break One Limiting Pattern</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Get curious about the story running your life and gently dismantle a belief that's no longer serving you.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-900">Clarify What You Really Want</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Move beyond vague goals into a felt sense of the life, business, or creative work you're actually called to.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-900">Design an Aligned Next Step</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Leave with one concrete, doable action that matches who you're becoming — not who you've been.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-amber-400 hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-900">Get the Quantum Shift Guidebook</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500/10 border border-sky-500/40 text-sky-700 hover:bg-sky-500/20 rounded-xl transition-all duration-300 font-medium text-lg"
            >
              Book Your Free Session
              <span className="text-xl">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT CHRIS */}
      <section ref={aboutRef} className="bg-white py-16 lg:py-24 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-1">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-slate-300 shadow-lg mx-auto lg:mx-0">
                  <img
                    src={chrisPortrait}
                    alt="Chris Dessi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Meet Your Guide, Chris Dessi</h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    Chris is the creator of the Quantum Shift podcast and project — a conversation series
                    exploring what happens when we stop living from fear and start living from truth.
                  </p>
                  <p>
                    After decades in high-pressure leadership roles, building companies, writing books,
                    and navigating his own unraveling, Chris has become obsessed with one question:
                    <span className="italic text-slate-800 font-medium"> What actually creates lasting change?</span>
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

          {/* Synthesia Video */}
          <motion.div 
            className="mt-12"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center text-slate-900">Embrace the AI Revolution</h3>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md" style={{ aspectRatio: '1920/1080' }}>
                <iframe 
                  src="https://share.synthesia.io/embeds/videos/cd9016f8-5b14-47d0-9fec-e893be33ccc9" 
                  loading="lazy" 
                  title="Synthesia video player - Embrace the AI Revolution" 
                  allowFullScreen 
                  allow="encrypted-media; fullscreen; microphone;" 
                  className="absolute w-full h-full top-0 left-0 border-none p-0 m-0 overflow-hidden"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsRef} className="bg-slate-50 py-16 lg:py-24 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
              What the Community Is Saying
            </h2>
            <p className="text-lg text-slate-500">Real conversations, real transformations</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="mb-4">
                <div className="text-sky-500 text-3xl mb-4">"</div>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  One conversation with Chris felt like someone finally turned the lights on in a room I'd been pacing in for years.
                </p>
              </div>
              <p className="text-sm text-slate-500">— David Chen, Executive Coach & Entrepreneur</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-400 hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="mb-4">
                <div className="text-emerald-500 text-3xl mb-4">"</div>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  He asks the questions I've been afraid to ask myself. I walked away with clarity and an action I could actually take.
                </p>
              </div>
              <p className="text-sm text-slate-500">— Rachel Simmons, Marketing Director</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-400 hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="mb-4">
                <div className="text-purple-500 text-3xl mb-4">"</div>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  It wasn't hype. It was honest, grounded, and strangely calming. I left feeling more like myself.
                </p>
              </div>
              <p className="text-sm text-slate-500">— Marcus Thompson, Founder & CEO</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BOOKING CALENDAR */}
      <section ref={bookingRef} id="booking" className="bg-white py-16 lg:py-24 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate={bookingInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
              Schedule Your Free Session
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose a time that works for you. Sessions are limited each week so there's space for real conversation.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={bookingInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-lg">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/chris-torqueapp/quantum-shift-starter-session?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500 max-w-2xl mx-auto">
                <strong className="text-emerald-600">Haven't joined the community yet?</strong> That's okay! 
                <a href="#top" className="text-sky-600 hover:text-sky-700 ml-1 underline">
                  Join first to stay connected
                </a> and get the most value from your session.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 border-2 border-emerald-500/30 rounded-3xl p-10 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              Ready to Start Your Quantum Shift?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Join the community for free and start receiving weekly insights, tools, and invitations 
              to go deeper — including how we use AI to build the systems that support your new direction.
            </p>
            <a 
              href="#top" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg shadow-emerald-500/20"
            >
              Join the Community — It's Free
              <span className="text-xl">↑</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumCoachBooking;
