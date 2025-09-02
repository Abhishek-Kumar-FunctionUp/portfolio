import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.1, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if element is in viewport
        const isInViewport =
          rect.top < windowHeight * (1 - threshold) && rect.bottom > 0;

        if (isInViewport && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);

      // Check visibility immediately (for navbar clicks and initial load)
      checkVisibility();
    }

    // Listen for hash changes (navbar clicks)
    const handleHashChange = () => {
      setTimeout(checkVisibility, 100); // Small delay to allow scroll to complete
    };

    // Listen for scroll events (for smoother detection)
    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, rootMargin, isVisible]);

  return [ref, isVisible];
};
