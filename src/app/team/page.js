import Banner from "@/components/Banner";
import Teammates from "src/components/team/Teammates.jsx";

const team = () => {
  return (
    <div>
      <title>HLG | Team</title>
      <Banner YellowText={"OUR"} WhiteText={"TEAMS"} />
      <div className="p-14" />

      <Teammates />
    </div>
  );
};

export default team;
