import Social from "@/components/Social";
import Landing from "@/components/home/Landing";
import { links } from "@/data/links";

const Home = () => {
  return (
    <div>
      <Landing />

      <div className="flex justify-center">
        <div className="grid grid-cols-5 grid-rows-2 gap-4">
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
    </div>
  );
};

export default Home;
