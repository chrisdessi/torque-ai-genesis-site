import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollSpinLogo() {
  const { scrollYProgress } = useScroll();
  
  // Rotate 360 degrees per full page scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 w-16 h-16 opacity-30 hover:opacity-60 transition-opacity duration-300 pointer-events-none rounded-full overflow-hidden"
      style={{ rotate }}
    >
      <img 
        src="/lovable-uploads/85521d42-7840-4d81-b8ca-c002ab15932e.png" 
        alt="" 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
