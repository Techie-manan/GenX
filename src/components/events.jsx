import React from 'react'
import FadeLeft from './OnscrollAni/fadeleft'
import FadeRight from './OnscrollAni/faderight'

const events = () => {
    return (
        <>
            <div id='events' className='z-10 text-white bg pt-10 pb-27'>
                <h1 className='text-center text-5xl font-bold p-5 '>Timeline</h1>
                <div className='w-[100vw] h-400 sm:h-300 mt-5 pl-5 flex lg:justify-center lg:pl-0'>
                    <img src="./images/eventbg.jpg" alt="" className='absolute opacity-40' />
                    <div className='flex flex-col w-1 relative h-full bg-gray-500 rounded-full z-20'>
                        <div className="circle -top-1">
                            <FadeRight>
                                <div className='shadow-lg shadow-fuchsia-500 box2'>
                                    <div>
                                        <div className="text-xl font-semibold">Inaugral Webinar: The Future of Web3</div>
                                        <div className="text-gray-500 font-medium">Online</div>
                                        <ul className='mt-2 list-none'>
                                            <li>Speaker session by Graduates from Harvard University</li>
                                            <li>Open to students worldwide</li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeRight>
                        </div>
                        <div className="circle top-1/5">
                            <FadeLeft>
                                <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-128'>

                                    <div>
                                        <div className="text-xl font-semibold">Capture the Flag(CTF) Challenge</div>
                                        <div className="text-gray-500 font-medium">@SRMIST Modinagar</div>
                                        <ul className='mt-2 list-none'>
                                            <li>Web3-based real-time problem-solving event</li>
                                            <li>Exclusively for SRM students</li>
                                            <li> Winning team gains direct entry to the main hackathon</li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeLeft>
                        </div>
                        <div className="circle top-2/5">
                            <FadeRight>
                                <div className='box2 shadow-lg shadow-fuchsia-500'>

                                    <div>
                                        <div className="text-xl font-semibold">CodeX Mini Hackathon</div>
                                        <div className="text-gray-500 font-medium">@SRMIST Modinagar</div>
                                        <ul className='mt-2 list-none'>
                                            <li> 8-hour coding challenge</li>
                                            <li>Exclusively for SRM students</li>
                                            <li> Winning team gains direct entry to the main hackathon</li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeRight>
                        </div>
                        <div className="circle top-3/5">
                            <FadeLeft>
                                <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-128'>

                                    <div>
                                        <div className="text-xl font-semibold"> Inaugural Session with Celebrity Guest</div>
                                        <div className="text-gray-500 font-medium">@SRMIST Modinagar</div>
                                        <ul className='mt-2 list-none'>
                                            <li>Guest: To be revealed soon!!</li>
                                            <li>Special podcast-style session</li>
                                            <li>Marks the official launch of the main Hackathon round</li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeLeft>
                        </div>
                        <div className="circle top-4/5">
                            <FadeRight>
                                <div className='box2 shadow-lg shadow-fuchsia-500'>

                                    <div>
                                        <div className="text-xl font-semibold">0xGenIgnite</div>
                                        <div className="text-gray-500 font-medium">@SRMIST Modinagar</div>
                                        <ul className='mt-2 list-none'>
                                            <li>Participants:50 shortlisted teams</li>
                                            <li>24-hour offline hackathon</li>
                                            <li>Open to students worldwide</li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeRight>
                        </div>
                        <div className="circle -bottom-1">
                            <FadeLeft>
                                <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-128'>

                                    <div>
                                        <div className="text-xl font-semibold">The Final Showdown</div>
                                        <div className="text-gray-500 font-medium">@ Google India, Gurugram</div>
                                        <ul className='mt-2 list-none'>
                                            <li>Top 10 teams from 0xGenIgnite</li>
                                            <li>Open to students worldwide</li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeLeft>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default events
