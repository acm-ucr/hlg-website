import Story from "@/components/about/Story";
import Who from "src/components/about/Who.jsx";

const about = () => {
  return (
    <div>
      <Who />
      <div className="py-5" />
      <Story />
    </div>
  );
};

export default about;
