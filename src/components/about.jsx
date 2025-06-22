import React from 'react'
import FadeLeft from './OnscrollAni/fadeleft'
import FadeRight from './OnscrollAni/faderight'
import FadeUp from './OnscrollAni/fadeup'

const about = () => {
    return (
        <>
            <div id='about' className='h-[10vh] bub w-[100vw] px-[5vw] pb-5'> </div>
            <div className='z-10 text-white bg'>
                <h1 className='text-center text-5xl font-bold p-5 '>About Us</h1>
                <div className='centre flex-col gap-15 px-[5vw]'>
                    <FadeUp>
                        <div className='text-center sm:w-2/3 justify-self-center p-2 md:p-8 pb-20 lg:w-1/2 rounded-2xl shadow-lg shadow-gray-500 '>
                            <h1 className='text-3xl font-semibold pb-5 text'>HackComet'25</h1>
                            <p> HackComet 1.0 is not just a hackathon-it’s a full-blown tech carnival by CodeX x Genesis, bringing together the brightest student innovators and code wizards from around the world. Kicking off at SRMIST Delhi-NCR and heading toward a grand finale at the iconic Google Office, Gurugram, the action runs from 12th September to 12th October 2025. From power-packed workshops and electrifying expert talks to an adrenaline-fueled 24-hour on-site hackathon, it’s all about turning bold ideas into breakthrough solutions. With top-tier mentorship and global limelight up for grabs, HackComet 1.0 is where tech meets thrill and innovation gets the spotlight it deserves!
</p>
                        </div>
                    </FadeUp>
                    <div className="flex items-center flex-col md:flex-row md:justify-around gap-5">
                        <FadeLeft>
                            <div className='text-center w-full p-2 md:p-5 pb-20 md:w-2/3 justify-self-center rounded-2xl shadow-lg shadow-fuchsia-500'>
                                <h2 className='text-3xl font-semibold pb-5 textp'>Genesis</h2>
                                <p>We are a purpose-driven Web3 community shaping the decentralized future through collaboration and innovation. By organizing hackathons, speaker sessions, workshops, and more, we create opportunities for creators, coders, and innovators to learn, grow, and build impactful projects that align with the principles of decentralization, transparency, and community empowerment.</p>
                            </div>
                        </FadeLeft>
                        <FadeRight>
                            <div className='text-center w-full p-2 md:p-5 pb-20 md:w-2/3 justify-self-center rounded-2xl shadow-lg shadow-red-500'>
                                <h2 className='text-3xl font-semibold pb-5 textr'>CodeX</h2>
                                <p> CodeX is a dynamic tech community for coders, creators, and future founders. We offer real-world projects, expert sessions, weekly challenges, and mentorship across all CSE domains. Whether you're starting out or scaling up, CodeX fuels your ambition with purpose, learning, and innovation. Dream big—build bigger with CodeX.</p>
                            </div>
                        </FadeRight>
                    </div>
                </div>
                <h1 className='text-center text-5xl font-bold p-5 mt-10'>Themes</h1>
                <div className="centre flex-col md:flex-row gap-5 md:justify-around text-center px-[5vw]">
                    <FadeUp>
                        <div className="card capsule w-[80vw] md:w-[27vw] md:flex-1/4 bg-[url('/images/web3.png')] bg-cover bg-center h-[35vh]">
                        </div>
                        </FadeUp>
                    <FadeUp delay={0.2}>
                        <div className="card centre capsule w-[80vw] md:w-[27vw] md:flex-1/4 bg-[url('/images/fusion.png')] bg-cover bg-center  h-[35vh] flex items-center justify-center">
                            <h2 className='p-5 text-xl font-semibold text-white text-center'>
                                AI x Web3 <br /> Fusion
                            </h2>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.4}>
                        <div className="card centre capsule w-[80vw] md:w-[27vw] md:flex-1/4 bg-[url('/images/ai.png')] bg-cover bg-center h-[35vh] flex justify-center items-center">
                            <h2 className='py-1 px-2 text-2xl font-semibold text-center backdrop-blur-xs rounded-full'>AI</h2>
                        </div>
                    </FadeUp>
                </div>
            </div>
            {/* <div className='h-[10vh] bub w-[100vw] px-[5vw]'> </div> */}

        </>
    )
}

export default about
