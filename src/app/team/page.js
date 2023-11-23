import Banner from "@/components/Banner";
import Teammates from "src/components/team/Teammates.jsx";

const team = () => {
  return (
    <div>
      <Banner YellowText={"OUR"} WhiteText={"TEAMS"} />
      <Teammates />
      <div className="py-5" />
    </div>
  );
};

export default team;
