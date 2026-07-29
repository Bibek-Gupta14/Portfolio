"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#" className="relative flex items-center group">
          <div className="relative">
            <span className="text-5xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.7)] animate-button-pulse">
              BG
            </span>
            <span className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </div>
        </a>

        {/* Right side nav items & theme toggle */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group animate-stagger",
                    `animate-stagger-${index}`,
                    activeSection === item.href.slice(1)
                      ? "text-primary font-bold"
                      : "text-foreground/90 hover:text-primary",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-300",
                      activeSection === item.href.slice(1) && "w-full"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-secondary/80 hover:bg-primary/20 border border-border hover:border-primary/50 text-foreground transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Toggle theme"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-amber-400 transition-transform duration-500 hover:rotate-90" />
              ) : (
                <Moon size={18} className="text-indigo-500 transition-transform duration-500 hover:-rotate-45" />
              )}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden text-foreground transition-all duration-300 hover:scale-110 active:scale-95 p-2 rounded-lg",
              mobileMenuOpen && "bg-primary/20"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block text-sm font-medium transition-all duration-300 relative animate-stagger",
                  `animate-stagger-${index}`,
                  activeSection === item.href.slice(1)
                    ? "text-primary font-bold"
                    : "text-foreground/90 hover:text-primary",
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
