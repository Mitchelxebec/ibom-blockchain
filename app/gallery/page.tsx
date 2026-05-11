import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryColumns from "../components/GalleryColumns";

const ibx = "/images/ibx-logo.png";

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
