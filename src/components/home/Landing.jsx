import LandingTitle from "@/components/home/LandingTitle";
import Gaming from "public/gaming.png";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="top-0">
      <div
        className="absolute top-0 bottom-0 
      
        md:h-3/4 md:w-3/5 h-1/2 w-3/5
       
        bg-gradient-to-r from-hlg-black to-hlg-blue-300
        "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 45%)" }}
      >
        <div className="flex justify-center items-center h-1/2 ">
          <LandingTitle className="" />
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
        <Image src={Gaming} layout="fill" objectFit="cover" />
      </div>
      <div className="p-[180px]" />
    </div>
  );
};

export default Landing;
