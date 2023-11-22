import Banner from "@/components/Banner";
import CalendarEvent from "@/components/events/Calendar";
import data from "@/data/events";
import Events from "@/components/events/Events";
import Slides from "@/components/events/Slides";
import Heading from "@/components/Heading";

const events = () => {
  return (
    <div>
      <Banner YellowText={"CHECK"} WhiteText={"OUR EVENTS"} />
      <Heading text="Calendar" />
      <CalendarEvent events={data} />

      <Events />
      <Slides />
    </div>
  );
};

export default events;
