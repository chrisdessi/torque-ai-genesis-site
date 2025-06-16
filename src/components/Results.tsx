
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

const Results = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "427%",
      label: "Average Revenue Increase",
      description: "Across all client campaigns"
    },
    {
      icon: Users,
      value: "2.8M+",
      label: "Qualified Leads Generated",
      description: "In the past 12 months"
    },
    {
      icon: DollarSign,
      value: "$50M+",
      label: "Revenue Generated",
      description: "For our clients to date"
    },
    {
      icon: Clock,
      value: "72%",
      label: "Faster Campaign Launch",
      description: "Compared to traditional methods"
    }
  ];

  const testimonials = [
    {
      quote: "Torque AI transformed our marketing completely. We saw 300% growth in qualified leads within 90 days.",
      author: "Sarah Chen",
      title: "CEO, TechFlow Solutions"
    },
    {
      quote: "The AI-driven insights helped us identify opportunities we never knew existed. ROI increased by 450%.",
      author: "Marcus Rodriguez",
      title: "Marketing Director, GrowthCorp"
    },
    {
      quote: "Finally, marketing that actually works. Our conversion rates doubled in the first month.",
      author: "Emma Thompson",
      title: "Founder, InnovateLab"
    }
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            PROVEN <span className="gradient-text">RESULTS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers don't lie. See the measurable impact we've delivered 
            for businesses ready to embrace the future of marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-black mb-2">{metric.value}</div>
              <div className="text-lg font-bold text-gray-800 mb-2">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-6xl text-gray-300 mb-4">"</div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-bold text-black">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
