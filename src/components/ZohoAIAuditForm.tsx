import { useId, useRef, FormEvent } from 'react';

const ZohoAIAuditForm = () => {
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
    <div className="w-full max-w-4xl mx-auto">
      <style dangerouslySetInnerHTML={{ __html: `
        #sf_${uniqueId} #customForm *:not(.dateClass) {
          -webkit-box-sizing: border-box !important;
          -moz-box-sizing: border-box !important;
          box-sizing: border-box !important;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        #sf_${uniqueId} .zcinputbox input {
          width: 100% !important;
        }
      `}} />
      
      <div id={`sf_${uniqueId}`} data-type="signupform">
        <div id="customForm">
          <div data-name="SIGNUP_PAGE" style={{ padding: '40px 30px 30px', backgroundColor: '#ffffff', fontFamily: 'Verdana', textAlign: 'center', fontSize: '8px' }}>
            <div style={{ margin: '0px auto' }}>
              <div style={{ width: '100%', maxWidth: '600px', margin: '0px auto', fontFamily: 'Arial, Helvetica, sans-serif', paddingBottom: '10px', color: '#444444', textAlign: 'left', fontSize: '12px', paddingTop: '10px', fontWeight: 'bold' }}>
                <img src="https://stratus.campaign-image.com/images/1316ccdc8_nobgblack.png" alt="Logo" style={{ width: '164px', maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
            <br />
            <div style={{ margin: '0px auto', width: '100%', minWidth: '230px', maxWidth: '600px' }}>
              <div>
                <div style={{ position: 'relative' }}>
                  <div id={`Zc_SignupSuccess_${uniqueId}`} style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ border: 0 }}>
                      <tbody>
                        <tr>
                          <td width="10%">
                            <img src="https://idzlf-zgpl.maillist-manage.com/images/challangeiconenable.jpg" alt="Success" />
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
                  style={{ margin: '0px' }} 
                  action="https://idzlf-zgpl.maillist-manage.com/weboptin.zc" 
                  target="_zcSignup"
                  onSubmit={handleSubmit}
                >
                  <div style={{ border: '1px none rgb(218, 216, 216)' }}>
                    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Verdana', color: 'rgb(68, 68, 68)', fontSize: '14px' }}>
                      <div style={{ margin: '0px auto', textAlign: 'left' }}>
                        <div style={{ display: 'none', backgroundColor: '#FFEBE8', padding: '10px 10px', color: '#d20000', fontSize: '11px', margin: '10px 0px', border: 'solid 1px #ffd9d3', marginTop: '20px' }} id={`errorMsgDiv_${uniqueId}`}>&nbsp;&nbsp;Please enter a valid email address.</div>
                        <div>
                          <div style={{ fontSize: '12px', marginTop: '10px' }}>
                            <div style={{ padding: '10px 0px' }}>
                              <div style={{ width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>Email&nbsp;<span style={{ color: 'rgb(180, 0, 0)', fontSize: '11px', fontFamily: 'Arial, Helvetica, sans-serif' }}>*</span></div>
                              <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%' }} className="zcinputbox">
                                <input name="CONTACT_EMAIL" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }} maxLength={100} type="email" required />
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>
                            <div style={{ padding: '10px 0px' }}>
                              <div style={{ width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>First Name&nbsp;</div>
                              <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%' }} className="zcinputbox">
                                <input name="FIRSTNAME" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }} maxLength={100} type="text" />
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>
                            <div style={{ padding: '10px 0px' }}>
                              <div style={{ width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>Cell Phone&nbsp;</div>
                              <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%' }} className="zcinputbox">
                                <input name="PHONE" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }} maxLength={20} type="text" />
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>
                          </div>
                          <div style={{ borderBottom: '#ebebeb dotted 1px', marginTop: '10px', clear: 'both' }}></div>
                          <div style={{ color: 'rgb(180, 0, 0)', fontSize: '11px', fontFamily: 'Arial, Helvetica, sans-serif', padding: '10px 10px 10px 0px' }}>*Required Fields</div>
                          <div style={{ padding: '10px', textAlign: 'center' }}>
                            <input type="submit" style={{ cursor: 'pointer', appearance: 'none', borderRadius: '3px', outline: 'none', padding: '5px 15px', textAlign: 'center', color: 'rgb(255, 255, 255)', fontSize: '22px', backgroundColor: 'rgb(38, 165, 118)', border: 'none', fontFamily: 'Verdana', whiteSpace: 'normal' }} value="Submit" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
                    <input type="hidden" name="viewFrom" value="URL_ACTION" />
                    <input type="hidden" name="submitType" value="optinCustomView" />
                    <input type="hidden" name="emailReportId" value="" />
                    <input type="hidden" name="zx" value="1316ccdc8" />
                    <input type="hidden" name="zcvers" value="3.0" />
                    <input type="hidden" name="oldListIds" value="" />
                    <input type="hidden" name="mode" value="OptinCreateView" />
                    <input type="hidden" name="zcld" value="110489827e27f3fc3" />
                    <input type="hidden" name="zctd" value="110489827e26e63c1" />
                    <input type="hidden" name="zc_formIx" value="3zd785347fbb8bca06ba2d474323b850dc3aec5cf04c3a80df934b070f1a2b4a28" />
                  </div>
                </form>
              </div>
              <div style={{ margin: '0px auto', marginTop: '20px', textAlign: 'left', minHeight: '76px' }}>
                <span style={{ color: '#666', fontSize: '12px' }}>Note: It is our responsibility to protect your privacy and we guarantee that your data will be completely confidential.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe name="_zcSignup" style={{ display: 'none' }} title="Zoho Signup" />
    </div>
  );
};

export default ZohoAIAuditForm;
