import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ZohoQuantumCoachWaitlistForm } from "@/components/ZohoQuantumCoachWaitlistForm";
import { ZohoAI90DayForm } from "@/components/ZohoAI90DayForm";
import ZohoCombinedForm from "@/components/ZohoCombinedForm";
import { motion } from "framer-motion";
import { Calendar, Star, Check, X } from "lucide-react";
import { Helmet } from "react-helmet";

const QuantumShift = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const testimonials = [
    {
      quote: "Chris moves beyond platitudes and drills down to what matters to smart executives",
      author: "John Dokes"
    },
    {
      quote: "Two huge likeable thumbs up!",
      author: "David Kerpin"
    },
    {
      quote: "If you want to succeed you need to be REMARKABLE! Dessi just wrote the 'How To' guide!",
      author: "Jeffrey Hazlett"
    },
    {
      quote: "Chris Dessi offers authentic examples and great advice for the modern executive",
      author: "John Hall"
    },
    {
      quote: "Chris provided an excellent presentation at our company sales meeting which I found to be highly motivational and enlightening",
      author: "Beck Cross"
    },
    {
      quote: "Chris intimately understands both the technological and interpersonal aspects of the field. His passion is nothing short of inspiring and contagious.",
      author: "Holly Alexander"
    },
    {
      quote: "Chris knows his craft like the Pope knows the church.",
      author: "Jamie Narcott"
    },
    {
      quote: "Chris created a whole new style and substance for our presentations, successfully bringing our message to a new audience.",
      author: "Rob Roe"
    },
    {
      quote: "I got to see first hand his dedication, product knowledge, and understanding of how to service fortune 500 clients in the online space.",
      author: "Sean Meehan"
    },
    {
      quote: "Chris has a dynamic personality and is one of the more professional online marketers in the industry.",
      author: "Marc Porcelli"
    },
    {
      quote: "He really knew what he was talking about and explained it in a clear and understandable way. I definitely recommend working with him!",
      author: "Kathleen McCarthy"
    },
    {
      quote: "Chris is smart, straightforward, he knows his business and he's a heck of a nice guy.",
      author: "Nelson Wakefield"
    },
    {
      quote: "I've never met a more positive force of nature than that which we call Chris Dessi. He builds measurable, repeatable, processes that elevate his teams.",
      author: "Nathan Milford"
    },
    {
      quote: "His energy is infectious, even to normally cynical programmers. As a technologist, I felt very lucky and honored to have Chris speak for our products.",
      author: "Sean Conrad"
    },
    {
      quote: "Chris is an outstanding leader with great vision, passion and work ethic.",
      author: "Michael Hines"
    },
    {
      quote: "Chris is smart, hard-working and driven, but he is also compassionate, understanding and possesses remarkable foresight.",
      author: "Jeffrey Hitchcock"
    },
    {
      quote: "Chris was extremely insightful, informative, relevant and funny.",
      author: "Mike Talbot"
    },
    {
      quote: "Chris is truly an expert in the field. I would highly recommend Chris for any speaking engagement or other program",
      author: "Tim Lockwood"
    },
    {
      quote: "Chris' leadership, expertise, and charisma are a must for any organization!",
      author: "Alex Krylov"
    },
    {
      quote: "His ability to communicate with tact and sophistication are emblematic to his outstanding achievements.",
      author: "Chantelle S. White"
    },
    {
      quote: "Chris is highly knowledgeable in the field and brings an understanding that very few can do the needs of the advertiser.",
      author: "Matthew Stern"
    },
    {
      quote: "Chris is an incredibly driven professional who can always be counted on to deliver results!",
      author: "Mark Fiske"
    },
    {
      quote: "Chris is a person you can look up to, learn from and emulate",
      author: "Ed O'Brien"
    },
    {
      quote: "Awesome energy, and the personal touch put it over the edge!",
      author: "Jan Kinsella"
    },
    {
      quote: "Chris Dessi is a GENIUS!! I have had the opportunity to attend three of Chris' presentations. Each time I learned something new",
      author: "Jason C. Starzyk"
    },
    {
      quote: "I highly recommend Chris to come into your company or personally teach you",
      author: "Derek Brown"
    },
    {
      quote: "Chris has done an excellent job in helping my organization",
      author: "Rich Gerszberg"
    }
  ];

  const results = [
    { label: "$18K from one email sequence", author: "Maya, coach" },
    { label: "3x my revenue in 90 days", author: "John, e-commerce owner" },
    { label: "Leads coming in while I'm on vacation", author: "Sofia, consultant" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Quantum Coaching + AI Optimization - Transform Your Life and Business in 90 Days</title>
        <meta name="description" content="Work directly with Chris Dessi. Upgrade your human operating system AND your business operating system. From personal transformation to AI-powered business growth." />
        <meta name="keywords" content="quantum coaching, AI business optimization, executive coaching, business transformation, Chris Dessi, personal development, AI growth systems, torque AI" />
        <link rel="canonical" href="https://torqueapp.ai/quantum-shift/coach" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3YB4QY7TVK"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3YB4QY7TVK');
          `}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <iframe
              className="absolute inset-0 w-full h-full object-cover"
              src="https://www.youtube.com/embed/9J1Kauiq42g?autoplay=1&mute=1&loop=1&playlist=9J1Kauiq42g&controls=0&showinfo=0&rel=0"
              title="Chris Dessi TV Highlights"
              allow="autoplay; encrypted-media"
              style={{ pointerEvents: 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
          </div>
        </div>
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-6 py-3 mb-8">
              <span className="text-sm font-bold tracking-wider">Quantum Coaching + AI Optimization</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Transform Your Life<br />and Your Business Today
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-4 max-w-3xl leading-relaxed font-light">
              Work directly with Chris Dessi
            </p>
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-l-4 border-purple-500 p-6 mb-12 max-w-3xl">
              <blockquote className="text-2xl md:text-3xl italic">
                "One 15 minute meeting with Chris made me millions."
              </blockquote>
              <p className="text-lg mt-2 text-gray-300">— Gary Vaynerchuk, Entrepreneur & CEO, VaynerMedia</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
                onClick={() => document.getElementById('quantum-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Join the Waiting List
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Notice + Who This Is For */}
      <section className="bg-black py-12">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.p 
              className="text-3xl md:text-5xl font-black mb-12 animate-pulse" 
              style={{ color: '#dc2626' }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚠️ Limited spaces left! Enrollment closes on December 31st — or as soon as all spots are gone.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-12 text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
                Discover How Executives Have Turned Their Businesses and Lives Around
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  From shifting <strong>failing businesses to generating $20K–$100K/month</strong> (without hiring an agency)...
                </p>
                <p>
                  to leading <strong>calmer, more aligned lives</strong> with renewed clarity, purpose, and mission.
                </p>
                <p className="text-xl font-semibold text-black mt-8">
                  This is <strong>not just coaching</strong> and <strong>not just AI</strong>.
                </p>
                <p>
                  It's a proven blend of:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Growth systems,</li>
                  <li>Quantum-level coaching, and</li>
                  <li>AI-powered marketing and sales</li>
                </ul>
                <p className="text-xl font-semibold text-black mt-6">
                  ...that turn into <strong>consistent revenue</strong> and a life that actually feels like yours.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gary Vaynerchuk Testimonial */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="relative">
            <div className="absolute -top-8 -left-8 text-purple-200 text-9xl font-serif leading-none">"</div>
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 relative">
              <div className="flex items-center gap-3 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-3xl md:text-5xl font-bold text-black mb-12 leading-tight">
                One 15 minute meeting with Chris made me millions
              </blockquote>
              <div className="flex items-center gap-8">
                <img 
                  src={new URL('../assets/gary-vee-headshot.jpg', import.meta.url).href}
                  alt="Gary Vaynerchuk" 
                  className="w-40 h-40 rounded-full object-cover shadow-xl"
                />
                <div>
                  <div className="text-2xl font-bold text-black">Gary Vaynerchuk</div>
                  <div className="text-lg text-gray-600 mb-3">Entrepreneur & CEO, VaynerMedia</div>
                  <a 
                    href="https://www.instagram.com/stories/highlights/17984836850668488/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Watch Gary's Story on Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 text-purple-200 text-9xl font-serif leading-none">"</div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who is The Quantum Coach?</h2>
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden" style={{ position: 'relative', aspectRatio: '1920/1080' }}>
            <iframe 
              src="https://share.synthesia.io/embeds/videos/cd9016f8-5b14-47d0-9fec-e893be33ccc9" 
              loading="lazy" 
              title="Synthesia video player - Copy of Copy of Embrace the AI Revolution" 
              allowFullScreen 
              allow="encrypted-media; fullscreen; microphone;" 
              style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0, overflow: 'hidden' }}
            />
          </div>
        </div>
      </section>

      {/* The Big Idea */}
      <section className="bg-gradient-to-br from-purple-900 via-black to-purple-900 py-32 text-white">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              I Help the Person. I Help the Business.
            </h2>
            <p className="text-2xl md:text-3xl text-purple-200 mb-8">You can choose one.</p>
            <p className="text-3xl md:text-4xl font-bold text-white">Doing both changes everything.</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Most programs try to fix either:</h3>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">•</span>
                  <span>your <strong>inner world</strong> (mindset, purpose, alignment) <em>or</em></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">•</span>
                  <span>your <strong>outer world</strong> (revenue, systems, marketing).</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">This is different.</h3>
              <p className="text-lg mb-6">We upgrade:</p>
              <ol className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="font-bold">1.</span>
                  <span><strong>You</strong> – your beliefs, patterns, decision-making, leadership, energy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">2.</span>
                  <span><strong>Your Business</strong> – your lead flow, marketing systems, and operations using AI.</span>
                </li>
              </ol>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-white text-black rounded-2xl p-12 text-center">
            <p className="text-xl mb-6">
              Because if your inner operating system is out of alignment, no strategy will stick.
            </p>
            <p className="text-xl mb-6">
              And if your business systems are broken, all the mindset in the world won't move the needle.
            </p>
            <p className="text-3xl font-bold mt-8">You need <span className="text-purple-600">both</span>.</p>
          </motion.div>
        </div>
      </section>

      {/* Track 1: The Quantum Coach */}
      <section id="quantum-form" className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-32 text-white">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-block bg-purple-600 rounded-full px-6 py-3 mb-6">
              <span className="text-sm font-bold tracking-wider">ENGINE 1</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Quantum Coach: Personal Transformation</h2>
            <p className="text-xl text-gray-300">Transform your inner life to transform your leadership</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Does this sound like you?</h3>
            <ul className="space-y-4 text-lg text-gray-300 mb-12">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span>You feel like you're living on autopilot, checking boxes instead of following your calling.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span>You've achieved things on paper, but deep down you know something's missing.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span>You sense you're out of alignment, but you can't name exactly what feels "off."</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span>You fill your days with busy work, but at night you wonder what it's all for.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span>You long for deeper meaning, but you're unsure where to begin.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span>You've tried quick fixes, but nothing seems to create lasting change.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span>You know you're meant for more—but fear, doubt, or overwhelm keeps you stuck.</span>
              </li>
            </ul>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-12">
              <p className="text-xl mb-6">
                If any of this resonates—you're not broken, and you're not alone.
              </p>
              <p className="text-2xl font-bold text-purple-300">
                You're standing at the doorway of your <strong>Quantum Shift</strong>.
              </p>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              This is Not a Course. This is an <em>Intervention.</em>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4 text-lg text-gray-300">
                <p>The cracks you're noticing in your life? They're real.</p>
                <p>If you ignore them, they'll cost you your peace, your relationships, and your sense of purpose.</p>
                <p className="font-bold text-white">It doesn't have to be this way.</p>
                <p>I don't patch over the pain.</p>
                <p>I cut to the root—so you can release what's not working and step fully into alignment.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4">Tear Down. Realign. Rise.<br/>Without Burning Out.</h4>
                <p className="text-lg">Here's what we do:</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Pinpoint the beliefs and patterns that keep you stuck</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Break them down with proven tools and practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Build rituals that create clarity, calm, and courage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Design a vision and a 90-day plan aligned with your true self</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>Anchor new habits so change lasts beyond the program</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white text-black rounded-2xl p-12 mb-12">
              <h4 className="text-3xl font-bold mb-6">Here's what you get:</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>A life that feels lighter, calmer, and aligned with your deepest values</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Clarity on your purpose and next chapter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Spiritual tools you can return to anytime stress or doubt creeps in</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>A supportive community walking the same path</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>A renewed sense of possibility—you're not drifting, you're directing</span>
                </li>
              </ul>
              <p className="text-xl font-bold mt-8 text-purple-900">
                This isn't theory. It's a <strong>lived, tested process</strong> designed to awaken you and move you forward, starting from day one.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Form */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="section-padding max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Quantum Coaching - Personal Transformation
          </h2>
          <ZohoQuantumCoachWaitlistForm />
        </div>
      </section>

      {/* Track 2: Torque AI */}
      <section id="ai-form" className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 py-32 text-white">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-block bg-blue-600 rounded-full px-6 py-3 mb-6">
              <span className="text-sm font-bold tracking-wider">ENGINE 2</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Torque AI: Business Growth with AI</h2>
            <p className="text-xl text-gray-300">The Proven 90-Day System to Grow Your Business Using AI—Without Getting Technical</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-12">
              <p className="text-2xl mb-6">
                A step-by-step AI growth system for entrepreneurs and small business owners who want <strong>more leads, more time, and more freedom</strong>—without burning out or hiring a massive team.
              </p>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-8">Struggling with business growth?</h3>
            <ul className="space-y-4 text-lg text-gray-300 mb-12">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span>You know your business has potential, but growth has stalled</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span>You're tired of spending money on marketing that doesn't convert</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span>You keep hearing about AI, but it feels overwhelming or "not for you"</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span>You're doing everything right, but not seeing the results you deserve</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 mb-12 text-center">
              <p className="text-2xl font-bold">
                Trying to grow a business in 2025 without AI is like trying to win a Formula 1 race on a bicycle.
              </p>
            </div>

            <h3 className="text-3xl font-bold mb-6">I Built a System That Finally Changed Everything</h3>
            <div className="space-y-4 text-lg text-gray-300 mb-12">
              <p>
                After helping businesses of all sizes for nearly 30 years—and personally closing over <strong>$100M in enterprise sales</strong>—I hit a wall.
              </p>
              <p>AI was everywhere, but most of what I saw was hype or snake oil.</p>
              <p>
                So I spent a full year testing every AI tool I could find, figuring out what actually works for small businesses. Then I built a system—simple, repeatable, and wildly effective.
              </p>
              <p>In 90 days, it helped:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A real estate agent <strong>triple</strong> her monthly leads</li>
                <li>A gym owner automate follow-ups and <strong>double</strong> new member sign-ups</li>
                <li>A consultant close <strong>$50K</strong> in new business using nothing but email + AI</li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold mb-6">Why Most Entrepreneurs Fail with AI</h3>
            <p className="text-lg text-gray-300 mb-6">They fall into one of the 3 AIs:</p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3">Avoid it</h4>
                <p className="text-gray-300">"This is too technical."</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3">Ignore it</h4>
                <p className="text-gray-300">"It won't affect my industry."</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3">Abuse it</h4>
                <p className="text-gray-300">Using generic tools that spit out trash content.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 mb-12">
              <h3 className="text-3xl font-bold mb-6 text-center">Instead, I'll teach you to <strong>AIM</strong>:</h3>
              <div className="space-y-6 text-lg">
                <div>
                  <h4 className="text-2xl font-bold mb-2">Automate</h4>
                  <p>your time-wasting tasks</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Improve</h4>
                  <p>the systems you already use</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Monetize</h4>
                  <p>everything you do online</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-8">Inside the AI Growth System, You'll Get:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3 flex items-start gap-2">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Growth Systems for Lead Generation</span>
                </h4>
                <p className="text-gray-300 ml-8">Attract clients on autopilot</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3 flex items-start gap-2">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Copy & Content Systems</span>
                </h4>
                <p className="text-gray-300 ml-8">Emails, landing pages, and social posts that convert</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3 flex items-start gap-2">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Sales Automation Systems</span>
                </h4>
                <p className="text-gray-300 ml-8">AI-driven DMs and email sequences</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3 flex items-start gap-2">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span>AI Toolkit Walkthroughs</span>
                </h4>
                <p className="text-gray-300 ml-8">What to use, where to click, how to delegate</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3 flex items-start gap-2">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Weekly Coaching Calls</span>
                </h4>
                <p className="text-gray-300 ml-8">Live Q&A and campaign reviews</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3 flex items-start gap-2">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span>On-Demand Training</span>
                </h4>
                <p className="text-gray-300 ml-8">Binge-ready video lessons</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3 flex items-start gap-2">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Plug & Play Templates</span>
                </h4>
                <p className="text-gray-300 ml-8">Landing pages, email sequences, outreach messages</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3 flex items-start gap-2">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Private Community</span>
                </h4>
                <p className="text-gray-300 ml-8">Founders who get it</p>
              </div>
            </div>

            <div className="bg-white text-black rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-6 text-center">Real Results from Real Entrepreneurs:</h3>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <p className="text-xl font-bold">{result.label}</p>
                    <p className="text-gray-600">— {result.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Form */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="section-padding max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Torque AI - Business Growth with AI
          </h2>
          <ZohoAI90DayForm />
        </div>
      </section>

      {/* Combined Form */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="section-padding max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            COMBINED Coaching & AI Integration
          </h2>
          <ZohoCombinedForm />
        </div>
      </section>

      {/* Combined Offer */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 py-32 text-white">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              The Combined Offer – Your AI-Powered Quantum Shift
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Personal Transformation</h3>
                <ul className="space-y-3 text-lg text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span>Live a life that feels lighter, calmer, and aligned with your deepest values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span>Break free from patterns that keep you stuck</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span>Find clarity on your purpose and next chapter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span>Build rituals that create lasting change</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Business Growth</h3>
                <ul className="space-y-3 text-lg text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>Save 10+ hours a week with automations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>Get more high-quality leads without paid ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>Stop guessing and start scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>Build marketing systems that work even when you're offline</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">We can:</h3>
              <div className="space-y-4 text-xl">
                <p><strong>Just work on you</strong> (Quantum Coaching)</p>
                <p><strong>Just work on your business</strong> (Torque AI 90-Day Growth System)</p>
                <p className="text-2xl mt-6">Or we can do <strong>both together</strong>—</p>
                <p className="text-3xl font-bold mt-4">
                  upgrading the person <em>and</em> the business in one integrated 90-day container.
                </p>
                <p className="text-2xl mt-6 font-bold">That's where the real shift happens.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Can/Can't Help */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Who We Can (And Can't) Help
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                <Check className="w-8 h-8" />
                We can help:
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Business owners with at least one offer ready to sell</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Entrepreneurs with 5+ hours a week to focus on growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Coaches, consultants, service providers, and course creators</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Leaders ready to do the inner work for lasting transformation</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <X className="w-8 h-8" />
                We can't help:
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>People looking for get-rich-quick schemes</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Total beginners with no business or product idea</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Those comfortable staying on autopilot who don't want to question old patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>People chasing quick fixes instead of real transformation</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 py-32 text-white">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Here are some people who trust me to help them.
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 flex-shrink-0 mt-1" />
                    <p className="text-sm italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  <p className="text-xs font-semibold text-gray-300">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Chris */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-32 text-white">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Chris Dessi</h2>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={new URL('../assets/chris-profile.jpg', import.meta.url).href}
                alt="Chris Dessi" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Chris Dessi is a business leader, author, and television commentator who has closed over <strong className="text-white">$100 million</strong> in enterprise sales in his nearly 30-year career.
              </p>
              <p>
                As a frequent Fox 5 contributor and thought leader, Chris brings <strong className="text-white">battle-tested frameworks</strong> and real-world experience to every coaching session.
              </p>
              <p>
                His approach is direct, actionable, and focused on results—helping executives and entrepreneurs cut through the noise and execute with clarity.
              </p>
              <blockquote className="border-l-4 border-purple-500 pl-6 italic text-xl text-white my-6">
                "Most leaders know what to do. They just don't know what to do first. That's what I solve."
                <footer className="text-gray-400 mt-2">— Chris Dessi</footer>
              </blockquote>
              <div className="space-y-4 pt-6">
                <p className="text-white font-bold text-xl mb-6">Trusted by industry leaders:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {testimonials.slice(0, 6).map((testimonial, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="italic mb-2 text-sm">"{testimonial.quote}"</p>
                      <p className="text-xs text-gray-400">– {testimonial.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 py-32 text-white">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Apply Now — Let's Build Your AI-Powered Quantum Shift
            </h2>
            <p className="text-xl md:text-2xl mb-12">
              This program isn't open year-round. We cap enrollment to maintain personal support and high quality.
            </p>
            <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm mb-12">
              <p className="text-2xl font-bold mb-6">When you apply, results like these become possible:</p>
              <ul className="space-y-3 text-lg">
                <li>"$10K in 7 days after launch."</li>
                <li>"My team now runs the whole system while I focus on strategy."</li>
                <li>"I built a lead engine that works while I sleep."</li>
              </ul>
            </div>
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-12 py-8 text-xl"
              onClick={() => document.getElementById('quantum-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Join the Waiting List
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumShift;
