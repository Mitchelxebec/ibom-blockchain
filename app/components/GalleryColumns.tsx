"use client";

import Image from "next/image";

const col1 = [
  "/images/embedded-img1.jpg",
  "/images/embedded-img2.jpg",
  "/images/embedded-img3.jpg",
  "/images/embedded-img4.jpg",
  "/images/embedded-img5.jpg",
  "/images/embedded-img6.jpg",
  "/images/March10.jpg",
  "/images/March11.jpg",
  "/images/March12.jpg",
  "/images/March13.jpg",
  "/images/March14.jpg",
  "/images/card-image.jpg",
];

const col2 = [
  "/images/March11.jpg",
  "/images/March12.jpg",
  "/images/embedded-img3.jpg",
  "/images/embedded-img4.jpg",
  "/images/March13.jpg",
  "/images/March14.jpg",
  "/images/embedded-img1.jpg",
  "/images/embedded-img5.jpg",
  "/images/card-image.jpg",
  "/images/talk-session.jpg",
  "/images/embedded-img2.jpg",
  "/images/embedded-img6.jpg",
  "/images/March10.jpg",
  "/images/March11.jpg",
];

const col3 = [
  "/images/embedded-img5.jpg",
  "/images/embedded-img6.jpg",
  "/images/March10.jpg",
  "/images/March12.jpg",
  "/images/embedded-img1.jpg",
  "/images/embedded-img2.jpg",
  "/images/March13.jpg",
  "/images/March14.jpg",
  "/images/embedded-img3.jpg",
  "/images/embedded-img4.jpg",
  "/images/talk-session.jpg",
  "/images/card-image.jpg",
  "/images/March11.jpg",
  "/images/embedded-img5.jpg",
];

const col4 = [
  "/images/March13.jpg",
  "/images/March14.jpg",
  "/images/embedded-img2.jpg",
  "/images/embedded-img4.jpg",
  "/images/March10.jpg",
  "/images/embedded-img6.jpg",
  "/images/March11.jpg",
  "/images/embedded-img1.jpg",
  "/images/embedded-img3.jpg",
  "/images/March12.jpg",
  "/images/talk-session.jpg",
  "/images/embedded-img5.jpg",
  "/images/card-image.jpg",
  "/images/March14.jpg",
];

const col5 = [
  "/images/embedded-img1.jpg",
  "/images/March12.jpg",
  "/images/embedded-img3.jpg",
  "/images/March10.jpg",
  "/images/embedded-img5.jpg",
  "/images/March13.jpg",
  "/images/embedded-img2.jpg",
  "/images/talk-session.jpg",
  "/images/March11.jpg",
  "/images/embedded-img4.jpg",
  "/images/March14.jpg",
  "/images/embedded-img6.jpg",
];

const col6 = [
  "/images/March14.jpg",
  "/images/embedded-img6.jpg",
  "/images/March11.jpg",
  "/images/embedded-img2.jpg",
  "/images/March13.jpg",
  "/images/embedded-img4.jpg",
  "/images/card-image.jpg",
  "/images/March10.jpg",
  "/images/embedded-img1.jpg",
  "/images/March12.jpg",
  "/images/embedded-img3.jpg",
  "/images/embedded-img5.jpg",
];

const columns = [
  { images: col1, duration: 10 },
  { images: col2, duration: 15 },
  { images: col3, duration: 20 },
  { images: col4, duration: 10 },
  { images: col5, duration: 15 },
  { images: col6, duration: 10 },
];

// Flatten all columns into one list for mobile horizontal scroll
const allImages = [
  ...col1, ...col2, ...col3,
  ...col4, ...col5, ...col6,
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
        /* ---- Y-axis scroll (desktop) ---- */
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

        /* ---- X-axis scroll (mobile) ---- */
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
          .gallery-col,
          .gallery-row-left,
          .gallery-row-right {
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
