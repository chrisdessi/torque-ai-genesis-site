import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchBlogFeed, BlogPost as BlogPostType } from "@/utils/rssFeed";

// Blog post data - matches Blog.tsx
const blogPosts = [
  {
    id: 1,
    title: "Democratized Generative AI: Revolutionizing Content Creation for Everyone in 2025",
    excerpt: "Discover how democratized generative AI is transforming content creation, making professional-quality outputs accessible to everyone. Learn about the top tools, implementation strategies, and real-world impact of this revolutionary technology.",
    author: "Chris Dessi",
    date: "October 21, 2025",
    category: "AI Innovation",
    slug: "democratized-generative-ai-2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    content: `<h2>Introduction: The AI Revolution at Your Fingertips</h2>
<p>Imagine a world where creating professional-quality content, stunning visuals, and innovative solutions is as simple as typing a few words. Welcome to the era of <strong>Democratized Generative AI</strong> – the most transformative technology trend of 2025 that's putting the power of artificial intelligence directly into the hands of everyday users.</p>

<p>Generative AI has evolved from a complex, enterprise-only technology to an accessible, user-friendly tool that anyone can master. This revolutionary shift is reshaping industries, empowering creativity, and opening unprecedented opportunities for businesses and individuals alike.</p>

<h2>What is Democratized Generative AI?</h2>

<h3>Defining the Game-Changer</h3>
<p><strong>Democratized Generative AI</strong> refers to the widespread accessibility of AI-powered content generation tools that were once exclusive to tech giants and specialized developers. These platforms now offer intuitive interfaces, affordable pricing, and powerful capabilities that enable users without technical expertise to:</p>

<ul>
<li>Generate high-quality written content</li>
<li>Create stunning visual artwork and designs</li>
<li>Produce professional videos and animations</li>
<li>Develop code and applications</li>
<li>Compose music and audio content</li>
<li>Design marketing materials and presentations</li>
</ul>

<h3>The Technology Behind the Magic</h3>
<p>At its core, democratized generative AI leverages advanced machine learning models, including:</p>

<ul>
<li><strong>Large Language Models (LLMs)</strong> like GPT-4 and Claude</li>
<li><strong>Diffusion Models</strong> for image generation</li>
<li><strong>Transformer Architectures</strong> for various content types</li>
<li><strong>Neural Networks</strong> trained on massive datasets</li>
<li><strong>Cloud Computing Infrastructure</strong> for scalable access</li>
</ul>

<h2>Key Players and Platforms Leading the Revolution</h2>

<h3>Top Generative AI Tools in 2025</h3>

<h4>Content Creation Powerhouses</h4>
<ul>
<li><strong>ChatGPT Plus & GPT-4</strong>: Advanced conversational AI for writing, analysis, and problem-solving</li>
<li><strong>Claude 3</strong>: Anthropic's sophisticated AI assistant for complex tasks</li>
<li><strong>Jasper AI</strong>: Specialized marketing and business content generation</li>
<li><strong>Copy.ai</strong>: AI-powered copywriting for various industries</li>
</ul>

<h4>Visual Content Creators</h4>
<ul>
<li><strong>Midjourney</strong>: Artistic image generation with stunning quality</li>
<li><strong>DALL-E 3</strong>: OpenAI's advanced image creation platform</li>
<li><strong>Stable Diffusion</strong>: Open-source image generation with customization</li>
<li><strong>Canva AI</strong>: Integrated design tools with AI assistance</li>
</ul>

<h4>Video and Multimedia</h4>
<ul>
<li><strong>Synthesia</strong>: AI-powered video creation with virtual presenters</li>
<li><strong>Runway ML</strong>: Advanced video editing and generation tools</li>
<li><strong>Luma AI</strong>: 3D content creation and visualization</li>
<li><strong>ElevenLabs</strong>: Realistic voice synthesis and audio generation</li>
</ul>

<h4>Code and Development</h4>
<ul>
<li><strong>GitHub Copilot</strong>: AI pair programming assistant</li>
<li><strong>Cursor</strong>: AI-enhanced code editor</li>
<li><strong>Replit</strong>: Collaborative coding with AI assistance</li>
<li><strong>Tabnine</strong>: Intelligent code completion</li>
</ul>

<h2>Industry Impact: Transforming Business Landscapes</h2>

<h3>Marketing and Advertising Revolution</h3>
<p>The marketing industry has experienced the most dramatic transformation through democratized generative AI:</p>

<p><strong>Content Marketing Benefits:</strong></p>
<ul>
<li><strong>50% reduction</strong> in content creation time</li>
<li><strong>300% increase</strong> in content output capacity</li>
<li><strong>Personalized campaigns</strong> at scale</li>
<li><strong>Multi-language content</strong> generation</li>
<li><strong>A/B testing</strong> with AI-generated variations</li>
</ul>

<p><strong>Real-World Success Stories:</strong></p>
<ul>
<li>Small businesses creating professional ad campaigns without agencies</li>
<li>Startups producing high-quality marketing materials on limited budgets</li>
<li>Content creators scaling their output exponentially</li>
</ul>

<h3>Education and Training Transformation</h3>
<p><strong>Educational Applications:</strong></p>
<ul>
<li><strong>Personalized learning materials</strong> for individual students</li>
<li><strong>Interactive course content</strong> generation</li>
<li><strong>Language learning</strong> with AI tutors</li>
<li><strong>Research assistance</strong> for academic projects</li>
<li><strong>Accessibility tools</strong> for diverse learning needs</li>
</ul>

<h3>Healthcare and Medical Innovation</h3>
<p><strong>Medical Applications:</strong></p>
<ul>
<li><strong>Patient education materials</strong> in multiple languages</li>
<li><strong>Medical documentation</strong> assistance</li>
<li><strong>Research paper</strong> summarization</li>
<li><strong>Training simulations</strong> for medical professionals</li>
<li><strong>Drug discovery</strong> acceleration</li>
</ul>

<h3>Creative Industries Renaissance</h3>
<p><strong>Artistic and Creative Benefits:</strong></p>
<ul>
<li><strong>Independent artists</strong> competing with major studios</li>
<li><strong>Rapid prototyping</strong> for creative concepts</li>
<li><strong>Style exploration</strong> and experimentation</li>
<li><strong>Collaborative creation</strong> between humans and AI</li>
<li><strong>Accessibility</strong> for creators with disabilities</li>
</ul>

<h2>Benefits for Businesses and Individuals</h2>

<h3>For Small Businesses and Entrepreneurs</h3>

<h4>Cost Reduction</h4>
<ul>
<li><strong>90% savings</strong> on content creation costs</li>
<li><strong>Elimination</strong> of expensive agency fees</li>
<li><strong>Reduced hiring</strong> needs for specialized roles</li>
<li><strong>Lower barrier</strong> to entry for new markets</li>
</ul>

<h4>Productivity Enhancement</h4>
<ul>
<li><strong>24/7 content generation</strong> capability</li>
<li><strong>Instant ideation</strong> and brainstorming</li>
<li><strong>Rapid prototyping</strong> of concepts</li>
<li><strong>Automated routine tasks</strong></li>
</ul>

<h4>Competitive Advantage</h4>
<ul>
<li><strong>Professional quality</strong> output regardless of team size</li>
<li><strong>Faster time-to-market</strong> for campaigns</li>
<li><strong>Personalization at scale</strong></li>
<li><strong>Global reach</strong> with multilingual content</li>
</ul>

<h3>For Individual Creators and Professionals</h3>

<h4>Skill Amplification</h4>
<ul>
<li><strong>Enhanced creativity</strong> through AI collaboration</li>
<li><strong>Learning acceleration</strong> in new domains</li>
<li><strong>Professional development</strong> opportunities</li>
<li><strong>Portfolio expansion</strong> across multiple mediums</li>
</ul>

<h4>Career Opportunities</h4>
<ul>
<li><strong>New job roles</strong> in AI prompt engineering</li>
<li><strong>Freelance opportunities</strong> in AI-assisted services</li>
<li><strong>Entrepreneurial ventures</strong> with low startup costs</li>
<li><strong>Skill diversification</strong> across industries</li>
</ul>

<h2>Challenges and Considerations</h2>

<h3>Ethical and Legal Concerns</h3>

<h4>Intellectual Property Issues</h4>
<ul>
<li><strong>Copyright questions</strong> around AI-generated content</li>
<li><strong>Attribution challenges</strong> for training data</li>
<li><strong>Fair use</strong> considerations</li>
<li><strong>Licensing complexities</strong> for commercial use</li>
</ul>

<h4>Quality and Authenticity</h4>
<ul>
<li><strong>Misinformation risks</strong> from AI-generated content</li>
<li><strong>Deepfake concerns</strong> in visual media</li>
<li><strong>Bias amplification</strong> in AI outputs</li>
<li><strong>Human oversight</strong> requirements</li>
</ul>

<h3>Technical Limitations</h3>

<h4>Current Constraints</h4>
<ul>
<li><strong>Hallucination issues</strong> in factual content</li>
<li><strong>Context limitations</strong> in long-form content</li>
<li><strong>Consistency challenges</strong> across projects</li>
<li><strong>Integration complexity</strong> with existing workflows</li>
</ul>

<h4>Resource Requirements</h4>
<ul>
<li><strong>Internet connectivity</strong> dependencies</li>
<li><strong>Subscription costs</strong> for premium features</li>
<li><strong>Learning curve</strong> for optimal usage</li>
<li><strong>Data privacy</strong> considerations</li>
</ul>

<h2>Best Practices for Implementation</h2>

<h3>Getting Started: A Step-by-Step Guide</h3>

<h4>Phase 1: Assessment and Planning</h4>
<ol>
<li><strong>Identify use cases</strong> specific to your needs</li>
<li><strong>Evaluate current workflows</strong> for AI integration opportunities</li>
<li><strong>Set realistic expectations</strong> and goals</li>
<li><strong>Budget allocation</strong> for tools and training</li>
</ol>

<h4>Phase 2: Tool Selection and Testing</h4>
<ol>
<li><strong>Free trial exploration</strong> of multiple platforms</li>
<li><strong>Feature comparison</strong> based on requirements</li>
<li><strong>Integration testing</strong> with existing systems</li>
<li><strong>Team training</strong> and onboarding</li>
</ol>

<h4>Phase 3: Implementation and Optimization</h4>
<ol>
<li><strong>Gradual rollout</strong> to minimize disruption</li>
<li><strong>Quality control</strong> processes establishment</li>
<li><strong>Performance monitoring</strong> and metrics tracking</li>
<li><strong>Continuous improvement</strong> based on results</li>
</ol>

<h3>Maximizing ROI: Advanced Strategies</h3>

<h4>Prompt Engineering Excellence</h4>
<ul>
<li><strong>Specific and detailed</strong> instructions</li>
<li><strong>Context-rich</strong> background information</li>
<li><strong>Iterative refinement</strong> of prompts</li>
<li><strong>Template development</strong> for consistent results</li>
</ul>

<h4>Workflow Integration</h4>
<ul>
<li><strong>API connections</strong> for seamless automation</li>
<li><strong>Batch processing</strong> for efficiency</li>
<li><strong>Quality assurance</strong> checkpoints</li>
<li><strong>Human-AI collaboration</strong> optimization</li>
</ul>

<h2>Future Trends and Predictions for 2025-2026</h2>

<h3>Emerging Developments</h3>

<h4>Multimodal AI Integration</h4>
<ul>
<li><strong>Text-to-everything</strong> generation capabilities</li>
<li><strong>Cross-platform</strong> content adaptation</li>
<li><strong>Real-time collaboration</strong> between AI models</li>
<li><strong>Unified interfaces</strong> for multiple content types</li>
</ul>

<h4>Industry-Specific Solutions</h4>
<ul>
<li><strong>Vertical AI tools</strong> for specialized sectors</li>
<li><strong>Compliance-ready</strong> solutions for regulated industries</li>
<li><strong>Custom model training</strong> for specific use cases</li>
<li><strong>Enterprise-grade</strong> security and privacy features</li>
</ul>

<h4>Accessibility Improvements</h4>
<ul>
<li><strong>Voice-controlled</strong> AI interfaces</li>
<li><strong>Mobile-first</strong> design approaches</li>
<li><strong>Offline capabilities</strong> for remote areas</li>
<li><strong>Reduced computational</strong> requirements</li>
</ul>

<h3>Market Projections</h3>
<p><strong>Growth Forecasts:</strong></p>
<ul>
<li><strong>$62.4 billion</strong> market size by 2025</li>
<li><strong>37.2% CAGR</strong> through 2030</li>
<li><strong>500 million</strong> active users globally</li>
<li><strong>85% adoption</strong> rate in creative industries</li>
</ul>

<h2>Practical Implementation Guide</h2>

<h3>For Content Creators</h3>

<h4>Blog Writing Optimization</h4>
<ol>
<li><strong>Research and outline</strong> generation with AI</li>
<li><strong>First draft</strong> creation using prompts</li>
<li><strong>Human editing</strong> and fact-checking</li>
<li><strong>SEO optimization</strong> with AI assistance</li>
<li><strong>Multi-format adaptation</strong> for different platforms</li>
</ol>

<h4>Visual Content Strategy</h4>
<ol>
<li><strong>Concept development</strong> through AI brainstorming</li>
<li><strong>Image generation</strong> with specific style guides</li>
<li><strong>Brand consistency</strong> maintenance</li>
<li><strong>A/B testing</strong> of visual variations</li>
<li><strong>Performance analytics</strong> and optimization</li>
</ol>

<h3>For Businesses</h3>

<h4>Marketing Campaign Development</h4>
<ol>
<li><strong>Target audience</strong> analysis and persona creation</li>
<li><strong>Campaign messaging</strong> generation and testing</li>
<li><strong>Multi-channel content</strong> adaptation</li>
<li><strong>Performance tracking</strong> and optimization</li>
<li><strong>ROI measurement</strong> and reporting</li>
</ol>

<h4>Customer Service Enhancement</h4>
<ol>
<li><strong>Chatbot training</strong> with AI-generated responses</li>
<li><strong>FAQ generation</strong> and maintenance</li>
<li><strong>Multilingual support</strong> implementation</li>
<li><strong>Escalation protocols</strong> for complex issues</li>
<li><strong>Continuous improvement</strong> based on feedback</li>
</ol>

<h2>Security and Privacy Considerations</h2>

<h3>Data Protection Strategies</h3>

<h4>Best Practices</h4>
<ul>
<li><strong>Data minimization</strong> in AI interactions</li>
<li><strong>Encryption</strong> of sensitive information</li>
<li><strong>Access controls</strong> and user permissions</li>
<li><strong>Regular audits</strong> of AI tool usage</li>
<li><strong>Compliance monitoring</strong> with regulations</li>
</ul>

<h4>Risk Mitigation</h4>
<ul>
<li><strong>Vendor assessment</strong> and due diligence</li>
<li><strong>Backup strategies</strong> for critical content</li>
<li><strong>Incident response</strong> planning</li>
<li><strong>Staff training</strong> on security protocols</li>
<li><strong>Regular updates</strong> and patches</li>
</ul>

<h2>Measuring Success: KPIs and Metrics</h2>

<h3>Content Quality Metrics</h3>
<ul>
<li><strong>Engagement rates</strong> across platforms</li>
<li><strong>Conversion improvements</strong> from AI-generated content</li>
<li><strong>Time savings</strong> in content creation</li>
<li><strong>Cost reduction</strong> percentages</li>
<li><strong>Quality scores</strong> from human reviewers</li>
</ul>

<h3>Business Impact Indicators</h3>
<ul>
<li><strong>Revenue growth</strong> attributed to AI implementation</li>
<li><strong>Market share</strong> expansion</li>
<li><strong>Customer satisfaction</strong> improvements</li>
<li><strong>Operational efficiency</strong> gains</li>
<li><strong>Innovation velocity</strong> increases</li>
</ul>

<h2>Conclusion: Embracing the AI-Powered Future</h2>

<p>Democratized Generative AI represents more than just a technological advancement – it's a fundamental shift in how we create, communicate, and innovate. As we move through 2025, organizations and individuals who embrace this technology will gain significant competitive advantages in their respective fields.</p>

<p>The key to success lies not in replacing human creativity but in augmenting it. The most successful implementations combine the efficiency and scale of AI with the insight, emotion, and strategic thinking that only humans can provide.</p>

<p><strong>Action Steps for Success:</strong></p>
<ol>
<li><strong>Start experimenting</strong> with free AI tools today</li>
<li><strong>Identify specific use cases</strong> in your workflow</li>
<li><strong>Invest in training</strong> and skill development</li>
<li><strong>Build quality control</strong> processes</li>
<li><strong>Stay updated</strong> on emerging trends and capabilities</li>
</ol>

<p>The democratization of generative AI is not just changing how we work – it's expanding what's possible for everyone. Whether you're a solo entrepreneur, a creative professional, or part of a large organization, the time to embrace this transformative technology is now.</p>

<p><strong>The future of content creation is here, and it's more accessible than ever before.</strong></p>`
  },
  {
    id: 2,
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
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      setIsLoading(true);
      const posts = await fetchBlogFeed();
      const foundPost = posts.find(p => p.slug === slug);
      setPost(foundPost || null);
      setIsLoading(false);
    };
    
    loadPost();
  }, [slug]);

  if (isLoading) {
  return (
    <div className="min-h-screen bg-background">
      {post && (
        <SEO 
          title={post.title}
          description={post.excerpt}
          keywords={`${post.category}, AI insights, ChatGPT, AI strategy, enterprise AI, Christopher Dessi`}
          image={post.image}
          url={`/blog/${post.slug}`}
          type="article"
          author={post.author}
          publishedTime={new Date(post.date).toISOString()}
        />
      )}
      <Header />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <p className="text-xl text-muted-foreground">Loading article...</p>
        </div>
        <Footer />
      </div>
    );
  }

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
        <div className="section-padding max-w-5xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="prose prose-xl max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
              prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
              prose-h4:text-2xl prose-h4:mt-8 prose-h4:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-8 prose-p:text-lg
              prose-ul:my-8 prose-ul:list-disc prose-ul:pl-8
              prose-ol:my-8 prose-ol:list-decimal prose-ol:pl-8
              prose-li:text-gray-700 prose-li:mb-3 prose-li:text-lg
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium"
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

      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogPost;
