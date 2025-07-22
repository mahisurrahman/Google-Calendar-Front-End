import React, { useContext, useEffect, useState } from "react";
import dayJs from "dayjs";
import { getMonth } from "../../utils/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlobalContext from "../../context/GlobalContext";

function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayJs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayJs().format(format);
    const currentDay = day.format(format);
    const slcDay = daySelected ? daySelected.format(format) : null;

    if (nowDay === currentDay) {
      return "bg-blue-500 text-white rounded-full";
    } else if (currentDay === slcDay) {
      return "bg-blue-100 text-blue-600 font-bold rounded-full";
    } else {
      return "hover:bg-gray-200 hover:cursor-pointer rounded-full transition-colors duration-300";
    }
  }

  return (
    <div className="mt-9">
      <header className="grid grid-cols-3 items-center mb-4">
        <p className="col-span-2 text-gray-500 font-semibold">
          {dayJs(new Date(dayJs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>

        <div className="col-span-1 flex justify-end gap-x-2">
          <button
            onClick={() => handlePrevMonth()}
            className="cursor-pointer text-gray-600"
          >
            <span>
              <ChevronLeft />
            </span>
          </button>
          <button
            onClick={() => handleNextMonth()}
            className="cursor-pointer text-gray-600"
          >
            <span>
              <ChevronRight />
            </span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                key={idx}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SmallCalendar;
