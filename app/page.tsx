import Navbar from "./components/Navbar";
import Link from "next/link";
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
    </div>
  );
}