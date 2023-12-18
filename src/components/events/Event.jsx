import React from "react";
const Event = ({
  month = "",
  day = "",
  time = "",
  title = "",
  location = "",
  description = "",
  color = "",
}) => {
  return (
    <div className="flex rounded-lg overflow-hidden lg:max-w-2xl md:max-w-lg sm:max-w-md ml-10 mr-10">
      <div
        className={`${color} p-4 text-hlg-white text-center w-1/4 items-centerx flex flex-col justify-center`}
      >
        <div className="lg:text-4xl text-center font-bold md:text-2xl sm:text-xl sm:pt-2 flex justify-center">
          {month}
        </div>
        <div className="lg:text-4xl font-semibold md:text-2xl sm:text-2xl flex justify-center">
          {day}
        </div>
        <div className="lg:text-xl font-normal md:text-lg sm:text-md flex justify-center">
          {time}
        </div>
      </div>

      <div className="flex-1 pl-4 bg-hlg-gray">
        <p className="text-xl text-hlg-black font-bold mb-1 mt-1">{title}</p>
        <div className="flex items-center text-hlg-black">
          <p className="flex m-0 p-0 font-normal">{location}</p>
        </div>
        <p className="w-full focus:outline-none resize-none font-normal mb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Event;
