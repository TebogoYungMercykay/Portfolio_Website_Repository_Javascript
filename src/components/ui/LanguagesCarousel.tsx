"use client";

import { useState } from "react";
import Image from "next/image";
import { languageIcons, languageDetails } from "@/data";

export default function LanguagesCarousel() {
  const [activeId, setActiveId] = useState("languages_content1");

  return (
    <div className="languages_section">
      <div className="languages_container">
        {/* Orbiting language icons */}
        <div className="languages_icon">
          {languageIcons.map((lang) => (
            <div
              key={lang.id}
              className={`imgBx ${activeId === lang.id ? "active" : ""}`}
              style={{ "--i": lang.style } as React.CSSProperties}
              onMouseOver={() => setActiveId(lang.id)}
            >
              <Image
                src={lang.imagesrc}
                alt={lang.altText}
                width={80}
                height={80}
                style={{
                  transform: `rotate(calc(-360deg / 8 * ${lang.style}))`,
                  filter: activeId === lang.id ? "grayscale(0)" : "grayscale(0.9)",
                }}
                className="absolute top-0 left-0 w-full h-full rounded-full object-cover transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* Center content */}
        <div className="languages_content">
          {languageDetails.map((lang) => (
            <div
              key={lang.id}
              className={`languages_contentBx ${
                activeId === `languages_content${lang.id}` ? "active" : ""
              }`}
              id={`languages_content${lang.id}`}
            >
              <div className="card">
                <div className="imgBx">
                  <Image
                    src={lang.imagesrc}
                    alt={lang.name}
                    width={210}
                    height={210}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="textBx">
                  <h2 className="Type_C">
                    #{lang.id}. {lang.name}
                    <br />
                    <span>{lang.description}</span>
                  </h2>
                  <ul className="sci">
                    <li>{lang.repositories} Repositories on GitHub</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
