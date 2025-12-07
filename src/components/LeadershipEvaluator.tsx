import { useEffect, useRef } from 'react';

const LeadershipEvaluator = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the ScoreApp script
    const script = document.createElement('script');
    script.src = 'https://static.scoreapp.com/js/integration/v1/embedding.js?v=VFnpjs';
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
      data-sa-url="https://b094f0b0-2633-4714-93dc-38a4d66414c9.scoreapp.com/?sa_target=_top" 
      data-sa-view="inline"
      data-sa-auto-height="1"
      style={{ maxWidth: '100%', width: '100%' }}
    />
  );
};

export default LeadershipEvaluator;
