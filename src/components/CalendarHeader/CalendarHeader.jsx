import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";

function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleToday = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} className="mr-2 w-10 h-10" alt="" />
      <h1 className="mr-10 text-lg text-gray-500 font-bold">Calendar </h1>
      <button
        onClick={() => handleToday()}
        className="border rounded py-1 px-4 mr-5 hover:bg-gray-200 text-gray-600 cursor-pointer"
      >
        Today
      </button>
      <button
        onClick={() => handlePrevMonth()}
        className="cursor-pointer text-gray-600 mx-2"
      >
        <span>
          <ChevronLeft />
        </span>
      </button>
      <button
        onClick={() => handleNextMonth()}
        className="cursor-pointer text-gray-600 mx-2"
      >
        <span>
          <ChevronRight />
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}

export default CalendarHeader;
