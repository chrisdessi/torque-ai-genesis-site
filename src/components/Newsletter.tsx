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
            Join Chris's Newsletter
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get exclusive insights, strategies, and stories delivered directly to your inbox
          </p>
          <div className="w-full max-w-2xl mx-auto">
            <iframe 
              src="https://embeds.beehiiv.com/ed4d369b-b9a6-4dfc-9698-32ed638ae5f9?slim=true" 
              data-test-id="beehiiv-embed" 
              height="52" 
              frameBorder="0" 
              scrolling="no"
              style={{ margin: 0, borderRadius: '0px !important', backgroundColor: 'transparent' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
