import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mic, Youtube, BookOpen, Calendar, Star, Play } from "lucide-react";
import { Helmet } from "react-helmet";
import quantumCoachLogo from "@/assets/quantum-coach-logo.png";
import chrisFire from "@/assets/chris-fire.jpg";

const QuantumShift = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
              <span className="text-sm font-bold uppercase tracking-wider">Executive Coaching</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Transform Your<br />Leadership Today
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-3xl leading-relaxed font-light">
              Work directly with Chris Dessi
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-8 text-xl"
                onClick={() => window.open('https://calendar.app.google/1GCqw7DmuSSQmLZBA', '_blank')}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Complimentary Session
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-bold px-12 py-8 text-xl"
                onClick={() => window.open('https://buy.stripe.com/5kQdR983q9n90gd1w78g000', '_blank')}
              >
                First Session - $199
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
                  className="w-24 h-24 rounded-full object-cover shadow-xl"
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
              onClick={() => window.open('https://calendar.app.google/1GCqw7DmuSSQmLZBA', '_blank')}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book Your Complimentary Session
            </Button>
          </motion.div>
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

      {/* What You Get Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-10 hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 text-white py-32">
        <div className="section-padding max-w-5xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to Make<br />Your Quantum Shift?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the leaders who have transformed their business with Chris Dessi's proven frameworks
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-purple-900 font-bold px-12 py-8 text-xl"
                onClick={() => window.open('https://calendar.app.google/1GCqw7DmuSSQmLZBA', '_blank')}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Complimentary Session
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border-white/50 backdrop-blur-sm font-bold px-12 py-8 text-xl"
                onClick={() => window.open('https://buy.stripe.com/5kQdR983q9n90gd1w78g000', '_blank')}
              >
                First Session - $199
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-32">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Chris's Newsletter
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get exclusive insights, strategies, and stories delivered directly to your inbox
            </p>
            <div className="w-full max-w-2xl mx-auto">
              <iframe 
                src="https://embeds.beehiiv.com/ed4d369b-b9a6-4dfc-9698-32ed638ae5f9" 
                data-test-id="beehiiv-embed" 
                width="100%" 
                height="320" 
                frameBorder="0" 
                scrolling="no"
                style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: 0, backgroundColor: 'transparent' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumShift;
