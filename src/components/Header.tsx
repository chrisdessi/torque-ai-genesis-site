import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import torqueLogo from "@/assets/torque-ai-logo.png";

interface NavItem {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems: NavItem[] = [
    { name: "How It Works", href: "/#how-it-works" },
    {
      name: "Services",
      children: [
        { name: "90-Day Reset", href: "/90-day" },
        { name: "Executive Audit", href: "/audit" },
        { name: "Platform", href: "/platform" },
      ],
    },
    {
      name: "Explore",
      children: [
        { name: "Events", href: "/events" },
        { name: "Memento", href: "/memento" },
        { name: "Insights", href: "/insights" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const renderNavItem = (item: NavItem) => {
    if (item.children) {
      return (
        <div key={item.name} className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
            className="flex items-center gap-1 text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            {item.name}
            <ChevronDown 
              size={14} 
              className={`transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} 
            />
          </button>
          <AnimatePresence>
            {openDropdown === item.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-zinc-200 py-2 z-50"
              >
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    to={child.href}
                    className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {child.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        key={item.name}
        to={item.href!}
        className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
      >
        {item.name}
      </Link>
    );
  };

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
          {navItems.map(renderNavItem)}
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
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-1">
                      <span className="block py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                        {item.name}
                      </span>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block py-2 pl-3 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      className="block py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
