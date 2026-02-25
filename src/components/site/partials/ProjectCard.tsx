import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="section_project p-5 rounded-[9px] border-2 border-theme-grey bg-theme-bg-second font-mono flex flex-col relative items-center transition-shadow duration-700 hover:shadow-[0_0_15px_var(--main-color)] hover:border-theme-main">
      <h3 className="project_tittle text-center pt-2.5 pb-1 font-bold uppercase text-[1.75em] leading-[1.6em] min-h-[5em] overflow-hidden w-full">
        {project.title}
        <br />
        {project.subtitle || ""}
      </h3>

      <div 
        className="relative w-full aspect-square rounded-[3px] mb-6 overflow-hidden"
      >
        <div
          className={`absolute inset-0 ${project.bgColor ? "p-4" : ""}`}
          style={{ backgroundColor: project.bgColor || "transparent" }}
        >
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={`Image: ${project.title}`}
              fill
              className="object-cover rounded-[3px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      <div className="div-project-details mb-[90px]">
        {project.description && (
          <p
            className="project-details font-montserrat p-1.5 leading-[22px] text-center text-[16px]"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        )}
        {project.clientSide && (
          <p
            className="project-details font-montserrat p-1.5 leading-[22px] text-center text-[16px]"
            dangerouslySetInnerHTML={{ __html: project.clientSide }}
          />
        )}
        {project.serverSide && (
          <p
            className="project-details font-montserrat p-1.5 leading-[22px] text-center text-[16px]"
            dangerouslySetInnerHTML={{ __html: project.serverSide }}
          />
        )}
        {project.concepts && (
          <p
            className="project-details font-montserrat p-1.5 leading-[22px] text-center text-[16px]"
            dangerouslySetInnerHTML={{ __html: project.concepts }}
          />
        )}
      </div>

      {project.githubLink && (
        <a
          href={project.githubLink}
          className="view_project_on_github mb-4 absolute bottom-0 text-[1.7em] bg-theme-bg text-theme-text py-3 px-[10px] min-w-[200px] font-semibold rounded-[9px] flex items-center justify-center text-center border-2 border-theme-grey transition-all duration-[0.9s] hover:bg-theme-grey hover:text-theme-bg hover:border-theme-transparent-bg"
          target="_blank"
          rel="noopener"
        >
          <i className="bx bxl-github mr-1.5" /> Project Code
        </a>
      )}

      {project.liveLink && (
        <a
          href={project.liveLink}
          className="view_project_on_github mb-4 absolute bottom-0 text-[1.7em] bg-theme-bg text-theme-text py-3 px-[10px] min-w-[200px] font-semibold rounded-[9px] flex items-center justify-center text-center border-2 border-theme-grey transition-all duration-[0.9s] hover:bg-theme-grey hover:text-theme-bg hover:border-theme-transparent-bg"
          target="_blank"
          rel="noopener"
        >
          <i className="bx bxl-netlify mr-1.5" /> Live Demo
        </a>
      )}
    </div>
  );
}
