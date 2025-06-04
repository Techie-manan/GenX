import React from 'react'

const events = () => {
    return (
        <>
            <div className='z-10 text-white bg pt-10 pb-27'>
                <h1 className='text-center text-5xl font-bold p-5 '>Timeline</h1>
                <div className='w-[100vw] h-250 relative mt-5 centre'>
                    <div className='w-1 relative h-full bg-gray-500 rounded-full z-20'>
                        <div className="circle -top-1">
                            <div className='shadow-lg shadow-fuchsia-500 box2'>
                                <div className="flex gap-5">
                                    <div>
                                        <div className="p-1.5 rounded-full capsule centre flex-col font-medium h-14 aspect-square">
                                            <h3 className='text-lg'>12</h3>
                                            <h4 className='text-sm'>Sept</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-semibold">Inaugral Webinar: The Future of Web3</div>
                                        <div className="text-gray-500 font-medium">Online</div>
                                        <ul className='mt-2 list-disc'>
                                            <li>Speaker session by Graduates from Harvard University</li>
                                            <li>Open to students worldwide</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="circle top-1/5">
                            <div className='shadow-lg shadow-red-500 box3'>
                                <div className="flex gap-5">
                                    <div>
                                        <div className="p-1.5 rounded-full capsule centre flex-col font-medium h-14 aspect-square">
                                            <h3 className='text-lg'>19</h3>
                                            <h4 className='text-sm'>Sept</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-semibold">Capture the Flag(CTF) Challenge</div>
                                        <div className="text-gray-500 font-medium">@SRMIST Modinagar</div>
                                        <ul className='mt-2 list-disc'>
                                            <li>Cybersecurity-based real-time problem-solving event</li>
                                             <li>Exclusively for SRM students</li>
                                            <li> Winning team gains direct entry to the main hackathon</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="circle top-2/5">
                            <div className='box2 shadow-lg shadow-fuchsia-500'>
                                <div className="flex gap-5">
                                    <div>
                                        <div className="p-1.5 rounded-full capsule centre flex-col font-medium h-14 aspect-square">
                                            <h3 className='text-lg'>29</h3>
                                            <h4 className='text-sm'>Sept</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-semibold">CodeX Mini Hackathon</div>
                                        <div className="text-gray-500 font-medium">@SRMIST Modinagar</div>
                                        <ul className='mt-2 list-disc'>
                                            <li> 8-hour coding challenge</li>
                                            <li>Exclusively for SRM students</li>
                                            <li> Winning team gains direct entry to the main hackathon</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="circle top-3/5">
                            <div className='shadow-lg shadow-red-500 box3'>
                                <div className="flex gap-5">
                                    <div>
                                        <div className="p-1.5 rounded-full capsule centre flex-col font-medium h-14 aspect-square">
                                            <h3 className='text-lg'>9</h3>
                                            <h4 className='text-sm'>Oct</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-semibold"> Inaugural Session with Celebrity Guest</div>
                                        <div className="text-gray-500 font-medium">@SRMIST Modinagar</div>
                                        <ul className='mt-2 list-disc'>
                                            <li>Guest: To be revealed soon!!</li>
                                            <li>Special podcast-style session</li>
                                            <li>Marks the official launch of the main Hackathon round</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="circle top-4/5">
                            <div className='box2 shadow-lg shadow-fuchsia-500'>
                                <div className="flex gap-5">
                                    <div>
                                        <div className="p-1.5 rounded-full capsule centre flex-col font-medium h-14 aspect-square">
                                            <h3 className='text-lg'>10-11</h3>
                                            <h4 className='text-sm'>Oct</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-semibold">0xGenIgnite</div>
                                        <div className="text-gray-500 font-medium">@SRMIST Modinagar</div>
                                        <ul className='mt-2 list-disc'>
                                            <li>Participants:50 shortlisted teams</li>
                                            <li>24-hour offline hackathon</li>
                                            <li>Open to students worldwide</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="circle -bottom-1">
                            <div className='shadow-lg shadow-red-500 box3'>
                                <div className="flex gap-5">
                                    <div>
                                        <div className="p-1.5 rounded-full capsule centre flex-col font-medium h-14 aspect-square">
                                            <h3 className='text-lg'>12</h3>
                                            <h4 className='text-sm'>Oct</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-semibold">The Final Showdown</div>
                                        <div className="text-gray-500 font-medium">@ Google India, Gurugram</div>
                                        <ul className='mt-2 list-disc'>
                                            <li>Top 10 teams from 0xGenIgnite</li>
                                            <li>Open to students worldwide</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default events
