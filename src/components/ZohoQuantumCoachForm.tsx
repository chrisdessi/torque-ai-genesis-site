import { useEffect } from "react";

const ZohoQuantumCoachForm = () => {
  useEffect(() => {
    // Load the Zoho Campaigns script
    const script = document.createElement('script');
    script.src = "https://idzlf-zgpl.maillist-manage.com/js/optin.min.js";
    script.onload = () => {
      // @ts-ignore
      if (window.setupSF) {
        // @ts-ignore
        window.setupSF('sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc','ZCFORMVIEW',false,'acc',false,'2');
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
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #customForm *:not(.dateClass){
        -webkit-box-sizing: border-box !important;
        -moz-box-sizing: border-box !important;
        box-sizing: border-box !important;
        word-break:break-word;
        overflow-wrap: break-word;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .dateClass{
        -webkit-box-sizing: unset!important;
        -moz-box-sizing: unset !important;
        box-sizing: unset !important;
        word-break:break-word;
        overflow-wrap: break-word;
        }
        /*** RESPONSIVE START */
        @media only screen and (max-width: 319px){
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #signupMainDiv{
        width:220px !important;
        min-width:220px !important;
        margin: 0px auto !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #SIGNUP_PAGE{
        padding:0px !important	
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc [changeitem="SIGNUP_FORM_FIELD"]{
        width:94% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .zcinputbox{
        width:100% !important;
        max-width:100% !important;
        float:none !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaDiv{
        width:69.5% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captcha{
        width:69.5% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #recapDiv
        {
        margin-left: 0px !important;
        max-width: 100% !important;
        overflow: hidden !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #relCaptcha{
        margin-right:11px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #imgBlock{
        width:220px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .recaptcha{
        transform:scale(0.55);-webkit-transform:scale(0.55);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
        }
        /*Major Mobiles*/
        @media screen and (min-width: 320px) and (max-width: 580px){
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #signupMainDiv{
        width:280px !important;
        min-width:280px !important;
        margin: 0px auto !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #imgBlock{
        width:280px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #SIGNUP_PAGE{
        padding:0px !important	
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .zcinputbox{
        width:100% !important;
        max-width:100% !important;
        float:none !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc [changeitem="SIGNUP_FORM_FIELD"]{
        width:95% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaDiv{
        width:76% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captcha{
        width:76% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #recapDiv
        {
        margin-left: 0px !important;
        max-width: 100% !important;
        overflow: hidden !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaParent{
        width:100% !important;
        max-width:100% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaText{
        width:95.7% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #relCaptcha{
        margin-right:9px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #capRequired{
        margin-right: -10px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .recaptcha{
        transform:scale(0.72);-webkit-transform:scale(0.75);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
        }
        @media screen and (min-width:581px) and (max-width: 640px){
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #signupMainDiv{
        width:440px !important;
        min-width:440px !important;
        margin: 0px auto !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #imgBlock{
        width:440px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .zcinputbox{
        width:100% !important;
        max-width:100% !important;
        float:none !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc [changeitem="SIGNUP_FORM_FIELD"]{
        width:95% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captcha{
        width:84.4% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #recapDiv
        {
        margin-left: 0px !important;
        max-width: 100% !important;
        overflow: hidden !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaParent{
        float:none !important;
        max-width:100% !important;
        width:100% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaText{
        width:96% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #relCaptcha{
        margin-right:14px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #capRequired{
        margin-right: -10px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .recaptcha{
        transform:scale(1.13);-webkit-transform:scale(1.45);margin-bottom:40px;transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
        }
        @media screen and (min-width:645px) and (max-width: 767px){
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #signupMainDiv{
        width:440px !important;
        min-width:440px !important;
        margin: 0px auto !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #imgBlock{
        width:440px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .zcinputbox{
        width:100% !important;
        max-width:100% !important;
        float:none !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc [changeitem="SIGNUP_FORM_FIELD"]{
        width:95% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaDiv{
        width:84.4% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captcha{
        width:84.4% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaParent{
        float:none !important;
        max-width:100% !important;
        width:100% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaText{
        width:96% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #relCaptcha{
        margin-right:14px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #recapDiv
        {
        margin-left: 0px !important;
        max-width: 100% !important;
        overflow: hidden !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #capRequired{
        margin-right: -10px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .recaptcha{
        transform:scale(1.13);-webkit-transform:scale(1.25);margin-bottom:40px;transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
        }
        /* Desktops and laptops ----------- */
        @media only screen  and (min-width : 1025px) {
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #signupMainDiv{
        width:600px !important;
        min-width:600px !important;
        margin: 0px auto !important;	
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #imgBlock{
        width:600px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .recaptcha{
        transform:scale(1.03);-webkit-transform:scale(1.08);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:130px}
        }
        /* Large Screens */
        @media only screen  and (min-width : 1824px) {
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #signupMainDiv{
        width:600px !important;
        min-width:600px !important;
        margin: 0px auto !important;	
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #imgBlock{
        width:600px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .recaptcha{
        transform:scale(1.03);-webkit-transform:scale(1.08);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:130px}
        }
        @media only screen and (min-device-width: 1200px) and (max-device-width:1200px){
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #signupMainDiv{
        width:600px !important;
        min-width:600px !important;
        margin: 0px auto !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #imgBlock{
        width:600px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .recaptcha{
        transform:scale(1.03);-webkit-transform:scale(1.08);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:130px}
        }
        @media only screen and (min-width : 321px) and (max-width : 519px){
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #signupMainDiv{
        width:300px !important;
        min-width:240px !important;
        margin: 0px auto !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #imgBlock{
        width:300px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaDiv{
        width:81.4% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captcha{
        width:81.4% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #relCaptcha{
        margin-right:3px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .recaptcha{
        transform:scale(0.72);-webkit-transform:scale(0.75);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
        }
        @media only screen and (min-width : 521px) and (max-width : 719px){
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #signupMainDiv{
        width:500px !important;
        min-width:240px !important;
        margin: 0px auto !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc 	#imgBlock{
        width:500px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc 	#captchaDiv{
        width:81.4% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captcha{
        width:81.4% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #relCaptcha{
        margin-right:3px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc 	.recaptcha{
        transform:scale(0.72);-webkit-transform:scale(0.75);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
        }
        /* iPads*/
        @media only screen and (min-width : 768px) and (max-width : 1024px){
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #signupMainDiv{
        width:500px !important;
        min-width:240px !important;
        margin: 0px auto !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #imgBlock{
        width:500px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captchaDiv{
        width:81.4% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #captcha{
        width:81.4% !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc #relCaptcha{
        margin-right:3px !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .recaptcha{
        transform:scale(0.90);-webkit-transform:scale(0.90);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:134px}
        }
        /*** RESPONSIVE END */
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .bdr_btm_hover{background-color:#f9f9f9; padding:10px;}
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .bdr_btm{padding:10px }
        #sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc .f14{font-size:14px}
      `}</style>

      <div id="sf3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc" data-type="signupform">
        <div id="customForm">
          <input type="hidden" id="recapTheme" value="2" />
          <input type="hidden" id="isRecapIntegDone" value="false" />
          <input type="hidden" id="signupFormMode" value="copyCode" />
          <input type="hidden" id="signupFormType" value="LargeForm_Vertical" />
          <input type="hidden" id="recapModeTheme" value="" />

          <div className="large_form_1_css" id="SIGNUP_PAGE" style={{ padding: '40px 30px 30px', backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Verdana', color: 'rgb(255, 255, 255)', textAlign: 'center', fontSize: '8px' }}>
            <div style={{ margin: '0px auto' }}>
              <div id="imgBlock" style={{ width: '600px', margin: '0px auto', fontFamily: 'Arial, Helvetica, sans-serif', paddingBottom: '10px', color: 'rgb(68, 68, 68)', textAlign: 'left', fontSize: '12px', paddingTop: '10px', fontWeight: 'bold' }}>
                <img src="https://stratus.campaign-image.com/images/1316ccdc8_nobgblack.png" id="iframeImg" style={{ width: '164px', maxWidth: '100%', height: 'auto' }} alt="Logo" />
              </div>
            </div>
            <br />
            <div id="signupMainDiv" style={{ margin: '0px auto', width: '100%', minWidth: '230px', maxWidth: '600px' }}>
              <div>
                <div style={{ position: 'relative' }}>
                  <div id="Zc_SignupSuccess" style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                      <tbody>
                        <tr>
                          <td width="10%">
                            <img className="successicon" src="https://idzlf-zgpl.maillist-manage.com/images/challangeiconenable.jpg" alt="" />
                          </td>
                          <td>
                            <span id="signupSuccessMsg" style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <form method="POST" id="zcampaignOptinForm" style={{ margin: '0px' }} action="https://idzlf-zgpl.maillist-manage.com/weboptin.zc" target="_zcSignup">
                  <div id="SIGNUP_BODY_ALL" style={{ border: '1px none rgb(218, 216, 216)' }}>
                    <h1 style={{ color: 'rgb(255, 255, 255)', fontSize: '14px', fontFamily: 'Verdana', margin: '0px', textAlign: 'left', padding: '20px', backgroundColor: 'rgb(255, 255, 255)', wordBreak: 'break-word', borderColor: 'rgb(255, 255, 255)', borderWidth: '5px', borderStyle: 'none' }} id="SIGNUP_HEADING">
                      GET IN TOUCH
                    </h1>
                    
                    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Verdana', color: 'rgb(68, 68, 68)', bottom: '2px', fontSize: '14px', opacity: 1 }} id="SIGNUP_BODY">
                      <div style={{ margin: '0px auto', textAlign: 'left' }}>
                        <div style={{ lineHeight: '1.6' }} id="SIGNUP_DESCRIPTION"></div>
                        <div style={{ display: 'none', backgroundColor: '#FFEBE8', padding: '10px 10px', color: '#d20000', fontSize: '11px', margin: '10px 0px', border: 'solid 1px #ffd9d3', marginTop: '20px' }} id="errorMsgDiv">
                          &nbsp;&nbsp;Please correct the marked field(s) below.
                        </div>
                        
                        <div>
                          <div style={{ fontSize: '12px', marginTop: '10px' }} className="zcsffieldsdiv">
                            {/* Email Field */}
                            <div style={{ padding: '10px 0px 10px 0px' }}>
                              <div>
                                <div style={{ width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>
                                  Email&nbsp;<span style={{ color: 'rgb(180, 0, 0)', fontSize: '11px', fontFamily: 'Arial, Helvetica, sans-serif' }}>*</span>
                                </div>
                                <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%' }} className="zcinputbox">
                                  <input name="CONTACT_EMAIL" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }} maxLength={100} type="email" />
                                  <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                                </div>
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>

                            {/* First Name Field */}
                            <div style={{ padding: '10px 0px 10px 0px' }}>
                              <div>
                                <div style={{ width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>
                                  First Name&nbsp;
                                </div>
                                <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%' }} className="zcinputbox">
                                  <input name="FIRSTNAME" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }} maxLength={100} type="text" />
                                  <span style={{ display: 'none' }} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                                </div>
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>

                            {/* Cell Phone Field */}
                            <div style={{ padding: '10px 0px 10px 0px' }}>
                              <div>
                                <div style={{ width: '130px', float: 'left', marginTop: '5px', marginRight: '5px', textAlign: 'left', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>
                                  Cell Phone&nbsp;
                                </div>
                                <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%' }} className="zcinputbox">
                                  <input name="PHONE" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }} maxLength={20} type="text" />
                                  <span style={{ display: 'none' }} id="dt_PHONE">1,false,1,Phone,2</span>
                                </div>
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>

                            {/* Note Field */}
                            <div style={{ padding: '10px 0px 10px 0px' }}>
                              <div>
                                <div style={{ width: '130px', float: 'left', marginTop: '5px', textAlign: 'left', marginRight: '5px', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>
                                  What would you like to discuss?&nbsp;
                                </div>
                                <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%', position: 'relative' }} className="zcinputbox">
                                  <textarea name="NOTE" maxLength={300} style={{ padding: '2px', width: '95%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box', height: '84px' }}></textarea>
                                  <span style={{ display: 'none' }} id="dt_NOTE">1,false,5,Note,2</span>
                                </div>
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>

                            {/* Hidden Lead Source Field */}
                            <div style={{ display: 'none' }}>
                              <div>
                                <div style={{ width: '130px', float: 'left', marginTop: '5px', textAlign: 'left', marginRight: '5px', fontFamily: 'Arial', color: 'rgb(51, 51, 51)', fontSize: '14px' }}>
                                  Lead Source&nbsp;
                                </div>
                                <div style={{ width: '60%', float: 'left', minWidth: '170px', maxWidth: '70%', position: 'relative' }} className="zcinputbox">
                                  <select name="LEAD_SOURCE" style={{ height: '28px', padding: '2px', width: '97%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontFamily: 'Verdana', fontSize: '14px', boxSizing: 'border-box' }}>
                                    <option value="Networking">Networking</option>
                                    <option value="Contact Us" selected>Contact Us</option>
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
                                  <span style={{ display: 'none' }} id="dt_LEAD_SOURCE">1,false,3,Lead Source,2</span>
                                </div>
                              </div>
                              <div style={{ clear: 'both' }}></div>
                            </div>
                          </div>

                          {/* Captcha */}
                          <div style={{ padding: '10px 0px 10px 15px' }} id="captchaOld" className="recaptcha">
                            <div>
                              <div style={{ width: '59%', float: 'left', minWidth: '170px', maxWidth: '70%' }} id="captchaParent">
                                <img src="//campaigns.zoho.com/images/refresh_icon.png" style={{ cursor: 'pointer', float: 'right', marginRight: '4px' }} id="relCaptcha" alt="Refresh" />
                                <div id="captchaDiv" style={{ padding: '20px', background: '#fff', border: '1px solid rgb(222, 222, 222)', boxSizing: 'border-box', width: '98.8%' }}></div>
                                <input placeholder="Captcha" id="captchaText" name="captchaText" style={{ marginTop: '5px', height: '28px', padding: '2px', width: '98.7%', color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(222, 222, 222)', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'Verdana' }} maxLength={100} type="text" />
                                <span id="capRequired" style={{ color: '#B40000', fontSize: '11px', fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-16px', marginRight: '-2px', float: 'right' }}>*</span>
                              </div>
                            </div>
                            <div style={{ clear: 'both' }}></div>
                          </div>

                          <input type="hidden" id="secretid" value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs" />
                          <div style={{ borderBottom: '#ebebeb dotted 1px', marginTop: '10px', clear: 'both' }}></div>
                          <div id="REQUIRED_FIELD_TEXT" style={{ color: 'rgb(180, 0, 0)', fontSize: '11px', fontFamily: 'Arial, Helvetica, sans-serif', padding: '10px 10px 10px 0px' }}>
                            *Required Fields
                          </div>
                          
                          <div style={{ padding: '10px', textAlign: 'center' }}>
                            <input type="button" id="zcWebOptin" style={{ cursor: 'pointer', appearance: 'none', borderRadius: '3px', backgroundPosition: 'center bottom', backgroundRepeat: 'repeat-x', outline: 'none', padding: '5px 15px', textAlign: 'center', color: 'rgb(255, 255, 255)', fontSize: '22px', backgroundColor: 'rgb(79, 211, 158)', borderStyle: 'none', borderColor: 'rgb(166, 246, 0)', fontFamily: 'Verdana', borderWidth: '5px', whiteSpace: 'normal' }} value="Let's Talk" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hidden Fields */}
                    <input type="hidden" id="fieldBorder" value="" />
                    <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                    <input type="hidden" id="viewFrom" value="URL_ACTION" />
                    <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                    <input type="hidden" id="lD" name="lD" value="110489827e2837d45" />
                    <input type="hidden" id="emailReportId" value="" />
                    <input type="hidden" name="zx" id="cmpZuid" value="1316ccdc8" />
                    <input type="hidden" name="zcvers" value="3.0" />
                    <input type="hidden" id="allCheckedListIds" value="" />
                    <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                    <input type="hidden" id="zcld" name="zcld" value="110489827e2837d45" />
                    <input type="hidden" id="zctd" name="zctd" value="110489827e26e63c1" />
                    <input type="hidden" id="document_domain" value="" />
                    <input type="hidden" id="zc_Url" value="idzlf-zgpl.maillist-manage.com" />
                    <input type="hidden" id="new_optin_response_in" value="0" />
                    <input type="hidden" id="duplicate_optin_response_in" value="0" />
                    <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zd785347fbb8bca06ba2d474323b850dc945c9b70c252c6a44936a9dba1d4a4bc" />
                  </div>
                </form>
              </div>
              
              <div style={{ margin: '0px auto', marginTop: '20px', textAlign: 'left', height: '76px' }} id="privacyNotes">
                <span>Note: It is our responsibility to protect your privacy and we guarantee that your data will be completely confidential.</span>
              </div>
            </div>
          </div>

          <input type="hidden" id="isCaptchaNeeded" value="true" />
          <input type="hidden" id="superAdminCap" value="0" />
          <img src="https://idzlf-zgpl.maillist-manage.com/images/spacer.gif" id="refImage" style={{ display: 'none' }} alt="" />
        </div>
      </div>

      <div id="zcOptinOverLay" style={{ display: 'none', textAlign: 'center', backgroundColor: 'rgb(0, 0, 0)', opacity: 0.5, zIndex: 100, position: 'fixed', width: '100%', top: '0px', left: '0px', height: '988px' }}></div>
      <div id="zcOptinSuccessPopup" style={{ display: 'none', zIndex: 9999, width: '800px', height: '40%', top: '84px', position: 'fixed', left: '26%', backgroundColor: '#FFFFFF', borderColor: '#E6E6E6', borderStyle: 'solid', borderWidth: '1px', boxShadow: '0 1px 10px #424242', padding: '35px' }}>
        <span style={{ position: 'absolute', top: '-16px', right: '-14px', zIndex: 99999, cursor: 'pointer' }} id="closeSuccess">
          <img src="https://idzlf-zgpl.maillist-manage.com/images/videoclose.png" alt="Close" />
        </span>
        <div id="zcOptinSuccessPanel"></div>
      </div>
    </>
  );
};

export default ZohoQuantumCoachForm;
