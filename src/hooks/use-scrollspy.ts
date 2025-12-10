import { useState, useEffect } from 'react';

export function useScrollspy(
  sectionIds: string[],
  options?: {
    offset?: number;
    root?: Element | null;
  }
) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection: string | null = null;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop - (options?.offset ?? 0);
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = id;
            break;
          }
        }
      }
      
      // If no section is active, check if we are at the top.
      if (currentSection === null && scrollPosition < 200) {
        currentSection = sectionIds[0];
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, options?.offset]);

  return activeSection;
}
