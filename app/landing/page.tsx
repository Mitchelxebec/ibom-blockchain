"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Code, Sparkles, Building2 } from "lucide-react";
import Footer from "../components/Footer";
import React, { useEffect, useRef, useState } from 'react';

const blockchainEvent = "/images/meetup.png";
const speaker = "/images/speaker.png";
const talkSession = "/images/talk-session.jpg";
const buisnessCard = "/images/card-image.jpg";
const embeddedImg1 = "/images/embedded-img1.jpg";
const embeddedImg2 = "/images/embedded-img2.jpg";
const embeddedImg3 = "/images/embedded-img3.jpg";
const embeddedImg4 = "/images/embedded-img4.jpg";
const embeddedImg5 = "/images/embedded-img5.jpg";
const ibx26 = "/images/ibx26.png";

interface UseAutoScrollOptions {
    itemWidth: number;
    gap: number;
    itemCount: number;
    interval?: number;
}

function useAutoScroll({
    itemWidth,
    gap,
    itemCount,
    interval = 3000
}: UseAutoScrollOptions) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const cardWidth = itemWidth + gap;
        const totalCards = itemCount;
        let intervalId: NodeJS.Timeout;

        const autoScroll = () => {
            if (isPaused) return;

            const currentScroll = scrollContainer.scrollLeft;
            const maxScroll = cardWidth * totalCards;

            scrollContainer.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });

            if (currentScroll >= maxScroll - cardWidth) {
                setTimeout(() => {
                    scrollContainer.scrollLeft = cardWidth;
                }, 500);
            }
        };

        intervalId = setInterval(autoScroll, interval);

        return () => clearInterval(intervalId);
    }, [isPaused, itemWidth, gap, itemCount, interval]);

    return { scrollRef, isPaused, setIsPaused };
}

// Card data
const cards = [
    {
        icon: TrendingUp,
        title: "Investors",
        description: "Individuals or entities looking to allocate capital into promising ventures. They seek opportunities that offer potential for growth and return on investment, making them a crucial audience for our event."
    },
    {
        icon: Code,
        title: "Developers",
        description: "Individuals or teams eager to invest in Web3 by developing innovative technologies for opportunities that promise growth and lasting returns, making them an essential part of our event's audience."
    },
    {
        icon: Sparkles,
        title: "Blockchain Enthusiast",
        description: "People keen on exploring decentralized solutions and blockchain opportunities that offer potential for growth and disrupt returns, making them a vital segment of our event's audience."
    },
    {
        icon: Building2,
        title: "Regulators",
        description: "Regulators are essential to Web3's adoption and innovation potential, ensuring scalable and dependable regulations that form a crucial part of our event's audience."
    }
];

// Event images (you'll need to replace these with your actual image paths)
const eventImage1 = "/images/March10.jpg";
const eventImage2 = "/images/March11.jpg";
const eventImage3 = "/images/March12.jpg";
const eventImage4 = "/images/March13.jpg";
const eventImage5 = "/images/March14.jpg";

const events = [
    {
        title: "IBOM BLOCKCHAIN SUMMIT",
        day: "10",
        month: "March",
        location: "E3 Event Center Uyo Village Road",
        time: "9:00 am - 5:00 PM",
        image: eventImage1,
        alt: "Ibom Blockchain Summit Event"
    },
    {
        title: "IBOM BLOCKCHAIN SUMMIT",
        day: "11",
        month: "March",
        location: "E3 Event Center Uyo Village Road",
        time: "9:00 am - 5:00 PM",
        image: eventImage2,
        alt: "Blockchain Panel Discussion"
    },
    {
        title: "DEN OF ROGUES",
        day: "12",
        month: "March",
        location: "E3 Event Center Uyo Village Road",
        time: "10:00 am - 4:00 PM",
        image: eventImage3,
        alt: "Den of Rogues Presentation"
    },
    {
        title: "FOUNDERS FORGE",
        day: "13",
        month: "March",
        location: "Upon Registration",
        time: "8:30 am - 6:00 PM",
        image: eventImage4,
        alt: "Blockchain Village Event"
    },
    {
        title: "IBX GALA: A CELEBRATION OF VISIONARIES",
        day: "14",
        month: "March",
        location: "Exclusive",
        time: "9:30 am - 5:00 PM",
        image: eventImage5,
        alt: "Founders Forge Event"
    }
];

