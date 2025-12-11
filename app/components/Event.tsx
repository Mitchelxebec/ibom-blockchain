import React, { useState, useRef, useEffect } from 'react';

// Types
interface Event {
    title: string;
    day: string;
    month: string;
    location: string;
    time: string;
    image: string;
    alt: string;
}

interface CalendarEvent {
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
}

// Custom Hook for Auto Scroll - Card by Card
const useAutoScroll = (config: {
    itemWidth: number;
    gap: number;
    itemCount: number;
    interval: number;
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!scrollRef.current || isPaused) return;

        const scroll = scrollRef.current;
        const itemSize = config.itemWidth + config.gap;
        const singleSetWidth = itemSize * (config.itemCount / 3);

        // Initialize scroll position to the middle set
        scroll.scrollLeft = singleSetWidth;

        const autoScroll = setInterval(() => {
            if (!scroll) return;

            // Smooth scroll by one full card width
            const currentScroll = scroll.scrollLeft;
            const targetScroll = currentScroll + itemSize;

            scroll.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });

            // Check if we've scrolled past the second set
            setTimeout(() => {
                if (scroll.scrollLeft >= singleSetWidth * 2 - itemSize) {
                    scroll.scrollLeft = singleSetWidth;
                }

                if (scroll.scrollLeft <= itemSize) {
                    scroll.scrollLeft = singleSetWidth;
                }
            }, 600); // Wait for smooth scroll to complete

        }, config.interval);

        return () => clearInterval(autoScroll);
    }, [isPaused, config]);

    return { scrollRef, setIsPaused };
};

// Event Card Component
const EventCard: React.FC<{ event: Event }> = ({ event }) => (
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

// Calendar Button Component
const AddToCalendarButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg text-sm font-bold transition whitespace-nowrap inline-flex items-center gap-2"
    >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
            />
        </svg>
        Add to Calendar
    </button>
);

// Desktop Event Grid Component
const DesktopEventGrid: React.FC<{
    events: Event[];
    onAddToCalendar: () => void;
}> = ({ events, onAddToCalendar }) => (
    <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto hidden md:block">
        <div className="w-full max-w-[1441px] mx-auto">
            <div className="flex justify-between items-start mb-8">
                <h2 className="font-display text-[56px] font-black leading-[64px] tracking-[-0.01em] text-white">
                    Event Outline
                </h2>
                <AddToCalendarButton onClick={onAddToCalendar} />
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
);

// Mobile Event Carousel Component
const MobileEventCarousel: React.FC<{
    events: Event[];
    onAddToCalendar: () => void;
}> = ({ events, onAddToCalendar }) => {
    const tripleEvents = [...events, ...events, ...events];

    const eventsScroll = useAutoScroll({
        itemWidth: 320,
        gap: 16,
        itemCount: tripleEvents.length,
        interval: 3000
    });

    return (
        <section className="py-16 px-4 md:hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between flex-col items-start mb-8">
                    <h2 className="font-display text-[40px] font-black leading-[64px] tracking-[-0.01em] text-white">
                        Event Outline
                    </h2>
                    <AddToCalendarButton onClick={onAddToCalendar} />
                </div>

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
    );
};

// Main Event Outline Component
const EventOutline: React.FC<{ events: Event[]; calendarEvent: CalendarEvent }> = ({
    events,
    calendarEvent
}) => {
    const generateGoogleCalendarURL = (event: CalendarEvent) => {
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
        const calendarURL = generateGoogleCalendarURL(calendarEvent);
        window.open(calendarURL, '_blank');
    };

    return (
        <>
            <DesktopEventGrid events={events} onAddToCalendar={handleAddToCalendar} />
            <MobileEventCarousel events={events} onAddToCalendar={handleAddToCalendar} />

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </>
    );
};

// Demo Component with Sample Data
export default function Demo() {
    const sampleEvents: Event[] = [
        {
            title: "IBOM BLOCKCHAIN SUMMIT",
            day: "10",
            month: "March",
            location: "E3 Event Center Uyo Village Road",
            time: "9:00 am - 5:00 PM",
            image: "/images/March10.jpg",
            alt: "Ibom Blockchain Summit Event"
        },
        {
            title: "IBOM BLOCKCHAIN SUMMIT",
            day: "11",
            month: "March",
            location: "E3 Event Center Uyo Village Road",
            time: "9:00 am - 5:00 PM",
            image: "/images/March11.jpg",
            alt: "Blockchain Panel Discussion"
        },
        {
            title: "DEN OF ROGUES",
            day: "12",
            month: "March",
            location: "E3 Event Center Uyo Village Road",
            time: "10:00 am - 4:00 PM",
            image: "/images/March12.jpg",
            alt: "Den of Rogues Presentation"
        },
        {
            title: "FOUNDERS FORGE",
            day: "13",
            month: "March",
            location: "Upon Registration",
            time: "8:30 am - 6:00 PM",
            image: "/images/March13.jpg",
            alt: "Blockchain Village Event"
        },
        {
            title: "IBX GALA: A CELEBRATION OF VISIONARIES",
            day: "14",
            month: "March",
            location: "Exclusive",
            time: "5:00 PM Prompt",
            image: "/images/March14.jpg",
            alt: "Founders Forge Event"
        }
    ];

    const calendarEventData: CalendarEvent = {
        title: 'Ibom Blockchain Xperience 2026',
        description: "Join West Africa's premier blockchain gathering. A convergence of innovators, industry leaders, creators, and enthusiasts exploring the power of blockchain technology.",
        location: 'E3 Event Center, Uyo Village Road, Uyo, Nigeria',
        startDate: '20260310T080000',
        endDate: '20260314T173000',
    };

    return (
        <div className="min-h-screen bg-black">
            <EventOutline events={sampleEvents} calendarEvent={calendarEventData} />
        </div>
    );
}