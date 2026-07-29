"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Briefcase,
  Lightbulb,
  Mail,
  Home,
  ChevronUp,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: Lightbulb, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      // Update active section
      const sections = ["hero", "about", "experience", "skills", "projects", "education", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Navigation */}
      <nav
        className={cn(
          "fixed bottom-8 left-6 z-40 transition-all duration-500 hidden sm:block",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-32 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border",
                  isActive
                    ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card/50 border-border/50 hover:border-primary hover:bg-card text-muted-foreground hover:text-primary"
                )}
                title={item.label}
              >
                <Icon size={20} className="transition-transform group-hover:scale-110" />

                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-2 py-1 bg-card/95 text-foreground text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border/50">
                  {item.label}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full border-2 border-primary animate-pulse" />
                )}
              </a>
            );
          })}

          {/* Back to top button */}
          <a
            href="#hero"
            className={cn(
              "group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border",
              "bg-secondary border-border/50 hover:border-primary hover:bg-card text-muted-foreground hover:text-primary"
            )}
            title="Back to Top"
          >
            <ChevronUp size={20} className="transition-transform group-hover:scale-110" />

            <span className="absolute right-full mr-3 px-2 py-1 bg-card/95 text-foreground text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border/50">
              Top
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}
