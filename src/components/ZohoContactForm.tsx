import { motion } from "framer-motion";
import { useId, useRef, FormEvent } from "react";

interface ZohoContactFormProps {
  className?: string;
  title?: string;
  description?: string;
}

const ZohoContactForm = ({ 
  className = "", 
  title = "Get In Touch",
  description = "Fill out the form below and we'll get back to you within 24 hours"
}: ZohoContactFormProps) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {(title || description) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
          {description && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
        </div>
      )}
      <div className="w-full max-w-3xl mx-auto">
        <style dangerouslySetInnerHTML={{__html: `
#sf_${uniqueId} #customForm *:not(.dateClass){
-webkit-box-sizing: border-box !important;
-moz-box-sizing: border-box !important;
box-sizing: border-box !important;
word-break:break-word;
overflow-wrap: break-word;
}
#sf_${uniqueId} .zcinputbox{
width:100% !important;
max-width:100% !important;
}
@media only screen and (max-width: 580px){
#sf_${uniqueId} #signupMainDiv{
width:100% !important;
min-width:100% !important;
margin: 0px auto !important;
}
#sf_${uniqueId} .zcinputbox{
width:100% !important;
max-width:100% !important;
float:none !important;
}
#sf_${uniqueId} [name="SIGNUP_FORM_LABEL"]{
float:none !important;
width:100% !important;
margin-bottom: 5px !important;
}
}
#sf_${uniqueId} .bdr_btm_hover{background-color:#f9f9f9; padding:10px;}
#sf_${uniqueId} .bdr_btm{padding:10px }
#sf_${uniqueId} .f14{font-size:14px}
        `}} />
        
        <div id={`sf_${uniqueId}`} data-type="signupform">
          <div id="customForm">
            <div id="SIGNUP_PAGE" style={{padding: '40px 30px 30px', backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Verdana', textAlign: 'center', fontSize: '8px'}}>
              <div style={{margin:'0px auto'}}>
                <div id="imgBlock" style={{width: '100%', maxWidth: '600px', margin: '0px auto', fontFamily: 'Arial, Helvetica, sans-serif', paddingBottom: '10px', color: 'rgb(68, 68, 68)', textAlign: 'left', fontSize: '12px', paddingTop: '10px', fontWeight: 'bold'}}>
                  <img src="https://stratus.campaign-image.com/images/1316ccdc8_nobgblack.png" style={{width: '164px', maxWidth: '100%', height: 'auto'}} alt="Logo" />
                </div>
              </div>
              <br />
              <div id="signupMainDiv" style={{margin: '0px auto', width: '100%', minWidth: '230px', maxWidth: '600px'}}>
                <div>
                  <div style={{position:'relative'}}>
                    <div id={`Zc_SignupSuccess_${uniqueId}`} style={{display:'none',position:'absolute',marginLeft:'4%',width:'90%',backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px',marginBottom:'10px',wordBreak:'break-all'}}>
                      <table width="100%" cellPadding="0" cellSpacing="0" style={{border: 0}}>
                        <tbody>
                          <tr>
                            <td width="10%">
                              <img src="https://idzlf-cmpzourl.maillist-manage.com/images/challangeiconenable.jpg" alt="Success" />
                            </td>
                            <td>
                              <span style={{color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px',wordBreak:'break-word'}}>&nbsp;&nbsp;Thank you for Signing Up</span>
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
                    style={{margin:'0px'}} 
                    action="https://idzlf-cmpzourl.maillist-manage.com/weboptin.zc" 
                    target="_zcSignup"
                    onSubmit={handleSubmit}
                  >
                    <div id="SIGNUP_BODY_ALL" style={{border: '1px none rgb(218, 216, 216)'}}>
                      <div style={{padding: '20px', textAlign: 'center', backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Verdana', color: 'rgb(68, 68, 68)', fontSize: '14px'}} id="SIGNUP_BODY">
                        <div style={{margin:'0px auto',textAlign:'left'}}>
                          <div style={{display:'none',backgroundColor:'#FFEBE8',padding:'10px 10px', color:'#d20000', fontSize:'11px', margin:'10px 0px',border:'solid 1px #ffd9d3', marginTop:'20px'}} id={`errorMsgDiv_${uniqueId}`}>&nbsp;&nbsp;Please enter a valid email address.</div>
                          <div>
                            <div style={{fontSize:'12px', marginTop:'10px'}}>
                              {/* Email Field */}
                              <div style={{padding:'10px 0px 10px 0px'}}>
                                <div style={{width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px'}}>Email&nbsp;
                                  <span style={{color: 'rgb(180, 0, 0)', fontSize: '11px', fontFamily: 'Arial, Helvetica, sans-serif'}}>*</span>
                                </div>
                                <div style={{width:'60%', float:'left', minWidth:'170px', maxWidth:'70%'}} className="zcinputbox">
                                  <input name="CONTACT_EMAIL" style={{height: '28px', padding: '0px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box'}} maxLength={100} type="email" required />
                                </div>
                                <div style={{clear:'both'}}></div>
                              </div>

                              {/* First Name Field */}
                              <div style={{padding:'10px 0px 10px 0px'}}>
                                <div style={{width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px'}}>First Name&nbsp;</div>
                                <div style={{width:'60%', float:'left', minWidth:'170px', maxWidth:'70%'}} className="zcinputbox">
                                  <input name="FIRSTNAME" style={{height: '28px', padding: '0px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box'}} maxLength={100} type="text" />
                                </div>
                                <div style={{clear:'both'}}></div>
                              </div>

                              {/* Cell Phone Field */}
                              <div style={{padding:'10px 0px 10px 0px'}}>
                                <div style={{width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px'}}>Cell Phone&nbsp;</div>
                                <div style={{width:'60%', float:'left', minWidth:'170px', maxWidth:'70%'}} className="zcinputbox">
                                  <input name="PHONE" style={{height: '28px', padding: '0px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box'}} maxLength={20} type="text" />
                                </div>
                                <div style={{clear:'both'}}></div>
                              </div>

                              {/* Choose Your Path Field */}
                              <div style={{padding:'10px 0px 10px 0px'}}>
                                <div style={{width: '130px', float: 'left', marginTop: '5px', textAlign: 'left', marginRight: '5px', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px'}}>Choose Your Path&nbsp;</div>
                                <div style={{width:'60%', float:'left', minWidth:'170px', maxWidth:'70%', position:'relative'}} className="zcinputbox">
                                  <select name="CONTACT_CF4" multiple style={{padding: '0px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box', height: '84px'}}>
                                    <option value="For Your Business">For Your Business</option>
                                    <option value="For Your Team">For Your Team</option>
                                    <option value="For Yourself">For Yourself</option>
                                  </select>
                                </div>
                                <div style={{clear:'both'}}></div>
                              </div>

                              {/* Anything Further Field */}
                              <div style={{padding:'10px 0px 10px 0px'}}>
                                <div style={{width: '130px', float: 'left', marginTop: '5px', textAlign: 'left', marginRight: '5px', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px'}}>Anything Further You'd Like to Add?&nbsp;</div>
                                <div style={{width:'60%', float:'left', minWidth:'170px', maxWidth:'70%', position:'relative'}} className="zcinputbox">
                                  <textarea name="NOTE" maxLength={300} style={{padding: '0px', width: '95%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box', height: '84px'}}></textarea>
                                </div>
                                <div style={{clear:'both'}}></div>
                              </div>

                              {/* Hidden Lead Source */}
                              <div style={{display:'none'}}>
                                <div style={{width: '130px', float: 'left', marginTop: '5px', textAlign: 'left', marginRight: '5px', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px'}}>Lead Source&nbsp;</div>
                                <div style={{width:'60%', float:'left', minWidth:'170px', maxWidth:'70%', position:'relative'}} className="zcinputbox">
                                  <select name="LEAD_SOURCE" defaultValue="Contact Us" style={{height: '28px', padding: '0px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box'}}>
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
                                </div>
                                <div style={{clear:'both'}}></div>
                              </div>
                            </div>

                            <div style={{borderBottom:'#ebebeb dotted 1px', marginTop:'10px', clear:'both'}}></div>
                            <div style={{color: 'rgb(180, 0, 0)', fontSize: '11px', fontFamily: 'Arial, Helvetica, sans-serif', padding: '10px 10px 10px 0px'}}>*Required Fields</div>
                            <div style={{padding:'10px', textAlign:'center'}}>
                              <input type="submit" style={{cursor: 'pointer', appearance: 'none', borderRadius: '3px', outline: 'none', padding: '5px 15px', textAlign: 'center', color: 'rgb(255, 255, 255)', fontSize: '28px', backgroundColor: 'rgb(79, 211, 158)', borderStyle: 'none', fontFamily: 'Georgia', whiteSpace: 'normal'}} value="Let's Talk" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Hidden fields */}
                      <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
                      <input type="hidden" name="viewFrom" value="URL_ACTION" />
                      <input type="hidden" name="submitType" value="optinCustomView" />
                      <input type="hidden" name="lD" value="110489827e2837d45" />
                      <input type="hidden" name="emailReportId" value="" />
                      <input type="hidden" name="zx" value="1316ccdc8" />
                      <input type="hidden" name="zcvers" value="3.0" />
                      <input type="hidden" name="oldListIds" value="" />
                      <input type="hidden" name="mode" value="OptinCreateView" />
                      <input type="hidden" name="zcld" value="110489827e2837d45" />
                      <input type="hidden" name="zctd" value="110489827e26e63c1" />
                      <input type="hidden" name="zc_formIx" value="3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <iframe name="_zcSignup" style={{display: 'none'}} title="Zoho Signup" />
      </div>
    </motion.div>
  );
};

export default ZohoContactForm;
