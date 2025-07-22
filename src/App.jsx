import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader";
import Month from "./components/Month/Month";
import Sidebar from "./components/Sidebar/Sidebar";
import { getMonth } from "./utils/utils";
import GlobalContext from "./context/GlobalContext";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
