import Heading from "../Heading";
import Event from "./Event";
import eventsData from "src/data/events.js";

const Events = () => {
  return (
    <div className="flex flex-col items-center">
      <Heading text="Upcoming Events" />
      <div className="space-y-7 mt-16 mb-16">
        {eventsData.map((event) => (
          <Event
            key={event.id}
            month={event.start
              .toLocaleString("default", { month: "short" })
              .toUpperCase()}
            day={event.start.getDate()}
            time={`${
              event.start.getHours() > 12
                ? event.start.getHours() - 12
                : event.start.getHours()
            }:${event.start.getMinutes().toString().padStart(2, "0")} ${
              event.start.getHours() >= 12 ? "PM" : "AM"
            }`}
            title={event.title}
            location={event.location}
            link={event.link}
            description={event.description}
            color={event.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
