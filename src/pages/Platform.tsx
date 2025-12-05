
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Mail, Megaphone, Star, MapPin, BarChart3, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Platform = () => {
  const modules = [
    {
      icon: Globe,
      title: "Websites",
      description: "Professional websites that convert visitors into customers",
      color: "bg-blue-500",
      features: ["Drag & Drop Builder", "Mobile Responsive", "SEO Optimized"]
    },
    {
      icon: Users,
      title: "CRM",
      description: "Manage leads and customers with intelligent automation",
      color: "bg-green-500",
      features: ["Contact Management", "Pipeline Tracking", "Automated Follow-ups"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Create and send targeted email campaigns that drive results",
      color: "bg-purple-500",
      features: ["Email Builder", "List Segmentation", "A/B Testing"]
    },
    {
      icon: Megaphone,
      title: "Digital Ads",
      description: "Maximize ROI with AI-powered advertising campaigns",
      color: "bg-red-500",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization"]
    },
    {
      icon: Star,
      title: "Reputation",
      description: "Monitor and manage your online reputation across platforms",
      color: "bg-yellow-500",
      features: ["Review Monitoring", "Response Management", "Rating Improvement"]
    },
    {
      icon: MapPin,
      title: "Local Listings",
      description: "Ensure consistent business information across all directories",
      color: "bg-indigo-500",
      features: ["Directory Management", "Citation Building", "Local SEO"]
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Data-driven insights to optimize your marketing performance",
      color: "bg-orange-500",
      features: ["Performance Tracking", "ROI Analysis", "Custom Reports"]
    },
    {
      icon: TrendingUp,
      title: "Intelligence",
      description: "AI-powered recommendations to accelerate your growth",
      color: "bg-pink-500",
      features: ["Predictive Analytics", "Growth Recommendations", "Market Insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            THE COMPLETE
            <br />
            <span className="text-gray-400">MARKETING PLATFORM</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Everything your business needs to dominate online. 
            Websites, CRM, email marketing, ads, and more - all powered by AI.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-8 py-4">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              POWERFUL MODULES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each module is designed to work independently or together 
              as part of your complete marketing ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, index) => (
              <Link 
                key={index} 
                to="/contact"
                className="group"
              >
                <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-black transition-all duration-300 hover:shadow-lg">
                  <div className={`w-16 h-16 ${module.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            READY TO ACCELERATE?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses already growing with Torque AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold px-8 py-4">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
