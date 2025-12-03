import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ZohoTorqueAIButton } from "@/components/ZohoTorqueAIButton";
import { ZohoTorqueAIForm } from "@/components/ZohoTorqueAIForm";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, Phone, Calendar, Linkedin, Youtube } from "lucide-react";
import chrisBioImage from "@/assets/chris-bio.png";
import chrisFox5Image from "@/assets/chris-fox5.jpg";
import heroGraphic from "@/assets/hero-enterprise-graphic.jpg";
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
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <SEO 
        title="Torque AI | Turn AI Hype Into Real Revenue"
        description="Torque AI helps businesses turn AI hype into real revenue through enterprise AI strategy, marketing automation, and hands-on implementation led by Chris Dessi."
        keywords="Westchester AI consulting, Westchester AI coach, Chris Dessi, AI workshops Westchester NY, executive coaching Westchester, AI business transformation, master marketer, AI consultant New York, enterprise AI strategy, AI implementation Westchester, business AI coaching, Westchester digital transformation, AI training Westchester, ChatGPT for business, AI-driven marketing Westchester, AI sales automation, generative AI consulting, AI strategy consultant New York"
        url="/"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Dynamic background graphic */}
        <div className="absolute inset-0">
          <img 
            src={heroGraphic} 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-3xl">
            <motion.p 
              {...fadeInUp}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600"
            >
              Enterprise AI Strategy & Implementation
            </motion.p>
            <motion.h1 
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900"
            >
              Turn AI Headlines<br/>Into Real Revenue.
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed"
            >
              Torque AI helps businesses move beyond AI experimentation into measurable results—more leads,
              more sales, and more efficient operations—through clear strategy, training, and hands-on
              implementation.
            </motion.p>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button 
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 text-base"
                onClick={() => setIsContactFormOpen(true)}
              >
                Book a Strategy Call
              </Button>
              <Button 
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3 text-base"
                asChild
              >
                <a href="#services">See What We Do</a>
              </Button>
            </motion.div>

            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="mt-6 text-sm text-slate-500 max-w-md"
            >
              Led by Chris Dessi — author, consultant, and marketer who has driven over $32M in revenue and
              92% YoY growth for clients using AI and automation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5 text-slate-900">
              You don't need another AI tool. You need a plan.
            </h2>
            <p className="text-base text-slate-600 mb-4 leading-relaxed">
              Torque AI is for organizations that are done dabbling and want to move into focused execution.
              You don't want another MVP that goes nowhere. You want AI woven into your sales, marketing and
              operations in a way that drives results.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Most of our work is with mid-sized businesses, agencies and growth-stage companies who know
              there's opportunity in AI, but don't have time to become prompt engineers or hire a full data
              science team.
            </p>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-slate-900">We're a fit if:</h3>
            <ul className="space-y-3 text-base text-slate-600">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" /> You have revenue, customers, and real-world constraints.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" /> You suspect AI could unlock growth or efficiency—but you're not sure where.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" /> You want a partner who will tell you what not to build.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" /> You care about brand, ethics and your people as much as your P&L.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-black mb-4 tracking-tight text-slate-900">
            What we do
          </motion.h2>
          <motion.p {...fadeInUp} className="text-base text-slate-600 mb-10 max-w-3xl leading-relaxed">
            We help you go from "we should be using AI" to "here's the revenue impact." Three core service
            lines. No fluff.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 flex flex-col ${
                  service.highlight 
                    ? "border-2 border-sky-500 shadow-lg shadow-sky-100" 
                    : "border border-slate-200"
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="text-sm text-slate-600 space-y-2 mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <ZohoTorqueAIButton />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-black mb-4 tracking-tight text-slate-900">
            How it works
          </motion.h2>
          <motion.p {...fadeInUp} className="text-base text-slate-600 mb-10 max-w-3xl leading-relaxed">
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
                className="bg-white border border-slate-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-slate-900">{item.step}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="proof" className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-black mb-4 tracking-tight text-slate-900">
            Results & case examples
          </motion.h2>
          <motion.p {...fadeInUp} className="text-base text-slate-600 mb-10 max-w-3xl leading-relaxed">
            The details are often under NDA, but here's what clients have achieved by working with Torque AI.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{result.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Chris */}
      <section id="about" className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeInUp}>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src={chrisFox5Image} 
                  alt="Chris Dessi on Fox 5 News" 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-3">As Seen On</p>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-slate-300 rounded-full px-4 py-2 text-sm text-slate-600 bg-white">Fox 5</span>
                  <span className="border border-slate-300 rounded-full px-4 py-2 text-sm text-slate-600 bg-white">CNBC</span>
                  <span className="border border-slate-300 rounded-full px-4 py-2 text-sm text-slate-600 bg-white">Yahoo Finance</span>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <h2 className="text-3xl sm:text-4xl font-black mb-5 tracking-tight text-slate-900">
                Meet Chris Dessi, founder of Torque AI
              </h2>
              <p className="text-base text-slate-600 mb-4 leading-relaxed">
                Chris has spent his career at the intersection of technology, sales and storytelling. He's led
                teams, driven tens of millions in revenue, written books on AI and social media, and appeared on
                outlets like Fox 5, CNBC and Yahoo Finance to explain what these tools actually mean for
                business.
              </p>
              <p className="text-base text-slate-600 mb-4 leading-relaxed">
                Torque AI is his answer to a simple question: how do we help real companies use AI in ways that
                are grounded, ethical and profitable—without requiring them to rebuild everything from scratch?
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                You don't need another guru. You need someone who will sit with your team, understand your
                world, and collaborate on systems that work in practice, not just on paper.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-black mb-8 tracking-tight text-slate-900">
            Frequently asked questions
          </motion.h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="border-b border-slate-200 pb-6"
              >
                <p className="font-semibold text-slate-900 text-base mb-2">{faq.q}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-black mb-5 tracking-tight text-slate-900">
              Ready to talk about AI that actually moves the needle?
            </h2>
            <p className="text-base text-slate-600 mb-4 leading-relaxed">
              If you're serious about integrating AI into your sales, marketing or operations and want a
              partner who's done it in the real world, let's talk.
            </p>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              We'll use a short call to understand your business, where you're stuck, and whether Torque AI is
              the right fit. No pressure, no fluff.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:chris@torqueapp.ai" className="flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors">
                <Mail className="w-5 h-5" />
                chris@torqueapp.ai
              </a>
              <a href="tel:+16467606991" className="flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors">
                <Phone className="w-5 h-5" />
                +1 646-760-6991
              </a>
            </div>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-5 text-slate-900">Get in touch</h3>
            <ZohoTorqueAIForm />
            <Button 
              className="mt-5 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold"
              onClick={() => setIsContactFormOpen(true)}
            >
              Book a Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Calendly Booking */}
      <div className="bg-white border-t border-slate-100">
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
