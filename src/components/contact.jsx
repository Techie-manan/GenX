import React from 'react'

const contact = () => {
    return (
        <>
            <div id='contact' className='z-10 text-white bg pt-10 px-[5vw]'>
                <h1 className='text-center text-4xl font-bold p-5 '>Contact Us</h1>
                <div className="flex justify-around">
                    <div>HackMela 1.0</div>
                    <div className="centre">
                        <a href=""></a>
                    </div>
                </div>
                <h3 className='text-center text-sm font-semibold p-1'>2025 HackMela1.0  All rights reserved</h3>
                <h3 className='text-sm font-semibold p-2 flex justify-self-center gap-2'>
                    <a href="">Privacy Policy</a>
                    <span>|</span>
                    <a href="">Terms of Service</a>
                    <span>|</span>
                    <a href="">Contact Us</a>
                </h3>
            </div>
        </>
    )
}

export default contact
