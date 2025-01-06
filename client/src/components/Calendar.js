import React from "react";
import "./Calendar.css";

const Calendar = ({ tasks }) => {
  return (
    <div className="calendar">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="task"
          style={{ gridColumn: `span ${task.deadlineDays}` }}
        >
          {task.name}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
