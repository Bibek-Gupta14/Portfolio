"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Code2, Brain, Database, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Tools",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "hover:border-blue-500/50",
    iconColor: "text-blue-500",
    hoverBg: "group-hover:bg-blue-500/20",
    skillHover:
      "hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50",
    skills: ["Java", "Python", "JavaScript", "CSS", "Git/GitHub"],
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "hover:border-purple-500/50",
    iconColor: "text-purple-500",
    hoverBg: "group-hover:bg-purple-500/20",
    skillHover:
      "hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/50",
    skills: [
      "Supervised Learning",
      "Deep Learning",
      "Neural Networks",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
  {
    title: "Frameworks & Databases",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "hover:border-emerald-500/50",
    iconColor: "text-emerald-500",
    hoverBg: "group-hover:bg-emerald-500/20",
    skillHover:
      "hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    title: "CS Fundamentals",
    icon: Cpu,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    borderColor: "hover:border-orange-500/50",
    iconColor: "text-orange-500",
    hoverBg: "group-hover:bg-orange-500/20",
    skillHover:
      "hover:bg-orange-500/20 hover:text-orange-400 hover:border-orange-500/50",
    skills: ["DSA", "OOPS", "Operating Systems", "DBMS", "Computer Networks"],
  },
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Skills & Expertise
          </h2>
          <p className="text-2xl md:text-3xl text-foreground mb-12 max-w-2xl text-balance">
            Technologies and tools I use to bring ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-7">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className={cn(
                    "group relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 min-h-[380px]",
                    category.borderColor,
                    "hover:bg-card/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                  )}
                  style={{
                    transitionDelay: `${categoryIndex * 100}ms`,
                  }}
                >
                  {/* Gradient accent line */}
                  <div
                    className={cn(
                      "absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      category.color
                    )}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300",
                      category.bgColor,
                      category.hoverBg,
                      "group-hover:scale-110"
                    )}
                  >
                    <Icon className={cn("w-6 h-6", category.iconColor)} />
                  </div>

                  {/* Title */}
                  <h3
                    className={cn(
                      "text-lg font-semibold text-foreground mb-4 transition-colors",
                      category.iconColor.replace("text-", "group-hover:text-")
                    )}
                  >
                    {category.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={cn(
                          "px-4 py-2.5 text-sm font-medium rounded-lg border border-border/30 bg-secondary/30 text-muted-foreground transition-all duration-300 cursor-default",
                          category.skillHover,
                          "hover:scale-105 hover:shadow-md"
                        )}
                        style={{
                          animationDelay: `${skillIndex * 50}ms`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
