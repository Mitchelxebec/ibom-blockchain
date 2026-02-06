import React, { useRef, useEffect } from 'react';

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

interface ScrollRowProps {
    collaborators: string[];
    direction: "left" | "right";
    rowId: string;
    isMobile?: boolean;
}

const ScrollRow: React.FC<ScrollRowProps> = ({ collaborators, direction, rowId, isMobile = false }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const gap = isMobile ? 12 : 16; // gap in pixels
    const containerWidth = isMobile ? 90 : 120;
    const containerHeight = isMobile ? 60 : 80;
    const imageWidth = isMobile ? 65 : 75;
    const imageHeight = isMobile ? 65 : 75;

    const getImageSize = (collaborator: string) => {
        if (collaborator.includes('BA')) {
            return isMobile ? { width: 35, height: 35 } : { width: 45, height: 45 };
        }
        if (collaborator.includes('cadinu')) {
            return isMobile ? { width: 35, height: 35 } : { width: 45, height: 45 };
        }
        if (collaborator.includes('CalabarBTCClub')) {
            return isMobile ? { width: 55, height: 55 } : { width: 55, height: 55 };
        }
        if (collaborator.includes('cyberChain')) {
            return isMobile ? { width: 35, height: 35 } : { width: 45, height: 45 };
        }
        if (collaborator.includes('TheConCave')) {
            return isMobile ? { width: 35, height: 35 } : { width: 45, height: 45 };
        }
        return { width: imageWidth, height: imageHeight };
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;

        const itemWidth = containerWidth + gap;
        const singleSetWidth = itemWidth * collaborators.length;

        // Set initial position to middle set
        scrollElement.scrollLeft = singleSetWidth;

        let animationId: number;
        const speed = isMobile ? 1.5 : 1; // pixels per frame

        const animate = () => {
            if (!scrollElement) return;

            if (direction === "right") {
                scrollElement.scrollLeft += speed;
                // Reset to middle when reaching end of second set
                if (scrollElement.scrollLeft >= singleSetWidth * 2) {
                    scrollElement.scrollLeft = singleSetWidth;
                }
            } else {
                scrollElement.scrollLeft -= speed;
                // Reset to middle when reaching start
                if (scrollElement.scrollLeft <= 0) {
                    scrollElement.scrollLeft = singleSetWidth;
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [direction, isMobile, collaborators.length, containerWidth, gap]);

    // Triple the collaborators for seamless loop
    const tripleCollaborators = [...collaborators, ...collaborators, ...collaborators];

    return (
        <div className="relative overflow-hidden w-full">
            <div
                ref={scrollRef}
                className="flex overflow-x-hidden scrollbar-hide"
                style={{
                    gap: `${gap}px`,
                    scrollBehavior: 'auto'
                }}
            >
                {tripleCollaborators.map((collaborator, index) => {
                    const size = getImageSize(collaborator);
                    return (
                        <div
                            key={`${rowId}-${index}`}
                            className="bg-black rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                                width: `${containerWidth}px`,
                                height: `${containerHeight}px`
                            }}
                        >
                            <div
                                style={{
                                    width: size.width,
                                    height: size.height,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img
                                    src={collaborator}
                                    alt={`Collaborator ${index + 1}`}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default function CollaboratorsSection() {
    return (
        <>
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Our Collaborators Section - DESKTOP */}
            <section className="py-8 w-full hidden md:block overflow-hidden">
                <div className="space-y-6">
                    <ScrollRow
                        collaborators={collaborators}
                        direction="right"
                        rowId="desktop-row1"
                    />
                    <ScrollRow
                        collaborators={collaborators}
                        direction="left"
                        rowId="desktop-row2"
                    />
                    <ScrollRow
                        collaborators={collaborators}
                        direction="right"
                        rowId="desktop-row3"
                    />
                    <ScrollRow
                        collaborators={collaborators}
                        direction="left"
                        rowId="desktop-row4"
                    />
                    <ScrollRow
                        collaborators={collaborators}
                        direction="right"
                        rowId="desktop-row5"
                    />
                </div>
            </section>

            {/* Our Collaborators Section - MOBILE */}
            <section className="py-6 w-full md:hidden overflow-hidden">
                <div className="space-y-4">
                    <ScrollRow
                        collaborators={collaborators}
                        direction="right"
                        rowId="mobile-row1"
                        isMobile
                    />
                    <ScrollRow
                        collaborators={collaborators}
                        direction="left"
                        rowId="mobile-row2"
                        isMobile
                    />
                    <ScrollRow
                        collaborators={collaborators}
                        direction="right"
                        rowId="mobile-row3"
                        isMobile
                    />
                    <ScrollRow
                        collaborators={collaborators}
                        direction="left"
                        rowId="mobile-row4"
                        isMobile
                    />
                    <ScrollRow
                        collaborators={collaborators}
                        direction="right"
                        rowId="mobile-row5"
                        isMobile
                    />
                </div>
            </section>
        </>
    );
}