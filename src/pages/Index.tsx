import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Linkedin, Youtube } from "lucide-react";
import chrisBioImage from "@/assets/chris-bio.png";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const solutions = [
    {
      title: "Executive AI Briefing",
      description: "90-minute strategy session to align leadership and identify growth opportunities.",
      price: "$10,000"
    },
    {
      title: "AI Strategy Workshop",
      description: "1-day onsite/virtual workshop to design AI adoption roadmaps and compliance frameworks.",
      price: "$25,000"
    },
    {
      title: "90-Day AI Accelerator",
      description: "Implementation of AI-driven GTM, automation, and analytics systems for measurable ROI.",
      price: "$75,000–$150,000"
    }
  ];

  const metrics = [
    { stat: "100%", label: "Leadership Alignment within 4 Weeks" },
    { stat: "60%", label: "Reduction in Manual Marketing Workflows" },
    { stat: "100%", label: "Brand-Safe AI Adoption Framework" },
    { stat: "90 Days", label: "Measurable ROI Timeline" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-yellow-600/20"></div>
        </div>
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Unleash the Full Power<br />of AI in Your Business<br />with Torque AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Build, Scale & Automate with Confidence — Learn the Playbook Inside Torque Academy
              <br /><br />
              Torque AI helps forward-thinking teams integrate AI across Sales, Marketing & Communications — and trains them to master it through Torque Academy, your all-in-one AI education and execution hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg"
                  className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-10 py-7 text-lg"
                  onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
                >
                  Meet With Us
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-semibold px-10 py-7 text-lg"
                onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
              >
                Start AI Transformation
              </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Hidden Cost of Misalignment */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              The Hidden Cost of Misalignment
            </h2>
            <p className="text-2xl text-gray-600">
              Every day without alignment costs you real revenue
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-6xl font-bold text-black mb-4">5–10%</div>
              <p className="text-lg text-gray-600">of annual revenue wiped out by strategy failures</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-6xl font-bold text-black mb-4">80%</div>
              <p className="text-lg text-gray-600">of employees lack time or energy to do their best work</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-6xl font-bold text-black mb-4">40%</div>
              <p className="text-lg text-gray-600">of productive time stolen by context switching each week</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-6xl font-bold text-black mb-4">100%</div>
              <p className="text-lg text-gray-600">of margins silently taxed by meeting and tool overload</p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-10 py-7"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Quantify Your Execution Leak
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Where You're Losing Money */}
      <section className="bg-black text-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Where You're Losing Money
            </h2>
            <p className="text-2xl text-gray-400">
              Identify the leaks draining your bottom line
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4">Revenue Leak</h3>
              <div className="text-6xl font-bold text-[#E5C07B] mb-4">5–10%</div>
              <p className="text-gray-400 text-lg">of topline wasted through execution drift, duplication and hand-offs</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4">AI Risk</h3>
              <div className="text-6xl font-bold text-[#E5C07B] mb-4">$4.4B</div>
              <p className="text-gray-400 text-lg">lost by firms without Responsible AI governance (EY 2025)</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4">Lost Time</h3>
              <div className="text-6xl font-bold text-[#E5C07B] mb-4">80%</div>
              <p className="text-gray-400 text-lg">of staff already at capacity while leaders demand productivity gains (Microsoft 2025)</p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-10 py-7"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Stop the Leak
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Your Competition Isn't Waiting */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Your Competition Isn't Waiting
            </h2>
            <p className="text-2xl text-gray-600">
              Leading enterprises are already leveraging AI for measurable growth
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-6xl font-bold text-black mb-4">93%</div>
              <p className="text-lg text-gray-600">of CMOs already report positive ROI from Gen AI</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-xl font-bold text-black mb-4">Revenue Lift</div>
              <p className="text-lg text-gray-600">Business units using Gen AI see measurable revenue lift (McKinsey 2025)</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-6xl font-bold text-black mb-4">40%</div>
              <p className="text-lg text-gray-600">of enterprise apps will embed AI agents by 2026 (Gartner)</p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-10 py-7"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Catch Up Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Boards Are Replacing Leaders */}
      <section className="bg-black text-white py-32">
        <div className="section-padding max-w-7xl mx-auto text-center">
          <motion.h2 {...fadeInUp} className="text-5xl md:text-6xl font-bold mb-8">
            Boards Are Replacing Leaders Who Can't Deliver Change
          </motion.h2>
          <motion.p {...fadeInUp} className="text-2xl text-gray-400 mb-12">
            31% of CEOs lose their roles for failed transformation efforts.<br />
            Don't be next—lead with alignment.
          </motion.p>
          <motion.div {...fadeInUp}>
            <Button 
              size="lg"
              className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-10 py-7"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Secure Your Seat
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Our Approach: Comprehensive AI Strategy, AI Business and AI Software Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We partner with enterprise businesses who have no AI strategy to transform their marketing, sales, and communications operations through strategic AI integration and proven methodologies.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We analyze your infrastructure, data, and industry trends to identify opportunities for transformative AI solutions that meet your unique business needs and drive measurable results.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black mb-4">Areas of Expertise</h3>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    Business Analysis & Infrastructure Assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    AI Strategy Development
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    Data Qualification & Preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    AI Product Solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    Integration & Deployment
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5C07B] mr-3">•</span>
                    Maintenance & Support
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
            </motion.div>
          </div>
          
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-8">Why Choose Torque AI</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <p className="text-lg text-gray-600">Proven track record of transforming enterprise operations</p>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-600">Strategic AI implementation with measurable ROI</p>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-600">End-to-end support from strategy to optimization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Torque AI Difference */}
      <section className="bg-black text-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-5xl md:text-6xl font-bold text-center mb-8">
            The Torque AI Difference
          </motion.h2>
          <motion.p {...fadeInUp} className="text-2xl text-gray-400 text-center mb-20">
            Four ways we help you reclaim revenue and rebuild alignment
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <div className="text-6xl font-bold text-[#E5C07B] mb-6">1</div>
              <h3 className="text-2xl font-bold mb-4">Stop the Leak</h3>
              <p className="text-gray-400 text-lg">Quantify execution drift and reclaim that 5–10% revenue.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <div className="text-6xl font-bold text-[#E5C07B] mb-6">2</div>
              <h3 className="text-2xl font-bold mb-4">Make AI Pay</h3>
              <p className="text-gray-400 text-lg">Apply Responsible-AI guardrails for real ROI.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <div className="text-6xl font-bold text-[#E5C07B] mb-6">3</div>
              <h3 className="text-2xl font-bold mb-4">Win the Capacity War</h3>
              <p className="text-gray-400 text-lg">Cut meeting/tool overload, redeploy hours to revenue work.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <div className="text-6xl font-bold text-[#E5C07B] mb-6">4</div>
              <h3 className="text-2xl font-bold mb-4">Match or Pass Peers</h3>
              <p className="text-gray-400 text-lg">Deploy the same Gen AI plays top performers use.</p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-10 py-7"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Book Your Audit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Methodology */}
      <section className="bg-white py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-5xl md:text-6xl font-bold text-black text-center mb-8">
            Our Approach
          </motion.h2>
          <motion.p {...fadeInUp} className="text-2xl text-gray-600 text-center mb-20">
            A proven methodology to transform your operations and empower your team
          </motion.p>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center">
              <div className="text-6xl font-bold text-black mb-6">01</div>
              <h3 className="text-2xl font-bold text-black mb-4">Audit</h3>
              <p className="text-lg text-gray-600">Deep analysis of your current marketing, sales, and communications operations to identify gaps and opportunities.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center">
              <div className="text-6xl font-bold text-black mb-6">02</div>
              <h3 className="text-2xl font-bold text-black mb-4">Optimize</h3>
              <p className="text-lg text-gray-600">Strategic implementation of AI-powered solutions and process improvements to maximize efficiency and results.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center">
              <div className="text-6xl font-bold text-black mb-6">03</div>
              <h3 className="text-2xl font-bold text-black mb-4">Train</h3>
              <p className="text-lg text-gray-600">Comprehensive coaching for your team on new systems, AI tools, and best practices for sustained success.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="text-center">
              <div className="text-6xl font-bold text-black mb-6">04</div>
              <h3 className="text-2xl font-bold text-black mb-4">Hand Off</h3>
              <p className="text-lg text-gray-600">Seamless transition to your empowered team with ongoing support as needed.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-32">
        <div className="section-padding max-w-5xl mx-auto text-center">
          <motion.h2 {...fadeInUp} className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p {...fadeInUp} className="text-2xl text-gray-400 mb-12">
            Limited availability for enterprise clients who are serious about leveraging AI to drive measurable results and sustainable growth.
          </motion.p>
          <motion.div {...fadeInUp}>
            <Button 
              size="lg"
              className="bg-[#E5C07B] hover:bg-[#E5C07B]/90 text-black font-semibold px-12 py-8 text-xl"
              onClick={() => window.open('https://calendar.app.google/rAZmF5kNNCsfMyBf7', '_blank')}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
