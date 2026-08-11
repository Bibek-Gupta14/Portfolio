"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, Briefcase } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    period: "May 2026 — Present",
    title: "Summer Intern",
    company: "National Informatics Centre, Govt of India",
    location: "Shillong, Meghalaya, India",
    description: [
      "Building and improving production-grade government web applications serving real end users, contributing to reliability, usability, and performance optimization.",
      "Directorate of Home Guards and Civil Defence - Developing an internal dashboard for streamlined operations and data management. ",
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
    skills: [
      "Python",
      "Scikit-learn",
      "Data Preprocessing",
      "Model Evaluation",
    ],
    link: "https://skillsbuild.org/",
    logo: "/ibm-logo-blue.jpg",
  },
];

export function Experience() {
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
            Professional experience and notable achievements.
          </p>

          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-secondary overflow-hidden border border-border flex items-center justify-center p-1">
                      <Image
                        src={exp.logo || "/nic-logo-blue.png"}
                        alt={exp.company}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-sm text-muted-foreground font-mono">
                        {exp.period}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2 mb-1">
                      {exp.title}
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </h3>
                    <p className="text-[#0A66C2] dark:text-[#388af6] font-semibold mb-4">
                      {exp.company}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => {
                        const colors = [
                          "bg-sky-500/15 border-sky-500/30 text-sky-600 dark:text-sky-300 hover:bg-sky-500/25",
                          "bg-purple-500/15 border-purple-500/30 text-purple-600 dark:text-purple-300 hover:bg-purple-500/25",
                          "bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-500/25",
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
