import { useEffect } from 'react';

declare global {
  interface Window {
    setupSF: (formId: string, mode: string, arg3: boolean, arg4: string, arg5: boolean, arg6: string) => void;
  }
}

export const ZohoQuantumCoachWaitlistForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://idzlf-zgpl.maillist-manage.com/js/optin.min.js';
    script.async = false;
    script.onload = () => {
      if (window.setupSF) {
        window.setupSF('sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa', 'ZCFORMVIEW', false, 'light', false, '0');
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
    <div className="w-full">
      <style dangerouslySetInnerHTML={{ __html: `
        #sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa input[type="text"] {
          font-size: 15px !important;
          border: 1px solid rgb(71, 85, 105) !important;
          width: 100% !important;
          padding: 12px 16px !important;
          color: rgb(226, 232, 240) !important;
          font-family: Arial !important;
          border-radius: 10px !important;
          background-color: rgb(15, 23, 42) !important;
          outline: none !important;
        }
        #sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa input[type="button"] {
          width: 100% !important;
          padding: 14px !important;
          border: 0 !important;
          color: rgb(255, 255, 255) !important;
          cursor: pointer !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          background-color: rgb(16, 185, 129) !important;
          border-radius: 10px !important;
          transition: all 0.2s !important;
        }
        #sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa input[type="button"]:hover {
          background-color: rgb(5, 150, 105) !important;
        }
        #sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa label {
          display: block !important;
          color: rgb(203, 213, 225) !important;
          font-size: 14px !important;
          font-family: Arial !important;
          margin-bottom: 8px !important;
          font-weight: 500 !important;
        }
        #sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa .SIGNUP_FLD {
          margin-bottom: 16px !important;
        }
      `}} />
      
      <div id="sf3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa" data-type="signupform"></div>
    </div>
  );
};
