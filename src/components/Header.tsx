import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import torqueLogo from "@/assets/torque-ai-logo.png";

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

  const navLinks = [
    { name: "How It Works", href: "/#how-it-works" },
    { name: "90-Day Reset", href: "/90-day" },
    { name: "Executive Audit", href: "/audit" },
    { name: "Platform", href: "/platform" },
    { name: "Events", href: "/events" },
    { name: "Memento", href: "/memento" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm border-zinc-200" 
          : "bg-white/80 backdrop-blur border-zinc-200"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={torqueLogo} alt="Torque AI" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/audit"
            className="rounded-full bg-success px-4 py-2 text-sm font-medium text-white hover:bg-success/90 transition-colors"
          >
            Start Here
          </Link>
        </nav>

        {/* Mobile CTA + Menu */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            to="/audit"
            className="rounded-full bg-success px-4 py-2 text-sm font-medium text-white hover:bg-success/90 transition-colors"
          >
            Start
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden border-t border-zinc-200 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="py-4 space-y-1 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
