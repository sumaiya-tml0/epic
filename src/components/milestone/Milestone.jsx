import React from 'react'
import img1 from "../../assets/employee.png";
import img2 from "../../assets/production.png";
import img3 from "../../assets/factory.png";
import img4 from "../../assets/clothes.png";
import CountUp from 'react-countup';
function Milestone() {
  return (
    <div className='border border-[#1D306D] rounded-3xl md:rounded-[80px]  p-2.5'>
        <div className='md:px-8'>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div className='flex items-center gap-3'>
            <img src={img1} alt="" className="w-28 transition ease-in-out duration-800 transform hover:scale-[1.08]"
        />
            <div className='text-[#1d3381]'>
                <CountUp end={30000} suffix='+' className='text-2xl font-bold'/>
                <p className='uppercase text-sm md:text-lg'>employees</p>
            </div>
        </div>
                <div className='flex items-center gap-3'>
            <img src={img2} alt="" className='w-28 transition ease-in-out duration-800 transform hover:scale-[1.08]' />
            <div className='text-[#1d3381]'>
                <CountUp end={200}  className='text-2xl font-bold'/>
                <p className='uppercase text-sm md:text-lg'>production lines</p>
            </div>
        </div>
                <div className='flex items-center gap-3'>
            <img src={img3} alt="" className='w-28 transition ease-in-out duration-800 transform hover:scale-[1.08]' />
            <div className='text-[#1d3381]'>
                <CountUp end={9}  className='text-2xl font-bold'/>
                <p className='uppercase text-sm md:text-lg'>manufacturing facilities</p>
            </div>
        </div>
                <div className='flex items-center gap-3'>
            <img src={img4} alt="" className='w-28 transition ease-in-out duration-800 transform hover:scale-[1.08]' />
            <div className='text-[#1d3381]'>
                <CountUp end={120} suffix='Million' className='text-2xl font-bold'/>
                <p className='uppercase text-sm md:text-lg'>germents per annum</p>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Milestone