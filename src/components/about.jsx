import React from 'react'
import FadeLeft from './OnscrollAni/fadeleft'
import FadeRight from './OnscrollAni/faderight'
import FadeUp from './OnscrollAni/fadeup'

const about = () => {
    return (
        <>
            <div className='h-[10vh] bub w-[100vw] px-[5vw] pb-5'> </div>
            <div className='z-10 text-white bg' id='about'>
                <h1 className='text-center text-5xl font-bold p-5 '>About Us</h1>
                <div className='centre flex-col gap-15 px-[5vw]'>
                    <FadeUp>
                        <div className='text-center sm:w-2/3 justify-self-center p-2 md:p-8 pb-20 lg:w-1/2 rounded-2xl shadow-lg shadow-gray-500 '>
                            <h1 className='text-3xl font-semibold pb-5 text'>0xGenIgnite</h1>
                            <p>Welcome to 0xGenIgnite, the ultimate battlefield where brilliance meets code, and the future gets built. Spanning three electrifying days, this flagship event isn’t just a hackathon- it’s a high-voltage launchpad for Gen-Z innovators ready to disrupt the world. Starting with an inspiring celebrity-led kickoff, diving into a 24-hour no-sleep, all-brain hackathon, and climaxing with a grand finale at the Google Office, Gurugram- this is where bold ideas are forged into reality. AI, Web3 or something the world hasn’t seen yet. If you've got the spark, 0xGenIgnite is here to set it ablaze.
                            </p>
                        </div>
                    </FadeUp>
                    <div className="flex items-center flex-col md:flex-row md:justify-around gap-5">
                        <FadeLeft>
                            <div className='text-center w-full p-2 md:p-5 pb-10 md:w-2/3 justify-self-center rounded-2xl shadow-lg shadow-fuchsia-500'>
                                <h2 className='text-3xl font-semibold pb-5 textp'>Genesis</h2>
                                <p>We’re a Web3 community driving decentralization through hackathons, workshops, and events—empowering creators and coders to build transparent, impactful, and community-focused innovations.</p>
                            </div>
                        </FadeLeft>
                        <FadeRight>
                            <div className='text-center w-full p-2 md:p-5 pb-10 md:w-2/3 justify-self-center rounded-2xl shadow-lg shadow-red-500'>
                                <h2 className='text-3xl font-semibold pb-5 textr'>CodeX</h2>
                                <p> CodeX empowers coders, creators, and future founders with real-world projects, expert sessions, challenges, and mentorship—fueling ambition, learning, and innovation across all CSE domains.</p>
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
