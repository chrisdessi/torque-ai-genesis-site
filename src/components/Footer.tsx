import { Mail, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-bold mb-4">
              Torque AI, Inc.
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md text-lg">
              Building the future through AI consulting, transparent leadership events, 
              and transformative content.
            </p>
            <p className="text-gray-400 leading-relaxed max-w-md text-base italic">
              Helping leaders recover lost revenue, de-risk AI, and rebuild human alignment in an algorithmic world.
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
                  href="https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_"
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

          {/* Torque Division */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400">TORQUE</h4>
            <p className="text-gray-400 text-sm mb-3">AI Consulting</p>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/torque" className="hover:text-white transition-colors text-sm">
                  AI Strategy
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors text-sm">
                  Consulting Services
                </a>
              </li>
              <li>
                <a href="/enterprise-accelerator" className="hover:text-white transition-colors text-sm">
                  90-Day Accelerator
                </a>
              </li>
            </ul>
          </div>

          {/* Combined Memento & Quantum Shift */}
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-4 text-green-400">MEMENTO</h4>
              <p className="text-gray-400 text-sm mb-3">Events & Software</p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/memento-hub" className="hover:text-white transition-colors text-sm">
                    Memento Overview
                  </a>
                </li>
                <li>
                  <a href="/momento-council" className="hover:text-white transition-colors text-sm">
                    Council Dinners
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-white transition-colors text-sm">
                    Offsite Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-4 text-purple-400">THE QUANTUM SHIFT</h4>
              <p className="text-gray-400 text-sm mb-3">Podcast & Philosophy</p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/quantum-shift" className="hover:text-white transition-colors text-sm">
                    Philosophy
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="/quantum-shift/coach" className="hover:text-white transition-colors text-sm">
                    Quantum Coach
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors text-sm">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-400">CONTACT</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/contact" className="hover:text-white transition-colors text-sm">
                    Get In Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stripe Pricing Table */}
        <div className="border-t border-gray-800 pt-12 mb-8">
          <stripe-pricing-table 
            pricing-table-id="prctbl_1SQ9v7G7cympBc4IoqBe5mIF"
            publishable-key="pk_live_51Qn6VFG7cympBc4IA08eEyFC0UcNTBmHxl4SvxBr2nQugXsezKLcEiKdEcmdeTLxbYNQIXnhnrXtHNTvoribSpV700GFoEAA3a">
          </stripe-pricing-table>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Torque AI, Inc. All Rights Reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="text-blue-400">Torque</span>
              <span className="text-gray-600">•</span>
              <span className="text-green-400">Memento</span>
              <span className="text-gray-600">•</span>
              <span className="text-purple-400">The Quantum Shift</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
