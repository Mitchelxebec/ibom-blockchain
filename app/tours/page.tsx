import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CollaboratorsSection from "../components/Collaborators";
import ToursNavbarScroll from "../components/ToursNavbarScroll";
import TourComponentsSection from "../components/TourComponentsSection";
import ToursHeroSection from "../components/ToursHeroSection";

const ibx = "/images/IBX_logo.png";

const tourComponents = [
  {
    category: "Blockchain Community Meetups & Campus Activations",
    heading: "Bringing blockchain conversations to communities and campuses across West Africa.",
    focus: "Grassroots awareness, student onboarding, and local community engagement.",
    image: "/images/photo1gallery.jpeg",
    alt: "Blockchain community meetup",
  },
  {
    category: "Developer, Builders & Web3 Education Campaigns",
    heading: "Equipping the next generation of African builders with Web3 skills and knowledge.",
    focus: "Workshops, hackathons, and hands-on developer training sessions.",
    image: "/images/photo2gallery.jpeg",
    alt: "Developer education campaign",
  },
  {
    category: "Founder/Startup Engagements & Innovation Showcases",
    heading: "Spotlighting African blockchain startups and connecting founders to global opportunities.",
    focus: "Pitch sessions, startup showcases, and investor networking.",
    image: "/images/photo3gallery.jpeg",
    alt: "Founder and startup engagement",
  },
  {
    category: "Ecosystem Networking and Partnership Conversations",
    heading: "Forging cross-border partnerships between blockchain communities and ecosystem players.",
    focus: "B2B meetings, ecosystem roundtables, and strategic alliance building.",
    image: "/images/photo4gallery.jpeg",
    alt: "Ecosystem networking",
  },
  {
    category: "Media & Community Outreach",
    heading: "Amplifying the IBX story and West Africa's blockchain narrative across media channels.",
    focus: "Press coverage, social media activations, and community storytelling.",
    image: "/images/photo6gallery.jpeg",
    alt: "Media and community outreach",
  },
  {
    category: "Grassroots Blockchain Adoption Campaigns",
    heading: "Driving real-world crypto and blockchain adoption at the grassroots level.",
    focus: "Wallet creation, DeFi onboarding, and everyday blockchain use cases.",
    image: "/images/photo7gallery.jpeg",
    alt: "Grassroots blockchain adoption",
  },
];

const galleryImages = [
  "/images/heroimage1.jpeg",
  "/images/heroimage2.jpeg",
  "/images/heroimage3.jpeg",
  "/images/heroimage4.jpeg",
  "/images/heroimage5.jpeg",
  "/images/heroimage6.jpeg",
];

