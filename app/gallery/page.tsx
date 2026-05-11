import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryColumns from "../components/GalleryColumns";

const ibx = "/images/IBX_logo.png";

export default function GalleryPage() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
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

      {/* Gallery Section */}
      <section className="overflow-hidden relative min-h-screen">
        <div className="relative">

          {/* IBX Logo overlay - desktop only */}
          <div className="hidden md:flex absolute top-0 left-0 h-full items-center z-10 pointer-events-none px-[60px]"
            style={{ width: "clamp(200px, 30vw, 540px)" }}>
            <Image
              src="/images/IBX_logo.png"
              alt="IBX Logo"
              width={345}
              height={120}
              style={{ height: "auto", width: "min(260px, 80%)" }}
              priority
            />
          </div>

          {/* Scrolling columns - full height viewport */}
          <div className="min-h-[500px] h-screen overflow-hidden">
            <GalleryColumns />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
