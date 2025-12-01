"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    showButton?: boolean;
    extraLinks?: { label: string; href: string }[];
    logo?: StaticImageData | string;
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
}

export default function Navbar({
    showButton = false,
    extraLinks = [],
    logo = "/images/ibx26.png",
    logoAlt = "IBX logo",
    logoWidth = 143,
    logoHeight = 51
}: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const getLinkClasses = (path: string) =>
        `p-2 border-b-2 transition ${pathname === path
            ? "border-white text-white"
            : "border-transparent hover:border-white"
        }`;

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
            <div className="container mx-auto flex justify-between items-center h-16 md:h-20 px-6">
                {/* Logo - Fixed height container */}
                <div className="flex items-center">
                    <Image
                        src={logo}
                        alt={logoAlt}
                        width={logoWidth}
                        height={logoHeight}
                        style={{ transform: 'rotate(0deg)' }}
                        priority
                    />
                </div>

                <div className="md:flex gap-20">
                    {/* Links */}
                    <ul className="hidden md:flex md:items-center space-x-8">
                        <li>
                            <Link
                                href="/"
                                className={getLinkClasses("/")}
                            >
                                Home
                            </Link>
                        </li>

                        {/* Extra links */}
                        {extraLinks.map((link, index) => (
                            <li key={`${link.label}-${index}`}>
                                <Link href={link.href} className={getLinkClasses(link.href)}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    {showButton && (
                        <Link
                            href="/https://ibx2026.eventcrib.com"
                            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition"
                        >
                            Register Now
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/90 text-center py-8 space-y-6">
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-orange-500 transition"
                    >
                        Home
                    </Link>

                    {/* Extra links for mobile */}
                    {extraLinks.map((link, index) => (
                        <Link
                            key={`mobile-${link.label}-${index}`}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block hover:text-orange-500 transition"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Show button on mobile if enabled */}
                    {showButton && (
                        <Link
                            href="/maintenance"
                            onClick={() => setMenuOpen(false)}
                            className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition"
                        >
                            Register Now
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
}