"use client";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";
import moment from "moment";
import filters from "@/data/filters.js";
import "./rbc-overrides.css";
function getFilterById(id) {
  return filters.find((filter) => filter.id === id);
}

const localizer = momentLocalizer(moment);

const CalendarEvent = ({ events }) => {
  // const [event, setEvent] = useState(null);
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-9/12 md:w-10/12 flex justify-center items-center text-base md:text-xl">
      <div className="h-[90vh] md:h-[110vh] w-full relative text-base md:text-xl mb-24">
        <Calendar
          className="font-poppins w-full m-0 p-0 text-base md:text-xl"
          date={date}
          events={events}
          localizer={localizer}
          defaultView="month"
          views={["month"]}
          onNavigate={(newDate) => {
            setDate(newDate);
          }}
          components={{
            event: CustomEvent,
            toolbar: CustomToolbar,
          }}
          eventPropGetter={(event) => {
            return {
              className: `!${getFilterById(event.type).color} !rounded-none`,
              // <p>what's wrong here. ! is useful.</p>
            };
          }}
          dayPropGetter={(event) => {
            const bg =
              new Date(event).toLocaleDateString() ==
              new Date().toLocaleDateString()
                ? "!bg-hlg-blue-100"
                : "!bg-transparent";

            return {
              className: `${bg}`,

              style: {
                margin: 0,
                padding: 0,
              },
            };
          }}
        />
      </div>
    </div>
  );
};

export default CalendarEvent;
