import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

import { ZohoQuantumCoachWaitlistForm } from "@/components/ZohoQuantumCoachWaitlistForm";
import ZohoQuantumCoachForm from "@/components/ZohoQuantumCoachForm";
import { motion } from "framer-motion";
import { Mic, Youtube, BookOpen, Calendar, Star, Play, Target, TrendingUp, Users, Zap, ArrowRight, Sparkles, Crown, CalendarDays, Mail, MessageSquare, Check } from "lucide-react";
import { Helmet } from "react-helmet";
import quantumCoachLogo from "@/assets/quantum-coach-logo.png";
import chrisFire from "@/assets/chris-fire.jpg";
import garyVeeImage from "@/assets/gary-vee.png";
import testimonialsGrid1 from "@/assets/testimonials-grid-1.webp";
import testimonialsGrid2 from "@/assets/testimonials-grid-2.webp";
import testimonialsGrid3 from "@/assets/testimonials-grid-3.webp";
import testimonialsGrid4 from "@/assets/testimonials-grid-4.webp";
import testimonialsGrid5 from "@/assets/testimonials-grid-5.webp";
import testimonialsGrid6 from "@/assets/testimonials-grid-6.webp";
import testimonialsGrid7 from "@/assets/testimonials-grid-7.webp";
import testimonialsGrid8 from "@/assets/testimonials-grid-8.webp";

