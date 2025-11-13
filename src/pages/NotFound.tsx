import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { theme } from '@/config/theme';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="text-center">
        <h1 
          className="text-4xl font-bold mb-4"
          style={{ color: theme.colors.text.primary }}
        >
          404
        </h1>
        <p 
          className="text-xl mb-4"
          style={{ color: theme.colors.text.secondary }}
        >
          Oops! Page not found
        </p>
        <a 
          href="/" 
          className="underline hover:opacity-80"
          style={{ color: theme.colors.button.primary }}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
