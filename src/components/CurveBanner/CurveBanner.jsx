import React from "react";
import img1 from "../../assets/cbanner/people.jpg";
import img2 from "../../assets/cbanner/christopher.png";
import img3 from "../../assets/cbanner/jeans.png";

function CurveBanner() {
  return (
    <div className="grid md:grid-cols-3 gap-10 pb-12">
      <div
        className="hero rounded-[50px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[403px] bg-cover bg-center transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.05]"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="hero-overlay rounded-[50px] bg-[#1d306d52]"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className=" lg:text-4xl font-bold uppercase">people first</h1>
          </div>
        </div>
      </div>
      <div
        className="hero rounded-[50px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[403px] bg-cover bg-center transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.05]"
        style={{
          backgroundImage: `url(${img2})`,
        }}
      >
        <div className="hero-overlay rounded-[50px] bg-[#1d306d52]"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className=" lg:text-4xl font-bold uppercase">what's new at epic</h1>
          </div>
        </div>
      </div>
      <div
        className="hero rounded-[50px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[403px] bg-cover bg-center transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.05]"
        style={{
          backgroundImage: `url(${img3})`,
        }}
      >
       <div className="hero-overlay rounded-[50px] bg-[#1d306d52]"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className=" lg:text-4xl font-bold uppercase">world class manufacturing</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurveBanner;
