import React from 'react';

const collaborators = [
    "/images/AdomLabs.png",
    "/images/BA.png",
    "/images/bitcoin.png",
    "/images/blockchainFUL.png",
    "/images/cadinu.png",
    "/images/CalabarBTCClub.png",
    "/images/chainDustry.png",
    "/images/CoinGabbar.png",
    "/images/coinRateCap.png",
    "/images/CryptoAssetBuyer.png",
    "/images/CryptoFy.png",
    "/images/cyberChain.png",
    "/images/ibx26.png",
    "/images/ITPulse.png",
    "/images/Limitless.png",
    "/images/MITASchool.png",
    "/images/NigCommWeek.png",
    "/images/NigeriaInnvSumm.png",
    "/images/RavenewsOnline.png",
    "/images/Satoshi.png",
    "/images/SmartWaka.png",
    "/images/techBuildAfrica.png",
    "/images/techEconomy.png",
    "/images/techTrendsAfrica.png",
    "/images/TeenGirlBlockchain.png",
    "/images/TheConCave.png",
];

interface ScrollRowProps {
    collaborators: string[];
    direction: "left" | "right";
    rowId: string;
    reverse?: boolean;
    isMobile?: boolean;
}

const ScrollRow: React.FC<ScrollRowProps> = ({ collaborators, direction, rowId, reverse = false, isMobile = false }) => {
    const displayCollaborators = reverse ? [...collaborators].reverse() : collaborators;
    const animationClass = isMobile
        ? (direction === "right" ? "animate-scroll-right-mobile" : "animate-scroll-left-mobile")
        : (direction === "right" ? "animate-scroll-right" : "animate-scroll-left");
    const gap = isMobile ? "gap-3" : "gap-4";
    const containerSize = isMobile ? "h-[60px] w-[90px]" : "h-[80px] w-[120px]";
    const imageWidth = isMobile ? 50 : 70;
    const imageHeight = isMobile ? 50 : 70;

    const getImageSize = (collaborator: string) => {
        // Larger size for CalabarBTCClub to make it clearer
    //     // if (collaborator.includes('CalabarBTCClub')) {
    //     //     return isMobile ? { width: 65, height: 65 } : { width: 80, height: 80 };
    // }
    // Smaller size for blockchainFUL
    if (collaborator.includes('blockchainFUL')) {
        return isMobile ? { width: 40, height: 40 } : { width: 50, height: 50 };
    }
    return { width: imageWidth, height: imageHeight };
};

return (
    <div className="relative overflow-hidden">
        <div className={`flex ${gap} ${animationClass}`}>
            {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className={`flex ${gap} flex-shrink-0`}>
                    {displayCollaborators.map((collaborator, index) => {
                        const size = getImageSize(collaborator);
                        return (
                            <div
                                key={`${rowId}-${setIndex}-${index}`}
                                className={`bg-black rounded-lg ${containerSize} flex items-center justify-center flex-shrink-0`}
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
            ))}
        </div>
    </div>
);
};

export default function CollaboratorsSection() {
    return (
        <>
            <style>{`
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

        @keyframes scroll-right-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left-mobile {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }

        .animate-scroll-right-mobile {
          animation: scroll-right-mobile 10s linear infinite;
        }

        .animate-scroll-left-mobile {
          animation: scroll-left-mobile 10s linear infinite;
        }
      `}</style>

            {/* Our Collaborators Section - DESKTOP */}
            <section className="py-5 w-full hidden md:block overflow-hidden">
                <div className="mt-5 space-y-6">
                    <ScrollRow
                        collaborators={collaborators}
                        direction="right"
                        rowId="desktop-row1"
                    />
                    <ScrollRow
                        collaborators={collaborators}
                        direction="left"
                        rowId="desktop-row2"
                        reverse
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
                        reverse
                    />
                    <ScrollRow
                        collaborators={collaborators}
                        direction="right"
                        rowId="desktop-row5"
                    />
                </div>
            </section>

            {/* Our Collaborators Section - MOBILE */}
            <section className="py-5 w-full md:hidden overflow-hidden">
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
                        reverse
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
                        reverse
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