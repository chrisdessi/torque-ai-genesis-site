import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

// Blog post data - matches Blog.tsx
const blogPosts = [
  {
    id: 1,
    title: "Why 31% of CEOs Lose Their Jobs Over Failed AI Transformation",
    excerpt: "The board isn't asking if you're implementing AI anymore—they're asking why your competitors are seeing results and you're not. Learn the critical alignment strategies that separate successful AI leaders from those who lose their positions.",
    author: "Chris Dessi",
    date: "January 15, 2025",
    category: "AI Strategy",
    slug: "ceo-failures-ai-transformation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    content: `<p>The boardroom pressure is real. According to recent studies, 31% of CEOs face termination when their AI transformation initiatives fail to deliver measurable results. This isn't just about technology—it's about leadership, vision, and execution.</p>

<h2>The High Stakes of AI Leadership</h2>
<p>In today's rapidly evolving business landscape, AI transformation isn't optional—it's existential. Boards are watching competitors gain market share through intelligent automation, predictive analytics, and AI-driven customer experiences. When a CEO can't articulate a clear AI strategy or show tangible progress, their position becomes vulnerable.</p>

<h2>Common Pitfalls That Sink AI Initiatives</h2>
<ul>
<li><strong>Lack of Executive Alignment:</strong> When the C-suite isn't unified on AI priorities, initiatives fragment and fail.</li>
<li><strong>No Clear ROI Framework:</strong> Without measurable outcomes, AI projects become endless science experiments.</li>
<li><strong>Underestimating Change Management:</strong> Technology is easy; transforming culture and processes is hard.</li>
<li><strong>Insufficient Data Readiness:</strong> AI built on poor data delivers poor results.</li>
</ul>

<h2>The Path to AI Leadership Success</h2>
<p>Successful AI leaders share common traits:</p>
<ol>
<li><strong>They lead with vision:</strong> Clear articulation of how AI transforms the business model</li>
<li><strong>They demand accountability:</strong> Every AI initiative has defined metrics and owners</li>
<li><strong>They invest in people:</strong> Training and upskilling programs run parallel to technology deployment</li>
<li><strong>They iterate rapidly:</strong> Fast failure and continuous improvement over perfect planning</li>
</ol>

<h2>Your 90-Day Action Plan</h2>
<p>Don't wait for the board to lose patience. Start with these steps:</p>
<ul>
<li>Conduct an AI readiness assessment across all business functions</li>
<li>Identify 3-5 high-impact AI use cases with clear ROI potential</li>
<li>Build cross-functional teams with executive sponsors</li>
<li>Establish governance frameworks and success metrics</li>
<li>Launch pilot programs with defined timelines and milestones</li>
</ul>

<p>The AI revolution isn't coming—it's here. The question is whether you'll lead it or be replaced by someone who will.</p>`
  },
  {
    id: 2,
    title: "The $4.4B Risk: Why Responsible AI Governance Isn't Optional",
    excerpt: "EY's latest research reveals firms without AI governance frameworks are hemorrhaging billions. Discover the three-pillar approach to brand-safe AI adoption that protects your enterprise while accelerating innovation.",
    author: "Chris Dessi",
    date: "January 12, 2025",
    category: "AI Governance",
    slug: "responsible-ai-governance-framework",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop",
    content: `<p>Recent EY research paints a stark picture: organizations without proper AI governance frameworks are losing $4.4 billion annually through reputational damage, regulatory fines, and operational failures. The era of "move fast and break things" is over when it comes to AI.</p>

<h2>The Real Cost of AI Governance Failures</h2>
<p>When AI systems fail publicly, the damage extends far beyond immediate financial losses:</p>
<ul>
<li>Brand reputation takes years to rebuild</li>
<li>Regulatory scrutiny intensifies across all operations</li>
<li>Customer trust erodes, impacting lifetime value</li>
<li>Top talent refuses to work with irresponsible AI deployments</li>
</ul>

<h2>The Three-Pillar Framework</h2>
<p>Effective AI governance rests on three foundational pillars:</p>

<h3>1. Ethical AI Design</h3>
<ul>
<li>Bias detection and mitigation protocols</li>
<li>Fairness metrics embedded in model development</li>
<li>Human-in-the-loop review for high-stakes decisions</li>
<li>Clear accountability for AI outcomes</li>
</ul>

<h3>2. Risk Management</h3>
<ul>
<li>Comprehensive AI risk assessments</li>
<li>Data privacy and security protocols</li>
<li>Model monitoring and drift detection</li>
<li>Incident response playbooks</li>
</ul>

<h3>3. Regulatory Compliance</h3>
<ul>
<li>GDPR, CCPA, and emerging AI regulations</li>
<li>Industry-specific compliance requirements</li>
<li>Documentation and auditability</li>
<li>Proactive engagement with regulators</li>
</ul>

<h2>Building Your Governance Framework</h2>
<p>Start with these essential components:</p>
<ol>
<li><strong>AI Ethics Board:</strong> Cross-functional team reviewing all AI deployments</li>
<li><strong>Model Cards:</strong> Documentation of purpose, data, limitations, and testing</li>
<li><strong>Risk Tiering:</strong> Different governance levels based on impact and risk</li>
<li><strong>Continuous Monitoring:</strong> Automated alerts for performance degradation or bias</li>
<li><strong>Training Programs:</strong> Ensuring all stakeholders understand responsible AI</li>
</ol>

<p>The choice is clear: invest in governance now, or pay far more later. The $4.4 billion question is which path your organization will choose.</p>`
  },
  // ... rest of posts with similar structure
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent text-white py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button 
              asChild
              variant="ghost"
              className="mb-6 text-white hover:bg-white/10"
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-padding max-w-5xl mx-auto -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="section-padding max-w-3xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-strong:text-gray-900 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Newsletter Signup */}
          <motion.div
            {...fadeInUp}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Stay Updated with AI Insights
            </h3>
            <iframe 
              src="https://embeds.beehiiv.com/ed4d369b-b9a6-4dfc-9698-32ed638ae5f9" 
              data-test-id="beehiiv-embed" 
              width="100%" 
              height="320" 
              frameBorder="0" 
              scrolling="no" 
              style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: 0, backgroundColor: 'transparent' }}
            />
          </motion.div>

          {/* Share & CTA */}
          <motion.div
            {...fadeInUp}
            className="mt-16 pt-12 border-t border-gray-200 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with Chris Dessi and the Torque AI team
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 px-10 py-7 text-lg"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Book a Meeting
            </Button>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