export default function Landing() {
    // Create tripled arrays for smooth infinite scroll
    const tripleCards = [...cards, ...cards, ...cards];
    const tripleEvents = [...events, ...events, ...events];

    // Use the hook for cards section
    const cardsScroll = useAutoScroll({
        itemWidth: 280,
        gap: 16,
        itemCount: tripleCards.length,
        interval: 3000
    });

    // Use the hook for events section
    const eventsScroll = useAutoScroll({
        itemWidth: 320,
        gap: 16,
        itemCount: tripleEvents.length,
        interval: 3000
    });

    const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});

    const toggleShowMore = (cardId: string) => {
        setShowMore(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

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

    const EventCard = ({ event }: { event: typeof events[0] }) => (
        <div className="bg-white text-black rounded-2xl overflow-hidden flex-shrink-0 w-[320px] snap-start">
            <div className="p-6 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-4">
                    {event.title}
                </p>

                <div className="flex gap-4 mb-4">
                    <div className="flex flex-col">
                        <h3 className="text-[56px] font-black leading-[56px]">{event.day}</h3>
                        <p className="text-[14px] font-bold">{event.month}</p>
                    </div>

                    <div className="flex flex-col gap-2 pt-2">
                        <div className="flex items-start gap-2">
                            <span className="text-[12px]">📍</span>
                            <p className="text-[12px] font-medium text-gray-900 leading-[16px]">
                                {event.location}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[12px]">🕐</span>
                            <p className="text-[12px] font-medium text-gray-900">
                                {event.time}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 pb-6">
                <div className="w-full h-[240px] relative rounded-xl overflow-hidden bg-gray-200">
                    <img
                        src={event.image}
                        alt={event.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );

    // GOOGLE CALENDAR
    // Helper function to generate Google Calendar URL
    const generateGoogleCalendarURL = (event: {
        title: string;
        description: string;
        location: string;
        startDate: string; // Format: YYYYMMDDTHHMMSS
        endDate: string;   // Format: YYYYMMDDTHHMMSS
    }) => {
        const baseURL = 'https://calendar.google.com/calendar/render?action=TEMPLATE';

        const params = new URLSearchParams({
            text: event.title,
            details: event.description,
            location: event.location,
            dates: `${event.startDate}/${event.endDate}`,
        });

        return `${baseURL}&${params.toString()}`;
    };

    const handleAddToCalendar = () => {
        const eventDetails = {
            title: 'Ibom Blockchain Xperience 2026',
            description: 'Join West Africa\'s premier blockchain gathering. A convergence of innovators, industry leaders, creators, and enthusiasts exploring the power of blockchain technology.',
            location: 'E3 Event Center, Uyo Village Road, Uyo, Nigeria',
            startDate: '20260310T080000', // March 10, 2026, 8:00 AM
            endDate: '20260314T173000',   // March 14, 2026, 5:30 PM
        };

        const calendarURL = generateGoogleCalendarURL(eventDetails);
        window.open(calendarURL, '_blank');
    };

    return (
        <div>
            <Navbar
                logo={ibx26}
                logoAlt="Another Logo"
                logoWidth={150}
                logoHeight={50}
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
                        <Link href="https://ibx2026.eventcrib.com" className="bg-orange-500 hover:bg-orange-600 text-white font-[DM Sans] font-bold text-[14px] md:text-[16px] rounded-lg px-6 md:px-8 py-3 md:py-3.5 text-base md:text-lg transition transform hover:scale-105 w-fit">
                            Register Now
                        </Link>
                    </div>
                </div>
            </section>

            <main className="bg-black text-white py-20 px-2 md:px-2">
                {/* Content Grid Section - DESKTOP */}
                <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto hidden md:block">
                    <div className="w-full max-w-[1282px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {/* Heartbeat */}
                        <div className="bg-black rounded-2xl p-6 md:p-8 h-[360px]">
                            <h2 className="font-display text-[28px] md:text-[40px] font-black leading-[36px] md:leading-[48px] tracking-[-0.01em]">
                                The heartbeat of West Africa's blockchain evolution
                            </h2>
                        </div>

                        {/* ADOPTION Card */}
                        <div className="relative h-[360px] w-full">
                            <div className="group absolute inset-0 bg-white rounded-xl p-5 cursor-pointer transition-all duration-700 ease-out overflow-hidden border border-gray-300 hover:shadow-2xl hover:scale-[1.08] hover:z-10">
                                <h3 className="font-bold text-2xl text-black mb-3">
                                    ADOPTION
                                </h3>
                                <div className="relative overflow-hidden">
                                    <p className="text-base text-gray-600 transition-all duration-700 ease-in-out max-h-[280px] group-hover:max-h-[500px]">
                                        Bringing education and tools directly to communities. IBX drives adoption by taking blockchain knowledge straight to the people who need it most not waiting for them to find it. Through on-ground workshops, grassroots activations, and multilingual community sessions, we simplify blockchain concepts, demystify Web3, and provide practical tools that help everyday Africans participate confidently in the digital economy. Bringing blockchain education and tools directly to communities.
                                    </p>
                                </div>
                            </div>
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

                        {/* CONNECTION Card */}
                        <div className="relative h-[360px] w-full">
                            <div className="group absolute inset-0 bg-white rounded-xl p-5 cursor-pointer transition-all duration-700 ease-out overflow-hidden border border-gray-300 hover:shadow-2xl hover:scale-[1.08] hover:z-10">
                                <h3 className="font-bold text-2xl text-black mb-3">
                                    CONNECTION
                                </h3>
                                <div className="relative overflow-hidden">
                                    <p className="text-base text-gray-600 transition-all duration-700 ease-in-out max-h-[280px] group-hover:max-h-[500px]">
                                        Creating pathways between African builders and global Web3 ecosystems. IBX acts as a bridge linking African innovators with global blockchain networks, founders, companies, and opportunities. Through strategic partnerships, ecosystem collaborations, and international visibility, we amplify African voices, projects, and talent on the world stage. Whether it's access to global exchanges, participation in online hackathons, mentorship opportunities, or integration into leading blockchain ecosystems, IBX ensures that African builders are not isolated but they are connected, recognized, and empowered to scale.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* EXPANSION Card */}
                        <div className="relative h-[360px] w-full">
                            <div className="group absolute inset-0 bg-white rounded-xl p-5 cursor-pointer transition-all duration-700 ease-out overflow-hidden border border-gray-300 hover:shadow-2xl hover:scale-[1.08] hover:z-10">
                                <h3 className="font-bold text-2xl text-black mb-3">
                                    EXPANSION
                                </h3>
                                <div className="relative overflow-hidden">
                                    <p className="text-base text-gray-600 transition-all duration-700 ease-in-out max-h-[280px] group-hover:max-h-[500px]">
                                        Scaling blockchain awareness across West Africa's emerging tech hubs. IBX is rapidly expanding its reach across major and emerging cities, activating new communities and igniting blockchain awareness everywhere we go. Each country and hub we visit becomes part of a growing Web3 network creating new pockets of innovation, collaboration, and opportunity. Our goal is simple: Build a unified West African blockchain corridor where education, innovation, and participation are accessible to all. By expanding consistently and intentionally, IBX is shaping the strongest blockchain frontier on the continent.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Security Focused Card */}
                        <div className="bg-black rounded-2xl p-6 md:p-8 h-[360px] flex flex-col justify-between">
                            <p className="font-sans text-[14px] md:text-[15px] font-medium leading-[20px] md:leading-[24px] tracking-[-0.015em]">
                                The Ibom Blockchain Xperience (IBX) is West Africa's premier blockchain gathering,
                                a convergence of innovators, industry leaders, creators, and enthusiasts from
                                5 countries to explore the power of the Blockchain. Each edition brings thousands
                                together to learn, connect, and Experience what blockchain and adoption truly means.
                                It's the heartbeat of West Africa's blockchain evolution.
                            </p>
                        </div>
                    </div>
                </section>

                {/* MOBILE DISPLAY ONLY */}

                {/* Heartbeat Section for Mobile */}
                <section className="block md:hidden px-5 w-full mx-auto py-10">
                    <div className="max-w-4xl flex flex-col gap-6">
                        <h3 className="font-display text-[25px] text-white font-black leading-[36px] tracking-[-0.02em]">
                            The heartbeat of West Africa's blockchain evolution
                        </h3>
                        <p className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.01em] text-gray-300 mb-4">
                            The Ibom Blockchain Xperience (IBX) is West Africa's premier blockchain gathering,
                            uniting innovators, industry leaders, creators, and enthusiasts from across
                            5 countries to explore the transformative power of blockchain technology.
                            Each edition brings thousands together to learn, connect, and experience
                            what blockchain adoption truly means. It stands as the driving force behind
                            West Africa's blockchain evolution.
                        </p>
                    </div>
                </section>

                {/* Cards Section for Mobile */}
                <section className="py-10 px-5 w-full mx-auto md:hidden">
                    <h2 className="font-display text-[32px] md:text-[72px] font-black text-center mb-6 md:mb-16 tracking-[-0.01em]">
                        A Mission Driven By Impact
                    </h2>

                    <div className="w-full flex flex-col gap-5">
                        {/* ADOPTION Card */}
                        <div className="rounded-2xl overflow-hidden relative h-[400px]">
                            <Image
                                src={talkSession}
                                alt="Blockchain talk session"
                                fill
                                className="object-cover opacity-50"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                                <h3 className="font-display text-[20px] font-black leading-[28px] tracking-normal mb-4 text-white">
                                    ADOPTION
                                </h3>
                                <p className={`font-sans ${showMore['adoption'] ? "" : "line-clamp-3"} text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-white`}>
                                    Bringing blockchain education and tools directly to communities. IBX drives adoption by taking blockchain knowledge straight to the people who need it most not waiting for them to find it. Through on-ground workshops, grassroots activations, and multilingual community sessions, we simplify blockchain concepts, demystify Web3, and provide practical tools that help everyday Africans participate confidently in the digital economy.
                                </p>
                                <span
                                    className="hover:underline hover:cursor-pointer text-white mt-2 inline-block"
                                    onClick={() => toggleShowMore('adoption')}
                                >
                                    {showMore['adoption'] ? "less" : "more"}
                                </span>
                            </div>
                        </div>

                        {/* CONNECTION Card */}
                        <div className="rounded-2xl overflow-hidden relative h-[400px]">
                            <Image
                                src={talkSession}
                                alt="Blockchain talk session"
                                fill
                                className="object-cover opacity-50"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                                <h3 className="font-display text-[20px] font-black leading-[28px] tracking-normal mb-4 text-white">
                                    CONNECTION
                                </h3>
                                <p className={`font-sans ${showMore['connection'] ? "" : "line-clamp-3"} text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-white`}>
                                    Creating pathways between African builders and global Web3 ecosystems. IBX acts as a bridge linking African innovators with global blockchain networks, founders, companies, and opportunities. Through strategic partnerships, ecosystem collaborations, and international visibility, we amplify African voices, projects, and talent on the world stage. Whether it's access to global exchanges, participation in online hackathons, mentorship opportunities, or integration into leading blockchain ecosystems, IBX ensures that African builders are not isolated but they are connected, recognized, and empowered to scale.
                                </p>
                                <span
                                    className="hover:underline hover:cursor-pointer text-white mt-2 inline-block"
                                    onClick={() => toggleShowMore('connection')}
                                >
                                    {showMore['connection'] ? "less" : "more"}
                                </span>
                            </div>
                        </div>

                        {/* EXPANSION Card */}
                        <div className="rounded-2xl overflow-hidden relative h-[400px]">
                            <Image
                                src={talkSession}
                                alt="Blockchain talk session"
                                fill
                                className="object-cover opacity-50"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                                <h3 className="font-display text-[20px] font-black leading-[28px] tracking-normal mb-4 text-white">
                                    EXPANSION
                                </h3>
                                <p className={`font-sans ${showMore['expansion'] ? "" : "line-clamp-3"} text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-white`}>
                                    Scaling blockchain awareness across West Africa's emerging tech hubs. IBX is rapidly expanding its reach across major and emerging cities, activating new communities and igniting blockchain awareness everywhere we go. Each country and hub we visit becomes part of a growing Web3 network creating new pockets of innovation, collaboration, and opportunity. Our goal is simple: Build a unified West African blockchain corridor where education, innovation, and participation are accessible to all. By expanding consistently and intentionally, IBX is shaping the strongest blockchain frontier on the continent.
                                </p>
                                <span
                                    className="hover:underline hover:cursor-pointer text-white mt-2 inline-block"
                                    onClick={() => toggleShowMore('expansion')}
                                >
                                    {showMore['expansion'] ? "less" : "more"}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

{/* A Glimpse Into 2025 Section */}
<section className="py-10 md:py-20 px-4 md:px-12 lg:px-20 bg-black">
    <h2 className="font-display text-[32px] md:text-[72px] font-black text-center mb-6 md:mb-16 tracking-[-0.01em]">
        "A Glimpse Into 2025"
    </h2>

    <div className="w-full max-w-[400px] md:max-w-[1400px] mx-auto grid grid-cols-3 gap-2 md:gap-5">

        {/* Left Column - 3 Images Stacked */}
        <div className="flex flex-col gap-2 md:gap-5">
            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                <Image src={speaker} alt="Speaker 1" fill className="object-cover" />
            </div>
            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                <Image src={embeddedImg1} alt="speaker 2" fill className="object-cover" />
            </div>
            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                <Image src={embeddedImg2} alt="Speaker 3" fill className="object-cover" />
            </div>
        </div>

        {/* Center Column - Stats Vertical */}
        <div className="bg-gray-900 rounded-lg md:rounded-2xl overflow-hidden relative h-[320px] md:h-[1150px]">
            <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 gap-6 md:gap-16">
                {/* Stat 1 */}
                <div className="text-center">
                    <h3 className="font-display text-[40px] md:text-[96px] font-black leading-[1] mb-2">
                        7K
                    </h3>
                    <p className="font-sans text-[12px] md:text-[24px] font-medium text-gray-300">
                        Attendees
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                    <h3 className="font-display text-[40px] md:text-[96px] font-black leading-[1] mb-2">
                        30+
                    </h3>
                    <p className="font-sans text-[12px] md:text-[24px] font-medium text-gray-300">
                        Partners
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                    <h3 className="font-display text-[40px] md:text-[96px] font-black leading-[1] mb-2">
                        4.8K
                    </h3>
                    <p className="font-sans text-[12px] md:text-[24px] font-medium text-gray-300">
                        Participants Empowered
                    </p>
                </div>

                {/* Stat 4 */}
                <div className="text-center">
                    <h3 className="font-display text-[40px] md:text-[96px] font-black leading-[1] mb-2">
                        30
                    </h3>
                    <p className="font-sans text-[12px] md:text-[24px] font-medium text-gray-300">
                        Speakers
                    </p>
                </div>
            </div>
        </div>

        {/* Right Column - 3 Images Stacked */}
        <div className="flex flex-col gap-2 md:gap-5">
            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                <Image src={embeddedImg3} alt="Speaker 4" fill className="object-cover" />
            </div>
            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                <Image src={embeddedImg4} alt="Speaker 5" fill className="object-cover" />
            </div>
            <div className="bg-gray-800 rounded-lg md:rounded-2xl overflow-hidden relative h-[100px] md:h-[360px]">
                <Image src={embeddedImg5} alt="Speaker 6" fill className="object-cover" />
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
                <section className="py-16 px-4 md:hidden">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-display text-[40px] font-black leading-[48px] tracking-[-0.01em] mb-12">
                            Who Is This Event For?
                        </h2>

                        {/* Cards Horizontal Scrollable Container */}
                        <div
                            ref={cardsScroll.scrollRef}
                            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            onTouchStart={() => cardsScroll.setIsPaused(true)}
                            onTouchEnd={() => setTimeout(() => cardsScroll.setIsPaused(false), 2000)}
                        >
                            {tripleCards.map((card, index) => {
                                const Icon = card.icon;
                                return (
                                    <div
                                        key={`mobile-card-${index}`}
                                        className="bg-gray-900 rounded-2xl p-6 flex-shrink-0 w-[280px] snap-start"
                                    >
                                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                                        </div>
                                        <h3 className="font-display text-[20px] font-black leading-[28px] mb-3">
                                            {card.title}
                                        </h3>
                                        <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.015em] text-gray-300">
                                            {card.description}
                                        </p>
                                    </div>
                                );
                            })}
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

                {/* Join the Movement Section - DESKTOP & MOBILE */}
                <section className="py-10 md:py-20 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
                    <div className="w-full max-w-[1441px] mx-auto">
                        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 rounded-3xl overflow-hidden">
                            {/* Animated gradient border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 opacity-75 blur-sm animate-pulse"></div>

                            {/* Content container */}
                            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 m-[2px] rounded-3xl p-8 md:p-16 flex flex-col items-center justify-center text-center">
                                {/* Decorative elements */}
                                <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <h2 className="font-display text-[32px] md:text-[56px] lg:text-[64px] font-black leading-tight bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
                                        Join the Movement
                                    </h2>

                                    <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 font-medium px-4">
                                        Be part of West Africa's largest blockchain ecosystem. Partner with us to shape the future of Web3 innovation.
                                    </p>

                                    <div className="mb-10 flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
                                        <Image
                                            src={ibx26}
                                            alt="IBX 2026 Logo"
                                            width={220}
                                            height={220}
                                            className="w-[150px] md:w-[220px] h-auto drop-shadow-2xl"
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4">
                                        <a
                                            href="/files/IBX-26-Pitch-Deck.pdf"
                                            download="IBX'26 Pitch Deck.pdf"
                                            className="group relative inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold text-[14px] md:text-[16px] rounded-xl px-8 md:px-10 py-3 md:py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden w-full sm:w-auto"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                Become Our Partner
                                                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </a>
                                    </div>

                                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-500 text-xs md:text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span>5+ Countries</span>
                                        </div>
                                        <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span>1000+ Participants</span>
                                        </div>
                                        <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span>Leading Ecosystem</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Event Outline Section - DESKTOP */}
                <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto hidden md:block">
                    <div className="w-full max-w-[1441px] mx-auto">
                        <div className="flex justify-between items-start mb-8">
                            <h2 className="font-display text-[56px] font-black leading-[64px] tracking-[-0.01em] text-white">
                                Event Outline
                            </h2>
                            <button
                                onClick={handleAddToCalendar}
                                className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg text-sm font-bold transition whitespace-nowrap inline-flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                Add to Calendar
                            </button>
                        </div>

                        <div className="mb-12">
                            <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[-0.006em] text-white max-w-[960px]">
                                Join us at the Ibom Blockchain Summit, where visionaries and pioneers converge to explore the future of Blockchain technology.
                                This annual event is dedicated to fostering collaboration and innovation, providing a unique opportunity to engage with thought
                                leaders and discover cutting-edge developments in the Web3 space.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-5 mb-5">
                            {events.slice(0, 3).map((event, idx) => (
                                <EventCard key={idx} event={event} />
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-5">
                            {events.slice(3).map((event, idx) => (
                                <EventCard key={idx + 3} event={event} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mobile View with Infinite Scroll */}
                <section className="py-16 px-4 md:hidden">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                            Upcoming Events
                        </h2>

                        {/* Events Horizontal Scrollable Container */}
                        <div
                            ref={eventsScroll.scrollRef}
                            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            onMouseEnter={() => eventsScroll.setIsPaused(true)}
                            onMouseLeave={() => eventsScroll.setIsPaused(false)}
                            onTouchStart={() => eventsScroll.setIsPaused(true)}
                            onTouchEnd={() => setTimeout(() => eventsScroll.setIsPaused(false), 2000)}
                        >
                            {tripleEvents.map((event, index) => (
                                <EventCard key={`event-${index}`} event={event} />
                            ))}
                        </div>
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
                            <a
                                href="mailto:partnerships@ibomblockchain.com"
                                className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg text-sm font-bold transition whitespace-nowrap inline-block text-center"
                            >
                                Become a Collaborator
                            </a>
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

                        <a href="mailto:partnerships@ibomblockchain.com"
                            className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg text-sm font-bold transition whitespace-nowrap inline-block text-center"
                        >
                            Become a Collaborator
                        </a>
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
                    animation: scroll-right 20s linear infinite;
                }

                .animate-scroll-left {
                    animation: scroll-left 20s linear infinite;
                }

                /* Faster animation for mobile */
                @media (max-width: 768px) {
                    .animate-scroll-right {
                        animation: scroll-right 5s linear infinite;
                    }

                    .animate-scroll-left {
                        animation: scroll-left 5s linear infinite;
                    }
                }

                //EVENT OUTLINE 
                 .scrollbar-hide::-webkit-scrollbar {
                         display: none;
                 }
            `}</style>

        </div >
    );
}