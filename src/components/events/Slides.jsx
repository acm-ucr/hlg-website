"use client";
import Image from "next/image";
import eventPicture from "public/registration-line.png";
import thirdPicture from "public/beach.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Heading from "../Heading";
import { useState } from "react";

const Slides = () => {
  const images = [
    {
      src: eventPicture,
      width: 500, // replace with the actual width of the image
      height: 300,
    },
    {
      src: thirdPicture,
      width: 500, // replace with the actual width of the image
      height: 300, // replace with the actual height of the image
    },
    // ... other images
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" flex-col">
      <Heading text="Past Events" />
      <div className="flex justify-center gap-20 items-center">
        <AiOutlineArrowLeft
          size={50}
          className="cursor-pointer text-xl"
          onClick={prevImage}
        />
        <div className="center section">
          <div className="text-lg pt-4 ">
            <p className="m-0 p-0">Event Name</p>
          </div>
          <Image
            src={images[currentImageIndex].src}
            alt="Event Image"
            width={images[currentImageIndex].width}
            height={images[currentImageIndex].height}
            layout="responsive"
          />
        </div>

        <AiOutlineArrowRight
          size={50}
          className="cursor-pointer text-xl"
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

export default Slides;
