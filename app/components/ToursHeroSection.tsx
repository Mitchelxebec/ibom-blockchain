"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/heroimage1.jpeg",
  "/images/heroimage2.jpeg",
  "/images/heroimage3.jpeg",
  "/images/heroimage4.jpeg",
  "/images/heroimage5.jpeg",
  "/images/heroimage6.jpeg",
  "/images/heroimage7.jpeg",
];

export default function ToursHeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-[60px] pt-[100px] pb-[60px] md:pt-0 overflow-hidden">

      {/* Slideshow backgrounds */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt={`Hero background ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i); }}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background: i === current ? "#ff8a2a" : "rgba(255,255,255,0.4)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[800px]">
        <h1
          className="text-[32px] md:text-[55px] font-black leading-[1.1] mb-5 text-white"
          style={{ fontFamily: "var(--font-dt-getai)" }}
        >
          West Africa&apos;s Largest<br />Blockchain Tour
        </h1>
        <p
          className="text-[15px] md:text-[18px] font-normal leading-[24px] text-white/90 mb-8 max-w-[680px]"
          style={{ letterSpacing: "-0.015em" }}
        >
          The IBX Tour is a cross-border blockchain movement mobilizing communities, innovators, founders, developers, students, creators, and ecosystems across West Africa to accelerate blockchain adoption, collaboration, and ecosystem growth at scale.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-[15px]">
          <Link
            href="https://ibx2026.eventcrib.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff8a2a] text-black font-semibold text-[14px] rounded-[6px] px-7 py-3 transition-all duration-300 hover:brightness-110 text-center"
          >
            Join The Tour
          </Link>
          <a
            href="mailto:partnerships@ibomblockchain.com"
            className="bg-white text-black font-semibold text-[14px] rounded-[6px] px-7 py-3 transition-all duration-300 hover:bg-gray-100 text-center"
          >
            Partner with Us
          </a>
        </div>
      </div>
    </section>
  );
}
