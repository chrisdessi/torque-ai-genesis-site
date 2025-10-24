import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const MomentoCouncil = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const eventDate = "January 28, 2025";
  const neighborhood = "Tribeca";

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f4f4f5]">
      <Header />
      
      {/* Sticky Banner */}
      <div className="sticky top-0 z-50 bg-[#111] border-b border-[#222]">
        <div className="section-padding py-3">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="inline-flex items-center gap-2 bg-[#1c1c1c] text-[#c7c7cc] px-3 py-1.5 rounded-full text-xs tracking-wide">
                Founding Cohort (NYC-01)
              </span>
              <span className="text-sm text-[#c7c7cc]">
                <AnimatedCounter end={12} /> Seats • <strong>{eventDate}</strong> • {neighborhood}, NYC
              </span>
            </div>
            <div className="flex gap-3">
              <Button 
                className="bg-white hover:bg-white/90 text-black font-semibold"
                onClick={() => window.open('https://buy.stripe.com/cNi3cv1F2eHt2oldeP8g006', '_blank')}
              >
                Reserve Seat
              </Button>
              <Button 
                variant="outline"
                className="bg-[#161616] hover:bg-[#161616]/90 text-white border-[#2a2a2a]"
                onClick={() => window.open('https://buy.stripe.com/cNi3cv1F2eHt2oldeP8g006', '_blank')}
              >
                Reserve Duo Seats
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="text-[#c7c7cc] tracking-[0.15em] uppercase text-xs mb-3">
              The Memento Council — Founding Cohort
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              People first. Truth second. Tools third.
            </h1>
            <p className="text-lg md:text-xl text-[#d7d7db] max-w-3xl leading-relaxed mb-8">
              <strong>The Memento Table</strong> is an off-the-record executive dinner for operators who want less theater and more truth.
              We practice presence, say what we usually don't, and leave with three transparent commitments we'll keep in 30 days.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-semibold px-8 py-6"
                onClick={() => window.open('https://buy.stripe.com/cNi3cv1F2eHt2oldeP8g006', '_blank')}
              >
                Reserve Seat
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-[#161616] hover:bg-[#161616]/90 text-white border-[#2a2a2a] px-8 py-6"
                onClick={() => window.open('https://buy.stripe.com/cNi3cv1F2eHt2oldeP8g006', '_blank')}
              >
                Invite a Peer (Duo Bundle)
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Movement */}
      <section className="section-padding py-16 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Memento Council</h2>
            <p className="text-[#c7c7cc] mb-8">Private network • Honesty • Transparency • Practice</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeInUp} className="bg-[#121212] border border-[#202020] rounded-2xl p-8">
              <div className="text-xs font-semibold text-[#cfcfd6] uppercase tracking-wider mb-4">What it is</div>
              <p className="text-[#d7d7db] mb-6 leading-relaxed">
                A founder-led community for VP+ leaders who value candor and ritual over performative dashboards.
                The Council meets through <em>Memento Tables</em> (intimate dinners/workshops), post-event working sessions,
                and quarterly touchpoints.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                  <span>Presence first (Shift Breath)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                  <span>Honesty over optics (Facts → Feelings → Fears → Commitments)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                  <span>Practice over performance (rituals that stick)</span>
                </li>
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#121212] border border-[#202020] rounded-2xl p-8">
              <div className="text-xs font-semibold text-[#cfcfd6] uppercase tracking-wider mb-4">Who it's for</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#7ee787]">•</span>
                  <span>VP, SVP, C-suite, Founder/Owner, or Director w/ P&amp;L ≥ $10M or team ≥ 20</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7ee787]">•</span>
                  <span>Willing to speak candidly, commit publicly, and be witnessed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7ee787]">•</span>
                  <span>Curious about transparent operating rhythms (with or without software)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="section-padding py-16 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Memento Table (NYC-01)</h2>
            <p className="text-[#c7c7cc] mb-8">
              <strong>{eventDate}</strong> • 6:00–9:00 PM • Private dining room, <strong>{neighborhood}</strong>, NYC (address on confirmation)
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeInUp} className="bg-[#121212] border border-[#202020] rounded-2xl p-8">
              <div className="text-xs font-semibold text-[#cfcfd6] uppercase tracking-wider mb-4">You'll leave with</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                  <span><strong>Signed 3-Move Playbook</strong> — owner, date, success signal, and one subtraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                  <span><strong>Transparency Charter (draft)</strong> — how your team shares truth, and when</span>
                </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                   <span><strong>Shift Breath protocol</strong> — a <AnimatedCounter end={10} />-minute daily presence framework</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                   <span><strong>Two curated introductions</strong> aligned to your commitments (delivered in <AnimatedCounter end={14} /> days)</span>
                 </li>
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#121212] border border-[#202020] rounded-2xl p-8">
              <div className="text-xs font-semibold text-[#cfcfd6] uppercase tracking-wider mb-4">Included after (no extra fee)</div>
              <ul className="space-y-3 mb-6">
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                   <span><strong><AnimatedCounter end={45} />-minute working session</strong> (next week) to report progress &amp; remove blockers</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                   <span><strong><AnimatedCounter end={30} />-day Accountability Concierge</strong> — weekly SMS check-ins (status / obstacle / next step)</span>
                 </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                  <span><strong>Founding Member</strong> access to the Memento Council (NYC-01) private thread</span>
                </li>
              </ul>
              <div className="border-t border-[#1d1d1f] pt-6">
                <p className="mb-4">
                  <strong>Investment:</strong>{" "}
                   <span className="inline-block bg-[#1a1a1a] border border-[#2a2a2a] text-[#e6e6ea] rounded-full px-3 py-1.5 text-sm mx-2">
                     <AnimatedCounter end={1250} prefix="$" /> / seat
                   </span>
                   <span className="inline-block bg-[#1a1a1a] border border-[#2a2a2a] text-[#e6e6ea] rounded-full px-3 py-1.5 text-sm">
                     Duo Bundle: <AnimatedCounter end={2200} prefix="$" /> (<AnimatedCounter end={2} /> seats)
                   </span>
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button 
                    className="bg-white hover:bg-white/90 text-black font-semibold"
                    onClick={() => window.open('https://buy.stripe.com/cNi3cv1F2eHt2oldeP8g006', '_blank')}
                  >
                    Reserve Seat
                  </Button>
                  <Button 
                    variant="outline"
                    className="bg-[#161616] hover:bg-[#161616]/90 text-white border-[#2a2a2a]"
                    onClick={() => window.open('https://buy.stripe.com/cNi3cv1F2eHt2oldeP8g006', '_blank')}
                  >
                    Reserve Duo Seats
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confidentiality Code */}
      <section className="section-padding py-16 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Quantum Shift Confidentiality Code™</h2>
            <p className="text-[#c7c7cc] mb-8">Shareable insights, private identities. Our Chatham House–style rule.</p>
          </motion.div>
          <motion.div {...fadeInUp} className="bg-[#121212] border border-[#202020] rounded-2xl p-8">
            <ol className="space-y-4 list-decimal list-inside">
              <li>Share insights, <strong>protect identities</strong>.</li>
              <li><strong>No recording</strong> — ever.</li>
              <li>Phones <strong>parked</strong> from first pour to final toast.</li>
              <li><strong>One voice at a time</strong> (visible timer).</li>
              <li><strong>No fixing</strong> — clarifying questions only.</li>
              <li><strong>Opt-out honored</strong> on any prompt.</li>
              <li>Host may <strong>pause/redirect</strong> to protect the room.</li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* The Evening Tempo */}
      <section className="section-padding py-16 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Evening Tempo</h2>
            <p className="text-[#c7c7cc] mb-8">arrive → breathe → share → commit → witness → close</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div {...fadeInUp} className="bg-[#121212] border border-[#202020] rounded-2xl p-6">
              <div className="text-xs font-semibold text-[#cfcfd6] uppercase tracking-wider mb-3">Arrival</div>
              <p className="text-[#d7d7db]">Phones parked. One table. Quiet room.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#121212] border border-[#202020] rounded-2xl p-6">
              <div className="text-xs font-semibold text-[#cfcfd6] uppercase tracking-wider mb-3">Shift Breath</div>
              <p className="text-[#d7d7db]"><AnimatedCounter end={3} /> minutes. In <AnimatedCounter end={4} /> — hold <AnimatedCounter end={2} /> — out <AnimatedCounter end={6} />. Land together.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#121212] border border-[#202020] rounded-2xl p-6">
              <div className="text-xs font-semibold text-[#cfcfd6] uppercase tracking-wider mb-3">The Work</div>
              <p className="text-[#d7d7db]">Facts → Feelings → Fears → Commitments. Each person shares <AnimatedCounter end={7} /> minutes.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-[#121212] border border-[#202020] rounded-2xl p-6">
              <div className="text-xs font-semibold text-[#cfcfd6] uppercase tracking-wider mb-3">Witness Round</div>
              <p className="text-[#d7d7db]">Silent acknowledgment. Each person signs their playbook.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-[#121212] border border-[#202020] rounded-2xl p-6">
              <div className="text-xs font-semibold text-[#cfcfd6] uppercase tracking-wider mb-3">Close</div>
              <p className="text-[#d7d7db]">One word each. Phones returned. Event photos optional.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="bg-[#121212] border border-[#202020] rounded-2xl p-6">
              <div className="text-xs font-semibold text-[#cfcfd6] uppercase tracking-wider mb-3">After</div>
              <p className="text-[#d7d7db]"><AnimatedCounter end={45} />-min working session next week. <AnimatedCounter end={30} />-day SMS accountability.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding py-20 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to commit?</h2>
            <p className="text-xl text-[#d7d7db] mb-8">
              Limited to <AnimatedCounter end={12} /> seats. Founding Cohort closes when full.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-semibold px-10 py-7 text-lg"
                onClick={() => window.open('https://buy.stripe.com/cNi3cv1F2eHt2oldeP8g006', '_blank')}
              >
                Reserve Your Seat
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-[#161616] hover:bg-[#161616]/90 text-white border-[#2a2a2a] px-10 py-7 text-lg"
                onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
              >
                Questions? Book a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MomentoCouncil;
