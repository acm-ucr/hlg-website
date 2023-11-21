import Pattern from "public/banner-pattern.svg";
import Image from "next/image";

const Banner = ({ YellowText, WhiteText }) => {
  return (
    <div className="top-0  ">
      <div
        className="absolute top-0 bottom-0 2xl:h-3/4 2xl:w-3/5 xl:h-3/4 xl:w-3/5 lg:h-3/5 lg:w-3/5  md:h-3/5 md:w-3/5 sm:h-2/5 sm:w-3/5

        max-[639px]:w-3/5 max-[639px]:h-1/2  
        
        bg-gradient-to-r from-hlg-black to-hlg-blue-300 

        flex justify-center left-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 45%)" }}
      >
        <div
          className="text-hlg-yellow font-bold max-[639px]:text-xl   sm:text-2xl   md:text-3xl   lg:text-4xl   xl:text-[40px] 2xl:text-[50px] 
                                                  max-[639px]:pt-[120px] sm:pt-[100px] md:pt-[125px] lg:pt-[140px] xl:pt-[175px]  2xl:pt-[200px]
                                                  max-[639px]:pr-[7px] 
                                              
                      left-0 pr-3 "
        >
          {YellowText}
        </div>

        <div
          className="text-hlg-white font-bold max-[639px]:text-xl   sm:text-2xl md:text-3xl   lg:text-4xl   xl:text-[40px] 2xl:text-[50px] 
                                                 max-[639px]:pt-[120px] sm:pt-[100px] md:pt-[125px] lg:pt-[140px] xl:pt-[175px]  2xl:pt-[200px]
                                                 max-[639px]:pr-[10px]
                   
                   pr-20 left-0  "
        >
          {WhiteText}
        </div>
      </div>

      <div
        className="bg-hlg-gray 2xl:w-2/5 2xl:h-3/4 xl:h-3/4 xl:w-2/5 lg:h-3/5 lg:w-2/5 md:h-3/5 md:w-2/5 sm:h-2/5 sm:w-2/5
        
        max-[639px]:w-2/5 max-[639px]:h-1/2 max-[639px]:right-0 max-[639px]:top-0 
        
        absolute right-0 bottom-0 top-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 75%)" }}
      ></div>

      <div
        className="absolute right-0 top-0 2xl:h-3/4 2xl:w-2/5 xl:h-3/4 xl:w-2/5 lg:h-3/5 lg:w-2/5 md:h-3/5 md:w-2/5 sm:h-2/5 sm:w-2/5

        max-[630px]:w-2/5 max-[639px]:h-1/2 max-[639px]:right-0 max-[639px]:top-0 

        bg-gradient-to-r from-hlg-blue-300 to-hlg-black"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 75%)" }}
      >
        <Image src={Pattern} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Banner;
