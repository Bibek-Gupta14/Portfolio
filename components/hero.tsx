"use client";

import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
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
                  className="group p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github
                    size={22}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/bibekgupta14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin
                    size={22}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="mailto:biplabgupta50@gmail.com"
                  className="group p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail
                    size={22}
                    className="group-hover:scale-110 transition-transform"
                  />
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
                  <a href="/Bibek_Gupta-Resume.pdf" download>
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
                <div className="absolute -right-4 top-8 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-lg animate-bounce">
                  <Code2 className="text-primary" size={24} />
                </div>
                <div className="absolute -left-4 top-1/2 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-lg animate-bounce delay-150">
                  <Brain className="text-primary" size={24} />
                </div>
                <div className="absolute -right-2 bottom-8 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-lg animate-bounce delay-300">
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
                    <span className="text-2xl">07</span>
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
