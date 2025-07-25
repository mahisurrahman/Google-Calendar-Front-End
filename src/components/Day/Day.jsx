import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";

function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModel, savedEvents, setSelectedEvent } =
    useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter((event) => {
      return dayjs(event.date).isSame(day, "day");
    });
    setDayEvents(events);
  }, [day, savedEvents]);

  const getCurrentDayClass = () => {
    return day.isSame(dayjs(), "day")
      ? "bg-blue-600 text-white rounded-full w-6"
      : "";
  };

  // Map label classes to actual Tailwind classes
  const labelColorMap = {
    indigo: "bg-indigo-200",
    green: "bg-green-200",
    yellow: "bg-yellow-200",
    orange: "bg-orange-200",
    red: "bg-red-200",
    purple: "bg-purple-200",
    pink: "bg-pink-200",
  };

  return (
    <div
      onClick={() => {
        setDaySelected(day);
        setShowEventModel(true);
      }}
      className="border border-gray-100 flex flex-col hover:cursor-pointer hover:bg-gray-50 transition-colors duration-300 p-2 h-full"
    >
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-xs mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-xs p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div className="flex-1 overflow-y-auto">
        {dayEvents.map((event, idx) => (
          <div
            onClick={() => {
              setSelectedEvent(event);
              setShowEventModel(true);
            }}
            key={idx}
            className={`${
              labelColorMap[event.label]
            } p-1 mr-3 text-black text-sm rounded font-bold mb-1 truncate`}
          >
            {idx + 1}. <span className="font-normal">{event.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;
