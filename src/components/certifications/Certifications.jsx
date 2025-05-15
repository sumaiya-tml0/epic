import React from 'react'
import img from '../../assets/certifications/1.png'
import img1 from '../../assets/certifications/2.png'
import img2 from '../../assets/certifications/3.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

function Certifications() {
  return (
    <div className='mt-5 mb-18 pt-7'>
        <div className='text-center uppercase font-semibold text-2xl md:text-3xl lg:text-4xl text-[#1D306D] mb-8'>
        <h2>Accreditations & CertificatIONS</h2>
    </div>

<div className='max-w-[80%] mx-auto relative'>
  <Splide
          options={{
            type: 'loop',
            perPage: 7,
            perMove: 1,
            arrows: true,
            pagination: false,
         
            autoScroll: {
              speed: 1,
            },
            breakpoints: {
              1024: {
                perPage: 4,
              },
              768: {
                perPage: 3,
              },
              640: {
                perPage: 2,
              },
            },
          }}
          extensions={{ AutoScroll }}
          aria-label="Certifications Logos"
        >
          {[img, img1, img2, img, img1, img2].map((logo, index) => (
            <SplideSlide key={index}>
              <img src={logo} alt={`Certification ${index + 1}`} className="h-[113px] mx-auto" />
            </SplideSlide>
          ))}
        </Splide>
</div>
    </div>
  )
}

export default Certifications