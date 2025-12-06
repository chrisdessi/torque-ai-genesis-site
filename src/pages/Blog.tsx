import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ZohoContactForm from "@/components/ZohoContactForm";
import ZohoLetsTalkButton from "@/components/ZohoLetsTalkButton";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchBlogFeed, BlogPost as BlogPostType } from "@/utils/rssFeed";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      setIsLoading(true);
      const posts = await fetchBlogFeed();
      setBlogPosts(posts);
      setIsLoading(false);
    };
    
    loadBlogPosts();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Insights & Strategy Blog"
        description="Expert insights on AI transformation, ChatGPT strategies, enterprise AI implementation, and business innovation from Christopher Dessi. Stay ahead with the latest AI trends and practical advice for leaders."
        keywords="AI blog, AI insights, ChatGPT strategies, AI transformation, enterprise AI, AI business strategies, AI trends, AI thought leadership, Christopher Dessi blog, generative AI, AI automation, machine learning, AI adoption, responsible AI, AI productivity, AI marketing strategies, AI sales optimization, digital transformation blog, business AI applications"
        url="/blog"
      />
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
          {isLoading ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">Loading latest insights...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No posts available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
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
          )}
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
              Get in touch with Chris Dessi and the Torque AI team
            </p>
            <ZohoLetsTalkButton size="large" />
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <ZohoContactForm 
            title="Get In Touch"
            description="Fill out the form below and our team will respond within 24 hours"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;