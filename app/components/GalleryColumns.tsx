"use client";

import Image from "next/image";

const col1 = [
  "/images/photo1gallery.jpeg",
  "/images/photo2gallery.jpeg",
  "/images/photo3gallery.jpeg",
  "/images/photo4gallery.jpeg",
  "/images/photo5gallery.png",
  "/images/photo6gallery.jpeg",
  "/images/photo7gallery.jpeg",
  "/images/photo8gallery.png",
  "/images/photo9gallery.png",
  "/images/photo10gallery.png",
];

const col2 = [
  "/images/photo11gallery.png",
  "/images/photo12gallery.png",
  "/images/photo13gallery.png",
  "/images/photo14gallery.png",
  "/images/photo15gallery.png",
  "/images/photo16gallery.png",
  "/images/photo17gallery.png",
  "/images/photo18gallery.png",
  "/images/photo19gallery.png",
  "/images/photo20gallery.png",
];

const col3 = [
  "/images/photo21gallery.png",
  "/images/photo22gallery.png",
  "/images/photo23gallery.png",
  "/images/photo24gallery.png",
  "/images/photo25gallery.png",
  "/images/photo26gallery.png",
  "/images/photo27gallery.png",
  "/images/photo28gallery.png",
  "/images/photo29gallery.png",
  "/images/photo30gallery.png",
];

const col4 = [
  "/images/photo31gallery.png",
  "/images/photo32gallery.png",
  "/images/photo33gallery.png",
  "/images/photo34gallery.png",
  "/images/photo35gallery.png",
  "/images/photo36gallery.png",
  "/images/photo37gallery.png",
  "/images/photo38gallery.png",
  "/images/photo39gallery.png",
  "/images/photo40gallery.png",
];

const col5 = [
  "/images/photo41gallery.png",
  "/images/photo42gallery.png",
  "/images/photo43gallery.png",
  "/images/photo45gallery.png",
  "/images/photo46gallery.png",
  "/images/photo47gallery.png",
  "/images/photo48gallery.png",
  "/images/photo49gallery.png",
  "/images/photo50gallery.png",
  "/images/photo51gallery.png",
];

const col6 = [
  "/images/photo52gallery.png",
  "/images/photo53gallery.png",
  "/images/photo54gallery.png",
  "/images/photo55gallery.png",
  "/images/photo56gallery.png",
  "/images/photo57gallery.png",
  "/images/photo58gallery.png",
  "/images/photo4gallery.png",
  "/images/photo8gallery.png",
  "/images/photo12gallery.png",
];

const columns = [
  { images: col1, duration: 10 },
  { images: col2, duration: 15 },
  { images: col3, duration: 20 },
  { images: col4, duration: 10 },
  { images: col5, duration: 15 },
  { images: col6, duration: 10 },
];

function GalleryColumn({ images, duration }: { images: string[]; duration: number }) {
  const doubled = [...images, ...images];
  return (
    <div
      className="gallery-col"
      style={{ "--col-duration": `${duration}s` } as React.CSSProperties}
    >
      {doubled.map((src, i) => (
        <a key={i} href="#" className="gallery-col-item">
          <Image
            src={src}
            alt={`Gallery photo ${i + 1}`}
            width={160}
            height={160}
            className="w-full h-full object-cover"
            loading={i < 6 ? "eager" : "lazy"}
          />
        </a>
      ))}
    </div>
  );
}

function GalleryRow({ images, duration, direction }: { images: string[]; duration: number; direction: "left" | "right" }) {
  const doubled = [...images, ...images];
  const animClass = direction === "left" ? "gallery-row-left" : "gallery-row-right";
  return (
    <div className="overflow-hidden w-full py-2">
      <div
        className={animClass}
        style={{ "--row-duration": `${duration}s` } as React.CSSProperties}
      >
        {doubled.map((src, i) => (
          <a key={i} href="#" className="gallery-row-item">
            <Image
              src={src}
              alt={`Gallery photo ${i + 1}`}
              width={120}
              height={120}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function GalleryColumns() {
  return (
    <>
      <style>{`
        @keyframes gallery-scroll-y {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .gallery-col {
          margin-top: -100px;
          margin-right: 32px;
          animation: gallery-scroll-y var(--col-duration, 10s) infinite linear;
          flex-shrink: 0;
        }
        .gallery-col:hover {
          animation-play-state: paused;
        }
        .gallery-col-item {
          display: block;
          width: 160px;
          height: 160px;
          margin-bottom: 32px;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s;
        }
        .gallery-col-item:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 4px #0A2647, 0 0 0 6px #FFB100;
        }
        @keyframes gallery-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes gallery-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .gallery-row-left {
          display: flex;
          min-width: max-content;
          will-change: transform;
          animation: gallery-scroll-left var(--row-duration, 12s) linear infinite;
        }
        .gallery-row-right {
          display: flex;
          min-width: max-content;
          will-change: transform;
          animation: gallery-scroll-right var(--row-duration, 12s) linear infinite;
        }
        .gallery-row-item {
          display: block;
          width: 120px;
          height: 120px;
          margin-right: 12px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        .gallery-row-item:hover {
          transform: scale(1.05);
          box-shadow: 0 0 0 3px #0A2647, 0 0 0 5px #FFB100;
        }
        @media (prefers-reduced-motion: reduce) {
          .gallery-col, .gallery-row-left, .gallery-row-right {
            animation: none !important;
          }
        }
      `}</style>

      {/* Desktop: vertical columns */}
      <div className="hidden md:flex" style={{ transform: "rotateZ(9deg)" }}>
        {columns.map((col, i) => (
          <GalleryColumn key={i} images={col.images} duration={col.duration} />
        ))}
      </div>

      {/* Mobile: horizontal rows */}
      <div className="flex md:hidden flex-col gap-2 py-24">
        <GalleryRow images={col1} duration={12} direction="left" />
        <GalleryRow images={col2} duration={15} direction="right" />
        <GalleryRow images={col3} duration={10} direction="left" />
        <GalleryRow images={col4} duration={14} direction="right" />
        <GalleryRow images={col5} duration={11} direction="left" />
        <GalleryRow images={col6} duration={13} direction="right" />
      </div>
    </>
  );
}
