import Story from "@/components/about/Story";
import Who from "src/components/about/Who.jsx";
import Banner from "@/components/Banner";

const about = () => {
  return (
    <div>
      <Banner YellowText={"ABOUT"} WhiteText={"US"} />
      <Who />
      <div className="py-5" />
      <Story />
    </div>
  );
};

export default about;
