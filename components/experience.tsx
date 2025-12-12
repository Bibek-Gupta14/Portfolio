"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, Briefcase, Award } from "lucide-react";
import Image from "next/image";

const experiences = [
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
    link: "#",
    logo: "/ibm-logo-blue.jpg",
  },
];

const achievements = [
  {
    title: "Mumbai Hacks - Top 10%",
    description:
      "Ranked in the top 10% of one of India's largest Agentic AI hackathons",
    icon: Award,
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
                    <div className="w-16 h-16 rounded-xl bg-secondary overflow-hidden border border-border">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={exp.company}
                        width={64}
                        height={64}
                        className="object-cover"
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
                    <p className="text-primary font-medium mb-4">
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
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-6">
            Achievements
          </h3>
          <div className="grid gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/20"
                >
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
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
