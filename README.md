# Portfolio Website

<img src="public/images/readme.png" style="width: 100%; height: 40%;" />

Welcome to my personal portfolio website repository. This project showcases my skills, projects, and professional experience as a developer.

## Overview

This website highlights my background, technical skills, and selected projects. Explore the site to learn more about my work and expertise.

## Tech Stack

- **Framework:** Next.js (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Custom CSS
- **Fonts:** Poppins, Montserrat (self-hosted)
- **Icons:** Boxicons, Bootstrap Icons
- **Deployment:** Vercel, Docker

## Features

- Dark/Light theme toggle with persistent preference
- Responsive design with mobile navigation menu
- Interactive languages carousel showcasing GitHub stats
- Skill proficiency progress bars
- Project portfolio grid with live demo and GitHub links
- Contact form with validation (powered by SheetDB)
- Animated background grid effect
- Dynamic viewport ratio scaling for consistent sizing across breakpoints

## Project Structure

```
.
├── Dockerfile                  # Container build configuration
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS theme and extensions
├── tsconfig.json               # TypeScript compiler options
├── postcss.config.mjs          # PostCSS plugins
├── package.json                # Dependencies and scripts
│
└── src/
    ├── app/
    │   ├── globals.css         # Global styles, fonts, CSS variables, animations
    │   ├── layout.tsx          # Root layout with metadata and icon imports
    │   └── page.tsx            # Main page composing all sections
    │
    ├── components/
    │   ├── common/
    │   │   ├── LinkButton.tsx  # Reusable styled CTA button
    │   │   └── SocialLinks.tsx # Social media icon links
    │   ├── layout/
    │   │   ├── Header.tsx      # Sticky header with nav and mobile menu
    │   │   └── Footer.tsx      # Footer with copyright and scroll-to-top
    │   ├── site/
    │   │   ├── HomeSection.tsx      # Hero section orchestrator
    │   │   ├── AboutSection.tsx     # Bio, education, and experience orchestrator
    │   │   ├── PortfolioSection.tsx # Skills, carousel, and projects orchestrator
    │   │   ├── ContactSection.tsx   # Contact form and info orchestrator
    │   │   ├── ProjectCard.tsx      # Individual project card
    │   │   └── partials/
    │   │       ├── index.ts         # Barrel exports for partials
    │   │       ├── HeroContent.tsx      # Hero text, animated title, CTAs
    │   │       ├── ProfileImage.tsx     # Avatar with spinning border
    │   │       ├── JourneyTimeline.tsx  # Education + experience columns
    │   │       ├── JourneyCard.tsx      # Single timeline entry
    │   │       ├── SkillsSection.tsx    # Dual progress bar columns
    │   │       ├── ProjectsGrid.tsx     # Projects title and grid
    │   │       ├── ContactInfo.tsx      # Address, email, phone block
    │   │       └── ContactForm.tsx      # Form state, validation, submission
    │   └── ui/
    │       ├── BackgroundAnimation.tsx  # Animated grid background
    │       ├── LanguagesCarousel.tsx    # Orbiting language icon carousel
    │       ├── ProgressBar.tsx          # Skill proficiency bar
    │       └── ThemeToggle.tsx          # Dark/light mode toggle
    │
    ├── data/
    │   ├── index.ts            # Barrel exports
    │   ├── about-data.ts       # Education and experience entries
    │   ├── languages-data.ts   # Language stats, icons, and details
    │   ├── projects-data.ts    # Project portfolio entries
    │   └── social-media.ts     # Social media links
    │
    ├── lib/
    │   ├── helpers.ts          # Viewport ratio utility
    │   ├── seo.ts              # Site metadata configuration
    │   └── theme.ts            # Theme colors and toggle logic
    │
    └── types/
        └── index.ts            # TypeScript interfaces and types
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Or run with Docker
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Releases

This site has evolved through multiple iterations. The current version is a complete rebuild in Next.js with TypeScript and Tailwind CSS.

| Version | Stack | Link |
|---------|-------|------|
| **Next.js** (latest) | Next.js, TypeScript, Tailwind CSS | _Release coming soon_ |
| **v4.0.3** | HTML, CSS, JavaScript, jQuery, Bootstrap | [v4.0.3](https://github.com/TebogoYungMercykay/Portfolio_Website_Repository_Javascript/releases/tag/v4.0.3) |

View all previous releases: [All Releases](https://github.com/TebogoYungMercykay/Portfolio_Website_Repository_Javascript/releases)

## License

This project is licensed under the Apache License. See the [LICENSE](LICENCE.md) file for more details.

> _Original design inspiration from [codehalweb.com](https://codehalweb.com/responsive-portfolio-website/). Rebuilt from scratch in Next.js with TypeScript and Tailwind CSS._

## Contact

- WhatsApp/Mobile: +27 66 411 0178
- Email: [sbkskhalo.kq@gmail.com](mailto:sbkskhalo.kq@gmail.com)
- LinkedIn: [in/sello-selepe-tebogoyungmercykay](https://www.linkedin.com/in/sello-selepe-tebogoyungmercykay)
- GitHub Profile: [Portfolio Website Link](https://tebogoyungmercykay.vercel.app)

Feel free to reach out for collaboration, networking, or questions. Thank you for visiting my portfolio.

---
