"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ibxLogo from "../../public/images/ibx-logo.png";

interface NavbarProps {
    showButton?: boolean; // 👈 controls the "Register Now" button
    extraLinks?: { label: string; href: string }[]; // 👈 optional extra links like IBX 2026
}

export default function Navbar({ showButton = false, extraLinks = [] }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const getLinkClasses = (path: string) =>
        `p-2 border-b-2 transition ${pathname === path
            ? "border-white text-white"
            : "border-transparent hover:border-white"
        }`;

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div>
                    <Image src={ibxLogo} alt="IBX logo" width={100} height={100} />
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

                        {/* Extra links (like IBX 2026) - using index + label for unique key */}
                        {extraLinks.map((link, index) => (
                            <li key={`${link.label}-${index}`}>
                                <Link href={link.href} className={getLinkClasses(link.href)}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button (only if showButton is true) */}
                    {showButton && (
                        <Link href="/maintenance" className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition">
                            Register Now
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/90 text-center py-8 space-y-6">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-white">
                        Home
                    </Link>

                    {/* Extra links for mobile - using index + label for unique key */}
                    {extraLinks.map((link, index) => (
                        <Link
                            key={`mobile-${link.label}-${index}`}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Show button on mobile if enabled */}
                    {showButton && (
                        <Link href="/maintenance" className="mt-4 bg-orange-500 hover:bg-orange-600 text-black px-5 py-2 rounded-lg transition">
                            Register Now
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
}