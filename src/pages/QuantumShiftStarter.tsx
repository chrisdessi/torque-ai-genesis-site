import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { motion } from "framer-motion";

const QuantumShiftStarter = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <SEO 
        title="Free Quantum Shift Starter Session - 30-Min Transformation with Chris Dessi | Westchester AI Coach"
        description="Book your free 30-minute Quantum Shift Starter Session with Chris Dessi, Westchester's master marketer and AI consultant. Break limiting patterns, clarify what you want, and design your next aligned step."
        keywords="quantum shift starter session, free coaching session Westchester, Chris Dessi coaching, transformation session, executive coaching Westchester NY, AI consulting Westchester, personal development, business coaching"
      />
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-slate-950"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <motion.div {...fadeInUp}>
              <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                The Quantum Shift Project
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
                Start Your <span className="text-primary">Quantum Shift</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">
                A free 30-minute guided transformation session to help you break a limiting pattern,
                get clear on what you really want, and leave with an aligned action plan for your life and business.
              </p>

              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">1</span>
                  Join the Quantum Shift email list for weekly reflections, tools, and invitations.
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-xs text-accent-foreground">2</span>
                  Reserve your free 30-minute Quantum Shift Starter Session.
                </p>
              </div>
            </motion.div>

            {/* Right: Opt-in Card */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-card/80 border border-border rounded-2xl p-6 shadow-2xl backdrop-blur"
            >
              <h2 className="text-xl font-semibold mb-2 text-foreground">Step 1 – Join the Quantum Shift List</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Drop your name and email to get weekly Quantum Shift insights, podcast highlights,
                and early access to live sessions—then you'll be able to book your free 30-minute session.
              </p>

              {/* Zoho Form Embed */}
              <div id="sf3z57e6a3f1fc4ef70c70b2fc3abcc7af8c9c25ce2e7cd5cb92f2d15dc4d5fbe37" data-type="signupform" style={{opacity: 1}}>
                <div id="customForm">
                  <input type="hidden" id="recapTheme" value="2" />
                  <input type="hidden" id="isRecapIntegDone" value="false" />
                  <input type="hidden" id="recapMode" value=""></input>
                  <div className="space-y-4" id="sf3z57e6a3f1fc4ef70c70b2fc3abcc7af8c9c25ce2e7cd5cb92f2d15dc4d5fbe37_rows">
                    <div>
                      <label htmlFor="CONTACT_FIRST_NAME" className="block text-xs font-medium text-muted-foreground mb-1">
                        First Name<span style={{color: 'rgb(255, 0, 0)'}}>*</span>
                      </label>
                      <input
                        type="text"
                        id="CONTACT_FIRST_NAME"
                        name="CONTACT_FIRST_NAME"
                        required
                        className="w-full rounded-lg bg-background border border-border px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Chris"
                      />
                    </div>
                    <div>
                      <label htmlFor="CONTACT_EMAIL" className="block text-xs font-medium text-muted-foreground mb-1">
                        Email<span style={{color: 'rgb(255, 0, 0)'}}>*</span>
                      </label>
                      <input
                        type="email"
                        id="CONTACT_EMAIL"
                        name="CONTACT_EMAIL"
                        required
                        className="w-full rounded-lg bg-background border border-border px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="you@example.com"
                      />
                    </div>

                    <button
                      type="button"
                      id="zcWebOptin"
                      className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
                    >
                      Join the Quantum Shift List
                    </button>

                    <p className="text-[11px] text-muted-foreground">
                      No spam. Just grounded, honest reflections, tools, and invitations to go deeper.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <h3 className="text-sm font-semibold mb-2 text-foreground">
                  Step 2 – Reserve Your Free Session
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Once you've joined the list, pick a time below for your free 30-minute
                  <span className="font-semibold text-primary"> Quantum Shift Starter Session</span>.
                </p>
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center w-full rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition"
                >
                  Scroll to Booking Calendar
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-background py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground"
          >
            What Happens in a Quantum Shift Starter Session
          </motion.h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            This isn't therapy, and it isn't hype. It's a grounded, honest conversation designed to
            help you see where you're stuck, what's really driving your patterns, and what wants to
            emerge through you next.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Break One Limiting Pattern",
                description: "Get curious about the story running your life and gently dismantle a belief that's no longer serving you."
              },
              {
                title: "Clarify What You Really Want",
                description: "Move beyond vague goals into a felt sense of the life, business, or creative work you're actually called to."
              },
              {
                title: "Design an Aligned Next Step",
                description: "Leave with one concrete, doable action that matches who you're becoming — not who you've been."
              },
              {
                title: "Get the Quantum Shift Guidebook",
                description: "A short PDF with core frameworks, questions, and practices to revisit whenever you feel yourself drifting."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <h3 className="text-sm font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="bg-background py-12 lg:py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground"
          >
            Most People Don't Need More Information — They Need a Shift
          </motion.h2>
          <p className="text-muted-foreground mb-4">
            You can binge podcasts, read every self-help book, and still feel like you're looping
            the same patterns. The Quantum Shift is about interrupting that loop.
          </p>
          <p className="text-muted-foreground mb-4">
            In this session, we're not trying to fix you. We're remembering who you are underneath the
            performance, the roles, the fear, and the noise — and then building from there.
          </p>
          <p className="text-muted-foreground">
            From that place, tools like AI, new business models, or career shifts stop being
            "hacks" and start becoming expressions of a truer version of you. We start with the human being, not the tactic.
          </p>
        </div>
      </section>

      {/* ABOUT CHRIS */}
      <section className="bg-background py-12 lg:py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-border shadow-xl mx-auto lg:mx-0">
              <img
                src="/lovable-uploads/85521d42-7840-4d81-b8ca-c002ab15932e.png"
                alt="Chris Dessi - Westchester Executive Coach and AI Consultant"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Meet Your Guide, Chris Dessi</h2>
            <p className="text-muted-foreground mb-3 text-sm">
              Chris is the creator of the Quantum Shift podcast and project — a conversation series
              exploring what happens when we stop living from fear and start living from truth.
            </p>
            <p className="text-muted-foreground mb-3 text-sm">
              After decades in high-pressure leadership roles, building companies, writing books,
              and navigating his own unraveling, Chris has become obsessed with one question:
              <span className="italic"> What actually creates lasting change?</span>
            </p>
            <p className="text-muted-foreground text-sm">
              The Quantum Shift Starter Session is his way of offering a grounded, no-fluff starting
              point for that journey — whether your next move is a career reinvention, a business
              pivot, or simply finding a calmer, truer way to move through your day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-12 lg:py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold mb-6 text-foreground"
          >
            What People Say About Quantum Shift Conversations
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "One conversation with Chris felt like someone finally turned the lights on in a room I'd been pacing in for years.",
                attribution: "— Executive, Tech Industry"
              },
              {
                quote: "He asks the questions I've been afraid to ask myself. I walked away with clarity and an action I could actually take.",
                attribution: "— Entrepreneur, Westchester"
              },
              {
                quote: "It wasn't hype. It was honest, grounded, and strangely calming. I left feeling more like myself.",
                attribution: "— Business Owner, New York"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-2xl p-4 flex flex-col justify-between"
              >
                <p className="text-sm text-foreground mb-3">"{testimonial.quote}"</p>
                <p className="text-xs text-muted-foreground mt-2">{testimonial.attribution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="bg-background py-12 lg:py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground"
          >
            Watch a Quantum Shift Conversation
          </motion.h2>
          <p className="text-muted-foreground mb-6 text-sm max-w-2xl">
            Get a feel for the tone, depth, and honesty of Quantum Shift. This is the energy we bring
            into your Starter Session — no performance, no posturing, just real conversation.
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video rounded-2xl overflow-hidden border border-border bg-black"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/rdJhEDassN4"
              title="Quantum Shift Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="bg-background py-12 lg:py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground">
                Reserve Your Free 30-Minute Quantum Shift Starter Session
              </h2>
              <p className="text-muted-foreground mb-4 text-sm">
                Sessions are limited each week so there's space for real conversation, not rushed calls.
                Pick a time that works for you and you'll get a confirmation email with all the details.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• 30 minutes on Zoom</li>
                <li>• No pitch required — just honest exploration</li>
                <li>• If it makes sense to go deeper, we'll talk about that at the end</li>
              </ul>
              <p className="text-xs text-muted-foreground italic">
                Pro tip: Bring a question you've been circling around but avoiding. That's usually where the shift lives.
              </p>
            </motion.div>
          </div>
        </div>
        
        <CalendlyEmbed 
          title="Book Your Free Quantum Shift Starter Session"
          description="Select a time that works best for you. You'll receive a confirmation email with all the details for your 30-minute transformation session."
        />
      </section>

      {/* FOOTER BRIDGE */}
      <section className="bg-background border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Once you're clear on who you are and what you want, AI becomes a powerful tool to help you create it.
            Inside the Quantum Shift list, you'll also get invitations to learn how we use AI to build the systems
            that support your new direction.
          </p>
          <a
            href="#top"
            className="text-xs text-primary hover:text-primary/80 underline-offset-4 hover:underline"
          >
            Back to top
          </a>
        </div>
      </section>

      <Footer />
      
      {/* Zoho Form Script */}
      <script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js"></script>
      <script 
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              if (window.setupSF) {
                setupSF('sf3z57e6a3f1fc4ef70c70b2fc3abcc7af8c9c25ce2e7cd5cb92f2d15dc4d5fbe37','ZCFORMVIEW',false,'light',false,'0');
              }
            });
          `
        }}
      />
    </>
  );
};

export default QuantumShiftStarter;
