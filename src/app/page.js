import Landing from "@/components/home/Landing";
import Who from "@/components/home/Intro";
import Sponsors from "@/components/home/Sponsors";

const home = () => {
  return (
    <div>
      <Landing />
      <Who />
      <div className="py-10" />
      <Sponsors />
    </div>
  );
};

export default home;
