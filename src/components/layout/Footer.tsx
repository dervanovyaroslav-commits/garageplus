
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { theme } from '@/config/theme';

const scrollToTop = () => {
  return new Promise<void>((resolve) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Wait for scroll to complete
    setTimeout(() => resolve(), 500);
  });
};

export const Footer = () => {
  const location = useLocation();
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget as HTMLAnchorElement;
    const isHashLink = target.hash && target.getAttribute('href')?.startsWith('/#');
    
    // For hash links to main page
    if (isHashLink) {
      e.preventDefault();
      const hash = target.hash;
      
      // If already on main page, just scroll to section
      if (window.location.pathname === '/') {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Smooth scroll to the element
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL without triggering navigation
          window.history.pushState({}, '', hash);
        }
      } else {
        // If not on main page, navigate there with hash
        window.location.href = `/${hash}`;
      }
      return;
    }

    // For regular links, scroll to top then navigate
    e.preventDefault();
    scrollToTop().then(() => {
      if (target.href) {
        window.location.href = target.href;
      }
    });
  };

  return (
    <footer 
      className="py-12 text-white"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.text.primary}, ${theme.colors.text.secondary}, ${theme.colors.text.primary})` 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo_inv.png" 
                alt="GARAGE PLUS" 
                className="h-10 w-auto"
              />
            </div>
            <p style={{ color: theme.colors.background }}>
              Профессиональный ремонт и обслуживание Mercedes-Benz с 1999 года
            </p>
          </div>
          
          <div>
            <h3 
              className="font-semibold text-lg mb-4"
              style={{ color: theme.colors.backgroundLight }}
            >
              Услуги
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services/maintenance" 
                  className="transition-colors hover:opacity-90"
                  style={{ color: theme.colors.background }} 
                  onClick={() => scrollToTop()}
                >
                  Техническое обслуживание
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/transmission" 
                  className="transition-colors hover:opacity-90"
                  style={{ color: theme.colors.background }} 
                  onClick={() => scrollToTop()}
                >
                  Обслуживание АКПП
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/engine" 
                  className="transition-colors hover:opacity-90"
                  style={{ color: theme.colors.background }} 
                  onClick={() => scrollToTop()}
                >
                  Ремонт двигателя
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/tuning" 
                  className="transition-colors hover:opacity-90"
                  style={{ color: theme.colors.background }} 
                  onClick={() => scrollToTop()}
                >
                  Тюнинг
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="font-semibold text-lg mb-4"
              style={{ color: theme.colors.backgroundLight }}
            >
              Информация
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="transition-colors hover:opacity-90"
                  style={{ color: theme.colors.background }} 
                  onClick={() => scrollToTop()}
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link 
                  to="/#reviews" 
                  className="transition-colors hover:opacity-90"
                  style={{ color: theme.colors.background }} 
                  onClick={handleLinkClick}
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link 
                  to="/#contact" 
                  className="transition-colors hover:opacity-90"
                  style={{ color: theme.colors.background }} 
                  onClick={handleLinkClick}
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link 
                  to="/#promotions" 
                  className="transition-colors hover:opacity-90"
                  style={{ color: theme.colors.background }} 
                  onClick={handleLinkClick}
                >
                  Акции
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="font-semibold text-lg mb-4"
              style={{ color: theme.colors.backgroundLight }}
            >
              Контакты
            </h3>
            <div className="space-y-2" style={{ color: theme.colors.background }}>
              <p>г. Москва, ул. Поклонная, 11 стр. 1А</p>
              <p>+7 (495) 221-8480</p>
              <p>ПН-ПТ: 11:30-20:30<br />СБ: 12:00-17:00 (по предварительной записи)<br />ВС: выходной</p>
              <Button 
                variant="outline"
                size="sm"
                className="mt-2"
                style={{ 
                  backgroundColor: theme.colors.backgroundLight,
                  borderColor: theme.colors.backgroundLight,
                  color: theme.colors.text.primary
                }}
                onClick={() => window.open('https://yandex.ru/maps/?text=' + encodeURIComponent('г. Москва, ул. Поклонная, 11 стр. 1А'), '_blank')}
              >
                Проложить маршрут
              </Button>
            </div>
          </div>
        </div>
        
        <div 
          className="mt-8 pt-8 text-center"
          style={{ 
            borderTop: `1px solid ${theme.colors.backgroundLight}`, 
            color: theme.colors.background 
          }}
        >
          <p>&copy; 2024 GARAGE PLUS. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
