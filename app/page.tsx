"use client"

import Navbar from "./components/Navbar";
import CollaboratorsSection from "./components/Collaborators";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
const ibx = "/images/ibx-logo.png";

export default function Home() {
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

      <HeroSection />

      <main className="bg-black">
        {/* Sponsor Section */}
        <section className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-20">
          <div className="flex flex-col gap-6 max-w-216.75">
            {/* Label */}
            <label className="font-[DM Sans] font-semibold text-[12px] md:text-[14px] leading-5 tracking-widest text-gray-400 uppercase">
              COLLABORATORS
            </label>

            {/* Heading */}
            <h5 className="font-[DM Sans] font-black text-[24px] leading-8 tracking-[0%] text-white">
              IBX stands at the center of Africa&apos;s rising blockchain economy — connecting communities, infrastructure, education, innovation, and adoption across West Africa.
            </h5>

            {/* Button */}
            <a href="mailto:partnerships@ibomblockchain.com"
              className="bg-[#E87A12] text-black font-[DM Sans] font-bold text-[14px] md:text-[16px] rounded-lg px-6 md:px-8 py-3 md:py-3.5 w-fit transition-all duration-300 hover:bg-[#f68924] hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Join the Force
            </a>
          </div>
        </section>

        <CollaboratorsSection />

      </main>

      <Footer />
    </div>
  );
}