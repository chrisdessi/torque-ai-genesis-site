import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { motion } from "framer-motion";
import { Play, BookOpen, Calendar, Mic, Video, Music, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const QuantumShift = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const pillars = [
    {
      icon: Mic,
      title: "The Quantum Shift Podcast",
      description: "Conversations with leaders navigating the intersection of AI, transparency, and human potential."
    },
    {
      icon: BookOpen,
      title: "The Philosophy",
      description: "People first. Truth second. Tools third. A framework for leading in an algorithmic world."
    },
    {
      icon: Video,
      title: "The TM System",
      description: "Trademarked methodologies including the Quantum Shift Confidentiality Code™ and Shift Breath protocol."
    },
    {
      icon: Calendar,
      title: "Events Module",
      description: "Workshops, dinners, and immersive experiences designed to shift how leaders think and operate."
    }
  ];

  const platforms = [
    {
      name: "YouTube",
      description: "Watch full episodes",
      icon: Video,
      url: "https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_",
      color: "from-red-600 to-red-700"
    },
    {
      name: "iHeartRadio",
      description: "Stream on iHeart",
      icon: Radio,
      url: "https://www.iheart.com/podcast/quantum-shift",
      color: "from-pink-600 to-red-600"
    },
    {
      name: "Spotify",
      description: "Listen on Spotify",
      icon: Music,
      url: "https://open.spotify.com/show/quantum-shift",
      color: "from-green-600 to-green-700"
    },
    {
      name: "Apple Podcasts",
      description: "Listen on Apple",
      icon: Mic,
      url: "https://podcasts.apple.com/quantum-shift",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>The Quantum Shift | Philosophy, Podcast & Movement</title>
        <meta name="description" content="A philosophy and content platform exploring how leaders can thrive in an AI-driven world while staying grounded in human truth and transparency." />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 text-white min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              The Quantum Shift
            </h1>
            <div className="space-y-4 mb-12">
              <p className="text-2xl md:text-4xl font-light">The Ethos.</p>
              <p className="text-2xl md:text-4xl font-light">The Podcast.</p>
              <p className="text-2xl md:text-4xl font-light">The Movement.</p>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              A philosophy and content platform exploring how leaders can thrive in an AI-driven world while staying grounded in human truth and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-purple-900 font-bold px-12 py-8 text-xl"
                onClick={() => window.open('https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_', '_blank')}
              >
                <Play className="mr-3 h-6 w-6" />
                Watch the Podcast
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-bold px-12 py-8 text-xl"
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

      {/* The Four Pillars */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              The Four Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Content, philosophy, systems, and experiences
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-10 hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Listen & Watch */}
      <section className="bg-black py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Listen & Watch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Catch The Quantum Shift Podcast on your favorite platform
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${platform.color} rounded-2xl p-8 hover:scale-105 transition-transform duration-300 h-full flex flex-col items-center justify-center text-center`}>
                  <platform.icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-white/80">{platform.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* TV Appearances & Highlights */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              TV Appearances & Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch Chris Dessi's featured TV appearances and highlight reel
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
              onClick={() => window.open('https://www.youtube.com/watch?v=9J1Kauiq42g', '_blank')}
            >
              <Video className="mr-3 h-6 w-6" />
              Watch Now →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Chris Dessi's Books */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Chris Dessi's Books
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Chris Dessi's published works on leadership and AI
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
              onClick={() => window.open('https://www.amazon.com/Chris-Dessi/e/B00J7N6B5M', '_blank')}
            >
              <BookOpen className="mr-3 h-6 w-6" />
              Shop Books →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gary Vee Testimonial */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-12 md:p-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <a 
                  href="https://www.instagram.com/stories/highlights/17984836850668488/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/src/assets/gary-vee-headshot.jpg" 
                    alt="Gary Vaynerchuk" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-600"
                  />
                </a>
              </div>
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                  "Chris made me millions."
                </blockquote>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                  <p className="text-xl text-gray-700 font-semibold">— Gary Vaynerchuk</p>
                  <a 
                    href="https://www.instagram.com/stories/highlights/17984836850668488/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Watch Gary's Story
                  </a>
                </div>
              </div>
            </div>
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
              className="bg-white hover:bg-gray-100 text-black font-bold px-12 py-8 text-xl"
              asChild
            >
              <Link to="/about">
                Learn More About Our Philosophy
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quantum Coach CTA */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 text-white py-32">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Quantum Coach
            </h2>
            <p className="text-2xl md:text-3xl text-gray-200 mb-4">
              Work 1-on-1 with Chris Dessi
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stop wondering what to do next. Start executing with clarity and confidence.
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white rounded-3xl p-12 text-black mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Executive Coaching Sessions</h3>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Work directly with Chris Dessi—author, TV commentator, and the leader who personally closed $32 million in enterprise deals in two years.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
              {[
                "60-minute strategic deep dive",
                "Clear 30-day action plan",
                "Battle-tested frameworks from real deals",
                "No fluff, just actionable insights"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">First Session</p>
                <p className="text-5xl font-bold text-purple-900 mb-2">$199</p>
                <p className="text-gray-600 mb-6">60 minutes · Recorded for reference</p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg w-full"
                  asChild
                >
                  <Link to="/quantum-shift/coach">
                    Book Your Session
                  </Link>
                </Button>
                <p className="text-sm text-gray-600 mt-4">Limited spots available this month</p>
              </div>
            </div>

            <blockquote className="text-center italic text-xl text-gray-700 mb-4">
              "Most leaders know what to do. They just don't know what to do first. That's what I solve."
            </blockquote>
            <p className="text-center text-gray-600 font-semibold">— Chris Dessi</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-bold px-12 py-8 text-xl"
              asChild
            >
              <Link to="/quantum-shift/coach">
                Learn More About Quantum Coach
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default QuantumShift;
