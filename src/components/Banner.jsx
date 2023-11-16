import Pattern from "public/banner-pattern.svg";
import Image from "next/image";

const Banner = ({ YellowText, WhiteText }) => {
  return (
    <div className="top-0  ">
      <div
        className="absolute top-0 bottom-0 h-3/4 w-3/5 bg-gradient-to-r from-hlg-black to-hlg-blue-300 
        flex justify-center items-center"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 45%)" }}
      >
        <p className="text-hlg-yellow md:text-4xl lg:text-5xl pr-2 pb-[150px] ">
          {YellowText}
        </p>
        <p className="text-hlg-white md:text-4xl lg:text-5xl pl-2 pb-[150px] ">{WhiteText}</p>
      </div>

      <div
        className="bg-hlg-gray w-2/5 h-3/4 absolute right-0 bottom-0 top-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 75%)" }}
      ></div>

      <div
        className="absolute right-0 top-0 h-3/4 w-2/5 bg-gradient-to-r from-hlg-blue-300 to-hlg-black"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 75%)" }}
      >
        <Image src={Pattern} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Banner;
