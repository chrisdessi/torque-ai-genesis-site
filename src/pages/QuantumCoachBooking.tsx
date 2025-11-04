import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { motion } from "framer-motion";
import { Mic, Youtube, BookOpen, Calendar, Star, Play, Target, TrendingUp, Users, Zap, ArrowRight, Sparkles, Crown, CalendarDays, Mail, MessageSquare, Check } from "lucide-react";
import { Helmet } from "react-helmet";
import quantumCoachLogo from "@/assets/quantum-coach-logo.png";
import chrisFire from "@/assets/chris-fire.jpg";
import garyVeeImage from "@/assets/gary-vee.png";

const QuantumShift = () => {
  const [slotsRemaining] = useState(8);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const pricingTiers = [
    {
      name: "6-Month Executive Coaching Program",
      price: "$18,000",
      cadence: "flat fee",
      bestFor: "Your core executive coaching offer with serious commitment.",
      features: [
        "12 sessions (2 per month, 60-75 minutes each)",
        "Leadership assessment and personalized development plan",
        "Unlimited email/text support between sessions",
        "Optional stakeholder alignment call at midpoint",
      ],
      highlight: true,
      badge: "Most Popular",
      paymentNote: "Paid upfront or split in 2 payments of $9,000"
    },
    {
      name: "Startup Leadership Team Coaching",
      price: "$2,500",
      cadence: "per person",
      bestFor: "Group coaching program for leadership teams.",
      features: [
        "6 weekly 90-min sessions",
        "Team dynamics assessment & communication audit",
        "Action-focused accountability tracking",
        "Minimum 4 participants ($10,000 total per cohort)",
      ],
      highlight: false,
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

  const featuredVideos = [
    {
      title: "TEDx Talk: The Future of Leadership",
      url: "https://www.youtube.com/watch?v=FEm5c66Nylc",
      embedUrl: "https://www.youtube.com/embed/FEm5c66Nylc"
    },
    {
      title: "Client Success Stories",
      url: "https://www.youtube.com/playlist?list=PL1uIG3i2RBhFDyMDBxX7rEQtTKgrWaqdw",
      embedUrl: "https://www.youtube.com/embed/videoseries?list=PL1uIG3i2RBhFDyMDBxX7rEQtTKgrWaqdw"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3YB4QY7TVK"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3YB4QY7TVK');
            
            // Helper function to delay opening a URL until a gtag event is sent.
            // Call it in response to an action that should navigate to a URL.
            function gtagSendEvent(url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };
              gtag('event', 'purchase', {
                'event_callback': callback,
                'event_timeout': 2000,
                // <event_parameters>
              });
              return false;
            }
          `}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section with Video */}
      <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <iframe
              className="absolute inset-0 w-full h-full object-cover"
              src="https://www.youtube.com/embed/9J1Kauiq42g?autoplay=1&mute=1&loop=1&playlist=9J1Kauiq42g&controls=0&showinfo=0&rel=0"
              title="Chris Dessi TV Highlights"
              allow="autoplay; encrypted-media"
              style={{ pointerEvents: 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
          </div>
        </div>
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-6 py-3 mb-8">
              <span className="text-sm font-bold uppercase tracking-wider">Executive Coaching</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Transform Your<br />Leadership Today
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-3xl leading-relaxed font-light">
              Work directly with Chris Dessi
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
                onClick={() => window.open('https://buy.stripe.com/5kQdR983q9n90gd1w78g000', '_blank')}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book First Session - $199
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gary Vaynerchuk Testimonial */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="relative">
            <div className="absolute -top-8 -left-8 text-purple-200 text-9xl font-serif leading-none">"</div>
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 relative">
              <div className="flex items-center gap-3 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-3xl md:text-5xl font-bold text-black mb-12 leading-tight">
                One 15 minute meeting with Chris made me millions
              </blockquote>
              <div className="flex items-center gap-8">
                <img 
                  src={new URL('../assets/gary-vee-headshot.jpg', import.meta.url).href}
                  alt="Gary Vaynerchuk" 
                  className="w-40 h-40 rounded-full object-cover shadow-xl"
                />
                <div>
                  <div className="text-2xl font-bold text-black">Gary Vaynerchuk</div>
                  <div className="text-lg text-gray-600 mb-3">Entrepreneur & CEO, VaynerMedia</div>
                  <a 
                    href="https://www.instagram.com/stories/highlights/17984836850668488/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Watch Gary's Story on Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 text-purple-200 text-9xl font-serif leading-none">"</div>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
              onClick={() => window.open('https://buy.stripe.com/5kQdR983q9n90gd1w78g000', '_blank')}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book Your Session
            </Button>
          </motion.div>
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
              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeNpkn0hXvTXng4RJMiXoubwmRKZFKhh0gd1Q_EFMdyOufbRQ/viewform', '_blank')}>
                Book a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10" onClick={() => window.location.href = 'mailto:chris@torqueapp.ai?subject=Coaching%20Inquiry'}>
                <Mail className="mr-2 w-4 h-4" /> Email Chris
              </Button>
            </div>
            
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
                <h3 className="text-2xl font-semibold mb-3">Executive Strategy Intensive</h3>
                <p className="text-muted-foreground mb-4">90-minute session including pre-session questionnaire and follow-up summary with action plan.</p>
                <div className="text-4xl font-bold mb-6">
                  $1,200 <span className="text-base font-normal text-muted-foreground">per 90-minute session</span>
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
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeNpkn0hXvTXng4RJMiXoubwmRKZFKhh0gd1Q_EFMdyOufbRQ/viewform', '_blank')}>
                    Book a Session <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" onClick={() => window.open('https://forms.gle/AxBiRBtCXsAgRfKN7', '_blank')}>
                    Ask a Question
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
                  <h3 className="text-2xl font-semibold">12-Month CEO Mastery Partnership</h3>
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-600/30 bg-purple-600/10 px-3 py-1 text-xs font-medium">
                    <Crown className="w-3.5 h-3.5" /> Premium
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">White-glove advisory model for C-suite leaders and founders.</p>
                <div className="text-4xl font-bold mb-6">
                  $36,000 <span className="text-base font-normal text-muted-foreground">annual retainer</span>
                </div>
                <div className="text-sm text-muted-foreground mb-6">
                  or $3,500/month if paid monthly
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "24 sessions (2 per month)",
                    "Full assessment suite + quarterly business reviews",
                    "On-call access via phone/text",
                    "One in-person strategy day (NYC)",
                    "Optional team facilitation or board prep support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeNpkn0hXvTXng4RJMiXoubwmRKZFKhh0gd1Q_EFMdyOufbRQ/viewform', '_blank')}>
                    Discuss Retainer <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" onClick={() => window.open('https://forms.gle/AxBiRBtCXsAgRfKN7', '_blank')}>
                    Request Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coaching Packages */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-6 h-6 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Executive Coaching Packages</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                  <div className="text-4xl font-bold mb-2">
                    {tier.price} <span className="text-base font-normal text-muted-foreground">/{tier.cadence}</span>
                  </div>
                  {tier.paymentNote && (
                    <p className="text-sm text-muted-foreground mb-6">{tier.paymentNote}</p>
                  )}
                  <ul className="space-y-3 mb-8 mt-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeNpkn0hXvTXng4RJMiXoubwmRKZFKhh0gd1Q_EFMdyOufbRQ/viewform', '_blank')}>
                    Start {tier.name} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-16 px-6 bg-muted/30">
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
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" onClick={() => window.open('https://buy.stripe.com/5kQdR983q9n90gd1w78g000', '_blank')}>
                Claim Your Spot — $199
                <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* Chris Dessi Bio Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Meet Chris Dessi
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Chris Dessi is a business leader, author, and television commentator who has closed 
                <span className="font-bold text-black"> over $100 million in enterprise sales</span> in his nearly 30 year career.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                As a frequent Fox 5 contributor and thought leader, Chris brings battle-tested frameworks and 
                real-world experience to every coaching session.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                His approach is direct, actionable, and focused on results—helping executives and entrepreneurs 
                cut through the noise and execute with clarity.
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="w-full max-w-md relative">
                <motion.img 
                  src={chrisFire} 
                  alt="Chris Dessi" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  animate={{
                    filter: [
                      "brightness(1) contrast(1)",
                      "brightness(1.1) contrast(1.05)",
                      "brightness(0.95) contrast(0.98)",
                      "brightness(1.05) contrast(1.02)",
                      "brightness(1) contrast(1)"
                    ]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
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

      {/* Featured Videos Section */}
      <section className="bg-black py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Watch & Learn
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, strategies, and stories from Chris Dessi
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => window.open(video.url, '_blank')}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-20 h-20 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="mt-16 text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
              onClick={() => window.open('https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_', '_blank')}
            >
              <Youtube className="mr-3 h-6 w-6" />
              Watch The Quantum Shift Podcast
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Keynote Videos Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Keynote Speaking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformative presentations that inspire action
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/videoseries?list=PL1uIG3i2RBhEC7ZrhpvuGzvbc3W6JgopX"
              title="Chris Dessi Keynote Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
          <motion.div {...fadeInUp} className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
              onClick={() => window.open('https://www.youtube.com/playlist?list=PL1uIG3i2RBhEC7ZrhpvuGzvbc3W6JgopX', '_blank')}
            >
              <Youtube className="mr-3 h-6 w-6" />
              View All Keynote Videos
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Chris Section */}
      <section className="py-16 px-6 bg-white">
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

      {/* What You Get Section */}
      <section className="bg-muted/30 py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results. Real strategy. Real clarity.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "60-Minute Deep Dive",
                description: "Get clarity on your biggest challenge and a roadmap to solve it"
              },
              {
                icon: BookOpen,
                title: "Battle-Tested Frameworks",
                description: "Proven strategies from closing $32M in enterprise deals"
              },
              {
                icon: Calendar,
                title: "30-Day Action Plan",
                description: "Walk away with specific steps to implement immediately"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-card border-2 border-border rounded-2xl p-10 hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" onClick={() => window.open('https://buy.stripe.com/5kQdR983q9n90gd1w78g000', '_blank')}>
              Book Your Session — $199
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open('https://forms.gle/AxBiRBtCXsAgRfKN7', '_blank')}>
              Contact Us
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

export default QuantumShift;
