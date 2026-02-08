"use client";

import Image from "next/image";
import { aboutData } from "@/data";

export default function AboutSection() {
  return (
    <section
      className="about flex min-h-screen justify-center items-center flex-col gap-8 bg-theme-bg-second pb-24"
      id="about"
    >
      <h2 className="heading relative text-[5rem] mb-12 text-center">
        About <span className="text-theme-main">Me</span>
      </h2>

      {/* Profile Image */}
      <div className="about-img relative inline-flex justify-center items-center w-[30rem] h-[30rem] rounded-full aspect-square">
        <Image
          src="/images/tebogoyungmercykay.png"
          alt="My-Profile-Image"
          width={300}
          height={300}
          className="w-[95%] h-[95%] object-cover rounded-full border-2 border-theme-main"
        />
        <span className="circle-spin absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-b-2 border-t-2 border-b-theme-bg-second border-t-theme-bg-second border-l-2 border-r-2 border-l-theme-main border-r-theme-main animate-aboutSpinner" />
      </div>

      {/* About Content */}
      <div className="about-content text-center">
        <h3 className="relative inline-block text-[2.6rem]">
          Software Engineer/Developer!
        </h3>
        <p
          className="font-montserrat relative text-[1.7rem] mt-8 mb-12 px-[10%]"
          dangerouslySetInnerHTML={{ __html: aboutData.description }}
        />

        {/* Journey */}
        <div className="journey flex justify-center items-center flex-col pb-12 relative">
          <h2 className="heading relative text-[5rem] mb-12 text-center">
            My <span className="text-theme-main">Journey</span>
          </h2>

          <div className="journey-row flex flex-wrap gap-20">
            {/* Education */}
            <div className="journey-column flex-[1_1_40rem]">
              <h3 className="title relative inline-block text-[2.5rem] mb-6 ml-8">
                Education
              </h3>
              <div className="journey-box relative border-l-2 border-theme-main">
                {aboutData.education.map((item, idx) => (
                  <div key={idx} className="journey-content relative pl-8 pr-1">
                    <div className="absolute top-0 -left-6 w-12 h-12 bg-[url('/images/brain.png')] bg-center bg-no-repeat bg-theme-main-box bg-[length:40px] rounded-full" />
                    <div className="content relative p-6 border-2 border-theme-main rounded-[0.8rem] mb-8 overflow-hidden group">
                      <div className="absolute top-0 left-0 w-0 h-full bg-theme-transparent-bg -z-[1] transition-all duration-500 group-hover:w-full" />
                      <div className="year text-[1.8rem] text-theme-main pb-2">
                        <i className="bx bxs-calendar pr-2" />
                        {item.year}
                      </div>
                      <h3 className="text-[2rem]">{item.institution}</h3>
                      <p className="font-montserrat text-[1.7rem] pt-2">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="journey-column flex-[1_1_40rem]">
              <h3 className="title relative inline-block text-[2.5rem] mb-6 ml-8">
                Experience
              </h3>
              {aboutData.experience.map((item, idx) => (
                <div key={idx} className="journey-box relative border-l-2 border-theme-main">
                  <div className="journey-content relative pl-8 pr-1">
                    <div className="absolute top-0 -left-6 w-12 h-12 bg-[url('/images/brain.png')] bg-center bg-no-repeat bg-theme-main-box bg-[length:40px] rounded-full" />
                    <div className="content relative p-6 border-2 border-theme-main rounded-[0.8rem] mb-8 overflow-hidden group">
                      <div className="absolute top-0 left-0 w-0 h-full bg-theme-transparent-bg -z-[1] transition-all duration-500 group-hover:w-full" />
                      <div className="year text-[1.8rem] text-theme-main pb-2">
                        <i className="bx bxs-calendar pr-2" />
                        {item.year}
                      </div>
                      <h3 className="text-[2rem]">{item.position}</h3>
                      <p className="font-montserrat text-[1.7rem] pt-2">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LinkedIn Button */}
        <div className="btn-box btns inline-block w-60">
          <a
            href="https://www.linkedin.com/in/sello-selepe-tebogoyungmercykay/"
            className="btn relative inline-flex justify-center items-center w-70 h-full bg-theme-main border-2 border-theme-animation rounded-[0.8rem] text-[2.4rem] font-semibold tracking-wider text-theme-bg z-[1] overflow-hidden transition-all duration-500 hover:text-theme-main group py-3 px-5"
            target="_blank"
            rel="noopener"
          >
            <span className="absolute top-0 left-0 w-0 h-full bg-theme-bg -z-[1] transition-all duration-500 group-hover:w-full" />
            <i className="bx bxl-linkedin mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
