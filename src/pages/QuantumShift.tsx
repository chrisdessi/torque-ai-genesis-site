import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { motion } from "framer-motion";
import { Play, BookOpen, Video, Music, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const QuantumShift = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const platforms = [
    {
      name: "YouTube",
      description: "Watch full episodes",
      icon: Video,
      url: "https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_",
      iconColor: "#FF0000"
    },
    {
      name: "iHeartRadio",
      description: "Stream on iHeart",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      url: "https://www.iheart.com/podcast/quantum-shift",
      iconColor: "#C6002B"
    },
    {
      name: "Spotify",
      description: "Listen on Spotify",
      icon: Music,
      url: "https://open.spotify.com/show/quantum-shift",
      iconColor: "#1DB954"
    },
    {
      name: "Apple Podcasts",
      description: "Listen on Apple",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
      url: "https://podcasts.apple.com/quantum-shift",
      iconColor: "#A855F7"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>The Quantum Shift | Philosophy, Podcast & Movement by Chris Dessi</title>
        <meta name="description" content="A philosophy and content platform exploring how leaders can thrive in an AI-driven world while staying grounded in human truth and transparency. Featuring the Quantum Coach executive coaching program." />
        <meta name="keywords" content="Quantum Shift, leadership podcast, AI leadership, executive coaching, Chris Dessi podcast, business philosophy, AI-driven leadership, human-centered AI, leadership transformation, executive development, business podcast, entrepreneurship, leadership principles, AI ethics, authentic leadership, business strategy podcast" />
        <link rel="canonical" href="https://torqueapp.ai/quantum-shift" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 text-white min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
              <span className="text-sm font-semibold">The Quantum Shift</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              The Ethos.<br />
              The Podcast.<br />
              The Movement.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
              A philosophy and content platform exploring how leaders can thrive in an AI-driven world while staying grounded in human truth and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-purple-900 font-bold px-10 py-6 text-lg"
                onClick={() => window.open('https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_', '_blank')}
              >
                Watch the Podcast
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border-white/50 font-bold px-10 py-6 text-lg"
                asChild
              >
                <Link to="/events">
                  Explore Events
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Coach Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 py-32">
        <div className="section-padding max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold text-white">Quantum Coach</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Work 1-on-1 with Chris Dessi
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Stop wondering what to do next. Start executing with clarity and confidence.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white rounded-3xl shadow-xl p-12 md:p-16">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-black mb-6">Executive Coaching Sessions</h3>
                <p className="text-lg text-gray-700 mb-8">
                  Work directly with Chris Dessi—author, TV commentator, and the leader who personally closed <span className="font-bold text-black">over $100million in enterprise deals</span> in two years.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "60-minute strategic deep dive",
                    "Clear 30-day action plan",
                    "Battle-tested frameworks from real deals",
                    "No fluff, just actionable insights"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-auto md:min-w-[280px]">
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 text-center">
                  <p className="text-sm text-gray-600 mb-2">First Session</p>
                  <p className="text-6xl font-bold text-black mb-2">$199</p>
                  <p className="text-gray-600 mb-6">15 minute exploratory call</p>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg w-full"
                    asChild
                  >
                    <Link to="/quantum-shift/coach">
                      Book Your Session
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">Limited spots available this month</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <blockquote className="text-center italic text-xl md:text-2xl text-gray-800 mb-4">
                "Most leaders know what to do. They just don't know what to do first. That's what I solve."
              </blockquote>
              <p className="text-center text-gray-600 font-semibold">— Chris Dessi</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center mt-8">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-purple-600 text-black hover:text-purple-600 font-bold px-10 py-6 text-lg bg-white"
              asChild
            >
              <Link to="/quantum-shift/coach">
                Learn More About Quantum Coach
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-32">
        <div className="section-padding max-w-5xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              People first.<br />Truth second.<br />Tools third.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              This isn't just a tagline—it's our operating philosophy. In a world obsessed with AI tools and automation, we believe the real breakthrough happens when leaders prioritize human connection, speak uncomfortable truths, and only then deploy technology with intention.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-6 text-lg"
              asChild
            >
              <Link to="/about">
                Learn More About Our Philosophy
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Listen & Watch Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Listen & Watch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Catch The Quantum Shift Podcast on your favorite platform
            </p>
          </motion.div>

          {/* Platform Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <motion.a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center group"
                >
                  <div style={{ color: platform.iconColor }} className="mb-4">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </motion.a>
              );
            })}
          </div>

          {/* Large Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="https://www.youtube.com/watch?v=9J1Kauiq42g"
              target="_blank"
              rel="noopener noreferrer"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 rounded-3xl p-12 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between min-h-[280px]">
                <div>
                  <Video className="w-12 h-12 text-white mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">TV Appearances & Highlights</h3>
                  <p className="text-white/90 text-lg mb-6">
                    Watch Chris Dessi's featured TV appearances and highlight reel
                  </p>
                </div>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  Watch Now <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.amazon.com/Chris-Dessi/e/B00J7N6B5M"
              target="_blank"
              rel="noopener noreferrer"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 rounded-3xl p-12 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between min-h-[280px]">
                <div>
                  <BookOpen className="w-12 h-12 text-white mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">Chris Dessi's Books</h3>
                  <p className="text-white/90 text-lg mb-6">
                    Explore Chris Dessi's published works on leadership and AI
                  </p>
                </div>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  Shop Books <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Calendly Booking */}
      <CalendlyEmbed />

      {/* Newsletter and Pricing Side by Side */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Join Chris's Newsletter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get exclusive insights, strategies, and stories delivered directly to your inbox
              </p>
              <div className="w-full mx-auto">
                <iframe 
                  src="https://embeds.beehiiv.com/ed4d369b-b9a6-4dfc-9698-32ed638ae5f9?slim=true" 
                  data-test-id="beehiiv-embed" 
                  height="52" 
                  frameBorder="0" 
                  scrolling="no"
                  style={{ margin: 0, borderRadius: '0px', backgroundColor: 'transparent' }}
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
