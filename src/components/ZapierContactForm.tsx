import { motion } from "framer-motion";

interface ZapierContactFormProps {
  className?: string;
  title?: string;
  description?: string;
}

const ZapierContactForm = ({ 
  className = "", 
  title = "Get In Touch",
  description = "Fill out the form below and we'll get back to you within 24 hours"
}: ZapierContactFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {(title || description) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
          {description && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
        </div>
      )}
      <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <iframe
          src="https://contact-form-aaeb36.zapier.app/"
          className="w-full h-[600px] border-0"
          title="Contact Form"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default ZapierContactForm;
