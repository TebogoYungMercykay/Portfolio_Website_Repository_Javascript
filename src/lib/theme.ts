import { ThemeMode, ThemeColors } from "@/types";

const darkColors: ThemeColors = {
  "--bg-color": "hsla(0, 0%, 15%, 0.99)",
  "--black-color": "hsla(0, 0%, 0%, 0.962)",
  "--second-bg-color": "hsla(0, 0%, 10%, 0.948)",
  "--animation-color": "hsla(0, 0%, 65%, 0.082)",
  "--grad-animation-color": "hsla(0, 0%, 64%, 0.073)",
  "--grad1-animation-color": "hsla(0, 0%, 64%, 0)",
  "--text-color": "hsl(0, 0%, 95%)",
  "--main-color": "hsl(0, 0%, 70%)",
  "--main-box-color": "hsla(165, 100%, 100%, 0.977)",
  "--lang-color": "hsla(165, 100%, 98%, 0.98)",
  "--lang-color-yel": "hsla(160, 100%, 98%, 0.08)",
  "--transparent-bg-color": "hsla(0, 0%, 100%, 0.18)",
  "--grey-color": "hsla(165, 100%, 98%, 0.508)",
  "--projects-grey-color": "hsla(0, 0%, 57%, 0.09)",
  "--contact-input-hover": "hsla(0, 100%, 100%, 0.999)",
  "--color-box-effect": "hsla(165, 100%, 98%, 0.25)",
};

const lightColors: ThemeColors = {
  "--bg-color": "hsl(0, 0%, 100%)",
  "--black-color": "hsla(0, 0%, 96%, 0.983)",
  "--second-bg-color": "hsla(0, 0%, 75%, 0.7)",
  "--animation-color": "hsla(185, 100%, 10%, 0.158)",
  "--grad-animation-color": "hsla(185, 100%, 10%, 0.124)",
  "--grad1-animation-color": "hsla(185, 100%, 10%, 0)",
  "--text-color": "hsla(0, 0%, 8%, 0.844)",
  "--main-color": "hsla(185, 100%, 12%, 0.737)",
  "--main-box-color": "hsl(185, 100%, 19%)",
  "--lang-color": "hsla(185, 100%, 32%, 0.58)",
  "--lang-color-yel": "hsla(180, 98%, 16%, 0.62)",
  "--transparent-bg-color": "hsla(185, 98%, 21%, 0.178)",
  "--grey-color": "hsla(0, 0%, 18%, 0.89)",
  "--projects-grey-color": "hsla(0, 0%, 67%, 0.209)",
  "--contact-input-hover": "hsla(185, 98%, 21%, 0.178)",
  "--color-box-effect": "hsla(185, 100%, 10%, 0.5)",
};

export function getThemeColors(mode: ThemeMode): ThemeColors {
  return mode === "light" ? lightColors : darkColors;
}

export function applyTheme(mode: ThemeMode): void {
  const colors = getThemeColors(mode);
  const root = document.documentElement;

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  root.setAttribute("current-theme", mode);
  localStorage.setItem("default_theme", mode);
}

export function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("default_theme") as ThemeMode) || "dark";
}
