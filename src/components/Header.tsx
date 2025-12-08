import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import torqueLogo from "@/assets/torque-ai-logo.png";
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

  const navigation = [
    { 
      name: "AI Audit", 
      href: "/ai-audit"
    },
    { 
      name: "Fast Track", 
      href: "/fast-track"
    },
    { 
      name: "Solutions", 
      href: "/solutions",
      subItems: [
        { name: "Revenue Engine", href: "/solutions/revenue-engine" },
        { name: "Workflow Automation", href: "/solutions/automation" },
        { name: "Marketing Systems", href: "/solutions/marketing" },
        { name: "Dashboards", href: "/solutions/dashboards" }
      ]
    },
    { 
      name: "Workshops", 
      href: "/workshops"
    },
    { 
      name: "Results", 
      href: "/results"
    },
    { 
      name: "About", 
      href: "/about"
    },
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200" 
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img 
              src={torqueLogo} 
              alt="Torque AI" 
              className="h-12 w-auto"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </Link>
                <AnimatePresence>
                  {item.subItems && openDropdown === item.name && (
                    <motion.div 
                      className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-xl py-2 z-[9999] pointer-events-auto"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {item.subItems.map((subItem) => (
                      subItem.href.startsWith('http') ? (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-sm text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all duration-200 font-medium"
                        >
                          {subItem.name}
                        </a>
                      ) : (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all duration-200 font-medium"
                        >
                          {subItem.name}
                        </Link>
                      )
                    ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              asChild 
              size="sm"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold"
            >
              <Link to="/contact">
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden border-t border-slate-200 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        subItem.href.startsWith('http') ? (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-xs text-slate-500 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-xs text-slate-500 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4 space-y-2">
                <Button 
                  asChild 
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
