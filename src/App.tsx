import React from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { TimelineSection } from "./components/TimelineSection";
import { ProjectsSection } from "./components/ProjectSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--background-light)] dark:bg-[var(--background-dark)] text-slate-900 dark:text-slate-100 font-display">
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
