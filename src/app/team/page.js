import Banner from "@/components/Banner";
import Teammates from "src/components/team/Teammates.jsx";

const team = () => {
  return (
    <div>
      <Banner YellowText={"MEET"} WhiteText={"THE BOARD"} />
      <Teammates />
    </div>
  );
};

export default team;
