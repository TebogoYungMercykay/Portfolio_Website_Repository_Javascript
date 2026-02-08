"use client";

import { useEffect, useState } from "react";
import { applyTheme, getStoredTheme } from "@/lib/theme";
import type { ThemeMode } from "@/types";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(stored);
    applyTheme(stored);
  }, []);

  const toggleTheme = () => {
    const next: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);

    // Update SVG developer image filter
    const img = document.getElementById("home-developer-img") as HTMLImageElement | null;
    if (img) {
      img.style.filter = next === "light" ? "none" : "grayscale(70%)";
    }
  };

  return (
    <i
      id="toggleDark"
      className={`cursor-pointer text-[2.3rem] ${
        theme === "dark" ? "bi-moon" : "bi-brightness-high-fill"
      }`}
      onClick={toggleTheme}
    />
  );
}
