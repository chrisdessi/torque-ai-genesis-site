import { motion } from "framer-motion";

interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlay?: "dark" | "light" | "gradient" | "none";
  opacity?: number;
}

const VideoBackground = ({ 
  src, 
  className = "", 
  overlay = "dark",
  opacity = 0.4 
}: VideoBackgroundProps) => {
  const overlayStyles = {
    dark: "bg-gradient-to-b from-black/70 via-black/50 to-black/80",
    light: "bg-white/60",
    gradient: "bg-gradient-to-br from-blue-950/80 via-slate-900/70 to-black/90",
    none: ""
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.video
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: opacity, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </motion.video>
      {overlay !== "none" && (
        <div className={`absolute inset-0 ${overlayStyles[overlay]}`} />
      )}
    </div>
  );
};

export default VideoBackground;
