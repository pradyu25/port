import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollNavigationProps {
  sections: string[];
}

const ScrollNavigation = ({ sections }: ScrollNavigationProps) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(sections[index]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-6">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className="relative group"
            aria-label={`Navigate to ${section}`}
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              animate={
                activeSection === index
                  ? {
                      boxShadow: [
                        "0 0 0 0 hsl(var(--primary) / 0.7)",
                        "0 0 0 10px hsl(var(--primary) / 0)",
                        "0 0 0 0 hsl(var(--primary) / 0)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: activeSection === index ? Infinity : 0,
                repeatType: "loop",
              }}
            />
            <span className="absolute left-8 top-1/2 -translate-y-1/2 text-xs text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap capitalize">
              {section}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ScrollNavigation;
