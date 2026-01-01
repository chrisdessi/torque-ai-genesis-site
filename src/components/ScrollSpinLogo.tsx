import { motion, useScroll, useTransform } from "framer-motion";
import torqueLogo from "@/assets/torque-logo.svg";

export default function ScrollSpinLogo() {
  const { scrollYProgress } = useScroll();
  
  // Rotate 360 degrees per full page scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 w-16 h-16 opacity-30 hover:opacity-60 transition-opacity duration-300 pointer-events-none"
      style={{ rotate }}
    >
      <img 
        src={torqueLogo} 
        alt="" 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}
