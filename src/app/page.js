import Landing from "@/components/home/Landing";
import CalendarEvent from "@/components/events/Calendar";
import events from "@/data/events";
const home = () => {
  return (
    <div>
      <CalendarEvent events={events} />
      <Landing />
    </div>
  );
};

export default home;
