import React from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./slidesAlignment.css";


const Slides = () => {
  return (
    <div className="Slides">
      <div className="container">
        <div className="leftArrow">
          <AiOutlineArrowLeft
            size={50}
            className="text-asme-blue-600 cursor-pointer text-xl"
          />
        </div>


        <div className="text">
          <p>Event Name</p>
          <div className="image">
            <Image
              src="registration-line.png" // Path to your image inside the 'public' directory
              alt="registration line Image"
              width={700} // Desired width of the image
              height={300} // Desired height of the image
            />
          </div>
        </div>


        <div className="rightArrow">
          <AiOutlineArrowRight
            size={50}
            className="text-asme-blue-600 cursor-pointer text-xl"
          />
        </div>
      </div>
    </div>
  );
};


export default Slides;


