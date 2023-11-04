import Image from "next/image";
import eventPicture from "public/registration-line.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Heading from "../Heading";

const Slides = () => {
  return (
    <div className=" flex-col">
      <Heading text="Past Events" />
      <div className="flex justify-center gap-20 items-center">
        <AiOutlineArrowLeft size={50} className="cursor-pointer text-xl" />
        <div className="center section">
          <div className="text-lg pt-4 ">
            <p className="m-0 p-0">Event Name</p>
          </div>
          <Image
            src={eventPicture} // Path to your image inside the 'public' directory
            alt="registration line Image"
          />
        </div>

        <AiOutlineArrowRight size={50} className="cursor-pointer text-xl" />
      </div>
    </div>
  );
};

export default Slides;
