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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-950/95 to-slate-950"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Copy + Welcome Video */}
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-sky-400 uppercase">
                The Quantum Shift Project
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                Start Your <span className="text-sky-400">Quantum Shift</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-xl">
                A free 30-minute guided transformation session to help you break a limiting pattern,
                get clear on what you really want, and leave with an aligned action plan for your life and business.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-sky-500/20 text-[11px] text-sky-300">1</span>
                  <span><strong>Step 1:</strong> Join the Quantum Shift email list for weekly reflections, tools, and updates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-300">2</span>
                  <span><strong>Step 2:</strong> Reserve your free 30-minute Quantum Shift Starter Session.</span>
                </li>
              </ul>

              <div className="mt-6">
                <h2 className="text-sm font-semibold mb-3">Welcome message from Chris</h2>
                <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black">
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
            </div>

            {/* Right: Zoho Opt-in Form (Step 1) */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 lg:p-6 shadow-xl backdrop-blur">
              {/*Zoho Campaigns Web-Optin Form Starts Here*/}
              <div id="sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa" data-type="signupform" style={{ opacity: 1 }}>
                <div id="customForm">
                  <div className="quick_form_2_css" style={{ border: '3px solid rgb(0, 0, 0)', backgroundColor: 'rgb(220, 220, 220)', width: '100%', maxWidth: '574px', zIndex: 2, fontFamily: 'Arial', overflow: 'hidden', height: 'auto' }} data-name="SIGNUP_BODY">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '26px', fontFamily: 'Calibri', fontWeight: 'bold', color: 'rgb(255, 255, 255)', textAlign: 'center', padding: '15px 0px', width: '100%', display: 'block', backgroundColor: 'rgb(0, 0, 0)', height: 'auto' }} id="SIGNUP_HEADING">Step 1 – Join the List</div>
                      <div style={{ position: 'relative' }}>
                        <div id="Zc_SignupSuccess" style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                          <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                            <tbody>
                              <tr>
                                <td width="10%">
                                  <img className="successicon" src="https://idzlf-zgpl.maillist-manage.com/images/challangeiconenable.jpg" alt="Success" />
                                </td>
                                <td>
                                  <span id="signupSuccessMsg" style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <form method="POST" id="zcampaignOptinForm" style={{ margin: '0px', width: '100%', color: 'rgb(255, 255, 255)' }} action="https://idzlf-zgpl.maillist-manage.com/weboptin.zc" target="_zcSignup">
                        <div style={{ backgroundColor: 'rgb(255, 235, 232)', padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '11px', margin: '20px 10px 0px', border: '1px solid rgb(255, 217, 211)', opacity: 1, display: 'none' }} id="errorMsgDiv">Please correct the marked field(s) below.</div>
                        <div style={{ position: 'relative', width: '90%', maxWidth: '218px', height: '30px', marginTop: '20px', display: 'inline-block' }}>
                          <input type="text" style={{ fontSize: '12px', borderWidth: '1px', borderColor: 'rgb(235, 235, 235)', borderStyle: 'solid', width: '100%', height: '100%', zIndex: 4, outline: 'none', boxSizing: 'border-box', padding: '5px 10px', color: 'rgb(136, 136, 136)', textAlign: 'center', fontFamily: 'Arial', borderRadius: '5px' }} placeholder="Email" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" />
                        </div>
                        <div style={{ position: 'relative', width: '90%', maxWidth: '218px', height: '30px', marginTop: '20px', display: 'inline-block' }}>
                          <input type="text" style={{ fontSize: '12px', borderWidth: '1px', borderColor: 'rgb(235, 235, 235)', borderStyle: 'solid', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px 10px', boxSizing: 'border-box', color: 'rgb(136, 136, 136)', textAlign: 'center', fontFamily: 'Arial', borderRadius: '5px' }} placeholder="Name" name="FIRSTNAME" id="FIRSTNAME" />
                        </div>
                        <div style={{ position: 'relative', width: '90%', maxWidth: '516px', height: '48px', margin: '20px 0px 15px', display: 'inline-block' }}>
                          <input type="button" style={{ textAlign: 'center', width: '100%', height: '100%', zIndex: 5, border: '0px', color: 'rgb(255, 255, 255)', borderRadius: '2px', cursor: 'pointer', outline: 'none', fontSize: '26px', backgroundColor: 'rgb(0, 0, 0)' }} name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Join Now" />
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
              <input type="hidden" id="signupFormType" value="QuickForm_Vertical" />
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
      <section className="bg-slate-950 py-12 lg:py-16 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            What Happens in a Quantum Shift Starter Session
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl text-sm sm:text-base">
            This isn't therapy, and it isn't hype. It's a grounded, honest conversation designed to
            help you see where you're stuck, what's really driving your patterns, and what wants to
            emerge through you next.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
              <h3 className="font-semibold mb-2 text-sm">Break One Limiting Pattern</h3>
              <p className="text-xs text-slate-300">
                Get curious about the story running your life and gently dismantle a belief that's no longer serving you.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
              <h3 className="font-semibold mb-2 text-sm">Clarify What You Really Want</h3>
              <p className="text-xs text-slate-300">
                Move beyond vague goals into a felt sense of the life, business, or creative work you're actually called to.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
              <h3 className="font-semibold mb-2 text-sm">Design an Aligned Next Step</h3>
              <p className="text-xs text-slate-300">
                Leave with one concrete, doable action that matches who you're becoming — not who you've been.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
              <h3 className="font-semibold mb-2 text-sm">Get the Quantum Shift Guidebook</h3>
              <p className="text-xs text-slate-300">
                A short PDF with core frameworks, questions, and practices to revisit whenever you feel yourself drifting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CHRIS */}
      <section className="bg-slate-950 py-12 lg:py-16 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-1">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-slate-700 shadow-xl mx-auto lg:mx-0">
              <img
                src={chrisPortrait}
                alt="Chris Dessi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-2 text-sm">
            <h2 className="text-2xl font-semibold mb-3">Meet Your Guide, Chris Dessi</h2>
            <p className="text-slate-300 mb-3">
              Chris is the creator of the Quantum Shift podcast and project — a conversation series
              exploring what happens when we stop living from fear and start living from truth.
            </p>
            <p className="text-slate-300 mb-3">
              After decades in high-pressure leadership roles, building companies, writing books,
              and navigating his own unraveling, Chris has become obsessed with one question:
              <span className="italic"> What actually creates lasting change?</span>
            </p>
            <p className="text-slate-300">
              The Quantum Shift Starter Session is his way of offering a grounded, no-fluff starting
              point for that journey — whether your next move is a career reinvention, a business
              pivot, or simply finding a calmer, truer way to move through your day.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-950 py-12 lg:py-16 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            What People Say About Quantum Shift Conversations
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
              <p className="text-slate-200 mb-3">
                "One conversation with Chris felt like someone finally turned the lights on in a room I'd been pacing in for years."
              </p>
              <p className="text-xs text-slate-400 mt-2">— Name, Role / Description</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
              <p className="text-slate-200 mb-3">
                "He asks the questions I've been afraid to ask myself. I walked away with clarity and an action I could actually take."
              </p>
              <p className="text-xs text-slate-400 mt-2">— Name, Role / Description</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
              <p className="text-slate-200 mb-3">
                "It wasn't hype. It was honest, grounded, and strangely calming. I left feeling more like myself."
              </p>
              <p className="text-xs text-slate-400 mt-2">— Name, Role / Description</p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2: BOOKING CALENDAR */}
      <section id="booking" className="bg-slate-950 py-12 lg:py-16 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start text-sm">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Step 2 – Reserve Your Free 30-Minute Quantum Shift Starter Session
              </h2>
              <p className="text-slate-300 mb-4">
                Sessions are limited each week so there's space for real conversation, not rushed calls.
                Pick a time that works for you and you'll get a confirmation email with all the details.
              </p>
              <ul className="space-y-2 text-slate-300 mb-6">
                <li>• 30 minutes on Zoom</li>
                <li>• No pitch required — just honest exploration</li>
                <li>• If it makes sense to go deeper, we'll talk about that at the end</li>
              </ul>
              <p className="text-xs text-slate-500">
                Pro tip: Bring a question you've been circling around but avoiding. That's usually where the shift lives.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 lg:p-4">
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
      <footer className="bg-slate-950 border-t border-slate-800/60 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Once you're clear on who you are and what you want, AI becomes a powerful tool to help you create it.
            Inside the Quantum Shift list, you'll also get invitations to learn how we use AI to build the systems
            that support your new direction.
          </p>
          <a href="#top" className="text-sky-300 hover:text-sky-200 underline underline-offset-4">
            Back to top
          </a>
        </div>
      </footer>

      <Footer />
    </div>
  );
};

export default QuantumCoachBooking;
