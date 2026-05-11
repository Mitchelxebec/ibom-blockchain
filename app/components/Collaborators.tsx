"use client";

import Image from 'next/image';

const collaborators = [
    "/images/AdomLabs.png",
    "/images/AfricanBlockchainComm.png",
    "/images/AllConfBot.png",
    "/images/AyaHQ.png",
    "/images/BA.png",
    "/images/bitcoin.png",
    "/images/Borderless.png",
    "/images/blockchainFUL.png",
    "/images/Block24seven.png",
    "/images/cadinu.png",
    "/images/CalabarBTCClub.png",
    "/images/CAB.png",
    "/images/CasJoe.png",
    "/images/chainDustry.png",
    "/images/CoinGabbar.png",
    "/images/coinRateCap.png",
    "/images/CryptoAssetBuyer.png",
    "/images/CryptoFy.png",
    "/images/cyberChain.png",
    "/images/HillDigiExchange.png",
    "/images/IVBFrame.png",
    "/images/ITPulse.png",
    "/images/jtconnect.png",
    "/images/Limitless.png",
    "/images/MITASchool.png",
    "/images/NigCommWeek.png",
    "/images/NigeriaInnvSumm.png",
    "/images/OrgaAfrica.png",
    "/images/RavenewsOnline.png",
    "/images/Satoshi.png",
    "/images/SmartWaka.png",
    "/images/techBuildAfrica.png",
    "/images/techEconomy.png",
    "/images/techTrendsAfrica.png",
    "/images/TechCommClub.png",
    "/images/TeenGirlBlockchain.png",
    "/images/TheConCave.png",
];

// Split into rows so each row has fewer items
const row1 = collaborators.slice(0, 8);
const row2 = collaborators.slice(8, 15);
const row3 = collaborators.slice(15, 22);
const row4 = collaborators.slice(22, 29);
const row5 = collaborators.slice(29);

interface ScrollRowProps {
    items: string[];
    direction: "left" | "right";
    rowId: string;
    isMobile?: boolean;
    duration: number;
}

function ScrollRow({ items, direction, rowId, isMobile = false, duration }: ScrollRowProps) {
    const containerWidth = isMobile ? 90 : 120;
    const containerHeight = isMobile ? 60 : 80;
    const imageWidth = isMobile ? 65 : 75;
    const imageHeight = isMobile ? 65 : 75;

    const getImageSize = (collaborator: string) => {
        if (collaborator.includes('BA') || collaborator.includes('cadinu') ||
            collaborator.includes('cyberChain') || collaborator.includes('TheConCave')) {
            return isMobile ? { width: 35, height: 35 } : { width: 45, height: 45 };
        }
        if (collaborator.includes('CalabarBTCClub')) {
            return { width: 55, height: 55 };
        }
        return { width: imageWidth, height: imageHeight };
    };

    const animClass = direction === 'left' ? 'collab-scroll-left' : 'collab-scroll-right';

    return (
        <div className="relative overflow-hidden w-full">
            <div
                className={animClass}
                style={{ animationDuration: `${duration}s` }}
            >
                {[...items, ...items].map((collaborator, index) => {
                    const size = getImageSize(collaborator);
                    return (
                        <div
                            key={`${rowId}-${index}`}
                            className="bg-black rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                                width: `${containerWidth}px`,
                                height: `${containerHeight}px`,
                                marginRight: isMobile ? '12px' : '16px',
                            }}
                        >
                            <div style={{ width: size.width, height: size.height, position: 'relative' }}>
                                <Image
                                    src={collaborator}
                                    alt={`Collaborator ${index + 1}`}
                                    fill
                                    sizes={`${size.width}px`}
                                    style={{ objectFit: 'contain' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function CollaboratorsSection() {
    return (
        <>
            <style jsx global>{`
                @keyframes collab-scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes collab-scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .collab-scroll-left {
                    display: flex;
                    min-width: max-content;
                    will-change: transform;
                    animation: collab-scroll-left linear infinite;
                }
                .collab-scroll-right {
                    display: flex;
                    min-width: max-content;
                    will-change: transform;
                    animation: collab-scroll-right linear infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .collab-scroll-left,
                    .collab-scroll-right {
                        animation: none !important;
                    }
                }
            `}</style>

            {/* Desktop */}
            <section className="py-8 w-full hidden md:block overflow-hidden">
                <div className="space-y-6">
                    <ScrollRow items={row1} direction="right" rowId="d1" duration={12} />
                    <ScrollRow items={row2} direction="left"  rowId="d2" duration={12} />
                    <ScrollRow items={row3} direction="right" rowId="d3" duration={12} />
                    <ScrollRow items={row4} direction="left"  rowId="d4" duration={12} />
                    <ScrollRow items={row5} direction="right" rowId="d5" duration={12} />
                </div>
            </section>

            {/* Mobile */}
            <section className="py-6 w-full md:hidden overflow-hidden">
                <div className="space-y-4">
                    <ScrollRow items={row1} direction="right" rowId="m1" isMobile duration={10} />
                    <ScrollRow items={row2} direction="left"  rowId="m2" isMobile duration={10} />
                    <ScrollRow items={row3} direction="right" rowId="m3" isMobile duration={10} />
                    <ScrollRow items={row4} direction="left"  rowId="m4" isMobile duration={10} />
                    <ScrollRow items={row5} direction="right" rowId="m5" isMobile duration={10} />
                </div>
            </section>
        </>
    );
}
