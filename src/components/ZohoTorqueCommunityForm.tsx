import { useEffect } from "react";

declare global {
  interface Window {
    setupSF?: (formId: string, type: string, lightMode: boolean, theme: string, responsive: boolean, extra: string) => void;
  }
}

export default function ZohoTorqueCommunityForm() {
  useEffect(() => {
    // Load the Zoho optin script
    const script = document.createElement("script");
    script.src = "https://idzlf-cmpzourl.maillist-manage.com/js/optin.min.js";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.setupSF) {
        window.setupSF(
          "sf3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6",
          "ZCFORMVIEW",
          false,
          "light",
          false,
          "0"
        );
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://idzlf-cmpzourl.maillist-manage.com/js/optin.min.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">FREE Torque AI Community</h2>
          <p className="text-muted-foreground mb-8">
            Join our community and get exclusive AI insights, strategies, and updates.
          </p>
          
          <div
            id="sf3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6"
            data-type="signupform"
            className="quick_form_7_css"
          >
            <div id="customForm">
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    id="EMBED_FORM_EMAIL_LABEL"
                    name="CONTACT_EMAIL"
                    placeholder="Email *"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="EMBED_FORM_NAME_LABEL"
                    name="FIRSTNAME"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    id="EMBED_FORM_NAME_LABEL_1"
                    name="LASTNAME"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  id="zcWebOp498378"
                  className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Join the Community
                </button>
              </div>
              <input type="hidden" id="fieldBorder" value="" />
              <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
              <input type="hidden" name="viewFrom" id="viewFrom" value="URL_ACTION" />
              <input type="hidden" id="submession" name="submession" value="" />
              <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z830918a30cd527799e85190e4ff13e6ca45acda5d2713eb9c5dd97569cb462e6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
