import { useEffect } from 'react';

declare global {
  interface Window {
    setupSF: (formId: string, mode: string, arg3: boolean, arg4: string, arg5: boolean, arg6: string) => void;
    runOnFormSubmit_sf3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6?: (th: any) => void;
  }
}

export const ZohoTorqueAIForm = () => {
  useEffect(() => {
    // Load the main Zoho script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/optin.min.js';
    script.onload = () => {
      if (window.setupSF) {
        window.setupSF('sf3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6', 'ZCFORMVIEW', false, 'light', false, '0');
      }
    };
    document.body.appendChild(script);

    // Define the form submit handler
    window.runOnFormSubmit_sf3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6 = function(th) {
      /* Before submit, if you want to trigger your event, "include your code here" */
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      delete window.runOnFormSubmit_sf3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6;
    };
  }, []);

  return (
    <div className="w-full">
      <style dangerouslySetInnerHTML={{ __html: `
        .quick_form_7_css * { 
          -webkit-box-sizing: border-box !important; 
          -moz-box-sizing: border-box !important; 
          box-sizing: border-box !important; 
          overflow-wrap: break-word 
        }
        @media only screen and (max-width: 600px) {
          .quick_form_7_css[name="SIGNUP_BODY"] { 
            width: 100% !important; 
            min-width: 100% !important; 
            margin: 0px auto !important; 
            padding: 0px !important 
          } 
          .SIGNUP_FLD { 
            width: 90% !important; 
            margin: 15px 5% !important; 
            padding: 0px !important 
          } 
          .SIGNUP_FLD input { 
            margin: 0 !important 
          } 
        }
      `}} />
      
      <div id="sf3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6" data-type="signupform" style={{ opacity: 1 }}>
        <div id="customForm">
          <div className="quick_form_7_css" style={{ backgroundColor: 'rgb(255, 255, 255)', width: '500px', zIndex: 2, fontFamily: '"Arial"', border: '1px solid rgb(206, 206, 206)', overflow: 'hidden' }} data-name="SIGNUP_BODY">
            <div>
              <div style={{ fontSize: '14px', fontFamily: 'Tahoma', fontWeight: 'bold', color: 'rgb(85, 85, 85)', textAlign: 'left', padding: '15px 15px 5px', width: '100%', display: 'block', boxSizing: 'border-box', backgroundColor: 'rgb(255, 255, 255)' }} id="SIGNUP_HEADING">FREE Torque AI Community</div>
              <div style={{ position: 'relative' }}>
                <div id="Zc_SignupSuccess" style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tbody>
                      <tr>
                        <td width="10%">
                          <img className="successicon" src="https://idzlf-cmpzourl.maillist-manage.com/images/challangeiconenable.jpg" style={{ verticalAlign: 'middle' }} alt="" />
                        </td>
                        <td>
                          <span id="signupSuccessMsg" style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <form method="POST" id="zcampaignOptinForm" style={{ margin: '0px', width: '100%', textAlign: 'center' }} action="https://idzlf-cmpzourl.maillist-manage.com/weboptin.zc" target="_zcSignup">
                <div style={{ backgroundColor: 'rgb(255, 235, 232)', padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '11px', margin: '20px 10px 0px', border: '1px solid rgb(255, 217, 211)', opacity: 1, display: 'none' }} id="errorMsgDiv">Please correct the marked field(s) below.</div>
                <div style={{ position: 'relative', width: '170px', height: '28px', display: 'inline-block' }} className="SIGNUP_FLD">
                  <div style={{ padding: '5px 0px', color: 'rgb(85, 85, 85)', fontSize: '12px', fontFamily: 'Arial', display: 'block', textAlign: 'left' }}>Email</div>
                  <input type="text" style={{ fontSize: '12px', borderWidth: '1px', borderColor: 'rgb(214, 205, 205)', borderStyle: 'solid', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px 10px', color: 'rgb(113, 106, 106)', textAlign: 'left', fontFamily: '"Arial"', borderRadius: '4px', backgroundColor: 'rgb(246, 246, 246)', boxSizing: 'border-box' }} name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" />
                </div>
                <div style={{ position: 'relative', margin: '5px 0 40px 10px', width: '170px', height: '28px', display: 'inline-block' }} className="SIGNUP_FLD">
                  <div style={{ padding: '5px 0px', color: 'rgb(85, 85, 85)', fontSize: '12px', fontFamily: 'Arial', display: 'block', textAlign: 'left' }}>Name</div>
                  <input type="text" style={{ fontSize: '12px', borderWidth: '1px', borderColor: 'rgb(214, 205, 205)', borderStyle: 'solid', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px 10px', color: 'rgb(113, 106, 106)', textAlign: 'left', fontFamily: '"Arial"', borderRadius: '4px', backgroundColor: 'rgb(246, 246, 246)', boxSizing: 'border-box' }} name="LASTNAME" id="EMBED_FORM_NAME_LABEL" />
                </div>
              <div style={{ position: 'relative', width: '100px', height: '28px', margin: '0 0 15px 12px', display: 'inline-block' }} className="SIGNUP_FLD">
                <input type="button" style={{ textAlign: 'center', width: '100%', height: '100%', zIndex: 5, border: '0px', color: 'rgb(255, 255, 255)', cursor: 'pointer', outline: 'none', fontSize: '14px', backgroundColor: 'rgb(38, 165, 118)', borderRadius: '4px' }} name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Join us" />
              </div>
                <input type="hidden" id="fieldBorder" value="" />
                <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                <input type="hidden" id="emailReportId" name="emailReportId" value="" />
                <input type="hidden" id="formType" name="formType" value="QuickForm" />
                <input type="hidden" name="zx" id="cmpZuid" value="1316ccdc8" />
                <input type="hidden" name="zcvers" value="3.0" />
                <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                <input type="hidden" id="zcld" name="zcld" value="110489827e27f3fc3" />
                <input type="hidden" id="zctd" name="zctd" value="110489827e26e63c1" />
                <input type="hidden" id="document_domain" value="" />
                <input type="hidden" id="zc_Url" value="idzlf-cmpzourl.maillist-manage.com" />
                <input type="hidden" id="new_optin_response_in" value="0" />
                <input type="hidden" id="duplicate_optin_response_in" value="0" />
                <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6" />
                <input type="hidden" id="viewFrom" value="URL_ACTION" />
                <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                <span style={{ display: 'none' }} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                <span style={{ display: 'none' }} id="dt_LASTNAME">1,false,1,Last Name,2</span>
              </form>
            </div>
          </div>
        </div>
        <img src="https://idzlf-cmpzourl.maillist-manage.com/images/spacer.gif" id="refImage" style={{ display: 'none' }} alt="" />
      </div>
      <input type="hidden" id="signupFormType" value="QuickForm_Horizontal" />
      <div id="zcOptinOverLay" style={{ display: 'none', textAlign: 'center', backgroundColor: 'rgb(0, 0, 0)', opacity: 0.5, zIndex: 100, position: 'fixed', width: '100%', top: '0px', left: '0px', height: '988px' }}></div>
      <div id="zcOptinSuccessPopup" style={{ display: 'none', zIndex: 9999, width: '800px', height: '40%', top: '84px', position: 'fixed', left: '26%', backgroundColor: '#FFFFFF', borderColor: '#E6E6E6', borderStyle: 'solid', borderWidth: '1px', boxShadow: '0 1px 10px #424242', padding: '35px' }}>
        <span style={{ position: 'absolute', top: '-16px', right: '-14px', zIndex: 99999, cursor: 'pointer' }} id="closeSuccess">
          <img src="https://idzlf-cmpzourl.maillist-manage.com/images/videoclose.png" alt="Close" />
        </span>
        <div id="zcOptinSuccessPanel"></div>
      </div>
    </div>
  );
};
