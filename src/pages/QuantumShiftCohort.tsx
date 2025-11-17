import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ZohoQuantumShiftForm from "@/components/ZohoQuantumShiftForm";

const QuantumShiftCohort = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const problemPoints = [
    "You feel like you're living on autopilot, checking boxes instead of following your calling.",
    "You've achieved things on paper, but deep down you know something's missing.",
    "You sense you're out of alignment, but you can't name exactly what feels \"off.\"",
    "You fill your days with busy work, but at night you wonder what it's all for.",
    "You long for deeper meaning, but you're unsure where to begin.",
    "You've tried quick fixes, but nothing seems to create lasting change.",
    "You know you're meant for more—but fear, doubt, or overwhelm keeps you stuck."
  ];

  const whatWeDo = [
    "Pinpoint the beliefs and patterns that keep you stuck",
    "Break them down with proven tools and practices",
    "Build rituals that create clarity, calm, and courage",
    "Design a vision and a 90-day plan aligned with your true self",
    "Anchor new habits so change lasts beyond the course"
  ];

  const whatYouGet = [
    "A life that feels lighter, calmer, and aligned with your deepest values",
    "Clarity on your purpose and next chapter",
    "Spiritual tools you can return to any time stress or doubt creeps in",
    "A supportive community walking the same path",
    "A renewed sense of possibility—you're not drifting, you're directing"
  ];

  const frameworkIncludes = [
    { title: "Courses", description: "bite-sized programs for clarity, calm, and reinvention" },
    { title: "Workshops", description: "live, interactive sessions with practical tools you can use immediately" },
    { title: "Community", description: "a global network of people committed to growth and awakening" },
    { title: "Events", description: "immersive retreats and gatherings designed to accelerate your shift" },
    { title: "Podcasts", description: "conversations with thought leaders, teachers, and seekers" },
    { title: "Masterminds", description: "small group intensives for deep personal transformation" },
    { title: "VIP Experiences", description: "private reinvention days and coaching for those ready to go all in" }
  ];

  const forYouIf = [
    "You've built a life that looks fine on the outside, but inside you feel restless and unfulfilled.",
    "You keep repeating the same patterns—relationships, habits, choices—that never lead to real change.",
    "You feel the cracks: stress, burnout, or emptiness creeping in, even when things \"should\" feel good.",
    "You know you're meant for more, but fear, doubt, or overwhelm keeps you stuck."
  ];

  const notForYouIf = [
    "You're comfortable staying on autopilot and don't want to question old patterns.",
    "You're chasing quick fixes, hacks, or shortcuts instead of real transformation.",
    "You resist change, even when you know your current path isn't working.",
    "You're looking for surface-level inspiration but aren't willing to do the inner work."
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="The 90-Day Quantum Shift Cohort - Transform Your Life"
        description="Not a course. An intervention. Join the 90-Day Quantum Shift Cohort to break old cycles, realign with your purpose, and step into the life you're meant to live."
        keywords="quantum shift, personal transformation, life coaching, spiritual growth, 90-day program, Chris Dessi"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.1),transparent_50%)]" />
        
        <motion.div 
          className="relative z-10 container mx-auto px-4 py-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            {...fadeInUp}
          >
            The 90-Day Quantum Shift Cohort
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-4xl mb-12 text-muted-foreground"
            {...fadeInUp}
          >
            You're Not Broken.
          </motion.h2>

          {/* Video Placeholder */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/50 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-foreground border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-muted-foreground">11:46 Video</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Does This Sound Like You */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              {...fadeInUp}
            >
              Does This Sound Like You?
            </motion.h2>
            
            <div className="space-y-4 mb-8">
              {problemPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg text-foreground">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-xl text-center text-muted-foreground italic"
              variants={fadeInUp}
            >
              If any of this resonates—you're not broken, and you're not alone. You're standing at the doorway of your Quantum Shift.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* This is Not a Course */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-12"
              {...fadeInUp}
            >
              This is Not a Course. <br />
              This is an <span className="text-primary italic">Intervention.</span>
            </motion.h2>

            <motion.h3 
              className="text-3xl font-bold mb-6"
              {...fadeInUp}
            >
              You're Not Crazy — It <span className="italic">is</span> harder than it should be.
            </motion.h3>

            <motion.div 
              className="space-y-6 text-lg text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              <p>The cracks you're noticing in your life? They're real.</p>
              <p>And if you ignore them—they'll cost you your peace, your relationships, or your sense of purpose.</p>
              <p className="font-semibold text-foreground">It doesn't have to be this way.</p>
              <p>I'll give you the guidance, tools, and support to break old cycles and realign with who you truly are.</p>
              <p>Whether you're a high achiever who feels empty, or someone quietly wondering if this is all life has to offer...</p>
              <p className="text-2xl font-bold text-foreground">It ends here.</p>
              <p>I don't patch over the pain. I cut to the root—so you can release what's not working and step fully into alignment.</p>
            </motion.div>

            <motion.h3 
              className="text-3xl font-bold mb-8 text-primary"
              {...fadeInUp}
            >
              Tear Down. Realign. Rise. Without Burning Out.
            </motion.h3>

            <motion.p 
              className="text-lg text-muted-foreground mb-12"
              {...fadeInUp}
            >
              You could spend years repeating the same patterns, reading the same books, trying quick fixes that don't stick. Or you can step into a guided process I've lived myself—rooted in spiritual practices, personal reinvention, and a community that lifts you higher.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What We Do & What You Get */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-8">Here's what we do:</h3>
              <div className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-8">Here's what you get:</h3>
              <div className="space-y-4">
                {whatYouGet.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-muted-foreground mb-8">
              This isn't theory. It's a lived, tested process designed to awaken you and move you forward, starting from day one.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Join the Waitlist</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* You Don't Need a Guru */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-4"
              {...fadeInUp}
            >
              You Don't Need a <span className="italic text-muted-foreground">Guru</span>.
            </motion.h2>
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-12 text-primary"
              {...fadeInUp}
            >
              You Need a <span className="italic">Fixer</span>.
            </motion.h2>

            <motion.h3 
              className="text-3xl font-bold mb-8"
              {...fadeInUp}
            >
              Not a Guru. Just the Guy Who Burned It Down and Rebuilt His Life.
            </motion.h3>

            <motion.div 
              className="space-y-6 text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              <p>In the Summer of 2025, I hit a wall.</p>
              <p>On the outside? Success. Books published. Media appearances. A shiny career in tech and marketing.</p>
              <p>Behind the scenes? Chaos.</p>
              <p className="font-semibold text-foreground">So I did the only thing that made sense.</p>
              <p className="font-semibold text-foreground">I tore it all down.</p>
              <p>I walked away from the career I had built, and in the rubble I asked the hardest question of my life: <span className="italic font-semibold text-foreground">Who am I, really—and what am I here to do?</span></p>
              <p>That question cracked me open. It led me to the practices, teachers, and tools that became my lifeline: meditation, journaling, breathwork, alignment rituals. Slowly, I rebuilt—not my old life, but an entirely new way of being.</p>
              <p className="text-xl font-bold text-foreground">What emerged is The Quantum Shift—a framework for awakening and reinvention. Not theory. Not guru-speak. Just the lived, battle-tested process of someone who's been through the fire and came out clearer, calmer, and more aligned.</p>
              <p>Because here's the truth: if you're holding it together with duct tape—ignoring the cracks in your relationships, your work, or your soul—no quick fix will save you.</p>
              <p className="font-semibold text-foreground">You don't need more noise. You need a system for realignment. A process to release what's broken and rebuild from the inside out.</p>
              <p>Now, I bring that process to people like you—those ready to stop patching and start living in alignment.</p>
            </motion.div>

            <motion.div className="mt-12" variants={fadeInUp}>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">Join the Waitlist</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-center mb-8"
              {...fadeInUp}
            >
              Introducing The Quantum Shift Framework
            </motion.h2>

            <motion.p 
              className="text-xl text-center text-muted-foreground mb-12"
              {...fadeInUp}
            >
              The <span className="font-bold text-primary">Quantum Shift</span> shows you how to let go of what no longer serves you, uncover the practices that truly create transformation, and rebuild your life with clarity, alignment, and purpose.
            </motion.p>

            <motion.p 
              className="text-lg text-center text-muted-foreground mb-12"
              {...fadeInUp}
            >
              It's the framework behind countless personal breakthroughs—now available to you through guided programs, live experiences, and a global community of seekers walking the same path.
            </motion.p>

            <motion.h3 
              className="text-2xl font-bold text-center mb-8"
              {...fadeInUp}
            >
              Inside, you'll have access to:
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {frameworkIncludes.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                  variants={fadeInUp}
                >
                  <h4 className="text-xl font-bold mb-2 text-primary">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center p-6 bg-primary/10 rounded-lg border-2 border-primary/30 mb-8"
              variants={fadeInUp}
            >
              <p className="text-lg">
                👉 <span className="italic">This isn't theory. It's a lived process—tested through fire, refined through practice, and shared with a community that will support you every step of the way.</span>
              </p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">Join the Waitlist</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For You If / Not For You If */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              className="p-8 bg-card rounded-2xl border-2 border-primary/30 shadow-xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-primary">This Is For You If…</h3>
              <div className="space-y-4">
                {forYouIf.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg font-semibold">
                If that's you—you're not broken, you're just ready for your <span className="text-primary">Quantum Shift</span>.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-card rounded-2xl border-2 border-muted shadow-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-muted-foreground">This Is <span className="italic">Not</span> For You If…</h3>
              <div className="space-y-4">
                {notForYouIf.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg font-semibold text-muted-foreground">
                If that's where you are, this probably isn't your moment. But if you're ready to step into deeper alignment—your <span className="text-primary">Quantum Shift</span> is waiting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Quantum Shift?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the waitlist today and be the first to know when the next cohort opens.
            </p>
            <ZohoQuantumShiftForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumShiftCohort;
