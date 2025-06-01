import React from 'react'

const home = () => {
    return (
        <>
            <div className="absolute top-0 left-0 w-[100vw] h-[100vh] centre z-10">
                <div className="centre flex-col text-center text-white bg-white">
                    <h3>Hack with us at</h3>
                    <h1>HackMela 1.0</h1>
                     <h3>12 September - 12 October 2025</h3>
                     <div className="centre ">
                        <button className='bg-black text-white'>Events</button>
                        <button>Register Now!!</button>
                     </div>
                </div>
            </div>
        </>
    )
}

export default home
