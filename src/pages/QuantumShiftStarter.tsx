import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { motion } from "framer-motion";
import { useEffect } from "react";
import chrisDessi from "@/assets/chris-dessi-headshot.jpg";

const QuantumShiftStarter = () => {
  useEffect(() => {
    // Load Zoho Campaigns script
    const script = document.createElement('script');
    script.src = 'https://idzlf-zgpl.maillist-manage.com/js/optin.min.js';
    script.onload = () => {
      if (window.setupSF) {
        window.setupSF('sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa', 'ZCFORMVIEW', false, 'light', false, '0');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-slate-950 to-blue-900/20">
        {/* Dynamic background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
              backgroundSize: '200% 200%',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <motion.div {...fadeInUp}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-50"></div>
                  <p className="relative text-sm font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 uppercase px-4 py-2">
                    The Quantum Shift Project
                  </p>
                </div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground">Start Your</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
                  Quantum Shift
                </span>
              </h1>
              
              <motion.p 
                className="mt-6 text-lg sm:text-xl text-slate-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                A free 30-minute guided transformation session to help you <span className="text-purple-300 font-semibold">break a limiting pattern</span>,
                get clear on what you really want, and leave with an aligned action plan for your life and business.
              </motion.p>

              <motion.div 
                className="mt-8 space-y-4 text-base text-slate-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start gap-3 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-md group-hover:bg-purple-500/40 transition-all"></div>
                    <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-sm font-bold text-white shadow-lg">1</span>
                  </div>
                  <p className="flex-1 pt-1">Join the Quantum Shift email list for weekly reflections, tools, and invitations.</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-md group-hover:bg-blue-500/40 transition-all"></div>
                    <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-bold text-white shadow-lg">2</span>
                  </div>
                  <p className="flex-1 pt-1">Reserve your free 30-minute Quantum Shift Starter Session.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Opt-in Card */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-card/80 border border-border rounded-2xl p-6 shadow-2xl backdrop-blur"
            >
              {/* Zoho Campaigns Web-Optin Form */}
              <div 
                id="sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa" 
                data-type="signupform" 
                style={{ opacity: 1 }}
              >
                <div id="customForm">
                  <div 
                    className="quick_form_2_css" 
                    style={{ 
                      border: '3px solid rgb(0, 0, 0)', 
                      backgroundColor: 'rgb(220, 220, 220)', 
                      width: '100%',
                      maxWidth: '574px',
                      zIndex: 2, 
                      fontFamily: 'Arial', 
                      overflow: 'hidden',
                      margin: '0 auto'
                    }} 
                    data-name="SIGNUP_BODY"
                  >
                    <div style={{ textAlign: 'center' }}>
                      <div 
                        style={{ 
                          fontSize: '24px', 
                          fontFamily: 'Calibri', 
                          fontWeight: 'bold', 
                          color: 'rgb(0, 0, 0)', 
                          textAlign: 'center', 
                          padding: '15px 0px', 
                          width: '100%', 
                          display: 'block', 
                          backgroundColor: 'rgb(235, 235, 235)' 
                        }} 
                        id="SIGNUP_HEADING"
                      >
                        Step 1 – Join the Quantum Shift List
                        <br />
                        <br />
                        Drop your name and email to get weekly Quantum Shift insights, podcast highlights, and early access to live sessions—then you'll be able to book your free 30-minute session.
                        <br />
                        <br />
                      </div>
                      <div style={{ position: 'relative' }}>
                        <div 
                          id="Zc_SignupSuccess" 
                          style={{ 
                            display: 'none', 
                            position: 'absolute', 
                            marginLeft: '4%', 
                            width: '90%', 
                            backgroundColor: 'white', 
                            padding: '3px', 
                            border: '3px solid rgb(194, 225, 154)', 
                            marginTop: '10px', 
                            marginBottom: '10px', 
                            wordBreak: 'break-all' 
                          }}
                        >
                          <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                            <tbody>
                              <tr>
                                <td width="10%">
                                  <img 
                                    className="successicon" 
                                    src="https://idzlf-zgpl.maillist-manage.com/images/challangeiconenable.jpg" 
                                    alt="Success"
                                  />
                                </td>
                                <td>
                                  <span 
                                    id="signupSuccessMsg" 
                                    style={{ 
                                      color: 'rgb(73, 140, 132)', 
                                      fontFamily: 'sans-serif', 
                                      fontSize: '14px', 
                                      wordBreak: 'break-word' 
                                    }}
                                  >
                                    &nbsp;&nbsp;Thank you for Signing Up
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <form 
                        method="POST" 
                        id="zcampaignOptinForm" 
                        style={{ margin: '0px', width: '100%', color: 'rgb(255, 255, 255)' }} 
                        action="https://idzlf-zgpl.maillist-manage.com/weboptin.zc" 
                        target="_zcSignup"
                      >
                        <div 
                          style={{ 
                            backgroundColor: 'rgb(255, 235, 232)', 
                            padding: '10px', 
                            color: 'rgb(210, 0, 0)', 
                            fontSize: '11px', 
                            margin: '20px 10px 0px', 
                            border: '1px solid rgb(255, 217, 211)', 
                            opacity: 1, 
                            display: 'none' 
                          }} 
                          id="errorMsgDiv"
                        >
                          Please correct the marked field(s) below.
                        </div>
                        <div style={{ position: 'relative', width: '218px', height: '30px', marginTop: '20px', display: 'inline-block' }}>
                          <input 
                            type="text" 
                            style={{ 
                              fontSize: '12px', 
                              borderWidth: '1px', 
                              borderColor: 'rgb(235, 235, 235)', 
                              borderStyle: 'solid', 
                              width: '100%', 
                              height: '100%', 
                              zIndex: 4, 
                              outline: 'none', 
                              boxSizing: 'border-box', 
                              padding: '5px 10px', 
                              color: 'rgb(136, 136, 136)', 
                              textAlign: 'center', 
                              fontFamily: 'Arial', 
                              borderRadius: '5px' 
                            }} 
                            placeholder="Email" 
                            name="CONTACT_EMAIL" 
                            id="EMBED_FORM_EMAIL_LABEL" 
                          />
                        </div>
                        <div style={{ position: 'relative', width: '218px', height: '30px', marginTop: '20px', display: 'inline-block' }}>
                          <input 
                            type="text" 
                            style={{ 
                              fontSize: '12px', 
                              borderWidth: '1px', 
                              borderColor: 'rgb(235, 235, 235)', 
                              borderStyle: 'solid', 
                              width: '100%', 
                              height: '100%', 
                              zIndex: 4, 
                              outline: 'none', 
                              padding: '5px 10px', 
                              boxSizing: 'border-box', 
                              color: 'rgb(136, 136, 136)', 
                              textAlign: 'center', 
                              fontFamily: 'Arial', 
                              borderRadius: '5px' 
                            }} 
                            placeholder="Name" 
                            name="FIRSTNAME" 
                            id="FIRSTNAME" 
                          />
                        </div>
                        <div style={{ position: 'relative', width: '100%', maxWidth: '516px', height: '48px', margin: '20px auto 15px', display: 'block' }}>
                          <input 
                            type="button" 
                            style={{ 
                              textAlign: 'center', 
                              width: '100%', 
                              height: '100%', 
                              zIndex: 5, 
                              border: '0px', 
                              color: 'rgb(255, 255, 255)', 
                              borderRadius: '2px', 
                              cursor: 'pointer', 
                              outline: 'none', 
                              fontSize: '14px', 
                              backgroundColor: 'rgb(0, 0, 0)' 
                            }} 
                            name="SIGNUP_SUBMIT_BUTTON" 
                            id="zcWebOptin" 
                            value="Join the Quantum Shift List" 
                          />
                        </div>
                        <input type="hidden" id="fieldBorder" value="" />
                        <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                        <input type="hidden" id="emailReportId" name="emailReportId" value="" />
                        <input type="hidden" id="formType" name="formType" value="QuickForm" />
                        <input type="hidden" name="zx" id="cmpZuid" value="1316ccdc8" />
                        <input type="hidden" name="zcvers" value="3.0" />
                        <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                        <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                        <input type="hidden" id="zcld" name="zcld" value="110489827e27f87e8" />
                        <input type="hidden" id="zctd" name="zctd" value="110489827e26e63c1" />
                        <input type="hidden" id="document_domain" value="" />
                        <input type="hidden" id="zc_Url" value="idzlf-zgpl.maillist-manage.com" />
                        <input type="hidden" id="new_optin_response_in" value="0" />
                        <input type="hidden" id="duplicate_optin_response_in" value="0" />
                        <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                        <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa" />
                        <input type="hidden" id="viewFrom" value="URL_ACTION" />
                        <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                        <span style={{ display: 'none' }} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                        <span style={{ display: 'none' }} id="dt_LASTNAME">1,false,1,Last Name,2</span>
                      </form>
                    </div>
                  </div>
                </div>
                <img 
                  src="https://idzlf-zgpl.maillist-manage.com/images/spacer.gif" 
                  id="refImage" 
                  onLoad={(e) => {
                    if ((window as any).referenceSetter) {
                      (window as any).referenceSetter(e.target);
                    }
                  }}
                  style={{ display: 'none' }} 
                />
              </div>
              <input type="hidden" id="signupFormType" value="QuickForm_Vertical" />
              <div 
                id="zcOptinOverLay" 
                onContextMenu={() => false} 
                style={{ 
                  display: 'none', 
                  textAlign: 'center', 
                  backgroundColor: 'rgb(0, 0, 0)', 
                  opacity: 0.5, 
                  zIndex: 100, 
                  position: 'fixed', 
                  width: '100%', 
                  top: '0px', 
                  left: '0px', 
                  height: '988px' 
                }}
              />
              <div 
                id="zcOptinSuccessPopup" 
                style={{ 
                  display: 'none', 
                  zIndex: 9999, 
                  width: '800px', 
                  height: '40%', 
                  top: '84px', 
                  position: 'fixed', 
                  left: '26%', 
                  backgroundColor: '#FFFFFF', 
                  borderColor: '#E6E6E6', 
                  borderStyle: 'solid', 
                  borderWidth: '1px', 
                  boxShadow: '0 1px 10px #424242', 
                  padding: '35px' 
                }}
              >
                <span 
                  style={{ 
                    position: 'absolute', 
                    top: '-16px', 
                    right: '-14px', 
                    zIndex: 99999, 
                    cursor: 'pointer' 
                  }} 
                  id="closeSuccess"
                >
                  <img src="https://idzlf-zgpl.maillist-manage.com/images/videoclose.png" alt="Close" />
                </span>
                <div id="zcOptinSuccessPanel"></div>
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
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-10"></div>
              <img
                src={chrisDessi}
                alt="Chris Dessi - Quantum Shift Guide and Transformation Coach"
                className="w-full h-full object-cover relative z-0"
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
