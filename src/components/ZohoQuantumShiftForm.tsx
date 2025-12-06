import { useId, useRef, FormEvent } from "react";

const ZohoQuantumShiftForm = () => {
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
    <>
      <style>{`
        ::-webkit-input-placeholder { 
          color: rgb(106, 73, 162) 
        }
      `}</style>

      <div id={`sf_${uniqueId}`} data-type="signupform" style={{ opacity: 1 }}>
        <div id="customForm">
          <div data-name="SIGNUP_BODY" style={{ width: '300px', height: '380px', position: 'relative', margin: 'auto', backgroundColor: 'rgb(255, 255, 255)', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0 }}>
              <img src="https://campaign-image.com/zohocampaigns/1301d85c_sign_form_bg_41.png" style={{ width: '100%', height: '100%', position: 'relative' }} alt="" />
            </div>
            <div style={{ width: '300px', height: '380px', position: 'relative', fontFamily: '"Arial"', margin: 'auto' }}>
              <div style={{ position: 'relative' }}>
                <div id={`Zc_SignupSuccess_${uniqueId}`} style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tbody>
                      <tr>
                        <td width="10%">
                          <img className="successicon" src="https://idzlf-zgpm.maillist-manage.com/images/challangeiconenable.jpg" alt="" />
                        </td>
                        <td>
                          <span style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <form 
                ref={formRef}
                method="POST" 
                id={`zcampaignOptinForm_${uniqueId}`} 
                style={{ margin: '0px', width: '100%', color: 'rgb(255, 255, 255)' }} 
                action="https://idzlf-zgpm.maillist-manage.com/weboptin.zc" 
                target="_zcSignup"
                onSubmit={handleSubmit}
              >
                <div style={{ backgroundColor: 'rgb(255, 235, 232)', padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '11px', border: '1px solid rgb(255, 217, 211)', opacity: 1, position: 'absolute', width: '80%', margin: '20px 10%', boxShadow: 'rgb(27, 27, 27) 0px 5px 12px 0px', display: 'none' }} id={`errorMsgDiv_${uniqueId}`}>Please enter a valid email address.</div>
                <div style={{ textAlign: 'center', width: '100%', float: 'left', position: 'absolute', zIndex: 2, bottom: '75px' }}>
                  <div style={{ fontSize: '22px', fontWeight: 500, fontFamily: 'Poppins, Arial', lineHeight: 1.556, margin: '0px', color: 'rgb(0, 0, 0)', width: '100%', float: 'left', textAlign: 'center' }}>Join Our Next Cohort</div>
                  <div style={{ fontSize: '18px', color: 'rgb(72, 72, 72)', lineHeight: 1.5, width: '100%', float: 'left', margin: '10px 0', fontWeight: 400, fontFamily: '"Roboto", "Arial"' }}>Waiting list</div>
                  <div style={{ textAlign: 'center', margin: '20px 0', width: '210px', height: '35px', marginBottom: '10px', display: 'inline-block' }}>
                    <input type="email" placeholder="Email Address" name="CONTACT_EMAIL" id={`EMBED_FORM_EMAIL_LABEL_${uniqueId}`} style={{ border: '1px solid rgb(0, 0, 0)', backgroundColor: 'rgb(240, 240, 240)', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px', boxSizing: 'border-box', color: 'rgb(0, 0, 0)', fontFamily: 'Poppins, Arial', fontSize: '12px' }} required />
                  </div>
                  <div style={{ position: 'relative', width: '210px', height: '35px', display: 'inline-block' }}>
                    <input type="submit" style={{ textAlign: 'center', borderRadius: '0px', backgroundColor: 'rgb(38, 165, 118)', width: '100%', height: '100%', zIndex: 5, border: '0px', color: 'rgb(255, 255, 255)', cursor: 'pointer', outline: 'none', fontFamily: 'Arial', fontSize: '14px' }} name="SIGNUP_SUBMIT_BUTTON" id={`zcWebOptin_${uniqueId}`} value="SIGN UP" />
                  </div>
                </div>
                <input type="hidden" name="submitType" value="optinCustomView" />
                <input type="hidden" name="emailReportId" value="" />
                <input type="hidden" name="formType" value="QuickForm" />
                <input type="hidden" name="zx" value="1316ccdc8" />
                <input type="hidden" name="zcvers" value="3.0" />
                <input type="hidden" name="oldListIds" value="" />
                <input type="hidden" name="mode" value="OptinCreateView" />
                <input type="hidden" name="zcld" value="110489827e2838df6" />
                <input type="hidden" name="zctd" value="" />
                <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
                <input type="hidden" name="zc_formIx" value="3z3d70536b0878d0b828323880970032fb14170799e17ba46c4b5549c699ff8a5b" />
                <input type="hidden" name="viewFrom" value="URL_ACTION" />
              </form>
            </div>
          </div>
        </div>
        <img src="https://idzlf-zgpm.maillist-manage.com/images/spacer.gif" style={{ display: 'none' }} alt="" />
      </div>
      <input type="hidden" value="QuickForm_Vertical" />
      <iframe name="_zcSignup" style={{ display: 'none' }} title="Zoho Signup" />
    </>
  );
};

export default ZohoQuantumShiftForm;
