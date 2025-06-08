import React from 'react'
import FadeUp from './OnscrollAni/fadeup'

const team = () => {
    return (
        <>
            <div className='z-10 text-white bg pt-10 px-[5vw]'>
                <h1 className='text-center text-5xl font-bold p-5 '>Our Judges</h1>
                <div className="centre flex-wrap w-full gap-5">
                    <FadeUp className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="ai.png" alt="" className='rounded-full' />
                        <h2>ChatGPT</h2>
                        <h3>Buddy</h3>
                        <div className="centre">
                            links
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="ai.png" alt="" className='rounded-full' />
                        <h2>ChatGPT</h2>
                        <h3>Buddy</h3>
                        <div className="centre">
                            links
                        </div>
                    </FadeUp>


                    <FadeUp delay={0.4} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="ai.png" alt="" className='rounded-full' />
                        <h2>ChatGPT</h2>
                        <h3>Buddy</h3>
                        <div className="centre">
                            links
                        </div>

                    </FadeUp>
                    <FadeUp delay={0.6} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="ai.png" alt="" className='rounded-full' />
                        <h2>ChatGPT</h2>
                        <h3>Buddy</h3>
                        <div className="centre">
                            links
                        </div>
                    </FadeUp>
                </div>

                <h1 className='text-center text-5xl font-bold p-5 '>Our Team</h1>
                <div className="centre flex-wrap w-full gap-5">
                    <FadeUp className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="ai.png" alt="" className='rounded-full' />
                        <h2>ChatGPT</h2>
                        <h3>Buddy</h3>
                        <div className="centre">
                            links
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.1} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="ai.png" alt="" className='rounded-full' />
                        <h2>ChatGPT</h2>
                        <h3>Buddy</h3>
                        <div className="centre">
                            links
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.3} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="ai.png" alt="" className='rounded-full' />
                        <h2>ChatGPT</h2>
                        <h3>Buddy</h3>
                        <div className="centre">
                            links
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.5} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="ai.png" alt="" className='rounded-full' />
                        <h2>ChatGPT</h2>
                        <h3>Buddy</h3>
                        <div className="centre">
                            links
                        </div>
                    </FadeUp>
                </div>
            </div>
        </>
    )
}

export default team
