"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Code2, Brain, Database, Cpu } from "lucide-react";
import { useState } from "react";

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
    skills: [
      { name: "Python", level: "expert" },
      { name: "TypeScript", level: "beginner" },
      { name: "JavaScript", level: "intermediate" },
      { name: "Java", level: "intermediate" },
      { name: "CSS", level: "expert" },
      { name: "Git/GitHub", level: "expert" },
    ],
  },
  {
    title: "AI/ML & LLMs",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "hover:border-purple-500/50",
    iconColor: "text-purple-500",
    hoverBg: "group-hover:bg-purple-500/20",
    skillHover:
      "hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/50",
    skills: [
      { name: "LangChain", level: "expert" },
      { name: "Deep Learning", level: "intermediate" },
      { name: "RAG Systems", level: "expert" },
      { name: "Vector DBs", level: "expert" },
      { name: "OpenAI API", level: "beginner" },
      { name: "Neural Networks", level: "intermediate" },
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
    skills: [
      { name: "React", level: "intermediate" },
      { name: "FastAPI", level: "intermediate" },
      { name: "Streamlit", level: "expert" },
      { name: "Node.js", level: "intermediate" },
      { name: "Express.js", level: "intermediate" },
      { name: "MongoDB", level: "intermediate" },
    ],
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
    skills: [
      { name: "DSA", level: "intermediate" },
      { name: "OOPS", level: "intermediate" },
      { name: "Operating Systems", level: "expert" },
      { name: "DBMS", level: "intermediate" },
      { name: "Computer Networks", level: "intermediate" },
    ],
  },
];

const levelColors = {
  expert: "from-emerald-500 to-teal-500",
  intermediate: "from-blue-500 to-cyan-500",
  beginner: "from-orange-500 to-amber-500",
};

const levelWidths = {
  expert: "w-4/5",
  intermediate: "w-3/5",
  beginner: "w-2/5",
};

export function Skills() {
  const { ref, isInView } = useInView();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Skills & Expertise
          </h2>
          <p className="text-2xl md:text-3xl text-foreground mb-12 max-w-2xl text-balance">
            Technologies and tools I use to bring ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-7">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className={cn(
                    "group relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500",
                    category.borderColor,
                    "hover:bg-card/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5",
                  )}
                  style={{
                    transitionDelay: `${categoryIndex * 100}ms`,
                  }}
                >
                  {/* Gradient accent line */}
                  <div
                    className={cn(
                      "absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      category.color,
                    )}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300",
                      category.bgColor,
                      category.hoverBg,
                      "group-hover:scale-110",
                    )}
                  >
                    <Icon className={cn("w-6 h-6", category.iconColor)} />
                  </div>

                  {/* Title */}
                  <h3
                    className={cn(
                      "text-lg font-semibold text-foreground mb-6 transition-colors",
                      category.iconColor.replace("text-", "group-hover:text-"),
                    )}
                  >
                    {category.title}
                  </h3>

                  {/* Skills with bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="animate-stagger"
                        style={{
                          animationDelay: isInView ? `${skillIndex * 50}ms` : "0ms",
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground capitalize bg-secondary/30 px-2 py-1 rounded border border-border/50 group-hover:border-primary/30 transition-colors">
                            {skill.level}
                          </span>
                        </div>

                        {/* Skill Bar */}
                        <div className="h-2 bg-secondary/50 rounded-full overflow-hidden border border-border/30 group-hover:border-primary/30 transition-colors">
                          <div
                            className={cn(
                              `bg-gradient-to-r ${levelColors[skill.level as keyof typeof levelColors]} transition-all duration-700 h-full rounded-full shadow-lg`,
                              hoveredSkill === skill.name
                                ? levelWidths[skill.level as keyof typeof levelWidths]
                                : "w-0"
                            )}
                            style={{
                              animation: isInView
                                ? `skillBarFill 1s ease-out ${skillIndex * 50}ms forwards`
                                : "none",
                            }}
                          />
                        </div>
                      </div>
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
