import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CollaboratorsSection from "../components/Collaborators";
import ToursNavbarScroll from "../components/ToursNavbarScroll";

const ibx = "/images/IBX_logo.png";

const tourComponents = [
  {
    category: "Blockchain Community Meetups & Campus Activations",
    heading: "Bringing blockchain conversations to communities and campuses across West Africa.",
    focus: "Grassroots awareness, student onboarding, and local community engagement.",
    image: "/images/audienceattownhall.png",
    alt: "Blockchain community meetup",
  },
  {
    category: "Developer, Builders & Web3 Education Campaigns",
    heading: "Equipping the next generation of African builders with Web3 skills and knowledge.",
    focus: "Workshops, hackathons, and hands-on developer training sessions.",
    image: "/images/educationalpanel.png",
    alt: "Developer education campaign",
  },
  {
    category: "Founder/Startup Engagements & Innovation Showcases",
    heading: "Spotlighting African blockchain startups and connecting founders to global opportunities.",
    focus: "Pitch sessions, startup showcases, and investor networking.",
    image: "/images/communityhallvisit.png",
    alt: "Founder and startup engagement",
  },
  {
    category: "Ecosystem Networking and Partnership Conversations",
    heading: "Forging cross-border partnerships between blockchain communities and ecosystem players.",
    focus: "B2B meetings, ecosystem roundtables, and strategic alliance building.",
    image: "/images/marketplacedemo.png",
    alt: "Ecosystem networking",
  },
  {
    category: "Media & Community Outreach",
    heading: "Amplifying the IBX story and West Africa's blockchain narrative across media channels.",
    focus: "Press coverage, social media activations, and community storytelling.",
    image: "/images/audienceattownhall.png",
    alt: "Media and community outreach",
  },
  {
    category: "Grassroots Blockchain Adoption Campaigns",
    heading: "Driving real-world crypto and blockchain adoption at the grassroots level.",
    focus: "Wallet creation, DeFi onboarding, and everyday blockchain use cases.",
    image: "/images/educationalpanel.png",
    alt: "Grassroots blockchain adoption",
  },
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
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[#E87A12] text-[18px]">★</span>
                  <p className="text-white font-semibold text-[16px] md:text-[18px] leading-[26px]">{stat}</p>
                </div>
              ))}
            </div>

            <p className="text-[#E87A12] font-semibold text-[15px] md:text-[17px] tracking-wide mt-2">
              ★ Developers • Traders • Founders • Students • Creators
            </p>
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

      {/* TOUR COMPONENTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] mx-[30px] mb-[30px]">
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
