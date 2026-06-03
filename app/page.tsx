import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TimelineExperience } from "@/components/timeline-experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Particles } from "@/components/particles";
import { CursorGlow } from "@/components/cursor-glow";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingNav } from "@/components/floating-nav";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Particles />
      <CursorGlow />
      <ScrollProgress />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <TimelineExperience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
      <FloatingNav />
      <BackToTop />
    </main>
  );
}
