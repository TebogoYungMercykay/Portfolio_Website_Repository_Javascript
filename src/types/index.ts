// Data Types

export interface SocialMedia {
  name: string;
  url: string;
}

export interface EducationItem {
  year: string;
  institution: string;
  details: string;
  group?: string;
}

export interface ExperienceItem {
  year: string;
  position: string;
  details: string;
  group?: string;
}

export interface AboutData {
  name: string;
  imagesrc: string;
  description: string;
  education: EducationItem[];
  experience: ExperienceItem[];
}

export interface LanguageProgress {
  name: string;
  percentage: number;
}

export interface LanguageIcon {
  id: string;
  imagesrc: string;
  altText: string;
  style: number;
}

export interface LanguageDetail {
  id: number;
  imagesrc: string;
  name: string;
  description: string;
  repositories: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  image: string;
  bgColor?: string;
  description: string;
  clientSide?: string;
  serverSide?: string;
  concepts?: string;
  githubLink?: string;
  liveLink?: string;
}

// Theme Types

export type ThemeMode = "dark" | "light";

export interface ThemeColors {
  "--bg-color": string;
  "--black-color": string;
  "--second-bg-color": string;
  "--animation-color": string;
  "--grad-animation-color": string;
  "--grad1-animation-color": string;
  "--text-color": string;
  "--main-color": string;
  "--main-box-color": string;
  "--lang-color": string;
  "--lang-color-yel": string;
  "--transparent-bg-color": string;
  "--grey-color": string;
  "--projects-grey-color": string;
  "--contact-input-hover": string;
  "--color-box-effect": string;
}

// Component Props

export interface SectionProps {
  className?: string;
}

export interface JourneyCardProps {
  year: string;
  title: string;
  details: string;
  connectToNext?: boolean;
}

export interface JourneyTimelineProps {
  education: EducationItem[];
  experience: ExperienceItem[];
}

export interface ProgressBarProps {
  name: string;
  percentage: number;
}

export interface SkillsSectionProps {
  mostUsed: LanguageProgress[];
  additional: LanguageProgress[];
}

export interface SkillsColumnProps {
  title: string;
  languages: LanguageProgress[];
}

export interface ProfileImageProps {
  src: string;
  alt: string;
  size?: string;
}

export interface LinkButtonProps {
  href: string;
  icon?: string;
  label: string;
  external?: boolean;
}

export interface SocialLinksProps {
  className?: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectsGridProps {
  projects: Project[];
}
