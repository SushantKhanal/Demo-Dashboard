import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.scss";

const DateCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar">
      <div className="calendar-container">
        {/* <div>
          {date.length > 0 ? (
            <p className="text-center">
              <span className="bold">Start:</span> {date[0].toDateString()}
              &nbsp;|&nbsp;
              <span className="bold">End:</span> {date[1].toDateString()}
            </p>
          ) : (
            <p className="text-center">
              <span className="bold">Default selected date:</span>{" "}
              {date.toDateString()}
            </p>
          )}
        </div> */}
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          //   maxDate={new Date()}
        />
      </div>
    </div>
  );
};

export default DateCalendar;
