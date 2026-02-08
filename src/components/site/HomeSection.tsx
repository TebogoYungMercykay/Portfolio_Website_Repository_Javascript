"use client";

import Image from "next/image";
import SocialLinks from "@/components/common/SocialLinks";

export default function HomeSection() {
  const handleGetResume = (e: React.MouseEvent) => {
    e.preventDefault();
    const subjectField = document.getElementById("subject") as HTMLInputElement;
    const messageField = document.getElementById("message") as HTMLTextAreaElement;
    if (subjectField) subjectField.value = "CONTACT FORM: Request for Resume";
    if (messageField) messageField.value = "Hi, I am interested in your resume. Please provide more details.";
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLetsTalk = (e: React.MouseEvent) => {
    e.preventDefault();
    const subjectField = document.getElementById("subject") as HTMLInputElement;
    const messageField = document.getElementById("message") as HTMLTextAreaElement;
    if (subjectField) subjectField.value = "CONTACT FORM: General Inquiry";
    if (messageField) messageField.value = "Hello, I would like to know more about your services.";
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="home show-animate flex min-h-screen items-center px-[9%] max-[991px]:px-[4%] max-[750px]:pl-0 max-[750px]:justify-center" id="home">
      <div className="home-content max-w-[60rem] max-[750px]:pl-[10%]">
        <h1 className="page-header relative inline-block text-[5.6rem] font-bold leading-[1.3] max-[462px]:text-[5.2rem] max-[520px]:flex max-[520px]:flex-col max-[371px]:text-center">
          Hi there, Hero... <br />
          I&apos;m <span className="!text-theme-text">Selepe Sello</span>
        </h1>

        <div className="text-animate relative w-[32.8rem]">
          <h3 className="text-[2.17rem] font-bold text-transparent [-webkit-text-stroke:0.7px_var(--main-color)] bg-gradient-to-r from-theme-main to-theme-main bg-no-repeat [-webkit-background-clip:text] bg-clip-text [background-position:-33rem_0] [.show-animate_&]:animate-homeBgText">
            Software Engineer/Developer
          </h3>
        </div>

        <p className="introduction font-montserrat relative text-[1.7rem] mt-8 mb-16 max-[848px]:max-w-[80%]">
          I build secure, scalable solutions using modern technologies.
          Specializing in Software Engineering and DevOps, with keen interest and
          passion in AWS Cloud Development, Cybersecurity, and Data Science to
          deliver high-performance applications that solve real-world challenges.
        </p>

        <div className="btn-box relative flex justify-between w-[34.5rem] h-20">
          <a
            href="#contact"
            onClick={handleGetResume}
            className="btn relative inline-flex justify-center items-center w-60 h-full bg-theme-main border-2 border-theme-animation rounded-[0.8rem] text-[1.73rem] font-semibold tracking-wider text-theme-bg z-[1] overflow-hidden transition-all duration-500 hover:text-theme-main group px-1.5"
          >
            <span className="absolute top-0 left-0 w-0 h-full bg-theme-bg -z-[1] transition-all duration-500 group-hover:w-full" />
            Get Resume
          </a>
          <a
            href="#contact"
            onClick={handleLetsTalk}
            className="btn relative inline-flex justify-center items-center w-60 h-full bg-transparent border-2 border-theme-main rounded-[0.8rem] text-[1.8rem] font-semibold tracking-wider text-theme-main z-[1] overflow-hidden transition-all duration-500 hover:text-theme-bg group"
          >
            <span className="absolute top-0 left-0 w-0 h-full bg-theme-main -z-[1] transition-all duration-500 group-hover:w-full" />
            Let&apos;s Talk
          </a>
        </div>
      </div>

      <SocialLinks className="absolute bottom-16 max-[520px]:w-40 max-[462px]:w-[120px]" />

      {/* Developer SVG */}
      <div className="home-developer-img absolute right-0 w-[45%] h-[70%] mt-[20%] mb-[20%] max-[750px]:hidden">
        <Image
          src="/images/developer.svg"
          alt="Developer Image"
          id="home-developer-img"
          width={600}
          height={400}
          className="w-[85%] h-auto absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 transition-all duration-[3s] opacity-85 hover:opacity-35"
          style={{ filter: "grayscale(70%)" }}
          priority
        />
      </div>
    </section>
  );
}
