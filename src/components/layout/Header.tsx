
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Header = () => {
  const location = useLocation();
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    
    // If not on home page, navigate to home with hash
    if (location.pathname !== '/') {
      window.location.href = `/${hash}`;
      return;
    }
    
    // On home page, scroll to section
    const id = hash.substring(1);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100; // Adjust based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.pushState({}, '', hash);
      }
    }, 50);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#e6dfd6]/90 backdrop-blur-sm border-b border-slate-300/30 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={() => scrollToTop()}>          
          <img 
            src="/logo.png" 
            alt="GARAGE PLUS" 
            className="h-12 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a 
              href="/#services" 
              className="text-black hover:text-slate-700 transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(e, '#services')}
            >
              Услуги
            </a>
            <a 
              href="/#promotions" 
              className="text-black hover:text-slate-700 transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(e, '#promotions')}
            >
              Акции
            </a>
            <a 
              href="/#reviews" 
              className="text-black hover:text-slate-700 transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(e, '#reviews')}
            >
              Отзывы
            </a>
            <a 
              href="/#contact" 
              className="text-black hover:text-slate-700 transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Контакты
            </a>
            <Link 
              to="/about" 
              className="text-black hover:text-slate-700 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToTop()}
            >
              О нас
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <img 
            src="/logo_m.png" 
            alt="Mercedes Benz - независимый специалист"
            title="Mercedes Benz - независимый специалист"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
};
