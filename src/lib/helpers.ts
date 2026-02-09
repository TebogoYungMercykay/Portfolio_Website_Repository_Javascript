export function updateViewportRatios(): void {
  const width = window.innerWidth;
  let px: string;
  let em: string;

  if (width < 371) {
    px = "3px";
    em = "3em";
  } else if (width < 462) {
    px = "4.4px";
    em = "4.4em";
  } else if (width < 520) {
    px = "5px";
    em = "5em";
  } else if (width < 768) {
    px = "6px";
    em = "6em";
  } else {
    px = "10px";
    em = "10em";
  }

  document.documentElement.style.setProperty("--ratio-px-manipulation", px);
  document.documentElement.style.setProperty("--ratio-em-manipulation", em);
}
