import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Target, TrendingUp, Users, Zap, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import SEO from "@/components/SEO";

import garyVeeImage from "@/assets/gary-vee.png";

const ExecutiveCoaching = () => {
  const [slotsRemaining] = useState(8);

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Clarity",
      description: "Cut through the noise and focus on what moves the needle for your business and career."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Revenue Growth",
      description: "Learn the exact frameworks Chris used to close $32M in enterprise deals."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership Impact",
      description: "Build high-performing teams that execute with speed and confidence."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Decision Velocity",
      description: "Make better decisions faster and eliminate costly delays."
    }
  ];

  const outcomes = [
    "Clear 90-day action plan with measurable milestones",
    "Weekly accountability and strategic guidance",
    "Access to proven frameworks from $32M in closed deals",
    "Direct feedback on your toughest leadership challenges",
    "Private executive roundtable invitations",
    "Recorded sessions for your leadership team"
  ];

  const testimonials = [
    {
      quote: "Chris helped me see the gaps in my decision-making process. Revenue jumped 40% in six months.",
      author: "Sarah Chen",
      role: "CEO, SaaS Platform"
    },
    {
      quote: "The clarity I gained in our first session was worth 10x the investment. Chris doesn't pull punches.",
      author: "Michael Roberts",
      role: "VP of Sales, Enterprise Software"
    },
    {
      quote: "Best coaching investment I've made. Chris brings real-world battle scars and actionable frameworks.",
      author: "Jennifer Martinez",
      role: "Chief Revenue Officer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Westchester Executive Coaching Sessions - Chris Dessi Master Marketer"
        description="1-on-1 executive coaching with Chris Dessi in Westchester, NY. Master marketer and consultant who closed over $100 million in deals. Strategic clarity, leadership development, and revenue growth frameworks. Featured on Fox, Forbes, and CNN. Limited spots available."
        keywords="executive coaching Westchester, Chris Dessi coaching, Westchester business coach, executive coaching New York, leadership coaching Westchester NY, business coaching Westchester, sales coaching, strategic planning coach, revenue growth coaching, master marketer consultant, executive development Westchester, C-suite coaching, business strategy Westchester"
        url="/executive-coaching"
        type="website"
      />
      <Header />
      
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-card border-t border-border py-3 px-4 flex items-center justify-between z-40 backdrop-blur-sm">
        <div className="text-sm md:text-base font-medium">
          First session: $199 · {slotsRemaining} slots remaining this month
        </div>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
            Book Your Session
          </a>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Executive Coaching with Chris Dessi
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Stop wondering what to do next. Start executing.
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Work 1-on-1 with Chris Dessi—author, TV commentator, and the leader who personally closed 
                <span className="font-semibold text-foreground"> over $100million in enterprise deals</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
                    Book First Session — $199
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#outcomes">See What You'll Get</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>60-minute deep dive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Actionable playbook</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>No fluff</span>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-card/50 backdrop-blur border-border">
              <h3 className="text-xl font-semibold mb-6">First Session Preview</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Strategic Audit</p>
                    <p className="text-sm text-muted-foreground">We'll map your current state, growth blockers, and hidden leverage points.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Decision Framework</p>
                    <p className="text-sm text-muted-foreground">Learn the exact criteria Chris uses to evaluate opportunities and cut noise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <div>
                    <p className="font-medium">30-Day Roadmap</p>
                    <p className="text-sm text-muted-foreground">Walk away with three clear actions and measurable milestones.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={garyVeeImage} 
                    alt="Gary Vaynerchuk" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground italic mb-2">
                      "One 15 minute meeting with Chris made me millions"
                    </p>
                    <p className="text-xs font-semibold text-foreground">— Gary Vaynerchuk</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{slotsRemaining} spots</span> remain this month
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Transform</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real coaching for leaders who want results, not theory.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What's Included in Your First Session
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                This isn't a sales call. This isn't a therapy session. This is a strategic deep dive 
                that produces a clear action plan you can start executing immediately.
              </p>
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
                  Claim Your Spot — $199
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
            <Card className="p-8 bg-card border-border">
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Leaders Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Chris */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Chris Dessi</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Chris Dessi</span> is an author, 
                  television commentator, and growth leader who has built and led high-performing sales teams.
                </p>
                <p>
                  Over two years, Chris personally closed <span className="font-semibold text-foreground">over $100million</span> in 
                  enterprise deals. He's been in the trenches—navigating complex sales cycles, building teams from scratch, 
                  and scaling revenue in competitive markets.
                </p>
                <p>
                  Chris doesn't teach theory. He brings battle-tested frameworks, hard-won lessons, and direct feedback 
                  that cuts through the noise. If you're ready to move faster and win bigger, this is your coach.
                </p>
              </div>
            </div>
            <Card className="p-6 bg-card border-border">
              <p className="text-sm text-muted-foreground italic">
                "Most leaders know what to do. They just don't know what to do first. That's what I solve."
              </p>
              <p className="mt-4 font-semibold">— Chris Dessi</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to move faster?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your first executive coaching session with Chris Dessi. 
            Walk away with a clear roadmap and the confidence to execute.
          </p>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://buy.stripe.com/5kQdR983q9n90gd1w78g000" target="_blank" rel="noopener noreferrer">
              Book Your Session — $199
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{slotsRemaining} spots</span> remain this month · 
            First session is 60 minutes · Recorded for your reference
          </p>
        </div>
      </section>

      {/* Newsletter and Pricing Side by Side */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Join Torque AI's Newsletter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get exclusive AI insights, strategies, and innovation updates delivered directly to your inbox
              </p>
              <div className="w-full mx-auto">
                <iframe 
                  src="https://embeds.beehiiv.com/0c0565a9-66ec-4225-a021-87a3562337b7" 
                  data-test-id="beehiiv-embed" 
                  width="100%" 
                  height="320" 
                  frameBorder="0" 
                  scrolling="no"
                  style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: 0, backgroundColor: 'transparent' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ExecutiveCoaching;