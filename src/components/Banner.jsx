import Pattern from "public/banner-pattern.svg";
import Image from "next/image";

const Banner = ({ YellowText, WhiteText }) => {
  return (
    <div className="top-0">
      <div
        className="absolute top-0 bottom-0 
      
        md:h-3/4 md:w-3/5 h-1/2 w-3/5
       
        bg-gradient-to-r from-hlg-black to-hlg-blue-300
        "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 45%)" }}
      >
        <div className="h-full w-full flex items-center">
          <div className="flex-col justify-center items-center h-1/2 md:w-3/4 md:h-1/2">
            <div className="flex pl-4 gap-2 items-center justify-center">
              <div className="text-hlg-yellow font-bold text-xl md:text-4xl">
                {YellowText}
              </div>
              <div className="text-hlg-white text-xl md:text-4xl font-bold">
                {WhiteText}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-hlg-gray md:w-2/5 md:h-3/4  h-2/4 w-2/5  absolute right-0 bottom-0 top-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 75%)" }}
      ></div>

      <div
        className="absolute right-0 top-0 md:h-3/4 md:w-2/5  h-2/4 w-2/5 bg-gradient-to-t from-hlg-blue-300 from-40% to-[#241E40]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 75%)" }}
      >
        <Image src={Pattern} layout="fill" objectFit="cover" />
      </div>
      <div className="p-[180px]" />
    </div>
  );
};

export default Banner;
