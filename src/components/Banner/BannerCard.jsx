import React from "react";

function BannerCard() {
  return (
    <div className="relative top-6 mb-20 lg:mb-0 lg:-top-14">
        <div className="max-w-5xl mx-auto">
      <div className="bg-[#f4f4f4] shadow-[2px_2px_6px_1px_rgba(100,100,111,0.2)] p-8">
        <div className="flex flex-col justify-center items-center text-center space-y-5">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-500">
          Our Relentless Pursuit of Better
        </h3>
        <p className="lg:text-xl text-[#707070] font-normal">
          Since 2005 the Epic Group has been dedicated to ever higher standards
          in value-
          <span className="md:block">
            added, world-class manufacturing of apparel, delivering quality,
            value and{" "}
          </span>
          innovation with unfailing reliability for our customers
          internationally.
        </p>
        <p className="lg:text-xl text-[#707070] font-normal">
          At the heart of this is Epic’s Relentless Pursuit of Better in every
          aspect of our
          <span className="md:block">
            operations. Put simply, we strive, in every way and every day, to
            constantly
          </span>
          improve on the performance of everything that we do.
        </p>
        <button className="bg-[#1d306d] text-white px-5 py-2 capitalize rounded-3xl font-bold text-xl transition ease-in-out duration-300 transform cursor-pointer hover:-translate-y-1.5 open-sans ">
          see the video
        </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BannerCard;
