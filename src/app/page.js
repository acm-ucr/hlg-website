import Social from "@/components/Social";
import Landing from "@/components/home/Landing";

import { links } from "@/data/links";

import Who from "@/components/home/Intro";
import Sponsors from "@/components/home/Sponsors";

const Home = () => {
  return (
    <div>
      <Landing />
      <div className=" py-[150px] md:py-[200px]" />

      <Who />
      <div className="bg-hlg-gray absolute h-64 w-screen z-[-1]"></div>
      <div className="flex bg-hlg-gray md:bg-transparent justify-center pb-2">
        <div className="grid grid-cols-2 grid-rows-5 gap-3 md:grid-cols-5 md:grid-rows-2 px-2 mb-100">
          {links.map((linkData, index) => (
            <Social
              key={index}
              name={linkData.text}
              link={linkData.link}
              icon={linkData.icon}
            />
          ))}
        </div>
      </div>

      <div className="pt-10">
        <Sponsors />
      </div>
    </div>
  );
};

export default Home;
