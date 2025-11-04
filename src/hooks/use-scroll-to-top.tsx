import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSmoothScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      const startPosition = window.pageYOffset;
      const duration = 800; // milliseconds
      const startTime = performance.now();

      const easeInOutSine = (t: number): number => {
        return -(Math.cos(Math.PI * t) - 1) / 2;
      };

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutSine(progress);
        
        window.scrollTo(0, startPosition * (1 - ease));

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    scrollToTop();
  }, [pathname]);
};

export default useSmoothScrollToTop;
