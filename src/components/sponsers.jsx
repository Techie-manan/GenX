import React from 'react'

const sponsers = () => {

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // close menu if on mobile
        }
    };

    return (
        <>
            <div id='sponsors' className='z-10 text-white bg pt-10 px-[5vw]'>
                <h1 className='text-center text-5xl font-bold p-5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Sponsors</h1>
                <div className="centre flex-wrap w-full gap-5 p-8 capsule">
                    <h2>To Be Revealed..</h2>
                    {/* <img src="genesis.png" alt="" height={100} className='h-50' />
                    <img src="fusion.png" alt="" height={100} className='h-50' />
                    <img src="ai.png" alt="" height={100} className='h-50' /> */}
                </div>
            </div>
        </>
    )
}

export default sponsers
