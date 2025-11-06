"use client";

import Image from "next/image";

// ADD YOUR BACKGROUND IMAGE PATH HERE
const backgroundImage = "/images/sparkles.png"; // <- Replace with your image path
const ibxLogo = "/images/ibx-logo.png";

export default function MaintenancePage() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Circular Radial Gradient Overlay - Orange to Black */}
            <div 
                className="absolute inset-0 z-[1]"
                style={{
                    background: 'radial-gradient(circle at center, rgba(239, 133, 16, 0.3) 0%, rgba(239, 133, 16, 0.25) 40%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.95) 100%)'
                }}
            />

            {/* Logo */}
            <div className="absolute top-8 md:top-12 left-1/2 transform -translate-x-1/2 z-10">
                <Image
                    src={ibxLogo}
                    alt="IBX Blockchain Xperience Logo"
                    width={200}
                    height={50}
                    className="h-8 md:h-12 w-auto"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto">
                <h1
                    className="text-white mb-6 md:mb-8"
                    style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(32px, 8vw, 72px)',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em'
                    }}
                >
                    We'll Be Back Soon
                </h1>

                <div className="space-y-2">
                    <p
                        className="text-white/90"
                        style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '18px',
                            lineHeight: '24px',
                            letterSpacing: '-1.5%',
                            textAlign: 'center'
                        }}
                    >
                        Our site is currently undergoing maintenance.
                    </p>
                    <p
                        className="text-white/90"
                        style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '18px',
                            lineHeight: '24px',
                            letterSpacing: '-1.5%',
                            textAlign: 'center'
                        }}
                    >
                        We will be back in 3 days
                    </p>
                </div>
            </div>

            <style jsx>{`
                /* Ensure DM Sans font is loaded */
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap');

                /* Mobile devices (portrait phones, less than 576px) */
                @media (max-width: 575.98px) {
                    h1 {
                        font-size: 32px !important;
                        margin-bottom: 1.5rem !important;
                    }
                    p {
                        font-size: 14px !important;
                    }
                }

                /* Small devices (landscape phones, 576px and up) */
                @media (min-width: 576px) and (max-width: 767.98px) {
                    h1 {
                        font-size: 40px !important;
                    }
                    p {
                        font-size: 18px !important;
                        line-height: 24px !important;
                    }
                }

                /* Medium devices (tablets, 768px and up) */
                @media (min-width: 768px) and (max-width: 991.98px) {
                    h1 {
                        font-size: 52px !important;
                    }
                    p {
                        font-size: 18px !important;
                        line-height: 24px !important;
                    }
                }

                /* Large devices (desktops, 992px and up) */
                @media (min-width: 992px) {
                    h1 {
                        font-size: 72px !important;
                    }
                    p {
                        font-size: 18px !important;
                    }
                }

                /* Extra small height devices */
                @media (max-height: 600px) {
                    .absolute.top-8 {
                        top: 1rem;
                    }
                    h1 {
                        font-size: 28px !important;
                        margin-bottom: 1rem !important;
                    }
                }
            `}</style>
        </div>
    );
}