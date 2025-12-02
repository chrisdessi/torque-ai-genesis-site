import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ZohoTorqueAIButton } from "@/components/ZohoTorqueAIButton";
import { ZohoTorqueAIForm } from "@/components/ZohoTorqueAIForm";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, Phone, Calendar, Linkedin, Youtube } from "lucide-react";
import chrisBioImage from "@/assets/chris-bio.png";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import ZapierContactForm from "@/components/ZapierContactForm";
import { Link } from "react-router-dom";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "AI Strategy Sprint",
      description: "3–4 week engagement to identify your highest-ROI AI use cases and prioritize what to build now, later, or never.",
      features: ["Executive workshop", "Systems & funnel review", "AI roadmap & quick wins"],
      highlight: false
    },
    {
      title: "AI Marketing & Sales Engine",
      description: "We design and implement AI-assisted marketing and sales systems: content, ads, email, follow-up, and reporting.",
      features: ["AI content workflows", "Funnel & CRM automation", "Lead nurturing & follow-up"],
      highlight: true
    },
    {
      title: "AI Training & Workshops",
      description: "Live and virtual sessions to get your team using AI safely and effectively in their day-to-day work.",
      features: ["AI 101 for non-technical teams", "Role-specific AI playbooks", "Safety, ethics & governance"],
      highlight: false
    }
  ];

  const results = [
    { title: "E-commerce brand", description: "92% year-over-year growth by redesigning their marketing funnel and layering AI into content creation, email, and retargeting." },
    { title: "B2B tech company", description: "$32M+ in new business driven by a consultative sales motion supported by AI-enabled outreach, research and proposal writing." },
    { title: "Local services group", description: "Reduced manual admin by 30% using AI-assisted scheduling, follow-up and FAQ handling—without sacrificing the human touch their customers value." }
  ];

  const faqs = [
    { q: "Do we need technical people on our team to work with you?", a: "No. Most of our clients are non-technical leadership, marketing and sales teams. We translate the tech into plain English and build systems your existing team can run." },
    { q: "Will AI replace our team?", a: "Our philosophy is \"human to lead, AI to scale.\" We use AI to remove repetitive work so your people can spend more time on high-value thinking, relationships and creativity." },
    { q: "How long does it take to see results?", a: "Most clients see tangible improvements within 30–90 days, depending on scope. Quick wins are prioritized first so your team feels momentum early." },
    { q: "Do you work with small businesses?", a: "Yes, as long as there's a clear offer, real customers and leadership buy-in. We'll be upfront if we don't think it's the right time for a full engagement." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <SEO 
        title="Torque AI | Turn AI Hype Into Real Revenue"
        description="Torque AI helps businesses turn AI hype into real revenue through enterprise AI strategy, marketing automation, and hands-on implementation led by Chris Dessi."
        keywords="Westchester AI consulting, Westchester AI coach, Chris Dessi, AI workshops Westchester NY, executive coaching Westchester, AI business transformation, master marketer, AI consultant New York, enterprise AI strategy, AI implementation Westchester, business AI coaching, Westchester digital transformation, AI training Westchester, ChatGPT for business, AI-driven marketing Westchester, AI sales automation, generative AI consulting, AI strategy consultant New York"
        url="/"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950/95 to-slate-950"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <motion.p 
                {...fadeInUp}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400"
              >
                Enterprise AI Strategy & Implementation
              </motion.p>
              <motion.h1 
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
              >
                Turn AI Headlines<br/>Into Real Revenue.
              </motion.h1>
              <motion.p 
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl"
              >
                Torque AI helps businesses move beyond AI experimentation into measurable results—more leads,
                more sales, and more efficient operations—through clear strategy, training, and hands-on
                implementation.
              </motion.p>

              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <Button 
                  className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Book a Strategy Call
                </Button>
                <Button 
                  variant="outline"
                  className="border-slate-700 text-slate-100 hover:bg-slate-900"
                  asChild
                >
                  <a href="#services">See What We Do</a>
                </Button>
              </motion.div>

              <motion.p 
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="mt-5 text-xs text-slate-500 max-w-md"
              >
                Led by Chris Dessi — author, consultant, and marketer who has driven over $32M in revenue and
                92% YoY growth for clients using AI and automation.
              </motion.p>
            </div>

            {/* Social proof block */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 shadow-xl"
            >
              <p className="text-slate-400 mb-3 font-semibold uppercase tracking-[0.2em] text-[10px]">As seen on</p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="border border-slate-700 rounded-full px-3 py-1">Fox 5</span>
                <span className="border border-slate-700 rounded-full px-3 py-1">CNBC</span>
                <span className="border border-slate-700 rounded-full px-3 py-1">Yahoo Finance</span>
              </div>
              <div className="mt-5 border-t border-slate-800 pt-4">
                <p className="text-[10px] text-slate-400 mb-2 font-semibold uppercase tracking-[0.2em]">Trusted for</p>
                <ul className="space-y-1 text-sm text-slate-200">
                  <li>• AI marketing strategy</li>
                  <li>• Sales & funnel automation</li>
                  <li>• AI training for teams</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              You don't need another AI tool. You need a plan.
            </h2>
            <p className="text-sm text-slate-300 mb-4">
              Torque AI is for organizations that are done dabbling and want to move into focused execution.
              You don't want another MVP that goes nowhere. You want AI woven into your sales, marketing and
              operations in a way that drives results.
            </p>
            <p className="text-sm text-slate-300">
              Most of our work is with mid-sized businesses, agencies and growth-stage companies who know
              there's opportunity in AI, but don't have time to become prompt engineers or hire a full data
              science team.
            </p>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-base font-semibold mb-3 text-slate-100">We're a fit if:</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" /> You have revenue, customers, and real-world constraints.</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" /> You suspect AI could unlock growth or efficiency—but you're not sure where.</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" /> You want a partner who will tell you what not to build.</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" /> You care about brand, ethics and your people as much as your P&L.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-black mb-3 tracking-tight">
            What we do
          </motion.h2>
          <motion.p {...fadeInUp} className="text-sm text-slate-300 mb-8 max-w-3xl">
            We help you go from "we should be using AI" to "here's the revenue impact." Three core service
            lines. No fluff.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`bg-slate-900/80 rounded-2xl p-6 flex flex-col ${
                  service.highlight 
                    ? "border-2 border-sky-500/70 shadow-[0_0_25px_rgba(56,189,248,0.25)]" 
                    : "border border-slate-800"
                }`}
              >
                <h3 className="text-base font-semibold text-slate-100 mb-2">{service.title}</h3>
                <p className="text-xs text-slate-300 mb-4">{service.description}</p>
                <ul className="text-xs text-slate-300 space-y-1 mb-5 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <ZohoTorqueAIButton />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-black mb-3 tracking-tight">
            How it works
          </motion.h2>
          <motion.p {...fadeInUp} className="text-sm text-slate-300 mb-8 max-w-3xl">
            We keep it simple. No endless discovery. No 100-page slide decks. Just a clear path from idea to
            implemented system.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1. Diagnose", text: "We map your current funnels, processes and systems, then identify 2–3 leverage points where AI can unlock the most value in the shortest time." },
              { step: "2. Design", text: "We design workflows, prompts, automations and guardrails that fit your brand, your team and your tech stack." },
              { step: "3. Deploy", text: "We implement, test, and iterate until it's working—and your team knows how to run it without us." }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6"
              >
                <h3 className="text-base font-semibold mb-2 text-slate-100">{item.step}</h3>
                <p className="text-xs text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="proof" className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-black mb-3 tracking-tight">
            Results & case examples
          </motion.h2>
          <motion.p {...fadeInUp} className="text-sm text-slate-300 mb-8 max-w-3xl">
            The details are often under NDA, but here's what clients have achieved by working with Torque AI.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6"
              >
                <h3 className="text-base font-semibold text-slate-100 mb-2">{result.title}</h3>
                <p className="text-xs text-slate-300">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Chris */}
      <section id="about" className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-8 items-start">
          <motion.div {...fadeInUp} className="lg:col-span-1">
            <div className="w-40 h-40 rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-900">
              <img src={chrisBioImage} alt="Chris Dessi" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Meet Chris Dessi, founder of Torque AI
            </h2>
            <p className="text-sm text-slate-300 mb-3">
              Chris has spent his career at the intersection of technology, sales and storytelling. He's led
              teams, driven tens of millions in revenue, written books on AI and social media, and appeared on
              outlets like Fox 5, CNBC and Yahoo Finance to explain what these tools actually mean for
              business.
            </p>
            <p className="text-sm text-slate-300 mb-3">
              Torque AI is his answer to a simple question: how do we help real companies use AI in ways that
              are grounded, ethical and profitable—without requiring them to rebuild everything from scratch?
            </p>
            <p className="text-sm text-slate-300">
              You don't need another guru. You need someone who will sit with your team, understand your
              world, and collaborate on systems that work in practice, not just on paper.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">
            Frequently asked questions
          </motion.h2>
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
              >
                <p className="font-semibold text-slate-100 text-sm mb-1">{faq.q}</p>
                <p className="text-xs text-slate-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Ready to talk about AI that actually moves the needle?
            </h2>
            <p className="text-sm text-slate-300 mb-4">
              If you're serious about integrating AI into your sales, marketing or operations and want a
              partner who's done it in the real world, let's talk.
            </p>
            <p className="text-xs text-slate-400 mb-4">
              We'll use a short call to understand your business, where you're stuck, and whether Torque AI is
              the right fit. No pressure, no fluff.
            </p>
            <div className="flex flex-col gap-2 text-xs text-slate-400">
              <a href="mailto:chris@torqueapp.ai" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <Mail className="w-4 h-4" />
                chris@torqueapp.ai
              </a>
              <a href="tel:+16467606991" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <Phone className="w-4 h-4" />
                +1 646-760-6991
              </a>
            </div>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-slate-100">Get in touch</h3>
            <ZohoTorqueAIForm />
            <Button 
              className="mt-4 w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold"
              onClick={() => setIsContactFormOpen(true)}
            >
              Book a Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Calendly Booking */}
      <div className="bg-slate-900 border-t border-slate-800">
        <CalendlyEmbed />
      </div>

      <Footer />
      
      {/* Contact Form Dialog */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">Contact Form</DialogTitle>
          <ZapierContactForm 
            title="Create Your AI Leadership Blueprint"
            description="Fill out the form and our team will reach out within 24 hours"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
