"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/95 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/videos/header-vid.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 px-6 md:px-16 w-full max-w-7xl mx-auto pb-20 md:pb-24">
        <div className="w-full max-w-full md:max-w-[702px] flex flex-col gap-6 md:gap-8">
          <h1 className="font-[DM Sans] text-[40px] md:text-[56px] lg:text-[64px] font-black leading-tight md:leading-[64px] lg:leading-[72px] tracking-[-0.01em] text-white">
            West Africa's Largest <span className="text-[#E87A12]">Blockchain</span> Movement
          </h1>

          <p className="font-[DM Sans] text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[28px] tracking-[-0.015em] text-gray-300 max-w-[640px]">
            IBX is mobilizing communities, innovators, ecosystems, and global Web3 leaders to accelerate blockchain adoption, infrastructure, innovation, and opportunity across West Africa and beyond.
          </p>

          <div className="flex items-center gap-4 md:gap-6 mt-2">
            <Link
              href="/ibx26"
              className="bg-[#E87A12] text-black font-[DM Sans] font-bold text-[14px] md:text-[16px] rounded-lg px-6 md:px-8 py-3 md:py-3.5 transition-all duration-300 hover:bg-[#f68924] hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              2026 Event
            </Link>

            <Link
              href="/maintenance"
              className="text-white font-[DM Sans] font-bold text-[14px] md:text-[16px] border-2 border-white rounded-lg px-6 md:px-8 py-3 md:py-3.5 transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              IBX Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
