import { useId, useRef, FormEvent } from "react";

const ZohoEnterpriseForm = () => {
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
    <div className="w-full max-w-2xl mx-auto">
      <style>{`
        #sf_${uniqueId} #customForm *:not(.dateClass) {
          box-sizing: border-box !important;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        #sf_${uniqueId} .zcinputbox input {
          width: 100% !important;
        }
      `}</style>
      <div id={`sf_${uniqueId}`} data-type="signupform">
        <div id="customForm">
          <input type="hidden" id="recapTheme" value="2" />
          <input type="hidden" id="isRecapIntegDone" value="false" />
          <input type="hidden" id="signupFormMode" value="copyCode" />
          <input type="hidden" id="signupFormType" value="LargeForm_Vertical" />
          <input type="hidden" id="recapModeTheme" value="" />
          <div data-name="SIGNUP_PAGE" className="large_form_1_css" id="SIGNUP_PAGE" style={{ padding: '40px 30px 30px', backgroundColor: '#ffffff', fontFamily: 'Verdana', color: '#ffffff', textAlign: 'center', fontSize: '8px' }}>
            <div style={{ margin: '0px auto' }}>
              <div id="imgBlock" style={{ width: '100%', maxWidth: '600px', margin: '0px auto', fontFamily: 'Arial, Helvetica, sans-serif', paddingBottom: '10px', color: '#444444', textAlign: 'left', fontSize: '12px', paddingTop: '10px', fontWeight: 'bold' }}>
                <img src="https://stratus.campaign-image.com/images/1316ccdc8_nobgblack.png" alt="Logo" style={{ width: '164px', maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
            <br />
            <div id="signupMainDiv" style={{ margin: '0px auto', width: '100%', minWidth: '230px', maxWidth: '600px' }}>
              <div>
                <div style={{ position: 'relative' }}>
                  <div id={`Zc_SignupSuccess_${uniqueId}`} style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ border: 0 }}>
                      <tbody>
                        <tr>
                          <td width="10%">
                            <img className="successicon" src="https://idzlf-cmpzourl.maillist-manage.com/images/challangeiconenable.jpg" alt="Success" />
                          </td>
                          <td>
                            <span id={`signupSuccessMsg_${uniqueId}`} style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span>
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
                  action="https://idzlf-cmpzourl.maillist-manage.com/weboptin.zc" 
                  target="_zcSignup"
                  onSubmit={handleSubmit}
                >
                  <div id="SIGNUP_BODY_ALL" style={{ border: '1px none rgb(218, 216, 216)' }}>
                    <h1 style={{ color: 'rgb(191, 0, 3)', fontSize: '14px', fontFamily: '"MS Serif"', margin: '0px', textAlign: 'left', padding: '20px', backgroundColor: 'rgb(255, 255, 255)', wordBreak: 'break-word', borderColor: 'rgb(191, 0, 3)', borderWidth: '2px', borderStyle: 'solid' }} id="SIGNUP_HEADING">⚠️ Limited spaces left! Enrollment closes in one week, or as soon as spaces are filled.&nbsp;</h1>
                    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Verdana', color: 'rgb(68, 68, 68)', fontSize: '14px' }} id="SIGNUP_BODY">
                      <div style={{ margin: '0px auto', textAlign: 'left' }}>
                        <div style={{ display: 'none', backgroundColor: '#FFEBE8', padding: '10px 10px', color: '#d20000', fontSize: '11px', margin: '10px 0px', border: 'solid 1px #ffd9d3', marginTop: '20px' }} id={`errorMsgDiv_${uniqueId}`}>&nbsp;&nbsp;Please correct the marked field(s) below.</div>
                        <div>
                          <div style={{ fontSize: '12px', marginTop: '10px' }}>
                            <div style={{ padding: '10px 0px' }}>
                              <div style={{ width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>Email&nbsp;<span style={{ color: 'rgb(180, 0, 0)', fontSize: '11px', fontFamily: 'Arial, Helvetica, sans-serif' }}>*</span></div>
                              <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%' }} className="zcinputbox">
                                <input name="CONTACT_EMAIL" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }} maxLength={100} type="email" required />
                                <span style={{ display: 'none' }} id={`dt_CONTACT_EMAIL_${uniqueId}`}>1,true,6,Contact Email,2</span>
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>
                            <div style={{ padding: '10px 0px' }}>
                              <div style={{ width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>First Name&nbsp;</div>
                              <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%' }} className="zcinputbox">
                                <input name="FIRSTNAME" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }} maxLength={100} type="text" />
                                <span style={{ display: 'none' }} id={`dt_FIRSTNAME_${uniqueId}`}>1,false,1,First Name,2</span>
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>
                            <div style={{ padding: '10px 0px' }}>
                              <div style={{ width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>Cell Phone&nbsp;</div>
                              <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%' }} className="zcinputbox">
                                <input name="PHONE" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }} maxLength={20} type="text" />
                                <span style={{ display: 'none' }} id={`dt_PHONE_${uniqueId}`}>1,false,1,Phone,2</span>
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>
                            <div style={{ display: 'none' }}>
                              <div style={{ width: '130px', float: 'left', marginTop: '5px', textAlign: 'left', marginRight: '5px', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>Lead Source&nbsp;</div>
                              <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%', position: 'relative' }} className="zcinputbox">
                                <select name="LEAD_SOURCE" defaultValue="Contact Us" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }}>
                                  <option value="Networking">Networking</option>
                                  <option value="Contact Us">Contact Us</option>
                                  <option value="Cold call">Cold call</option>
                                  <option value="Social Media">Social Media</option>
                                  <option value="Web Forms">Web Forms</option>
                                  <option value="Trade Shows">Trade Shows</option>
                                  <option value="Webinars">Webinars</option>
                                  <option value="Organic Search">Organic Search</option>
                                  <option value="Referrals">Referrals</option>
                                  <option value="Chat">Chat</option>
                                  <option value="Advertisements">Advertisements</option>
                                </select>
                                <span style={{ display: 'none' }} id={`dt_LEAD_SOURCE_${uniqueId}`}>1,false,3,Lead Source,2</span>
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>
                          </div>
                          <div style={{ borderBottom: '#ebebeb dotted 1px', marginTop: '10px', clear: 'both' }}></div>
                          <div id="REQUIRED_FIELD_TEXT" style={{ color: 'rgb(180, 0, 0)', fontSize: '11px', fontFamily: 'Arial, Helvetica, sans-serif', padding: '10px 10px 10px 0px' }}>*Required Fields</div>
                          <div style={{ padding: '10px', textAlign: 'center' }}>
                            <input type="submit" id={`zcWebOptin_${uniqueId}`} name="SIGNUP_SUBMIT_BUTTON" style={{ cursor: 'pointer', appearance: 'none', borderRadius: '3px', outline: 'none', padding: '5px 15px', textAlign: 'center', color: 'rgb(255, 255, 255)', fontSize: '22px', backgroundColor: 'rgb(191, 0, 3)', border: 'none', fontFamily: 'Verdana', whiteSpace: 'normal' }} value="APPLY NOW" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <input type="hidden" id={`fieldBorder_${uniqueId}`} value="" />
                    <input type="hidden" name="zc_trackCode" id={`zc_trackCode_${uniqueId}`} value="ZCFORMVIEW" />
                    <input type="hidden" name="viewFrom" id={`viewFrom_${uniqueId}`} value="URL_ACTION" />
                    <input type="hidden" id={`submitType_${uniqueId}`} name="submitType" value="optinCustomView" />
                    <input type="hidden" id={`lD_${uniqueId}`} name="lD" value="110489827e2838e02" />
                    <input type="hidden" name="emailReportId" id={`emailReportId_${uniqueId}`} value="" />
                    <input type="hidden" name="zx" id={`cmpZuid_${uniqueId}`} value="1316ccdc8" />
                    <input type="hidden" name="zcvers" value="3.0" />
                    <input type="hidden" name="oldListIds" id={`allCheckedListIds_${uniqueId}`} value="" />
                    <input type="hidden" id={`mode_${uniqueId}`} name="mode" value="OptinCreateView" />
                    <input type="hidden" id={`zcld_${uniqueId}`} name="zcld" value="110489827e2838e02" />
                    <input type="hidden" id={`zctd_${uniqueId}`} name="zctd" value="110489827e26e63c1" />
                    <input type="hidden" id={`document_domain_${uniqueId}`} value="" />
                    <input type="hidden" id={`zc_Url_${uniqueId}`} value="idzlf-cmpzourl.maillist-manage.com" />
                    <input type="hidden" id={`new_optin_response_in_${uniqueId}`} value="0" />
                    <input type="hidden" id={`duplicate_optin_response_in_${uniqueId}`} value="0" />
                    <input type="hidden" id={`zc_formIx_${uniqueId}`} name="zc_formIx" value="3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb" />
                  </div>
                </form>
              </div>
              <div style={{ margin: '0px auto', marginTop: '20px', textAlign: 'left', minHeight: '76px' }} id="privacyNotes">
                <span style={{ color: '#666', fontSize: '12px' }}>Note: It is our responsibility to protect your privacy and we guarantee that your data will be completely confidential.</span>
              </div>
            </div>
          </div>
          <input type="hidden" id="isCaptchaNeeded" value="false" />
          <input type="hidden" id="superAdminCap" value="0" />
        </div>
      </div>
      <div id={`zcOptinOverLay_${uniqueId}`} style={{ display: 'none', textAlign: 'center', backgroundColor: 'rgb(0, 0, 0)', opacity: 0.5, zIndex: 100, position: 'fixed', width: '100%', top: '0px', left: '0px', height: '988px' }}></div>
      <div id={`zcOptinSuccessPopup_${uniqueId}`} style={{ display: 'none', zIndex: 9999, width: '800px', height: '40%', top: '84px', position: 'fixed', left: '26%', backgroundColor: '#FFFFFF', borderColor: '#E6E6E6', borderStyle: 'solid', borderWidth: '1px', boxShadow: '0 1px 10px #424242', padding: '35px' }}>
        <span style={{ position: 'absolute', top: '-16px', right: '-14px', zIndex: 99999, cursor: 'pointer' }} id={`closeSuccess_${uniqueId}`}>
          <img src="https://idzlf-cmpzourl.maillist-manage.com/images/videoclose.png" alt="Close" />
        </span>
        <div id={`zcOptinSuccessPanel_${uniqueId}`}></div>
      </div>
      <iframe name="_zcSignup" style={{ display: 'none' }} title="Zoho Signup" />
    </div>
  );
};

export default ZohoEnterpriseForm;
