import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component will scroll to top whenever the route changes
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};