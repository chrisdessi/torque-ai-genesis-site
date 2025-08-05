
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-white relative overflow-hidden">
        {/* Stats Sidebar */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="text-left space-y-12">
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-8">
              Number of businesses<br/>transformed
            </div>
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-black text-black">{stat.number}</div>
                <div className="text-sm text-gray-600 max-w-24 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 pt-40 pb-8 text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none tracking-[0.2em]">
            AI
          </h1>
          <div className="space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-800 leading-relaxed">
              Transform <span className="font-black">workflows</span> and elevate
              <br />
              <span className="font-black">experiences</span> with AI innovation.
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://torqueapp.ai/centered-heading-with-contact-form/">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-6 text-lg rounded-none">
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="https://torqueapp.ai/ai-agents/">
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-none">
                See Results
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Scroll</div>
            <div className="w-px h-16 bg-gray-300 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Intro */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8 tracking-wide">
                AI is the foundational
                <br />
                technology at the
                <br />
                core of our team.
              </h2>
            </div>
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
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
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden bg-white">
              <img 
                src={circuitBoard} 
                alt="AI Technology" 
                className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="relative overflow-hidden bg-white">
              <img 
                src={codeLaptop} 
                alt="Development Process" 
                className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="relative overflow-hidden bg-white">
              <img 
                src={officeTeam} 
                alt="Team Collaboration" 
                className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-wide">
              We'll guide you on
              <br />
              your journey to become
              <br />
              an AI-first brand.
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
      <section className="py-32 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-wide">
            NOT SURE WHICH AI?
          </h2>
          <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto">
            Take our 5-minute quiz to find the perfect AI agent for your business goals,
            or speak with one of our specialists to design a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/quiz">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-semibold px-12 py-6 text-lg rounded-none">
                Take Quiz
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <a href="https://torqueapp.ai/centered-heading-with-contact-form/">
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-black hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-none">
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
