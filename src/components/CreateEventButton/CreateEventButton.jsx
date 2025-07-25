import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

function CreateEventButton() {
  const { setShowEventModel } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModel(true)}
      className="px-4 py-2 rounded bg-gray-200 flex items-center gap-x-2 shadow-lg hover:cursor-pointer hover:bg-gray-300 hover:border-0 transition-colors duration-300 hover:shadow-xl"
    >
      <span className="text-gray-700 text-2xl -mt-1 font-semibold">+</span>
      <span className="text-gray-700 font-semibold">Create Event</span>
    </button>
  );
}

export default CreateEventButton;
