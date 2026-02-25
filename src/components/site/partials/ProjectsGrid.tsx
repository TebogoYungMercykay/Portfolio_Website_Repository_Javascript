import ProjectCard from "@/components/site/partials/ProjectCard";
import { Project } from "@/types";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <>
      {/* Projects Title */}
      <div className="Portfolio-row flex flex-wrap gap-20">
        <div className="Portfolio-column flex-[1_1_40rem] text-center">
          <h3 className="relative inline-block text-[4.7rem] mt-40 text-theme-text">
            Most Recent <span className="text-theme-main">Projects !!</span>
          </h3>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="section_projects text-theme-text grid relative z-[1] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px] mt-[90px] mb-2.5 p-5 rounded-[15px] bg-theme-projects-grey transition-shadow duration-700 hover:shadow-[0_0_16px_var(--main-color)]">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </>
  );
}
