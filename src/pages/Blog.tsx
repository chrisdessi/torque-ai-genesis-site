import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Blog posts - to be populated with actual content
  const blogPosts = [
    {
      id: 1,
      title: "Use AI To Re-Engage Lapsed Customers",
      excerpt: "Want to bring back customers who haven't bought from you in a while? Discover a simple way to use AI to get them interested again with effective marketing messages.",
      author: "Chris Dessi",
      date: "August 13, 2025",
      category: "AI Strategy",
      slug: "ai-re-engage-lapsed-customers",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "ChatGPT to Product: AI's Impact on Your Career",
      excerpt: "The way we work is changing fast. Tools like ChatGPT, Canva, and Zapier are becoming common. Learn how AI is transforming careers and what you can do to stay ahead.",
      author: "Chris Dessi",
      date: "August 12, 2025",
      category: "Career Development",
      slug: "chatgpt-impact-on-career",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "AI Isn't Just Taking Jobs—It's Creating Them",
      excerpt: "Explore how artificial intelligence is not only automating tasks but also creating new opportunities and job categories across industries.",
      author: "Chris Dessi",
      date: "August 10, 2025",
      category: "AI Industry",
      slug: "ai-creating-jobs",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent text-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI Insights & Strategy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Expert perspectives on AI transformation, leadership, and business growth by Chris Dessi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-32 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="w-full mt-6 group/btn bg-primary hover:bg-primary/90"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule a consultation with Chris Dessi and the Torque AI team
            </p>
            <Button 
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-10 py-7 text-lg"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Book a Meeting
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
