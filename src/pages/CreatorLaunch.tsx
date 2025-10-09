export default function CreatorLaunch() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const selected = Array.from(form.querySelectorAll('input[name="deliverables"]:checked')).map(
      (c) => (c as HTMLInputElement).value
    );

    const body = `CreatorLaunch Order\n\n` +
      `Name: ${data.name || ""}\n` +
      `Email: ${data.email || ""}\n` +
      `Company/Channel: ${data.company || ""}\n` +
      `Website/Links: ${data.links || ""}\n` +
      `Product Name: ${data.product_name || ""}\n` +
      `Launch Date: ${data.launch_date || ""}\n` +
      `Price/Offer: ${data.price || ""}\n` +
      `Audience: ${data.audience || ""}\n` +
      `Brand Voice: ${data.voice || ""}\n` +
      `Goals (pick 1–2): ${data.goals || ""}\n` +
      `Deliverables: ${selected.join(', ')}\n` +
      `Notes: ${data.notes || ""}`;

    const mailto = `mailto:info@torqueapp.ai?subject=${encodeURIComponent(
      'CreatorLaunch Kit Order'
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* HERO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-widest text-neutral-500">Torque AI Add‑On Service</p>
              <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-6xl">
                CreatorLaunch Kit
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                Automate creator marketing and support in <span className="font-semibold">under an hour</span>. Upload your product, audience, and voice—get scripted Shorts, carousels, email sequences, FAQs, and an AI support agent, fully branded.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-neutral-900 px-3 py-1 font-medium text-white">$249 one‑time</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium">+$29/mo continuity</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium">Built for: YouTubers • Indie apps • Course creators</span>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="#order" className="rounded-xl bg-black px-5 py-3 font-semibold text-white hover:bg-neutral-800">Start Order</a>
                <a href="#how" className="rounded-xl px-5 py-3 font-semibold ring-1 ring-neutral-300 hover:bg-neutral-50">How it works</a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: 'Massive Market', s: 'Creator economy → $528B by 2030' },
                    { k: 'Perfect Timing', s: '+646% YoY interest' },
                    { k: '10× Better', s: 'Launch in < 60 minutes' },
                  ].map((i, idx) => (
                    <div key={idx} className="rounded-2xl bg-neutral-50 p-4">
                      <div className="text-sm font-semibold">{i.k}</div>
                      <div className="mt-1 text-[12px] text-neutral-600">{i.s}</div>
                    </div>
                  ))}
                </div>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                  <li>YouTube Shorts scripts & templates</li>
                  <li>Instagram carousel designs (Canva export)</li>
                  <li>Email launch sequences (3–7 emails)</li>
                  <li>FAQ & docs (host-ready)</li>
                  <li>AI customer service agent (trained on your product)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-extrabold md:text-4xl">How it works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[ 
              { t: '1) Capture', d: 'Complete a 7‑minute brief: product, audience, brand voice, links.' },
              { t: '2) Generate', d: 'We produce scripts, carousels, emails, FAQs, and agent training set.' },
              { t: '3) Deploy', d: 'Export Canva assets, schedule emails, and embed the AI agent.' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-sm uppercase tracking-widest text-neutral-500">Step {i+1}</div>
                <div className="mt-2 text-xl font-semibold">{s.t}</div>
                <p className="mt-2 text-neutral-700">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-neutral-300 bg-white p-6 text-sm text-neutral-700">
            <p className="font-semibold">MVP Notes:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Lovable-ready: uses an email handoff (no backend). We craft drafts and reply with assets/links.</li>
              <li>Optional: add Stripe checkout when you're ready; keep the email flow for leads.</li>
              <li>Future: integrate Canva API + agent builder; today we deliver exports and an embed code.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-extrabold md:text-4xl">Pricing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm">
              <div className="text-sm uppercase tracking-widest text-neutral-500">Core</div>
              <div className="mt-1 text-2xl font-extrabold">Kickoff Bundle</div>
              <div className="mt-1 text-neutral-600">$249 one‑time</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
                <li>3 YouTube Shorts scripts + thumbnail prompts</li>
                <li>2 Instagram carousels (Canva)</li>
                <li>3‑email launch sequence</li>
                <li>FAQ page + basic docs</li>
                <li>AI Support Agent (seed knowledge base)</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm">
              <div className="text-sm uppercase tracking-widest text-neutral-500">Continuity</div>
              <div className="mt-1 text-2xl font-extrabold">Updates & Support</div>
              <div className="mt-1 text-neutral-600">$29 / month</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
                <li>Monthly content refresh (1 Shorts script + 1 carousel)</li>
                <li>Inbox triage rules + macro updates</li>
                <li>Agent retraining (minor updates)</li>
                <li>Email support within 48h</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 text-white">
          <div className="grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="text-3xl font-extrabold md:text-4xl">Start your order</h2>
              <p className="mt-2 text-neutral-300">Complete the brief. We'll reply with next steps and an optional checkout link.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />
                  <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />
                </div>
                <input name="company" placeholder="Company / Channel" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />
                <input name="links" placeholder="Website / Social links" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />
                <input name="product_name" placeholder="Product name" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />
                <div className="grid gap-3 md:grid-cols-3">
                  <input name="launch_date" placeholder="Target launch date" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />
                  <input name="price" placeholder="Offer/Price ($)" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />
                  <input name="goals" placeholder="Goals (e.g., 100 sales)" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />
                </div>
                <textarea name="audience" placeholder="Describe your audience & pain points" className="h-28 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />
                <textarea name="voice" placeholder="Brand voice (e.g., bold, friendly, minimalist)" className="h-24 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">Pick your deliverables</div>
                  <div className="mt-3 grid gap-2 md:grid-cols-2">
                    {[
                      '3 YouTube Shorts scripts + thumbnail prompts',
                      '2 Instagram carousels (Canva export)',
                      '3‑email launch sequence',
                      'FAQ page + docs',
                      'AI support agent (seed KB)',
                      'Extra: 5 hooks + 5 subject lines',
                    ].map((d, i) => (
                      <label key={i} className="flex items-start gap-2 text-sm text-neutral-200">
                        <input type="checkbox" name="deliverables" value={d} className="mt-1" /> {d}
                      </label>
                    ))}
                  </div>
                </div>

                <textarea name="notes" placeholder="Anything else we should know?" className="h-24 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-neutral-300 focus:outline-none" />

                <button type="submit" className="w-full rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-neutral-100">Send Brief to Torque AI</button>
                <p className="mt-2 text-xs text-neutral-300">Submitting opens your email client with a pre‑filled summary to <a className="underline" href="mailto:info@torqueapp.ai">info@torqueapp.ai</a>.</p>
              </form>
            </div>

            <div className="md:col-span-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">What you get</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-200">
                  <li>Editable Canva assets and copy docs</li>
                  <li>Agent embed snippet + knowledge base export</li>
                  <li>90‑day content calendar outline</li>
                  <li>Launch checklist and posting cadence</li>
                </ul>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-sm text-neutral-300">Typical savings</div>
                    <div className="text-2xl font-extrabold">58%</div>
                    <div className="text-xs text-neutral-400">vs. piecemeal freelancers/tools</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-sm text-neutral-300">Time to first assets</div>
                    <div className="text-2xl font-extrabold">&lt; 60 min</div>
                    <div className="text-xs text-neutral-400">from brief submission</div>
                  </div>
                </div>
                <div className="mt-6 text-sm text-neutral-300">
                  <p><span className="font-semibold">Notes:</span> Market stats and revenue estimates are illustrative. Results vary by execution and timing.</p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">Optional Checkout (when ready)</h3>
                <p className="mt-2 text-sm text-neutral-300">Swap these links with your Stripe URLs.</p>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <a href="#" className="rounded-xl bg-white px-4 py-3 text-center font-semibold text-black hover:bg-neutral-100">Pay $249 – Kickoff</a>
                  <a href="#" className="rounded-xl bg-white px-4 py-3 text-center font-semibold text-black hover:bg-neutral-100">Subscribe $29/mo – Updates</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-extrabold md:text-4xl">FAQ</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                q: 'What tools power the assets?',
                a: 'We draft with GPT‑4 class models, export Canva templates, and deliver an embeddable agent with a seed knowledge base.'
              },
              {
                q: 'Can I customize the copy and designs?',
                a: 'Yes — you get editable files (Canva + docs). We encourage tweaks to match your voice and platform nuances.'
              },
              {
                q: 'Do I need to buy anything else?',
                a: 'No for MVP. Optional: Canva Pro, Stripe checkout, and advanced agent hosting when you scale.'
              },
              {
                q: 'Turnaround time?',
                a: 'First drafts typically within 24–72 hours after receiving your brief (often faster for rush launches).'
              },
            ].map((f, i) => (
              <details key={i} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <summary className="cursor-pointer list-none text-lg font-semibold">{f.q}</summary>
                <p className="mt-2 text-neutral-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Torque AI. CreatorLaunch is an add‑on service.</p>
      </footer>
    </main>
  );
}
