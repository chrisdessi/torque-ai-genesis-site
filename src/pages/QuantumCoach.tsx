import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Target, TrendingUp, Users, Zap, ArrowRight, Sparkles, Crown, CalendarDays, Mail, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import garyVeeImage from "@/assets/gary-vee.png";
import quantumCoachLogo from "@/assets/quantum-coach-logo.png";

const QuantumCoach = () => {
  const [slotsRemaining] = useState(8);

  const pricingTiers = [
    {
      name: "Growth Leader",
      price: "$15,000",
      cadence: "6 months",
      bestFor: "Rising executives ready for structured momentum.",
      features: [
        "12 biweekly 60‑min sessions",
        "Strategic goal mapping",
        "Leadership assessment",
        "Asynchronous support between sessions",
      ],
      highlight: false,
    },
    {
      name: "High‑Impact Executive",
      price: "$20,000",
      cadence: "6 months",
      bestFor: "Operators who need speed, clarity, and stakeholder alignment.",
      features: [
        "12 sessions + 2 emergency calls",
        "360° feedback process",
        "Stakeholder communication strategy",
        "Quarterly strategy review",
      ],
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Elite CEO",
      price: "$25,000",
      cadence: "6 months",
      bestFor: "CEOs who want hands‑on alignment and priority access.",
      features: [
        "12 sessions + 1 in‑person strategy day",
        "Org alignment audit",
        "Unlimited messaging + priority access",
        "Executive communications coaching",
      ],
      highlight: false,
    },
  ];

  const addOns = [
    {
      title: "Offsite Facilitation",
      price: "$5,000–$10,000",
      desc: "Half or full‑day leadership strategy retreat with clear outcomes.",
      icon: CalendarDays,
    },
    {
      title: "Team 360 Review",
      price: "$3,000",
      desc: "Confidential stakeholder interviews, synthesis, and recommendations.",
      icon: Users,
    },
    {
      title: "Keynote Workshop",
      price: "$7,500+",
      desc: "High‑energy, practical session tailored to your team's priorities.",
      icon: MessageSquare,
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Clarity",
      description: "Cut through the noise and focus on what moves the needle for your business and career."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Revenue Growth",
      description: "Learn the exact frameworks Chris used to close $32M in enterprise deals."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership Impact",
      description: "Build high-performing teams that execute with speed and confidence."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Decision Velocity",
      description: "Make better decisions faster and eliminate costly delays."
    }
  ];

  const outcomes = [
    "Clear 90-day action plan with measurable milestones",
    "Weekly accountability and strategic guidance",
    "Access to proven frameworks from $32M in closed deals",
    "Direct feedback on your toughest leadership challenges",
    "Private executive roundtable invitations",
    "Recorded sessions for your leadership team"
  ];

  const testimonials = [
    {
      quote: "Chris helped me see the gaps in my decision-making process. Revenue jumped 40% in six months.",
      author: "Sarah Chen",
      role: "CEO, SaaS Platform"
    },
    {
      quote: "The clarity I gained in our first session was worth 10x the investment. Chris doesn't pull punches.",
      author: "Michael Roberts",
      role: "VP of Sales, Enterprise Software"
    },
    {
      quote: "Best coaching investment I've made. Chris brings real-world battle scars and actionable frameworks.",
      author: "Jennifer Martinez",
      role: "Chief Revenue Officer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-gradient-to-r from-purple-600 to-pink-600 py-3 px-4 flex items-center justify-between z-40 backdrop-blur-sm">
        <div className="text-sm md:text-base font-medium text-white">
          First session: $199 · {slotsRemaining} slots remaining this month
        </div>
        <Button asChild className="bg-white text-purple-900 hover:bg-white/90">
          <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
            Book Your Session
          </a>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 text-white pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <img 
              src={quantumCoachLogo} 
              alt="Quantum Coach Logo" 
              className="h-24 mx-auto mb-8"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Quantum Coach with Chris Dessi
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Stop wondering what to do next. Start executing.
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Work 1-on-1 with Chris Dessi—author, TV commentator, and the leader who personally closed 
                <span className="font-semibold"> $32 million in enterprise deals</span> in two years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-purple-900 hover:bg-white/90">
                  <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
                    Book First Session — $199
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-white/30 text-white hover:bg-white/10">
                  <a href="#outcomes">See What You'll Get</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>60-minute deep dive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Actionable playbook</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>No fluff</span>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
              <h3 className="text-xl font-semibold mb-6 text-white">First Session Preview</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Strategic Audit</p>
                    <p className="text-sm text-white/80">We'll map your current state, growth blockers, and hidden leverage points.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Decision Framework</p>
                    <p className="text-sm text-white/80">Learn the exact criteria Chris uses to evaluate opportunities and cut noise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">30-Day Roadmap</p>
                    <p className="text-sm text-white/80">Walk away with three clear actions and measurable milestones.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={garyVeeImage} 
                    alt="Gary Vaynerchuk" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-white/90 italic mb-2">
                      "One 15 minute meeting with Chris made me millions"
                    </p>
                    <p className="text-xs font-semibold text-white">— Gary Vaynerchuk</p>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  <span className="font-semibold text-white">{slotsRemaining} spots</span> remain this month
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Transform</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real coaching for leaders who want results, not theory.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-purple-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See What Quantum Coaching Can Do</h2>
            <p className="text-xl text-muted-foreground">
              Watch Chris break down the frameworks that drive real results
            </p>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/p2RwQVKvRbQ?si=pTNKfb73unZudx24" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Pricing Hero */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-fuchsia-600" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-indigo-600" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> Premium Executive Coaching
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Lead with alignment. Deliver with velocity.
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              I help founders and executives turn difficult moments into decisive moves. Most clients see a
              <span className="font-semibold"> 5–10× ROI </span>
              within 90 days through clearer decisions, tighter operating rhythms, and courageous communication.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Button size="lg" asChild className="bg-white text-purple-900 hover:bg-white/90">
                <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
                  Book a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white/30 text-white hover:bg-white/10">
                <a href="mailto:chris@torqueapp.ai?subject=Coaching%20Inquiry">
                  <Mail className="mr-2 w-4 h-4" /> Email Chris
                </a>
              </Button>
            </div>
            <p className="text-sm text-white/60">Median market rate: $717/hr — You're buying outcomes, not hours.</p>
          </motion.div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="border-y border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-sm text-muted-foreground">
          <div>Author & TV Commentator</div>
          <div>Led $32M+ sales impact</div>
          <div>Coached CEOs & Founders</div>
          <div>Keynotes & Offsites</div>
        </div>
      </section>

      {/* Hourly & Retainer */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Hourly */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 bg-card border-border h-full">
                <h3 className="text-2xl font-semibold mb-3">Power Session (Hourly)</h3>
                <p className="text-muted-foreground mb-4">60–90 minute intensive to get unstuck fast.</p>
                <div className="text-4xl font-bold mb-6">
                  $950–$1,250 <span className="text-base font-normal text-muted-foreground">per hour</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Rapid clarity & decision support",
                    "Executive‑level frameworks you can use immediately",
                    "Action plan within 24 hours",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
                      Book a Session <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://forms.gle/AxBiRBtCXsAgRfKN7" target="_blank" rel="noopener noreferrer">
                      Ask a Question
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Retainer */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Card className="p-8 bg-card border-border h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-semibold">Executive Advisory Retainer</h3>
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-600/30 bg-purple-600/10 px-3 py-1 text-xs font-medium">
                    <Crown className="w-3.5 h-3.5" /> Premium
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">Two calls per month + ongoing support. Be decisive, faster.</p>
                <div className="text-4xl font-bold mb-6">
                  $3,500–$5,000 <span className="text-base font-normal text-muted-foreground">per month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Two 60‑min calls / month",
                    "On‑demand Slack/email access",
                    "Quarterly strategy review & recalibration",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
                      Discuss Retainer <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://forms.gle/AxBiRBtCXsAgRfKN7" target="_blank" rel="noopener noreferrer">
                      Request Details
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6-Month Packages */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-6 h-6 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold">6‑Month Executive Packages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className={
                  "relative p-8 h-full " +
                  (tier.highlight
                    ? "border-purple-600/50 bg-gradient-to-br from-purple-900/20 to-pink-900/20"
                    : "bg-card border-border")
                }>
                  {tier.badge && (
                    <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-xs font-medium text-white">
                      {tier.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground mb-4">{tier.bestFor}</p>
                  <div className="text-4xl font-bold mb-6">
                    {tier.price} <span className="text-base font-normal text-muted-foreground">/{tier.cadence}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
                      Start {tier.name} <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Add-On Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, idx) => {
              const Icon = addon.icon;
              return (
                <motion.div
                  key={addon.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Card className="p-6 bg-card border-border h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{addon.title}</h3>
                    <div className="text-2xl font-bold text-purple-600 mb-3">{addon.price}</div>
                    <p className="text-muted-foreground">{addon.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              <a href="https://forms.gle/AxBiRBtCXsAgRfKN7" target="_blank" rel="noopener noreferrer">
                Inquire About Add-Ons <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What's Included in Your First Session
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                This isn't a sales call. This isn't a therapy session. This is a strategic deep dive 
                that produces a clear action plan you can start executing immediately.
              </p>
              <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
                  Claim Your Spot — $199
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
            <Card className="p-8 bg-card border-border">
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Leaders Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Chris */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Chris Dessi</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Chris Dessi</span> is an author, 
                  television commentator, and growth leader who has built and led high-performing sales teams.
                </p>
                <p>
                  Over two years, Chris personally closed <span className="font-semibold text-foreground">$32 million</span> in 
                  enterprise deals. He's been in the trenches—navigating complex sales cycles, building teams from scratch, 
                  and scaling revenue in competitive markets.
                </p>
                <p>
                  Chris doesn't teach theory. He brings battle-tested frameworks, hard-won lessons, and direct feedback 
                  that cuts through the noise. If you're ready to move faster and win bigger, this is your coach.
                </p>
              </div>
            </div>
            <Card className="p-6 bg-gradient-to-br from-purple-900 to-pink-800 text-white border-0">
              <p className="text-sm italic">
                "Most leaders know what to do. They just don't know what to do first. That's what I solve."
              </p>
              <p className="mt-4 font-semibold">— Chris Dessi</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to move faster?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your first Quantum Coach session with Chris Dessi. 
            Walk away with a clear roadmap and the confidence to execute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
                Book Your Session — $199
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://forms.gle/AxBiRBtCXsAgRfKN7" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{slotsRemaining} spots</span> remain this month · 
            First session is 60 minutes · Recorded for your reference
          </p>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default QuantumCoach;
