"use client";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Heading from "../Heading";
import { useState } from "react";
import { images } from "@/data/images";
const Slides = () => {
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
    <div className="select-none flex-col">
      <Heading text="Past Events" />
      <div className="pt-4" />

      <div className=" flex justify-center sm:gap-20 items-center">
        <AiOutlineArrowLeft
          size={50}
          className="cursor-pointer text-xl"
          onClick={prevImage}
        />
        <div className="md:hidden p-1" /> {/* mobile spacing */}
        <div className="flex  flex-col ">
          <p className="select-none text-lg m-0 pl-2 pr-0 py-0">
            HighlanderCon
          </p>
          <div className="relative flex-grow">
            <Image
              src={images[currentImageIndex].src}
              alt="Event Image"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className="md:hidden p-1" /> {/* mobile spacing */}
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
