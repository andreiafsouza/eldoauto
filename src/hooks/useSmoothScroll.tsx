import { useEffect } from "react";

const useSmoothScroll = (): void => {
  const easeOutQuart = (t: number): number => 1 - --t * t * t * t;

  const smoothScrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      const elementY = element.getBoundingClientRect().top + window.scrollY;
      const nav = document.querySelector("nav") as HTMLElement | null;
      const navHeight = nav ? nav.clientHeight : 0;
      const startY = window.scrollY;
      const distance = elementY - startY - navHeight;
      const duration = 800;

      const startTime = performance.now();
      const scrollStep = (timestamp: number) => {
        const currentTime = timestamp - startTime;
        const progress = currentTime / duration;

        if (progress < 1) {
          const scrollY = startY + distance * easeOutQuart(progress);
          window.scrollTo(0, scrollY);
          requestAnimationFrame(scrollStep);
        } else {
          window.scrollTo(0, elementY - navHeight);
        }
      };

      requestAnimationFrame(scrollStep);
    }
  };

  useEffect(() => {
    const handleNavLinkClick = (event: Event): void => {
      event.preventDefault();
      const target = event.target as HTMLElement;
      const id = target.getAttribute("data-nav");
      if (id) {
        smoothScrollToSection(id);
      }
    };

    const navLinks = document.querySelectorAll("[data-nav]");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
};

export default useSmoothScroll;
