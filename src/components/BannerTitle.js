import React from "react";

const BannerTitle = ({ title, description }) => {
  return (
    <div className="w-full absolute aspect-video z-10">
      <div className="absolute w-1/3 top-1/3 ms-20">
        <h3 className="text-white font-bold text-2xl">{title}</h3>
        <p className="text-white text-lg">{description}</p>
        <div className="flex mt-4">
            <button className="text-black rounded-sm bg-gray-100 hover:bg-gray-200 px-8 py-3">Play</button>
            <button className="text-white rounded-sm border border-gray-600 border-opacity-50 bg-gray-600 hover:bg-gray-700 hover:bg-opacity-50 bg-opacity-50 px-8 py-3 ms-2">More info</button>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
