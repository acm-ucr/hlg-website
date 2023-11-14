const CustomEvent = ({ event }) => {
  return (
    <div
      className={`font-poppins text-hlg-white ${event.color} text-sm flex justify-start`}
    >
      &nbsp;&nbsp;
      <p className="whitespace-nowrap m-0">
        {!event.allDay &&
          new Date(event.start).toLocaleTimeString(navigator.language, {
            hour: "2-digit",
          })}
        &nbsp;
        {event.title}
      </p>
    </div>
  );
};

export default CustomEvent;