const QuantumShift = () => {
  const [slotsRemaining] = useState(8);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };


  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Clarity",
      description: "Cut through the noise and focus on what moves the needle for your business and career."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Revenue Growth",
      description: "Learn the exact frameworks Chris used to close $32M in enterprise deals."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership Impact",
      description: "Build high-performing teams that execute with speed and confidence."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Decision Velocity",
      description: "Make better decisions faster and eliminate costly delays."
    }
  ];


  const testimonials = [
    {
      quote: "Chris helped me see the gaps in my decision-making process. Revenue jumped 40% in six months.",
      author: "Sarah Chen",
      role: "CEO, SaaS Platform"
    },
    {
      quote: "The clarity I gained in our first session was worth 10x the investment. Chris doesn't pull punches.",
      author: "Michael Roberts",
      role: "VP of Sales, Enterprise Software"
    },
    {
      quote: "Best coaching investment I've made. Chris brings real-world battle scars and actionable frameworks.",
      author: "Jennifer Martinez",
      role: "Chief Revenue Officer"
    }
  ];

  const featuredVideos = [
    {
      title: "TEDx Talk: The Future of Leadership",
      url: "https://www.youtube.com/watch?v=FEm5c66Nylc",
      embedUrl: "https://www.youtube.com/embed/FEm5c66Nylc"
    },
    {
      title: "Client Success Stories",
      url: "https://www.youtube.com/playlist?list=PL1uIG3i2RBhFDyMDBxX7rEQtTKgrWaqdw",
      embedUrl: "https://www.youtube.com/embed/videoseries?list=PL1uIG3i2RBhFDyMDBxX7rEQtTKgrWaqdw"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Quantum Coach - Executive Coaching with Chris Dessi | Join the Waiting List</title>
        <meta name="description" content="Work 1-on-1 with Chris Dessi, the leader who closed $100M+ in enterprise deals. Join the waiting list for exclusive executive coaching opportunities." />
        <meta name="keywords" content="executive coaching, business coaching, leadership coaching, Chris Dessi coach, executive development, strategic coaching, revenue growth coaching, enterprise sales coaching, business strategy coaching, CEO coaching, executive advisor, leadership development, business mentor, sales coaching, executive performance coaching" />
        <link rel="canonical" href="https://torqueapp.ai/quantum-shift/coach" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3YB4QY7TVK"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3YB4QY7TVK');
            
            // Helper function to delay opening a URL until a gtag event is sent.
            // Call it in response to an action that should navigate to a URL.
            function gtagSendEvent(url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };
              gtag('event', 'purchase', {
                'event_callback': callback,
                'event_timeout': 2000,
                // <event_parameters>
              });
              return false;
            }
          `}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section with Video */}
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
              <span className="text-sm font-bold tracking-wider">Quantum Coaching</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Transform Your Life<br />and Your Business Today
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-3xl leading-relaxed font-light">
              Work directly with Chris Dessi
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Join the Waiting List
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Notice */}
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
              className="text-3xl md:text-5xl font-black mb-6 animate-pulse" 
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discover How Executives Have Turned Their Businesses and Lives Around:
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Shifting failing businesses to Generating $20K–$100K/Month (without hiring an agency), to leading fulfilling lives with renewed clarity and mission alignment.
              </p>
              <p className="text-lg text-gray-400 mt-4 max-w-4xl mx-auto">
                Proven growth systems, coaching, and AI marketing that turns into consistent sales and a life transformed.
              </p>
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
           <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Join the Waiting List
            </Button>
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

      {/* Quantum Shift Personal Transformation Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-32 text-white">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Quantum Coach: Personal Transformation</h2>
            <p className="text-xl text-gray-300">Transform your inner life to transform your leadership</p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Does This Sound Like You?</h3>
            <ul className="space-y-4 text-lg text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>You feel like you're living on autopilot, checking boxes instead of following your calling.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>You've achieved things on paper, but deep down you know something's missing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>You sense you're out of alignment, but you can't name exactly what feels "off."</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>You fill your days with busy work, but at night you wonder what it's all for.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>You long for deeper meaning, but you're unsure where to begin.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>You've tried quick fixes, but nothing seems to create lasting change.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>You know you're meant for more—but fear, doubt, or overwhelm keeps you stuck.</span>
              </li>
            </ul>
            <p className="text-xl text-gray-300 mb-8">
              If any of this resonates—you're not broken, and you're not alone. You're standing at the doorway of your Quantum Shift.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intervention Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
              This is Not a Course. This is an <span className="italic">Intervention.</span>
            </h2>
          </motion.div>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img 
                src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2161680133/settings_images/046dc10-b74f-13fc-aa81-1a4c0126acc_5695d0ee-a334-4d4c-b987-c70a03f031b0.png"
                alt="Person in meditation"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-black">You're Not Crazy — It is harder than it should be.</h3>
              <p className="text-lg text-gray-700">The cracks you're noticing in your life? They're real.</p>
              <p className="text-lg text-gray-700">And if you ignore them—they'll cost you your peace, your relationships, or your sense of purpose.</p>
              <p className="text-lg text-gray-700">It doesn't have to be this way.</p>
              <p className="text-lg text-gray-700">I'll give you the guidance, tools, and support to break old cycles and realign with who you truly are.</p>
              <p className="text-lg text-gray-700">Whether you're a high achiever who feels empty, or someone quietly wondering if this is all life has to offer...</p>
              <p className="text-lg text-gray-700 font-bold">It ends here.</p>
              <p className="text-lg text-gray-700">I don't patch over the pain. I cut to the root—so you can release what's not working and step fully into alignment.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Tear Down. Realign. Rise. Without Burning Out.
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              You could spend years repeating the same patterns, reading the same books, trying quick fixes that don't stick. 
              Or you can step into a guided process I've lived myself—rooted in spiritual practices, personal reinvention, 
              and a community that lifts you higher.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-white shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">Here's what we do:</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Pinpoint the beliefs and patterns that keep you stuck</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Break them down with proven tools and practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Build rituals that create clarity, calm, and courage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Design a vision and a 90-day plan aligned with your true self</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Anchor new habits so change lasts beyond the course</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Here's what you get:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>A life that feels lighter, calmer, and aligned with your deepest values</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Clarity on your purpose and next chapter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Spiritual tools you can return to any time stress or doubt creeps in</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>A supportive community walking the same path</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>A renewed sense of possibility—you're not drifting, you're directing</span>
                </li>
              </ul>
              <p className="mt-8 text-white/90 font-semibold">
                This isn't theory. It's a lived, tested process designed to awaken you and move you forward, starting from day one.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Fixer Section */}
      <section className="bg-black text-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              You Don't Need a <span className="italic text-purple-400">Guru</span>.
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold">
              You Need a <span className="italic text-pink-400">Fixer</span>.
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="mb-16">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9J1Kauiq42g"
                title="AI Expert Chris Dessi Highlight Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
            <h3 className="text-3xl font-bold text-white mb-6">Not a Guru. Just the Guy Who Burned It Down and Rebuilt His Life.</h3>
            <p>In the Summer of 2025, I hit a wall.</p>
            <p>On the outside? Success. Books published. Media appearances. A shiny career in tech and marketing.</p>
            <p>Behind the scenes? Chaos.</p>
            <p>I was running on fumes. My health suffered, my family felt the strain, and no matter how much I achieved, it never felt like enough. I was living on autopilot—patched together by adrenaline and busy work—surviving, not thriving.</p>
            <p className="font-bold text-white">So I did the only thing that made sense.</p>
            <p className="font-bold text-white">I tore it all down.</p>
            <p>I walked away from the career I had built, and in the rubble I asked the hardest question of my life: <span className="italic">Who am I, really—and what am I here to do?</span></p>
            <p>That question cracked me open. It led me to the practices, teachers, and tools that became my lifeline: meditation, journaling, breathwork, alignment rituals. Slowly, I rebuilt—not my old life, but an entirely new way of being.</p>
            <p>What emerged is <span className="font-bold text-purple-400">The Quantum Shift</span>—a framework for awakening and reinvention. Not theory. Not guru-speak. Just the lived, battle-tested process of someone who's been through the fire and came out clearer, calmer, and more aligned.</p>
            <p>Because here's the truth: if you're holding it together with duct tape—ignoring the cracks in your relationships, your work, or your soul—no quick fix will save you.</p>
            <p>You don't need more noise. You need a system for realignment. A process to release what's broken and rebuild from the inside out.</p>
            <p className="font-bold text-white">Now, I bring that process to people like you—those ready to stop patching and start living in alignment.</p>
          </motion.div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 text-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Introducing The Quantum Shift Framework</h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8">
              The <span className="font-bold">Quantum Shift</span> shows you how to let go of what no longer serves you, 
              uncover the practices that truly create transformation, and rebuild your life with clarity, alignment, and purpose.
            </p>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
              It's the framework behind countless personal breakthroughs—now available to you through guided programs, 
              live experiences, and a global community of seekers walking the same path.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <Users className="w-12 h-12 text-pink-300 mb-4" />
              <h4 className="text-xl font-bold mb-2">Workshops</h4>
              <p className="text-gray-300">Live, interactive sessions with practical tools you can use immediately</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <MessageSquare className="w-12 h-12 text-purple-300 mb-4" />
              <h4 className="text-xl font-bold mb-2">Community</h4>
              <p className="text-gray-300">A global network of people committed to growth and awakening</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <CalendarDays className="w-12 h-12 text-pink-300 mb-4" />
              <h4 className="text-xl font-bold mb-2">Events</h4>
              <p className="text-gray-300">Immersive retreats and gatherings designed to accelerate your shift</p>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center">
            <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
              👉 <span className="italic">This isn't theory. It's a lived process—tested through fire, refined through practice, 
              and shared with a community that will support you every step of the way.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Torque AI: Business Growth with AI Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Torque AI: Business Growth with AI
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              The Proven 90-Day System to Grow Your Business Using AI—Without Getting Technical
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              The step-by-step AI growth system for entrepreneurs and small business owners who want more leads, 
              more time, and more freedom—without burning out or hiring a massive team.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="mb-16">
            <Card className="p-10 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <h3 className="text-3xl font-bold text-black mb-8 text-center">Struggling with Business Growth?</h3>
              <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>You know your business has potential, but growth has stalled</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>You're tired of spending money on marketing that doesn't convert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>You keep hearing about AI, but it feels overwhelming or "not for you"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>You're doing everything right, but not seeing the results you deserve</span>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-gray-800 mb-2">You're not alone.</p>
                <p className="text-lg text-gray-700 italic">
                  Trying to grow a business in 2025 without AI is like trying to win a Formula 1 race on a bicycle.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* I Built a System Section */}
      <section className="bg-gradient-to-br from-purple-900 to-black text-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-6 text-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">I Built a System That Finally Changed Everything</h2>
            <p>After helping businesses of all sizes for the past 20 years, I hit a wall. AI was everywhere, but most of what I saw was hype or snake oil.</p>
            <p>So I spent a full year testing every AI tool I could find, figuring out what actually works for small businesses. Then I built a system—simple, repeatable, and wildly effective.</p>
            <p className="font-bold text-2xl text-purple-300 mb-4">In 90 days, it helped:</p>
            <ul className="space-y-3 text-gray-200 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span>A real estate agent triple her monthly leads</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span>A gym owner automate follow-ups and double new member sign-ups</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span>A consultant close $50k in new business using nothing but email + AI</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Most Fail Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Why Most Entrepreneurs Fail with AI</h2>
            <p className="text-xl text-gray-700 mb-8">Because they fall into the trap of one of the 3 AIs:</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-red-50 border-red-200">
              <h4 className="text-2xl font-bold text-red-600 mb-4">Avoid it</h4>
              <p className="text-gray-700">"This is too technical."</p>
            </Card>
            <Card className="p-6 bg-red-50 border-red-200">
              <h4 className="text-2xl font-bold text-red-600 mb-4">Ignore it</h4>
              <p className="text-gray-700">"It won't affect my industry."</p>
            </Card>
            <Card className="p-6 bg-red-50 border-red-200">
              <h4 className="text-2xl font-bold text-red-600 mb-4">Abuse it</h4>
              <p className="text-gray-700">Using generic tools that spit out trash content</p>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-8">Instead, I'll teach you to AIM:</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <h4 className="text-2xl font-bold text-green-600 mb-4">Automate</h4>
                <p className="text-gray-700">your time-wasting tasks</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <h4 className="text-2xl font-bold text-green-600 mb-4">Improve</h4>
                <p className="text-gray-700">the systems you already use</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <h4 className="text-2xl font-bold text-green-600 mb-4">Monetize</h4>
                <p className="text-gray-700">everything you do online</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Inside The AI Growth System, You'll Get:</h2>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Target className="w-10 h-10 text-purple-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Growth Systems for Lead Generation</h4>
                  <p className="text-gray-700">Use AI to attract clients on autopilot—even if you hate marketing.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <BookOpen className="w-10 h-10 text-pink-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Copy & Content Systems</h4>
                  <p className="text-gray-700">Steal my frameworks for emails, landing pages, and social posts that convert.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-10 h-10 text-purple-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Sales Automation Systems</h4>
                  <p className="text-gray-700">Turn conversations into conversions with AI-driven DMs and email sequences.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Zap className="w-10 h-10 text-pink-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">AI Toolkit Walkthroughs</h4>
                  <p className="text-gray-700">I'll show you exactly which tools to use, where to click, and how to delegate them to your team.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Calendar className="w-10 h-10 text-purple-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Weekly Coaching Calls</h4>
                  <p className="text-gray-700">Live Q&As to answer your questions and review your campaigns.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Play className="w-10 h-10 text-pink-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">On-Demand Training</h4>
                  <p className="text-gray-700">Binge-ready video lessons you can access any time.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Mail className="w-10 h-10 text-purple-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Plug & Play Templates</h4>
                  <p className="text-gray-700">Landing pages. Email sequences. Outreach messages. Done-for-you.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-10 h-10 text-pink-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Private Community Access</h4>
                  <p className="text-gray-700">Network, collaborate, and stay motivated with like-minded founders.</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="bg-black text-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Real Results from Real Entrepreneurs:</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-purple-600 to-pink-600 border-0 text-white">
                <p className="text-2xl font-bold mb-4">"$18K from one email sequence."</p>
                <p className="text-gray-200">– Maya, coach</p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-purple-600 to-pink-600 border-0 text-white">
                <p className="text-2xl font-bold mb-4">"3x my revenue in 90 days."</p>
                <p className="text-gray-200">– John, e-commerce owner</p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-purple-600 to-pink-600 border-0 text-white">
                <p className="text-2xl font-bold mb-4">"Leads coming in while I'm on vacation."</p>
                <p className="text-gray-200">– Sofia, consultant</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For You / Not For You Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">This System Is For You If You Want To:</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div {...fadeInUp}>
              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 h-full">
                <h3 className="text-2xl font-bold text-black mb-6">Personal Transformation</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>Live a life that feels lighter, calmer, and aligned with your deepest values</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>Break free from patterns that keep you stuck</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>Find clarity on your purpose and next chapter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>Build rituals that create lasting change</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 h-full">
                <h3 className="text-2xl font-bold text-black mb-6">Business Growth</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Save 10+ hours a week with automations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Get more high-quality leads without paid ads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Stop guessing and start scaling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Build marketing systems that work even when you're offline</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="mb-16">
            <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <h3 className="text-3xl font-bold text-black mb-6 text-center">We Can Help:</h3>
              <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Business owners with at least one offer ready to sell</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Entrepreneurs with 5+ hours a week to focus on growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Coaches, consultants, service providers, and course creators</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>People ready to do the inner work for lasting transformation</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <Card className="p-10 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <h3 className="text-3xl font-bold text-black mb-6 text-center">We Can't Help:</h3>
              <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-2xl leading-none mt-1">✕</span>
                  <span>People looking for get-rich-quick schemes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-2xl leading-none mt-1">✕</span>
                  <span>Total beginners with no business or product idea</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-2xl leading-none mt-1">✕</span>
                  <span>Those comfortable staying on autopilot who don't want to question old patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-2xl leading-none mt-1">✕</span>
                  <span>People chasing quick fixes instead of real transformation</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-16 py-10 text-2xl"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now — Let's Build Your AI-Powered Quantum Shift
            </Button>
            <p className="mt-6 text-gray-600 text-lg">
              This program isn't open year-round. We cap enrollment to maintain personal support and high quality.
            </p>
            <p className="mt-4 text-gray-700 font-semibold text-lg">
              When you apply, results like these become possible: "$10K in 7 days after launch" • "My team now runs the whole system while I focus on strategy" • "I built a lead engine that works while I sleep"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Form */}
      <div id="waitlist-form">
        <ZohoQuantumCoachWaitlistForm />
      </div>

      {/* Chris Dessi Bio Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Meet Chris Dessi
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Chris Dessi is a business leader, author, and television commentator who has closed 
                <span className="font-bold text-black"> over $100 million in enterprise sales</span> in his nearly 30 year career.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                As a frequent Fox 5 contributor and thought leader, Chris brings battle-tested frameworks and 
                real-world experience to every coaching session.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                His approach is direct, actionable, and focused on results—helping executives and entrepreneurs 
                cut through the noise and execute with clarity.
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="w-full max-w-md relative">
                <motion.img 
                  src={chrisFire} 
                  alt="Chris Dessi" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  animate={{
                    filter: [
                      "brightness(1) contrast(1)",
                      "brightness(1.1) contrast(1.05)",
                      "brightness(0.95) contrast(0.98)",
                      "brightness(1.05) contrast(1.02)",
                      "brightness(1) contrast(1)"
                    ]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Testimonials - Consolidated */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real executives
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src={testimonialsGrid6} 
                alt="Client testimonial"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src={testimonialsGrid7} 
                alt="Client testimonial"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src={testimonialsGrid8} 
                alt="Client testimonial"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
          <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl shadow-xl hover:shadow-2xl transition-all"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Join the Waiting List
            </Button>
          </motion.div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Transform</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real coaching for leaders who want results, not theory.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-purple-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Watch The Quantum Shift Podcast */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch The Quantum Shift Podcast</h2>
            <p className="text-xl text-muted-foreground">
              Real conversations with leaders who drive change
            </p>
          </div>
          <div className="relative w-full rounded-lg overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/videoseries?si=_NiTeulHQDy5E7kZ&amp;list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Executive Coaching Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Executive Coaching Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the waitlist to get notified when enrollment opens
            </p>
          </motion.div>
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Join the Waiting List
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-black py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Watch & Learn
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, strategies, and stories from Chris Dessi
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => window.open(video.url, '_blank')}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-20 h-20 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="mt-16 text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
              onClick={() => window.open('https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_', '_blank')}
            >
              <Youtube className="mr-3 h-6 w-6" />
              Watch The Quantum Shift Podcast
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Keynote Videos Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Keynote Speaking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformative presentations that inspire action
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/videoseries?list=PL1uIG3i2RBhEC7ZrhpvuGzvbc3W6JgopX"
              title="Chris Dessi Keynote Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
          <motion.div {...fadeInUp} className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
              onClick={() => window.open('https://www.youtube.com/playlist?list=PL1uIG3i2RBhEC7ZrhpvuGzvbc3W6JgopX', '_blank')}
            >
              <Youtube className="mr-3 h-6 w-6" />
              View All Keynote Videos
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Chris Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Chris Dessi</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Chris Dessi</span> is an author, 
                  television commentator, and growth leader who has built and led high-performing sales teams.
                </p>
                <p>
                  Over two years, Chris personally closed <span className="font-semibold text-foreground">over $100million</span> in 
                  enterprise deals. He's been in the trenches—navigating complex sales cycles, building teams from scratch, 
                  and scaling revenue in competitive markets.
                </p>
                <p>
                  Chris doesn't teach theory. He brings battle-tested frameworks, hard-won lessons, and direct feedback 
                  that cuts through the noise. If you're ready to move faster and win bigger, this is your coach.
                </p>
              </div>
            </div>
            <Card className="p-6 bg-gradient-to-br from-purple-900 to-pink-800 text-white border-0">
              <p className="text-sm italic">
                "Most leaders know what to do. They just don't know what to do first. That's what I solve."
              </p>
              <p className="mt-4 font-semibold">— Chris Dessi</p>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-muted/30 py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results. Real strategy. Real clarity.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "60-Minute Deep Dive",
                description: "Get clarity on your biggest challenge and a roadmap to solve it"
              },
              {
                icon: BookOpen,
                title: "Battle-Tested Frameworks",
                description: "Proven strategies from closing $32M in enterprise deals"
              },
              {
                icon: Calendar,
                title: "30-Day Action Plan",
                description: "Walk away with specific steps to implement immediately"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-card border-2 border-border rounded-2xl p-10 hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to move faster?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your first Quantum Coach session with Chris Dessi. 
            Walk away with a clear roadmap and the confidence to execute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" 
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waiting List
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open('https://forms.gle/AxBiRBtCXsAgRfKN7', '_blank')}>
              Contact Us
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{slotsRemaining} spots</span> remain this month · 
            First session is 60 minutes · Recorded for your reference
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions? Let's talk about how Quantum Coach can help you
            </p>
          </div>
          <ZohoQuantumCoachForm />
        </div>
      </section>

      {/* Newsletter and Pricing Side by Side */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Join Torque AI's Newsletter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get exclusive AI insights, strategies, and innovation updates delivered directly to your inbox
              </p>
              <div className="w-full mx-auto">
                <iframe 
                  src="https://embeds.beehiiv.com/0c0565a9-66ec-4225-a021-87a3562337b7" 
                  data-test-id="beehiiv-embed" 
                  width="100%" 
                  height="320" 
                  frameBorder="0" 
                  scrolling="no"
                  style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: 0, backgroundColor: 'transparent' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default QuantumShift;
