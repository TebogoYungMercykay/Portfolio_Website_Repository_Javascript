"use client";

import { useEffect, useState, useCallback } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#Portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 100);
    setIsMenuOpen(false);

    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height && id) {
        setActiveSection(id);
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });

    // Footer animation
    const footer = document.querySelector("footer");
    if (footer) {
      footer.classList.toggle(
        "show-animate",
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
      );
    }

    // Update document title
    const active = activeSection === "home" ? "Home" : activeSection;
    document.title =
      active === "home" || active === "Home"
        ? "Hi there, Hero."
        : `${active.charAt(0).toUpperCase() + active.slice(1)} Section`;
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-8 px-[9%] bg-transparent flex justify-between items-center z-[100] transition-all duration-300 ${
        isSticky ? "!bg-theme-bg opacity-[0.96]" : ""
      }`}
    >
      <a href="#" className="relative text-[2.5rem] text-theme-text font-semibold">
        {"<TebogoYungMercykay/>"}
      </a>

      <div
        className={`mobile-menu-icon bx ${isMenuOpen ? "bx-x" : "bx-menu"} relative text-[3.6rem] text-theme-text cursor-pointer`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <nav
        className={`navbar relative md:flex md:items-center max-md:absolute max-md:top-full max-md:w-full max-md:p-4 max-md:shadow-md max-md:z-[1] max-md:transition-all max-md:duration-250 ${
          isMenuOpen
            ? "max-md:left-0 max-md:bg-theme-bg-second"
            : "max-md:left-[-100%]"
        }`}
      >
        {navItems.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`text-[1.7rem] font-medium ml-14 transition-colors duration-300 max-md:block max-md:text-[2rem] max-md:my-12 max-md:ml-0 ${
              activeSection === href.slice(1) ? "!text-theme-main" : "text-theme-text"
            } hover:text-theme-main`}
            onClick={() => setIsMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a className="ml-14 max-md:block max-md:my-12 max-md:ml-0">
          <ThemeToggle />
        </a>
        <span className="active-nav" />
      </nav>
    </header>
  );
}
