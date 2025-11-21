import { useEffect } from 'react';

const ZohoCombinedForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://idzlf-zgpl.maillist-manage.com/js/optin.min.js';
    script.onload = () => {
      if (window.setupSF) {
        window.setupSF('sf3zd785347fbb8bca06ba2d474323b850dc34d2020e3bc8c3f1f15aefa8ed4b029f', 'ZCFORMVIEW', false, 'acc', false, '2');
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
      <div id="sf3zd785347fbb8bca06ba2d474323b850dc34d2020e3bc8c3f1f15aefa8ed4b029f" data-type="signupform"></div>
    </div>
  );
};

declare global {
  interface Window {
    setupSF: (formId: string, mode: string, arg3: boolean, arg4: string, arg5: boolean, arg6: string) => void;
  }
}

export default ZohoCombinedForm;
