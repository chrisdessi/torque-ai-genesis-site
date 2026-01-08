export default function ZohoTorqueCommunityForm() {
  const formUrl = 'https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e28d2737';

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">FREE Torque AI Community</h2>
          <p className="text-muted-foreground mb-8">
            Join our community and get exclusive AI insights, strategies, and updates.
          </p>
          
          <iframe 
            src={formUrl}
            frameBorder="0"
            style={{ height: '450px', width: '100%', border: 'none' }}
            title="FREE Torque AI Community Signup"
          />
        </div>
      </div>
    </section>
  );
}
