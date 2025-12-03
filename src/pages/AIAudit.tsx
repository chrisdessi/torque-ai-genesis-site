import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ZohoAIAuditNewsletter from "@/components/ZohoAIAuditNewsletter";
import { ZohoTorqueAIForm } from "@/components/ZohoTorqueAIForm";
import { ZohoTorqueAIButton } from "@/components/ZohoTorqueAIButton";
import { motion } from "framer-motion";
import { useEffect } from "react";

const AIAudit = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <SEO
        title="Free AI Revenue Audit | Torque AI"
        description="Get a free 10-minute AI Revenue Audit for your business. Discover exactly where AI can increase your revenue or save you 10+ hours a week, without learning any tech."
        keywords="free AI audit, AI revenue audit, business AI consultation, AI strategy, AI automation, AI for business"
        url="/ai-audit"
      />
      
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <Header />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-6 py-16 lg:py-24">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
                <span className="text-sm font-medium text-sky-300">100% Free • Get Started Now</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Get Your<br />
                <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Free AI Strategy Guide</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Join our AI community and get weekly insights on how to increase revenue, save time, 
                and implement AI in your business — without learning code or rebuilding everything.
              </p>
            </div>

            {/* Main Signup Form */}
            <div className="max-w-xl mx-auto">
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/60 border-2 border-sky-500/30 rounded-3xl p-8 lg:p-10 shadow-2xl backdrop-blur">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-3 text-slate-100">Start Growing with AI Today</h2>
                  <p className="text-base text-slate-300">Get instant access to our AI Strategy & Deployment Guide</p>
                </div>

                <ZohoAIAuditNewsletter />
              </div>
            </div>

            {/* What You'll Get */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6">
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="font-semibold text-slate-100 mb-2">Free Strategy Guide</h3>
                  <p className="text-sm text-slate-400">Step-by-step AI implementation roadmap</p>
                </div>
                <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6">
                  <div className="text-3xl mb-3">💡</div>
                  <h3 className="font-semibold text-slate-100 mb-2">Weekly AI Insights</h3>
                  <p className="text-sm text-slate-400">Practical tips and real-world case studies</p>
                </div>
                <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-semibold text-slate-100 mb-2">Early Access</h3>
                  <p className="text-sm text-slate-400">Be first to know about new tools and workshops</p>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="max-w-3xl mx-auto mt-16">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-6 lg:p-8 shadow-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-center text-slate-100">See How AI Can Transform Your Business</h2>
                <div className="aspect-video rounded-2xl overflow-hidden border border-slate-700/50 bg-black shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/HuqJCKx6_3c?si=Xl2uMvR3Lt-Tjr9g"
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

        {/* Optional - Want More? */}
        <section className="py-16 lg:py-24 border-t border-slate-800/60">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <span className="text-sm font-medium text-emerald-300">Optional • No Pressure</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
                Ready to Take Action?<br />Book Your Free AI Revenue Audit
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Once you're on the list, you can schedule a free 10-minute audit. 
                I'll show you exactly where AI can increase your revenue or save you 10+ hours a week.
              </p>
            </motion.div>

            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-3 text-base text-slate-100">Find Your #1 Bottleneck</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Identify the one thing slowing your revenue or wasting your time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold mb-3 text-base text-slate-100">See the AI Solution</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Get the exact AI system that fixes it — no technical jargon.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-semibold mb-3 text-base text-slate-100">14-Day Action Plan</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Leave with a simple roadmap you can implement immediately.
                </p>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Who This Is For */}
        <section className="py-10 lg:py-14 border-t border-slate-800/60">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Is This AI Audit for You?
              </h2>
              <p className="text-sm text-slate-300 mb-6 max-w-2xl">
                This isn't for people who want to "play" with AI tools. It's for business owners who want
                AI to translate into **revenue, time back, and better systems.**
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <motion.div
                  className="bg-slate-900/70 border border-slate-800 rounded-xl p-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-semibold mb-2 text-sm">You'll get the most from this if:</h3>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• You run a small or mid-sized business, agency, gym, or ecom brand.</li>
                    <li>• You know AI matters, but you're not sure where to start.</li>
                    <li>• You don't want another course — you want someone to implement for you.</li>
                    <li>• You care about ROI more than shiny tools.</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-slate-900/40 border border-slate-800 rounded-xl p-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-semibold mb-2 text-sm">This is probably not for you if:</h3>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• You're just curious about AI but not ready to change anything.</li>
                    <li>• You want to DIY everything and don't value your time.</li>
                    <li>• You're looking for a free chat about "the future of AI" with no action attached.</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="py-10 lg:py-14 border-t border-slate-800/60">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                What You'll Get in Your Free AI Revenue Audit
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
                {[
                  {
                    title: "1. Bottleneck Diagnosis",
                    description: "We pinpoint the part of your funnel or ops that's leaking time or money."
                  },
                  {
                    title: "2. AI System Recommendation",
                    description: "You'll see the one AI automation I'd install first to unlock the most leverage."
                  },
                  {
                    title: "3. 14-Day Action Plan",
                    description: "A simple, non-technical roadmap you can follow yourself or have me implement."
                  },
                  {
                    title: "4. Next Steps (Optional)",
                    description: "If there's a strong opportunity, I'll explain how my 14-Day AI Fast Track works. No pressure."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-900/70 border border-slate-800 rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Chris */}
        <section className="py-10 lg:py-14 border-t border-slate-800/60">
          <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 gap-10 items-center">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-slate-700 shadow-xl mx-auto lg:mx-0">
                <img
                  src="/lovable-uploads/85521d42-7840-4d81-b8ca-c002ab15932e.png"
                  alt="Chris Dessi"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-2 text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-3">Who You'll Be Talking To</h2>
              <p className="text-slate-300 mb-3">
                I'm Chris Dessi, founder of Torque AI. Over the last decade, I've led sales and marketing teams, built tech companies, and generated more than <span className="font-semibold">over $100 million</span> in deals — including helping one e-commerce client grow <span className="font-semibold">92% year over year</span> by using AI and automation the right way.
              </p>
              <p className="text-slate-300 mb-3">
                I appear on Fox5, Yahoo Finance, and other networks to help business leaders cut through the noise and actually use AI in the real world.
              </p>
              <p className="text-slate-300">
                I'm not here to impress you with jargon. I'm here to help you find practical leverage so your business runs smoother and grows faster.
              </p>
              
              <div className="mt-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-100">Join the Torque AI Community</h3>
                <ZohoTorqueAIForm />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-10 lg:py-14 border-t border-slate-800/60">
          <div className="max-w-5xl mx-auto px-4">
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Others Are Saying
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              {[
                {
                  quote: "Chris helped us uncover an obvious gap we'd been staring at for months. The AI follow-up system he recommended paid for itself in weeks.",
                  name: "Sarah Mitchell",
                  role: "VP of Sales",
                  company: "Nexus Growth Partners"
                },
                {
                  quote: "I'm not technical at all. He showed us one automation that saves my team a full day of work every week.",
                  name: "Michael Torres",
                  role: "Operations Director",
                  company: "Coastal Medical Group"
                },
                {
                  quote: "It wasn't theory. It was: here's where you're leaking, here's the system to fix it, here's what it will likely be worth.",
                  name: "Jennifer Walsh",
                  role: "Founder & CEO",
                  company: "Elevate Consulting"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-slate-200 mb-3">"{testimonial.quote}"</p>
                  <p className="text-xs text-slate-400 mt-2">— {testimonial.name}, {testimonial.role}, {testimonial.company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Booking Section - Step 2 */}
        <section id="booking" className="py-12 lg:py-16 border-t border-slate-800/60">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start text-sm">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Step 2: Book Your Free AI Revenue Audit
                </h2>
                <p className="text-slate-300 mb-4">
                  Choose a time that works for you. We'll meet for ~10–20 minutes on Zoom, look at your current funnel or operations, and map out where AI can plug in for the biggest impact.
                </p>
                <ul className="space-y-2 text-slate-300 mb-6 text-xs sm:text-sm">
                  <li>• 100% free — no obligation.</li>
                  <li>• Focused on your actual numbers, not generic advice.</li>
                  <li>• If there's no strong opportunity, I'll tell you that, too.</li>
                </ul>
                <p className="text-xs text-slate-500">
                  Most calls end with 1–2 simple, high-leverage ideas you can implement immediately — with or without me.
                </p>
              </motion.div>

              <motion.div
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 lg:p-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/chris-torqueapp/quantum-shift-starter-session-clone"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 lg:py-14 border-t border-slate-800/60">
          <div className="max-w-5xl mx-auto px-4 text-sm">
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              FAQs
            </motion.h2>
            <div className="space-y-4">
              {[
                {
                  question: "Is this really free?",
                  answer: "Yes. The audit is 100% free. If we see a strong opportunity, I'll explain how I can help implement it. If not, you still walk away with clarity and a plan."
                },
                {
                  question: "Will you pitch me?",
                  answer: "I'll only make an offer if I'm confident I can create a clear ROI. No pressure, no scripts. Just an honest conversation."
                },
                {
                  question: "Do I need to be technical?",
                  answer: "Not at all. Most of my clients aren't technical. My job is to translate AI into plain English and plug it into your business for you."
                },
                {
                  question: "What kinds of businesses do you work with?",
                  answer: "I work with service businesses, agencies, gyms, coaches, local businesses, and e-commerce brands that are already selling something and want to grow or get time back."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <p className="font-semibold text-slate-100">{faq.question}</p>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIAudit;
