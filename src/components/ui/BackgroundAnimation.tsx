"use client";

import { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const numBoxes = 900;
    for (let i = 0; i < numBoxes; i++) {
      const box = document.createElement("div");
      box.classList.add("colorBoxEffect");
      container.appendChild(box);
    }

    return () => {
      while (container.firstChild && container.children.length > 1) {
        container.removeChild(container.lastChild!);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen grid overflow-hidden"
      style={{ gridTemplateColumns: "repeat(30, 1fr)", gridTemplateRows: "repeat(30, 1fr)" }}
    >
      <div className="absolute top-0 left-0 w-full h-[300px] animate-animBack"
        style={{
          background: `linear-gradient(to bottom,
            var(--grad1-animation-color) 0%,
            var(--grad-animation-color) 35%,
            var(--animation-color) 50%,
            var(--grad-animation-color) 60%,
            var(--grad1-animation-color) 100%
          )`,
        }}
      />
    </div>
  );
}
