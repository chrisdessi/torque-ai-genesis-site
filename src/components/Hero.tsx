
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-fade-up">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary mb-6">
            <span className="bg-green-500 w-1.5 h-1.5 rounded-full mr-2"></span>
            New! Forrester Total Economic Impact™ of Torque. Download the study today
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-primary leading-[1.1] mb-8 tracking-tight">
            AI built for leaders
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Torque is the AI platform that unifies the brand experience, accelerates content velocity, 
            and automates marketing processes—at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              variant="outline"
              size="lg" 
              className="group"
            >
              <a href="mailto:info@torqueapp.ai?subject=Start%20Free%20Trial">
                Start Free Trial
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              className="group"
            >
              <a href="mailto:info@torqueapp.ai?subject=Get%20A%20Demo">
                Get A Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-24 relative">
          <div className="bg-card border border-border rounded-2xl p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-serif font-normal text-primary mb-3">300%</div>
                <div className="text-muted-foreground font-normal">Average ROI Increase</div>
              </div>
              <div>
                <div className="text-5xl font-serif font-normal text-primary mb-3">2.5X</div>
                <div className="text-muted-foreground font-normal">Lead Generation Boost</div>
              </div>
              <div>
                <div className="text-5xl font-serif font-normal text-primary mb-3">90%</div>
                <div className="text-muted-foreground font-normal">Time Saved on Campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
