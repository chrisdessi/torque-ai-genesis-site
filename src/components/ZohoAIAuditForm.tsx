import { useEffect } from 'react';

declare global {
  interface Window {
    setupSF: (formId: string, mode: string, arg3: boolean, arg4: string, arg5: boolean, arg6: string) => void;
    loadCaptcha: (url: string, element: HTMLImageElement, formId: string) => void;
    referenceSetter: (element: HTMLImageElement) => void;
  }
}

const ZohoAIAuditForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://idzlf-zgpl.maillist-manage.com/js/optin.min.js';
    script.async = false;
    script.onload = () => {
      if (window.setupSF) {
        window.setupSF('sf3zd785347fbb8bca06ba2d474323b850dc3aec5cf04c3a80df934b070f1a2b4a28', 'ZCFORMVIEW', false, 'acc', false, '2');
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
    <div className="w-full max-w-4xl mx-auto">
      <style dangerouslySetInnerHTML={{ __html: `
        #sf3zd785347fbb8bca06ba2d474323b850dc3aec5cf04c3a80df934b070f1a2b4a28 #customForm *:not(.dateClass) {
          -webkit-box-sizing: border-box !important;
          -moz-box-sizing: border-box !important;
          box-sizing: border-box !important;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc3aec5cf04c3a80df934b070f1a2b4a28 .dateClass {
          -webkit-box-sizing: unset !important;
          -moz-box-sizing: unset !important;
          box-sizing: unset !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc3aec5cf04c3a80df934b070f1a2b4a28 #signupMainDiv {
          width: 100% !important;
          max-width: 600px !important;
          margin: 0px auto !important;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc3aec5cf04c3a80df934b070f1a2b4a28 .bdr_btm_hover {
          background-color: #f9f9f9;
          padding: 10px;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc3aec5cf04c3a80df934b070f1a2b4a28 .bdr_btm {
          padding: 10px;
        }
        #sf3zd785347fbb8bca06ba2d474323b850dc3aec5cf04c3a80df934b070f1a2b4a28 .f14 {
          font-size: 14px;
        }
      `}} />
      
      <div id="sf3zd785347fbb8bca06ba2d474323b850dc3aec5cf04c3a80df934b070f1a2b4a28" data-type="signupform"></div>
    </div>
  );
};

export default ZohoAIAuditForm;
