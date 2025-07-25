import React from "react";
import CreateEventButton from "../CreateEventButton/CreateEventButton";
import SmallCalendar from "../SmallCalendar/SmallCalendar";
import Labels from "../Labels/Labels";

function Sidebar() {
  return (
    <aside className="border border-gray-50 p-5 w-64 bg-gray-50">
      <CreateEventButton />
      <SmallCalendar />
    </aside>
  );
}

export default Sidebar;
