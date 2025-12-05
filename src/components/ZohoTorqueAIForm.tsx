import { useEffect, useId } from 'react';

export const ZohoTorqueAIForm = () => {
  const uniqueId = useId().replace(/:/g, '');
  const formId = `sf3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6_${uniqueId}`;

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
        .quick_form_torque_css * { 
          -webkit-box-sizing: border-box !important; 
          -moz-box-sizing: border-box !important; 
          box-sizing: border-box !important; 
          overflow-wrap: break-word 
        }
        @media only screen and (max-width: 600px) {
          .quick_form_torque_css[name="SIGNUP_BODY"] { 
            width: 100% !important; 
            min-width: 100% !important; 
            margin: 0px auto !important; 
            padding: 0px !important 
          } 
          .SIGNUP_FLD_TQ { 
            width: 100% !important; 
            margin: 10px 0 !important; 
            padding: 0px !important;
            display: block !important;
          } 
          .SIGNUP_FLD_TQ input { 
            margin: 0 !important;
            width: 100% !important;
          }
        }
      `}} />
      
      <div id={formId} data-type="signupform" style={{ opacity: 1 }}>
        <div id={`customForm_${uniqueId}`}>
          <div className="quick_form_torque_css" style={{ backgroundColor: 'rgb(255, 255, 255)', width: '500px', maxWidth: '100%', zIndex: 2, fontFamily: '"Arial"', border: '1px solid rgb(206, 206, 206)', overflow: 'hidden', borderRadius: '8px' }} data-name="SIGNUP_BODY">
            <div>
              <div style={{ fontSize: '14px', fontFamily: 'Tahoma', fontWeight: 'bold', color: 'rgb(85, 85, 85)', textAlign: 'left', padding: '15px 15px 5px', width: '100%', display: 'block', boxSizing: 'border-box', backgroundColor: 'rgb(255, 255, 255)' }}>FREE Torque AI Community</div>
              <div style={{ position: 'relative' }}>
                <div id={`Zc_SignupSuccess_${uniqueId}`} style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tbody>
                      <tr>
                        <td width="10%">
                          <img className="successicon" src="https://idzlf-cmpzourl.maillist-manage.com/images/challangeiconenable.jpg" style={{ verticalAlign: 'middle' }} alt="" />
                        </td>
                        <td>
                          <span style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <form method="POST" id={`zcampaignOptinForm_${uniqueId}`} style={{ margin: '0px', width: '100%', textAlign: 'center' }} action="https://idzlf-cmpzourl.maillist-manage.com/weboptin.zc" target="_zcSignup">
                <div style={{ backgroundColor: 'rgb(255, 235, 232)', padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '11px', margin: '20px 10px 0px', border: '1px solid rgb(255, 217, 211)', opacity: 1, display: 'none' }} id={`errorMsgDiv_${uniqueId}`}>Please correct the marked field(s) below.</div>
                <div style={{ position: 'relative', width: '170px', height: '28px', display: 'inline-block' }} className="SIGNUP_FLD_TQ">
                  <div style={{ padding: '5px 0px', color: 'rgb(85, 85, 85)', fontSize: '12px', fontFamily: 'Arial', display: 'block', textAlign: 'left' }}>Email</div>
                  <input type="email" style={{ fontSize: '12px', borderWidth: '1px', borderColor: 'rgb(214, 205, 205)', borderStyle: 'solid', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px 10px', color: 'rgb(113, 106, 106)', textAlign: 'left', fontFamily: '"Arial"', borderRadius: '4px', backgroundColor: 'rgb(246, 246, 246)', boxSizing: 'border-box' }} name="CONTACT_EMAIL" id={`EMBED_FORM_EMAIL_LABEL_${uniqueId}`} required />
                </div>
                <div style={{ position: 'relative', margin: '5px 0 40px 10px', width: '170px', height: '28px', display: 'inline-block' }} className="SIGNUP_FLD_TQ">
                  <div style={{ padding: '5px 0px', color: 'rgb(85, 85, 85)', fontSize: '12px', fontFamily: 'Arial', display: 'block', textAlign: 'left' }}>Name</div>
                  <input type="text" style={{ fontSize: '12px', borderWidth: '1px', borderColor: 'rgb(214, 205, 205)', borderStyle: 'solid', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px 10px', color: 'rgb(113, 106, 106)', textAlign: 'left', fontFamily: '"Arial"', borderRadius: '4px', backgroundColor: 'rgb(246, 246, 246)', boxSizing: 'border-box' }} name="LASTNAME" id={`EMBED_FORM_NAME_LABEL_${uniqueId}`} />
                </div>
                <div style={{ position: 'relative', width: '100px', height: '28px', margin: '0 0 15px 12px', display: 'inline-block' }} className="SIGNUP_FLD_TQ">
                  <input type="button" style={{ textAlign: 'center', width: '100%', height: '100%', zIndex: 5, border: '0px', color: 'rgb(255, 255, 255)', cursor: 'pointer', outline: 'none', fontSize: '14px', backgroundColor: 'rgb(38, 165, 118)', borderRadius: '4px' }} name="SIGNUP_SUBMIT_BUTTON" id={`zcWebOptin_${uniqueId}`} value="Join us" />
                </div>
                <input type="hidden" id={`fieldBorder_${uniqueId}`} value="" />
                <input type="hidden" id={`submitType_${uniqueId}`} name="submitType" value="optinCustomView" />
                <input type="hidden" id={`emailReportId_${uniqueId}`} name="emailReportId" value="" />
                <input type="hidden" id={`formType_${uniqueId}`} name="formType" value="QuickForm" />
                <input type="hidden" name="zx" id={`cmpZuid_${uniqueId}`} value="1316ccdc8" />
                <input type="hidden" name="zcvers" value="3.0" />
                <input type="hidden" name="oldListIds" id={`allCheckedListIds_${uniqueId}`} value="" />
                <input type="hidden" id={`mode_${uniqueId}`} name="mode" value="OptinCreateView" />
                <input type="hidden" id={`zcld_${uniqueId}`} name="zcld" value="110489827e27f3fc3" />
                <input type="hidden" id={`zctd_${uniqueId}`} name="zctd" value="110489827e26e63c1" />
                <input type="hidden" id={`document_domain_${uniqueId}`} value="" />
                <input type="hidden" id={`zc_Url_${uniqueId}`} value="idzlf-cmpzourl.maillist-manage.com" />
                <input type="hidden" id={`new_optin_response_in_${uniqueId}`} value="0" />
                <input type="hidden" id={`duplicate_optin_response_in_${uniqueId}`} value="0" />
                <input type="hidden" name="zc_trackCode" id={`zc_trackCode_${uniqueId}`} value="ZCFORMVIEW" />
                <input type="hidden" id={`zc_formIx_${uniqueId}`} name="zc_formIx" value="3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6" />
                <input type="hidden" id={`viewFrom_${uniqueId}`} value="URL_ACTION" />
                <span style={{ display: 'none' }} id={`dt_CONTACT_EMAIL_${uniqueId}`}>1,true,6,Contact Email,2</span>
                <span style={{ display: 'none' }} id={`dt_FIRSTNAME_${uniqueId}`}>1,false,1,First Name,2</span>
                <span style={{ display: 'none' }} id={`dt_LASTNAME_${uniqueId}`}>1,false,1,Last Name,2</span>
              </form>
            </div>
          </div>
        </div>
        <img src="https://idzlf-cmpzourl.maillist-manage.com/images/spacer.gif" id={`refImage_${uniqueId}`} style={{ display: 'none' }} alt="" />
      </div>
      <input type="hidden" id={`signupFormType_${uniqueId}`} value="QuickForm_Horizontal" />
      <iframe name="_zcSignup" style={{ display: 'none' }} />
    </div>
  );
};
