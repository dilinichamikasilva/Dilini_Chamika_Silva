import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Docs', href: '#documents' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#050505]/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-[101]">
        {/* Logo */}
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
          }}
          className="text-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] bg-clip-text text-transparent cursor-pointer"
        >
          DCS.
        </motion.span>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="hover:text-[#d946ef] transition-colors uppercase tracking-widest text-xs"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none relative z-[102] pointer-events-auto"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 top-16 h-screen w-full bg-[#050505] z-[99] md:hidden"
          >
            <div className="flex flex-col p-6 gap-2"> {/* Reduced padding and gap */}
              {navItems.map((item, index) => (
                <motion.a 
                  key={item.name} 
                  href={item.href} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={closeMenu} 
                  /* Changed text-2xl to text-base and py-4 to py-3 */
                  className="text-base text-gray-400 hover:text-[#d946ef] active:text-[#d946ef] py-3 transition-colors uppercase tracking-[0.2em] font-semibold border-b border-white/5 last:border-none"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}