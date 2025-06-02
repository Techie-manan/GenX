import React from 'react'

const navbar = () => {
  return (
    <>
      <div className="centre justify-between fixed w-[90vw] mx-[5vw] rounded-b-2xl z-50 justify-self-center p-5 xl font-semibold gap-5 backdrop-blur-xl text-white bg-black/50">
        <div className="flex">
          <img src="" alt="" />
          <h1> HackMela </h1>
        </div>
        <div className="centre">
          <ul className='flex gap-7 '>
            <li className=''>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Sponsers</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default navbar
