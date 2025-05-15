import React from 'react'
import CountUp from 'react-countup'
import img1 from "../assets/tshirt.png";
import img2 from "../assets/water.png";
import img3 from "../assets/light.png";

function Better() {
  return (
     <div className='border border-[#1D306D] rounded-3xl md:rounded-[1000px] my-7 px-2.5 py-6'>
        <div className='md:px-16'>
            <div className='text-center uppercase font-semibold text-lg lg:text-4xl text-[#1D306D] mb-8'>
        <h2>our relentless pursuit of better: 2019-2020</h2>
    </div>
            <div className="grid md:grid-cols-3 gap-6">
                <div className='flex items-center gap-8'>
            <img src={img1} alt="" className="w-28 transition ease-in-out duration-800 transform hover:scale-[1.08]"
        />
            <div className='text-[#1d3381]'>
                <CountUp end={9957852}  className='text-xl lg:text-2xl font-bold'/>
                <p className='uppercase text-sm lg:text-lg'>products using recycled fabrics</p>
            </div>
        </div>
                <div className='flex items-center gap-8'>
            <img src={img2} alt="" className='w-28 transition ease-in-out duration-800 transform hover:scale-[1.08]' />
            <div className='text-[#1d3381]'>
                <CountUp end={83432}  className='text-xl lg:text-2xl font-bold'/>
                <p className='uppercase text-sm lg:text-lg'>water savings</p>
            </div>
        </div>
                <div className='flex items-center gap-8'>
            <img src={img3} alt="" className='w-28 transition ease-in-out duration-800 transform hover:scale-[1.08]' />
            <div className='text-[#1d3381]'>
                <CountUp end={346135 } suffix='kWh'  className='text-xl lg:text-2xl font-bold'/>
                <p className='uppercase text-sm lg:text-lg'>renewable energy produced</p>
            </div>
        </div>
               
            </div>
        </div>
    </div>
  )
}

export default Better