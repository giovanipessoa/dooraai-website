export const APP_URL =
  import.meta.env.VITE_APP_URL?.trim() || "https://app.dooraai.com";

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  element.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}
