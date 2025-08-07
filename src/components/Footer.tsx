
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4">
              TORQUE<span className="text-gray-400">AI</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Revolutionizing marketing through artificial intelligence. 
              Accelerate your growth and dominate your market with 
              cutting-edge AI solutions.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2" />
                info@torqueapp.ai
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">AI Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Optimization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Torque AI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
