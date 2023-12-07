import LandingTitle from "@/components/home/LandingTitle";
import Gaming from "public/gaming.png";
import Image from "next/image";

const Landing = () => {
  return (
    <div className=" top-0">
      <div
        className="absolute top-0 bottom-0
      
        md:h-4/5 md:w-8/12 h-1/2 w-3/5
       
        bg-gradient-to-r from-hlg-black to-hlg-blue-300

        md:flex md:justify-center md:items-center
        "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 55%)" }}
      >
        <div className="flex md:justify-start md:items-start justify-center mb-10 items-center h-1/2 md:mt-0 mt-10">
          <LandingTitle className="" />
        </div>
      </div>

      <div>
        <div
          className="bg-hlg-gray md:w-4/12 md:h-4/5   h-2/4  w-2/5 absolute right-0 bottom-0 top-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 70%)" }}
        ></div>

        <div
          className="absolute right-0 top-0 md:h-4/5 md:w-4/12 w-2/5 h-2/4 "
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 70%)" }}
        >
          <Image src={Gaming} objectFit="cover" layout="fill" />
        </div>
      </div>

      <div className="p-[180px]" />
    </div>
  );
};

export default Landing;
