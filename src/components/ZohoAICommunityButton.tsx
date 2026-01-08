const ZohoAICommunityButton = () => {
  const formUrl = 'https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e28d2737';

  return (
    <div className="flex justify-center">
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg inline-block"
      >
        FREE AI Community
      </a>
    </div>
  );
};

export default ZohoAICommunityButton;
