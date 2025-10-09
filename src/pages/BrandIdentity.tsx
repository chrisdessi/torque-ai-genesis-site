export default function TorqueBrandIdentity() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Header / Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-widest uppercase text-neutral-500">Torque AI</p>
              <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-6xl">
                The Four Forces Behind Our Brand
              </h1>
              <p className="mt-6 max-w-xl text-lg text-neutral-700">
                Clarity through intelligence. Everything below is the foundation we use to build trust, ship fast, and generate measurable growth for elite institutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#mission" className="rounded-2xl px-4 py-2 text-sm font-semibold ring-1 ring-neutral-300 hover:bg-neutral-50">Mission</a>
                <a href="#story" className="rounded-2xl px-4 py-2 text-sm font-semibold ring-1 ring-neutral-300 hover:bg-neutral-50">Story</a>
                <a href="#voice" className="rounded-2xl px-4 py-2 text-sm font-semibold ring-1 ring-neutral-300 hover:bg-neutral-50">Voice</a>
                <a href="#design" className="rounded-2xl px-4 py-2 text-sm font-semibold ring-1 ring-neutral-300 hover:bg-neutral-50">Design</a>
                <a href="#cta" className="rounded-2xl px-4 py-2 text-sm font-semibold ring-1 ring-neutral-300 hover:bg-neutral-50">Audit CTA</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl border border-neutral-200 p-6 shadow-sm">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-black via-neutral-800 to-neutral-700 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400">Brand Essence</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">Clarity → Confidence → Results</h3>
                    <p className="mt-2 max-w-md text-sm text-neutral-300">Turn noise into signals. Replace guesswork with guidance. Make AI a measurable advantage.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      {k:"92%", l:"YoY Growth"},
                      {k:"$32M", l:"Deals Influenced"},
                      {k:"<60d", l:"Time-to-Impact"},
                    ].map((i,idx)=> (
                      <div key={idx} className="rounded-xl bg-neutral-900/40 p-4">
                        <div className="text-2xl font-extrabold text-white">{i.k}</div>
                        <div className="text-[11px] uppercase tracking-wide text-neutral-400">{i.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-extrabold md:text-4xl">Mission Statement</h2>
            <p className="mt-3 text-sm uppercase tracking-widest text-neutral-500">North Star</p>
          </div>
          <div className="md:col-span-7">
            <blockquote className="rounded-3xl border border-neutral-200 p-6 md:p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-neutral-800">
                <span className="font-semibold">To help organizations transform confusion into clarity</span> by turning AI into a measurable competitive advantage.
              </p>
              <p className="mt-4 text-neutral-600">If we completely succeed, every leader will understand — and profit from — AI without drowning in data.</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-extrabold md:text-4xl">Brand Story</h2>
              <p className="mt-3 text-sm uppercase tracking-widest text-neutral-500">Born from chaos, built for clarity</p>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-4 text-neutral-800">
                <p>
                  After two decades leading revenue for SaaS companies, <strong>Chris Dessi</strong> watched brilliant teams waste money and momentum because AI felt abstract. They didn&apos;t need more data — they needed <em>direction</em>.
                </p>
                <p>
                  We built <strong>Torque</strong> to turn scattered marketing into synchronized growth engines. Since then, partners have achieved <strong>92% growth</strong>, influenced <strong>$32M</strong> in deals, and reclaimed hundreds of hours once lost to inefficiency.
                </p>
                <p>
                  Torque isn&apos;t theory. It&apos;s the operating system for results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice */}
      <section id="voice" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-extrabold md:text-4xl">Brand Voice</h2>
            <p className="mt-3 text-sm uppercase tracking-widest text-neutral-500">Confident · Practical · Human</p>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Do</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
                    <li>Speak with conviction and clarity</li>
                    <li>Be direct, grounded, results-driven</li>
                    <li>Use plain English — real talk</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Don&apos;t</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
                    <li>Use jargon or tech hype</li>
                    <li>Overpromise or inflate claims</li>
                    <li>Sound academic or robotic</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
                <p><span className="font-semibold">Brand Muse:</span> A battle-tested operator — visionary, calm under pressure, explains complex ideas simply.</p>
                <p className="mt-2"><span className="font-semibold">Litmus Test:</span> "Would our operator say this in a boardroom?" If not, rewrite it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section id="design" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-extrabold md:text-4xl">Design Basics</h2>
              <p className="mt-3 text-sm uppercase tracking-widest text-neutral-500">Precision meets power</p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Logo</h4>
                  <p className="mt-2 text-neutral-700">Minimal, kinetic, forward-leaning "T" — momentum and progress.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Colors</h4>
                  <p className="mt-2 text-neutral-700">Monochrome black/white with <span className="font-semibold">electric blue</span> accents for trust + data flow.</p>
                  <div className="mt-3 flex gap-2">
                    <div className="h-8 w-8 rounded-lg bg-black"/>
                    <div className="h-8 w-8 rounded-lg bg-white border"/>
                    <div className="h-8 w-8 rounded-lg" style={{background:"#2563EB"}}/>
                  </div>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Type</h4>
                  <p className="mt-2 text-neutral-700">Bold sans-serif for strength; geometric secondary for precision.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Imagery & Motion</h4>
                  <p className="mt-2 text-neutral-700">Real operators, real work. Smooth torque-like transitions — steady acceleration over flash.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hooks Section (Short-form video hooks block) */}
      <section id="hooks" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Short-Form Hooks</h2>
            <p className="mt-2 text-neutral-600">Swipe these for TikTok, Reels, Shorts.</p>
          </div>
          <a href="#cta" className="text-sm font-semibold text-neutral-900 underline underline-offset-4">Book the audit →</a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Your marketing team just got outsmarted.",
            "This replaced five employees last quarter.",
            "From 0 to $32M — powered by AI.",
            "Stop wasting money on 'marketing help.'",
            "This will replace your agency in 2025.",
            "Families are searching. You're invisible.",
            "Cut your ad budget, grow enrollment.",
            "The AI platform built for admissions.",
          ].map((h, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-neutral-800">{h}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Audit */}
      <section id="cta" className="relative overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{background:"radial-gradient(60% 60% at 50% 0%, #2563EB 0%, transparent 60%)"}}/>
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 text-white">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="text-3xl font-extrabold md:text-4xl">Risk‑Free Martech Audit</h2>
              <p className="mt-3 max-w-2xl text-neutral-200">
                We&apos;ll map your stack, expose budget leaks, and hand you a clear plan to turn AI into a measurable advantage. If you don&apos;t see immediate opportunities to save or grow, you don&apos;t pay.
              </p>
              <ul className="mt-6 grid gap-2 text-neutral-100 md:grid-cols-2">
                <li>• Identify wasted ad spend</li>
                <li>• Prioritize high‑impact automations</li>
                <li>• Forecast 60‑day wins</li>
                <li>• Align teams on one plan</li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold">Book 15 Minutes</h3>
                <p className="mt-2 text-sm text-neutral-200">We&apos;ll reply with 2–3 times. No pressure, just strategy.</p>
                <form className="mt-4 space-y-3" action="mailto:info@torqueapp.ai" method="post" encType="text/plain">
                  <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-neutral-300 focus:outline-none" />
                  <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-neutral-300 focus:outline-none" />
                  <input name="company" placeholder="Company / School" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-neutral-300 focus:outline-none" />
                  <textarea name="notes" placeholder="What&apos;s the biggest challenge right now?" className="h-28 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-neutral-300 focus:outline-none" />
                  <button type="submit" className="w-full rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-neutral-100">Request Audit</button>
                </form>
                <p className="mt-3 text-xs text-neutral-300">Prefer email? <a href="mailto:info@torqueapp.ai?subject=Audit%20Request%20-%20Torque%20AI" className="underline">info@torqueapp.ai</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Torque AI. All rights reserved.</p>
      </footer>
    </main>
  );
}
