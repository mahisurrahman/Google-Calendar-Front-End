import dayjs from "dayjs";
import React from "react";

function Day({ day, rowIdx }) {
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-6"
      : "";
  };
  return (
    <div className="border border-gray-50 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-xs mt-1 ">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-xs p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
}

export default Day;
