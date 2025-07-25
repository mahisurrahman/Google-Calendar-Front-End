import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [showEventModel, setShowEventModel] = useState(false);
  const [daySelected, setDaySelected] = useState(dayjs());

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex: monthIndex,
        setMonthIndex: setMonthIndex,
        smallCalendarMonth: smallCalendarMonth,
        setSmallCalendarMonth: setSmallCalendarMonth,
        daySelected: daySelected,
        setDaySelected: setDaySelected,
        showEventModel: showEventModel,
        setShowEventModel: setShowEventModel,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
