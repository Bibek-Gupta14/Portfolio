"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30",
        "hover:scale-110 active:scale-95",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-32 pointer-events-none"
      )}
      title="Back to top"
      aria-label="Back to top"
    >
      <ChevronUp size={20} className="animate-bounce-smooth" />
    </button>
  );
}
