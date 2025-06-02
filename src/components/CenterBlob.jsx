import React from 'react'
import "./home.css"

export function CenterBlob() {
  return (
    <>
      <div className="absolute left-1/3  z-1">
        {/* <div className="rot1">
      <div className="urv1"></div>
      <div className="urv2"></div>
    </div>
    <div className="rot2">
      <div className="urv3"></div>
      <div className="urv4"></div>
    </div> */}

        <div className="rot1">
          <img src="./genesis.png" alt="" height={100} className='' />
        </div>
      </div>
    </>
  )
}

export default CenterBlob
