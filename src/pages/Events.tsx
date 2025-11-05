import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PricingTable from "@/components/PricingTable";

const Events = () => {
  const events = [
    {
      title: "AI Summit NYC 2025",
      tagline: "Where Executive Alignment Meets Innovation",
      date: "2025",
      location: "New York City",
      description: "Explore AI across Sales, Marketing, Leadership & Startups. Learn practical AI applications, connect with AI Founders, VCs & Executives, and compete in the AI Startup Contest.",
      highlights: [
        "Learn practical AI applications for Sales, Marketing & Communications",
        "Connect with AI Founders, VCs & Executives",
        "Compete in the AI Startup Contest",
        "Be part of the conversation shaping AI's business impact",
        "Exclusive sponsor branding opportunities"
      ],
      tracks: [
        {
          name: "AI for Sales",
          description: "Discover how AI accelerates pipelines and personalizes outreach"
        },
        {
          name: "AI for Marketing",
          description: "Transform campaigns with intelligent automation and insights"
        },
        {
          name: "AI for Content & Communications",
          description: "Create compelling content at scale with AI-powered tools"
        },
        {
          name: "AI Startup Contest",
          description: "Pitch your innovation to top investors and decision-makers"
        }
      ],
      url: "https://aisummit.nyc",
      ctaText: "Learn More & Register"
    },
    {
      title: "The Quantum Shift Summit",
      tagline: "Evolve Your Life From Ambition to Meaning",
      date: "Tuesday, May 12, 2026 · 9am - 6pm EDT",
      location: "Edith Macy Conference Center, 550 Chappaqua Road, Briarcliff Manor, NY 10510",
      description: "A gathering in Westchester for anyone seeking alignment, healing, and spiritual growth. Transform your life from ambition to meaning with insightful workshops, engaging speakers, and opportunities for personal growth.",
      highlights: [
        "9 hours of transformative content",
        "In-person workshops and speakers",
        "Discover how to align your goals with your true purpose",
        "Create a life filled with fulfillment and joy",
        "Network with like-minded individuals"
      ],
      details: [
        "Duration: 9 hours",
        "Format: In person",
        "Early bird pricing available",
        "Refunds up to 7 days before event"
      ],
      url: "https://www.eventbrite.com/e/the-quantum-shift-summit-registration-1612316675579?aff=oddtdtcreator",
      ctaText: "Reserve Your Spot"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Events by Chris Dessi
          </h1>
          <p className="text-xl text-muted-foreground">
            Join us at transformative summits designed to elevate your business and personal growth
          </p>
        </motion.div>
      </section>

      {/* Events Grid */}
      <section className="section-padding pb-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8 md:p-12">
                {/* Event Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                    {event.title}
                  </h2>
                  <p className="text-xl text-muted-foreground italic mb-6">
                    {event.tagline}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Event Description */}
                <p className="text-lg text-muted-foreground mb-8">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Event Highlights
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tracks or Details */}
                {event.tracks && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Session Tracks</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {event.tracks.map((track, i) => (
                        <div key={i} className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">{track.name}</h4>
                          <p className="text-sm text-muted-foreground">{track.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {event.details && (
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-4">
                      {event.details.map((detail, i) => (
                        <span key={i} className="px-4 py-2 bg-muted rounded-full text-sm">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="flex gap-4">
                  <Button 
                    asChild 
                    size="lg"
                    className="group"
                  >
                    <a href={event.url} target="_blank" rel="noopener noreferrer">
                      {event.ctaText}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding pb-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-primary/20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Stay Updated?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get notified about upcoming events, early bird tickets, and exclusive opportunities.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Contact Us for Event Info
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Newsletter />
      <PricingTable />
      <Footer />
    </div>
  );
};

export default Events;
