import { useEffect, useRef } from 'react';

export const ZohoCommunitySignupForm = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Zoho Campaigns script
    const script = document.createElement('script');
    script.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/optin.min.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (typeof window.setupSF === 'function') {
        // @ts-ignore
        window.setupSF('sf3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6', 'ZCFORMVIEW', false, 'light', false, '0');
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={formRef} className="w-full">
      {/* Zoho Campaigns Form */}
      <form 
        className="quick_form_7_css"
        id="sf3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6"
        data-type="SIGNUP_FORM"
        name="SIGNUP_BODY"
        method="POST"
        action="https://idzlf-cmpzourl.maillist-manage.com/weboptin.zc"
        target="_zcSignup"
        style={{ 
          backgroundColor: 'transparent',
          width: '100%'
        }}
      >
        <div id="SIGNUP_HEADING" style={{ display: 'none' }}>FREE Torque AI Community</div>
        
        <div id="SIGNUP_PAGE" className="SIGNUP_PAGE">
          <div 
            id="CONFIRMATION_MESSAGE_SUCCESS" 
            style={{ display: 'none' }}
            className="text-center p-4 bg-emerald-50 border border-emerald-200 rounded-xl"
          >
            <span className="text-emerald-600 font-medium">Thank you for Signing Up!</span>
          </div>
          
          <div id="errorMsgDiv" className="text-red-500 text-sm mb-2" style={{ display: 'none' }}>
            Please correct the marked field(s) below.
          </div>
          
          <div className="SIGNUP_FLD space-y-4">
            <div>
              <label htmlFor="CONTACT_EMAIL" className="block text-sm font-medium text-slate-700 mb-2">
                Email *
              </label>
              <input 
                type="email" 
                id="CONTACT_EMAIL" 
                name="CONTACT_EMAIL"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-slate-900 bg-white"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="FIRSTNAME" className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <input 
                  type="text" 
                  id="FIRSTNAME" 
                  name="FIRSTNAME"
                  placeholder="First name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-slate-900 bg-white"
                />
              </div>
              <div>
                <label htmlFor="LASTNAME" className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <input 
                  type="text" 
                  id="LASTNAME" 
                  name="LASTNAME"
                  placeholder="Last name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-slate-900 bg-white"
                />
              </div>
            </div>
            
            <button 
              type="submit"
              id="zcSubmitBtn"
              className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-sky-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join the Community
            </button>
          </div>
          
          {/* Hidden fields required by Zoho */}
          <input type="hidden" id="fieldBorder" value="" />
          <input type="hidden" id="submitType" name="submitType" value="opt498498" />
          <input type="hidden" id="lD" name="lD" value="1a69e6e0f14feb3" />
          <input type="hidden" name="zx" id="cmpZuid" value="1a69e6e0e" />
          <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
          <input type="hidden" name="mode" value="OptinCreate498498" />
          <input type="hidden" name="zcld" value="1a69e6e0f14feb3" />
          <input type="hidden" id="signupForm498498_498498" name="signupFormType" value="LargeForm_Horizontal_4498498" />
          <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
        </div>
      </form>
    </div>
  );
};
