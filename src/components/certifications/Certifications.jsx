import React from 'react'
import Marquee from 'react-fast-marquee'
import img from '../../assets/certifications/1.png'
import img1 from '../../assets/certifications/2.png'
import img2 from '../../assets/certifications/3.png'

function Certifications() {
  return (
    <div className='mt-5 mb-14 pt-7'>
        <div className='text-center uppercase font-semibold text-2xl md:text-3xl lg:text-4xl text-[#1D306D] mb-8'>
        <h2>Accreditations & CertificatIONS</h2>
    </div>
    <Marquee className='max-w-[80%] mx-auto'>
  <img src={img} alt="" />
  <img src={img1} alt="" />
  <img src={img2} alt="" />
  <img src={img} alt="" />
  <img src={img1} alt="" />
  <img src={img2} alt="" />
</Marquee>
    </div>
  )
}

export default Certifications