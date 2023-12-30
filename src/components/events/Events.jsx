import Heading from "../Heading";
import Event from "./Event";

const Events = ({ eventsData }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // set the time to 00:00:00

  const colors = [
    "bg-hlg-orange",
    "bg-hlg-blue-100",
    "bg-gradient-to-r from-hlg-black to-hlg-blue-300",
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <Heading text="Upcoming Events" />
      <div className="w-11/12 flex-col flex justify-center items-center space-y-7 mt-16 mb-16">
        {eventsData
          .filter((event) => new Date(event.start) >= today)
          .sort((a, b) => new Date(a.start) - new Date(b.start))
          .slice(0, 3)
          .map((event, index) => (
            <Event
              key={index}
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
              color={colors[index % colors.length]}
            />
          ))}
      </div>
    </div>
  );
};

export default Events;
