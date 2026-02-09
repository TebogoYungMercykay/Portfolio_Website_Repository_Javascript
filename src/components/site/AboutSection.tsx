"use client";

import { aboutData } from "@/data";
import { ProfileImage, JourneyTimeline } from "./partials";
import LinkButton from "@/components/common/LinkButton";

export default function AboutSection() {
  return (
    <section
      className="about flex min-h-screen justify-center items-center flex-col gap-8 bg-theme-bg-second pb-24"
      id="about"
    >
      <h2 className="heading relative text-[5rem] mb-12 text-center">
        About <span className="text-theme-main">Me</span>
      </h2>

      <ProfileImage src={aboutData.imagesrc} alt="My-Profile-Image" />

      <div className="about-content text-center">
        <h3 className="relative inline-block text-[2.6rem]">
          Software Engineer/Developer!
        </h3>
        <p
          className="font-montserrat relative text-[1.7rem] mt-8 mb-12 px-[10%]"
          dangerouslySetInnerHTML={{ __html: aboutData.description }}
        />

        <JourneyTimeline
          education={aboutData.education}
          experience={aboutData.experience}
        />

        <LinkButton
          href="https://www.linkedin.com/in/sello-selepe-tebogoyungmercykay/"
          icon="bx bxl-linkedin"
          label="LinkedIn"
        />
      </div>
    </section>
  );
}
