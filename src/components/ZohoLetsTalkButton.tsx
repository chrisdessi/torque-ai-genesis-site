import { ExternalLink } from "lucide-react";

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
  const formUrl = "https://idzlf-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc66b9ae&zx=1316ccdc8&tD=110489827e26e63c1&sD=110489827e2870991";

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
    <a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span>Let's Talk</span>
      <ExternalLink className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
    </a>
  );
};

export default ZohoLetsTalkButton;
