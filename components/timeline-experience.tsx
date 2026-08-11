"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    period: "May 2026 — Jul 2026",
    title: "Summer Intern",
    company: "National Informatics Centre, Govt of India",
    location: "Shillong, Meghalaya, India",
    description: [
      "Building and improving production-grade government web applications serving real end users, contributing to reliability, usability, and performance optimization.",
      "Directorate of Home Guards and Civil Defence - Developing an internal dashboard for streamlined operations and data management.",
      "AMO ESIS Website Revamp – Enhancing a live platform with improved frontend responsiveness and backend stability; applying software engineering best practices in a regulated production environment.",
      "Directorate of Housing - Updated the portal and sent for third-party approval for auditing.",
      "NIC Coffee Table Book – Led documentation design and content structuring, delivering a polished publication with clear information architecture and editorial accuracy.",
    ],
    skills: [
      "Responsive Web Refactoring",
      "Audit-Ready Deployment Pipeline",
      "Government Systems",
      "Information Architecture Design",
      "UI/UX",
    ],
    link: "https://www.nic.gov.in",
    logo: "/nic-logo-blue.png",
    isActive: true,
  },
  {
    period: "Jun 2025 — Jul 2025",
    title: "AI/ML Virtual Intern",
    company: "IBM SkillsBuild x Edunet Foundation",
    location: "Remote, IN",
    description: [
      "Completed a virtual AI/ML internship via IBM SkillsBuild and Edunet Foundation, gaining hands-on experience in Python, supervised learning, data preprocessing, and model evaluation.",
      "Worked on real-world machine learning projects involving data preprocessing, model building, and performance tuning using Python and Scikit-learn.",
    ],
    skills: ["Python", "Scikit-learn", "Data Preprocessing", "Model Evaluation"],
    link: "https://skillsbuild.org/",
    logo: "/ibm-logo-blue.jpg",
    isActive: false,
  },
];

export function TimelineExperience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-primary" size={20} />
            <h2 className="text-sm font-medium text-primary tracking-wider uppercase">
              Experience
            </h2>
          </div>
          <p className="text-2xl md:text-3xl text-foreground mb-12 max-w-2xl text-balance">
            Professional experience.
          </p>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={cn(
                  "relative animate-stagger",
                  `animate-stagger-${index}`
                )}
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute left-6 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1.5 transition-all duration-300",
                    exp.isActive
                      ? "bg-primary ring-4 ring-primary/30 scale-125"
                      : "bg-border hover:bg-primary/50 ring-2 ring-card"
                  )}
                />

                {/* Content */}
                <div
                  className={cn(
                    "md:w-1/2 pl-16 md:pl-0",
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  )}
                >
                  <div className="group p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4 md:justify-start">
                      <div className="w-12 h-12 rounded-xl bg-secondary overflow-hidden border border-border flex items-center justify-center p-1 flex-shrink-0">
                        <Image
                          src={exp.logo || "/nic-logo-blue.png"}
                          alt={exp.company}
                          width={100}
                          height={100}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground font-mono">
                          {exp.period}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-[#3993ed] dark:text-[#3993ed] font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 text-left text-sm">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => {
                        const colors = [
                          "bg-sky-500/15 border-sky-500/30 text-sky-600 dark:text-sky-300 hover:bg-sky-500/25",
                          "bg-purple-500/15 border-purple-500/30 text-purple-600 dark:text-purple-300 hover:bg-purple-500/25",
                          "bg-orange-500/15 border-orange-500/30 text-orange-600 dark:text-orange-300 hover:bg-orange-500/25",
                          "bg-amber-500/15 border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-500/25",
                          "bg-rose-500/15 border-rose-500/30 text-rose-600 dark:text-rose-300 hover:bg-rose-500/25",
                          "bg-teal-500/15 border-teal-500/30 text-teal-600 dark:text-teal-300 hover:bg-teal-500/25",
                          "bg-indigo-500/15 border-indigo-500/30 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-500/25",
                          "bg-orange-500/15 border-orange-500/30 text-orange-600 dark:text-orange-300 hover:bg-orange-500/25",
                        ];
                        const colorClass = colors[i % colors.length];
                        return (
                          <span
                            key={skill}
                            className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-300 shadow-xs ${colorClass}`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>

                    {exp.isActive && (
                      <div className="mt-3 inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/15 rounded-full border border-emerald-500/40 text-xs text-emerald-600 dark:text-emerald-400 font-semibold shadow-sm shadow-emerald-500/10">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-md shadow-emerald-500/50" />
                        Completed
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
