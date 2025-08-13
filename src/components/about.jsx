import React from 'react'
import FadeUp from './OnscrollAni/fadeup'

const About = () => {
    return (
        <>
            <div className='h-[10vh] bub w-[100vw] px-[5vw] pb-5'> </div>
            <div className='z-10 text-white bg' id='about'>
                {/* Clean Title */}
                <div className='text-center pb-16'>
                    <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                        About Us
                    </h1>
                </div>

                {/* Clean Content Cards */}
                <div className='max-w-6xl mx-auto px-6 lg:px-8 space-y-16'>
                    {/* 0xGenIgnite Card */}
                    <FadeUp>
                        <div className='relative p-8 md:p-12 rounded-3xl bg-black/20 backdrop-blur-md border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group'>
                            <div className='flex gap-4'>
                                <div className='w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                    <img src="logo.PNG" alt="" />
                                </div>
                                {/* <div className='flex-1'> */}
                                <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                                    0xGenIgnite
                                </h2>
                            </div>
                            <p className='text-lg text-gray-300 leading-relaxed'>
                                Welcome to 0xGenIgnite — the ultimate battlefield where brilliance meets code and the future is built. This two-day flagship event isn’t just a hackathon — it’s a high-voltage launchpad for Gen-Z innovators ready to disrupt. From a celebrity-led kickoff to an intense 24-hour no-sleep, all-brain hackathon, it's where bold ideas turn real. Whether it’s Web3, or something the world hasn’t seen yet — if you’ve got the spark, 0xGenIgnite will ignite it.
                            </p>
                            {/* </div> */}

                        </div>
                    </FadeUp>

                    {/* CodeX Card */}
                    {/* <FadeUp delay={0.2}>
                        <div className='relative p-8 md:p-12 rounded-3xl bg-black/20 backdrop-blur-md border border-white/10 hover:border-red-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 group'>
                            <div className='flex gap-4'>
                                <div className='w-12 h-12  rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                    <img src="./images/codex.jpg" alt="" />
                                </div>

                                <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent'>
                                    CodeX
                                </h2>
                            </div>
                            <p className='text-lg text-gray-300 leading-relaxed'>
                                CodeX empowers coders, creators, and future founders through hands-on projects, expert-led sessions, challenges, and personalized mentorship. It fuels ambition, fosters innovation, and enhances learning across all domains of computer science and engineering, creating a dynamic environment where students grow, build, and lead with real-world tech exposure.
                            </p>

                        </div>
                    </FadeUp> */}
                </div>

                <div className='relative w-[100vw] overflow-hidden'>
                    {/* <img src="./images/planet.png" alt="" className='opacity-30 absolute top-0 right-0 z-0' /> */}
                    {/* <img src="./images/space.png" alt="" className='opacity-50 w-[100vw] h-[60vh] absolute bottom-0 z-0' /> */}

                    {/* Clean Themes Section */}
                    <div className='text-center py-16 z-20'>
                        <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12'>
                            Themes
                        </h1>

                        <div className='w-[80vw] lg:w-[60vw] mx-auto px-6 lg:px-8'>
                            {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-8'> */}
                                {/* Web3 Card */}
                                <FadeUp>
                                    <div className='relative h-64 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 group overflow-hidden '>
                                        <div className='absolute inset-0 bg-[url("/images/web33.jpeg")] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                                        <div className='absolute bottom-6 left-6 right-6'>
                                            <h3 className='text-2xl font-bold text-white'>Web3</h3>
                                        </div>
                                    </div>
                                </FadeUp>

                                {/* AI x Web3 Fusion Card
                                <FadeUp delay={0.2}>
                                    <div className='relative h-64 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 hover:border-pink-400/30 transition-all duration-500 hover:scale-105 group overflow-hidden'>
                                        <div className='absolute inset-0 bg-[url("/images/fusion.png")] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                                        <div className='absolute bottom-6 left-6 right-6'>
                                            <h3 className='text-2xl font-bold text-white'>AI x Web3 Fusion</h3>
                                        </div>
                                    </div>
                                </FadeUp>

                                {/* AI Card */}
                                {/* <FadeUp delay={0.4}>
                                    <div className='relative h-64 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 group overflow-hidden'>
                                        <div className='absolute inset-0 bg-[url("/images/ai.png")] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                                        <div className='absolute bottom-6 left-6 right-6'>
                                            <h3 className='text-2xl font-bold text-white'>AI</h3>
                                        </div>
                                    </div> */} 
                                {/* </FadeUp> */}
                            {/* </div> */}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About
