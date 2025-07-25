import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

function Day({ day, rowIdx }) {
  const { setDaySelected, setShowEventModel } = useContext(GlobalContext);
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-6"
      : "";
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
