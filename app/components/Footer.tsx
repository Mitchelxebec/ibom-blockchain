import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    const countries = [
        { src: "/images/Nigeria.png", alt: "Nigeria" },
        { src: "/images/Ghana.png", alt: "Ghana" },
        { src: "/images/Cameroon.png", alt: "Cameroon" },
        { src: "/images/Togo.png", alt: "Togo" },
        { src: "/images/Benin.png", alt: "Benin" },
    ];

    return (
        <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-16">
            <div className="w-full max-w-[1441px] mx-auto">

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 mb-8 md:mb-12">

                    {/* Left Section - Flags and Tagline */}
                    <div className="flex flex-col gap-6">
                        {/* Flags */}
                        <div className="flex gap-3">
                            {countries.map((country, index) => (
                                <div key={index} className="w-8 h-8 rounded-full overflow-hidden relative">
                                    <Image src={country.src} alt={country.alt} width={32} height={32} className="object-cover" />
                                </div>
                            ))}
                        </div>

                        {/* Tagline */}
                        <div className="max-w-md">
                            <h3 className="font-display text-[18px] md:text-[20px] font-bold leading-[26px] md:leading-[28px] mb-4">
                                Experience the next wave of innovation.<br />
                                Secure your place among the leaders.
                            </h3>

                            {/* Learn More Button */}
                            <a
                                href="https://ibx2026.eventcrib.com"
                                className="border border-white text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition inline-block"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Navigation Links */}
                    <div className="flex gap-12 md:gap-16">
                        <div>
                            <a href="/" className="font-sans text-[14px] md:text-[16px] font-normal hover:text-orange-500 transition">
                                Home
                            </a>
                        </div>
                        <div>
                            <a href="/maintenance" className="font-sans text-[14px] md:text-[16px] font-normal hover:text-orange-500 transition">
                                About Us
                            </a>
                        </div>
                        <div>
                            <a href="/maintenance" className="font-sans text-[14px] md:text-[16px] font-normal hover:text-orange-500 transition">
                                IBX Tour
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright and Social Icons */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 pt-8 border-t border-white/10">

                    {/* Copyright */}
                    <p className="font-sans text-[12px] md:text-[14px] font-normal text-gray-400">
                        © 2025 Ibom Blockchain Xperience. All rights reserved.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex gap-4">
                        <a href="https://x.com/IbomBlockchain?t=ByiII5E8klmxqcUVNHuS_A&s=09" className="w-10 h-10 flex items-center justify-center hover:text-orange-500 transition" aria-label="Twitter" target="_blank"
                            rel="noopener noreferrer">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/company/ibom-blockchain-summit/" className="w-10 h-10 flex items-center justify-center hover:text-orange-500 transition" aria-label="LinkedIn" target="_blank"
                            rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.facebook.com/share/16rxXKqb8m/" className="w-10 h-10 flex items-center justify-center hover:text-orange-500 transition" aria-label="Facebook" target="_blank"
                            rel="noopener noreferrer">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}