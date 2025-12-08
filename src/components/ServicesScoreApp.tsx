import { useEffect, useRef } from 'react';

const ServicesScoreApp = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the ScoreApp script
    const script = document.createElement('script');
    script.src = 'https://static.scoreapp.com/js/integration/v1/embedding.js?v=qDILRQ';
    script.async = true;
    
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      data-sa-url="https://f4daca9d-7d53-4040-91d1-383e4d340ee7.scoreapp.com/?sa_target=_top" 
      data-sa-view="inline"
      data-sa-auto-height="1"
      style={{ maxWidth: '100%', width: '100%' }}
    />
  );
};

export default ServicesScoreApp;
