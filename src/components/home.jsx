import React from 'react'
import Countdown from './countdown'

const home = () => {
    const handleScroll = (id) => {
        console.log('handleScroll called with id:', id);
        const el = document.getElementById(id);
        console.log('Element found:', el);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Element with id', id, 'not found');
        }
    };

    const handleRegister = () => {
        console.log('Register button clicked');
        alert('Registration coming soon! Stay tuned for updates.');
    };

    return (
        <>
            <div className="absolute w-full h-full z-10 centre pointer-events-auto">
                <div className="centre flex-col text-center text-white gap-8 pointer-events-auto">
                    <div className="centre flex-col text-center text-white gap-2">
                        <h3 className='text-sm md:text-xl font-bold '>Ignite yourself with us at</h3>
                        <h1 className='text-5xl md:text-8xl font-bold puw font-vamos pb-4'>0xGenIgnite</h1>
                        <h3 className='text-sm md:text-xl font-bold'>9 October - 12 October 2025</h3>
                    </div>
                    <div className="centre gap-8 z-50 pointer-events-auto">
                        <button 
                            onClick={() => handleScroll('events')} 
                            className='group relative px-10 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 ease-out cursor-pointer pointer-events-auto shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1'
                            style={{ zIndex: 1000 }}
                        >
                            <span className="relative z-10 tracking-wide">Events</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </button>
                        <button 
                            onClick={handleRegister}
                            className='group relative px-10 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md text-white font-medium rounded-2xl border border-purple-400/30 hover:border-purple-300/50 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-500 ease-out cursor-pointer pointer-events-auto shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1'
                            style={{ zIndex: 1000 }}
                        >
                            <span className="relative z-10 tracking-wide">Register Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </button>
                    </div>
                    <div className=" ">
                <h1 className='text-lg md:text-2xl font-semibold'>Launching In</h1>
                    <Countdown />
                    </div>
                </div>
            </div>
        </>
    )
}

export default home