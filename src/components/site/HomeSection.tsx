"use client";

import Image from "next/image";
import SocialLinks from "@/components/common/SocialLinks";
import { HeroContent } from "./partials";

export default function HomeSection() {
  return (
    <section
      className="home show-animate flex min-h-screen items-center px-[9%] max-[991px]:px-[4%] max-[750px]:pl-0 max-[750px]:justify-center"
      id="home"
    >
      <HeroContent />

      <SocialLinks className="absolute bottom-16 max-[520px]:w-40 max-[462px]:w-[120px]" />

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
