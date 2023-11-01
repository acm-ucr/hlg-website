import Social from "@/components/Social";
import Landing from "@/components/home/Landing";
import { links } from "@/data/links";

const home = () => {
  return (
    <div>
      <Landing />

      <div className="bg-hlg-gray h-[310px] pt-11 ">
        <div className="flex justify-center space-x-6">
          {links.slice(0, 5).map((linkData, index) => (
            <Social
              key={index}
              name={linkData.text}
              link={linkData.link}
              icon={linkData.icon}
            />
          ))}
        </div>

        <div className="flex justify-center space-x-6 mt-4">
          {links.slice(5, 10).map((linkData, index) => (
            <Social
              key={index + 5} // Add 5 to index to ensure unique keys
              name={linkData.text}
              link={linkData.link}
              icon={linkData.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default home;
