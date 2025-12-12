"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "Bachelor of Technology (B.Tech), Computer Science Engineering",
    period: "Jul 2023 – Jun 2027",
    grade: "CGPA: 9.25",
    location: "Bhubaneswar",
  },
  {
    institution: "Border Security Force (BSF) School",
    degree: "Senior Secondary (XII): CBSE",
    period: "Aug 2021 – Jan 2023",
    grade: "GPA: 92%",
    location: "Shillong",
  },
  {
    institution: "St. Edmunds School",
    degree: "Secondary (X): ICSE",
    period: "Feb 2010 – Feb 2021",
    grade: "CGPA: 93%",
    location: "Shillong",
  },
];

export function Education() {
  const { ref, isInView } = useInView();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-lg font-large text-primary mb-10 tracking-wider uppercase">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative grid md:grid-cols-2 gap-4 md:gap-8",
                    index % 2 === 0 ? "md:text-right" : ""
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-background" />

                  {index % 2 === 0 ? (
                    <>
                      <div className="pl-12 md:pl-0 md:pr-8">
                        <div className="flex items-center gap-2 md:justify-end mb-2">
                          <GraduationCap className="text-primary" size={20} />
                          <span className="text-sm text-muted-foreground font-mono">
                            {edu.period}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground mb-1">
                          {edu.degree}
                        </p>
                        <p className="text-primary font-medium">{edu.grade}</p>
                        <p className="text-sm text-muted-foreground">
                          {edu.location}
                        </p>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="pl-12 md:pl-8">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="text-primary" size={20} />
                          <span className="text-sm text-muted-foreground font-mono">
                            {edu.period}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground mb-1">
                          {edu.degree}
                        </p>
                        <p className="text-primary font-medium">{edu.grade}</p>
                        <p className="text-sm text-muted-foreground">
                          {edu.location}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
