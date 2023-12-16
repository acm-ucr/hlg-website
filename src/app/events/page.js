import Banner from "@/components/Banner";
import CalendarEvent from "@/components/events/Calendar";
import data from "@/data/events";
import Events from "@/components/events/Events";
import Slides from "@/components/events/Slides";
import Heading from "@/components/Heading";

const events = () => {
  return (
    <div>
      <title>HLG | Events</title>
      <Banner YellowText={"CHECK"} WhiteText={"OUR EVENTS"} />
      <div className="p-14" />

      <Heading text="Calendar" />
      <div className="flex items-center justify-center">
        <CalendarEvent events={data} />
      </div>
      <Events />
      <Slides />
    </div>
  );
};

export default events;
