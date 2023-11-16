import Banner from "@/components/Banner";
import CalendarEvent from "@/components/events/Calendar";
import data from "@/data/events";
import Events from "@/components/events/Events";
import Slides from "@/components/events/Slides";

const events = () => {
  return (
    <div>
      <Banner YellowText={"Check"} WhiteText={"Out Events"} />

      <div className="pt-[400px]"/>

      <CalendarEvent events={data} />

      <Events />
      <Slides />
    </div>
  );
};

export default events;
