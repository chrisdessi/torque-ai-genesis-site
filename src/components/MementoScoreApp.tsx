import { useEffect, useRef } from 'react';

const MementoScoreApp = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.scoreapp.com/js/integration/v1/embedding.js?v=Df519V';
    script.async = true;
    
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      data-sa-url="https://ad6df08e-ad6f-47d3-85bd-2efc1f8f145f.scoreapp.com/?sa_target=_top" 
      data-sa-view="inline"
      data-sa-auto-height="1"
      style={{ maxWidth: '100%', width: '100%' }}
    />
  );
};

export default MementoScoreApp;
