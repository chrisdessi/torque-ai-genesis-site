export default function FreeAIAudit() {
  // ✅ You'll replace this later with your real embed URL:
  // Example: https://www.youtube.com/embed/dQw4w9WgXcQ
  const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/VIDEO_ID_HERE";

  // ✅ Your Zoho form (already live)
  const ZOHO_FORM_IFRAME_SRC =
    "https://forms.zohopublic.com/chris283/form/FreeAIMarketingRealityCheckIntake/formperma/wVhFTbhVm9_H9pHB_CmXVfI6EwZvjXnaooAzDz4Rdik";

  const videoIsPlaceholder = YOUTUBE_EMBED_URL.includes("VIDEO_ID_HERE");

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar / header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-xs font-semibold tracking-widest text-gray-500">
            TORQUE AI
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Free AI Marketing Reality Check
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Apply below and I'll send you a short, personalized video showing the
            <span className="font-semibold text-gray-800"> #1 bottleneck </span>
            holding your marketing back and the
            <span className="font-semibold text-gray-800"> fastest AI-enabled fix</span>.
          </p>
          {/* Value chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border px-3 py-1 text-xs font-medium text-gray-700">
              ~12-minute video
            </span>
            <span className="rounded-full border px-3 py-1 text-xs font-medium text-gray-700">
              Website + 1 channel review
            </span>
            <span className="rounded-full border px-3 py-1 text-xs font-medium text-gray-700">
              Delivered in 48 business hours
            </span>
            <span className="rounded-full border px-3 py-1 text-xs font-medium text-gray-700">
              Not a sales call
            </span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* LEFT: Video card */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Watch first (optional)
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  A quick explanation of what you'll receive and how it works.
                </p>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                60 seconds
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border bg-gray-50">
              {/* 16:9 responsive container */}
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                {videoIsPlaceholder ? (
                  <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-6 text-center">
                    <div className="rounded-full border bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                      YouTube video placeholder
                    </div>
                    <p className="mt-3 text-sm font-semibold text-gray-900">
                      Your intro video will appear here.
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      When it's ready, replace <span className="font-mono">VIDEO_ID_HERE</span>{" "}
                      in the code with your YouTube embed ID.
                    </p>
                  </div>
                ) : (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={YOUTUBE_EMBED_URL}
                    title="Torque AI Intro"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-900">
                What you'll get
              </p>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                <li>
                  • The <span className="font-semibold">#1 bottleneck</span> I see
                </li>
                <li>
                  • The <span className="font-semibold">fastest fix</span> (with AI if it fits)
                </li>
                <li>
                  • What to do next (with or without me)
                </li>
              </ul>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Note: This is a free video review. If you want the full 30–90 day
              execution plan, that's the paid Strategic Diagnostic.
            </p>
          </section>

          {/* RIGHT: Form card */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Apply for your Reality Check
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Answer a few quick questions so I know where to focus.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border">
              <iframe
                aria-label="Free AI Marketing Reality Check – Intake"
                title="Free AI Marketing Reality Check – Intake"
                frameBorder="0"
                style={{ height: "560px", width: "100%", border: "none" }}
                src={ZOHO_FORM_IFRAME_SRC}
              />
            </div>

            <div className="mt-5 rounded-xl bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-900">
                What happens next
              </p>
              <p className="mt-1 text-sm text-gray-600">
                If it's a fit, you'll receive your personalized video within{" "}
                <span className="font-semibold text-gray-800">48 business hours</span>.
              </p>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              By submitting, you agree to receive follow-ups from Torque AI.
              Unsubscribe anytime.
            </p>
          </section>
        </div>

        {/* Bottom reassurance bar */}
        <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-gray-900">No obligation</p>
              <p className="mt-1 text-sm text-gray-600">
                The video stands on its own. No pressure.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Clear scope</p>
              <p className="mt-1 text-sm text-gray-600">
                Website + one channel. Fast, focused, useful.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Next step (optional)</p>
              <p className="mt-1 text-sm text-gray-600">
                Paid Strategic Diagnostic for a full plan + implementation sequence.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
