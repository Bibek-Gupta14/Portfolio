"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Sparkles, ArrowRight } from "lucide-react";
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
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
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
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=600&fit=crop",
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
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        {project.featured && (
                          <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
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
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
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
                          className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                        >
                          <Github size={18} />
                          Code
                        </a>
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300"
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
