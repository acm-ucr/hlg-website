"use client";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";
import moment from "moment";
import Modal from "./Modal.jsx";
import CustomHeader from "./CustomHeader.jsx";
import Events from "./Events.jsx";

import "./rbc-overrides.css";

const localizer = momentLocalizer(moment);

const colors = [
  "bg-hlg-orange",
  "bg-hlg-blue-100",
  "bg-gradient-to-r from-hlg-black to-hlg-blue-300",
];

const CalendarEvent = ({ dumb }) => {
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);

  const Airtable = require("airtable");
  const base = new Airtable({
    apiKey:
      "patyzG2qGUJ619c8U.73b380b45a279e9530cfeef6f08493567368a2d9b76bc6ee7055796581d81844",
  }).base("appu0ikUmeM0YkkZB");

  useEffect(() => {
    base("Events")
      .select({
        // Selecting the first 3 records in Fall Event Calendar :
        view: "Fall Event Calendar ",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          const newEvents = records.map((record, index) => {
            const start = new Date(record.get("When"));
            const end = new Date(start);
            end.setHours(start.getHours() + 1);
            return {
              title: record.get("General Notes + Ideas + Dates"),
              description: record.get("Notes"),
              location: record.get("Where"),
              start: start,
              end: end,
              color: colors[index % 3],
            };
          });
          console.log(newEvents);

          setEvents(newEvents);

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center text-base md:text-xl">
        <div className="h-[110vh] md:h-[110vh] w-full relative text-base md:text-xl mb-24">
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
      <Events eventsData={events} />
    </div>
  );
};

export default CalendarEvent;
