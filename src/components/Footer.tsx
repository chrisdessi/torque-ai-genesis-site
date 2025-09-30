
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-bold mb-4">
              Christopher Dessi
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md text-lg">
              Marketing, Sales & Communications Consultant specializing in AI integration
              for purpose-driven enterprises.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:chris@torqueapp.ai" className="hover:text-white transition-colors">
                  chris@torqueapp.ai
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">CONNECT</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a 
                  href="https://www.christopherdessi.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Website
                </a>
              </li>
              <li>
                <a 
                  href="mailto:chris@torqueapp.ai" 
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Christopher Dessi. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
