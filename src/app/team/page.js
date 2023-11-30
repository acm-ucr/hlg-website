import Banner from "@/components/Banner";
import Teammates from "src/components/team/Teammates.jsx";

const team = () => {
  return (
    <div>
      <Banner YellowText={"OUR"} WhiteText={"TEAMS"} />
      <Teammates />
    </div>
  );
};

export default team;
