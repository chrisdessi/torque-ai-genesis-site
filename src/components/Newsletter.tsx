import { motion } from "framer-motion";

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
          <div className="w-full max-w-2xl mx-auto">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
