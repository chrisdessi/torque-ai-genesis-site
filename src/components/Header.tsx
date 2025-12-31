import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import torqueLogo from "@/assets/torque-ai-logo-new.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const academyLinks = [
    { name: "Torque Academy", href: "/partners/torque-academy" },
    { name: "Book Genius AI", href: "/partners/book-genius-ai" },
    { name: "Real Estate DataHub", href: "/partners/real-estate-datahub" },
    { name: "AI Summit NYC", href: "/partners/ai-summit-nyc" },
    { name: "Westchester AI Alliance", href: "/partners/westchester-ai-alliance" },
    { name: "Quantum Shift Summit", href: "/partners/quantum-shift-summit" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-slate-200" 
          : "bg-white border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img 
              src={torqueLogo} 
              alt="Torque AI" 
              className="h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#how-it-works"
              className="text-slate-900 hover:text-emerald-600 transition-colors"
            >
              How It Works
            </a>

            <a
              href="#strategy"
              className="text-slate-900 hover:text-emerald-600 transition-colors"
            >
              AI Strategy
            </a>

            <a
              href="#marketing"
              className="text-slate-900 hover:text-emerald-600 transition-colors"
            >
              AI Marketing Systems
            </a>

            <a
              href="#training"
              className="text-slate-900 hover:text-emerald-600 transition-colors"
            >
              Team Training
            </a>

            {/* Dropdown: Academy & Resources */}
            <div className="group relative cursor-pointer">
              <span className="text-slate-900 hover:text-emerald-600 transition-colors">
                Academy & Resources
              </span>

              {/* Dropdown Menu */}
              <div className="invisible absolute left-0 top-full z-[100] mt-2 w-56 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {academyLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <Link
            to="/ai-audit"
            className="hidden md:inline-flex rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 transition-colors"
          >
            Free AI Audit
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-slate-200 bg-white"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="py-4 space-y-1">
                <a
                  href="#how-it-works"
                  className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#strategy"
                  className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Strategy
                </a>
                <a
                  href="#marketing"
                  className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Marketing Systems
                </a>
                <a
                  href="#training"
                  className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team Training
                </a>
                
                <div className="px-4 py-2">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Academy & Resources</p>
                  <div className="space-y-1">
                    {academyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block py-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 px-4">
                  <Link 
                    to="/ai-audit"
                    className="block w-full text-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Free AI Audit
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