export default function ToursPage() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      {/* Navbar with scroll border effect */}
      <ToursNavbarScroll>
        <Navbar
          logo={ibx}
          logoAlt="IBX Logo"
          logoWidth={120}
          logoHeight={50}
          showButton
          extraLinks={[
            { label: "About Us", href: "/maintenance" },
            { label: "IBX 26", href: "/ibx26" },
            { label: "IBX Tour", href: "/tours" },
          ]}
        />
      </ToursNavbarScroll>

      <ToursHeroSection />

      {/* VISION SECTION */}
      <section className="px-[39px] py-[39px] md:px-[60px] md:py-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-[28px] md:text-[40px] font-black leading-[1] mb-[18px] text-white"
            style={{ fontFamily: "var(--font-dt-getai)", letterSpacing: "-0.005em" }}
          >
            A Movement Across Borders
          </h2>
          <p className="text-gray-400 text-[16px] md:text-[18px] font-medium leading-[28px] mb-6"
            style={{ letterSpacing: "-0.015em" }}>
            The IBX Tour is more than a roadshow — it is one of Africa&apos;s most ambitious blockchain expansion campaigns.
          </p>
          <p className="text-gray-400 text-[16px] md:text-[18px] font-medium leading-[28px] mb-6"
            style={{ letterSpacing: "-0.015em" }}>
            Designed to unify the region&apos;s fragmented blockchain ecosystem, the tour connects cities, campuses, innovation hubs, startups, local communities, and global Web3 brands through strategic engagements across West Africa.
          </p>
          <p className="text-gray-400 text-[16px] md:text-[18px] font-medium leading-[28px] mb-12"
            style={{ letterSpacing: "-0.015em" }}>
            IBX is building direct access to the next generation of African blockchain users, builders, and innovators while creating pathways for collaboration, education, adoption, and opportunity.
          </p>

          <div className="flex flex-col gap-6">
            <h3
              className="text-[24px] md:text-[36px] font-black text-white"
              style={{ fontFamily: "var(--font-dt-getai)" }}
            >
              Driving Blockchain Adoption Across West Africa
            </h3>

            <div className="flex flex-col gap-3 mt-2">
              {[
                "6+ West African Countries",
                "40+ Cities & Ecosystem Stops",
                "300+ Blockchain Communities",
                "Thousands Of Participants",
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[#E87A12] text-[18px]">★</span>
                    <p className="text-white font-semibold text-[16px] md:text-[18px] leading-[26px]">{stat}</p>
                  </div>
                  {i === 0 && (
                    <div className="flex gap-2 ml-7">
                      {[
                        { src: "/images/Nigeria.png", alt: "Nigeria" },
                        { src: "/images/Ghana.png", alt: "Ghana" },
                        { src: "/images/Cameroon.png", alt: "Cameroon" },
                        { src: "/images/Togo.png", alt: "Togo" },
                        { src: "/images/Benin.png", alt: "Benin" },
                        { src: "/images/ivoryCoast.png", alt: "Ivory Coast" },
                      ].map((flag) => (
                        <div key={flag.alt} className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={flag.src}
                            alt={flag.alt}
                            width={32}
                            height={32}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="overflow-hidden w-full">
              <div
                style={{
                  display: "flex",
                  minWidth: "max-content",
                  animation: "audience-scroll 12s linear infinite",
                  willChange: "transform",
                }}
              >
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="text-[#E87A12] font-semibold text-[15px] md:text-[17px] tracking-wide whitespace-nowrap mr-12">
                    ★ Developers • Traders • Founders • Students • Creators
                  </span>
                ))}
              </div>
            </div>

            <style>{`
              @keyframes audience-scroll {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              @media (prefers-reduced-motion: reduce) {
                .audience-scroll { animation: none !important; }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* TOUR COMPONENTS HEADER */}
      <div className="px-[39px] md:px-[60px] pt-[39px]">
        <div className="max-w-[1200px]">
          <h2
            className="text-[34px] md:text-[56px] font-black leading-[1] mb-[18px] text-white"
            style={{ fontFamily: "var(--font-dt-getai)", letterSpacing: "-0.01em" }}
          >
            What happens on the tour?
          </h2>
          <p className="text-[#d7d7d7] text-[15px] md:text-[20px] leading-relaxed mb-7 max-w-[900px]">
            Each stop on the IBX Tour is designed to create real ecosystem impact through education, collaboration, and community activation.
          </p>
        </div>
      </div>

      <TourComponentsSection items={tourComponents} />

      {/* COLLABORATORS */}
      <section className="bg-black py-12 overflow-hidden">
        <div className="px-[6vw]">
          <div className="max-w-[1200px] flex items-center justify-between gap-5 mb-5 flex-col md:flex-row md:items-center">
            <h2
              className="text-[34px] md:text-[56px] font-black leading-[0.95] text-white"
              style={{ fontFamily: "var(--font-dt-getai)", letterSpacing: "-0.02em" }}
            >
              Powered By Communities
            </h2>
          </div>
          <p className="text-[#d1d1d1] text-[16px] leading-[1.6] max-w-[900px] mb-1 opacity-95">
            The strength of the IBX Tour lies in the communities driving it forward.
          </p>
          <p className="text-[#d1d1d1] text-[16px] leading-[1.6] max-w-[900px] mb-4 opacity-95">
            From local blockchain hubs and campus communities to developers, creators, founders, and ecosystem leaders, the movement is built by the people shaping Africa&apos;s decentralized future.
          </p>
        </div>
        <CollaboratorsSection />
      </section>

      {/* GALLERY */}
      <section className="bg-[#101010] min-h-screen w-full">
        <div className="flex justify-between items-center max-w-[1000px] mx-auto pt-9 pb-4 px-[4vw]">
          <h2
            className="text-[1.8rem] md:text-[2.3rem] font-normal text-white"
            style={{ fontFamily: "var(--font-dt-getai)" }}
          >
            Our Last Tour
          </h2>
          <Link
            href="/gallery"
            className="bg-[#ff7e23] text-white font-bold text-[0.98rem] px-5 py-[0.4rem] rounded-[6px] hover:brightness-110 transition"
          >
            See All
          </Link>
        </div>

        {/* Gallery grid - two rows of 5 */}
        <div className="max-w-[1050px] mx-auto flex flex-col gap-5 px-[4vw]">
          <div className="flex gap-[1.2rem]">
            {galleryImages.slice(0, 3).map((src, i) => (
              <div key={i} className="relative flex-1 h-[160px] rounded-[14px] overflow-hidden bg-[#888]">
                <Image
                  src={src}
                  alt={`Event photo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover grayscale"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-[1.2rem]">
            {galleryImages.slice(3).map((src, i) => (
              <div key={i} className="relative flex-1 h-[160px] rounded-[14px] overflow-hidden bg-[#888]">
                <Image
                  src={src}
                  alt={`Event photo ${i + 4}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover grayscale"
                />
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
