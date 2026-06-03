"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  ArrowDown,
  Download,
  Code2,
  Brain,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "./typing-animation";
import { AnimatedCounter } from "./animated-counter";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Scroll to top on component mount
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-400/15 rounded-full text-sky-400 text-sm font-medium mb-6 border border-sky-400/30 hover:bg-sky-400/20 hover:border-sky-400/50 transition-all duration-300 cursor-default">
                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse shadow-lg shadow-sky-400/50" />
                Available for opportunities
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance">
                Bibek Gupta
              </h1>

              <div className="text-xl md:text-2xl text-primary font-medium mb-6 h-8">
                <TypingAnimation
                  texts={[
                    "Software Developer",
                    "AI/ML Enthusiast",
                    "MERN Stack Developer",
                    "Problem Solver",
                  ]}
                />
              </div>

              <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty">
                Computer Science undergraduate at KIIT building impactful
                software and data-driven solutions. Passionate about creating
                intelligent systems that blend thoughtful design with robust
                engineering.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="https://github.com/bibek-Gupta14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-[22px] h-[22px] group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-card/95 text-foreground text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border/50">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/bibekgupta14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-[22px] h-[22px] group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-card/95 text-foreground text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border/50">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="mailto:bibekg1406@gmail.com"
                  className="group relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Mail
                    size={22}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-card/95 text-foreground text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border/50">
                    Email
                  </span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
                >
                  <a href="#projects">
                    View My Work
                    <ArrowDown className="ml-2" size={18} />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-primary hover:bg-primary/5 bg-transparent hover:text-primary"
                >
                  <a href="/Updated_Resume.pdf" download>
                    <Download className="mr-2" size={18} />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content - Profile & Stats */}
            <div className="relative flex flex-col items-center">
              {/* Profile Image with Glow */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur-3xl scale-110 animate-pulse" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Bibek Gupta"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -right-4 top-8 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-lg animate-floating-lg hover:shadow-primary/30 transition-shadow">
                  <Code2 className="text-primary" size={24} />
                </div>
                <div className="absolute -left-4 top-1/2 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-lg animate-floating-md hover:shadow-primary/30 transition-shadow">
                  <Brain className="text-primary" size={24} />
                </div>
                <div className="absolute -right-2 bottom-8 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-lg animate-floating-sm hover:shadow-primary/30 transition-shadow">
                  <Database className="text-primary" size={24} />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 w-full max-w-md">
                <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={6} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={9} suffix="." prefix="" />
                    <span className="text-2xl">05 </span>
                  </div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary">
                    Top <AnimatedCounter end={10} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Mumbai Hacks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
