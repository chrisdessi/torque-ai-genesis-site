import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Users, MessageSquare, Handshake, Target, Lightbulb, ArrowRight, ExternalLink, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const TooOldForThisShift = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const generations = [
    { name: "Gen Z", desc: "Digital natives with fresh perspectives", color: "from-cyan-500 to-blue-500" },
    { name: "Millennials", desc: "Bridge builders between eras", color: "from-purple-500 to-pink-500" },
    { name: "Gen X", desc: "Pragmatic leaders and adapters", color: "from-orange-500 to-red-500" },
    { name: "Boomers", desc: "Institutional knowledge holders", color: "from-emerald-500 to-teal-500" }
  ];

  const workshopModules = [
    {
      icon: MessageSquare,
      title: "Communication Styles",
      description: "Decode how each generation prefers to communicate and eliminate friction in daily interactions."
    },
    {
      icon: Target,
      title: "Shared Goals, Different Paths",
      description: "Align on outcomes while respecting diverse approaches to problem-solving."
    },
    {
      icon: Handshake,
      title: "Building Mutual Respect",
      description: "Create frameworks for appreciation that bridge experience gaps."
    },
    {
      icon: Lightbulb,
      title: "Innovation Meets Wisdom",
      description: "Harness fresh ideas alongside institutional knowledge for breakthrough results."
    }
  ];

  const outcomes = [
    "Reduced miscommunication and meeting churn",
    "Improved retention across all age groups",
    "Faster decision-making with diverse input",
    "Stronger team cohesion and collaboration",
    "Leaders who can flex across generational styles",
    "A culture that values both innovation and experience"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-inter">
      <SEO
        title="I'm Too Old for This Shift - Generational Gap Workshops"
        description="Bridge the generational divide in your workplace. Chris Dessi and Will Giangrande deliver workshops that transform friction into flow across Gen Z, Millennials, Gen X, and Boomers."
        keywords="generational gap workshops, workplace communication, multigenerational teams, Gen Z training, leadership development, NextGen Playbook, Chris Dessi"
        url="/partners/too-old-for-this-shift"
        type="website"
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 pt-28 pb-24 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/30 via-transparent to-transparent"></div>
        </div>
        
        {/* Animated connection lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"
              style={{
                width: '40%',
                left: `${10 + i * 15}%`,
                top: `${20 + i * 12}%`,
                transform: `rotate(${-15 + i * 8}deg)`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <motion.div 
          className="relative max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/40 mb-8">
            <Users className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Generational Gap Workshops</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            "I'm Too Old<br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">for This Shift"</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Five generations. One workplace. Zero playbook — until now.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            A collaborative workshop series by <strong className="text-white">Chris Dessi</strong> and <strong className="text-white">Will Giangrande</strong> that transforms generational friction into organizational flow.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Book a Workshop
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://thenextgenplaybook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold text-lg transition-all"
            >
              Visit NextGen Playbook
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">The Challenge</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Five Generations. One Workplace. Endless Misunderstandings.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                For the first time in history, five generations are sharing the same office floor. Each brings different values, communication styles, and expectations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The result? Friction that slows decisions, frustrates teams, and costs organizations talent and productivity.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {generations.map((gen, index) => (
                <motion.div
                  key={gen.name}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${gen.color} text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-1">{gen.name}</h3>
                    <p className="text-sm text-white/80">{gen.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">The Solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">From Friction to Flow</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our workshops don't just talk about generational differences — they build the frameworks and skills to bridge them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workshopModules.map((module, index) => (
              <motion.div
                key={module.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-indigo-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-6">
                  <module.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{module.title}</h3>
                <p className="text-slate-600">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Facilitators */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wide mb-2">Your Facilitators</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience Meets Innovation</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Two leaders. Two generations. One shared mission to transform how teams work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chris Dessi */}
            <motion.div
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  CD
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Chris Dessi</h3>
                  <p className="text-indigo-400">Torque AI | Executive Advisor</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Author, TV commentator, and the leader who personally closed over $100 million in enterprise deals. Chris brings decades of executive experience and a sharp understanding of what it takes to lead across changing landscapes.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium">
                Learn more about Chris <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Will Giangrande */}
            <motion.div
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                  WG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Will Giangrande</h3>
                  <p className="text-pink-400">The NextGen Playbook | Founder</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Creator of The NextGen Playbook, Will bridges the gap where career confidence meets generational understanding. His forward-thinking programs reduce friction, foster collaboration, and unlock performance across teams.
              </p>
              <a 
                href="https://thenextgenplaybook.com/about-2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium"
              >
                Visit NextGen Playbook <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">Workshop Outcomes</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What Changes After the Workshop
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our programs are built to reduce friction, foster collaboration, and unlock performance across teams — from entry-level hires to executive leadership.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{outcome}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">Who This Is For</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Built for Organizations Ready to Evolve</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "HR & People Leaders",
                description: "Looking to improve retention and culture across diverse teams."
              },
              {
                icon: Target,
                title: "Executive Teams",
                description: "Seeking to unlock performance and reduce internal friction."
              },
              {
                icon: Zap,
                title: "Growing Companies",
                description: "Building teams that span multiple generations and need alignment."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:border-indigo-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Handshake className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Bridge the Gap?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let's design a workshop tailored to your organization's unique generational dynamics. The best work happens when people truly connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-indigo-700 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
              >
                Book a Workshop
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="https://thenextgenplaybook.com/contact/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-white border-2 border-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Contact NextGen Playbook
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TooOldForThisShift;
