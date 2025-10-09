import { Mail, Phone, MapPin, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-bold mb-4">
              Torque AI
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md text-lg">
              Marketing, Sales and Communications Consulting specializing in AI integration,
              training and optimization for enterprise businesses.
            </p>
            <p className="text-gray-400 leading-relaxed max-w-md text-base italic">
              Torque AI helps leaders recover lost revenue, de-risk AI, and rebuild human alignment in an algorithmic world.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:info@torqueapp.ai" className="hover:text-white transition-colors">
                  info@torqueapp.ai
                </a>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a 
                  href="https://www.linkedin.com/in/chrisdessi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Chris Dessi on LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.youtube.com/playlist?list=PL1uIG3i2RBhHIqRMlUAaHP0NksIAdSzQ2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                  aria-label="The Quantum Shift Podcast on YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">CONNECT</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a 
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/enterprise-accelerator"
                  className="hover:text-white transition-colors"
                >
                  Enterprise AI Accelerator
                </a>
              </li>
              <li>
                <a 
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
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
              © {new Date().getFullYear()} Torque AI. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
