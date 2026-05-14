"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface TourComponent {
  category: string;
  heading: string;
  focus: string;
  image: string;
  alt: string;
}

const useAutoScroll = (config: {
  itemWidth: number;
  gap: number;
  itemCount: number;
  interval: number;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll || isPaused) return;

    const itemSize = config.itemWidth + config.gap;
    const singleSetWidth = itemSize * (config.itemCount / 3);

    scroll.scrollLeft = singleSetWidth;

    const autoScroll = setInterval(() => {
      const currentScroll = scroll.scrollLeft;
      const targetScroll = currentScroll + itemSize;
      scroll.scrollTo({ left: targetScroll, behavior: 'smooth' });
      setTimeout(() => {
        if (scroll.scrollLeft >= singleSetWidth * 2 - itemSize) scroll.scrollLeft = singleSetWidth;
        if (scroll.scrollLeft <= itemSize) scroll.scrollLeft = singleSetWidth;
      }, 600);
    }, config.interval);

    return () => clearInterval(autoScroll);
  }, [isPaused, config]);

  return { scrollRef, setIsPaused };
};

// Desktop card - full flexible width, tall image
const DesktopCard: React.FC<{ item: TourComponent }> = ({ item }) => (
  <article className="bg-white text-[#111] rounded-[14px] overflow-hidden flex flex-col shadow-[0_18px_40px_rgba(0,0,0,0.65)] border border-black/20">
    <div className="m-[10px] rounded-[20px] overflow-hidden h-[300px] bg-[#efefef]">
      <Image
        src={item.image}
        alt={item.alt}
        width={800}
        height={300}
        className="w-full h-full object-cover grayscale hover:scale-[1.03] transition-transform duration-500"
      />
    </div>
    <div className="px-[18px] py-[16px] pb-[20px] flex flex-col gap-[6px]">
      <span className="text-[11px] text-[#8f8f8f] uppercase tracking-[1px] font-semibold">
        {item.category}
      </span>
      <h3 className="text-[16px] font-bold text-[#111] leading-[1.28]">
        {item.heading}
      </h3>
      <p className="text-[#6f6f6f] text-[14px] font-normal">
        <strong className="text-[#111]">Focus:</strong> {item.focus}
      </p>
    </div>
  </article>
);

// Mobile card - fixed 300px width for carousel
const MobileCard: React.FC<{ item: TourComponent }> = ({ item }) => (
  <article className="bg-white text-[#111] rounded-[14px] overflow-hidden flex flex-col shadow-[0_18px_40px_rgba(0,0,0,0.65)] border border-black/20 shrink-0 w-[300px] snap-start">
    <div className="m-[10px] rounded-[20px] overflow-hidden h-[200px] bg-[#efefef]">
      <Image
        src={item.image}
        alt={item.alt}
        width={800}
        height={200}
        className="w-full h-full object-cover grayscale hover:scale-[1.03] transition-transform duration-500"
      />
    </div>
    <div className="px-[18px] py-[16px] pb-[20px] flex flex-col gap-[6px]">
      <span className="text-[11px] text-[#8f8f8f] uppercase tracking-[1px] font-semibold">
        {item.category}
      </span>
      <h3 className="text-[15px] font-bold text-[#111] leading-[1.28]">
        {item.heading}
      </h3>
      <p className="text-[#6f6f6f] text-[13px] font-normal">
        <strong className="text-[#111]">Focus:</strong> {item.focus}
      </p>
    </div>
  </article>
);

export default function TourComponentsSection({ items }: { items: TourComponent[] }) {
  const tripleItems = [...items, ...items, ...items];

  const scroll = useAutoScroll({
    itemWidth: 300,
    gap: 16,
    itemCount: tripleItems.length,
    interval: 3000,
  });

  return (
    <>
      {/* Desktop: full-width grid with tall cards */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-[15px] mx-[30px] mb-[30px]">
        {items.map((item, i) => (
          <DesktopCard key={i} item={item} />
        ))}
      </div>

      {/* Mobile: auto-scroll carousel with smaller cards */}
      <div className="md:hidden px-4 mb-8">
        <div
          ref={scroll.scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => scroll.setIsPaused(true)}
          onMouseLeave={() => scroll.setIsPaused(false)}
          onTouchStart={() => scroll.setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => scroll.setIsPaused(false), 2000)}
        >
          {tripleItems.map((item, i) => (
            <MobileCard key={i} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}
