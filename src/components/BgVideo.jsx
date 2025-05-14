import React from 'react'
import video from "../../src/assets/video/store.mp4";

function BgVideo() {
  return (
   <div className="hero h-100 relative overflow-hidden mb-2.5">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover top-0 left-0 z-0"
      >
        <source
          src={video}
          type="video/mp4"
        />
       
      </video>

      <div className="hero-overlay bg-opacity-50 absolute w-full h-full z-10"></div>

      <div className="hero-content text-neutral-content text-center relative z-20">
        <div className="uppercase">
          <h1 className="mb-2 text-xl md:text-3xl lg:text-4xl font-semibold">step inside our</h1>
          <p className=" font-normal text-xl md:text-3xl lg:text-4xl">virtual showroom</p>
        </div>
      </div>
    </div>
  )
}

export default BgVideo