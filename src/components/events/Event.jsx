"use client";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
const Event = ({
  month = "FEB",
  day = "29",
  time = "7:00PM",
  title = "Event Title",
  link = "http://google.com",
  description = "Lorem ipsum dolor hello this is a test for the lol",
  color = "bg-hlg-orange",
}) => {
  return (
    <div className="flex rounded-lg overflow-hidden  max-w-2xl">
      <div className={`${color} p-4 text-hlg-white text-center w-1/4`}>
        <div className="text-4xl font-bold">{month}</div>
        <div className="text-4xl font-black ">{day}</div>
        <div className="text-xl font-extrabold">{time}</div>
      </div>

      <div className="flex-1 pl-4 bg-hlg-gray">
        <p className="text-xl text-hlg-black font-extrabold mb-1">{title}</p>
        <div className="flex items-center text-hlg-black">
          <p className="flex m-0 p-0 font-bold">zoom: link</p>

          <Link className="text-hlg-black" href={`${link}`}>
            <FiExternalLink />
          </Link>
        </div>
        <p className="w-full focus:outline-none resize-none font-bold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Event;
