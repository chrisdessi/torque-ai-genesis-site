import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mic, Youtube, BookOpen, Compass, Radio, Music, Apple, Video } from "lucide-react";
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
      description: "Conversations with leaders navigating the intersection of AI, transparency, and human potential.",
      href: "https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_"
    },
    {
      icon: Compass,
      title: "The Philosophy",
      description: "People first. Truth second. Tools third. A framework for leading in an algorithmic world.",
      href: "/about"
    },
    {
      icon: BookOpen,
      title: "The TM System",
      description: "Trademarked methodologies including the Quantum Shift Confidentiality Code™ and Shift Breath protocol.",
      href: "/momento-council"
    },
    {
      icon: Youtube,
      title: "Events Module",
      description: "Workshops, dinners, and immersive experiences designed to shift how leaders think and operate.",
      href: "/events"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <script>
          {`
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
      
      {/* Hero Section with brand color */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 text-white min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 gradient-animate"></div>
        </div>
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">The Quantum Shift</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              The Ethos.<br />The Podcast.<br />The Movement.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed">
              A philosophy and content platform exploring how leaders can thrive in an AI-driven world 
              while staying grounded in human truth and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-purple-900 font-semibold px-10 py-7 text-lg"
                onClick={() => window.open('https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_', '_blank')}
              >
                Watch the Podcast
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border-white/30 font-semibold px-10 py-7 text-lg"
                onClick={() => window.location.href = '/events'}
              >
                Explore Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
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
                onClick={() => {
                  if (pillar.href.startsWith('http')) {
                    window.open(pillar.href, '_blank');
                  } else {
                    window.location.href = pillar.href;
                  }
                }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Listen on Your Favorite Platform */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              onClick={() => window.open('https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_', '_blank')}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-red-500 transition-all duration-300 cursor-pointer group text-center"
            >
              <Youtube className="w-16 h-16 mx-auto mb-4 text-red-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-black mb-2">YouTube</h3>
              <p className="text-gray-600 text-sm">Watch full episodes</p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              onClick={() => window.open('https://www.iheart.com/podcast/269-the-quantum-shift-with-chr-300437455/', '_blank')}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-red-500 transition-all duration-300 cursor-pointer group text-center"
            >
              <Radio className="w-16 h-16 mx-auto mb-4 text-red-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-black mb-2">iHeartRadio</h3>
              <p className="text-gray-600 text-sm">Stream on iHeart</p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              onClick={() => window.open('https://open.spotify.com/show/526A1oDnq14xmg21e8lN14', '_blank')}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-green-500 transition-all duration-300 cursor-pointer group text-center"
            >
              <Music className="w-16 h-16 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-black mb-2">Spotify</h3>
              <p className="text-gray-600 text-sm">Listen on Spotify</p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              onClick={() => window.open('https://podcasts.apple.com/us/podcast/the-quantum-shift-with-chris-dessi/id1843712353', '_blank')}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-purple-500 transition-all duration-300 cursor-pointer group text-center"
            >
              <Apple className="w-16 h-16 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-black mb-2">Apple Podcasts</h3>
              <p className="text-gray-600 text-sm">Listen on Apple</p>
            </motion.div>
          </div>

          {/* Chris Dessi Media Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              onClick={() => window.open('https://www.youtube.com/watch?v=9J1Kauiq42g&list=PL1uIG3i2RBhFgAUMHKj-kGuPZgM45u8PZ', '_blank')}
              className="bg-gradient-to-br from-purple-900 to-pink-800 text-white rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <Video className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">TV Appearances & Highlights</h3>
              <p className="text-gray-200 mb-4">Watch Chris Dessi's featured TV appearances and highlight reel</p>
              <span className="inline-flex items-center text-white font-semibold group-hover:underline">
                Watch Now →
              </span>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              onClick={() => window.open('https://amzn.to/43fFIJ9', '_blank')}
              className="bg-gradient-to-br from-blue-900 to-cyan-800 text-white rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <BookOpen className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Chris Dessi's Books</h3>
              <p className="text-gray-200 mb-4">Explore Chris Dessi's published works on leadership and AI</p>
              <span className="inline-flex items-center text-white font-semibold group-hover:underline">
                Shop Books →
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-black text-white py-32">
        <div className="section-padding max-w-5xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              People first. Truth second. Tools third.
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              This isn't just a tagline—it's our operating philosophy. In a world obsessed with AI tools and automation, 
              we believe the real breakthrough happens when leaders prioritize human connection, speak uncomfortable truths, 
              and only then deploy technology with intention.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-12 py-8 text-xl border-0"
              onClick={() => window.location.href = '/about'}
            >
              Learn More About Our Philosophy
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quantum Coach Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">Quantum Coach</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Work 1-on-1 with Chris Dessi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop wondering what to do next. Start executing with clarity and confidence.
            </p>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-12 max-w-4xl mx-auto shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-black mb-4">
                  Executive Coaching Sessions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Work directly with Chris Dessi—author, TV commentator, and the leader who personally closed 
                  <span className="font-semibold text-black"> $32 million in enterprise deals</span> in two years.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">60-minute strategic deep dive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Clear 30-day action plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Battle-tested frameworks from real deals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">No fluff, just actionable insights</span>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">First Session</p>
                  <p className="text-5xl font-bold text-black mb-1">$199</p>
                  <p className="text-gray-600">60 minutes · Recorded for reference</p>
                </div>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-7 text-lg w-full md:w-auto"
                  onClick={() => window.open('https://buy.stripe.com/5kQdR983q9n90gd1w78g000', '_blank')}
                >
                  Book Your Session
                </Button>
                <p className="text-sm text-gray-500 mt-4">Limited spots available this month</p>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-gray-200">
              <blockquote className="text-center">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Most leaders know what to do. They just don't know what to do first. That's what I solve."
                </p>
                <footer className="text-sm font-semibold text-black">— Chris Dessi</footer>
              </blockquote>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-purple-600 text-black hover:text-purple-600 font-semibold px-8 py-6"
              onClick={() => window.location.href = '/executive-coaching'}
            >
              Learn More About Quantum Coach
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumShift;
