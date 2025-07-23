import React from 'react'
import './home.css'
import { FaInstagram, FaLinkedin, FaXTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa6";
import { SiLinktree } from 'react-icons/si';

const contact = () => {
    return (
        <>
            <div className="relative h-fit">
                <div id='contact' className=' text-white bg pt-10 px-[5vw]'
                    style={{ backgroundImage: 'url("./images/space.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
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
                                <a href="https://discord.gg/MrnnGPsGyf" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                                    <FaDiscord />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://linktr.ee/0xGenIgnite" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                                    <SiLinktree />
                                </a></div>
                        </div>
                    </div>
                    <h3 className='text-center text-sm font-semibold p-1'>2025 0xGenIgnite  All rights reserved</h3>
                    <h3 className='text-sm font-semibold p-2 flex centre gap-2'>
                        <p>Write to us at </p>
                        <a href="mailto:0xgenignite@gmail.com" style={{
                            color: 'gray',
                            textDecoration: 'none',
                        }}
                            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                        >0xgenignite@gmail.com</a>
                    </h3>
                </div>
            </div>
        </>
    )
}

export default contact