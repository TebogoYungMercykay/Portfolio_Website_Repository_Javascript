"use client";

import SocialLinks from "@/components/common/SocialLinks";
import { ContactInfo, ContactForm } from "./partials";

export default function ContactSection() {
  return (
    <section
      className="contact min-h-screen pb-28 bg-theme-bg-second pt-40 px-4"
      id="contact"
    >
      <div className="max-w-[1280px] mx-auto w-full">
        <h2 className="heading relative text-[5rem] mb-12 text-center">
          Contact <span className="text-theme-main">Me!</span>
        </h2>

        <div className="outer-container flex items-center justify-center px-16 py-8 rounded-xl bg-theme-projects-grey max-lg:px-6 max-md:flex-col max-md:p-0">
          <ContactInfo />
          <ContactForm />
        </div>

        <div className="flex justify-center">
          <SocialLinks className="mt-24 max-sm:w-40" />
        </div>
      </div>
    </section>
  );
}
