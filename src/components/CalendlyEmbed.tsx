import { useEffect } from 'react';

interface CalendlyEmbedProps {
  title?: string;
  description?: string;
}

export const CalendlyEmbed = ({ 
  title = "Book a one on one meeting with Chris",
  description
}: CalendlyEmbedProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="section-padding bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div 
          className="calendly-inline-widget rounded-lg overflow-hidden shadow-lg" 
          data-url="https://calendly.com/chris-torqueapp/quantum-shift-starter-session" 
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
};
