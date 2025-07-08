import React, { useState } from 'react'
import FadeLeft from './OnscrollAni/fadeleft'
import FadeRight from './OnscrollAni/faderight'

const events = () => {

    const [activeDay, setActiveDay] = useState('day1');

    return (
        <>
            <div id='events' className='z-10 text-white bg pt-10 pb-27'>
                <h1 className='text-center text-5xl font-bold p-5 '>Timeline</h1>

                {/* Toggle Buttons */}
                <div className='flex justify-center gap-4 my-4'>
                    <button
                        onClick={() => setActiveDay('day1')}
                        className={`px-10 py-3 bg-gradient-to-l from-pink-500/40 to-purple-500/10  backdrop-blur-md text-white font-medium text-lg rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 ease-out cursor-pointer pointer-events-auto shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1
                            ${activeDay === 'day1'
                                ? ' text-white'
                                : 'bg-gray-700 text-gray-300'
                            }`}
                    >
                        Day 1
                    </button>
                    <button
                        onClick={() => setActiveDay('day2')}
                        className={`px-10 py-3 text-lg bg-gradient-to-r from-purple-500/10 to-pink-500/40 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 ease-out cursor-pointer pointer-events-auto shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1
                            ${activeDay === 'day2'
                                ? ' text-white'
                                : 'bg-gray-700 text-gray-300'
                            }`}
                    >
                        Day 2
                    </button>
                </div>

                <div className='w-[100vw] h-500 sm:h-400 mt-5 pl-5 flex lg:justify-center lg:pl-0'>
                    <img src="./images/eventbg.jpg" alt="" className='absolute opacity-40' />

                    {activeDay === 'day1' && (
                        <div className='flex flex-col w-1 relative h-full bg-gray-500 rounded-full z-20'>
                            <div className="circle -top-1">
                                <FadeRight>
                                    <div className='shadow-lg shadow-fuchsia-500 box2'>
                                        <div>
                                            <div className="text-xl font-semibold">Launchpad Check-In</div>
                                            <div className="text-gray-500 font-medium">09:00 AM</div>
                                            <p className='mt-2 list-none'>Arrival, registration, swags & breakfast. Get your crew ready.
                                            </p>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                            <div className="circle top-1/10">
                                <FadeLeft>
                                    <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-103'>

                                        <div>
                                            <div className="text-xl font-semibold">Mission Briefing</div>
                                            <div className="text-gray-500 font-medium">10:00 AM</div>
                                            <p className='mt-2 list-none'>Opening ceremony, rules, theme briefing & partner showcase.
                                            </p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                            <div className="circle top-2/10">
                                <FadeRight>
                                    <div className='box2 shadow-lg shadow-fuchsia-500'>

                                        <div>
                                            <div className="text-xl font-semibold">Ignition Start</div>
                                            <div className="text-gray-500 font-medium">11:00 AM</div>
                                            <p className='mt-2 list-none'>Hacking begins. Teams lock into their mission objectives.
                                            </p>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                            <div className="circle top-3/10">
                                <FadeLeft>
                                    <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-103'>

                                        <div>
                                            <div className="text-xl font-semibold"> Galactic Grub</div>
                                            <div className="text-gray-500 font-medium">01:00 PM</div>
                                            <p className='mt-2 list-none'>Lunch break – recharge your fuel cells.
                                            </p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                            <div className="circle top-4/10">
                                <FadeRight>
                                    <div className='box2 shadow-lg shadow-fuchsia-500'>

                                        <div>
                                            <div className="text-xl font-semibold">Spacewalk: Mentor Orbit #1</div>
                                            <div className="text-gray-500 font-medium">02:00 PM</div>
                                            <p className='mt-2 list-none'>Mentors float in for the first feedback & Q/A round.
                                            </p>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                            <div className="circle top-5/10">
                                <FadeLeft>
                                    <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-103'>

                                        <div>
                                            <div className="text-xl font-semibold">Blackhole Break </div>
                                            <div className="text-gray-500 font-medium">04:00 PM</div>
                                            <p className='mt-2 list-none'>Quick energizer, coffee + networking zone.
                                            </p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                            <div className="circle top-6/10">
                                <FadeRight>
                                    <div className='shadow-lg shadow-fuchsia-500 box2'>
                                        <div>
                                            <div className="text-xl font-semibold">Code Meteor Shower</div>
                                            <div className="text-gray-500 font-medium">05:00 PM</div>
                                            <p className='mt-2 list-none'>Side challenge: Build a tiny feature, win goodies.
                                            </p>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                            <div className="circle top-7/10">
                                <FadeLeft>
                                    <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-103'>

                                        <div>
                                            <div className="text-xl font-semibold">AI & Web3 Nebula Talk</div>
                                            <div className="text-gray-500 font-medium">06:30 PM</div>
                                            <p className='mt-2 list-none'>Expert speaker session on frontier tech.
                                            </p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                            <div className="circle top-8/10">
                                <FadeRight>
                                    <div className='box2 shadow-lg shadow-fuchsia-500'>

                                        <div>
                                            <div className="text-xl font-semibold">Meteor Bites</div>
                                            <div className="text-gray-500 font-medium">08:00 PM</div>
                                            <p className='mt-2 list-none'>Dinner is served! Refuel for the long orbit.
                                            </p>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                            <div className="circle top-9/10">
                                <FadeLeft>
                                    <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-103'>

                                        <div>
                                            <div className="text-xl font-semibold">Mission Pulse Check</div>
                                            <div className="text-gray-500 font-medium">09:00 PM</div>
                                            <p className='mt-2 list-none'>	Midway team check-ins with mentors/judges.
                                            </p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                        </div>
                    )}

                    {activeDay === 'day2' && (
                        <div className='flex flex-col w-1 relative h-full bg-gray-500 rounded-full z-20'>
                            <div className="circle -top-1">
                                <FadeRight>
                                    <div className='shadow-lg shadow-fuchsia-500 box2'>
                                        <div>
                                            <div className="text-xl font-semibold">Starlight Chill Hour</div>
                                            <div className="text-gray-500 font-medium">12:00 AM</div>
                                            <p className='mt-2 list-none'>Lo-fi zone + board games + surprise fun break.
                                            </p>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                            <div className="circle top-1/8">
                                <FadeLeft>
                                    <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-103'>

                                        <div>
                                            <div className="text-xl font-semibold">Fuel-Up Station</div>
                                            <div className="text-gray-500 font-medium">02:00 AM</div>
                                            <p className='mt-2 list-none'>Late night snacks + energy shots.
                                            </p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                            <div className="circle top-2/8">
                                <FadeRight>
                                    <div className='box2 shadow-lg shadow-fuchsia-500'>

                                        <div>
                                            <div className="text-xl font-semibold">Dark Matter Debug Hour</div>
                                            <div className="text-gray-500 font-medium">03:00 AM</div>
                                            <p className='mt-2 list-none'>Technical mentors available for all-night debugging help.
                                            </p>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                            <div className="circle top-3/8">
                                <FadeLeft>
                                    <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-103'>

                                        <div>
                                            <div className="text-xl font-semibold"> Solar Stretch</div>
                                            <div className="text-gray-500 font-medium">05:00 AM</div>
                                            <p className='mt-2 list-none'>Light yoga/stretch break to reboot minds.
                                            </p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                            <div className="circle top-4/8">
                                <FadeRight>
                                    <div className='box2 shadow-lg shadow-fuchsia-500'>

                                        <div>
                                            <div className="text-xl font-semibold">Final Orbit</div>
                                            <div className="text-gray-500 font-medium">06:30 AM</div>
                                            <p className='mt-2 list-none'>Last push, polish your project, prep your decks.
                                            </p>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                            <div className="circle top-5/8">
                                <FadeLeft>
                                    <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-103'>

                                        <div>
                                            <div className="text-xl font-semibold">	Docking Complete: Submissions  </div>
                                            <div className="text-gray-500 font-medium">08:30 AM</div>
                                            <p className='mt-2 list-none'>Final submissions close. Code freeze.
                                            </p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                            <div className="circle top-6/8">
                                <FadeRight>
                                    <div className='shadow-lg shadow-fuchsia-500 box2'>
                                        <div>
                                            <div className="text-xl font-semibold">	Mission Demo Day</div>
                                            <div className="text-gray-500 font-medium">09:00 AM</div>
                                            <p className='mt-2 list-none'>Top teams present to the jury panel. Blast your ideas!
                                            </p>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                            <div className="circle top-7/8">
                                <FadeLeft>
                                    <div className='shadow-lg shadow-red-500 box3 left-7 lg:-left-103'>

                                        <div>
                                            <div className="text-xl font-semibold">Award Ceremony & Touchdown</div>
                                            <div className="text-gray-500 font-medium">11:00 AM</div>
                                            <p className='mt-2 list-none'>Winner announcements, closing notes, and a cosmic group photo.
                                            </p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                            <div className="circle top-8/8">
                                <FadeRight>
                                    <div className='box2 shadow-lg shadow-fuchsia-500'>

                                        <div>
                                            <div className="text-xl font-semibold">Re-entry & Departure</div>
                                            <div className="text-gray-500 font-medium">12:00 PM</div>
                                            <p className='mt-2 list-none'>Goodbye hugs, feedback & community sign-ups.
                                            </p>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                            
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default events
