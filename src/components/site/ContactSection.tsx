"use client";

import SocialLinks from "@/components/common/SocialLinks";
import { ContactInfo, ContactForm } from "./partials";

export default function ContactSection() {
  return (
    <section
      className="contact min-h-screen w-screen pb-28 bg-theme-bg-second items-center justify-center pt-40 px-[9%] max-[991px]:px-[4%]"
      id="contact"
    >
      <h2 className="heading relative text-[5rem] mb-12 text-center inline-block left-1/2 -translate-x-1/2">
        Contact <span className="text-theme-main">Me!</span>
      </h2>

      <div className="outer-container flex items-center justify-center px-[60px] mx-[10%] mt-[30px] mb-[30px] z-[1] rounded-xl bg-theme-projects-grey max-[1300px]:px-[25px] max-[1300px]:mx-[40px] max-[848px]:flex-col max-[848px]:p-0 max-[848px]:m-0">
        <ContactInfo />
        <ContactForm />
      </div>

      <div className="flex">
        <SocialLinks className="mt-[100px] mb-0 max-[520px]:w-40 max-[462px]:w-[120px]" />
      </div>
    </section>
  );
}
