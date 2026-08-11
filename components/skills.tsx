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
      { name: "OOPS", level: "expert" },
      { name: "Operating Systems", level: "expert" },
      { name: "DBMS", level: "intermediate" },
      { name: "Computer Networks", level: "intermediate" },
    ],
  },
];

const levelDetails = {
  expert: {
    width: "w-[95%]",
    gradient: "from-emerald-400 via-teal-300 to-cyan-400",
    glow: "shadow-emerald-500/50 border-emerald-400/80",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    hoverBadge: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/40 scale-105 border-emerald-400",
    emoji: "🔥",
    percentage: "95%",
  },
  intermediate: {
    width: "w-[60%]",
    gradient: "from-sky-400 via-blue-400 to-indigo-400",
    glow: "shadow-sky-500/50 border-sky-400/80",
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    hoverBadge: "bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg shadow-sky-500/40 scale-105 border-sky-400",
    emoji: "⚡",
    percentage: "60%",
  },
  beginner: {
    width: "w-[25%]",
    gradient: "from-amber-400 via-orange-400 to-pink-500",
    glow: "shadow-amber-500/50 border-amber-400/80",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    hoverBadge: "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/40 scale-105 border-amber-400",
    emoji: "🚀",
    percentage: "25%",
  },
};

const marqueeItems = [
  {
    name: "Python",
    category: "Language",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.812v.826H3.904S0 5.767 0 11.862c0 6.094 3.404 5.864 3.404 5.864h2.035v-2.867s-.109-3.418 3.344-3.418h5.766s3.176.052 3.176-3.123V2.656S18.009 0 11.914 0zm-3.23 1.84a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1z" fill="#3776AB"/>
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.812v-.826h8.114S24 18.233 24 12.138c0-6.094-3.404-5.864-3.404-5.864h-2.035v2.867s.109 3.418-3.344 3.418h-5.766s-3.176-.052-3.176 3.123v5.678S5.991 24 12.086 24zm3.23-1.84a1.05 1.05 0 110-2.1 1.05 1.05 0 010 2.1z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3178C6">
        <path d="M1.5 0h21A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0z"/>
        <path d="M12.75 18.75v-9.5h-3v-2.25h8.25v2.25h-3v9.5h-2.25zm5.06-1.581c.54.42 1.23.681 1.94.681 1.14 0 1.74-.48 1.74-1.23 0-.84-.75-1.14-1.92-1.56l-.51-.18c-1.74-.6-2.58-1.44-2.58-2.82 0-1.95 1.62-3.18 4.14-3.18 1.35 0 2.37.36 3.09.96l-1.02 1.62c-.51-.42-1.29-.66-1.98-.66-1.08 0-1.68.45-1.68 1.14 0 .78.6 1.05 1.83 1.47l.51.18c1.86.66 2.7 1.5 2.7 2.94 0 2.13-1.65 3.33-4.38 3.33-1.56 0-2.73-.42-3.57-1.14l1.11-1.65z" fill="#FFF"/>
      </svg>
    ),
  },
  {
    name: "React / Next.js",
    category: "Frontend",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "LangChain",
    category: "AI / RAG",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M12 12 2.1 12" />
        <path d="M12 12 19.1 5.1" />
      </svg>
    ),
  },
  {
    name: "OpenAI & VLMs",
    category: "AI / ML",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.28 9.87a6 6 0 0 0-.53-5.18 6.07 6.07 0 0 0-6.61-2.67 6 6 0 0 0-4.66-2.02h-.16a6.08 6.08 0 0 0-5.83 4.29 6 6 0 0 0-4.41 3.19 6.07 6.07 0 0 0 .82 7.08 6 6 0 0 0 .52 5.18 6.07 6.07 0 0 0 6.61 2.67 6 6 0 0 0 4.67 2.02h.16a6.08 6.08 0 0 0 5.83-4.29 6 6 0 0 0 4.41-3.19 6.07 6.07 0 0 0-.82-7.08z" fill="#A855F7" />
      </svg>
    ),
  },
  {
    name: "FastAPI",
    category: "Backend",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1 18l-1.5-4H8.5l4-8h4.5l-2.5 5h3.5L13 18z" fill="#059669"/>
      </svg>
    ),
  },
  {
    name: "Vector DBs",
    category: "Database",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: "Streamlit",
    category: "Framework",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF4B4B">
        <path d="M12 2L1 21h22L12 2zm0 4.5l8 13.5H4l8-13.5z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#5FA04E">
        <path d="M12 1.846L2.4 7.388v11.083L12 24l9.6-5.529V7.388L12 1.846zM12 4.154l7.2 4.154v8.308L12 20.77l-7.2-4.154V8.308L12 4.154z" />
      </svg>
    ),
  },
  {
    name: "CSS3 / Tailwind",
    category: "Design",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: "Git / GitHub",
    category: "DevOps",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#F05032">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.378-.071 1.89.44.515.515.657 1.25.44 1.892l2.66 2.66c.643-.217 1.378-.073 1.892.44.707.708.707 1.857 0 2.564-.708.708-1.856.708-2.564 0-.543-.544-.678-1.314-.403-1.986l-2.483-2.483v6.592c.186.095.358.223.504.368.707.708.707 1.857 0 2.564-.708.708-1.856.708-2.564 0-.707-.707-.707-1.856 0-2.564.168-.168.358-.3.565-.39v-6.68c-.207-.09-.397-.22-.565-.39-.544-.543-.678-1.313-.403-1.986L7.766 6.1 1.454 12.41c-.603.605-.603 1.583 0 2.188l10.479 10.478c.604.604 1.582.604 2.188 0l9.425-9.424c.604-.604.604-1.582 0-2.187z"/>
      </svg>
    ),
  },
];

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
          <p className="text-2xl md:text-3xl text-foreground mb-8 max-w-2xl text-balance">
            Technologies and tools I use to bring ideas to life.
          </p>

          {/* High-End Ultra-Vibrant Liquid Glass Marquee Banner */}
          <div className="relative mb-10 overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-r from-card/90 via-secondary/40 to-card/90 backdrop-blur-2xl px-5 py-7 shadow-[0_0_50px_rgba(56,189,248,0.15)] group/marquee">
            {/* Top & Bottom Luminous Neon Edge Lines */}
            <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-purple-500/80 to-transparent pointer-events-none" />

            {/* Soft Liquid Ambient Glow Halos */}
            <div className="absolute -top-16 left-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-16 right-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

            {/* Deep Dual-Edge Liquid Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card via-card/90 to-transparent z-30 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card via-card/90 to-transparent z-30 pointer-events-none" />

            <div className="flex overflow-hidden w-full relative z-10 py-2">
              <div className="animate-marquee flex items-center gap-5 shrink-0 flex-nowrap py-3">
                {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative flex shrink-0 items-center gap-3.5 px-5 py-3 rounded-2xl bg-gradient-to-br from-secondary/80 via-card/90 to-secondary/60 border border-white/15 dark:border-white/10 backdrop-blur-xl transition-all duration-500 ease-out cursor-pointer whitespace-nowrap hover:-translate-y-1 hover:scale-105 hover:border-cyan-400/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]"
                  >
                    {/* Flowing Liquid Glass Sheen Highlight */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Holographic Glowing Icon Badge Container */}
                    <div className="w-9 h-9 rounded-xl bg-card/90 border border-white/20 dark:border-white/15 flex items-center justify-center p-1.5 group-hover:scale-115 group-hover:rotate-6 group-hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] shrink-0">
                      {item.icon}
                    </div>

                    {/* Crisp Typography with Thin Luminous Glow */}
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] transition-all duration-300">
                      {item.name}
                    </span>

                    {/* Cyberpunk Category Tag */}
                    <span className="text-[10px] font-mono text-muted-foreground bg-card/90 px-2.5 py-0.5 rounded-lg border border-white/10 group-hover:border-cyan-400/50 group-hover:text-cyan-300 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.3)] transition-all duration-300">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

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

                  {/* Skills with funky interactive bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => {
                      const details = levelDetails[skill.level as keyof typeof levelDetails];
                      const isHovered = hoveredSkill === skill.name;

                      return (
                        <div
                          key={skill.name}
                          className="group/skill relative p-2.5 rounded-xl transition-all duration-300 cursor-pointer hover:bg-secondary/40 border border-transparent hover:border-border/60"
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={cn(
                                "text-sm font-medium transition-all duration-300 flex items-center gap-2",
                                isHovered ? "text-primary font-bold translate-x-1" : "text-foreground"
                              )}
                            >
                              {skill.name}
                            </span>
                            <span
                              className={cn(
                                "text-xs font-semibold px-2.5 py-0.5 rounded-full border transition-all duration-300 flex items-center gap-1 font-mono",
                                isHovered ? details.hoverBadge : details.badge
                              )}
                            >
                              <span>{details.emoji}</span>
                              <span className="capitalize">{skill.level}</span>
                              {isHovered && <span className="ml-1 text-[10px] font-bold">({details.percentage})</span>}
                            </span>
                          </div>

                          {/* Interactive Funky Skill Bar */}
                          <div
                            className={cn(
                              "relative rounded-full overflow-hidden transition-all duration-500 border bg-secondary/60",
                              isHovered
                                ? "h-3.5 border-primary/50 shadow-md shadow-primary/20 scale-[1.01]"
                                : "h-2 border-border/30"
                            )}
                          >
                            <div
                              className={cn(
                                "h-full rounded-full transition-all duration-500 relative",
                                details.width,
                                `bg-gradient-to-r ${details.gradient}`,
                                isHovered && "animate-gradient-x shadow-lg shadow-primary/40"
                              )}
                            >
                              {/* Funky leading pulse dot on hover */}
                              {isHovered && (
                                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-md shadow-white animate-ping" />
                              )}
                              {/* Shimmer sweep line */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
