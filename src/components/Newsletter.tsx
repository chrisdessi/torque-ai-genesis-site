import { motion } from "framer-motion";
import { ZohoTorqueAIForm } from "./ZohoTorqueAIForm";

const Newsletter = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-background py-20">
      <div className="section-padding max-w-4xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join Torque AI's Newsletter
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get exclusive AI insights, strategies, and innovation updates delivered directly to your inbox
          </p>
          <div className="w-full max-w-2xl mx-auto flex justify-center">
            <ZohoTorqueAIForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
