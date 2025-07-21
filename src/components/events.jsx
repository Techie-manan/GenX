import React, { useState, useEffect, useMemo } from 'react'
import FadeUp from './OnscrollAni/fadeup'

const Events = () => {
    const [activeDay, setActiveDay] = useState('day1');
    const [hoveredEvent, setHoveredEvent] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Track mouse position for 3D effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const day1Events = [
        {
            time: "09:00 AM",
            title: "Launchpad Check-In",
            description: "Arrival, registration & swags. Get your crew ready.",
            icon: "🚀",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/50",
            particleColor: "purple"
        },
        {
            time: "10:00 AM",
            title: "Mission Briefing",
            description: "Opening ceremony, rules, theme briefing & partner showcase.",
            icon: "📋",
            color: "from-pink-500 to-purple-500",
            glow: "shadow-pink-500/50",
            particleColor: "pink"
        },
        {
            time: "11:00 AM",
            title: "Ignition Start",
            description: "Hacking begins. Teams lock into their mission objectives.",
            icon: "⚡",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/50",
            particleColor: "purple"
        },
        {
            time: "12:00 PM",
            title: "Galactic Grub",
            description: "Lunch break – recharge your fuel cells.",
            icon: "🍕",
            color: "from-pink-500 to-purple-500",
            glow: "shadow-pink-500/50",
            particleColor: "pink"
        },
        {
            time: "02:00 PM",
            title: "Spacewalk: Mentor Orbit #1",
            description: "Mentors float in for the first feedback & Q/A round.",
            icon: "👨‍🚀",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/50",
            particleColor: "purple"
        },
        {
            time: "04:00 PM",
            title: "Blackhole Break",
            description: "Quick energizer, coffee + networking zone.",
            icon: "☕",
            color: "from-pink-500 to-purple-500",
            glow: "shadow-pink-500/50",
            particleColor: "pink"
        },
        {
            time: "05:00 PM",
            title: "Code Meteor Shower",
            description: "Side challenge: Build a tiny feature, win goodies.",
            icon: "💻",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/50",
            particleColor: "purple"
        },
        {
            time: "06:30 PM",
            title: "AI & Web3 Nebula Talk",
            description: "Expert speaker session on frontier tech.",
            icon: "🤖",
            color: "from-pink-500 to-purple-500",
            glow: "shadow-pink-500/50",
            particleColor: "pink"
        },
        {
            time: "08:00 PM",
            title: "Meteor Bites",
            description: "Dinner is served! Refuel for the long orbit.",
            icon: "🍽️",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/50",
            particleColor: "purple"
        },
        {
            time: "09:00 PM",
            title: "Mission Pulse Check",
            description: "Midway team check-ins with mentors/judges.",
            icon: "📊",
            color: "from-pink-500 to-purple-500",
            glow: "shadow-pink-500/50",
            particleColor: "pink"
        }
    ];

    const day2Events = [
        {
            time: "12:00 AM",
            title: "Starlight Chill Hour",
            description: "Lo-fi zone + board games + surprise fun break.",
            icon: "🌙",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/50",
            particleColor: "purple"
        },
        {
            time: "02:00 AM",
            title: "Fuel-Up Station",
            description: "Late night snacks + energy shots.",
            icon: "⚡",
            color: "from-pink-500 to-purple-500",
            glow: "shadow-pink-500/50",
            particleColor: "pink"
        },
        {
            time: "03:00 AM",
            title: "Dark Matter Debug Hour",
            description: "Technical mentors available for all-night debugging help.",
            icon: "🐛",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/50",
            particleColor: "purple"
        },
        {
            time: "05:00 AM",
            title: "Solar Stretch",
            description: "Light yoga/stretch break to reboot minds.",
            icon: "🧘",
            color: "from-pink-500 to-purple-500",
            glow: "shadow-pink-500/50",
            particleColor: "pink"
        },
        {
            time: "06:30 AM",
            title: "Final Orbit",
            description: "Last push, polish your project, prep your decks.",
            icon: "🎯",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/50",
            particleColor: "purple"
        },
        {
            time: "08:30 AM",
            title: "Docking Complete: Submissions",
            description: "Final submissions close. Code freeze.",
            icon: "🔒",
            color: "from-pink-500 to-purple-500",
            glow: "shadow-pink-500/50",
            particleColor: "pink"
        },
        {
            time: "09:00 AM",
            title: "Mission Demo Day",
            description: "Top teams present to the jury panel. Blast your ideas!",
            icon: "🎤",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/50",
            particleColor: "purple"
        },
        {
            time: "11:00 AM",
            title: "Award Ceremony & Touchdown",
            description: "Winner announcements, closing notes, and a cosmic group photo.",
            icon: "🏆",
            color: "from-pink-500 to-purple-500",
            glow: "shadow-pink-500/50",
            particleColor: "pink"
        },
        {
            time: "12:00 PM",
            title: "Re-entry & Departure",
            description: "Goodbye hugs, feedback & community sign-ups.",
            icon: "👋",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-purple-500/50",
            particleColor: "purple"
        }
    ];

    const currentEvents = activeDay === 'day1' ? day1Events : day2Events;

    // Particle effect component - optimized with useMemo
    const ParticleEffect = ({ color, isActive }) => {
        const particles = useMemo(() => 
            [...Array(20)].map((_, i) => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `${Math.random() * 2}s`,
                duration: `${1 + Math.random() * 2}s`
            })), []
        );
        
        return (
            <div className={`absolute inset-0 overflow-hidden rounded-2xl pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                {particles.map((particle, i) => (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${color === 'purple' ? 'from-purple-400 to-pink-400' : 'from-pink-400 to-purple-400'} rounded-full animate-pulse`}
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            <div id='events' className='z-10 text-white bg pb-10 relative overflow-hidden' style={{ backgroundColor: '#05011a' }}>
                {/* Cosmic Background Effects */}
                <div className='absolute inset-0 overflow-hidden'>
                    <div className='absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75'></div>
                    <div className='absolute top-40 right-20 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-60'></div>
                    <div className='absolute bottom-40 left-1/4 w-3 h-3 bg-purple-300 rounded-full animate-bounce opacity-50'></div>
                    <div className='absolute top-1/2 right-1/3 w-1 h-1 bg-pink-300 rounded-full animate-ping opacity-70'></div>
                </div>

                <h1 className='text-center text-5xl font-bold p-5 relative z-10'>
                    <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse'>
                        Timeline
                    </span>
                </h1>

                {/* INSANE Toggle Buttons */}
                <div className='flex justify-center gap-6 my-12 relative z-10' role="tablist" aria-label="Timeline days">
                    <button
                        onClick={() => setActiveDay('day1')}
                        role="tab"
                        aria-selected={activeDay === 'day1'}
                        aria-controls="day1-timeline"
                        className={`relative px-10 py-5 text-lg font-bold rounded-2xl border-2 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden group
                            ${activeDay === 'day1'
                                ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 border-purple-400 text-white shadow-2xl shadow-purple-500/50 animate-pulse'
                                : 'bg-black/30 border-white/20 text-gray-300 hover:border-purple-400 hover:text-white backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/25'
                            }`}
                    >
                        <span className='relative z-10'>Day 1</span>
                        <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300'></div>
                    </button>
                    <button
                        onClick={() => setActiveDay('day2')}
                        role="tab"
                        aria-selected={activeDay === 'day2'}
                        aria-controls="day2-timeline"
                        className={`relative px-10 py-5 text-lg font-bold rounded-2xl border-2 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden group
                            ${activeDay === 'day2'
                                ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 border-purple-400 text-white shadow-2xl shadow-purple-500/50 animate-pulse'
                                : 'bg-black/30 border-white/20 text-gray-300 hover:border-purple-400 hover:text-white backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/25'
                            }`}
                    >
                        <span className='relative z-10'>Day 2</span>
                        <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300'></div>
                    </button>
                </div>


            </div>

            {/* Timeline Container */}
            <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10' style={{ backgroundColor: '#05011a' }}>
                <div className='relative'>
                    {/* Timeline Line */}
                    <div className='absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg'></div>
                    
                    {/* Timeline Events */}
                    <div className='space-y-12'>
                        {currentEvents.map((event, index) => (
                            <FadeUp key={index} delay={index * 0.15}>
                                <div
                                    className={`relative flex items-center justify-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
                                    onMouseEnter={() => setHoveredEvent(index)}
                                    onMouseLeave={() => setHoveredEvent(null)}
                                >
                                    {/* Animated Timeline Dot */}
                                    <div className='absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black shadow-2xl z-20 animate-pulse'>
                                        <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-75'></div>
                                    </div>

                            {/* INSANE Event Card */}
                            <div className={`ml-6 md:ml-0 md:w-4/12 ${index % 2 === 0 ? 'md:mr-[40vw]' : 'md:ml-[40vw]'}`}>
                                <div
                                    className={`relative p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/20 transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1 shadow-2xl group-hover:shadow-3xl overflow-hidden
                                                    ${hoveredEvent === index ? 'border-purple-400/60 shadow-purple-500/30' : 'hover:border-purple-400/40'}
                                                `}
                                    style={{
                                        transform: hoveredEvent === index ?
                                            `perspective(1000px) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg)` :
                                            'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                                    }}
                                >
                                    {/* Particle Effect */}
                                    <ParticleEffect color={event.particleColor} isActive={hoveredEvent === index} />

                                    {/* Floating Icon */}
                                    <div className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center text-3xl shadow-2xl animate-bounce group-hover:animate-spin transition-all duration-500`}>
                                        <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full'></div>
                                        {event.icon}
                                    </div>

                                    {/* Glowing Border Effect */}
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>

                                    {/* Content */}
                                    <div className='relative z-10 mt-6'>
                                        <div className='flex items-center justify-between mb-4'>
                                            <h3 className='text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500'>
                                                {event.title}
                                            </h3>
                                            <span className='text-sm font-bold text-purple-300 bg-gradient-to-r from-purple-500/30 to-pink-500/30 px-4 py-2 rounded-full border border-purple-400/30 backdrop-blur-md animate-pulse'>
                                                {event.time}
                                            </span>
                                        </div>
                                        <p className='text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-500'>
                                            {event.description}
                                        </p>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${event.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Floating Elements */}
                                    <div className='absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60'></div>
                                    <div className='absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-80'></div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events
