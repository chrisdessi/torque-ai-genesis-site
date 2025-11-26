import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import chrisPortrait from "@/assets/chris-dessi-headshot.jpg";

const QuantumCoachBooking = () => {
  useEffect(() => {
    // Load Zoho Campaigns script
    const zohoScript = document.createElement('script');
    zohoScript.src = 'https://idzlf-zgpl.maillist-manage.com/js/optin.min.js';
    zohoScript.async = true;
    zohoScript.onload = () => {
      if ((window as any).setupSF) {
        (window as any).setupSF('sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa', 'ZCFORMVIEW', false, 'light', false, '0');
      }
    };
    document.body.appendChild(zohoScript);

    // Load Calendly script
    const calendlyScript = document.createElement('script');
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);

    return () => {
      if (document.body.contains(zohoScript)) {
        document.body.removeChild(zohoScript);
      }
      if (document.body.contains(calendlyScript)) {
        document.body.removeChild(calendlyScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 antialiased">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
              <span className="text-sm font-medium text-sky-300">The Quantum Shift Project</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Welcome to Your<br />
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Quantum Shift</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join a community of people who are ready to break old patterns, discover what they really want, 
              and create aligned action for their life and business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start mt-12">
            {/* Left: Welcome Video */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-6 shadow-2xl">
                <h2 className="text-xl font-semibold mb-4 text-slate-100">A Message from Chris</h2>
                <div className="aspect-video rounded-2xl overflow-hidden border border-slate-700/50 bg-black shadow-lg">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/GqyALozg1_4?si=Cion5GrWZGyOrJjW" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-sky-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-100">How to Get Started</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-400/40 flex items-center justify-center">
                      <span className="text-sm font-bold text-emerald-300">1</span>
                    </div>
                    <div>
                      <p className="text-base text-slate-200 leading-relaxed">
                        <strong className="text-slate-100">Join the Community</strong> — Get weekly reflections, tools, and updates from Chris
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500/20 border-2 border-sky-400/40 flex items-center justify-center">
                      <span className="text-sm font-bold text-sky-300">2</span>
                    </div>
                    <div>
                      <p className="text-base text-slate-200 leading-relaxed">
                        <strong className="text-slate-100">Book Your Free Session</strong> — 30 minutes to explore what's next for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Zoho Opt-in Form (Step 1) */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 lg:p-6 shadow-xl backdrop-blur">
              {/*Zoho Campaigns Web-Optin Form Starts Here*/}
              <div id="sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa" data-type="signupform" style={{ opacity: 1 }}>
                <div id="customForm">
                  <div className="quick_form_7_css" style={{ backgroundColor: 'rgb(255, 255, 255)', width: '500px', maxWidth: '100%', zIndex: 2, fontFamily: 'Arial', border: '1px solid rgb(206, 206, 206)', overflow: 'hidden' }} data-name="SIGNUP_BODY">
                    <div>
                      <div style={{ fontSize: '14px', fontFamily: 'Arial', fontWeight: 'bold', color: 'rgb(85, 85, 85)', textAlign: 'left', padding: '15px 15px 5px', width: '100%', display: 'block', boxSizing: 'border-box' }} id="SIGNUP_HEADING">Step 1: Join The Quantum Shift List</div>
                      <div style={{ position: 'relative' }}>
                        <div id="Zc_SignupSuccess" style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                          <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                            <tbody>
                              <tr>
                                <td width="10%">
                                  <img className="successicon" src="https://idzlf-zgpl.maillist-manage.com/images/challangeiconenable.jpg" alt="Success" style={{ verticalAlign: 'middle' }} />
                                </td>
                                <td>
                                  <span id="signupSuccessMsg" style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <form method="POST" id="zcampaignOptinForm" style={{ margin: '0px', width: '100%', textAlign: 'center' }} action="https://idzlf-zgpl.maillist-manage.com/weboptin.zc" target="_zcSignup">
                        <div style={{ backgroundColor: 'rgb(255, 235, 232)', padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '11px', margin: '20px 10px 0px', border: '1px solid rgb(255, 217, 211)', opacity: 1, display: 'none' }} id="errorMsgDiv">Please correct the marked field(s) below.</div>
                        <div style={{ position: 'relative', width: '170px', height: '28px', display: 'inline-block' }} className="SIGNUP_FLD">
                          <div style={{ padding: '5px 0px', color: 'rgb(85, 85, 85)', fontSize: '12px', fontFamily: 'Arial', display: 'block', textAlign: 'left' }}>Email</div>
                          <input type="text" style={{ fontSize: '12px', borderWidth: '1px', borderColor: 'rgb(214, 205, 205)', borderStyle: 'solid', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px 10px', color: 'rgb(113, 106, 106)', textAlign: 'left', fontFamily: 'Arial', borderRadius: '4px', backgroundColor: 'rgb(246, 246, 246)', boxSizing: 'border-box' }} name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" />
                        </div>
                        <div style={{ position: 'relative', margin: '5px 0 40px 10px', width: '170px', height: '28px', display: 'inline-block' }} className="SIGNUP_FLD">
                          <div style={{ padding: '5px 0px', color: 'rgb(85, 85, 85)', fontSize: '12px', fontFamily: 'Arial', display: 'block', textAlign: 'left' }}>Name</div>
                          <input type="text" style={{ fontSize: '12px', borderWidth: '1px', borderColor: 'rgb(214, 205, 205)', borderStyle: 'solid', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px 10px', color: 'rgb(113, 106, 106)', textAlign: 'left', fontFamily: 'Arial', borderRadius: '4px', backgroundColor: 'rgb(246, 246, 246)', boxSizing: 'border-box' }} name="LASTNAME" id="EMBED_FORM_NAME_LABEL" />
                        </div>
                        <div style={{ position: 'relative', width: '100px', height: '28px', margin: '0 0 15px 12px', display: 'inline-block' }} className="SIGNUP_FLD">
                          <input type="button" style={{ textAlign: 'center', width: '100%', height: '100%', zIndex: 5, border: 0, color: 'rgb(255, 255, 255)', cursor: 'pointer', outline: 'none', fontSize: '14px', backgroundColor: 'rgb(255, 97, 97)', borderRadius: '4px' }} name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Join Now" />
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
                <img src="https://idzlf-zgpl.maillist-manage.com/images/spacer.gif" id="refImage" style={{ display: 'none' }} alt="" />
              </div>
              <input type="hidden" id="signupFormType" value="QuickForm_Horizontal" />
              <div id="zcOptinOverLay" style={{ display: 'none', textAlign: 'center', backgroundColor: 'rgb(0, 0, 0)', opacity: 0.5, zIndex: 100, position: 'fixed', width: '100%', top: '0px', left: '0px', height: '988px' }}></div>
              <div id="zcOptinSuccessPopup" style={{ display: 'none', zIndex: 9999, width: '800px', height: '40%', top: '84px', position: 'fixed', left: '26%', backgroundColor: '#FFFFFF', borderColor: '#E6E6E6', borderStyle: 'solid', borderWidth: '1px', boxShadow: '0 1px 10px #424242', padding: '35px' }}>
                <span style={{ position: 'absolute', top: '-16px', right: '-14px', zIndex: 99999, cursor: 'pointer' }} id="closeSuccess">
                  <img src="https://idzlf-zgpl.maillist-manage.com/images/videoclose.png" alt="Close" />
                </span>
                <div id="zcOptinSuccessPanel"></div>
              </div>
              {/*Zoho Campaigns Web-Optin Form Ends Here*/}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL EXPERIENCE */}
      <section className="bg-slate-950 py-16 lg:py-24 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
              What Happens in Your Starter Session
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              This isn't therapy, and it isn't hype. It's a grounded, honest conversation designed to
              help you see where you're stuck and what wants to emerge through you next.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🔓</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-100">Break One Limiting Pattern</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Get curious about the story running your life and gently dismantle a belief that's no longer serving you.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-100">Clarify What You Really Want</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Move beyond vague goals into a felt sense of the life, business, or creative work you're actually called to.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-100">Design an Aligned Next Step</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Leave with one concrete, doable action that matches who you're becoming — not who you've been.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="font-semibold mb-3 text-base text-slate-100">Get the Quantum Shift Guidebook</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A short PDF with core frameworks, questions, and practices to revisit whenever you feel yourself drifting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CHRIS */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 lg:py-24 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-1">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl mx-auto lg:mx-0">
                  <img
                    src={chrisPortrait}
                    alt="Chris Dessi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-slate-100">Meet Your Guide, Chris Dessi</h2>
                <div className="space-y-4 text-base text-slate-300 leading-relaxed">
                  <p>
                    Chris is the creator of the Quantum Shift podcast and project — a conversation series
                    exploring what happens when we stop living from fear and start living from truth.
                  </p>
                  <p>
                    After decades in high-pressure leadership roles, building companies, writing books,
                    and navigating his own unraveling, Chris has become obsessed with one question:
                    <span className="italic text-slate-200"> What actually creates lasting change?</span>
                  </p>
                  <p>
                    The Quantum Shift Starter Session is his way of offering a grounded, no-fluff starting
                    point for that journey — whether your next move is a career reinvention, a business
                    pivot, or simply finding a calmer, truer way to move through your day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-950 py-16 lg:py-24 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
              What the Community Is Saying
            </h2>
            <p className="text-lg text-slate-400">Real conversations, real transformations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-300">
              <div className="mb-4">
                <div className="text-sky-400 text-3xl mb-4">"</div>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  One conversation with Chris felt like someone finally turned the lights on in a room I'd been pacing in for years.
                </p>
              </div>
              <p className="text-sm text-slate-400">— Name, Role / Description</p>
            </div>
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300">
              <div className="mb-4">
                <div className="text-emerald-400 text-3xl mb-4">"</div>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  He asks the questions I've been afraid to ask myself. I walked away with clarity and an action I could actually take.
                </p>
              </div>
              <p className="text-sm text-slate-400">— Name, Role / Description</p>
            </div>
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 border border-slate-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300">
              <div className="mb-4">
                <div className="text-purple-400 text-3xl mb-4">"</div>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  It wasn't hype. It was honest, grounded, and strangely calming. I left feeling more like myself.
                </p>
              </div>
              <p className="text-sm text-slate-400">— Name, Role / Description</p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2: BOOKING CALENDAR */}
      <section id="booking" className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 lg:py-24 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
              Reserve Your Free 30-Minute Session
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Sessions are limited each week so there's space for real conversation, not rushed calls.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="bg-gradient-to-br from-emerald-500/10 to-sky-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6 text-slate-100">What to Expect</h3>
              <div className="space-y-4 text-base text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <p>30 minutes on Zoom — your space to explore</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <p>No pitch required — just honest exploration</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <p>If it makes sense to go deeper, we'll talk about that at the end</p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-slate-900/50 border border-slate-700/50 rounded-xl">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <strong className="text-emerald-400">Pro tip:</strong> Bring a question you've been circling around but avoiding. 
                  That's usually where the shift lives.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-4 lg:p-6 shadow-2xl">
              {/* Calendly inline widget begin */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/chris-torqueapp/quantum-shift-starter-session?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px' }}
              />
              {/* Calendly inline widget end */}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / BRIDGE TO AI */}
      <footer className="bg-slate-950 border-t border-slate-800/60 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-slate-800/50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Once you're clear on who you are and what you want, AI becomes a powerful tool to help you create it.
                Inside the Quantum Shift community, you'll also get invitations to learn how we use AI to build the systems
                that support your new direction.
              </p>
              <a 
                href="#top" 
                className="flex-shrink-0 px-6 py-3 bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 hover:text-sky-200 rounded-xl transition-all duration-300 font-medium"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Footer />
    </div>
  );
};

export default QuantumCoachBooking;
