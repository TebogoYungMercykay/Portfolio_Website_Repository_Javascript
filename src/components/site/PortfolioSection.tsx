"use client";

import ProgressBar from "@/components/ui/ProgressBar";
import LanguagesCarousel from "@/components/ui/LanguagesCarousel";
import ProjectCard from "@/components/site/ProjectCard";
import { mostUsedLanguages, additionalLanguages, projectsData } from "@/data";

export default function PortfolioSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="Portfolio min-h-full pb-12 pt-40 px-[9%] max-[991px]:px-[4%]" id="Portfolio">
      <h2 className="heading relative text-[5rem] mb-12 text-center inline-block left-1/2 -translate-x-1/2 pb-[50px]">
        Professional <span className="text-theme-main">Skill Set</span>
      </h2>

      {/* GitHub Stats Title */}
      <div className="Portfolio-row flex flex-wrap gap-20">
        <div className="Portfolio-column flex-[1_1_40rem] text-center">
          <h3 className="title relative inline-block text-[2.5rem]">
            My Top Eight Most Used languages: GitHub Stats for Jan{" "}
            <span className="text-theme-main">{currentYear}</span> - Current
          </h3>
        </div>
      </div>

      {/* Languages Carousel */}
      <LanguagesCarousel />

      {/* Skills Progress Bars */}
      <div className="Portfolio-row flex flex-wrap gap-20">
        <div className="Portfolio-column flex-[1_1_40rem]">
          <h3 className="title relative inline-block text-[2.5rem] mb-6">
            Skills - Most Used languages (Proficiency %)
          </h3>
          <div className="Portfolio-box relative">
            <div className="Portfolio-content relative border-2 border-theme-main rounded-[0.6rem] py-2 px-6 z-[1] overflow-hidden group">
              <div className="absolute top-0 left-0 w-0 h-full bg-theme-transparent-bg -z-[1] transition-all duration-500 group-hover:w-full" />
              {mostUsedLanguages.map((lang, idx) => (
                <ProgressBar key={idx} name={lang.name} percentage={lang.percentage} />
              ))}
            </div>
          </div>
        </div>

        <div className="Portfolio-column flex-[1_1_40rem]">
          <h3 className="title relative inline-block text-[2.5rem] mb-6">
            Skills - Tools and languages (Proficiency %)
          </h3>
          <div className="Portfolio-box relative">
            <div className="Portfolio-content relative border-2 border-theme-main rounded-[0.6rem] py-2 px-6 z-[1] overflow-hidden group">
              <div className="absolute top-0 left-0 w-0 h-full bg-theme-transparent-bg -z-[1] transition-all duration-500 group-hover:w-full" />
              {additionalLanguages.map((lang, idx) => (
                <ProgressBar key={idx} name={lang.name} percentage={lang.percentage} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-theme-grey my-8" />

      {/* Projects Title */}
      <div className="Portfolio-row flex flex-wrap gap-20">
        <div className="Portfolio-column flex-[1_1_40rem] text-center">
          <h3 className="relative inline-block text-[4.7rem] mt-40 text-theme-text">
            Most Recent <span className="text-theme-main">Projects !!</span>
          </h3>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="section_projects text-theme-text grid relative z-[1] grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-[50px] mx-auto mt-[90px] mb-2.5 max-w-[1240px] p-5 rounded-[15px] bg-theme-projects-grey transition-shadow duration-700 hover:shadow-[0_0_16px_var(--main-color)]">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {/* GitHub Button */}
      <div className="profile-github mt-[50px] mb-[50px] flex justify-center">
        <div className="btn-box btns inline-block w-60">
          <a
            href="https://github.com/TebogoYungMercykay"
            className="btn relative inline-flex justify-center items-center w-60 h-full bg-theme-main border-2 border-theme-animation rounded-[0.8rem] text-[2.4rem] font-semibold tracking-wider text-theme-bg z-[1] overflow-hidden transition-all duration-500 hover:text-theme-main group py-2 px-1.5"
            target="_blank"
            rel="noopener"
          >
            <span className="absolute top-0 left-0 w-0 h-full bg-theme-bg -z-[1] transition-all duration-500 group-hover:w-full" />
            <i className="bx bxl-github mr-2" /> Github
          </a>
        </div>
      </div>
      <br />
    </section>
  );
}
