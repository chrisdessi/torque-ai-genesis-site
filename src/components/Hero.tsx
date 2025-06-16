
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-8">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Marketing Revolution
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-black leading-tight mb-6">
            ACCELERATE
            <br />
            YOUR <span className="gradient-text">GROWTH</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your marketing strategy with cutting-edge AI technology. 
            Drive unprecedented results, maximize ROI, and dominate your market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 font-bold px-8 py-4 text-lg group animate-pulse-glow"
            >
              START YOUR TRANSFORMATION
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 py-4 text-lg"
            >
              SEE RESULTS
            </Button>
          </div>
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent rounded-2xl"></div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-black mb-2">300%</div>
                <div className="text-gray-600 font-medium">Average ROI Increase</div>
              </div>
              <div>
                <div className="text-4xl font-black text-black mb-2">2.5X</div>
                <div className="text-gray-600 font-medium">Lead Generation Boost</div>
              </div>
              <div>
                <div className="text-4xl font-black text-black mb-2">90%</div>
                <div className="text-gray-600 font-medium">Time Saved on Campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
