import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BookOpen, TrendingUp, Megaphone, FileText, BarChart3, Rocket, ArrowRight, ExternalLink, Check } from "lucide-react";

const BookGeniusAI = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const steps = [
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "We analyze your niche to identify profitable opportunities and validate your eBook idea with data-driven insights."
    },
    {
      icon: FileText,
      title: "eBook Creation",
      description: "AI-generated content with professional formatting, cover design, and optimization for maximum reader engagement."
    },
    {
      icon: Megaphone,
      title: "Marketing Platform",
      description: "Automated campaigns, social media scheduling, email marketing, and Amazon ads optimization all in one place."
    }
  ];

  const features = [
    "AI-powered content generation",
    "Professional eBook formatting",
    "Cover design assistance",
    "Amazon KDP optimization",
    "Social media automation",
    "Email marketing campaigns",
    "Revenue tracking dashboard",
    "Market opportunity scoring"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-inter">
      <SEO
        title="Book Genius AI - Turn Your Ideas Into Profitable eBooks"
        description="From idea validation to marketing—Book Genius AI provides everything you need to create and sell profitable eBooks with AI-powered tools."
        keywords="eBook creation, AI writing, book marketing, self-publishing, Amazon KDP, AI author tools"
        url="/partners/book-genius"
        type="website"
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-28 pb-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-200/40 via-transparent to-transparent"></div>
        </div>

        <motion.div 
          className="relative max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">AI-Powered eBook Platform</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
            Turn Your Ideas Into<br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Profitable eBooks</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            From idea validation to marketing—your complete success path. Book Genius AI provides everything you need to create, publish, and sell profitable eBooks.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://bookgenius.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Start Creating Your eBook
              <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="https://bookgenius.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-300 hover:border-purple-500 text-slate-700 hover:text-purple-700 rounded-xl font-semibold text-lg transition-all"
            >
              Get Free Discovery Report
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Your Complete eBook Success Path</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three simple steps from idea to income
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 mt-2">
                  <step.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">Everything You Need</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Powerful Features for Authors</h2>
              <p className="text-lg text-slate-600 mb-8">
                Book Genius AI combines market intelligence, AI writing, and marketing automation into one comprehensive platform.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-purple-600" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-10 text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-12 h-12 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Revenue Potential</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Our market analysis tools help you identify high-opportunity niches with strong revenue potential. Get data-driven insights on market opportunity scores, competition levels, and projected earnings.
              </p>
              <a 
                href="https://bookgenius.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
              >
                Explore Your Market Opportunity
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Rocket className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Become a Published Author?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join authors who are turning their expertise into profitable eBooks with AI-powered tools.
          </p>
          <a 
            href="https://bookgenius.ai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-purple-700 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
          >
            Get Started at Book Genius AI
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookGeniusAI;
