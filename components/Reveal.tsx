"use client";

import { useEffect } from "react";

/** Adds a subtle fade-up to any element with [data-reveal] as it scrolls into view. */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.documentElement.classList.add("js-reveal");
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
