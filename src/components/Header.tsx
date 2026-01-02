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
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b font-lexend ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-border" 
          : "bg-background border-border"
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
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
            <a
              href="#how-it-works"
              className="text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </a>

            <a
              href="#pillars"
              className="text-foreground hover:text-primary transition-colors"
            >
              AI Strategy
            </a>

            <a
              href="#programs"
              className="text-foreground hover:text-primary transition-colors"
            >
              AI Marketing Systems
            </a>

            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>

            {/* Dropdown: Academy & Resources */}
            <div className="group relative cursor-pointer">
              <span className="text-foreground hover:text-primary transition-colors">
                Academy & Resources
              </span>

              {/* Dropdown Menu */}
              <div className="invisible absolute left-0 top-full z-[100] mt-2 w-56 rounded-lg border border-border bg-background p-3 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {academyLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
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
            className="hidden md:inline-flex rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            Free AI Audit
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-border bg-background"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="py-4 space-y-1">
                <a
                  href="#how-it-works"
                  className="block px-4 py-2 text-sm font-bold text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#pillars"
                  className="block px-4 py-2 text-sm font-bold text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Strategy
                </a>
                <a
                  href="#programs"
                  className="block px-4 py-2 text-sm font-bold text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Marketing Systems
                </a>
                <a
                  href="#about"
                  className="block px-4 py-2 text-sm font-bold text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                
                <div className="px-4 py-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Academy & Resources</p>
                  <div className="space-y-1">
                    {academyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
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
                    className="block w-full text-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
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
