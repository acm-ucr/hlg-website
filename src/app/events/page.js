import Banner from "@/components/Banner";
import CalendarEvent from "@/components/events/Calendar";
import data from "@/data/events";
import Events from "@/components/events/Events";
import Slides from "@/components/events/Slides";

const events = () => {
  return (
    <div>
      <Banner />
      <CalendarEvent events={data} />

      <Events />
      <Slides />
    </div>
  );
};

export default events;
