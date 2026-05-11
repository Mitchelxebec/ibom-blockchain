import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CollaboratorsSection from "../components/Collaborators";
import ToursNavbarScroll from "../components/ToursNavbarScroll";

const ibx = "/images/IBX_logo.png";

const tourComponents = [
  {
    category: "Town hall activations",
    heading: "Grassroots engagements and onboarding of 100,000 underbanked individuals into DeFi.",
    focus: "Wallet creation, savings education, and financial inclusion.",
    image: "/images/audienceattownhall.png",
    alt: "Audience at a town hall",
  },
  {
    category: "Marketplace invasions",
    heading: "Live demonstrations of blockchain use in everyday trade.",
    focus: "Vendors accepting crypto payments, hands-on DeFi exposure.",
    image: "/images/marketplacedemo.png",
    alt: "Marketplace demo",
  },
  {
    category: "Hub & community visits",
    heading: "Collaborations with blockchain hubs and communities to host mini-events, trainings, and panels.",
    focus: "Developer education, startup networking, ecosystem building.",
    image: "/images/communityhallvisit.png",
    alt: "Community hub visit",
  },
  {
    category: "Education & awareness campaigns",
    heading: "Short digital and on-ground activations spreading blockchain literacy.",
    focus: "Simplifying blockchain for new users.",
    image: "/images/educationalpanel.png",
    alt: "Education panel on stage",
  },
];

const roadmapPhases = [
  { phase: "Phase 1", desc: "Launch" },
  { phase: "Phase 2", desc: "Country 1 (Nigeria)" },
  { phase: "Phase 3", desc: "Country 2 (Ghana)" },
  { phase: "Phase 4", desc: "Country 3 (Togo)" },
  { phase: "Phase 5", desc: "Country 4 (Benin Republic)" },
  { phase: "Phase 6", desc: "Country 5 (Cameroon)" },
  { phase: "Phase 7", desc: "Wrap-up & Transition to IBX 2026 Main Event" },
];

