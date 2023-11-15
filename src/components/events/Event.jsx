import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
const Event = ({
  month = "",
  day = "",
  time = "",
  title = "",
  location = "",
  link = "http://google.com",
  description = "",
  color = "",
}) => {
  return (
    <div className="flex rounded-lg overflow-hidden  max-w-2xl">
      <div className={`${color} p-4 text-hlg-white text-center w-1/4`}>
        <div className="text-4xl font-bold">{month}</div>
        <div className="text-4xl font-semibold ">{day}</div>
        <div className="text-xl font-normal">{time}</div>
      </div>

      <div className="flex-1 pl-4 bg-hlg-gray">
        <p className="text-xl text-hlg-black font-bold mb-1 mt-1">{title}</p>
        <div className="flex items-center text-hlg-black">
          <p className="flex m-0 p-0 font-normal">{location}</p>

          {link && (
            <Link className="text-hlg-black px-1 mb-0.5" href={link}>
              <FiExternalLink />
            </Link>
          )}
        </div>
        <p className="w-full focus:outline-none resize-none font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Event;
