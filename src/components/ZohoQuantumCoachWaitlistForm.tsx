import { useEffect } from 'react';

export const ZohoQuantumCoachWaitlistForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://idzlf-zgpl.maillist-manage.com/js/optin.min.js';
    script.async = true;
    script.onload = () => {
      if (window.setupSF) {
        window.setupSF('sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb', 'ZCFORMVIEW', false, 'acc', false, '2');
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
    <div className="section-padding bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join the Waiting List
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground mb-8">
            <p className="font-semibold text-foreground">
              Discover How Executives Have Turned Their Businesses and Lives Around:
            </p>
            <p>
              Shifting failing businesses to Generating $20K–$100K/Month (without hiring an agency), 
              to leading fulfilling lives with renewed clarity and mission alignment.
            </p>
            <p>
              Proven growth systems, coaching, and AI marketing that turns into consistent sales and a life transformed.
            </p>
          </div>
        </div>
        
        <div dangerouslySetInnerHTML={{
          __html: `
            <style>
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #customForm *:not(.dateClass){
              -webkit-box-sizing: border-box !important;
              -moz-box-sizing: border-box !important;
              box-sizing: border-box !important;
              word-break:break-word;
              overflow-wrap: break-word;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .dateClass{
              -webkit-box-sizing: unset!important;
              -moz-box-sizing: unset !important;
              box-sizing: unset !important;
              word-break:break-word;
              overflow-wrap: break-word;
              }
              @media only screen and (max-width: 319px){
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #signupMainDiv{
              width:220px !important;
              min-width:220px !important;
              margin: 0px auto !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #SIGNUP_PAGE{
              padding:0px !important	
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb [changeitem="SIGNUP_FORM_FIELD"]{
              width:94% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .zcinputbox{
              width:100% !important;
              max-width:100% !important;
              float:none !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaDiv{
              width:69.5% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captcha{
              width:69.5% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #recapDiv{
              margin-left: 0px !important;
              max-width: 100% !important;
              overflow: hidden !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #relCaptcha{
              margin-right:11px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #imgBlock{
              width:220px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .recaptcha{
              transform:scale(0.55);-webkit-transform:scale(0.55);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
              }
              @media screen and (min-width: 320px) and (max-width: 580px){
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #signupMainDiv{
              width:280px !important;
              min-width:280px !important;
              margin: 0px auto !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #imgBlock{
              width:280px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #SIGNUP_PAGE{
              padding:0px !important	
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .zcinputbox{
              width:100% !important;
              max-width:100% !important;
              float:none !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb [changeitem="SIGNUP_FORM_FIELD"]{
              width:95% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaDiv{
              width:76% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captcha{
              width:76% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #recapDiv{
              margin-left: 0px !important;
              max-width: 100% !important;
              overflow: hidden !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaParent{
              width:100% !important;
              max-width:100% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaText{
              width:95.7% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #relCaptcha{
              margin-right:9px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #capRequired{
              margin-right: -10px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .recaptcha{
              transform:scale(0.72);-webkit-transform:scale(0.75);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
              }
              @media screen and (min-width:581px) and (max-width: 640px){
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #signupMainDiv{
              width:440px !important;
              min-width:440px !important;
              margin: 0px auto !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #imgBlock{
              width:440px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb [name="SIGNUP_FORM_LABEL"]{
              float:none !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .zcinputbox{
              width:100% !important;
              max-width:100% !important;
              float:none !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb [changeitem="SIGNUP_FORM_FIELD"]{
              width:95% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captcha{
              width:84.4% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #recapDiv{
              margin-left: 0px !important;
              max-width: 100% !important;
              overflow: hidden !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaParent{
              float:none !important;
              max-width:100% !important;
              width:100% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaText{
              width:96% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #relCaptcha{
              margin-right:14px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #capRequired{
              margin-right: -10px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .recaptcha{
              transform:scale(1.13);-webkit-transform:scale(1.45);margin-bottom:40px;transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
              }
              @media screen and (min-width:645px) and (max-width: 767px){
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #signupMainDiv{
              width:440px !important;
              min-width:440px !important;
              margin: 0px auto !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #imgBlock{
              width:440px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb [name="SIGNUP_FORM_LABEL"]{
              float:none !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .zcinputbox{
              width:100% !important;
              max-width:100% !important;
              float:none !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb [changeitem="SIGNUP_FORM_FIELD"]{
              width:95% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaDiv{
              width:84.4% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captcha{
              width:84.4% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaParent{
              float:none !important;
              max-width:100% !important;
              width:100% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaText{
              width:96% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #relCaptcha{
              margin-right:14px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #recapDiv{
              margin-left: 0px !important;
              max-width: 100% !important;
              overflow: hidden !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #capRequired{
              margin-right: -10px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .recaptcha{
              transform:scale(1.13);-webkit-transform:scale(1.25);margin-bottom:40px;transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
              }
              @media only screen and (min-width : 1025px) {
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #signupMainDiv{
              width:600px !important;
              min-width:600px !important;
              margin: 0px auto !important;	
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #imgBlock{
              width:600px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .recaptcha{
              transform:scale(1.03);-webkit-transform:scale(1.08);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:130px}
              }
              @media only screen and (min-width : 1824px) {
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #signupMainDiv{
              width:600px !important;
              min-width:600px !important;
              margin: 0px auto !important;	
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #imgBlock{
              width:600px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .recaptcha{
              transform:scale(1.03);-webkit-transform:scale(1.08);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:130px}
              }
              @media only screen and (min-device-width: 1200px) and (max-device-width:1200px){
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #signupMainDiv{
              width:600px !important;
              min-width:600px !important;
              margin: 0px auto !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #imgBlock{
              width:600px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .recaptcha{
              transform:scale(1.03);-webkit-transform:scale(1.08);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:130px}
              }
              @media only screen and (min-width : 321px) and (max-width : 519px){
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #signupMainDiv{
              width:300px !important;
              min-width:240px !important;
              margin: 0px auto !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #imgBlock{
              width:300px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaDiv{
              width:81.4% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captcha{
              width:81.4% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #relCaptcha{
              margin-right:3px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .recaptcha{
              transform:scale(0.72);-webkit-transform:scale(0.75);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
              }
              @media only screen and (min-width : 521px) and (max-width : 719px){
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #signupMainDiv{
              width:500px !important;
              min-width:240px !important;
              margin: 0px auto !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #imgBlock{
              width:500px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaDiv{
              width:81.4% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captcha{
              width:81.4% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #relCaptcha{
              margin-right:3px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .recaptcha{
              transform:scale(0.72);-webkit-transform:scale(0.75);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:0px}
              }
              @media only screen and (min-width : 768px) and (max-width : 1024px){
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #signupMainDiv{
              width:500px !important;
              min-width:240px !important;
              margin: 0px auto !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #imgBlock{
              width:500px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captchaDiv{
              width:81.4% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #captcha{
              width:81.4% !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb #relCaptcha{
              margin-right:3px !important;
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .recaptcha{
              transform:scale(0.90);-webkit-transform:scale(0.90);transform-origin:0 0;-webkit-transform-origin:0 0;margin-left:134px}
              }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .bdr_btm_hover{background-color:#f9f9f9; padding:10px;}
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .bdr_btm{padding:10px }
              #sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb .f14{font-size:14px}
            </style>

            <div id="sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb" data-type="signupform">
              <div id="customForm">
                <input type="hidden" id="recapTheme" value="2">
                <input type="hidden" id="isRecapIntegDone" value="false">
                <input type="hidden" id="signupFormMode" value="copyCode">
                <input type="hidden" id="signupFormType" value="LargeForm_Vertical">
                <input type="hidden" id="recapModeTheme" value="">
                <div class="large_form_1_css" id="SIGNUP_PAGE" style="padding: 40px 30px 30px; background-color: rgb(255, 255, 255); font-family: Verdana; color: rgb(255, 255, 255); text-align: center; font-size: 8px;">
                  <div style="margin:0px auto">
                    <div id="imgBlock" logo="true" style="width: 600px; margin: 0px auto; font-family: Arial, Helvetica, sans-serif; padding-bottom: 10px; color: rgb(68, 68, 68); text-align: left; font-size: 12px; padding-top: 10px; font-weight: bold;">
                      <img valign="middle" src="https://stratus.campaign-image.com/images/1316ccdc8_nobgblack.png" id="iframeImg" style="width: 164px; max-width: 100%; height: auto;">
                    </div>
                  </div>
                  <br>
                  <div id="signupMainDiv" style="margin: 0px auto; width: 100%; min-width: 230px; max-width: 600px;">
                    <div>
                      <div style="position:relative;">
                        <div id="Zc_SignupSuccess" style="display:none;position:absolute;margin-left:4%;width:90%;background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154);  margin-top: 10px;margin-bottom:10px;word-break:break-all">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                              <tr>
                                <td width="10%">
                                  <img class="successicon" src="https://idzlf-zgpl.maillist-manage.com/images/challangeiconenable.jpg" align="absmiddle">
                                </td>
                                <td>
                                  <span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px;word-break:break-word">&nbsp;&nbsp;Thank you for Signing Up</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <form method="POST" id="zcampaignOptinForm" style="margin:0px;" action="https://idzlf-zgpl.maillist-manage.com/weboptin.zc" target="_zcSignup">
                        <div id="SIGNUP_BODY_ALL" style="border: 1px none rgb(218, 216, 216);">
                          <h1 style="color: rgb(191, 0, 3); font-size: 14px; font-family: 'MS Serif'; margin: 0px; text-align: left; padding: 20px; background-color: rgb(255, 255, 255); word-break: break-word; border-color: rgb(191, 0, 3); border-width: 2px; border-style: solid;" id="SIGNUP_HEADING">⚠️ Limited spaces left! Enrollment closes in one week, or as soon as spaces are filled.&nbsp;</h1>
                          <div style="padding: 20px; text-align: center; background-color: rgb(255, 255, 255); font-family: Verdana; color: rgb(68, 68, 68); bottom: 2px; font-size: 14px; opacity: 1;" id="SIGNUP_BODY">
                            <div style="margin:0px auto;text-align:left;">
                              <div style="line-height:1.6;" id="SIGNUP_DESCRIPTION"></div>
                              <div style="display:none;background-color:#FFEBE8;padding:10px 10px; color:#d20000; font-size:11px; margin:10px 0px;border:solid 1px #ffd9d3; margin-top:20px;" id="errorMsgDiv">&nbsp;&nbsp;Please correct the marked field(s) below.</div>
                              <div>
                                <div style="font-size:12px; margin-top:10px;" class="zcsffieldsdiv">
                                  <div style="padding:10px 0px 10px 0px;">
                                    <div style="">
                                      <div style="width: 130px; float: left; margin-top: 5px; margin-right: 5px; text-align: left; font-family: Arial; color: rgb(51, 51, 51); font-size: 14px;">Email&nbsp;<span style="color: rgb(180, 0, 0); font-size: 11px; font-family: Arial, Helvetica, sans-serif;">*</span></div>
                                      <div style="width:60%; float:left;  min-width:170px; max-width:70%;" class="zcinputbox">
                                        <input name="CONTACT_EMAIL" changeitem="SIGNUP_FORM_FIELD" style="height: 28px; padding: 2px; width: 97%; color: rgb(68, 68, 68); background-color: rgb(255, 255, 255); border: 1px solid rgb(222, 222, 222); font-family: Verdana; font-size: 14px; box-sizing: border-box;" maxlength="100" type="email">
                                        <span style="display:none" id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                                      </div>
                                    </div>
                                    <div style="clear:both"></div>
                                  </div>
                                  <div style="padding:10px 0px 10px 0px;">
                                    <div style="">
                                      <div style="width: 130px; float: left; margin-top: 5px; margin-right: 5px; text-align: left; font-family: Arial; color: rgb(51, 51, 51); font-size: 14px;">First Name&nbsp;</div>
                                      <div style="width:60%; float:left;  min-width:170px; max-width:70%;" class="zcinputbox">
                                        <input name="FIRSTNAME" changeitem="SIGNUP_FORM_FIELD" style="height: 28px; padding: 2px; width: 97%; color: rgb(68, 68, 68); background-color: rgb(255, 255, 255); border: 1px solid rgb(222, 222, 222); font-family: Verdana; font-size: 14px; box-sizing: border-box;" maxlength="100" type="text">
                                        <span style="display:none" id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                                      </div>
                                    </div>
                                    <div style="clear:both"></div>
                                  </div>
                                  <div style="padding:10px 0px 10px 0px;">
                                    <div style="">
                                      <div style="width: 130px; float: left; margin-top: 5px; margin-right: 5px; text-align: left; font-family: Arial; color: rgb(51, 51, 51); font-size: 14px;">Cell Phone&nbsp;</div>
                                      <div style="width:60%; float:left;  min-width:170px; max-width:70%;" class="zcinputbox">
                                        <input name="PHONE" changeitem="SIGNUP_FORM_FIELD" style="height: 28px; padding: 2px; width: 97%; color: rgb(68, 68, 68); background-color: rgb(255, 255, 255); border: 1px solid rgb(222, 222, 222); font-family: Verdana; font-size: 14px; box-sizing: border-box;" maxlength="20" type="text">
                                        <span style="display:none" id="dt_PHONE">1,false,1,Phone,2</span>
                                      </div>
                                    </div>
                                    <div style="clear:both"></div>
                                  </div>
                                  <div style="display:none" ishidden="true">
                                    <div>
                                      <div style="width: 130px; float: left; margin-top: 5px; text-align: left; margin-right: 5px; font-family: Arial; color: rgb(51, 51, 51); font-size: 14px;">Lead Source&nbsp;</div>
                                      <div style="width:60%; float:left;  min-width:170px;  max-width:70%;position:relative" class="zcinputbox">
                                        <select name="LEAD_SOURCE" style="height: 28px; padding: 2px; width: 97%; color: rgb(68, 68, 68); background-color: rgb(255, 255, 255); border: 1px solid rgb(222, 222, 222); font-family: Verdana; font-size: 14px; box-sizing: border-box;" zc_display_name="Lead Source" changeitem="SIGNUP_FORM_FIELD">
                                          <option value="Networking">Networking</option>
                                          <option selected="selected" value="Contact Us">Contact Us</option>
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
                                        <span style="display:none" id="dt_LEAD_SOURCE">1,false,3,Lead Source,2</span>
                                      </div>
                                    </div>
                                    <div style="clear:both"></div>
                                  </div>
                                </div>
                                <div style="padding: 10px 0px 10px 15px;display:none " id="captchaOld" class="recaptcha">
                                  <div style="">
                                    <div style="width: 59%; float: left; min-width: 170px; max-width: 70%;" id="captchaParent">
                                      <img src="//campaigns.zoho.com/images/refresh_icon.png" style="cursor: pointer;float:right;margin-right:4px" onclick="loadCaptcha('https://campaigns.zoho.com/campaigns/CaptchaVerify.zc?mode=generate',this,'#sf3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb');" id="relCaptcha">
                                      <div id="captchaDiv" captcha="true" style="padding: 20px;background:#fff;border: 1px solid rgb(222, 222, 222);box-sizing: border-box;width:98.8%"></div>
                                      <input placeholder="Captcha" id="captchaText" name="captchaText" changeitem="SIGNUP_FORM_FIELD" style="margin-top: 5px; height: 28px; padding: 2px; width: 98.7%; color: rgb(68, 68, 68); background-color: rgb(255, 255, 255); border: 1px solid rgb(222, 222, 222); font-size: 14px; box-sizing: border-box; font-family: Verdana;" maxlength="100" type="text">
                                      <span id="capRequired" style="color:#B40000;font-size:11px;font-family:Arial, Helvetica, sans-serif;margin-top: -16px;margin-right: -2px;float:right">*</span>
                                    </div>
                                  </div>
                                  <div style="clear: both"></div>
                                </div>
                                <input type="hidden" id="secretid" value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs">
                                <div style=" border-bottom:#ebebeb dotted 1px; margin-top:10px; clear:both;"></div>
                                <div id="REQUIRED_FIELD_TEXT" style="color: rgb(180, 0, 0); font-size: 11px; font-family: Arial, Helvetica, sans-serif; padding: 10px 10px 10px 0px;">*Required Fields</div>
                                <div style="padding:10px; text-align:center;">
                                  <input type="button" action="Save" id="zcWebOptin" style="cursor: pointer; appearance: none; border-radius: 3px; background-position: center bottom; background-repeat: repeat-x; outline: none medium; padding: 5px 15px; text-align: center; color: rgb(255, 255, 255); font-size: 22px; background-color: rgb(191, 0, 3); border-style: none; border-color: rgb(166, 246, 0); font-family: Verdana; border-width: 5px; white-space: normal;" value="APPLY NOW">
                                </div>
                              </div>
                            </div>
                          </div>
                          <input type="hidden" id="fieldBorder" value="">
                          <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW">
                          <input type="hidden" name="viewFrom" id="viewFrom" value="URL_ACTION">
                          <input type="hidden" id="submitType" name="submitType" value="optinCustomView">
                          <input type="hidden" id="lD" name="lD" value="110489827e2838e02">
                          <input type="hidden" name="emailReportId" id="emailReportId" value="">
                          <input type="hidden" name="zx" id="cmpZuid" value="1316ccdc8">
                          <input type="hidden" name="zcvers" value="3.0">
                          <input type="hidden" name="oldListIds" id="allCheckedListIds" value="">
                          <input type="hidden" id="mode" name="mode" value="OptinCreateView">
                          <input type="hidden" id="zcld" name="zcld" value="110489827e2838e02">
                          <input type="hidden" id="zctd" name="zctd" value="110489827e26e63c1">
                          <input type="hidden" id="document_domain" value="">
                          <input type="hidden" id="zc_Url" value="idzlf-zgpl.maillist-manage.com">
                          <input type="hidden" id="new_optin_response_in" value="0">
                          <input type="hidden" id="duplicate_optin_response_in" value="0">
                          <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zd785347fbb8bca06ba2d474323b850dcbb00db779284d8d8601a535c4bd30dfb">
                        </div>
                      </form>
                    </div>
                    <div style="margin: 0px auto;margin-top:20px;text-align:left;height:76px;" id="privacyNotes">
                      <span>Note: It is our responsibility to protect your privacy and we guarantee that your data will be completely confidential.</span>
                    </div>
                  </div>
                </div>
                <input type="hidden" id="isCaptchaNeeded" value="false">
                <input type="hidden" id="superAdminCap" value="0">
                <img src="https://idzlf-zgpl.maillist-manage.com/images/spacer.gif" id="refImage" onload="referenceSetter(this)" style="display:none;">
              </div>
            </div>
            <div id="zcOptinOverLay" oncontextmenu="return false" style="display:none;text-align: center; background-color: rgb(0, 0, 0); opacity: 0.5; z-index: 100; position: fixed; width: 100%; top: 0px; left: 0px; height: 988px;"></div>
            <div id="zcOptinSuccessPopup" style="display:none;z-index: 9999;width: 800px; height: 40%;top: 84px;position: fixed; left: 26%;background-color: #FFFFFF;border-color: #E6E6E6; border-style: solid; border-width: 1px;  box-shadow: 0 1px 10px #424242;padding: 35px;">
              <span style="position: absolute;top: -16px;right:-14px;z-index:99999;cursor: pointer;" id="closeSuccess">
                <img src="https://idzlf-zgpl.maillist-manage.com/images/videoclose.png">
              </span>
              <div id="zcOptinSuccessPanel"></div>
            </div>
          `
        }} />
      </div>
    </div>
  );
};

declare global {
  interface Window {
    setupSF: (a: string, b: string, c: boolean, d: string, e: boolean, f: string) => void;
  }
}
