import { Mail, Linkedin, Youtube, Phone } from "lucide-react";
import torqueLogo from "@/assets/torque-ai-logo-new.png";

const Footer = () => {
  return (
    <footer className="dark-section py-16 font-lexend">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img src={torqueLogo} alt="Torque AI" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/70 mb-4 max-w-md text-sm">
              Building the future through AI consulting, transparent leadership events, 
              and transformative content.
            </p>
            <p className="text-white/50 max-w-md text-xs italic">
              Helping leaders recover lost revenue, de-risk AI, and rebuild human alignment in an algorithmic world.
            </p>
            <div className="space-y-2 mt-4">
              <div className="flex items-center text-white/70 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+16467606991" className="hover:text-primary transition-colors">
                  +1 (646) 760-6991
                </a>
              </div>
              <div className="flex items-center text-white/70 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:chris@torqueapp.ai" className="hover:text-primary transition-colors">
                  chris@torqueapp.ai
                </a>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a 
                  href="https://www.linkedin.com/in/chrisdessi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-primary transition-colors"
                  aria-label="Chris Dessi on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-red-500 transition-colors"
                  aria-label="The Quantum Shift Podcast on YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Torque Division */}
          <div>
            <h4 className="text-sm font-bold mb-3 text-primary uppercase tracking-widest">Torque</h4>
            <p className="text-white/50 text-xs mb-2">AI Consulting</p>
            <ul className="space-y-1.5 text-white/70">
              <li>
                <a href="/torque" className="hover:text-primary transition-colors text-xs">
                  AI Strategy
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition-colors text-xs">
                  Consulting Services
                </a>
              </li>
              <li>
                <a href="/enterprise-accelerator" className="hover:text-primary transition-colors text-xs">
                  90-Day Accelerator
                </a>
              </li>
            </ul>
          </div>

          {/* Combined Memento & Quantum Shift */}
          <div>
            <div className="mb-5">
              <h4 className="text-sm font-bold mb-3 text-accent uppercase tracking-widest">Memento</h4>
              <p className="text-white/50 text-xs mb-2">Events & Software</p>
              <ul className="space-y-1.5 text-white/70">
                <li>
                  <a href="/memento-hub" className="hover:text-accent transition-colors text-xs">
                    Memento Overview
                  </a>
                </li>
                <li>
                  <a href="/momento-council" className="hover:text-accent transition-colors text-xs">
                    Council Dinners
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-accent transition-colors text-xs">
                    Offsite Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-sm font-bold mb-3 text-primary uppercase tracking-widest">The Quantum Shift</h4>
              <p className="text-white/50 text-xs mb-2">Podcast & Philosophy</p>
              <ul className="space-y-1.5 text-white/70">
                <li>
                  <a href="/quantum-shift" className="hover:text-primary transition-colors text-xs">
                    Philosophy
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xs">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="/quantum-shift/coach" className="hover:text-primary transition-colors text-xs">
                    Quantum Coach
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-primary transition-colors text-xs">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3 text-accent uppercase tracking-widest">Contact</h4>
              <ul className="space-y-1.5 text-white/70">
                <li>
                  <a href="/contact" className="hover:text-accent transition-colors text-xs">
                    Get In Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} Torque AI, Inc. All rights reserved.
            </p>
            <a href="#" className="text-primary hover:text-primary/80 text-xs font-bold">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
