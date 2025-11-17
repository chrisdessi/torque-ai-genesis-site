import { useEffect } from "react";

const ZohoEnterpriseForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://idzlf-zgpm.maillist-manage.com/js/optin.min.js";
    script.onload = () => {
      // @ts-ignore
      if (window.setupSF) {
        // @ts-ignore
        window.setupSF('sf3z3d70536b0878d0b828323880970032fb191bc797342dc15abab152d6944d47bb','ZCFORMVIEW',false,'acc',false,'2');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>{`
        ::-webkit-input-placeholder { 
          color: rgb(106, 73, 162) 
        }
      `}</style>

      <div id="sf3z3d70536b0878d0b828323880970032fb191bc797342dc15abab152d6944d47bb" data-type="signupform" style={{ opacity: 1 }}>
        <div id="customForm">
          <div data-name="SIGNUP_BODY" style={{ width: '300px', height: '380px', position: 'relative', margin: 'auto', backgroundColor: 'rgb(255, 255, 255)', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0 }}>
              <img src="https://campaign-image.com/zohocampaigns/1301d85c_sign_form_bg_41.png" style={{ width: '100%', height: '100%', position: 'relative' }} alt="" />
            </div>
            <div style={{ width: '300px', height: '380px', position: 'relative', fontFamily: '"Arial"', margin: 'auto' }}>
              <div style={{ position: 'relative' }}>
                <div id="Zc_SignupSuccess" style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tbody>
                      <tr>
                        <td width="10%">
                          <img className="successicon" src="https://idzlf-zgpm.maillist-manage.com/images/challangeiconenable.jpg" alt="" />
                        </td>
                        <td>
                          <span id="signupSuccessMsg" style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <form method="POST" id="zcampaignOptinForm" style={{ margin: '0px', width: '100%', color: 'rgb(255, 255, 255)' }} action="https://idzlf-zgpm.maillist-manage.com/weboptin.zc" target="_zcSignup">
                <div style={{ backgroundColor: 'rgb(255, 235, 232)', padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '11px', border: '1px solid rgb(255, 217, 211)', opacity: 1, position: 'absolute', width: '80%', margin: '20px 10%', boxShadow: 'rgb(27, 27, 27) 0px 5px 12px 0px', display: 'none' }} id="errorMsgDiv">Please correct the marked field(s) below.</div>
                <div style={{ textAlign: 'center', width: '100%', float: 'left', position: 'absolute', zIndex: 2, bottom: '75px' }}>
                  <div style={{ fontSize: '22px', fontWeight: 500, fontFamily: 'Poppins, Arial', lineHeight: 1.556, margin: '0px', color: 'rgb(0, 0, 0)', width: '100%', float: 'left', textAlign: 'center' }}>Join Our Next Cohort</div>
                  <div style={{ fontSize: '18px', color: 'rgb(72, 72, 72)', lineHeight: 1.5, width: '100%', float: 'left', margin: '10px 0', fontWeight: 400, fontFamily: '"Roboto", "Arial"' }}>Waiting list</div>
                  <div style={{ textAlign: 'center', margin: '20px 0', width: '210px', height: '35px', marginBottom: '10px', display: 'inline-block' }}>
                    <input type="text" placeholder="Email Address" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" style={{ border: '1px solid rgb(0, 0, 0)', backgroundColor: 'rgb(240, 240, 240)', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px', boxSizing: 'border-box', color: 'rgb(0, 0, 0)', fontFamily: 'Poppins, Arial', fontSize: '12px' }} />
                  </div>
                  <div style={{ position: 'relative', width: '210px', height: '35px', display: 'inline-block' }}>
                    <input type="button" style={{ textAlign: 'center', borderRadius: '0px', backgroundColor: 'rgb(38, 165, 118)', width: '100%', height: '100%', zIndex: 5, border: '0px', color: 'rgb(255, 255, 255)', cursor: 'pointer', outline: 'none', fontFamily: 'Arial', fontSize: '14px' }} name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="SIGN UP" />
                  </div>
                </div>
                <input type="hidden" id="fieldBorder" value="" />
                <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                <input type="hidden" id="emailReportId" name="emailReportId" value="" />
                <input type="hidden" id="formType" name="formType" value="QuickForm" />
                <input type="hidden" name="zx" id="cmpZuid" value="1316ccdc8" />
                <input type="hidden" name="zcvers" value="3.0" />
                <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                <input type="hidden" id="zcld" name="zcld" value="110489827e2838e02" />
                <input type="hidden" id="zctd" name="zctd" value="110489827e26e63c1" />
                <input type="hidden" id="document_domain" value="" />
                <input type="hidden" id="zc_Url" value="idzlf-zgpm.maillist-manage.com" />
                <input type="hidden" id="new_optin_response_in" value="0" />
                <input type="hidden" id="duplicate_optin_response_in" value="0" />
                <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z3d70536b0878d0b828323880970032fb191bc797342dc15abab152d6944d47bb" />
                <input type="hidden" id="viewFrom" value="URL_ACTION" />
                <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                <span style={{ display: 'none' }} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                <span style={{ display: 'none' }} id="dt_LASTNAME">1,false,1,Last Name,2</span>
              </form>
            </div>
          </div>
        </div>
        <img src="https://idzlf-zgpm.maillist-manage.com/images/spacer.gif" id="refImage" style={{ display: 'none' }} alt="" />
      </div>
      <input type="hidden" id="signupFormType" value="QuickForm_Vertical" />
      <div id="zcOptinOverLay" style={{ display: 'none', textAlign: 'center', backgroundColor: 'rgb(0, 0, 0)', opacity: 0.5, zIndex: 100, position: 'fixed', width: '100%', top: '0px', left: '0px', height: '988px' }}></div>
      <div id="zcOptinSuccessPopup" style={{ display: 'none', zIndex: 9999, width: '800px', height: '40%', top: '84px', position: 'fixed', left: '26%', backgroundColor: '#FFFFFF', borderColor: '#E6E6E6', borderStyle: 'solid', borderWidth: '1px', boxShadow: '0 1px 10px #424242', padding: '35px' }}>
        <span style={{ position: 'absolute', top: '-16px', right: '-14px', zIndex: 99999, cursor: 'pointer' }} id="closeSuccess">
          <img src="https://idzlf-zgpm.maillist-manage.com/images/videoclose.png" alt="" />
        </span>
        <div id="zcOptinSuccessPanel"></div>
      </div>
    </>
  );
};

export default ZohoEnterpriseForm;
