
import { CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "ANALYZE & AUDIT",
      description: "Comprehensive analysis of your current marketing performance and competitive landscape."
    },
    {
      number: "02", 
      title: "STRATEGIZE & PLAN",
      description: "Development of custom AI-powered marketing strategy aligned with your business objectives."
    },
    {
      number: "03",
      title: "IMPLEMENT & OPTIMIZE",
      description: "Deployment of AI systems with continuous monitoring and real-time optimization."
    },
    {
      number: "04",
      title: "SCALE & DOMINATE",
      description: "Scale successful campaigns and expand market dominance through data-driven insights."
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            HOW WE <span className="gradient-text">WORK</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures rapid implementation and 
            measurable results from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-lg font-black text-black mb-4">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            READY TO TRANSFORM YOUR MARKETING?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already revolutionized their growth with Torque AI.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
            START YOUR JOURNEY TODAY
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
