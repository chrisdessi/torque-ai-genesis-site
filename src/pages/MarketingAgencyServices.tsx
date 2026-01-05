import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ZohoContactForm from "@/components/ZohoContactForm";
import { ZohoCommunitySignupForm } from "@/components/ZohoCommunitySignupForm";
import ServiceSelectorQuiz from "@/components/ServiceSelectorQuiz";
import { 
  Briefcase, 
  Target, 
  BarChart3, 
  TrendingUp, 
  Megaphone, 
  Clock,
  Users,
  Compass,
  Sparkles,
  FileText,
  Share2,
  DollarSign,
  Search,
  PenTool,
  MessageSquare,
  Lightbulb,
  Brain,
  Zap
} from "lucide-react";

const MarketingAgencyServices = () => {
  const steps = [
    {
      number: 1,
      title: "Set Up Your Workspace",
      subtitle: "Describe your business",
      icon: Briefcase,
      color: "from-emerald-500 to-teal-600",
      services: [
        { name: "Business Description", description: "Provide your marketing context" },
        { name: "Product Offers", description: "Describe your products" },
        { name: "Tone of Voice", description: "Personalize your Tone of Voice" },
      ]
    },
    {
      number: 2,
      title: "Get Your Marketing Strategy",
      subtitle: "Understand your direction",
      icon: Target,
      color: "from-blue-500 to-indigo-600",
      services: [
        { name: "User Persona", description: "Understand your ideal customer" },
        { name: "Positioning", description: "Define your value proposition" },
        { name: "Customer Transformation", description: "Sell the desired positive future" },
        { name: "Brand Marketing", description: "Stand out from the competition" },
        { name: "Marketing Copy", description: "Explain your product effortlessly" },
        { name: "User Acquisition", description: "Focus on the right marketing channels" },
        { name: "Marketing KPIs", description: "Measure metrics that matter" },
        { name: "Offer Audit", description: "Solve the problems of your product" },
        { name: "Product Portfolio", description: "Leverage your next product launch" },
      ]
    },
    {
      number: 3,
      title: "Analyze Your Market",
      subtitle: "Get actionable insights",
      icon: BarChart3,
      color: "from-purple-500 to-violet-600",
      services: [
        { name: "Market Analysis", description: "Study your environment" },
        { name: "Competitor Finder", description: "Find alternative solutions to your offer" },
        { name: "Competitor Analyzer", description: "Scan competitor websites for insights" },
        { name: "Customer Journey Map", description: "Understand your customers" },
      ]
    },
    {
      number: 4,
      title: "Increase Your Conversion Rate",
      subtitle: "Improve your marketing funnel",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600",
      services: [
        { name: "Landing Page Audit", description: "Roast your landing page" },
        { name: "Landing Page Structure", description: "Create a landing page that sells" },
        { name: "Pricing Page Audit", description: "Roast your pricing page" },
        { name: "Pricing Strategies", description: "Find the best monetization model" },
        { name: "Product Improvement", description: "Make your product more desirable" },
        { name: "Email Sequence", description: "Send emails that sell your product" },
      ]
    },
    {
      number: 5,
      title: "Get More Traffic",
      subtitle: "Generate high-quality content",
      icon: Megaphone,
      color: "from-pink-500 to-rose-600",
      services: [
        { name: "Keyword Research", description: "Find untapped SEO opportunities" },
        { name: "SEO Articles", description: "Publish high-quality blog articles" },
        { name: "Social Media Posts", description: "Go viral with unique social media posts" },
        { name: "Paid Ads", description: "Grow faster with profitable ads" },
      ]
    },
    {
      number: 6,
      title: "Save Time on Marketing",
      subtitle: "Finish more marketing tasks",
      icon: Clock,
      color: "from-cyan-500 to-blue-600",
      services: [
        { name: "Marketing Ideas", description: "Get actionable marketing tactics" },
        { name: "Chat with AI Assistant", description: "Delegate boring marketing tasks" },
        { name: "Deep Research", description: "Save hours on marketing research" },
      ]
    },
  ];

  const serviceIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    "Business Description": Briefcase,
    "Product Offers": FileText,
    "Tone of Voice": MessageSquare,
    "User Persona": Users,
    "Positioning": Compass,
    "Customer Transformation": Sparkles,
    "Brand Marketing": Target,
    "Marketing Copy": PenTool,
    "User Acquisition": Share2,
    "Marketing KPIs": BarChart3,
    "Offer Audit": Search,
    "Product Portfolio": Briefcase,
    "Market Analysis": BarChart3,
    "Competitor Finder": Search,
    "Competitor Analyzer": Brain,
    "Customer Journey Map": Compass,
    "Landing Page Audit": Search,
    "Landing Page Structure": FileText,
    "Pricing Page Audit": DollarSign,
    "Pricing Strategies": DollarSign,
    "Product Improvement": Sparkles,
    "Email Sequence": MessageSquare,
    "Keyword Research": Search,
    "SEO Articles": PenTool,
    "Social Media Posts": Share2,
    "Paid Ads": Megaphone,
    "Marketing Ideas": Lightbulb,
    "Chat with AI Assistant": Brain,
    "Deep Research": Search,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Marketing Agency Services | Torque AI"
        description="AI-powered marketing services to grow your business. From strategy to execution, we help you build systems that scale."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              AI-Powered Marketing
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-lexend font-bold text-foreground mb-6 leading-tight">
              Marketing Services That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Actually Scale
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our AI-enhanced marketing methodology takes you from strategy to execution. 
              Build systems that grow with your business, not against it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Find Your Perfect Fit
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-lexend font-bold text-foreground mb-4">
              Which Services Are Right for You?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Answer 4 quick questions and get personalized recommendations based on your business goals.
            </p>
          </motion.div>
          <ServiceSelectorQuiz />
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step, stepIndex) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: stepIndex * 0.1 }}
                className="relative"
              >
                {/* Step Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Step {step.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-lexend font-bold text-foreground">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg mt-1">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {step.services.map((service, serviceIndex) => {
                    const IconComponent = serviceIcons[service.name] || Zap;
                    return (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                        className="group relative bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1 group-hover:text-primary transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Connector Line */}
                {stepIndex < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-7 sm:left-8 top-full h-16 sm:h-24 w-0.5 bg-gradient-to-b from-border to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-lexend font-bold text-foreground mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's build AI-powered marketing systems that scale with your business. 
                Our team will help you implement the right strategy for your goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Custom Strategy
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  AI-Enhanced Execution
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Measurable Results
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl"
            >
              <h3 className="text-xl sm:text-2xl font-lexend font-bold text-foreground mb-6">
                Get Started Today
              </h3>
              <ZohoContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Signup */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the FREE Torque AI Community
            </h2>
            <p className="text-lg text-gray-300">
              Get weekly marketing insights powered by AI
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <ZohoCommunitySignupForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingAgencyServices;
