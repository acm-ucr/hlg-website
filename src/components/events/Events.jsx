import Heading from "../Heading";
import Event from "./Event";

const Events = ({ eventsData }) => {
  return (
    <div className="">
      <Heading text="Upcoming Events" />
      <div className="w-full flex-col justify-center items-center space-y-7 mt-16 mb-16">
        {eventsData
          .sort((a, b) => a.start - b.start)
          .slice(-4, -1)
          .reverse()
          .map((event, index) => (
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
