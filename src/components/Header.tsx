
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import torqueLogo from "@/assets/torque-ai-logo-white.png";
import { motion } from "framer-motion";

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
      name: "Torque", 
      href: "/torque",
      subItems: [
        { name: "AI Consulting", href: "/torque" },
        { name: "AI Strategy Guide", href: "/torque-ai-guide" },
        { name: "Services", href: "/services" },
        { name: "90-Day Accelerator", href: "/enterprise-accelerator" }
      ]
    },
    { 
      name: "Memento", 
      href: "/memento-hub",
      subItems: [
        { name: "Overview", href: "/memento-hub" },
        { name: "Council Dinners", href: "/momento-council" },
        { name: "Events", href: "/events" },
        { name: "Software", href: "/momento" }
      ]
    },
    { 
      name: "The Quantum Shift", 
      href: "/quantum-shift",
      subItems: [
        { name: "Philosophy", href: "/quantum-shift" },
        { name: "Podcast", href: "https://www.youtube.com/playlist?list=PL1uIG3i2RBhGE7WsBs1jD_Wy5awTA3NT_" },
        { name: "Quantum Coach", href: "/quantum-shift/coach" },
        { name: "About", href: "/about" }
      ]
    },
    { 
      name: "Blog", 
      href: "/blog"
    },
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header 
      className="fixed top-0 w-full z-50 bg-black border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img 
              src={torqueLogo} 
              alt="Torque AI" 
              className="h-14 w-auto"
              animate={{
                y: [0, -4, 0],
                rotate: [0, 3, 0, -3, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.08,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
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
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.subItems && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-xl py-2 z-50">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        target={subItem.href.startsWith('http') ? '_blank' : undefined}
                        rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              asChild 
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              <a href="https://calendar.app.google/rAZmF5kNNCsfMyBf7" target="_blank" rel="noopener noreferrer">
                Meet With Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden border-t border-border"
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
                    className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.href.startsWith('http') ? '_blank' : undefined}
                          rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4 space-y-2">
                <Button 
                  asChild 
                  className="w-full"
                >
                  <a href="https://calendar.app.google/rAZmF5kNNCsfMyBf7" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    Meet With Us
                  </a>
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
