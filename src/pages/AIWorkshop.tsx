import { motion } from "framer-motion";
import { Check, Play, Calendar, MapPin, Clock, Laptop, FileText, Users, Mail, ChevronDown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

// Declare the custom Stripe element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'pricing-table-id': string;
        'publishable-key': string;
      };
    }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="border border-border/50 rounded-2xl bg-card/30 overflow-hidden"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left font-bold flex items-center justify-between"
      >
        {question}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const AIWorkshop = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="AI for Business Operators Workshop"
        description="A hands-on, no-jargon workshop that turns AI into real leverage for your business—workflows, decisions, and execution (not random prompts)."
        keywords="AI workshop, business operators, AI training, workflow automation, AI for business"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_50%_-10%,rgba(110,231,255,0.14),transparent_60%),radial-gradient(ellipse_900px_600px_at_50%_120%,rgba(155,123,255,0.12),transparent_55%)]" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-start"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Left Column */}
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-3 py-2 border border-border/50 rounded-full bg-white/[0.03] text-muted-foreground font-semibold tracking-wide text-xs mb-4">
                IN-PERSON • LIMITED SEATS • OPERATOR-FOCUSED
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black leading-[1.03] mb-4">
                AI for Business Operators
              </h1>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-[52ch]">
                A hands-on, no-jargon workshop that turns AI into real leverage for your business—
                workflows, decisions, and execution (not random prompts).
              </p>
              
              <ul className="space-y-2 mb-6 pl-5 list-disc marker:text-primary/70">
                <li>Rebuild 1 core workflow with AI (Sales, Marketing, Ops, or Customer Comms)</li>
                <li>Leave with an "AI SOP" you can deploy Monday</li>
                <li>Get a 30-day rollout plan (so it sticks)</li>
              </ul>
              
              <div className="flex flex-wrap gap-3 items-center mb-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[rgba(110,231,255,0.22)] to-[rgba(155,123,255,0.18)] border border-white/20 hover:shadow-lg"
                  onClick={() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Reserve a Seat
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="bg-white/[0.03] border border-border/50"
                  onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See the Curriculum
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground font-semibold text-sm">
                <span>✅ In-person</span>
                <span>✅ Practical</span>
                <span>✅ Built for owners + operators</span>
              </div>
            </motion.div>
            
            {/* Right Column - Video Card */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-border/50 rounded-2xl p-4 shadow-lg">
                <p className="text-muted-foreground font-bold text-xs tracking-wide mb-3">
                  Welcome from Chris (30–45 sec)
                </p>
                
                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden border border-border/50 bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/yX_uAy2fcRI"
                    title="Welcome from Chris"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                <div className="mt-4 border border-border/50 rounded-xl p-4 bg-black/20">
                  <p className="font-extrabold mb-2">Next Session</p>
                  <div className="text-muted-foreground text-sm grid gap-1">
                    <p><Calendar className="w-4 h-4 inline mr-2" />Date: TBD</p>
                    <p><Clock className="w-4 h-4 inline mr-2" />Time: TBD</p>
                    <p><MapPin className="w-4 h-4 inline mr-2" />Location: TBD</p>
                  </div>
                  <p className="mt-3 text-muted-foreground text-sm">
                    Seats are capped to keep it hands-on.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Outcomes Strip */}
      <section className="py-6 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-3">
          {[
            { label: "Outcome", value: "Less noise", desc: "Clear inputs, clearer outputs, fewer wasted cycles." },
            { label: "Outcome", value: "Faster execution", desc: "SOPs, drafts, decisions—compressed into hours." },
            { label: "Outcome", value: "Real leverage", desc: "AI that supports humans—without chaos." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="border border-border/50 rounded-2xl bg-card/30 p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-muted-foreground font-extrabold text-xs tracking-wide">{item.label}</p>
              <p className="text-xl font-black my-2">{item.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Who This Is For */}
      <section className="py-14 px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-black mb-3">
              Who this is for
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base leading-relaxed max-w-[75ch] mb-6">
              This is built for people responsible for outcomes—owners, execs, and operators who want AI to
              reduce friction and increase throughput, not add another tool to babysit.
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div variants={fadeInUp} className="bg-card/30 border border-border/50 rounded-2xl p-5">
                <h3 className="font-black text-lg mb-3">Perfect if you're a…</h3>
                <ul className="space-y-2 pl-5 list-disc marker:text-primary/70">
                  <li>Owner / President / GM</li>
                  <li>COO / Ops Director</li>
                  <li>Head of Sales, Marketing, or Customer Success</li>
                  <li>Agency / studio / services operator</li>
                </ul>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="bg-card/30 border border-border/50 rounded-2xl p-5">
                <h3 className="font-black text-lg mb-3">Not ideal if…</h3>
                <ul className="space-y-2 pl-5 list-disc marker:text-muted-foreground">
                  <li>You want coding / model training</li>
                  <li>You're looking for "AI hype" or generic prompts</li>
                  <li>You're not planning to implement anything this month</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Curriculum Section */}
      <section id="curriculum" className="py-14 px-5 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-black mb-3">
              What you'll learn
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
              A practical system you can reuse across your business.
            </motion.p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { num: "1", title: "AI in plain English", desc: "What it is, what it isn't, where it fails, and how to use it safely in business." },
                { num: "2", title: "The Operator Prompt System", desc: "Inputs → constraints → examples → format → QA. Build a reusable prompt library." },
                { num: "3", title: "High-value use cases", desc: "SOPs, meeting compression, customer comms, content briefs, proposals, decision docs." },
                { num: "4", title: "Build 1 workflow live", desc: "Bring a real process. Leave with an AI SOP + checklist + templates you can deploy." },
                { num: "5", title: "Governance & risk", desc: "What not to paste, privacy basics, team rules, and human-in-the-loop approvals." },
                { num: "6", title: "30-day rollout plan", desc: "Pick 1 KPI, 1 workflow, and a weekly cadence so it actually sticks." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="bg-card/30 border border-border/50 rounded-2xl p-5"
                >
                  <h3 className="font-black text-lg mb-2">{item.num}) {item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            {/* What you walk out with */}
            <motion.div 
              variants={fadeInUp}
              className="mt-6 border border-[rgba(110,231,255,0.20)] bg-[rgba(110,231,255,0.08)] rounded-2xl p-5"
            >
              <h3 className="font-black text-lg mb-3">What you walk out with</h3>
              <ul className="space-y-2 pl-5 list-disc marker:text-primary/70">
                <li>Your personal AI Operator Playbook</li>
                <li>10–20 prompts tailored to your role</li>
                <li>1 workflow rebuilt (AI SOP + checklist + templates)</li>
                <li>A clear 30-day implementation plan</li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-6 flex justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[rgba(110,231,255,0.22)] to-[rgba(155,123,255,0.18)] border border-white/20"
                onClick={() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Reserve a Seat
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Logistics Section */}
      <section className="py-14 px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-black mb-6">
              Logistics
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div variants={fadeInUp} className="bg-card/30 border border-border/50 rounded-2xl p-5">
                <h3 className="font-black text-lg mb-3">When & where</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Calendar className="w-4 h-4 inline mr-2" /><b className="text-foreground">Date:</b> TBD</li>
                  <li><Clock className="w-4 h-4 inline mr-2" /><b className="text-foreground">Time:</b> TBD</li>
                  <li><Clock className="w-4 h-4 inline mr-2" /><b className="text-foreground">Duration:</b> 6 hours (with breaks)</li>
                  <li><MapPin className="w-4 h-4 inline mr-2" /><b className="text-foreground">Location:</b> TBD</li>
                </ul>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="bg-card/30 border border-border/50 rounded-2xl p-5">
                <h3 className="font-black text-lg mb-3">What to bring</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Laptop className="w-4 h-4 inline mr-2" /><b className="text-foreground">Laptop</b> (required)</li>
                  <li><FileText className="w-4 h-4 inline mr-2" /><b className="text-foreground">Your #1 workflow</b> you want to improve</li>
                  <li><FileText className="w-4 h-4 inline mr-2" /><b className="text-foreground">Any existing SOPs / templates</b> (optional)</li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-4 border-l-4 border-[rgba(110,231,255,0.45)] p-4 bg-[rgba(110,231,255,0.06)] rounded-xl text-muted-foreground"
            >
              <strong>Privacy note:</strong> You'll learn safe usage guidelines. You should never paste sensitive customer data.
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-14 px-5 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-black mb-2">
              Tickets
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
              Choose your level of support — every ticket includes exclusive bonuses.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <stripe-pricing-table 
                pricing-table-id="prctbl_1SnjBtG7cympBc4IilDhbs7Y"
                publishable-key="pk_live_51Qn6VFG7cympBc4IA08eEyFC0UcNTBmHxl4SvxBr2nQugXsezKLcEiKdEcmdeTLxbYNQIXnhnrXtHNTvoribSpV700GFoEAA3a"
              />
            </motion.div>
            
            {/* Bonus Value Cards */}
            <motion.div variants={fadeInUp} className="mt-10 grid md:grid-cols-3 gap-6">
              {/* Standard Seat */}
              <div className="relative bg-card/30 border border-border/50 rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-3 right-3 bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">
                  $1,194 VALUE
                </div>
                <h3 className="font-black text-xl mb-1">Standard Seat</h3>
                <p className="text-2xl font-black text-primary mb-4">$497</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Westchester AI Alliance Membership</p>
                      <p className="text-muted-foreground">$995 Value — <span className="text-green-400 font-semibold">FREE</span></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Westchester AI Summit Ticket</p>
                      <p className="text-muted-foreground">$199 Value — <span className="text-green-400 font-semibold">FREE</span> (Spring 2025)</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">You save <span className="text-green-400 font-bold">$697</span> vs. buying separately</p>
              </div>
              
              {/* VIP Seat */}
              <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40 rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  $3,489 VALUE
                </div>
                <div className="absolute -top-1 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-b-lg">
                  BEST VALUE
                </div>
                <h3 className="font-black text-xl mb-1 mt-2">VIP Seat</h3>
                <p className="text-2xl font-black text-primary mb-4">$997</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">WAIA Business Membership (5 seats)</p>
                      <p className="text-muted-foreground">$2,495 Value — <span className="text-green-400 font-semibold">FREE</span></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">5 Westchester AI Summit Tickets</p>
                      <p className="text-muted-foreground">$995 Value — <span className="text-green-400 font-semibold">FREE</span></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Priority 1:1 time with Chris</p>
                      <p className="text-muted-foreground">Industry-tailored examples</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">You save <span className="text-green-400 font-bold">$2,492</span> vs. buying separately</p>
              </div>
              
              {/* Team Pack */}
              <div className="relative bg-card/30 border border-border/50 rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-3 right-3 bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">
                  $9,990+ VALUE
                </div>
                <h3 className="font-black text-xl mb-1">Team Pack</h3>
                <p className="text-2xl font-black text-primary mb-4">$2,497</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">WAIA Corporate Membership</p>
                      <p className="text-muted-foreground">$7,500 Value — <span className="text-green-400 font-semibold">FREE</span></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">10 Westchester AI Summit Tickets</p>
                      <p className="text-muted-foreground">$1,990 Value — <span className="text-green-400 font-semibold">FREE</span></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Summit Sponsorship</p>
                      <p className="text-muted-foreground">Brand visibility — <span className="text-green-400 font-semibold">FREE</span></p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">You save <span className="text-green-400 font-bold">$7,493+</span> vs. buying separately</p>
              </div>
            </motion.div>
            
            {/* Urgency Banner */}
            <motion.div 
              variants={fadeInUp} 
              className="mt-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-2xl p-6 text-center"
            >
              <p className="text-lg font-bold mb-2">
                🚀 Limited seats available — These bonuses are only valid for early registrants
              </p>
              <p className="text-muted-foreground">
                Lock in your spot now and get <span className="text-primary font-semibold">instant access</span> to the Westchester AI Alliance community while you wait for the workshop.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Reserve Section */}
      <section id="reserve" className="py-14 px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-black mb-6">
              Reserve your seat
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Info Side */}
              <motion.div variants={fadeInUp}>
                <div className="border border-[rgba(110,231,255,0.20)] bg-[rgba(110,231,255,0.08)] rounded-2xl p-5 mb-4">
                  <h3 className="font-black text-lg mb-3">What I'll tailor for you</h3>
                  <ul className="space-y-2 pl-5 list-disc marker:text-primary/70">
                    <li>Your industry-specific examples</li>
                    <li>Your workflow (the one you bring)</li>
                    <li>Your output formats (SOPs, scripts, proposals, decision docs)</li>
                    <li>Your risk boundaries (privacy + governance)</li>
                  </ul>
                </div>
                
                <div className="bg-card/30 border border-border/50 rounded-2xl p-5">
                  <h3 className="font-black text-lg mb-2">Prefer to talk first?</h3>
                  <p className="text-muted-foreground mb-3">Book a quick call to see if this is right for you.</p>
                  <Button 
                    variant="ghost" 
                    className="bg-white/[0.03] border border-border/50"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Book 15 minutes
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-14 px-5 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-black mb-6">
              FAQ
            </motion.h2>
            
            <div className="grid gap-3 max-w-3xl">
              <FAQItem 
                question="Do I need to be 'good at tech'?"
                answer="No. This is for operators. If you can run a business, you can run these workflows."
              />
              <FAQItem 
                question="What tools do we use?"
                answer="We'll focus on the system. We'll use mainstream tools (like ChatGPT) and show how to apply them safely."
              />
              <FAQItem 
                question="Will you try to sell me something?"
                answer="No pressure. If you want help implementing after you see what works, we can talk."
              />
              <FAQItem 
                question="Can I bring my team?"
                answer="Yes. Teams implement faster. Use the Team Pack or reach out for a private session."
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 px-5 bg-[radial-gradient(ellipse_900px_600px_at_50%_-10%,rgba(110,231,255,0.14),transparent_60%),radial-gradient(ellipse_900px_600px_at_50%_120%,rgba(155,123,255,0.12),transparent_55%)]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-black mb-3">
              Clarity first. Execution next.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-6 max-w-[60ch] mx-auto">
              Reserve your seat and bring the workflow you want to fix.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[rgba(110,231,255,0.22)] to-[rgba(155,123,255,0.18)] border border-white/20"
                onClick={() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Reserve a Seat
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="bg-white/[0.03] border border-border/50"
                asChild
              >
                <a href="mailto:hello@torqueapp.ai">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Questions
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIWorkshop;
