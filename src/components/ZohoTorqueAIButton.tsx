import { Link } from 'react-router-dom';

export const ZohoTorqueAIButton = () => {
  return (
    <Link 
      to="/contact"
      className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
    >
      Learn More
    </Link>
  );
};
