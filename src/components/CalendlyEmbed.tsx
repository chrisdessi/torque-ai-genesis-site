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
    <div className="section-padding py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div 
          className="calendly-inline-widget rounded-lg overflow-hidden shadow-lg bg-slate-800" 
          data-url="https://calendly.com/chris-torqueapp/30min?primary_color=0ea5e9" 
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
};
