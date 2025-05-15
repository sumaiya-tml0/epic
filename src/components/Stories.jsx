import React from 'react';
import img1 from "../assets/stories/bluewater.jpg"
import img2 from "../assets/stories/blogfin.jpg"
import img3 from "../assets/stories/almaznew.jpg"

function Stories() {
  return (
    <div className="section stories-section">
      <div className="text-center uppercase font-normal text-2xl md:text-3xl lg:text-5xl text-[#1D306D] my-8">
        <h2>
          Our <span className="font-bold">better</span> success stories
        </h2>
      </div>

      <div className="px-6 md:px-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 ">
        {/* Card 1 */}
        <div className='px-5'>
            <div className="relative rounded-3xl lg:rounded-[50px] overflow-hidden shadow-[inset_rgb(100_100_111_/_20%)_4px_0px_4px_2px] drop-shadow-xl/50 transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.1]">
          <img
            src={img1}
            alt="Saving Blue Water"
            className=" "
          />
          <div className="absolute inset-0  flex items-center justify-center text-center">
            <h3 className="text-white text-2xl lg:text-3xl font-semibold px-4 uppercase">Saving Blue Water</h3>
          </div>
        </div>
        </div>

        {/* Card 2 */}
         <div className="px-5">
            <div className="relative rounded-3xl lg:rounded-[50px]  overflow-hidden shadow-[inset_rgb(100_100_111_/_20%)_4px_0px_4px_2px] drop-shadow-xl/50 transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.1]">
          <img
            src={img2}
            alt="Saving Blue Water"
            className=""
          />
          <div className="absolute inset-0  flex items-center justify-center text-center">
            <h3 className="text-white text-2xl lg:text-3xl font-semibold px-4 uppercase">micro factories</h3>
          </div>
        </div>
         </div>

        {/* Card 3 */}
     <div className="px-5">
            <div className="relative rounded-3xl lg:rounded-[50px]  overflow-hidden shadow-[inset_rgb(100_100_111_/_20%)_4px_0px_4px_2px] drop-shadow-xl/50 transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.1]">
          <img
            src={img3}
            alt="Saving Blue Water"
            className=""
          />
          <div className="absolute inset-0  flex items-center justify-center text-center">
            <h3 className="text-white text-2xl lg:text-3xl font-semibold px-4 uppercase">our epic women</h3>
          </div>
        </div>
     </div>
      </div>
      </div>
    </div>
  );
}

export default Stories;
