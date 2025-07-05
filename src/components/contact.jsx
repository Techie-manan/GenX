import React from 'react'
import { FaInstagram, FaLinkedin, FaXTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa6";

const contact = () => {
    return (
        <>
            <div className="relative">
                <div id='contact' className='z-10 text-white bg pt-10 px-[5vw]'>
                    <h1 className='text-center text-4xl font-bold p-5 '>Contact Us</h1>
                    <div className="flex items-center flex-col md:flex-row justify-around my-5 gap-3">
                        <div className="centre gap-2">
                            <img src="logo.PNG" alt="" className='h-7 rounded-full'/>
                        <div className='text-xl font-semibold'>0xGenIgnite</div></div>
                        <div className="centre gap-3 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://www.instagram.com/hackcomet1.0/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://www.linkedin.com/company/107632958/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://x.com/0xhackmela1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                                    <FaXTwitter />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                                    <FaDiscord />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                                    <FaWhatsapp />
                                </a></div>
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
                <div className="absolute -top-full left-0 w-full h-full -z-10">
                    <img src="download.jpeg" alt="" />
                </div>
            </div>
        </>
    )
}

export default contact