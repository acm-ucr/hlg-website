import RootLayout from "src/app/layout.js";
import Story from "@/components/about/Story";
import Who from "src/components/about/Who.jsx";
import Banner from "@/components/Banner";

const about = () => {
  return (
    <RootLayout pageTitle="About">
      <Banner YellowText={"ABOUT"} WhiteText={"US"} />
      <div className="p-14" />

      <Who />
      <div className="py-5" />
      <Story />
    </RootLayout>
  );
};

export default about;
