import { useEffect, useId } from 'react';

export const ZohoQuantumCoachWaitlistForm = () => {
  const uniqueId = useId().replace(/:/g, '');
  const formId = `sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa_${uniqueId}`;

  useEffect(() => {
    const formContainer = document.getElementById(formId);
    if (formContainer) {
      const form = formContainer.querySelector('form') as HTMLFormElement;
      const submitBtn = formContainer.querySelector('[name="SIGNUP_SUBMIT_BUTTON"]') as HTMLInputElement;
      
      if (submitBtn && form) {
        submitBtn.onclick = (e) => {
          e.preventDefault();
          const emailInput = formContainer.querySelector('[name="CONTACT_EMAIL"]') as HTMLInputElement;
          
          if (emailInput && emailInput.value && emailInput.value.includes('@')) {
            form.submit();
          } else {
            const errorDiv = formContainer.querySelector('[id^="errorMsgDiv"]') as HTMLElement;
            if (errorDiv) {
              errorDiv.style.display = 'block';
              errorDiv.textContent = 'Please enter a valid email address.';
            }
          }
        };
      }
    }
  }, [formId]);

  return (
    <div className="w-full">
      <style dangerouslySetInnerHTML={{ __html: `
        .quick_form_quantum_css * { 
          -webkit-box-sizing: border-box !important; 
          -moz-box-sizing: border-box !important; 
          box-sizing: border-box !important; 
          overflow-wrap: break-word 
        }
        @media only screen and (max-width: 600px) {
          .quick_form_quantum_css[name="SIGNUP_BODY"] { 
            width: 100% !important; 
            min-width: 100% !important; 
            margin: 0px auto !important; 
            padding: 0px !important 
          } 
          .SIGNUP_FLD_QC { 
            width: 100% !important; 
            margin: 10px 0 !important; 
            padding: 0px !important;
            display: block !important;
          } 
          .SIGNUP_FLD_QC input { 
            margin: 0 !important;
            width: 100% !important;
          }
        }
      `}} />
      
      <div id={formId} data-type="signupform" style={{ opacity: 1 }}>
        <div id={`customForm_${uniqueId}`}>
          <div className="quick_form_quantum_css" style={{ backgroundColor: 'transparent', width: '100%', maxWidth: '100%', zIndex: 2, fontFamily: 'inherit', overflow: 'hidden' }} data-name="SIGNUP_BODY">
            <div>
              <div style={{ position: 'relative' }}>
                <div id={`Zc_SignupSuccess_${uniqueId}`} style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '10px', borderRadius: '8px', border: '3px solid rgb(74, 222, 128)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                  <span style={{ color: 'rgb(34, 197, 94)', fontFamily: 'inherit', fontSize: '14px', fontWeight: 'bold' }}>✓ Thank you for joining!</span>
                </div>
              </div>
              <form method="POST" id={`zcampaignOptinForm_${uniqueId}`} style={{ margin: '0px', width: '100%' }} action="https://idzlf-cmpzourl.maillist-manage.com/weboptin.zc" target="_zcSignup">
                <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '10px', color: 'rgb(239, 68, 68)', fontSize: '13px', margin: '0 0 15px 0', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', display: 'none' }} id={`errorMsgDiv_${uniqueId}`}>Please enter a valid email address.</div>
                
                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                  <div className="flex-1 SIGNUP_FLD_QC">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
                      name="CONTACT_EMAIL" 
                      id={`EMBED_FORM_EMAIL_LABEL_${uniqueId}`} 
                      required
                    />
                  </div>
                  <div className="flex-1 SIGNUP_FLD_QC">
                    <input 
                      type="text" 
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
                      name="LASTNAME" 
                      id={`EMBED_FORM_NAME_LABEL_${uniqueId}`} 
                    />
                  </div>
                  <div className="SIGNUP_FLD_QC sm:flex-shrink-0">
                    <input 
                      type="button" 
                      className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 text-base shadow-lg shadow-emerald-500/25"
                      name="SIGNUP_SUBMIT_BUTTON" 
                      id={`zcWebOptin_${uniqueId}`} 
                      value="Join Now" 
                    />
                  </div>
                </div>
                
                <input type="hidden" id={`fieldBorder_${uniqueId}`} value="" />
                <input type="hidden" id={`submitType_${uniqueId}`} name="submitType" value="optinCustomView" />
                <input type="hidden" id={`emailReportId_${uniqueId}`} name="emailReportId" value="" />
                <input type="hidden" id={`formType_${uniqueId}`} name="formType" value="QuickForm" />
                <input type="hidden" name="zx" id={`cmpZuid_${uniqueId}`} value="1316ccdc8" />
                <input type="hidden" name="zcvers" value="3.0" />
                <input type="hidden" name="oldListIds" id={`allCheckedListIds_${uniqueId}`} value="" />
                <input type="hidden" id={`mode_${uniqueId}`} name="mode" value="OptinCreateView" />
                <input type="hidden" id={`zcld_${uniqueId}`} name="zcld" value="110489827e27f87e8" />
                <input type="hidden" id={`zctd_${uniqueId}`} name="zctd" value="110489827e26e63c1" />
                <input type="hidden" id={`document_domain_${uniqueId}`} value="" />
                <input type="hidden" id={`zc_Url_${uniqueId}`} value="idzlf-cmpzourl.maillist-manage.com" />
                <input type="hidden" id={`new_optin_response_in_${uniqueId}`} value="0" />
                <input type="hidden" id={`duplicate_optin_response_in_${uniqueId}`} value="0" />
                <input type="hidden" name="zc_trackCode" id={`zc_trackCode_${uniqueId}`} value="ZCFORMVIEW" />
                <input type="hidden" id={`zc_formIx_${uniqueId}`} name="zc_formIx" value="3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa" />
                <input type="hidden" id={`viewFrom_${uniqueId}`} value="URL_ACTION" />
                <span style={{ display: 'none' }} id={`dt_CONTACT_EMAIL_${uniqueId}`}>1,true,6,Contact Email,2</span>
                <span style={{ display: 'none' }} id={`dt_FIRSTNAME_${uniqueId}`}>1,false,1,First Name,2</span>
                <span style={{ display: 'none' }} id={`dt_LASTNAME_${uniqueId}`}>1,false,1,Last Name,2</span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <iframe name="_zcSignup" style={{ display: 'none' }} />
    </div>
  );
};
