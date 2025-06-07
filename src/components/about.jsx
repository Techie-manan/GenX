import React from 'react'
import FadeLeft from './OnscrollAni/fadeleft'
import FadeRight from './OnscrollAni/faderight'
import FadeUp from './OnscrollAni/fadeup'

const about = () => {
    return (
        <>
            <div className='h-[10vh] bub w-[100vw] px-[5vw] pb-5'> </div>
            <div className='z-10 text-white bg'>
                <h1 className='text-center text-5xl font-bold p-5 '>About Us</h1>
                <div className='centre flex-col gap-15 px-[5vw]'>
                    <FadeUp>
                        <div className='text-center justify-self-center p-8 pb-20 md:w-1/3 rounded-2xl shadow-lg shadow-gray-500 '>
                            <h1 className='text-3xl font-semibold pb-5 text'>HackMela'25</h1>
                            <p> HackMela is not just another hackathon; it's a month-long
                                festival of innovation, culminating in a spectacular 3-day
                                grand event. We are bringing together the brightest, most
                                ambitious tech talent from across the region for an
                                unparalleled journey of coding, creativity, and problem
                                solving.
                                Our unique month-long format provides extended visibility
                                and deeper engagement opportunities that traditional
                                hackathons cannot match.
                                The Grand Finale: At the Heart of Innovation
                                The pinnacle of HackMela is the 3-day Hackathon Finals,
                                where the top teams will battle it out at the Google Office. This
                                premier venue adds immense value and prestige, drawing
                                significant attention and ensuring a high-quality experience
                                for all involved.
                                Join us in empowering the next wave of technological
                                breakthroughs. Partner with HackMela and invest in the
                                future of innovation.</p>
                        </div>
                    </FadeUp>
                    <div className="flex items-center flex-col md:flex-row md:justify-around gap-5">
                        <FadeLeft>
                            <div className='text-center p-5 pb-20 md:w-2/3 justify-self-center rounded-2xl shadow-lg shadow-fuchsia-500'>
                                <h2 className='text-3xl font-semibold pb-5 textp'>Genesis</h2>
                                <p> We are a student-led Web3 Club committed to
                                    exploring and advancing the future of decentralized
                                    technologies. Our focus lies in blockchain, AI, ML, and
                                    emerging Web3 innovations. With a global outlook
                                    and a rapidly growing community of developers,
                                    entrepreneurs, and tech enthusiasts, we aim to
                                    bridge the gap between academia and industry
                                    through hands-on projects, hackathons, workshops,
                                    and collaborations.
                                    Driven by curiosity and a passion for innovation, we
                                    provide a platform for learning, building, and
                                    connecting — shaping the next generation of tech
                                    leaders.</p>
                            </div>
                        </FadeLeft>
                        <FadeRight>
                            <div className='text-center p-5 pb-20 md:w-2/3 justify-self-center rounded-2xl shadow-lg shadow-red-500'>
                                <h2 className='text-3xl font-semibold pb-5 textr'>CodeX</h2>
                                <p> We are a student-led Web3 Club committed to
                                    exploring and advancing the future of decentralized
                                    technologies. Our focus lies in blockchain, AI, ML, and
                                    emerging Web3 innovations. With a global outlook
                                    and a rapidly growing community of developers,
                                    entrepreneurs, and tech enthusiasts, we aim to
                                    bridge the gap between academia and industry
                                    through hands-on projects, hackathons, workshops,
                                    and collaborations.
                                    Driven by curiosity and a passion for innovation, we
                                    provide a platform for learning, building, and
                                    connecting — shaping the next generation of tech
                                    leaders.</p>
                            </div>
                        </FadeRight>
                    </div>
                </div>
                <h1 className='text-center text-5xl font-bold p-5 mt-10'>Themes</h1>
                <div className="centre flex-col md:flex-row gap-5 md:justify-around text-center px-[5vw]">
                    <FadeUp>
                        <div className="card capsule w-[80vw] md:w-[27vw] md:flex-1/4 bg-[url('/web3.jpeg')] bg-cover bg-center h-[35vh]">
                        </div></FadeUp>
                    <FadeUp delay={0.2}>
                        <div className="card centre capsule w-[80vw] md:w-[27vw] md:flex-1/4 bg-[url('/fusion.png')] bg-cover bg-center     h-[35vh] flex items-center justify-center">
                            <h2 className='p-5 text-xl font-semibold text-white text-center'>
                                AI x Web3 <br /> Fusion
                            </h2>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.4}>
                        <div className="card centre capsule w-[80vw] md:w-[27vw] md:flex-1/4 bg-[url('/ai.png')] bg-cover bg-center h-[35vh] flex justify-center items-center">
                            <h2 className='p-2 text-2xl font-semibold text-center'>AI</h2>
                        </div>
                    </FadeUp>
                </div>
            </div>
            {/* <div className='h-[10vh] bub w-[100vw] px-[5vw]'> </div> */}

        </>
    )
}

export default about
