"use client";

import { useEffect } from "react";
import { updateViewportRatios } from "@/lib/helpers";
import { applyTheme, getStoredTheme } from "@/lib/theme";

import BackgroundAnimation from "@/components/ui/BackgroundAnimation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeSection from "@/components/site/HomeSection";
import AboutSection from "@/components/site/AboutSection";
import PortfolioSection from "@/components/site/PortfolioSection";
import ContactSection from "@/components/site/ContactSection";

export default function Home() {
  useEffect(() => {
    // Apply stored theme
    applyTheme(getStoredTheme());

    // Viewport ratio management
    updateViewportRatios();
    window.addEventListener("resize", updateViewportRatios);

    return () => {
      window.removeEventListener("resize", updateViewportRatios);
    };
  }, []);

  return (
    <>
      <Header />
      <BackgroundAnimation />
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
}
