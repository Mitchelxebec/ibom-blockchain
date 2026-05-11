
"use client";

import { useEffect, useState } from "react";

export default function ToursNavbarScroll({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        borderBottom: scrolled ? "2px solid #000" : "2px solid transparent",
        backgroundColor: scrolled ? "#000" : undefined,
        transition: "border-bottom 0.3s ease, background-color 0.3s ease",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
      }}
    >
      {children}
    </div>
  );
}