import { useEffect } from 'react';

declare global {
  interface Window {
    jQuery?: any;
    $ZC?: any;
    zc_loadForm?: (domain: string, url: string) => void;
    trackSignupEvent?: (code: string, event: string) => void;
  }
}

export const ZohoTorqueAIButton = () => {
  useEffect(() => {
    // Load jQuery libraries if not already loaded
    const loadScript = (src: string, id: string) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.id = id;
        document.body.appendChild(script);
      }
    };

    loadScript('https://idzlf-cmpzourl.maillist-manage.com/js/jquery-1.11.0.min.js', 'jquery-main');
    loadScript('https://idzlf-cmpzourl.maillist-manage.com/js/jquery-migrate-1.2.1.min.js', 'jquery-migrate');
    loadScript('https://idzlf-cmpzourl.maillist-manage.com/js/jquery-ui-1.10.4.custom.min.js', 'jquery-ui');
    loadScript('https://idzlf-cmpzourl.maillist-manage.com/js/optin_min.js', 'zoho-optin');

    // Initialize tracking after jQuery loads
    const initTracking = () => {
      if (window.jQuery) {
        const trackingText = 'ZCFORMVIEW';
        const $ZC = window.jQuery.noConflict();
        window.$ZC = $ZC;
        
        $ZC('[id=embedLink]').append("<input type='hidden' id='tc_code" + $ZC('[id=embedLink]').size() + "' value=" + trackingText + ">");
        const elemSize = parseInt($ZC('[id=embedLink]').size()) - 1;
        let embedLink = $ZC($ZC('[id=embedLink]')[elemSize]).attr('href');
        
        if (embedLink != undefined && embedLink != null && embedLink != 'null') {
          const dynamicCodeVal = $ZC("#tc_code" + $ZC('[id=embedLink]').size()).val();
          embedLink = embedLink + '&trackingcode=' + dynamicCodeVal;
          $ZC($ZC('[id=embedLink]')[elemSize]).attr('href', embedLink);
          $ZC('[id=button_tc_codeVal]').val(dynamicCodeVal);
          if (window.trackSignupEvent) {
            window.trackSignupEvent(dynamicCodeVal, 'buttonView');
          }
        }
      }
    };

    // Wait for jQuery to load before initializing
    const checkJQuery = setInterval(() => {
      if (window.jQuery) {
        clearInterval(checkJQuery);
        initTracking();
      }
    }, 100);

    return () => {
      clearInterval(checkJQuery);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (window.zc_loadForm) {
      e.preventDefault();
      window.zc_loadForm('campaigns.zoho.com', 'https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e28d2737');
    }
  };

  return (
    <div className="inline-block">
      <a 
        href="https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e28d2737" 
        id="embedLink" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <button 
          type="button"
          onClick={handleClick}
          style={{
            outline: 'none',
            backgroundColor: 'rgb(38, 165, 118)',
            color: 'rgb(255, 255, 255)',
            border: '1px solid rgb(153, 153, 153)',
            fontSize: '14px',
            padding: '6px 10px',
            borderRadius: '5px',
            fontFamily: 'Tahoma',
            textAlign: 'center',
            width: 'auto',
            cursor: 'pointer'
          }}
        >
          <span>FREE AI Community</span>
        </button>
      </a>
      
      <input type="hidden" id="zc_Url" value="idzlf-cmpzourl.maillist-manage.com" />
      <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6" />
      <input type="hidden" id="cmpZuid" name="zx" value="undefined" />
      <input type="hidden" id="viewFrom" name="viewFrom" value="BUTTON_ACTION" />
      <input type="hidden" id="button_tc_codeVal" name="button_tc_codeVal" value="ZCFORMVIEW" />
    </div>
  );
};
