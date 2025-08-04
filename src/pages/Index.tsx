
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Mail, Megaphone, Star, MapPin, BarChart3, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Index = () => {
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
      <section className="py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            AI AGENTS
            <br />
            <span className="text-gray-400">FOR GROWTH</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Choose the AI agent that matches your business needs. 
            Each one is designed to accelerate your specific goals.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-xl px-12 py-6 rounded-none">
            Take Our Quiz
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* AI Agents Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              CHOOSE YOUR AI
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Each AI agent specializes in a different area of your business growth.
              Select the one that fits your immediate needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {aiAgents.map((agent, index) => (
              <Link 
                key={index} 
                to="/contact"
                className="group block"
              >
                <div className="border-2 border-gray-100 hover:border-black transition-all duration-300 p-10 h-full">
                  <div className="w-20 h-20 bg-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <agent.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-black mb-6 group-hover:text-black transition-colors">
                    {agent.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {agent.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-500 flex items-center text-base">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-black font-bold text-lg group-hover:translate-x-3 transition-transform">
                    Learn More
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            NOT SURE WHICH AI?
          </h2>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            Take our 5-minute quiz to find the perfect AI agent for your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold px-12 py-6 text-xl rounded-none">
              Take Quiz
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-12 py-6 text-xl rounded-none">
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
