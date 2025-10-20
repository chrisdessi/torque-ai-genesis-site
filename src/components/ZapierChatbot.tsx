import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zapier-interfaces-chatbot-embed': {
        'is-popup'?: string;
        'chatbot-id'?: string;
        height?: string;
        width?: string;
      };
    }
  }
}

const ZapierChatbot = () => {
  useEffect(() => {
    // Ensure the web component is loaded
    if (!customElements.get('zapier-interfaces-chatbot-embed')) {
      console.log('Waiting for Zapier chatbot web component to load...');
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 hidden md:block">
      <zapier-interfaces-chatbot-embed
        is-popup="false"
        chatbot-id="cmgtrsqly002qbdrsdl75fzba"
        height="600px"
        width="400px"
      />
    </div>
  );
};

export default ZapierChatbot;
