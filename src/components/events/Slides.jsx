import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slides = () => {
  return (
    <div className="Slides">
      <div className="flex justify-center items-center">
        <div className="my-55 mr-40">
          <AiOutlineArrowLeft
            size={50}
            className="text-asme-blue-600 cursor-pointer text-xl"
          />
        </div>

        <div className="center section">
          <div className="font-playfair text-lg pt-4">
            <p>Event Name</p>
          </div>
          <Image
            src="registration-line.png" // Path to your image inside the 'public' directory
            alt="registration line Image"
            width={600} // Desired width of the image
            height={200} // Desired height of the image
          />
        </div>

        <div className="my-55 ml-40">
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
