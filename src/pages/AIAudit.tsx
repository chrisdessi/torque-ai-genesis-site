import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ZohoAIAuditNewsletter from "@/components/ZohoAIAuditNewsletter";
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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/80"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-14 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: Copy */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold tracking-[0.3em] text-sky-400 uppercase">
                  Torque AI • Free Audit
                </p>
                <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                  Free <span className="text-sky-400">AI Revenue Audit</span> for Your Business
                </h1>
                <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-xl">
                  In 10 minutes, I'll show you exactly where AI can increase your revenue or save you
                  10+ hours a week — without you having to learn any tech, hire a team, or rebuild your business.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-sky-500/20 text-[11px] text-sky-300">1</span>
                    <span>Find the #1 bottleneck slowing your revenue or wasting your time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-300">2</span>
                    <span>See the exact AI system that fixes it.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-violet-500/20 text-[11px] text-violet-300">3</span>
                    <span>Leave with a simple 14-day implementation roadmap.</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                  <Button
                    onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold"
                  >
                    Book My Free AI Audit and Get a Free Torque AI Strategy and Deployment Guide
                  </Button>
                  <p className="text-xs text-slate-400">
                    No pitch required. If there's a high-impact opportunity, I'll tell you. If not, you still leave with a clear plan.
                  </p>
                </div>

                {/* Trust bar */}
                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">Seen on</p>
                  <div className="flex flex-wrap items-center gap-3 opacity-80">
                    <span className="text-xs text-slate-400 border border-slate-700 rounded-full px-3 py-1">Fox 5</span>
                    <span className="text-xs text-slate-400 border border-slate-700 rounded-full px-3 py-1">Yahoo Finance</span>
                    <span className="text-xs text-slate-400 border border-slate-700 rounded-full px-3 py-1">CNBC</span>
                  </div>
                </div>
              </motion.div>

              {/* Right: Video */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/HuqJCKx6_3c?si=Xl2uMvR3Lt-Tjr9g"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-slate-200 shadow-lg max-w-xs">
                  <p className="font-semibold text-sky-300">Quick call. Real numbers.</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    We look at your actual funnel and show you where AI can plug in — not vague theory.
                  </p>
                </div>
              </motion.div>
            </div>
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
                  author: "Client Name, Role / Company"
                },
                {
                  quote: "I'm not technical at all. He showed us one automation that saves my team a full day of work every week.",
                  author: "Client Name, Industry"
                },
                {
                  quote: "It wasn't theory. It was: here's where you're leaking, here's the system to fix it, here's what it will likely be worth.",
                  author: "Client Name, Founder"
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
                  <p className="text-xs text-slate-400 mt-2">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section id="newsletter" className="py-12 lg:py-16 border-t border-slate-800/60 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Get Free AI Insights & Resources
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl mx-auto">
                Join our newsletter to receive actionable AI strategies, case studies, and exclusive tips 
                to help you grow your business with AI — delivered straight to your inbox.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ZohoAIAuditNewsletter />
            </motion.div>

            <motion.p
              className="text-center text-xs text-slate-500 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              No spam. Unsubscribe anytime. We respect your privacy.
            </motion.p>
          </div>
        </section>

        {/* AI Strategy Guide CTA */}
        <section className="py-12 lg:py-16 border-t border-slate-800/60 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              className="bg-gradient-to-br from-sky-500/10 via-slate-900/50 to-violet-500/10 border border-sky-500/20 rounded-2xl p-8 lg:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <p className="text-xs font-semibold tracking-[0.3em] text-sky-400 uppercase mb-3">
                  Free Resource
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                  Get Your Free AI Strategy & Deployment Guide
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
                  Discover the proven framework to identify AI opportunities, deploy workflows, 
                  train your team, and track measurable impact — without getting overwhelmed.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold"
                >
                  <a 
                    href="https://www.torqueapp.ai/torque-ai-guide" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download Free Guide
                  </a>
                </Button>
              </div>
            </motion.div>
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
