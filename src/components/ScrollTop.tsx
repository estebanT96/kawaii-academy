import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // 1. Get the current URL path
  const { pathname } = useLocation();

  // 2. Run this effect every time the path changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top-left (x=0, y=0)
  }, [pathname]);

  return null; // This component doesn't render anything visible
};

export default ScrollToTop;