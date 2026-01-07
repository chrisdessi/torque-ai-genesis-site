import { useEffect } from 'react';

declare global {
  interface Window {
    zc_loadForm: (domain: string, url: string) => void;
  }
}

const ZohoAICommunityButton = () => {
  useEffect(() => {
    // Load jQuery and Zoho scripts
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/jquery-1.11.0.min.js';
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    const jqueryMigrateScript = document.createElement('script');
    jqueryMigrateScript.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/jquery-migrate-1.2.1.min.js';
    jqueryMigrateScript.async = true;
    document.body.appendChild(jqueryMigrateScript);

    const jqueryUIScript = document.createElement('script');
    jqueryUIScript.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/jquery-ui-1.10.4.custom.min.js';
    jqueryUIScript.async = true;
    document.body.appendChild(jqueryUIScript);

    const optinScript = document.createElement('script');
    optinScript.src = 'https://idzlf-cmpzourl.maillist-manage.com/js/optin_min.js';
    optinScript.async = true;
    document.body.appendChild(optinScript);

    return () => {
      if (document.body.contains(jqueryScript)) document.body.removeChild(jqueryScript);
      if (document.body.contains(jqueryMigrateScript)) document.body.removeChild(jqueryMigrateScript);
      if (document.body.contains(jqueryUIScript)) document.body.removeChild(jqueryUIScript);
      if (document.body.contains(optinScript)) document.body.removeChild(optinScript);
    };
  }, []);

  const handleClick = () => {
    if (window.zc_loadForm) {
      window.zc_loadForm('campaigns.zoho.com', 'https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e28d2737');
    } else {
      window.open('https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e28d2737', '_blank');
    }
  };

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={handleClick}
        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        FREE AI Community
      </button>
    </div>
  );
};

export default ZohoAICommunityButton;
