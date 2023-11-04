import Banner from "@/components/Banner";
import Calendar from "@/components/events/Calendar";
import Events from "@/components/events/Events";
import Slides from "@/components/events/Slides";

const events = () => {
  return (
    <div>
      <Banner />
      <Calendar />
      <Events />
      <Slides />
    </div>
  );
};

export default events;
