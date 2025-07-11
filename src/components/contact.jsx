import React from 'react'
import './home.css'
import { FaInstagram, FaLinkedin, FaXTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa6";

const contact = () => {
    return (
        <>
            <div className="relative h-fit">
                <div id='contact' className='z-10 text-white bg pt-10 px-[5vw]'
                    style={{ backgroundImage: 'url("./download.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}>
                    <h1 className='text-center text-4xl font-bold p-5 bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent'>Contact Us</h1>
                    <div className="flex items-center flex-col md:flex-row justify-around my-5 gap-3">
                        <div className="centre gap-2">
                            <img src="logo.PNG" alt="" className='h-7 rounded-full' />
                            <div className='text-xl font-semibold'>0xGenIgnite</div></div>
                        <div className="centre gap-3 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://www.instagram.com/0xgenignite/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://www.linkedin.com/company/107632958/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://x.com/0xgenignite" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                                    <FaXTwitter />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://discord.gg/TTmJExU3" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                                    <FaDiscord />
                                </a></div>
                            
                        </div>
                    </div>
                    <h3 className='text-center text-sm font-semibold p-1'>2025 0xGenIgnite  All rights reserved</h3>
                    <h3 className='text-sm font-semibold p-2 flex centre gap-2'>
                        <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
                        <span>|</span>
                        <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
                        <span>|</span>
                        <a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a>
                    </h3>
                </div>
                
            </div>
        </>
    )
}

export default contact