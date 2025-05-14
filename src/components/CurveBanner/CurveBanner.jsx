import React from "react";
import img from "../../assets/curveBanner.jpg";

function CurveBanner() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div
        className="hero rounded-3xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[403px] bg-cover bg-center transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.05]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className=" lg:text-3xl font-bold uppercase">first people</h1>
          </div>
        </div>
      </div>
      <div
        className="hero rounded-3xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[403px] bg-cover bg-center transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.05]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className=" lg:text-3xl font-bold uppercase">what's new at epic</h1>
          </div>
        </div>
      </div>
      <div
        className="hero rounded-3xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[403px] bg-cover bg-center transition ease-in-out duration-800 transform cursor-pointer hover:scale-[1.05]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className=" lg:text-3xl font-bold uppercase">first people</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurveBanner;
