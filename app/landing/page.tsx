"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Code, Sparkles, Building2 } from "lucide-react";
import Footer from "../components/Footer";

const blockchainEvent = "/images/meetup.png";
const speaker = "/images/speaker.png";
const talkSession = "/images/talk-session.png";
const buisnessCard = "/images/card-image.png";
const eventImage1 = "/images/March10.png";
const eventImage2 = "/images/March11.png";
const eventImage3 = "/images/March12.png";
const eventImage4 = "/images/March13.png";
const eventImage5 = "/images/March14.png";


export default function Landing() {
    const collaborators = [
        "/images/AdomLabs.png",
        "/images/AI-i-Nigeria.png",
        "/images/Bazil.png",
        "/images/CDS.png",
        "/images/Bloquest.png",
        "/images/chainDrive.png",
        "/images/chainDustry.png",
        "/images/FutureLabs.png",
        "/images/infinityExchange.png",
        "/images/Rabble.png",
        "/images/Satoshi.png",
        "/images/WomenInDeFi.png",
    ];

    return (
        <div>
            <Navbar
                showButton={true}
                extraLinks={[
                    { label: "About Us", href: "/maintenance" },
                    { label: "IBX Tour", href: "/maintenance" },
                ]}
            />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black z-10"></div>
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="/videos/header-vid.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Hero Content */}
                <div className="relative z-20 px-4 md:px-16 w-full max-w-7xl mx-auto pb-16 md:pb-20 mt-auto">
                    <div className="w-full max-w-full md:max-w-[730px] flex flex-col gap-8">
                        <h1 className="font-display text-[32px] md:text-[56px] font-black leading-tight md:leading-[64px] tracking-[-0.01em] text-white capitalize">
                            West Africa Largest <span className="text-orange-500 font-display">Blockchain</span> Gathering
                        </h1>
                        <Link href="/maintenance" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-base md:text-lg font-semibold transition transform hover:scale-105 w-fit">
                            Register Now
                        </Link>
                    </div>
                </div>
            </section>

            <main className="bg-black text-white py-20 px-4 md:px-16">
                {/* Content Grid Section - DESKTOP */}
                <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto hidden md:block">
                    <div className="w-full max-w-[1282px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {/* Heartbeat */}
                        <div className="bg-black rounded-2xl p-6 md:p-8 h-[360px]">
                            <h2 className="font-display text-[28px] md:text-[40px] font-black leading-[36px] md:leading-[48px] tracking-[-0.01em]">
                                The heartbeat of West Africa's blockchain evolution
                            </h2>
                        </div>

                        {/* Career Development Card */}
                        <div className="bg-white text-black p-6 md:p-8 rounded-2xl h-[360px]">
                            <h3 className="font-display text-[16px] md:text-[20px] font-black leading-[24px] md:leading-[28px] tracking-normal mb-3 md:mb-4">
                                CAREER<br />
                                DEVELOPMENT IN<br />
                                BLOCKCHAIN
                            </h3>
                            <p className="font-sans text-[14px] md:text-[18px] font-medium leading-[20px] md:leading-[24px] tracking-[-0.015em] text-gray-700">
                                The summit will focus on education on various career paths in the blockchain industry through expert-led panel sessions and workshops.
                            </p>
                        </div>

                        {/* Summit Image 1 */}
                        <div className="bg-gray-800 rounded-2xl overflow-hidden relative h-[360px]">
                            <Image
                                src={blockchainEvent}
                                alt="Blockchain Event"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Educate and Empower Card */}
                        <div className="bg-white text-black p-6 md:p-8 rounded-2xl h-[360px]">
                            <h3 className="font-display text-[16px] md:text-[20px] font-black leading-[24px] md:leading-[28px] tracking-normal mb-3 md:mb-4">
                                EDUCATE AND<br />
                                EMPOWER
                            </h3>
                            <p className="font-sans text-[14px] md:text-[18px] font-medium leading-[20px] md:leading-[24px] tracking-[-0.015em] text-gray-700">
                                The summit aims to offer in-depth education on Web3 technologies, covering key areas such as decentralized finance (DeFi), NFTs, smart contracts, and blockchain development.
                            </p>
                        </div>

                        {/* Summit Image 2 */}
                        <div className="bg-black rounded-2xl overflow-hidden relative h-[360px]">
                            <Image
                                src={speaker}
                                alt="Blockchain Speaker"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Security Focused Card */}
                        <div className="bg-black rounded-2xl p-6 md:p-8 h-[360px] flex flex-col justify-between">
                            <p className="font-sans text-[14px] md:text-[18px] font-medium leading-[20px] md:leading-[24px] tracking-[-0.015em]">
                                The Ibom Blockchain Xperience (IBX) is West Africa's premier blockchain gathering,
                                a convergence of innovators, industry leaders, creators, and enthusiasts from
                                5 countries to explore the power of the Blockchain. Each edition brings thousands
                                together to learn, connect, and Experience what blockchain and adoption truly means.
                                It's the heartbeat of West Africa's blockchain evolution.
                            </p>

                            <Link href="/maintenance" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition w-fit">
                                Watch IBS 25
                            </Link>
                        </div>
                    </div>
                </section>

                {/* MOBILE DISPLAY */}
                {/* Heartbeat Section for Mobile */}
                <section className="py-10 px-4 w-full mx-auto md:hidden">
                    <div className="flex flex-col gap-5">
                        <h2 className="font-display text-[28px] font-black leading-[36px] tracking-[-0.01em]">
                            The heartbeat of West Africa's blockchain evolution
                        </h2>

                        <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.015em]">
                            The Ibom Blockchain Xperience (IBX) is West Africa's premier blockchain gathering,
                            a convergence of innovators, industry leaders, creators, and enthusiasts from
                            5 countries to explore the power of the Blockchain. Each edition brings thousands
                            together to learn, connect, and Experience what blockchain and adoption truly means.
                            It's the heartbeat of West Africa's blockchain evolution.
                        </p>

                        <Link href="/maintenance" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-xs font-semibold transition w-fit">
                            Watch IBS 25
                        </Link>
                    </div>
                </section>

                {/* Two Images Section for Mobile */}
                <section className="py-10 px-4 w-full mx-auto md:hidden">
                    <div className="w-full flex flex-col gap-5">
                        <div className=" rounded-2xl overflow-hidden relative h-[400px]">
                            <Image
                                src={talkSession}
                                alt="Blockchain talk session"
                                fill
                                className="object-cover opacity-50"
                            />
                        </div>

                        <div className=" rounded-2xl overflow-hidden relative h-[400px]">
                            <Image
                                src={talkSession}
                                alt="Blockchain talk session"
                                fill
                                className="object-cover opacity-50"
                            />
                        </div>
                    </div>
                </section>

                {/* A Glimpse Into 2025 Section */}
                <section className="py-10 md:py-20 px-4 md:px-12 lg:px-20 bg-black">
                    <h2 className="font-display text-[32px] md:text-[72px] font-black text-center mb-6 md:mb-16 tracking-[-0.01em]">
                        A Glimpse Into 2025
                    </h2>

                    <div className="w-full max-w-[400px] md:max-w-[1400px] mx-auto grid grid-cols-3 gap-2 md:gap-5">

                        {/* Left Column - 3 Images Stacked */}
                        <div className="flex flex-col gap-2 md:gap-5">
                            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                                <Image src={speaker} alt="Speaker 1" fill className="object-cover" />
                            </div>
                            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                                <Image src={speaker} alt="speaker 2" fill className="object-cover" />
                            </div>
                            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                                <Image src={speaker} alt="Speaker 3" fill className="object-cover" />
                            </div>
                        </div>

                        {/* Center Column - YouTube Embed */}
                        <div className="bg-white rounded-lg md:rounded-2xl overflow-hidden relative h-[320px] md:h-[1150px] flex items-center justify-center">
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="font-display text-[8px] md:text-2xl font-black text-black whitespace-nowrap">Youtube Embed</span>
                            </div>
                        </div>

                        {/* Right Column - 3 Images Stacked */}
                        <div className="flex flex-col gap-2 md:gap-5">
                            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                                <Image src={speaker} alt="Speaker 4" fill className="object-cover" />
                            </div>
                            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                                <Image src={speaker} alt="Speaker 5" fill className="object-cover" />
                            </div>
                            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                                <Image src={speaker} alt="Speaker 6" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Is This Event For? Section - DESKTOP */}
                <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto hidden md:block">
                    {/* Header */}
                    <div className="w-full max-w-[1281px] mx-auto mb-[60px]">
                        <h2 className="font-display text-[40px] md:text-[56px] font-black leading-[48px] md:leading-[64px] tracking-[-0.01em]">
                            Who Is This Event For?
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="w-full max-w-[1281px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                        {/* Investors */}
                        <div className="bg-gray-900 rounded-2xl p-6">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                            </div>
                            <h3 className="font-display text-[20px] font-black leading-[28px] mb-3">
                                Investors
                            </h3>
                            <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-gray-300">
                                Individuals or entities looking to allocate capital into promising ventures. They seek opportunities that offer potential for growth and return on investment, making them a crucial audience for our event.
                            </p>
                        </div>

                        {/* Developers */}
                        <div className="bg-gray-900 rounded-2xl p-6">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                <Code className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                            </div>
                            <h3 className="font-display text-[20px] font-black leading-[28px] mb-3">
                                Developers
                            </h3>
                            <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-gray-300">
                                Individuals or teams eager to invest in Web3 by developing innovative technologies for opportunities that promise growth and lasting returns, making them an essential part of our event's audience.
                            </p>
                        </div>

                        {/* Blockchain Enthusiast */}
                        <div className="bg-gray-900 rounded-2xl p-6">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                <Sparkles className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                            </div>
                            <h3 className="font-display text-[20px] font-black leading-[28px] mb-3">
                                Blockchain Enthusiast
                            </h3>
                            <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-gray-300">
                                People keen on exploring decentralized solutions and blockchain opportunities that offer potential for growth and disrupt returns, making them a vital segment of our event's audience.
                            </p>
                        </div>

                        {/* Regulators */}
                        <div className="bg-gray-900 rounded-2xl p-6">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                <Building2 className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                            </div>
                            <h3 className="font-display text-[20px] font-black leading-[28px] mb-3">
                                Regulators
                            </h3>
                            <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-gray-300">
                                Regulators are essential to Web3's adoption and innovation potential, ensuring scalable and dependable regulations that form a crucial part of our event's audience.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Who Is This Event For? Section - MOBILE */}
                <section className="py-10 px-4 w-full mx-auto md:hidden">
                    <h2 className="font-display text-[28px] md:text-[40px] font-black leading-[36px] md:leading-[48px] tracking-[-0.01em] mb-8">
                        Who Is This Event For?
                    </h2>

                    {/* Horizontal Scrollable Container */}
                    <div className="overflow-x-auto -mx-4 px-4">
                        <div className="flex gap-4 pb-4">
                            {/* Investors */}
                            <div className="bg-gray-900 rounded-2xl p-6 w-[280px] flex-shrink-0">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <TrendingUp className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                                </div>
                                <h3 className="font-display text-[20px] font-black leading-[28px] mb-3">
                                    Investors
                                </h3>
                                <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-gray-300">
                                    Individuals or entities looking to allocate capital into promising ventures. They seek opportunities that offer potential for growth and return on investment, making them a crucial audience for our event.
                                </p>
                            </div>

                            {/* Developers */}
                            <div className="bg-gray-900 rounded-2xl p-6 w-[280px] flex-shrink-0">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <Code className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                                </div>
                                <h3 className="font-display text-[20px] font-black leading-[28px] mb-3">
                                    Developers
                                </h3>
                                <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-gray-300">
                                    Individuals or teams eager to invest in Web3 by developing innovative technologies for opportunities that promise growth and lasting returns, making them an essential part of our event's audience.
                                </p>
                            </div>

                            {/* Blockchain Enthusiast */}
                            <div className="bg-gray-900 rounded-2xl p-6 w-[280px] flex-shrink-0">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <Sparkles className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                                </div>
                                <h3 className="font-display text-[20px] font-black leading-[28px] mb-3">
                                    Blockchain Enthusiast
                                </h3>
                                <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-gray-300">
                                    People keen on exploring decentralized solutions and blockchain opportunities that offer potential for growth and disrupt returns, making them a vital segment of our event's audience.
                                </p>
                            </div>

                            {/* Regulators */}
                            <div className="bg-gray-900 rounded-2xl p-6 w-[280px] flex-shrink-0">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <Building2 className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                                </div>
                                <h3 className="font-display text-[20px] font-black leading-[28px] mb-3">
                                    Regulators
                                </h3>
                                <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-gray-300">
                                    Regulators are essential to Web3's adoption and innovation potential, ensuring scalable and dependable regulations that form a crucial part of our event's audience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2026 WILL DEFINE AN XPERIENCE - DESKTOP */}
                <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto hidden md:block">
                    <div className="w-full max-w-[1441px] mx-auto bg-black rounded-2xl p-16">
                        <div className="grid grid-cols-[0.8fr_2.2fr] gap-24">

                            {/* Left Column - Title */}
                            <div>
                                <h2 className="font-display text-[72px] font-black leading-[80px] text-white">
                                    2026 WILL<br />
                                    DEFINE AN<br />
                                    XPERIENCE
                                </h2>
                            </div>

                            {/* Right Column - Stats Grid */}
                            <div className="space-y-0">

                                {/* Row 1 - 150+ Projects and 100+ Exhibitors with Vertical Lines Below */}
                                <div className="grid grid-cols-2 gap-16 mb-0 relative">
                                    <div className="text-left relative pb-12">
                                        <p className="font-display text-[48px] font-black leading-[56px] text-white mb-2">150 +</p>
                                        <p className="font-display text-[20px] font-bold text-white mb-3">Projects</p>
                                        <p className="font-sans text-[14px] leading-[20px] text-white/70 mb-4">
                                            Innovation unleashed across Africa and beyond.
                                        </p>
                                        {/* Vertical line below extending to horizontal line */}
                                        <div className="absolute bottom-0 left-1/2 w-px h-12 bg-white/20"></div>
                                    </div>
                                    <div className="text-left relative pb-12">
                                        <p className="font-display text-[48px] font-black leading-[56px] text-white mb-2">100 +</p>
                                        <p className="font-display text-[20px] font-bold text-white mb-3">Exhibitors</p>
                                        <p className="font-sans text-[14px] leading-[20px] text-white/70 mb-4">
                                            Showcasing groundbreaking blockchain solutions.
                                        </p>
                                        {/* Vertical line below extending to horizontal line */}
                                        <div className="absolute bottom-0 left-1/2 w-px h-12 bg-white/20"></div>
                                    </div>
                                </div>

                                {/* Horizontal Divider Line */}
                                <div className="w-full h-px bg-white/20 mb-12"></div>

                                {/* Row 2 - 12,000+ Participants, 300+ Collaborators, 100+ Speakers with Vertical Lines */}
                                <div className="grid grid-cols-3 gap-16 relative">
                                    {/* Participants */}
                                    <div className="text-left relative">
                                        {/* Vertical line at top */}
                                        <div className="absolute -top-12 left-1/2 w-px h-12 bg-white/20"></div>
                                        <p className="font-display text-[40px] font-black leading-[48px] text-white mb-2">12,000 +</p>
                                        <p className="font-display text-[16px] font-bold text-white mb-2">Participants</p>
                                        <p className="font-sans text-[12px] leading-[18px] text-white/70">
                                            A movement of minds reshaping the present.
                                        </p>
                                    </div>

                                    {/* Collaborators */}
                                    <div className="text-left relative">
                                        {/* Vertical line at top */}
                                        <div className="absolute -top-12 left-1/2 w-px h-12 bg-white/20"></div>
                                        <p className="font-display text-[40px] font-black leading-[48px] text-white mb-2">300 +</p>
                                        <p className="font-display text-[16px] font-bold text-white mb-2">Collaborators</p>
                                        <p className="font-sans text-[12px] leading-[18px] text-white/70">
                                            Building powerful alliances that drive impact.
                                        </p>
                                    </div>

                                    {/* Speakers */}
                                    <div className="text-left relative">
                                        {/* Vertical line at top */}
                                        <div className="absolute -top-12 left-1/2 w-px h-12 bg-white/20"></div>
                                        <p className="font-display text-[40px] font-black leading-[48px] text-white mb-2">100 +</p>
                                        <p className="font-display text-[16px] font-bold text-white mb-2">Speakers</p>
                                        <p className="font-sans text-[12px] leading-[18px] text-white/70">
                                            Thought leaders shaping the blockchain narrative.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 2026 WILL DEFINE AN XPERIENCE - MOBILE */}
                <section className="py-10 px-4 w-full mx-auto md:hidden">
                    <div className="w-full bg-black rounded-2xl p-8 text-white">
                        <h3 className="font-display text-[32px] font-black leading-[40px] mb-12 text-center">
                            2026 WILL<br />
                            DEFINE AN<br />
                            XPERIENCE
                        </h3>

                        <div className="space-y-0">
                            {/* 12,000 + Participants */}
                            <div className="text-center relative pb-8">
                                <p className="font-display text-[40px] font-black leading-[48px] mb-1">12,000 +</p>
                                <p className="font-display text-[18px] font-bold mb-2">Participants</p>
                                <p className="font-sans text-[14px] leading-[20px] text-white/70">
                                    A movement of minds reshaping the present.
                                </p>
                                {/* Vertical line below */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-500"></div>
                            </div>

                            {/* 150 + Projects */}
                            <div className="text-center relative py-8">
                                <p className="font-display text-[40px] font-black leading-[48px] mb-1">150 +</p>
                                <p className="font-display text-[18px] font-bold mb-2">Projects</p>
                                <p className="font-sans text-[14px] leading-[20px] text-white/70">
                                    Innovation unleashed across Africa and beyond.
                                </p>
                                {/* Vertical line below */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-500"></div>
                            </div>

                            {/* 300 + Collaborators */}
                            <div className="text-center relative py-8">
                                <p className="font-display text-[40px] font-black leading-[48px] mb-1">300 +</p>
                                <p className="font-display text-[18px] font-bold mb-2">Collaborators</p>
                                <p className="font-sans text-[14px] leading-[20px] text-white/70">
                                    Building powerful alliances that drive impact.
                                </p>
                                {/* Vertical line below */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-500"></div>
                            </div>

                            {/* 100 + Exhibitors */}
                            <div className="text-center relative py-8">
                                <p className="font-display text-[40px] font-black leading-[48px] mb-1">100 +</p>
                                <p className="font-display text-[18px] font-bold mb-2">Exhibitors</p>
                                <p className="font-sans text-[14px] leading-[20px] text-white/70">
                                    Showcasing groundbreaking blockchain solutions.
                                </p>
                                {/* Vertical line below */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-500"></div>
                            </div>

                            {/* 100 + Speakers */}
                            <div className="text-center relative pt-8">
                                <p className="font-display text-[40px] font-black leading-[48px] mb-1">100 +</p>
                                <p className="font-display text-[18px] font-bold mb-2">Speakers</p>
                                <p className="font-sans text-[14px] leading-[20px] text-white/70">
                                    Thought leaders shaping the blockchain narrative.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Event Outline Section - DESKTOP */}
                <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto hidden md:block">
                    <div className="w-full max-w-[1441px] mx-auto">

                        {/* Header with Button */}
                        <div className="flex justify-between items-start mb-8">
                            <h2 className="font-display text-[56px] font-black leading-[64px] tracking-[-0.01em]">
                                Event Outline
                            </h2>
                            <Link href="/maintenance" className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg text-sm font-bold transition whitespace-nowrap">
                                Add to Calendar
                            </Link>
                        </div>

                        {/* Description */}
                        <div className="mb-12">
                            <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[-0.006em] text-white max-w-[960px]">
                                Join us at the Ibom Blockchain Summit, where visionaries and pioneers converge to explore the future of Blockchain technology.
                                This annual event is dedicated to fostering collaboration and innovation, providing a unique opportunity to engage with thought
                                leaders and discover cutting-edge developments in the Web3 space.
                            </p>
                        </div>

                        {/* Event Cards Grid - First Row */}
                        <div className="grid grid-cols-3 gap-5 mb-5">

                            {/* Event Card 1 */}
                            <div className="bg-white text-black rounded-2xl overflow-hidden">
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <p className="font-display text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-4">
                                        IBOM BLOCKCHAIN SUMMIT
                                    </p>

                                    {/* Date and Details */}
                                    <div className="flex gap-4 mb-4">
                                        {/* Date */}
                                        <div className="flex flex-col">
                                            <h3 className="font-display text-[56px] font-black leading-[56px]">10</h3>
                                            <p className="font-display text-[14px] font-bold">March</p>
                                        </div>

                                        {/* Location and Time */}
                                        <div className="flex flex-col gap-2 pt-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12px]">📍</span>
                                                <p className="font-sans text-[12px] font-medium text-gray-900 leading-[16px]">
                                                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[12px]">🕐</span>
                                                <p className="font-sans text-[12px] font-medium text-gray-900">
                                                    8:00 am - 5:00 PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Image */}
                                <div className="px-6 pb-6">
                                    <div className="w-full h-[240px] relative rounded-xl overflow-hidden">
                                        <Image
                                            src={eventImage1}
                                            alt="Ibom Blockchain Summit Event"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Event Card 2 */}
                            <div className="bg-white text-black rounded-2xl overflow-hidden">
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <p className="font-display text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-4">
                                        IBOM BLOCKCHAIN SUMMIT
                                    </p>

                                    {/* Date and Details */}
                                    <div className="flex gap-4 mb-4">
                                        {/* Date */}
                                        <div className="flex flex-col">
                                            <h3 className="font-display text-[56px] font-black leading-[56px]">11</h3>
                                            <p className="font-display text-[14px] font-bold">March</p>
                                        </div>

                                        {/* Location and Time */}
                                        <div className="flex flex-col gap-2 pt-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12px]">📍</span>
                                                <p className="font-sans text-[12px] font-medium text-gray-900 leading-[16px]">
                                                    123 Innovation Blvd, San Francisco, California 94107
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[12px]">🕐</span>
                                                <p className="font-sans text-[12px] font-medium text-gray-900">
                                                    9:00 am - 5:00 PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Image */}
                                <div className="px-6 pb-6">
                                    <div className="w-full h-[240px] relative rounded-xl overflow-hidden">
                                        <Image
                                            src={eventImage2}
                                            alt="Blockchain Panel Discussion"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Event Card 3 */}
                            <div className="bg-white text-black rounded-2xl overflow-hidden">
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <p className="font-display text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-4">
                                        DEN OF ROGUES
                                    </p>

                                    {/* Date and Details */}
                                    <div className="flex gap-4 mb-4">
                                        {/* Date */}
                                        <div className="flex flex-col">
                                            <h3 className="font-display text-[56px] font-black leading-[56px]">12</h3>
                                            <p className="font-display text-[14px] font-bold">March</p>
                                        </div>

                                        {/* Location and Time */}
                                        <div className="flex flex-col gap-2 pt-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12px]">📍</span>
                                                <p className="font-sans text-[12px] font-medium text-gray-900 leading-[16px]">
                                                    456 Marketing St, New York, New York 10001
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[12px]">🕐</span>
                                                <p className="font-sans text-[12px] font-medium text-gray-900">
                                                    10:00 am - 4:00 PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Image */}
                                <div className="px-6 pb-6">
                                    <div className="w-full h-[240px] relative rounded-xl overflow-hidden">
                                        <Image
                                            src={eventImage3}
                                            alt="Den of Rogues Presentation"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Cards Grid - Second Row */}
                        <div className="grid grid-cols-3 gap-5">

                            {/* Event Card 4 */}
                            <div className="bg-white text-black rounded-2xl overflow-hidden">
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <p className="font-display text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-4">
                                        IBX GALA: A CELEBRATION OF VISIONARIES
                                    </p>

                                    {/* Date and Details */}
                                    <div className="flex gap-4 mb-4">
                                        {/* Date */}
                                        <div className="flex flex-col">
                                            <h3 className="font-display text-[56px] font-black leading-[56px]">13</h3>
                                            <p className="font-display text-[14px] font-bold">March</p>
                                        </div>

                                        {/* Location and Time */}
                                        <div className="flex flex-col gap-2 pt-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12px]">📍</span>
                                                <p className="font-sans text-[12px] font-medium text-gray-900 leading-[16px]">
                                                    789 Community Dr, Portland, Oregon 97201
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[12px]">🕐</span>
                                                <p className="font-sans text-[12px] font-medium text-gray-900">
                                                    8:30 am - 6:00 PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Image */}
                                <div className="px-6 pb-6">
                                    <div className="w-full h-[240px] relative rounded-xl overflow-hidden">
                                        <Image
                                            src={eventImage4}
                                            alt="Blockchain Village Event"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Event Card 5 */}
                            <div className="bg-white text-black rounded-2xl overflow-hidden">
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <p className="font-display text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-4">
                                        FOUNDERS FORGE
                                    </p>

                                    {/* Date and Details */}
                                    <div className="flex gap-4 mb-4">
                                        {/* Date */}
                                        <div className="flex flex-col">
                                            <h3 className="font-display text-[56px] font-black leading-[56px]">14</h3>
                                            <p className="font-display text-[14px] font-bold">March</p>
                                        </div>

                                        {/* Location and Time */}
                                        <div className="flex flex-col gap-2 pt-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12px]">📍</span>
                                                <p className="font-sans text-[12px] font-medium text-gray-900 leading-[16px]">
                                                    101 Lamar St, Austin, Texas 78701
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[12px]">🕐</span>
                                                <p className="font-sans text-[12px] font-medium text-gray-900">
                                                    9:30 am - 8:30 PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Image */}
                                <div className="px-6 pb-6">
                                    <div className="w-full h-[240px] relative rounded-xl overflow-hidden">
                                        <Image
                                            src={eventImage5}
                                            alt="Founders Forge Event"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Event Outline Section - MOBILE */}
                <section className="py-10 px-4 w-full mx-auto md:hidden">
                    <div className="flex flex-col gap-8">
                        <h2 className="font-display text-[28px] font-black leading-[36px] tracking-[-0.01em]">
                            Event Outline
                        </h2>

                        <div className="bg-black rounded-2xl p-6">
                            <p className="font-sans text-[14px] font-normal leading-[20px] tracking-[-0.006em] text-gray-300 mb-6">
                                Join us as we dive deep into virtually shaping blockchain and cryptocurrency prospects to Nigeria and Africa continent at large. It is an immersive two day experience featuring collaborative, batch sessions, providing a unique opportunity to engage in thought-provoking insights and actions all focused on the power of blockchain technology.
                            </p>
                            <Link href="/maintenance" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition w-full block text-center">
                                Add To Calendar
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Event Marketing Info Card - MOBILE */}
                <section className="py-10 px-4 w-full mx-auto md:hidden">
                    <div className="w-full bg-white rounded-xl p-5 text-black flex flex-col gap-5">

                        {/* Date and Location Section */}
                        <div className="w-full flex flex-col gap-6">
                            <p className="font-display text-[12px] font-bold uppercase tracking-wide text-gray-500">
                                DIGITAL MARKETING EXPO
                            </p>

                            {/* Date and Location Grid */}
                            <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                                {/* Left - Date */}
                                <div className="flex flex-col">
                                    <h3 className="font-display text-[48px] md:text-[56px] font-black leading-[48px] md:leading-[56px]">
                                        10
                                    </h3>
                                    <p className="font-display text-[14px] md:text-[16px] font-bold">March</p>
                                </div>

                                {/* Right - Location and Time */}
                                <div className="flex flex-col gap-2 pt-1">
                                    <div className="flex items-start gap-2">
                                        <span className="text-[14px] flex-shrink-0">📍</span>
                                        <p className="font-sans text-[12px] md:text-[14px] font-medium text-gray-900 leading-[18px] md:leading-[20px]">
                                            1200 N LaSalle St. Chicago, Illinois 60610
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[14px] flex-shrink-0">🕐</span>
                                        <p className="font-sans text-[12px] md:text-[14px] font-medium text-gray-900">
                                            10:00 am - 4:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Image */}
                        <div className="w-full bg-gray-800 rounded-xl overflow-hidden relative h-[120px]">
                            <Image
                                src={buisnessCard}
                                alt="card"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Register Button */}
                        <Link href="/maintenance" className="bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold transition w-full text-center hover:bg-gray-800">
                            Register
                        </Link>
                    </div>
                </section>

                {/* Our Speakers Section - DESKTOP */}

                {/* Our Speakers Section - MOBILE */}

                {/* Our sponsors Section - DESKTOP */}

                {/* Our sponsors Section - MOBILE */}

                {/* Our Collaborators Section - DESKTOP */}
                <section className="py-20 w-full hidden md:block overflow-hidden">
                    <div className="w-full">
                        {/* Header with Button */}
                        <div className="flex justify-between items-start mb-6 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                            <div>
                                <h2 className="font-display text-[56px] font-black leading-[64px] tracking-[-0.01em] mb-2">
                                    Our Collaborators
                                </h2>
                                <p className="font-sans text-[16px] font-normal leading-[24px] text-gray-300 max-w-[600px]">
                                    We are proud to partner with these industry leaders who share our passion for discovery and help make our expeditions possible.
                                </p>
                            </div>
                            <Link href="/maintenance" className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg text-sm font-bold transition whitespace-nowrap">
                                Become a collaborator
                            </Link>
                        </div>

                        {/* Collaborators Grid - 5 Rows with Alternating Scroll Directions */}
                        <div className="mt-12 space-y-8">
                            {/* Row 1 - Scroll Right */}
                            <div className="relative">
                                <div className="flex gap-4 animate-scroll-right">
                                    {[...Array(3)].map((_, setIndex) => (
                                        <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                            {collaborators.map((collaborator, index) => (
                                                <div key={`row1-${setIndex}-${index}`} className="bg-black rounded-lg h-[80px] w-[120px] flex items-center justify-center flex-shrink-0">
                                                    <Image
                                                        src={collaborator}
                                                        alt={`Collaborator ${index + 1}`}
                                                        width={80}
                                                        height={80}
                                                        className="object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 2 - Scroll Left */}
                            <div className="relative">
                                <div className="flex gap-4 animate-scroll-left">
                                    {[...Array(3)].map((_, setIndex) => (
                                        <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                            {[...collaborators].reverse().map((collaborator, index) => (
                                                <div key={`row2-${setIndex}-${index}`} className="bg-black rounded-lg h-[80px] w-[120px] flex items-center justify-center flex-shrink-0">
                                                    <Image
                                                        src={collaborator}
                                                        alt={`Collaborator ${index + 1}`}
                                                        width={80}
                                                        height={80}
                                                        className="object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 3 - Scroll Right */}
                            <div className="relative">
                                <div className="flex gap-4 animate-scroll-right">
                                    {[...Array(3)].map((_, setIndex) => (
                                        <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                            {collaborators.map((collaborator, index) => (
                                                <div key={`row3-${setIndex}-${index}`} className="bg-black rounded-lg h-[80px] w-[120px] flex items-center justify-center flex-shrink-0">
                                                    <Image
                                                        src={collaborator}
                                                        alt={`Collaborator ${index + 1}`}
                                                        width={80}
                                                        height={80}
                                                        className="object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 4 - Scroll Left */}
                            <div className="relative">
                                <div className="flex gap-4 animate-scroll-left">
                                    {[...Array(3)].map((_, setIndex) => (
                                        <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                            {[...collaborators].reverse().map((collaborator, index) => (
                                                <div key={`row4-${setIndex}-${index}`} className="bg-black rounded-lg h-[80px] w-[120px] flex items-center justify-center flex-shrink-0">
                                                    <Image
                                                        src={collaborator}
                                                        alt={`Collaborator ${index + 1}`}
                                                        width={80}
                                                        height={80}
                                                        className="object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 5 - Scroll Right */}
                            <div className="relative">
                                <div className="flex gap-4 animate-scroll-right">
                                    {[...Array(3)].map((_, setIndex) => (
                                        <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                            {collaborators.map((collaborator, index) => (
                                                <div key={`row5-${setIndex}-${index}`} className="bg-black rounded-lg h-[80px] w-[120px] flex items-center justify-center flex-shrink-0">
                                                    <Image
                                                        src={collaborator}
                                                        alt={`Collaborator ${index + 1}`}
                                                        width={80}
                                                        height={80}
                                                        className="object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Collaborators Section - MOBILE */}
                <section className="py-10 w-full md:hidden overflow-hidden">
                    <div className="px-4 mb-8">
                        <h2 className="font-display text-[28px] font-black leading-[36px] tracking-[-0.01em] mb-3">
                            Our Collaborators
                        </h2>

                        <p className="font-sans text-[14px] font-normal leading-[20px] text-gray-300 mb-6">
                            We are proud to partner with these industry leaders who share our passion for discovery and help make our expeditions possible.
                        </p>

                        <Link href="/maintenance" className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg text-sm font-bold transition w-full block text-center">
                            Become a collaborator
                        </Link>
                    </div>

                    <div className="space-y-6">
                        {/* Mobile Row 1 - Scroll Right */}
                        <div className="relative">
                            <div className="flex gap-3 animate-scroll-right">
                                {[...Array(3)].map((_, setIndex) => (
                                    <div key={setIndex} className="flex gap-3 flex-shrink-0">
                                        {collaborators.slice(0, 6).map((collaborator, index) => (
                                            <div key={`mobile-row1-${setIndex}-${index}`} className="bg-black rounded-lg h-[60px] w-[80px] flex items-center justify-center flex-shrink-0">
                                                <Image
                                                    src={collaborator}
                                                    alt={`Collaborator ${index + 1}`}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Row 2 - Scroll Left */}
                        <div className="relative">
                            <div className="flex gap-3 animate-scroll-left">
                                {[...Array(3)].map((_, setIndex) => (
                                    <div key={setIndex} className="flex gap-3 flex-shrink-0">
                                        {collaborators.slice(6, 12).map((collaborator, index) => (
                                            <div key={`mobile-row2-${setIndex}-${index}`} className="bg-black rounded-lg h-[60px] w-[80px] flex items-center justify-center flex-shrink-0">
                                                <Image
                                                    src={collaborator}
                                                    alt={`Collaborator ${index + 7}`}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Row 3 - Scroll Right */}
                        <div className="relative">
                            <div className="flex gap-3 animate-scroll-right">
                                {[...Array(3)].map((_, setIndex) => (
                                    <div key={setIndex} className="flex gap-3 flex-shrink-0">
                                        {[...collaborators].reverse().slice(0, 6).map((collaborator, index) => (
                                            <div key={`mobile-row3-${setIndex}-${index}`} className="bg-black rounded-lg h-[60px] w-[80px] flex items-center justify-center flex-shrink-0">
                                                <Image
                                                    src={collaborator}
                                                    alt={`Collaborator ${index + 13}`}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Row 4 - Scroll Left */}
                        <div className="relative">
                            <div className="flex gap-3 animate-scroll-left">
                                {[...Array(3)].map((_, setIndex) => (
                                    <div key={setIndex} className="flex gap-3 flex-shrink-0">
                                        {collaborators.slice(0, 6).map((collaborator, index) => (
                                            <div key={`mobile-row4-${setIndex}-${index}`} className="bg-black rounded-lg h-[60px] w-[80px] flex items-center justify-center flex-shrink-0">
                                                <Image
                                                    src={collaborator}
                                                    alt={`Collaborator ${index + 19}`}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Row 5 - Scroll Right */}
                        <div className="relative">
                            <div className="flex gap-3 animate-scroll-right">
                                {[...Array(3)].map((_, setIndex) => (
                                    <div key={setIndex} className="flex gap-3 flex-shrink-0">
                                        {collaborators.slice(6, 12).map((collaborator, index) => (
                                            <div key={`mobile-row5-${setIndex}-${index}`} className="bg-black rounded-lg h-[60px] w-[80px] flex items-center justify-center flex-shrink-0">
                                                <Image
                                                    src={collaborator}
                                                    alt={`Collaborator ${index + 25}`}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main >

            <Footer />

            {/* Single Style Tag for Both Desktop and Mobile */}
            <style jsx>{`
    @keyframes scroll-right {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-33.333%);
        }
    }

    @keyframes scroll-left {
        0% {
            transform: translateX(-33.333%);
        }
        100% {
            transform: translateX(0);
        }
    }

    .animate-scroll-right {
        animation: scroll-right 40s linear infinite;
    }

    .animate-scroll-left {
        animation: scroll-left 40s linear infinite;
    }

    /* Faster animation for mobile */
    @media (max-width: 768px) {
        .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
        }
    }
`}</style>

        </div >
    );
}