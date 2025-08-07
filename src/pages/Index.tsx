
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Mail, Megaphone, Star, MapPin, BarChart3, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import circuitBoard from "@/assets/circuit-board.jpg";
import codeLaptop from "@/assets/code-laptop.jpg";
import officeTeam from "@/assets/office-team.jpg";

const Index = () => {
  const stats = [
    { number: "300%", label: "Average ROI Increase" },
    { number: "2.5x", label: "Lead Generation Boost" },
    { number: "90%", label: "Time Saved on Campaigns" }
  ];

  const aiAgents = [
    {
      icon: Globe,
      title: "Website AI",
      description: "Build professional websites that convert visitors into customers",
      features: ["Drag & Drop Builder", "Mobile Responsive", "SEO Optimized"]
    },
    {
      icon: Users,
      title: "CRM AI", 
      description: "Manage leads and customers with intelligent automation",
      features: ["Contact Management", "Pipeline Tracking", "Automated Follow-ups"]
    },
    {
      icon: Mail,
      title: "Email AI",
      description: "Create and send targeted email campaigns that drive results", 
      features: ["Email Builder", "List Segmentation", "A/B Testing"]
    },
    {
      icon: Megaphone,
      title: "Ads AI",
      description: "Maximize ROI with AI-powered advertising campaigns",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization"]
    },
    {
      icon: Star,
      title: "Reputation AI",
      description: "Monitor and manage your online reputation across platforms",
      features: ["Review Monitoring", "Response Management", "Rating Improvement"]
    },
    {
      icon: MapPin,
      title: "Local AI",
      description: "Ensure consistent business information across all directories",
      features: ["Directory Management", "Citation Building", "Local SEO"]
    },
    {
      icon: BarChart3,
      title: "Analytics AI",
      description: "Data-driven insights to optimize your marketing performance", 
      features: ["Performance Tracking", "ROI Analysis", "Custom Reports"]
    },
    {
      icon: TrendingUp,
      title: "Intelligence AI",
      description: "AI-powered recommendations to accelerate your growth",
      features: ["Predictive Analytics", "Growth Recommendations", "Market Insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                The TorqueApp Platform
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-6xl mx-auto">
                TorqueApp is <span className="highlight-green">purpose-built AI</span> that helps{' '}
                <span className="highlight-blue">content marketing teams</span> work{' '}
                <span className="highlight-purple">smarter</span> to achieve <span className="highlight-yellow">better outcomes</span>
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="px-8 py-4 text-lg bg-primary hover:bg-primary/90" asChild>
                <Link to="/quiz">
                  Start Free Trial
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 hover:bg-muted" asChild>
                <Link to="https://torqueapp.ai/centered-heading-with-contact-form/">
                  Get A Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-3">{stat.number}</div>
                <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Intro */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                AI is the <span className="highlight-orange">foundational technology</span> at the
                core of our team.
              </h2>
            </div>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                From uncovering new insights in their data, to responsive content personalization 
                on an unprecedented scale, AI-first marketing teams deliver a world of new relevance 
                to audiences and ROI for the entire organization.
              </p>
              <p>
                Getting there requires wide-scale transformation and is best guided by the people 
                who use these tools every day to lead enterprise implementations, custom automation, 
                and fine-tuned AI tools and training for your people. That's TorqueAI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden bg-card rounded-lg shadow-sm">
              <img 
                src={circuitBoard} 
                alt="AI Technology" 
                className="w-full h-80 object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="relative overflow-hidden bg-card rounded-lg shadow-sm">
              <img 
                src={codeLaptop} 
                alt="Development Process" 
                className="w-full h-80 object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="relative overflow-hidden bg-card rounded-lg shadow-sm">
              <img 
                src={officeTeam} 
                alt="Team Collaboration" 
                className="w-full h-80 object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              We'll guide you on your journey to become an{' '}
              <span className="highlight-green">AI-first brand</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiAgents.slice(0, 6).map((agent, index) => (
              <a 
                key={index} 
                href="https://torqueapp.ai/ai-agents/"
                className="group block"
              >
                <div className="bg-white border border-gray-200 hover:border-black transition-all duration-300 p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black flex items-center justify-center mr-4">
                      <agent.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-black">
                      {agent.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-gray-500">
                    {agent.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1 h-1 bg-black rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiAgents.slice(6, 8).map((agent, index) => (
              <a 
                key={index + 6} 
                href="https://torqueapp.ai/ai-agents/"
                className="group block"
              >
                <div className="bg-white border border-gray-200 hover:border-black transition-all duration-300 p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black flex items-center justify-center mr-4">
                      <agent.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-black">
                      {agent.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-gray-500">
                    {agent.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1 h-1 bg-black rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="highlight-purple">NOT SURE</span> WHICH AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto">
            Take our 5-minute quiz to find the perfect AI agent for your business goals,
            or speak with one of our specialists to design a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/quiz">
              <Button size="lg" className="px-12 py-6 text-lg">
                Take Quiz
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <a href="https://torqueapp.ai/centered-heading-with-contact-form/">
              <Button size="lg" variant="outline" className="px-12 py-6 text-lg">
                Talk to Expert
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
