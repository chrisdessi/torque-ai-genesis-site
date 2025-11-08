
import { Brain, Target, TrendingUp, Zap, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Development",
      description: "Custom AI marketing strategies tailored to your business goals and market position."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced audience segmentation and targeting using machine learning algorithms."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast market trends and customer behavior to stay ahead of the competition."
    },
    {
      icon: Zap,
      title: "Campaign Automation",
      description: "Intelligent automation that optimizes campaigns in real-time for maximum performance."
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Continuous optimization using AI-driven insights and data analysis."
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "AI-powered customer journey analysis to maximize conversion at every touchpoint."
    },
    {
      icon: Brain,
      title: "AI Agent Workflows",
      description: "Build custom chat agent workflows with specialized logic and tools for your business needs."
    },
    {
      icon: Target,
      title: "Data Enrichment Agents",
      description: "Pull together data to answer user questions and provide comprehensive insights automatically."
    },
    {
      icon: Users,
      title: "Customer Service Agents",
      description: "Resolve customer queries with custom AI policies and automated response systems."
    },
    {
      icon: Brain,
      title: "Structured Data Q/A",
      description: "Query databases using natural language and get instant, accurate answers from your data."
    },
    {
      icon: BarChart3,
      title: "Document Comparison",
      description: "Analyze and highlight differences across uploaded documents with AI precision."
    },
    {
      icon: Users,
      title: "Internal Knowledge Assistant",
      description: "Triage and answer questions from employees using your organization's knowledge base."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            SERVICES THAT <span className="gradient-text">DELIVER</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI marketing solutions designed to transform your business 
            and accelerate growth through intelligent automation and data-driven strategies.
            <Link to="/services" className="text-primary hover:underline ml-2">View detailed services →</Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
