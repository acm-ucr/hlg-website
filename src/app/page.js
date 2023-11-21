import Social from "@/components/Social";
import Landing from "@/components/home/Landing";

import { links } from "@/data/links";

import Who from "@/components/home/Intro";
import Sponsors from "@/components/home/Sponsors";

const Home = () => {
  return (
    <div>
      <Landing />

      <Who />
      <div className="bg-hlg-gray absolute h-64 w-screen z-[-1]"></div>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 grid-rows-2 gap-4 mb-100">
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
