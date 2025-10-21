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

  const blogPosts = [
    {
      id: 1,
      title: "Democratized Generative AI: Revolutionizing Content Creation for Everyone in 2025",
      excerpt: "Discover how democratized generative AI is transforming content creation, making professional-quality outputs accessible to everyone. Learn about the top tools, implementation strategies, and real-world impact of this revolutionary technology.",
      author: "Chris Dessi",
      date: "October 21, 2025",
      category: "AI Innovation",
      slug: "democratized-generative-ai-2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Why 31% of CEOs Lose Their Jobs Over Failed AI Transformation",
      excerpt: "The board isn't asking if you're implementing AI anymore—they're asking why your competitors are seeing results and you're not. Learn the critical alignment strategies that separate successful AI leaders from those who lose their positions.",
      author: "Chris Dessi",
      date: "January 15, 2025",
      category: "AI Strategy",
      slug: "ceo-failures-ai-transformation",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "The $4.4B Risk: Why Responsible AI Governance Isn't Optional",
      excerpt: "EY's latest research reveals firms without AI governance frameworks are hemorrhaging billions. Discover the three-pillar approach to brand-safe AI adoption that protects your enterprise while accelerating innovation.",
      author: "Chris Dessi",
      date: "January 12, 2025",
      category: "AI Governance",
      slug: "responsible-ai-governance-framework",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Executive Alignment: The Missing Link in AI Success",
      excerpt: "93% of CMOs report positive ROI from GenAI—but only when leadership is aligned. Here's how to eliminate the execution drift that's costing you 5-10% of annual revenue.",
      author: "Chris Dessi",
      date: "January 10, 2025",
      category: "Leadership",
      slug: "executive-alignment-ai-success",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "From Automation to Intelligence: The AI Maturity Model",
      excerpt: "Most companies are stuck at Level 1 automation. Learn the five-stage progression that takes organizations from basic AI tools to strategic intelligence systems generating measurable revenue lift.",
      author: "Chris Dessi",
      date: "January 8, 2025",
      category: "Digital Transformation",
      slug: "ai-maturity-model-framework",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "The 90-Day AI Accelerator: A Blueprint for Measurable ROI",
      excerpt: "Stop treating AI as a science project. This proven framework helps enterprise leaders implement AI-driven systems that deliver quantifiable results in 90 days—from GTM strategy to marketing automation.",
      author: "Chris Dessi",
      date: "January 5, 2025",
      category: "Implementation",
      slug: "90-day-ai-accelerator-blueprint",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Context Switching Is Killing Your Productivity: The AI Solution",
      excerpt: "40% of productive time lost to context switching each week. Discover how AI agents and intelligent workflow systems can reclaim that time while maintaining quality and reducing burnout.",
      author: "Chris Dessi",
      date: "January 3, 2025",
      category: "Productivity",
      slug: "context-switching-ai-solution",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Marketing Workflow Automation: Beyond the Basics",
      excerpt: "60% reduction in manual marketing workflows is just the beginning. Learn how leading CMOs are leveraging AI to transform content creation, campaign optimization, and customer engagement at scale.",
      author: "Chris Dessi",
      date: "December 30, 2024",
      category: "Marketing AI",
      slug: "marketing-workflow-automation",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop"
    },
    {
      id: 9,
      title: "The Leadership Gap: Why Technical AI Skills Aren't Enough",
      excerpt: "Your data scientists can build models, but can your executives lead transformation? Explore the critical soft skills and strategic frameworks that separate AI-ready leaders from the rest.",
      author: "Chris Dessi",
      date: "December 28, 2024",
      category: "Leadership Development",
      slug: "leadership-gap-ai-transformation",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop"
    },
    {
      id: 10,
      title: "AI Agents in Enterprise: Gartner's 2026 Prediction",
      excerpt: "40% of enterprise applications will embed AI agents by 2026. Is your organization prepared? Here's what you need to know about agentic AI, orchestration, and the coming shift in how work gets done.",
      author: "Chris Dessi",
      date: "December 26, 2024",
      category: "Future of Work",
      slug: "ai-agents-enterprise-2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
    },
    {
      id: 11,
      title: "Breaking Down Silos with AI: A Cross-Functional Strategy",
      excerpt: "Organizational silos are the silent killer of AI initiatives. Learn how to build cross-functional alignment that accelerates adoption, reduces duplication, and creates sustainable competitive advantage.",
      author: "Chris Dessi",
      date: "December 23, 2024",
      category: "Organizational Change",
      slug: "breaking-silos-ai-strategy",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
    },
    {
      id: 12,
      title: "Data Readiness: The Foundation of Successful AI",
      excerpt: "You can't build AI on bad data. This comprehensive guide walks through data qualification, preparation, and governance strategies that set the stage for transformative AI implementation.",
      author: "Chris Dessi",
      date: "December 20, 2024",
      category: "Data Strategy",
      slug: "data-readiness-ai-foundation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
    },
    {
      id: 13,
      title: "The Executive AI Briefing: What Every Board Member Needs to Know",
      excerpt: "Board members are asking harder questions about AI strategy, risk, and ROI. Equip yourself with the frameworks and talking points that demonstrate strategic AI leadership in 90 minutes.",
      author: "Chris Dessi",
      date: "December 18, 2024",
      category: "Executive Education",
      slug: "executive-ai-briefing-board",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop"
    },
    {
      id: 14,
      title: "From Pilot to Production: Scaling AI Initiatives",
      excerpt: "80% of AI pilots never make it to production. Learn the operational, technical, and organizational strategies that turn successful proofs-of-concept into enterprise-wide systems delivering continuous value.",
      author: "Chris Dessi",
      date: "December 15, 2024",
      category: "AI Operations",
      slug: "pilot-to-production-scaling-ai",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
    },
    {
      id: 15,
      title: "AI-Powered Customer Experience: The Competitive Differentiator",
      excerpt: "Customer expectations are evolving faster than most organizations can adapt. Discover how AI-driven personalization, predictive analytics, and intelligent automation create experiences that drive loyalty and revenue.",
      author: "Chris Dessi",
      date: "December 12, 2024",
      category: "Customer Experience",
      slug: "ai-powered-customer-experience",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&auto=format&fit=crop"
    },
    {
      id: 16,
      title: "The AI ROI Playbook: Measuring What Matters",
      excerpt: "Stop guessing whether your AI investments are working. This framework provides the metrics, benchmarks, and tracking systems that prove ROI to stakeholders and guide continuous improvement.",
      author: "Chris Dessi",
      date: "December 10, 2024",
      category: "ROI & Metrics",
      slug: "ai-roi-playbook-metrics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
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
