import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const QuantumShiftCohort90Day = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#050816]">
      <Helmet>
        <title>The 90-Day Quantum Shift Cohort | Transform Your Life</title>
        <meta name="description" content="You're Not Broken. Join the 90-Day Quantum Shift Cohort and discover how to tear down old patterns, realign with your purpose, and rise without burning out." />
        <link rel="canonical" href="https://torqueapp.ai/quantum-shift-cohort-90" />
      </Helmet>
      
      <Header />

      <main className="max-w-[980px] mx-auto px-4 py-10 pb-20">
        {/* HERO SECTION */}
        <section className="grid md:grid-cols-[3fr_2.3fr] gap-8 mb-20">
          {/* Left Hero Card */}
          <motion.div 
            {...fadeInUp}
            className="relative bg-gradient-to-br from-[#0c1020] to-[#050816] rounded-[18px] border border-[#22263a] p-6 md:p-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-[-30%] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_55%)] opacity-80 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(255,179,71,0.12)] text-[#ffb347] text-xs font-semibold uppercase tracking-wider mb-3">
                The 90-Day Quantum Shift Cohort
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2">You're Not Broken.</h4>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Does This Sound Like You?
              </h1>

              <ul className="space-y-2 text-[#c0c4cf] text-sm mb-6 pl-5 list-disc">
                <li>You feel like you're living on autopilot, checking boxes instead of following your calling.</li>
                <li>You've achieved things on paper, but deep down you know something's missing.</li>
                <li>You sense you're out of alignment, but you can't name exactly what feels "off."</li>
                <li>You fill your days with busy work, but at night you wonder what it's all for.</li>
                <li>You long for deeper meaning, but you're unsure where to begin.</li>
                <li>You've tried quick fixes, but nothing seems to create lasting change.</li>
                <li>You know you're meant for more—but fear, doubt, or overwhelm keeps you stuck.</li>
              </ul>

              <p className="text-[#c0c4cf] text-sm mb-6">
                If any of this resonates—you're not broken, and you're not alone. You're standing at the doorway of your Quantum Shift.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href="https://www.globalquantumshift.com/offers/58ZR4Y8e/checkout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7e5f] text-[#050816] font-semibold text-sm shadow-2xl hover:scale-105 transition-transform"
                >
                  Join the Waitlist
                </a>
                <span className="text-xs text-[#c0c4cf]">Spaces are limited for each round.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Content */}
          <div className="grid gap-4">
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-[#0c1020] rounded-[18px] border border-[#22263a] p-6 shadow-2xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                This is Not a Course. This is an Intervention.
              </h2>

              <h3 className="text-lg font-bold text-white mb-3">
                You're Not Crazy — It is harder than it should be.
              </h3>

              <div className="space-y-3 text-[#c0c4cf] text-sm">
                <p>The cracks you're noticing in your life? They're real.</p>
                <p>And if you ignore them—they'll cost you your peace, your relationships, or your sense of purpose.</p>
                <p>It doesn't have to be this way.</p>
                <p>I'll give you the guidance, tools, and support to break old cycles and realign with who you truly are.</p>
                <p>Whether you're a high achiever who feels empty, or someone quietly wondering if this is all life has to offer...</p>
                <p>It ends here.</p>
                <p>I don't patch over the pain. I cut to the root—so you can release what's not working and step fully into alignment.</p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="rounded-[18px] border border-[#22263a] overflow-hidden bg-black"
            >
              <img 
                src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2161680133/settings_images/046dc10-b74f-13fc-aa81-1a4c0126acc_5695d0ee-a334-4d4c-b987-c70a03f031b0.png" 
                alt="Person meditating in forest with sunlight" 
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h5 className="text-xs font-semibold text-white mb-1">Dessi has been</h5>
              <h5 className="text-xs font-semibold text-white mb-3">FEATURED IN:</h5>
              <div className="inline-flex items-center justify-center rounded-full border border-[#22263a] px-5 py-2 bg-[rgba(9,12,30,0.7)]">
                <img 
                  src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2161680133/settings_images/b5a1bc6-e573-668f-0640-35c3102e7_ME_ON_TWITTER_YouTube_Thumbnail_1_.png" 
                  alt="Time, Business Insider, Forbes, Fox Business, Fortune, CNN, Inc., Sports Illustrated logos" 
                  className="h-7 object-contain grayscale"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* TEAR DOWN / REALIGN / RISE */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Tear Down. Realign. Rise. Without Burning Out.
          </h2>
          <p className="text-[#c0c4cf] text-sm">
            You could spend years repeating the same patterns, reading the same books, trying quick fixes that don't stick. Or you can step into a guided process I've lived myself—rooted in spiritual practices, personal reinvention, and a community that lifts you higher.
          </p>
        </motion.section>

        {/* WHAT WE DO / WHAT YOU GET */}
        <section className="grid md:grid-cols-[3fr_2.3fr] gap-6 mb-20">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Here's what we do:</h2>
            <ul className="space-y-2 text-[#c0c4cf] text-sm pl-5 list-disc">
              <li>Pinpoint the beliefs and patterns that keep you stuck</li>
              <li>Break them down with proven tools and practices</li>
              <li>Build rituals that create clarity, calm, and courage</li>
              <li>Design a vision and a 90-day plan aligned with your true self</li>
              <li>Anchor new habits so change lasts beyond the course</li>
            </ul>
          </motion.div>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Here's what you get:</h2>
            <ul className="space-y-2 text-[#c0c4cf] text-sm pl-5 list-disc mb-4">
              <li>A life that feels lighter, calmer, and aligned with your deepest values</li>
              <li>Clarity on your purpose and next chapter</li>
              <li>Spiritual tools you can return to any time stress or doubt creeps in</li>
              <li>A supportive community walking the same path</li>
              <li>A renewed sense of possibility—you're not drifting, you're directing</li>
            </ul>
            <p className="text-[#c0c4cf] text-sm mb-4">
              This isn't theory. It's a lived, tested process designed to awaken you and move you forward, starting from day one.
            </p>
            <a 
              href="https://www.globalquantumshift.com/offers/58ZR4Y8e/checkout" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7e5f] text-[#050816] font-semibold text-sm shadow-2xl hover:scale-105 transition-transform"
            >
              Join the Waitlist
            </a>
          </motion.div>
        </section>

        {/* GURU / FIXER + VIDEO + STORY */}
        <section className="grid md:grid-cols-[3fr_2.3fr] gap-6 mb-20">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">You Don't Need a Guru.</h2>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">You Need a Fixer.</h2>

            <div className="relative rounded-[18px] overflow-hidden border border-[#22263a] bg-black mb-6" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/9J1Kauiq42g"
                title="AI Expert Chris Dessi Highlight Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not a Guru. Just the Guy Who Burned It Down and Rebuilt His Life.
            </h2>

            <div className="space-y-3 text-[#c0c4cf] text-sm">
              <p>In the Summer of 2025, I hit a wall.</p>
              <p>On the outside? Success. Books published. Media appearances. A shiny career in tech and marketing.</p>
              <p>Behind the scenes? Chaos.</p>
              <p>
                I was running on fumes. My health suffered, my family felt the strain, and no matter how much I achieved, it never felt like enough. I was living on autopilot—patched together by adrenaline and busy work—surviving, not thriving.
              </p>
              <p>So I did the only thing that made sense.</p>
              <p>I tore it all down.</p>
              <p>
                I walked away from the career I had built, and in the rubble I asked the hardest question of my life: Who am I, really—and what am I here to do?
              </p>
              <p>
                That question cracked me open. It led me to the practices, teachers, and tools that became my lifeline: meditation, journaling, breathwork, alignment rituals. Slowly, I rebuilt—not my old life, but an entirely new way of being.
              </p>
              <p>
                What emerged is The Quantum Shift—a framework for awakening and reinvention. Not theory. Not guru-speak. Just the lived, battle-tested process of someone who's been through the fire and came out clearer, calmer, and more aligned.
              </p>
              <p>
                Because here's the truth: if you're holding it together with duct tape—ignoring the cracks in your relationships, your work, or your soul—no quick fix will save you.
              </p>
              <p>
                You don't need more noise. You need a system for realignment. A process to release what's broken and rebuild from the inside out.
              </p>
              <p>
                Now, I bring that process to people like you—those ready to stop patching and start living in alignment.
              </p>
            </div>

            <div className="mt-6">
              <a 
                href="https://www.globalquantumshift.com/offers/58ZR4Y8e/checkout" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7e5f] text-[#050816] font-semibold text-sm shadow-2xl hover:scale-105 transition-transform"
              >
                Join the Waitlist
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Introducing The Quantum Shift Framework
            </h2>
            <div className="space-y-3 text-[#c0c4cf] text-sm mb-6">
              <p>
                The Quantum Shift shows you how to let go of what no longer serves you, uncover the practices that truly create transformation, and rebuild your life with clarity, alignment, and purpose.
              </p>
              <p>
                It's the framework behind countless personal breakthroughs—now available to you through guided programs, live experiences, and a global community of seekers walking the same path.
              </p>
              <p>Inside, you'll have access to:</p>
            </div>

            <div className="grid gap-4 text-[#c0c4cf] text-sm mb-4">
              <p><strong className="text-white">Courses</strong> – bite-sized programs for clarity, calm, and reinvention</p>
              <p><strong className="text-white">Workshops</strong> – live, interactive sessions with practical tools you can use immediately</p>
              <p><strong className="text-white">Community</strong> – a global network of people committed to growth and awakening</p>
              <p><strong className="text-white">Events</strong> – immersive retreats and gatherings designed to accelerate your shift</p>
              <p><strong className="text-white">Podcasts</strong> – conversations with thought leaders, teachers, and seekers</p>
              <p><strong className="text-white">Masterminds</strong> – small group intensives for deep personal transformation</p>
              <p><strong className="text-white">VIP Experiences</strong> – private reinvention days and coaching for those ready to go all in</p>
            </div>

            <p className="text-[#c0c4cf] text-sm mb-4">
              This isn't theory. It's a lived process—tested through fire, refined through practice, and shared with a community that will support you every step of the way.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Courses', 'Workshops', 'Community', 'Events', 'Podcasts', 'Masterminds', 'VIP Experiences'].map((item) => (
                <span key={item} className="rounded-full border border-[#22263a] px-3 py-1.5 text-xs text-[#c0c4cf] bg-[rgba(7,12,26,0.8)]">
                  {item}
                </span>
              ))}
            </div>

            <a 
              href="https://www.globalquantumshift.com/offers/58ZR4Y8e/checkout" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7e5f] text-[#050816] font-semibold text-sm shadow-2xl hover:scale-105 transition-transform"
            >
              Join the Waitlist
            </a>
          </motion.div>
        </section>

        {/* THIS IS FOR YOU / NOT FOR YOU */}
        <section className="grid md:grid-cols-2 gap-6 mb-20">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">This Is For You If…</h2>
            <ul className="space-y-2 text-[#c0c4cf] text-sm pl-5 list-disc mb-4">
              <li>You've built a life that looks fine on the outside, but inside you feel restless and unfulfilled.</li>
              <li>You keep repeating the same patterns—relationships, habits, choices—that never lead to real change.</li>
              <li>You feel the cracks: stress, burnout, or emptiness creeping in, even when things "should" feel good.</li>
              <li>You know you're meant for more, but fear, doubt, or overwhelm keeps you stuck.</li>
            </ul>
            <p className="text-[#c0c4cf] text-sm">
              If that's you—you're not broken, you're just ready for your Quantum Shift.
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">This Is Not For You If…</h2>
            <ul className="space-y-2 text-[#c0c4cf] text-sm pl-5 list-disc mb-4">
              <li>You're comfortable staying on autopilot and don't want to question old patterns.</li>
              <li>You're chasing quick fixes, hacks, or shortcuts instead of real transformation.</li>
              <li>You resist change, even when you know your current path isn't working.</li>
              <li>You're looking for surface-level inspiration but aren't willing to do the inner work.</li>
            </ul>
            <p className="text-[#c0c4cf] text-sm">
              If that's where you are, this probably isn't your moment. But if you're ready to step into deeper alignment—your Quantum Shift is waiting.
            </p>
          </motion.div>
        </section>

        {/* SOCIAL PROOF */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Here are some people who trust me to help them.
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <img 
              src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2161680133/settings_images/e45d4c-c7b0-5e8-67c-5764e3a7d1b7_I_ve_known_chris_for_a_long_time_1_.png" 
              alt="Testimonials" 
              className="w-full rounded-[18px] border border-[#22263a]"
            />
          </div>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Spaces are limited, can you really afford to wait?
          </h2>

          <a 
            href="https://www.globalquantumshift.com/offers/58ZR4Y8e/checkout" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7e5f] text-[#050816] font-semibold text-sm shadow-2xl hover:scale-105 transition-transform"
          >
            Check Availability
          </a>
        </motion.section>

        {/* FAQ */}
        <motion.section {...fadeInUp} className="mb-20">
          <div className="space-y-4">
            <div className="border-t border-[#22263a] pt-4">
              <h5 className="text-xs font-semibold text-white mb-2">Are my results guaranteed?</h5>
              <p className="text-[#c0c4cf] text-sm">
                Like anything in life, you will get out of this what you put into it. While we do offer a money-back guarantee, the results you get are up to you. We can promise that if you commit to the process and put in the work, you will see results.
              </p>
            </div>

            <div className="border-t border-[#22263a] pt-4">
              <h5 className="text-xs font-semibold text-white mb-2">Do I need to be "spiritual"</h5>
              <p className="text-[#c0c4cf] text-sm">
                Not at all. If you happen to be human, and you want to have a better life, and relationships, then this is for you.
              </p>
            </div>

            <div className="border-t border-[#22263a] pt-4">
              <h5 className="text-xs font-semibold text-white mb-2">What happens after the 90 days?</h5>
              <p className="text-[#c0c4cf] text-sm">
                You keep everything. Lifetime access to templates, replays, frameworks, and the systems to get you where you need to be. You'll also get invites to future upgrades.
              </p>
            </div>

            <div className="border-t border-[#22263a] pt-4">
              <h5 className="text-xs font-semibold text-white mb-2">Can I share course info with a friend or family member?</h5>
              <p className="text-[#c0c4cf] text-sm">
                The insights you learn will definitely be share-worthy, but the activities in each class are tailored for the individuals in that specific group. In order for your friends to get the best results, we recommend they sign up to take the workshop themselves.
              </p>
            </div>

            <div className="border-t border-[#22263a] pt-4">
              <h5 className="text-xs font-semibold text-white mb-2">Do you have any incentives if I refer a friend?</h5>
              <p className="text-[#c0c4cf] text-sm">
                Yes! You will receive a $200 credit good for any of our online courses for each friend you send our way.
              </p>
            </div>
          </div>
        </motion.section>

        <footer className="border-t border-[#22263a] mt-12 pt-4 text-xs text-[#c0c4cf] text-center">
          © 2025 TORQUE AI, INC. ALL RIGHTS RESERVED.
        </footer>
      </main>
    </div>
  );
};

export default QuantumShiftCohort90Day;
