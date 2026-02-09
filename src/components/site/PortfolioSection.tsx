"use client";

import LanguagesCarousel from "@/components/ui/LanguagesCarousel";
import LinkButton from "@/components/common/LinkButton";
import { SkillsSection, ProjectsGrid } from "./partials";
import { mostUsedLanguages, additionalLanguages, projectsData } from "@/data";

export default function PortfolioSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      className="Portfolio min-h-full pb-12 pt-40 px-[9%] max-[991px]:px-[4%]"
      id="Portfolio"
    >
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

      <LanguagesCarousel />

      <SkillsSection mostUsed={mostUsedLanguages} additional={additionalLanguages} />

      <hr className="border-theme-grey my-8" />

      <ProjectsGrid projects={projectsData} />

      {/* GitHub Button */}
      <div className="profile-github mt-[50px] mb-[50px] flex justify-center">
        <LinkButton
          href="https://github.com/TebogoYungMercykay"
          icon="bx bxl-github"
          label="Github"
        />
      </div>
      <br />
    </section>
  );
}
