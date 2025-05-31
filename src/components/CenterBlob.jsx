import React from 'react'
import "./home.css"

export function CenterBlob()  {
  return (
    <>
    <div className="relative w-[100vw] h-[100vh] z-10"></div>
    <div className="rot1">
      <div className="urv1"></div>
      <div className="urv2"></div>
    </div>
    <div className="rot2">
      <div className="urv3"></div>
      <div className="urv4"></div>
    </div>

    {/* <div className="rot1">
      <img src="./genesis.jpg" alt="" className='h-100' />
    </div> */}
    </>
  )
}

export default CenterBlob
