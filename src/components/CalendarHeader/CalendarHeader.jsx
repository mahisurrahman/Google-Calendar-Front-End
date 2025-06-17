import React from "react";
import logo from "../../assets/logo.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CalendarHeader() {
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} className="mr-2 w-10 h-10" alt="" />
      <h1 className="mr-10 text-lg text-gray-500 font-bold">Calendar </h1>
      <button className="border rounded py-1 px-4 mr-5">Today</button>
      <button className="cursor-pointer text-gray-600 mx-2">
        <span>
          <ChevronLeft />
        </span>
      </button>
      <button className="cursor-pointer text-gray-600 mx-2">
        <span>
          <ChevronRight />
        </span>
      </button>
    </header>
  );
}

export default CalendarHeader;
