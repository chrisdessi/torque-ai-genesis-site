import { ExternalLink } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ZohoLetsTalkButtonProps {
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "large";
}

const ZohoLetsTalkButton = ({ 
  className = "", 
  variant = "default",
  size = "default"
}: ZohoLetsTalkButtonProps) => {
  const [open, setOpen] = useState(false);

  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-lg cursor-pointer transition-all duration-200 text-center";
  
  const variantStyles = {
    default: "bg-[rgb(79,211,158)] hover:bg-[rgb(60,180,135)] text-white border border-[rgb(79,211,158)]",
    outline: "bg-transparent hover:bg-[rgb(79,211,158)] text-[rgb(79,211,158)] hover:text-white border-2 border-[rgb(79,211,158)]"
  };

  const sizeStyles = {
    default: "text-lg px-6 py-3",
    large: "text-2xl px-8 py-4"
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
          <span>Let's Talk</span>
          <ExternalLink className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Let's Talk</DialogTitle>
        </DialogHeader>
        <div className="w-full">
          <iframe 
            aria-label="TORQUE AI" 
            frameBorder="0" 
            style={{ height: '500px', width: '100%', border: 'none' }} 
            src="https://forms.zohopublic.com/chris283/form/SimpleContactUs/formperma/fAQC0eeippMGIw07sbBkPm6eeu5OSEmylLzOgfF-4FA"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ZohoLetsTalkButton;
