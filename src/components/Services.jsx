import React from "react";
import img1 from "../assets/services/Designer.png";
import img2 from "../assets/services/Browzwear.png";
import img3 from "../assets/services/supply.png";
import img4 from "../assets/services/rainbow.png";
function Services() {
  return (
    <div className="section service-section">
      <div className="text-center uppercase font-semibold text-2xl md:text-3xl lg:text-5xl text-[#1D306D] my-8 lg:leading-16">
        <h2>
          services built around <br />
          our customers
        </h2>
      </div>

      <div className="px-6 md:px-3 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-2 ">
          {/* Card 1 */}
          <div className="md:px-3.5">
            <div className="group relative rounded-3xl lg:rounded-[50px] overflow-hidden shadow-[inset_rgb(100_100_111_/_20%)_4px_0px_4px_2px] drop-shadow-xl/50 transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.1]">
              <img
                src={img1}
                alt="design & development"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1d306d52] transition-opacity duration-500 group-hover:opacity-0"></div>

              <div className="absolute inset-0 flex items-center justify-center text-center">
                <h3 className="text-white text-lg lg:text-2xl font-semibold px-4 uppercase">
                  design & development
                </h3>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:px-3.5">
            <div className="group relative rounded-3xl lg:rounded-[50px] overflow-hidden shadow-[inset_rgb(100_100_111_/_20%)_4px_0px_4px_2px] drop-shadow-xl/50 transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.1]">
              <img src={img2} alt="technology" className="w-full h-full object-cover" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1d306d52] transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="absolute inset-0  flex items-center justify-center text-center">
                <h3 className="text-white text-lg lg:text-2xl font-semibold px-4 uppercase">
                  technology
                </h3>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:px-3.5">
            <div className="group relative rounded-3xl lg:rounded-[50px] overflow-hidden shadow-[inset_rgb(100_100_111_/_20%)_4px_0px_4px_2px] drop-shadow-xl/50 transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.1]">
              <img src={img3} alt="supply chain management" className="w-full h-full object-cover" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1d306d52] transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="absolute inset-0  flex items-center justify-center text-center">
                <h3 className="text-white text-lg lg:text-2xl font-semibold px-4 uppercase">
                  supply chain management
                </h3>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="md:px-3.5">
            <div className="group relative rounded-3xl lg:rounded-[50px] overflow-hidden shadow-[inset_rgb(100_100_111_/_20%)_4px_0px_4px_2px] drop-shadow-xl/50 transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.1]">
              <img src={img4} alt="beyond manufacturing" className="w-full h-full object-cover" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1d306d52] transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="absolute inset-0  flex items-center justify-center text-center">
                <h3 className="text-white text-lg lg:text-2xl font-semibold px-4 uppercase">
                  beyond manufacturing
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
