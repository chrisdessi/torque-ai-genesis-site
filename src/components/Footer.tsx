import { Mail, Linkedin, Youtube, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-800 py-12 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black mb-3 text-slate-900">
              Torque AI, Inc.
            </h3>
            <p className="text-slate-600 mb-4 max-w-md text-sm">
              Building the future through AI consulting, transparent leadership events, 
              and transformative content.
            </p>
            <p className="text-slate-500 max-w-md text-xs italic">
              Helping leaders recover lost revenue, de-risk AI, and rebuild human alignment in an algorithmic world.
            </p>
            <div className="space-y-2 mt-4">
              <div className="flex items-center text-slate-600 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+16467606991" className="hover:text-sky-600 transition-colors">
                  +1 (646) 760-6991
                </a>
              </div>
              <div className="flex items-center text-slate-600 text-sm">
              <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@torqueapp.ai" className="hover:text-sky-600 transition-colors">
                  info@torqueapp.ai
                </a>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a 
                  href="https://www.linkedin.com/in/chrisdessi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-sky-600 transition-colors"
                  aria-label="Chris Dessi on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-red-500 transition-colors"
                  aria-label="The Quantum Shift Podcast on YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Torque Division */}
          <div>
            <h4 className="text-sm font-bold mb-3 text-sky-600 uppercase tracking-wider">Torque</h4>
            <p className="text-slate-500 text-xs mb-2">AI Consulting</p>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <a href="/torque" className="hover:text-sky-600 transition-colors text-xs">
                  AI Strategy
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-sky-600 transition-colors text-xs">
                  Consulting Services
                </a>
              </li>
              <li>
                <a href="/enterprise-accelerator" className="hover:text-sky-600 transition-colors text-xs">
                  90-Day Accelerator
                </a>
              </li>
            </ul>
          </div>

          {/* Combined Memento & Quantum Shift */}
          <div>
            <div className="mb-5">
              <h4 className="text-sm font-bold mb-3 text-emerald-600 uppercase tracking-wider">Memento</h4>
              <p className="text-slate-500 text-xs mb-2">Events & Software</p>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <a href="/memento-hub" className="hover:text-emerald-600 transition-colors text-xs">
                    Memento Overview
                  </a>
                </li>
                <li>
                  <a href="/momento-council" className="hover:text-emerald-600 transition-colors text-xs">
                    Council Dinners
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-emerald-600 transition-colors text-xs">
                    Offsite Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-sm font-bold mb-3 text-violet-600 uppercase tracking-wider">The Quantum Shift</h4>
              <p className="text-slate-500 text-xs mb-2">Podcast & Philosophy</p>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <a href="/quantum-shift" className="hover:text-violet-600 transition-colors text-xs">
                    Philosophy
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors text-xs">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="/quantum-shift/coach" className="hover:text-violet-600 transition-colors text-xs">
                    Quantum Coach
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-violet-600 transition-colors text-xs">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3 text-orange-600 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <a href="/contact" className="hover:text-orange-600 transition-colors text-xs">
                    Get In Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Torque AI, Inc. All rights reserved.
            </p>
            <a href="#" className="text-sky-600 hover:text-sky-700 text-xs underline underline-offset-4">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
