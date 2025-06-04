import React from 'react'

const events = () => {
    return (
        <>
            <div className='z-10 text-white bg pt-10'>
                <h1 className='text-center text-5xl font-bold p-5 '>Timeline</h1>
                <div className='w-[100vw] h-300 relative mt-5 centre'>
                    <div className='w-1 relative h-full bg-gray-500 rounded-full z-20'>
                        <div className="circle -top-1"></div>
                        <div className=' box2 p-3 absolute left-10 -top-1 w-[40vw]'>
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
                        <div className="circle top-1/5"></div>
                        <div className="circle top-2/5"></div>
                        <div className="circle top-3/5"></div>
                        <div className="circle top-4/5"></div>
                        <div className="circle bottom-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default events
