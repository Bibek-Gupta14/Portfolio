"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "./animated-counter";
import { User, MapPin, Calendar, Coffee, Trophy } from "lucide-react";

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="flex items-center gap-3 mb-4">
            <User className="text-primary" size={20} />
            <h2 className="text-sm font-medium text-primary tracking-wider uppercase">
              About
            </h2>
          </div>

          <p className="text-2xl md:text-3xl text-foreground leading-relaxed mb-8 text-pretty">
            I'm a developer passionate about building{" "}
            <span className="text-primary font-semibold">
              AI-powered systems
            </span>{" "}
            and{" "}
            <span className="text-primary font-semibold">
              intelligent agents
            </span>{" "}
            that solve real-world problems. My work focuses on{" "}
            <span className="text-primary font-semibold">
              LangChain, RAG systems
            </span>
            , and modern{" "}
            <span className="text-primary font-semibold">
              full-stack AI applications
            </span>
            , creating solutions that are both innovative and impactful.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing B.Tech in Computer Science at KIIT with a
                CGPA of 9.05, I've gained hands-on experience building AI agents
                and RAG systems using LangChain, OpenAI, and vector databases.
                Recent projects include AgentResearch AI and DocQuery.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in full-stack development with React/TypeScript,
                FastAPI, and Python-based AI/ML systems. When I'm not coding,
                you'll find me exploring new AI frameworks, participating in
                hackathons, or contributing to automation initiatives.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border">
                  <Calendar className="text-primary" size={18} />
                  <span className="text-muted-foreground">
                    Mastered RPA Automation under the KIIT T&P Cell
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border">
                  <Coffee className="text-primary" size={18} />
                  <span className="text-muted-foreground">
                    Play Cricket, Football, Basketball, Table Tennis, Billiards
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-primary" size={20} />
              <h3 className="text-sm font-medium text-primary tracking-wider uppercase">
                Achievements
              </h3>
            </div>

            <div className="group relative p-6 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl border border-purple-500/30 overflow-hidden transition-all duration-500 hover:border-pink-500/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 cursor-default">
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative blurs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl group-hover:bg-pink-500/30 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-500" />

              {/* Accent line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <p className="relative text-lg text-foreground">
                🏆 I recently made it to the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                    top 10%
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-md blur-sm" />
                </span>{" "}
                of{" "}
                <span className="font-semibold text-pink-400 group-hover:text-pink-300 transition-colors">
                  Mumbai Hacks
                </span>
                , one of India's largest{" "}
                <span className="font-semibold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Agentic AI
                </span>{" "}
                hackathons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
