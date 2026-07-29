"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AgentResearch AI",
    description:
      "An intelligent AI-powered research agent that autonomously gathers, analyzes, and synthesizes information from multiple sources. Features advanced natural language processing and automated research workflows for comprehensive data analysis.",
    tech: ["Python", "LangChain", "OpenAI", "FastAPI", "React", "TypeScript"],
    github: "https://github.com/Bibek-Gupta14/AgentResearch-ai",
    live: "https://agentresearch-ai.pages.dev/",
    period: "Jan 2026 – Feb 2026",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/0*BzMUeWmxz7pwERJS?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "OcularSLM",
    description:
      "A hybrid SLM + Vision agent that materializes visual snippets (via clipboard) into functional code files directly in your local workspace.",
    tech: ["Python", "Vision AI", "SLM", "VLM", "PyQt", "LLM", "Automation"],
    github: "https://github.com/Bibek-Gupta14/OcularSLM",
    period: "Jun 2026 – Jul 2026",
    image:
      "https://www.artificialintelligence-news.com/wp-content/uploads/2024/12/ai-artificial-intelligence-machine-learning-research-privacy-ethics-development-1024x714.jpg?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "DocQuery AI",
    description:
      "A sophisticated document query system powered by AI that enables natural language questions over large document collections. Implements RAG (Retrieval Augmented Generation) for accurate context-aware responses from PDFs, documents, and text files.",
    tech: ["Python", "LangChain", "ChromaDB", "Streamlit", "OpenAI", "FAISS"],
    github: "https://github.com/Bibek-Gupta14/DocQuery",
    live: "https://doc-query-ai.streamlit.app/",
    period: "Dec 2025 – Jan 2026",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKe1_Li12wAeJASXZ1PQXvxzpn1XhEZgnf757ZO1Z7FB_d2kxxn5pq9rKb&s=10?w=800&h=600&fit=crop",
    featured: true,
  },
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-primary" size={20} />
            <h2 className="text-sm font-medium text-primary tracking-wider mt-1 uppercase">
              Featured Projects
            </h2>
          </div>
          <p className="text-2xl md:text-3xl text-foreground mb-12 mt-6 max-w-2xl text-balance">
            A selection of projects that showcase my passion for building{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                impactful solutions
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-md blur-sm" />
            </span>
            .
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group perspective"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "pageEnter 0.8s ease-out forwards",
                }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-500 p-0 hover:shadow-2xl hover:shadow-primary/10 transform hover:scale-[1.02]">
                  {/* Qbit Labs Style Accent Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />

                  <div className="grid md:grid-cols-2 relative z-10">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        {project.featured && (
                          <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 group-hover:bg-primary/30 transition-colors">
                            Featured
                          </span>
                        )}
                        <span className="text-sm text-muted-foreground font-mono">
                          {project.period}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground animate-stagger"
                            style={{ animationDelay: `${i * 50}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                          <svg
                            className="w-[18px] h-[18px]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          Code
                        </a>
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                          >
                            <ExternalLink size={18} />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              View All Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
