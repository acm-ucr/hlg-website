"use client";
import React from "react";
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
    <div className="flex rounded-lg overflow-hidden shadow-md max-w-lg">
      <div className={`${color} p-4 text-white text-center w-1/3`}>
        <div className="text-2xl font-bold">{month}</div>
        <div className="text-4xl ">{day}</div>
        <div className="text-xl">{time}</div>
      </div>
      <div className="flex-1 pl-4">
        <p className="w-full text-xl font-bold mb-1 focus:outline-none resize-none font-bold">
          {title}
        </p>
        <a
          href={`${link}`}
          className="w-full text-blue-500 mb-2 focus:outline-none resize-none"
        >
          zoom: link
        </a>
        <p className="w-full focus:outline-none resize-none">{description}</p>
      </div>
    </div>
  );
};

export default Event;
