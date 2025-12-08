import { motion } from "framer-motion";

interface ZohoContactFormProps {
  className?: string;
  title?: string;
  description?: string;
}

const ZohoContactForm = ({ 
  className = "", 
  title,
  description
}: ZohoContactFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {(title || description) && (
        <div className="text-center mb-6">
          {title && <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>}
          {description && <p className="text-base text-muted-foreground max-w-2xl mx-auto">{description}</p>}
        </div>
      )}
      <div className="w-full">
        <iframe 
          aria-label="TORQUE AI" 
          frameBorder="0" 
          style={{ height: '700px', width: '100%', border: 'none' }} 
          src="https://forms.zohopublic.com/chris283/form/SimpleContactUs/formperma/fAQC0eeippMGIw07sbBkPm6eeu5OSEmylLzOgfF-4FA"
        />
      </div>
    </motion.div>
  );
};

export default ZohoContactForm;
