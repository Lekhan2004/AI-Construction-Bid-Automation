import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-3 mt-4 mx-4 md:mx-8 rounded-full px-6 md:px-12 glass shadow-xl shadow-black/5 dark:shadow-white/5' 
        : 'py-6 px-6 md:px-12'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-md flex items-center justify-center transition-colors">
            <div className="w-4 h-4 bg-white dark:bg-black rotate-45 transition-colors" />
          </div>
          <span className="text-xl font-extrabold tracking-tighter uppercase dark:text-white text-neutral-900">AutoBid</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all text-neutral-600 dark:text-neutral-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="bg-neutral-950 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all transform active:scale-95 shadow-lg">
            Get Early Access
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 text-neutral-600 dark:text-neutral-400"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-neutral-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-4 p-6 glass rounded-3xl md:hidden flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-neutral-600 dark:text-neutral-400 py-2 border-b border-neutral-100 dark:border-neutral-800"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-neutral-950 dark:bg-white text-white dark:text-black w-full py-4 rounded-2xl font-black mt-2">
            Get Early Access
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;