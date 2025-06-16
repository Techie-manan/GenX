import React from 'react'

const home = () => {
    return (
        <>
            <div className="absolute w-full h-full z-10 centre ">
                <div className="centre flex-col text-center text-white gap-8">
                    <div className="centre flex-col text-center text-white gap-2">
                    <h3 className='xl font-bold '>Hack with us at</h3>
                    <h1 className='text-8xl font-bold puw font-vamos'>HackComet 1.0</h1>
                     <h3 className='xl font-bold'>12 September - 12 October 2025</h3>
                     </div>
                     <div className="centre gap-5">
                        <button className='bg-black text-white xl p-2 px-5 rounded-bl-3xl rounded-tr-3xl '>Events </button>
                        <button className='bg-black text-white xl p-2 px-5 rounded-br-3xl rounded-tl-3xl'>Register Now!! </button>
                     </div>
                </div>
            </div>
        </>
    )
}

export default home