const galleryImages = [
  "/images/embedded-img1.jpg",
  "/images/embedded-img2.jpg",
  "/images/embedded-img3.jpg",
  "/images/embedded-img4.jpg",
  "/images/embedded-img5.jpg",
  "/images/embedded-img6.jpg",
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

      {/* HERO SECTION */}
      <section
        className="min-h-screen flex items-center px-6 md:px-[60px] pt-[100px] pb-[60px] md:pt-0"
        style={{ background: "url('/images/hero-bg.png') no-repeat center center / cover" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-[800px]">
          <h1
            className="text-[32px] md:text-[55px] font-black leading-[1.1] mb-5 text-white"
            style={{ fontFamily: "var(--font-dt-getai)" }}
          >
            Empowering 100,000<br />
            West Africans — The IBX<br />
            2026 Tour Begins
          </h1>
          <p className="text-[15px] md:text-[18px] font-normal leading-[24px] text-white/90 mb-8 max-w-[680px]"
            style={{ letterSpacing: "-0.015em" }}>
            A 6-month West African campaign driving blockchain adoption, inclusion, and grassroots
            innovation across Nigeria, Ghana, Cameroon, Togo, and Benin Republic.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[15px]">
            <Link
              href="https://ibx2026.eventcrib.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff8a2a] text-black font-semibold text-[14px] rounded-[6px] px-7 py-3 transition-all duration-300 hover:brightness-110 text-center"
            >
              Join the Movement
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

      {/* VISION SECTION */}
      <section className="px-[39px] py-[39px] md:px-[60px] md:py-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-[28px] md:text-[40px] font-black leading-[1] mb-[18px] text-white"
            style={{ fontFamily: "var(--font-dt-getai)", letterSpacing: "-0.005em" }}
          >
            Vision: Banking 100 million unbanked West Africans by 2030 through blockchain empowerment.
          </h2>
          <p className="text-gray-400 text-[16px] md:text-[18px] font-medium leading-[24px] mb-12"
            style={{ letterSpacing: "-0.015em" }}>
            Join us at the Ibom Blockchain Summit, where visionaries and pioneers converge to explore
            the future of Blockchain technology.&nbsp;This annual event is dedicated to fostering
            collaboration and innovation, providing a unique opportunity to engage with thought leaders
            and discover cutting-edge developments in the Web3 space.
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left - 2026 Target */}
            <div className="px-[6px] py-[12px]">
              <h3
                className="text-[20px] md:text-[28px] font-black mb-[18px]"
                style={{ fontFamily: "var(--font-dt-getai)" }}
              >
                2026 Target
              </h3>
              <ul className="space-y-[18px] list-none p-0">
                <li>
                  <p className="text-gray-400 text-[20px] md:text-[24px] font-medium leading-[32px] mb-12"
                    style={{ letterSpacing: "-0.015em" }}>
                    100,000 onboarded during this year&apos;s tour.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30 mt-2 shrink-0" />
                  <p className="text-gray-400 text-[18px] md:text-[20px] font-medium leading-[32px]"
                    style={{ letterSpacing: "-0.015em" }}>
                    6 months across 5 West African countries.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right - Core Objectives */}
            <div className="px-[6px] py-[12px]">
              <h3
                className="text-[20px] md:text-[28px] font-black mb-[18px]"
                style={{ fontFamily: "var(--font-dt-getai)" }}
              >
                Core objectives:
              </h3>
              <ul className="list-disc pl-5 space-y-0 text-gray-400 text-[18px] md:text-[20px] leading-[32px]"
                style={{ letterSpacing: "-0.015em" }}>
                <li>Drive blockchain education and inclusion.</li>
                <li>Empower communities through town hall activations.</li>
                <li>Encourage real-world crypto adoption in local markets.</li>
                <li>Build cross-border partnerships between blockchain communities.</li>
              </ul>
            </div>
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
            Tour Components
          </h2>
          <p className="text-[#d7d7d7] text-[15px] md:text-[20px] leading-relaxed mb-7 max-w-[900px]">
            Join us at the Ibom Blockchain Summit, where visionaries and pioneers converge to explore
            the future of Blockchain technology.&nbsp;This annual event is dedicated to fostering
            collaboration and innovation, providing a unique opportunity to engage with thought leaders
            and discover cutting-edge developments in the Web3 space.
          </p>
        </div>
      </div>

      {/* TOUR COMPONENTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] mx-[30px] mb-[30px]">
        {tourComponents.map((item, i) => (
          <article
            key={i}
            className="bg-white text-[#111] rounded-[14px] overflow-hidden flex flex-col shadow-[0_18px_40px_rgba(0,0,0,0.65)] border border-black/20"
          >
            {/* Image */}
            <div className="m-[10px] rounded-[20px] overflow-hidden h-[200px] md:h-[300px] bg-[#efefef] border border-black/6">
              <Image
                src={item.image}
                alt={item.alt}
                width={800}
                height={300}
                className="w-full h-full object-cover grayscale hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            {/* Body */}
            <div className="px-[18px] py-[16px] pb-[20px] flex flex-col gap-[6px]">
              <span className="text-[11px] text-[#8f8f8f] uppercase tracking-[1px] font-semibold">
                {item.category}
              </span>
              <h3 className="text-[15px] md:text-[16px] font-bold text-[#111] leading-[1.28]">
                {item.heading}
              </h3>
              <p className="text-[#6f6f6f] text-[14px] font-normal">
                <strong className="text-[#111]">Focus:</strong> {item.focus}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* ROADMAP */}
      <section className="min-h-screen py-12 px-4 md:px-[60px]"
        style={{ background: "url('/images/roadmapbg.png') no-repeat center center / cover" }}>
        <h2
          className="text-[1.3rem] text-center tracking-[1px] mt-4 mb-9 font-normal text-white"
          style={{ fontFamily: "var(--font-dt-getai)" }}
        >
          Roadmap
        </h2>

        {/* Timeline - desktop */}
        <div className="relative w-[90vw] max-w-[700px] min-h-[540px] mx-auto hidden md:block">
          {/* Dotted vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[7px] bottom-[10px] w-[2px] z-[1]"
            style={{
              background: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.8) 4px, transparent 4px, transparent 10px)"
            }}
          />
          {roadmapPhases.map((item, i) => (
            <div
              key={i}
              className={`absolute w-[48%] max-w-[290px] z-[2] flex flex-col ${
                i % 2 === 0
                  ? "left-0 items-end text-right"
                  : "right-0 items-start text-left"
              }`}
              style={{ top: `${i * 13}%` }}
            >
              <div className="relative">
                {/* Horizontal connector line */}
                <span
                  className="absolute top-[16px] w-[32px] h-[1.5px] bg-white/50"
                  style={i % 2 === 0 ? { right: "-36px" } : { left: "-36px" }}
                />
                <p className="text-[1.15rem] font-semibold text-white">{item.phase}</p>
                <p className="text-[0.98rem] text-[#dadada] mt-1 font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline - mobile (stacked) */}
        <div className="md:hidden flex flex-col items-center gap-6 px-4">
          {roadmapPhases.map((item, i) => (
            <div key={i} className="text-center relative">
              <p className="text-[1.05rem] font-semibold text-white">{item.phase}</p>
              <p className="text-[0.95rem] text-[#dadada] mt-1">{item.desc}</p>
              {i < roadmapPhases.length - 1 && (
                <div
                  className="w-[2px] h-[28px] mx-auto mt-2"
                  style={{
                    background: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.85) 2px, transparent 2px, transparent 6px)"
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* COLLABORATORS */}
      <section className="bg-black py-12 overflow-hidden">
        <div className="px-[6vw]">
          <div className="max-w-[1200px] flex items-center justify-between gap-5 mb-5 flex-col md:flex-row md:items-center">
            <h2
              className="text-[34px] md:text-[56px] font-black leading-[0.95] text-white"
              style={{ fontFamily: "var(--font-dt-getai)", letterSpacing: "-0.02em" }}
            >
              Our Collaborators
            </h2>
            <a
              href="mailto:partnerships@ibomblockchain.com"
              className="bg-[#ff8a2a] text-[#111] font-bold px-[18px] py-[10px] rounded-[12px] text-[1rem] cursor-pointer transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(255,138,42,0.16)] shrink-0"
            >
              Become a Sponsor
            </a>
          </div>
          <p className="text-[#d1d1d1] text-[16px] leading-[1.6] max-w-[900px] mb-4 opacity-95">
            We are proud to partner with these industry leaders who share our passion for discovery
            and help make our expeditions possible.
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
            Gallery
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

        {/* CTA Block */}
        <div className="bg-[#181818] mx-[2vw] mt-11 py-8 rounded-[0.7rem] flex justify-center">
          <div className="text-center">
            <p
              className="text-[#ff7e23] font-bold text-[1.25rem] mb-3"
              style={{ fontFamily: "var(--font-dt-getai)" }}
            >
              Join the Movement
            </p>
            <Image
              src={ibx}
              alt="IBX Logo"
              width={120}
              height={44}
              className="mx-auto my-3"
              style={{ height: "44px", width: "auto" }}
            />
            <Link
              href="/success"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-auto bg-[#ff7e23] text-black font-medium text-[1.01rem] px-7 py-[0.6rem] rounded-[6px] hover:brightness-110 transition w-fit"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
