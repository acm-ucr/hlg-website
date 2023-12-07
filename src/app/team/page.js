import RootLayout from "src/app/layout.js";
import Banner from "@/components/Banner";
import Teammates from "src/components/team/Teammates.jsx";

const team = () => {
  return (
    <RootLayout pageTitle="Team">
      <div>
        <Banner YellowText={"OUR"} WhiteText={"TEAMS"} />
        <div className="p-14" />

        <Teammates />
      </div>
    </RootLayout>
  );
};

export default team;
