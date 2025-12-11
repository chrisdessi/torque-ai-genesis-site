import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Home, TrendingUp, Target, BarChart3, Upload, Brain, ArrowRight, ExternalLink, Check } from "lucide-react";

const RealEstateDataHub = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const steps = [
    {
      icon: Upload,
      title: "Upload Your Data",
      description: "Import your client lists, transaction history, and property data securely to our platform."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Our AI analyzes your data alongside Zillow API and MLS data to uncover hidden opportunities."
    },
    {
      icon: Target,
      title: "Targeted Marketing",
      description: "Get data-driven marketing strategies or let our Torque AI experts implement them for you."
    }
  ];

  const reports = [
    {
      title: "Market Analytics Dashboard",
      description: "Real-time market trends, pricing analysis, and neighborhood insights at your fingertips."
    },
    {
      title: "AI-Powered Insights Report",
      description: "Personalized recommendations based on your specific client base and transaction history."
    },
    {
      title: "Predictive Modeling Suite",
      description: "Forecast trends, optimize pricing strategies, and identify high-value prospects."
    }
  ];

  const testimonials = [
    {
      quote: "The insights from Real Estate DataHub helped me increase my marketing ROI by 340%. Game changer.",
      name: "Jennifer Martinez",
      title: "Top Producer, Westchester County"
    },
    {
      quote: "Finally, a platform that turns my client data into actionable marketing strategies.",
      name: "Robert Chen",
      title: "Luxury Specialist, NYC"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-inter">
      <SEO
        title="Real Estate DataHub - Turn Your Data Into Marketing Gold"
        description="AI-powered real estate analytics that transforms your client data, transactions, and market intelligence into targeted marketing strategies."
        keywords="real estate marketing, realtor data, AI analytics, MLS data, Zillow integration, real estate leads"
        url="/partners/real-estate-datahub"
        type="website"
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-28 pb-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/40 via-transparent to-transparent"></div>
        </div>

        <motion.div 
          className="relative max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
            <Home className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-700">Real Estate Intelligence Platform</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
            Turn Your Real Estate<br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Data Into Marketing Gold</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Leverage your client data, property transactions, and market intelligence to create AI-powered marketing strategies that drive results.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://realtor-easy-button.lovable.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Analyze Your Data
              <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="https://realtor-easy-button.lovable.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-300 hover:border-amber-500 text-slate-700 hover:text-amber-700 rounded-xl font-semibold text-lg transition-all"
            >
              See Sample Reports
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">From Data to Deals in 3 Steps</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Turn your existing real estate data into targeted marketing campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 mt-2">
                  <step.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2">Comprehensive Reports</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Your Data Reveals Everything</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get actionable insights from every piece of data you provide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <motion.div
                key={report.title}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BarChart3 className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{report.title}</h3>
                <p className="text-slate-600 leading-relaxed">{report.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2">Real Results</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What Agents Are Saying</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-amber-500 text-4xl mb-4">"</div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <TrendingUp className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Maximize Your Marketing ROI?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join top-producing agents who are using data-driven marketing to close more deals.
          </p>
          <a 
            href="https://realtor-easy-button.lovable.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-amber-700 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
          >
            Get Started with Real Estate DataHub
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstateDataHub;
