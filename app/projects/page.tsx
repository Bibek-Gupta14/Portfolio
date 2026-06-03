"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Github, ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allProjects = [
  {
    title: "AgentResearch AI",
    description:
      "An intelligent AI-powered research agent that autonomously gathers, analyzes, and synthesizes information from multiple sources. Features advanced natural language processing and automated research workflows for comprehensive data analysis.",
    tech: ["Python", "LangChain", "OpenAI", "FastAPI", "React", "TypeScript"],
    github: "https://github.com/Bibek-Gupta14/AgentResearch-ai",
    live: "https://github.com/Bibek-Gupta14/AgentResearch-ai",
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
    live: "https://github.com/Bibek-Gupta14/DocQuery",
    period: "Dec 2025 – Jan 2026",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "AMO ESIS Portal - Government",
    description:
      "A comprehensive government portal for the Employees' State Insurance Scheme in Meghalaya. Built with accessibility and compliance at its core, featuring WCAG 2.1 AA compliance, GIGW 3.0 certification, responsive design, and advanced typography controls for inclusive access to social security benefits.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "WCAG 2.1 AA", "Responsive Design"],
    github: "https://github.com/Bibek-Gupta14/AMO-ESIS",
    live: "https://bibek-gupta14.github.io/AMO-ESIS",
    period: "May 2026 ",
    image:
      "https://img.magnific.com/premium-vector/ashok-pillar-vector-sign-symbol-satyamev-jayete-text-hindi-ashok-stambh-sign-symbol-national-emblem-india-government-india-vector-illustration-flat-design_1228591-626.jpg?w=1480?w=300&h=100&fit=fill",
    featured: false,
  },
  {
    title: "Wage Regression Analysis",
    description:
      "Built a machine learning model to predict employee salaries using real-world demographic and employment data. Applied data pre-processing, label encoding, and exploratory data analysis.",
    tech: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    github:
      "https://github.com/Bibek-Gupta14/Bibek-Gupta14-Employee-Salary-Prediction-ML.git",
    live: "https://bibek-gupta14-employee-salary-prediction-ml.streamlit.app/",
    period: "Jun 2025 – Jul 2025",
    image: "/machine-learning-salary-prediction-data-visualizat.jpg",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive collection of my work in AI, machine learning, and
              full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  <div className="p-6">
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

                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
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
                        <Github size={16} />
                        Code
                      </a>
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
