import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ZohoLetsTalkButton from "@/components/ZohoLetsTalkButton";
import ZohoContactForm from "@/components/ZohoContactForm";


import { motion } from "framer-motion";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";
import processDiscovery from "@/assets/process-discovery.jpg";
import processImplementation from "@/assets/process-implementation.jpg";
import processTraining from "@/assets/process-training.jpg";
import processResults from "@/assets/process-results.jpg";

// Testimonial images
import testimonial1 from "@/assets/testimonials-grid-1.webp";
import testimonial2 from "@/assets/testimonials-grid-2.webp";
import testimonial3 from "@/assets/testimonials-grid-3.webp";
import testimonial4 from "@/assets/testimonials-grid-4.webp";
import testimonial5 from "@/assets/testimonials-grid-5.webp";
import testimonial6 from "@/assets/testimonials-grid-6.webp";
import testimonial7 from "@/assets/testimonials-grid-7.webp";
import testimonial8 from "@/assets/testimonials-grid-8.webp";

const Torque = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Brain,
      title: "AI Strategy",
      description: "Comprehensive AI adoption roadmaps aligned with your business objectives and compliance requirements."
    },
    {
      icon: Zap,
      title: "AI Implementation",
      description: "End-to-end deployment of AI-powered solutions across marketing, sales, and communications."
    },
    {
      icon: Target,
      title: "Executive Briefings",
      description: "90-minute strategy sessions to align leadership and identify growth opportunities."
    },
    {
      icon: TrendingUp,
      title: "90-Day Accelerator",
      description: "Rapid implementation of AI-driven systems with measurable ROI in 90 days."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Torque AI - Strategic AI Implementation & Consulting"
        description="Torque AI delivers end-to-end AI strategy and implementation for enterprise businesses. From 90-minute executive briefings to 90-day accelerators with measurable ROI in marketing, sales, and communications."
        keywords="Torque AI, AI implementation, AI strategy, executive AI briefing, 90-day AI accelerator, AI consulting, enterprise AI transformation, AI business strategy, AI-driven marketing automation, enterprise technology solutions, AI revenue growth, business process automation, AI adoption roadmap, AI compliance framework"
        url="/torque"
      />
      <Header />
      
      {/* Hero Section with brand color */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 gradient-animate"></div>
        </div>
        <div className="section-padding w-full py-32 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Torque AI Consulting</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              AI Strategy &<br />Implementation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed">
              Transform your enterprise with strategic AI integration across sales, marketing, and communications.
              From executive alignment to measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <ZohoLetsTalkButton size="large" />
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border-white/30 font-semibold px-10 py-7 text-lg"
                onClick={() => window.location.href = '/enterprise-accelerator'}
              >
                View Solutions
              </Button>
            </div>
          </motion.div>

          {/* Media Logos - As Featured In */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <p className="text-sm text-white/60 uppercase tracking-wider mb-6">As Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
              <img src="/logos/forbes-logo.png" alt="Forbes" className="h-6 sm:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all" />
              <img src="/logos/cnn-logo.png" alt="CNN" className="h-6 sm:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all" />
              <img src="/logos/fox-logo.png" alt="Fox" className="h-6 sm:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all" />
              <img src="/logos/nbc-logo.png" alt="NBC" className="h-6 sm:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all" />
              <img src="/logos/cbs-logo.png" alt="CBS" className="h-6 sm:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all" />
              <img src="/logos/abc-logo.png" alt="ABC" className="h-6 sm:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all" />
              <img src="/logos/fortune-logo.png" alt="Fortune" className="h-6 sm:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Row 1 */}
      <section className="py-12 bg-white">
        <div className="section-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-black">What Clients Are Saying</h3>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[testimonial1, testimonial2, testimonial3, testimonial4].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <img src={img} alt={`Client testimonial ${i + 1}`} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              AI Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI transformation from strategy to execution
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Row 2 */}
      <section className="py-12 bg-white">
        <div className="section-padding max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[testimonial5, testimonial6, testimonial7, testimonial8].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <img src={img} alt={`Client testimonial ${i + 5}`} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Process Section */}
      <section className="bg-gray-50 py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to AI transformation that delivers measurable results
            </p>
          </motion.div>

          <div className="space-y-24">
            {/* Step 1 - Discovery */}
            <motion.div 
              {...fadeInUp}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full px-4 py-2 text-sm font-bold mb-4">
                  Step 1
                </div>
                <h3 className="text-4xl font-bold text-black mb-6">Discovery & Strategy</h3>
                <p className="text-lg text-gray-600 mb-6">
                  We begin by understanding your business objectives, challenges, and opportunities. Through comprehensive audits and stakeholder interviews, we identify high-impact AI use cases aligned with your goals.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Business process mapping and gap analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>AI readiness assessment and roadmap creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>ROI modeling and success metrics definition</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={processDiscovery} alt="AI Strategy Discovery Session" className="w-full h-auto" />
                </div>
              </div>
            </motion.div>

            {/* Step 2 - Implementation */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={processImplementation} alt="AI Implementation Development" className="w-full h-auto" />
                </div>
              </div>
              <div>
                <div className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full px-4 py-2 text-sm font-bold mb-4">
                  Step 2
                </div>
                <h3 className="text-4xl font-bold text-black mb-6">Implementation & Build</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our expert team deploys tailored AI solutions with precision. We build secure, scalable systems that integrate seamlessly with your existing technology stack and workflows.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Custom AI model development and integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Workflow automation and process optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Security, compliance, and data governance setup</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Step 3 - Training */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full px-4 py-2 text-sm font-bold mb-4">
                  Step 3
                </div>
                <h3 className="text-4xl font-bold text-black mb-6">Training & Enablement</h3>
                <p className="text-lg text-gray-600 mb-6">
                  We empower your team with the knowledge and skills needed to leverage AI effectively. Through hands-on workshops and ongoing support, we ensure lasting adoption and success.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Role-based training programs and workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Best practices documentation and playbooks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Change management and adoption strategies</span>
                  </li>
                </ul>
                
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={processTraining} alt="AI Training Workshop" className="w-full h-auto" />
                </div>
              </div>
            </motion.div>

            {/* Step 4 - Results */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={processResults} alt="AI Results and Analytics" className="w-full h-auto" />
                </div>
              </div>
              <div>
                <div className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full px-4 py-2 text-sm font-bold mb-4">
                  Step 4
                </div>
                <h3 className="text-4xl font-bold text-black mb-6">Measurement & Results</h3>
                <p className="text-lg text-gray-600 mb-6">
                  We track performance against defined KPIs and continuously optimize for maximum impact. Our data-driven approach ensures your AI investment delivers measurable business value.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Real-time performance dashboards and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Continuous optimization and model refinement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>ROI analysis and strategic recommendations</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="section-padding max-w-5xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Let's explore how AI can drive measurable results for your organization.
            </p>
            <ZohoLetsTalkButton size="large" />
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <ZohoContactForm 
            title="Get In Touch"
            description="Fill out the form below and we'll get back to you within 24 hours"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Torque;