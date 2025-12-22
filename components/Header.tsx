
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Estações', href: '#services' },
    { name: 'Promoções', href: '#promos' },
    { name: 'Orçamento', href: '#calculator' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura do header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-pink-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl lg:text-2xl shadow-lg shadow-pink-100 group-hover:rotate-12 transition-transform">
            🧁
          </div>
          <span className="font-bold text-lg lg:text-xl tracking-tight text-gray-900 font-kids uppercase">
            Thatá <span className="text-pink-500">Gourmet</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 font-bold text-gray-500 text-xs uppercase tracking-widest">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-pink-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#calculator" 
            onClick={(e) => handleNavClick(e, '#calculator')}
            className="hidden sm:block bg-gray-900 text-white px-6 lg:px-8 py-3 rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-xl shadow-gray-100 active:scale-95 text-xs uppercase tracking-wider"
          >
            Reservar Data
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100 shadow-xl' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-600 font-bold uppercase tracking-widest text-sm hover:text-pink-500 py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#calculator" 
            onClick={(e) => handleNavClick(e, '#calculator')}
            className="mt-4 bg-pink-500 text-white py-4 rounded-xl text-center font-bold uppercase text-xs"
          >
            Reservar Agora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
