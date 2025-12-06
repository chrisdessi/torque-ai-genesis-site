import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZohoLetsTalkButton from "@/components/ZohoLetsTalkButton";
import ZohoContactForm from "@/components/ZohoContactForm";

const Momento = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEBHOOK_URL: string = ""; // Replace with your Zapier/Make webhook URL
  const ONE_PAGER_URL: string = ""; // Replace with your PDF URL

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const mailtoFallback = (payload: any) => {
    const subject = encodeURIComponent("Momento Preview Interest");
    const body = encodeURIComponent(
      `Email: ${payload.email}\nSource: ${payload.source}\nTS: ${payload.ts}\nUA: ${navigator.userAgent}`
    );
    window.location.href = `mailto:info@torqueapp.ai?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!isValidEmail(trimmedEmail)) {
      setMessage({ type: "error", text: "Enter a valid work email." });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    const payload = {
      project: "Momento",
      email: trimmedEmail,
      source: window.location.pathname + (window.location.search || ""),
      ts: new Date().toISOString(),
      ua: navigator.userAgent,
    };

    try {
      if (WEBHOOK_URL && WEBHOOK_URL.startsWith("http")) {
        const response = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("HTTP " + response.status);
      }
      setMessage({ type: "success", text: "Thanks — you're on the preview list." });
      setEmail("");
    } catch (err) {
      mailtoFallback(payload);
      setMessage({
        type: "success",
        text: "Opening your email client… If nothing opens, email info@torqueapp.ai.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Header />
      
      <main className="max-w-[960px] mx-auto px-5 py-16">
        <span className="inline-block px-2.5 py-1 border border-[#222328] rounded-full text-[#a1a1aa] text-xs mb-3">
          Torque AI • Private Preview
        </span>
        
        <h1 className="text-[42px] leading-tight font-bold mb-2.5">Momento</h1>
        
        <p className="text-[#a1a1aa] text-lg mb-6">
          A discreet tool for executives to surface what's unsaid—and turn quiet friction into forward motion. No dashboards. No noise. Just clarity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4">
          {/* Left: intrigue + details */}
          <div className="bg-[#111317] border border-[#222328] rounded-2xl p-4">
            <h3 className="text-xl font-semibold mb-1.5">What it is (for now)</h3>
            <p className="text-[#a1a1aa] text-base mb-3">
              A lightweight intake + brief that reveals blind spots before high-stakes meetings.
            </p>
            <ul className="list-disc pl-4.5 text-[#a1a1aa] space-y-1 mb-4">
              <li>Anonymous prompts → condensed "Truth Brief"</li>
              <li>Integrity nudge: words vs. actions, side-by-side</li>
              <li>Ready in minutes; designed for boardrooms</li>
            </ul>
            <div className="flex gap-2.5 flex-wrap">
              {ONE_PAGER_URL ? (
                <a
                  href={ONE_PAGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-4.5 rounded-xl border border-[#222328] bg-white text-black font-bold hover:bg-gray-100 transition-colors"
                >
                  Download one-pager
                </a>
              ) : null}
              <a
                href="mailto:info@torqueapp.ai?subject=Momento%20Inquiry"
                className="inline-flex items-center justify-center h-12 px-4.5 rounded-xl border border-[#222328] bg-transparent text-white font-bold hover:bg-[#222328] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right: email capture */}
          <div className="bg-[#111317] border border-[#222328] rounded-2xl p-4">
            <h3 className="text-xl font-semibold mb-2">Want early access?</h3>
            <p className="text-[#a1a1aa] text-sm mb-4">
              Leave your work email. We'll share a short demo & invite list.
            </p>
            
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="mmEmail" className="sr-only">
                Work Email
              </label>
              <input
                id="mmEmail"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-xl border border-[#222328] bg-[#0f1320] text-white px-3.5 outline-none w-full focus:border-[#444] transition-colors"
              />
              
              <div className="flex flex-col sm:flex-row gap-2.5 mt-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center h-12 px-4.5 rounded-xl border border-[#222328] bg-white text-black font-bold hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending…" : "Notify me"}
                </button>
                <a
                  href="mailto:info@torqueapp.ai?subject=Momento%20Preview%20List"
                  className="inline-flex items-center justify-center h-12 px-4.5 rounded-xl border border-[#222328] bg-transparent text-white font-bold hover:bg-[#222328] transition-colors"
                >
                  Email instead
                </a>
              </div>

              {message.text && (
                <div
                  className={`mt-2.5 text-sm ${
                    message.type === "success" ? "text-[#16a34a]" : "text-[#ef4444]"
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  {message.text}
                </div>
              )}
            </form>

            <p className="text-[#a1a1aa] text-xs mt-2.5">
              No spam. One concise update with a link when it's ready.
            </p>
          </div>
        </div>
      </main>

      {/* Contact Form Section */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <ZohoContactForm 
            title="Get In Touch"
            description="Fill out the form below and we'll get back to you within 24 hours"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Momento;