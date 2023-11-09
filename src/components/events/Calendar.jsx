"use client";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";
import moment from "moment";
import Modal from "./Modal.jsx";
import CustomHeader from "./CustomHeader.jsx";

const localizer = momentLocalizer(moment);

const CalendarEvent = ({ events }) => {
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState(null);

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
            month: {
              header: CustomHeader,
            },
          }}
          eventPropGetter={() => {
            return {
              className: `p-0 !active:ring-0 !focus:outline-0 !bg-transparent`,
            };
          }}
          onSelectEvent={(event) => setEvent(event)}
          dayPropGetter={(event) => {
            const bg =
              new Date(event).toLocaleDateString() ==
              new Date().toLocaleDateString()
                ? "!bg-hlg-blue-100 !bg-opacity-40"
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
      {event && <Modal event={event} setEvent={setEvent} />}
    </div>
  );
};

export default CalendarEvent;
