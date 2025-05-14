import React, { useEffect } from 'react'
import img from "../assets/hero.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
      useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${img})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="uppercase aos-init aos-animate" data-aos="fade-up" data-aos-duration="3000">
      <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold ">look into the future</h1>
      <p className="mb-5 text-2xl md:text-3xl lg:text-4xl">
       it's always better
      </p>
     <button className="bg-[#1d306d] text-white px-7 py-2 capitalize border border-white rounded-3xl md:text-xl lg:text-2xl transition transform cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_10px_rgba(255,255,255,0.9)]">
          see the video
        </button>
    </div>
  </div>
</div>
  )
}

export default Hero