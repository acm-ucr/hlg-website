import Banner from "@/components/Banner";
import Teammates from "src/components/team/Teammates";

const team = () => {
  return (
    <div className="border-4 border-purple-500 sm:border-red-500">
      <Banner />
      <Teammates />
    </div>
  );
};

export default team;
