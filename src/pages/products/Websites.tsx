
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Smartphone, Search, Zap, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Websites = () => {
  const features = [
    "Drag & Drop Website Builder",
    "Mobile-Responsive Design",
    "SEO Optimization Tools",
    "Custom Domain Integration",
    "SSL Security Included",
    "Analytics Integration",
    "Contact Forms & Lead Capture",
    "Social Media Integration"
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Professional Design",
      description: "Beautiful, modern websites that reflect your brand and convert visitors into customers."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Every website automatically adapts to look perfect on desktop, tablet, and mobile devices."
    },
    {
      icon: Search,
      title: "SEO Ready",
      description: "Built-in SEO tools help your website rank higher in search results and attract more traffic."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with fast loading times that keep visitors engaged and reduce bounce rates."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "With our drag-and-drop builder, you can have a professional website live in just a few hours. More complex customizations may take 1-2 days."
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes! You can connect your existing domain or purchase a new one through our platform. SSL certificates are included at no extra cost."
    },
    {
      question: "Is my website mobile-friendly?",
      answer: "Absolutely. All websites built with our platform are automatically optimized for mobile devices and tablets."
    },
    {
      question: "Do I need technical skills?",
      answer: "No technical skills required! Our intuitive drag-and-drop builder makes it easy for anyone to create a professional website."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="section-padding py-4 border-b border-gray-200">
        <Link to="/platform" className="flex items-center text-gray-600 hover:text-black">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Platform
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="section-padding py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black">
                  WEBSITES
                </h1>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create stunning, professional websites that convert visitors into customers. 
                No coding required - just drag, drop, and publish.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4">
                  Start Building
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold px-8 py-4">
                  View Demo
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="text-gray-500 text-lg font-medium mb-4">Website Preview</div>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-32 bg-blue-100 rounded mb-4"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-16 bg-gray-100 rounded"></div>
                  <div className="h-16 bg-gray-100 rounded"></div>
                </div>
              </div>
              <p className="text-sm text-gray-500">Live preview of your website as you build</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">WHY CHOOSE OUR WEBSITES?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create a powerful online presence that drives results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">WHAT'S INCLUDED</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-lg font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            READY TO BUILD YOUR WEBSITE?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses who trust us with their online presence.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-4">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Websites;
