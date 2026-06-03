"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, Briefcase, Award } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    period: "May 2026 — Present",
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
            Professional experience and notable achievements.
          </p>

          {/* Timeline */}
          <div className="relative space-y-8 mb-16">
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
                  <div className="group relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    {/* Gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-primary/0 transition-all duration-300 pointer-events-none" />

                    <div className="relative flex flex-col md:flex-row gap-4">
                      {/* Company Logo */}
                      <div className={cn("flex-shrink-0", index % 2 !== 0 && "md:order-2")}>
                        <div className="w-16 h-16 rounded-xl bg-secondary overflow-hidden border border-border flex items-center justify-center p-1 group-hover:border-primary/50 transition-colors">
                          <Image
                            src={exp.logo || "/nic-logo-blue.png"}
                            alt={exp.company}
                            width={200}
                            height={200}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className={cn(index % 2 !== 0 && "md:order-1")}>
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
                        <p className="text-primary font-medium mb-4">
                          {exp.company}
                        </p>

                        <ul className="space-y-2 mb-4">
                          {exp.description.map((desc, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground leading-relaxed flex items-start gap-2 text-sm"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                              {desc}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={skill}
                              className={cn(
                                "px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 animate-stagger",
                                `animate-stagger-${i}`,
                                "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/50"
                              )}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {exp.isActive && (
                          <div className="mt-3 inline-flex items-center gap-2 px-2 py-1 bg-primary/10 rounded-full border border-primary/30 text-xs text-primary font-medium">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Currently
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <h3 className="text-lg font-semibold text-foreground mb-6">Achievements</h3>
          <div className="relative p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/20 group hover:border-primary/50 transition-all duration-300">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Award className="text-primary group-hover:scale-110 transition-transform" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  Mumbai Hacks - Top 10%
                </h4>
                <p className="text-sm text-muted-foreground">
                  Ranked in the top 10% of one of India's largest Agentic AI hackathons
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
