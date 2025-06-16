import React from 'react'
import Countdown from './countdown'

const home = () => {
    return (
        <>
            <div className="absolute w-full h-full z-10 centre ">
                <div className="centre flex-col text-center text-white gap-8">
                    <div className="centre flex-col text-center text-white gap-2">
                        <h3 className='text-sm md:xl font-bold '>Hack with us at</h3>
                        <h1 className='text-5xl md:text-8xl font-bold puw font-vamos'>HackComet 1.0</h1>
                        <h3 className='text-sm md:xl font-bold'>12 September - 12 October 2025</h3>
                    </div>
                    <div className="centre gap-5">
                        <button onClick={() => handleScroll('events')} id='' className='bg-black text-white xl p-2 px-5 rounded-bl-3xl rounded-tr-3xl cursor-pointer'>Events </button>
                        <button className='bg-black text-white xl p-2 px-5 rounded-br-3xl rounded-tl-3xl'>Register Now!! </button>
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