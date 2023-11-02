import Banner from "@/components/Banner";
import CalendarEvent from "@/components/events/Calendar";
import data from "@/data/events";
const events = () => {
  return (
    <div>
      <Banner />
      <CalendarEvent events={data} />
    </div>
  );
};

export default events;
