import { useId, useRef, FormEvent } from 'react';

export const ZohoQuantumCoachWaitlistForm = () => {
  const uniqueId = useId().replace(/:/g, '');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    
    const emailInput = form.querySelector('[name="CONTACT_EMAIL"]') as HTMLInputElement;
    const errorDiv = document.getElementById(`errorMsgDiv_${uniqueId}`);
    
    if (emailInput && emailInput.value && emailInput.value.includes('@')) {
      if (errorDiv) errorDiv.style.display = 'none';
      form.submit();
    } else {
      if (errorDiv) {
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Please enter a valid email address.';
      }
    }
  };

  return (
    <div className="w-full">
      <div id={`sf_${uniqueId}`} data-type="signupform" style={{ opacity: 1 }}>
        <div id={`customForm_${uniqueId}`}>
          <form 
            ref={formRef}
            method="POST" 
            id={`zcampaignOptinForm_${uniqueId}`} 
            style={{ margin: '0px', width: '100%' }} 
            action="https://idzlf-cmpzourl.maillist-manage.com/weboptin.zc" 
            target="_zcSignup"
            onSubmit={handleSubmit}
          >
            <div className="bg-red-50 text-red-600 text-sm p-3 mb-4 rounded-lg border border-red-200 hidden" id={`errorMsgDiv_${uniqueId}`}>Please enter a valid email address.</div>
            
            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
                  name="CONTACT_EMAIL" 
                  id={`EMBED_FORM_EMAIL_LABEL_${uniqueId}`} 
                  required
                />
              </div>
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
                  name="LASTNAME" 
                  id={`EMBED_FORM_NAME_LABEL_${uniqueId}`} 
                />
              </div>
              <div className="sm:flex-shrink-0">
                <input 
                  type="submit" 
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 text-base shadow-md"
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
      <iframe name="_zcSignup" style={{ display: 'none' }} title="Zoho Signup" />
    </div>
  );
};
