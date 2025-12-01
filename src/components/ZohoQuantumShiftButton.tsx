import { useEffect } from 'react';

declare global {
  interface Window {
    jQuery?: any;
    $ZC?: any;
    zc_loadForm?: (domain: string, url: string) => void;
    trackSignupEvent?: (code: string, type: string) => void;
  }
}

export const ZohoQuantumShiftButton = () => {
  useEffect(() => {
    // Load jQuery if not already loaded
    if (!window.jQuery) {
      const jqueryScript = document.createElement('script');
      jqueryScript.type = 'text/javascript';
      jqueryScript.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/jquery-1.11.0.min.js';
      document.body.appendChild(jqueryScript);

      jqueryScript.onload = () => {
        // Load jQuery Migrate
        const migrateScript = document.createElement('script');
        migrateScript.type = 'text/javascript';
        migrateScript.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/jquery-migrate-1.2.1.min.js';
        document.body.appendChild(migrateScript);

        migrateScript.onload = () => {
          // Load jQuery UI
          const uiScript = document.createElement('script');
          uiScript.type = 'text/javascript';
          uiScript.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/jquery-ui-1.10.4.custom.min.js';
          document.body.appendChild(uiScript);

          uiScript.onload = () => {
            // Load Zoho optin script
            const optinScript = document.createElement('script');
            optinScript.type = 'text/javascript';
            optinScript.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/optin_min.js';
            document.body.appendChild(optinScript);

            optinScript.onload = () => {
              initializeButton();
            };
          };
        };
      };
    } else {
      // jQuery already loaded, just load optin script
      const optinScript = document.createElement('script');
      optinScript.type = 'text/javascript';
      optinScript.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/optin_min.js';
      document.body.appendChild(optinScript);

      optinScript.onload = () => {
        initializeButton();
      };
    }

    function initializeButton() {
      const trackingText = 'ZCFORMVIEW';
      const $ZC = window.jQuery?.noConflict();
      
      if ($ZC) {
        window.$ZC = $ZC;
        $ZC('[id=embedLink]').append("<input type='hidden' id='tc_code" + $ZC('[id=embedLink]').size() + "' value=" + trackingText + ">");
        const elemSize = parseInt($ZC('[id=embedLink]').size()) - 1;
        let embedLink = $ZC($ZC('[id=embedLink]')[elemSize]).attr('href');
        
        if (embedLink !== undefined && embedLink !== null && embedLink !== 'null') {
          const dynamicCodeVal = $ZC("#tc_code" + $ZC('[id=embedLink]').size()).val();
          embedLink = embedLink + '&trackingcode=' + dynamicCodeVal;
          $ZC($ZC('[id=embedLink]')[elemSize]).attr('href', embedLink);
          $ZC('[id=button_tc_codeVal]').val(dynamicCodeVal);
          
          if (window.trackSignupEvent) {
            window.trackSignupEvent(dynamicCodeVal, 'buttonView');
          }
        }
      }
    }
  }, []);

  const handleClick = () => {
    if (window.zc_loadForm) {
      window.zc_loadForm('campaigns.zoho.com', 'https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e28ca5d1');
    }
  };

  return (
    <>
      <a 
        href="https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e28ca5d1" 
        id="embedLink" 
        target="_self"
        className="inline-block"
      >
        <button 
          type="button" 
          style={{
            outline: 'none',
            backgroundColor: 'rgb(38, 165, 118)',
            color: 'rgb(255, 255, 255)',
            border: '1px solid rgb(153, 153, 153)',
            fontSize: '14px',
            padding: '6px 10px',
            borderRadius: '5px',
            fontFamily: 'Verdana',
            textAlign: 'center',
            width: 'auto',
            cursor: 'pointer'
          }}
          id="EMBED_BUTTON"
          name="EMBED_BUTTON"
          onClick={handleClick}
        >
          <span className="zceditcnt">FREE Community</span>
        </button>
      </a>
      
      <div style={{ display: 'none' }}>
        <a 
          data-name="EMBED_BUTTON" 
          style={{
            cursor: 'pointer',
            color: 'rgb(255, 255, 255)',
            backgroundColor: 'rgb(38, 165, 118)',
            fontFamily: 'Verdana'
          }}
          href="https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e28ca5d1" 
          target="_self"
        >
          <img 
            id="uploadedBtnImg" 
            className="uploadedBtnImg" 
            src="https://static.zohocdn.com/campaign/static8/images/spacer.325472601571f31e1bf00674c368d335.gif" 
            style={{
              width: '300px',
              height: '158px',
              cursor: 'pointer'
            }}
            onClick={handleClick}
            alt=""
          />
        </a>
      </div>
      
      <input type='hidden' id='zc_Url' value='idzlf-cmpzourl.maillist-manage.com' />
      <input type='hidden' id='zc_formIx' name='zc_formIx' value='3zb23177f10bdcc7c4ce377eb708724af15d47769e6568ec3b3c9ebafa26dd6daa' />
      <input type='hidden' id='cmpZuid' name='zx' value='undefined' />
      <input type='hidden' id='viewFrom' name='viewFrom' value='BUTTON_ACTION' />
      <input type='hidden' id='button_tc_codeVal' name='button_tc_codeVal' value='ZCFORMVIEW' />
    </>
  );
};
