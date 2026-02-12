import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projects";

export const ProjectsSection: React.FC = () => {
  return (
    <section className="py-32 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-[var(--primary)] text-xs font-black uppercase tracking-[0.3em]">
            Showcase
          </span>
          <h2 className="text-5xl md:text-7xl font-black mt-4">
            PERSONAL PROJECTS
          </h2>
        </div>

        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
