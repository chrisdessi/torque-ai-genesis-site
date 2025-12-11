import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Trophy, Lightbulb, Bot, BookOpen, ArrowRight, ExternalLink } from "lucide-react";

const TorqueAcademy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const features = [
    {
      icon: GraduationCap,
      title: "Personalized Learning",
      description: "Customized learning paths based on your skill level, interests, and goals."
    },
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description: "Engage with content through interactive lessons designed for non-technical learners."
    },
    {
      icon: Trophy,
      title: "Gamified Experience",
      description: "Earn points, badges, and track your progress with our engaging gamification elements."
    },
    {
      icon: Lightbulb,
      title: "Practical Examples",
      description: "Real-world applications and case studies that demonstrate AI in action."
    },
    {
      icon: Bot,
      title: "AI Tutor",
      description: "Get real-time help and explanations from our intelligent AI tutoring system."
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Connect with fellow learners and share insights in our active community."
    }
  ];

  const testimonials = [
    {
      quote: "I've always been intimidated by AI, but Torque Academy makes it accessible and engaging. The personalized approach is exactly what I needed.",
      name: "Sarah Johnson",
      title: "Marketing Director"
    },
    {
      quote: "As a business leader, understanding AI is crucial. This platform helped me grasp the concepts without getting lost in technical jargon.",
      name: "Michael Chen",
      title: "CEO, TechVentures"
    },
    {
      quote: "The interactive lessons and gamification make learning enjoyable. I look forward to my daily AI lessons!",
      name: "Emily Rodriguez",
      title: "Project Manager"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-inter">
      <SEO
        title="Torque Academy - Master AI, Transform Your Career"
        description="Personalized AI coaching designed for professionals. From fundamentals to advanced applications—without needing a technical background."
        keywords="AI training, AI education, professional development, AI coaching, machine learning, career transformation"
        url="/partners/torque-academy"
        type="website"
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-28 pb-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200/40 via-transparent to-transparent"></div>
        </div>

        <motion.div 
          className="relative max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 mb-6">
            <GraduationCap className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-medium text-sky-700">AI-Powered Learning Platform</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
            Master AI.<br />
            <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">Transform Your Career.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Personalized AI coaching designed for professionals. From fundamentals to advanced applications—without needing a technical background.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.torqueacademy.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Start Learning Now
              <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="https://www.torqueacademy.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-300 hover:border-sky-500 text-slate-700 hover:text-sky-700 rounded-xl font-semibold text-lg transition-all"
            >
              Take the AI Quiz
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-500">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span>AI-Powered</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-sky-500 rounded-full"></span>Interactive Learning</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Fast Results</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-sky-600 uppercase tracking-wide mb-2">Why Choose Torque Academy</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Features Designed for You</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to understand and apply AI concepts in your professional life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-sky-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-2">What People Say</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Trusted by Professionals</h2>
            <p className="text-lg text-slate-600">
              Hear from professionals who have transformed their understanding of AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-sky-500 text-4xl mb-4">"</div>
                <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.quote}</p>
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
      <section className="py-20 bg-gradient-to-r from-sky-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your AI Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of professionals who are enhancing their careers with AI knowledge. No technical background required.
          </p>
          <a 
            href="https://www.torqueacademy.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-sky-700 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
          >
            Get Started at Torque Academy
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TorqueAcademy;
