import Banner from "@/components/Banner";
import CalendarEvent from "@/components/events/Calendar";
import data from "@/data/events";
import Slides from "@/components/events/Slides";
import Heading from "@/components/Heading";

const events = () => {
  return (
    <div>
      <title>HLG | Events</title>
      <Banner YellowText={"CHECK"} WhiteText={"OUR EVENTS"} />
      <div className="py-20" />

      <div className="w-full flex flex-col justify-center items-center">
        <Heading text="Calendar" />

        <div className="flex w-full justify-center items-center">
          <CalendarEvent events={data} />
        </div>
      </div>

      <Slides />
    </div>
  );
};

export default events;
