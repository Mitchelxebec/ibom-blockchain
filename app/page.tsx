"use client";

import Navbar from "./components/Navbar";
import Link from "next/link";
import CollaboratorsSection from "./components/Collaborators";
import Footer from "./components/Footer";
const ibx = "/images/ibx-logo.png";

export default function Home() {

  const countries = [
    { src: "/images/flag.png", alt: "Nigeria" },
    { src: "/images/world.png", alt: "Ghana" },
    { src: "/images/flag.png", alt: "Cameroon" },
    { src: "/images/world.png", alt: "Senegal" },
    { src: "/images/ivory-coast.png", alt: "Ivory Coast" },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar
        logo={ibx}
        logoAlt="Logo"
        logoWidth={120}
        logoHeight={50}
        extraLinks={[
          { label: "About Us", href: "/maintenance" },
          { label: "IBX 26", href: "/ibx26" },
          { label: "IBX Tour", href: "/maintenance" },
        ]}
      />


      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/95 z-10"></div>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/header-vid.mp4" type="video/mp4" />
          </video>
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

      <main className="bg-black">
        {/* Sponsor Section */}
        <section className="flex flex-col items-start justify-center w-full max-w-[1280px] mx-auto px-6 md:px-16 py-16 md:py-20">
          <div className="flex flex-col gap-6 max-w-[867px]">
            {/* Label */}
            <label className="font-[DM Sans] font-semibold text-[12px] md:text-[14px] leading-[20px] tracking-[0.1em] text-gray-400 uppercase">
              COLLABORATORS
            </label>

            {/* Heading */}
            <h5 className="font-[DM Sans] font-black text-[24px] leading-[32px] tracking-[0%] text-white">
              Join 300+ communities in amplifying impact, inspire participation, and build the foundation and shaping a strong West African Blockchain story.
            </h5>

            {/* Button */}
            <a href="mailto:partnerships@ibomblockchain.com"
              className="bg-[#E87A12] text-black font-[DM Sans] font-bold text-[14px] md:text-[16px] rounded-lg px-6 md:px-8 py-3 md:py-3.5 w-fit transition-all duration-300 hover:bg-[#f68924] hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Become a Collaborator
            </a>
          </div>
        </section>

        <CollaboratorsSection />

      </main>

      <Footer />

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scroll-right-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left-mobile {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 10s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 10s linear infinite;
        }

        .animate-scroll-right-mobile {
          animation: scroll-right-mobile 5s linear infinite;
        }

        .animate-scroll-left-mobile {
          animation: scroll-left-mobile 5s linear infinite;
        }
      `}</style>
    </div>
  );
}