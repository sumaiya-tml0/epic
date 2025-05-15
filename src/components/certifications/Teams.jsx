import React from "react";
import img1 from "../../assets/teams/team1.jpg";
import img2 from "../../assets/teams/team2.jpg";

function Teams() {
  return (
    <div className="pt-8 pb-12">
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
        {/* Card 1 */}

        <div className="relative rounded-3xl lg:rounded-[50px] overflow-hidden shadow-[inset_rgb(100_100_111_/_20%)_4px_0px_4px_2px] drop-shadow-xl/50 transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.05]">
          <img
            src={img1}
            alt="meet our team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center text-center">
            <h3 className="text-white text-2xl lg:text-4xl font-semibold px-4 uppercase">
              meet our team
            </h3>
          </div>
        </div>

        {/* Card 2 */}

        <div className="relative rounded-3xl lg:rounded-[50px]  overflow-hidden shadow-[inset_rgb(100_100_111_/_20%)_4px_0px_4px_2px] drop-shadow-xl/50 transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.05]">
          <img
            src={img2}
            alt="brand that trust us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center text-center">
            <h3 className="text-white text-2xl lg:text-4xl font-semibold px-4 uppercase">
              brand that trust us
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
