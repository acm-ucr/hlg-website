import Image from "next/image";
import eventPicture from "public/registration-line.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slides = () => {
  return (
    <div className="Slides">
      <div className="flex justify-center items-center">
        <div className="my-55 mr-40">
          <AiOutlineArrowLeft size={50} className="cursor-pointer text-xl" />
        </div>

        <div className="center section">
          <div className="text-lg pt-4">
            <p>Event Name</p>
          </div>
          <Image
            src={eventPicture} // Path to your image inside the 'public' directory
            alt="registration line Image"
          />
        </div>

        <div className="my-55 ml-40">
          <AiOutlineArrowRight size={50} className="cursor-pointer text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Slides;
