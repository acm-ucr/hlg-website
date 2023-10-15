"use client";
import React, { useState } from "react";
const Event = ({
  month = "FEB",
  day = "29",
  time = "7:00PM",
  title = "Event Title",
  link = "http://google.com",
  description = "Lorem ipsum dolor hello this is a test for the lol",
  color = "bg-orange-400",
}) => {
  const [info, setInfo] = useState({
    month: month,
    day: day,
    time: time,
    title: title,
    link: link,
    description: description,
    color: color,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="flex rounded-lg overflow-hidden shadow-md max-w-lg">
      <div className={`${info.color} p-4 text-white text-center w-1/3`}>
        <div className="text-2xl font-bold">{info.month}</div>
        <div className="text-4xl">{info.day}</div>
        <div className="text-xl">{info.time}</div>
      </div>
      <div className="flex-1 pl-4">
        <input
          type="text"
          name="title"
          value={info.title}
          onChange={handleChange}
          className="w-full text-xl font-bold mb-1 focus:outline-none"
        />
        <a href={`${info.link}`}>
          <input
            type="text"
            name="link"
            value="zoom: link"
            onChange={handleChange}
            className="w-full text-blue-500 mb-2 focus:outline-none"
          />
        </a>
        <textarea
          name="description"
          value={info.description}
          onChange={handleChange}
          className="w-full focus:outline-none resize-none"
        />
      </div>
    </div>
  );
};

export default Event;
