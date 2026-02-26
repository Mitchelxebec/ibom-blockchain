"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Only load video after page is interactive
    const loadVideo = () => {
      setShowVideo(true);
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(() => {
          // Autoplay blocked, that's fine
        });
      }
    };

    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      setTimeout(loadVideo, 500);
    } else {
      window.addEventListener('load', () => setTimeout(loadVideo, 500));
    }

    return () => {
      window.removeEventListener('load', loadVideo);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/95 z-10"></div>
        
        {/* Poster Image - Shows immediately */}
        {!showVideo && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
            {/* You can replace this with an actual poster image */}
            <div className="w-full h-full flex items-center justify-center opacity-30">
              <div className="text-6xl">🎬</div>
            </div>
          </div>
        )}

        {/* Video - Loads after page is ready */}
        {showVideo && (
          <video 
            ref={videoRef}
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            preload="none"
          >
            <source src="/videos/header-vid.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 px-6 md:px-16 w-full max-w-[1280px] mx-auto pb-20 md:pb-24">
        <div className="w-full max-w-full md:max-w-[702px] flex flex-col gap-6 md:gap-8">
          <h1 className="font-[DM Sans] text-[40px] md:text-[56px] lg:text-[64px] font-black leading-tight md:leading-[64px] lg:leading-[72px] tracking-[-0.01em] text-white">
            West Africa Largest <span className="text-[#E87A12]">Blockchain</span> Campaign
          </h1>

          <p className="font-[DM Sans] text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[28px] tracking-[-0.015em] text-gray-300 max-w-[640px]">
            Empowering and unifying communities and connecting innovators to shape the future of Web3 and ignite blockchain adoption, innovation, and collaboration across West Africa and beyond
          </p>

          <div className="flex items-center gap-4 md:gap-6 mt-2">
            {/* Orange Button */}
            <Link
              href="/ibx26"
              className="bg-[#E87A12] text-black font-[DM Sans] font-bold text-[14px] md:text-[16px] rounded-lg px-6 md:px-8 py-3 md:py-3.5 transition-all duration-300 hover:bg-[#f68924] hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              2026 Event
            </Link>

            {/* White Outline Button */}
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
