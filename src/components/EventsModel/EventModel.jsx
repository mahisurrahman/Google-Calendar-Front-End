import {
  AlignJustify,
  BookMarked,
  Check,
  Clock,
  Hamburger,
  X,
} from "lucide-react";
import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";

const labelClasses = [
  "indigo",
  "green",
  "yellow",
  "orange",
  "red",
  "purple",
  "pink",
];

function EventModel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelClasses[0]);
  const { setShowEventModel, daySelected } = useContext(GlobalContext);
  console.log(daySelected, "Day Selected");
  return (
    <div className="h-screen w-full fixed left-0 bg-black/20 z-50 top-0 flex items-center justify-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-200 text-black text-center px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">
            <AlignJustify className="cursor-pointer" />
          </span>
          <button onClick={() => setShowEventModel(false)}>
            <span className="text-gray-400">
              <X className="cursor-pointer" />
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-3 items-end gap-y-7">
            <div></div>
            <div className="col-span-2">
              <div className="flex items-center gap-x-2">
                <span className="text-gray-400">
                  <Clock className="cursor-pointer text-blue-600" />
                </span>

                <p className="text-lg font-semibold text-green-600">
                  {daySelected.format("dddd, MMMM DD")}
                </p>
              </div>
              <input
                type="text"
                name="title"
                placeholder="Add Title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 w-full border border-gray-200 py-2 px-2 rounded focus:border-blue-600 focus:ring-0 focus:outline-none"
              />

              <textarea
                type="text"
                name="description"
                placeholder="Add Description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                className="mt-3 w-full border border-gray-200 py-2 px-2 rounded focus:border-blue-600 focus:ring-0 focus:outline-none"
              />

              <p className="mt-5 font-bold text-blue-600">Select the Label</p>
              <div className="mt-2 flex gap-x-2">
                {labelClasses.map((label, index) => (
                  <span
                    onClick={() => setSelectedLabel(label)}
                    key={index}
                    className={`w-6 h-6 rounded-full hover:scale-110 duration-400 hover:duration-400 ${
                      label === "indigo"
                        ? "bg-indigo-600"
                        : label === "green"
                        ? "bg-green-600"
                        : label === "yellow"
                        ? "bg-yellow-600"
                        : label === "orange"
                        ? "bg-orange-600"
                        : label === "red"
                        ? "bg-red-600"
                        : label === "purple"
                        ? "bg-purple-600"
                        : "bg-pink-600"
                    } cursor-pointer flex items-center justify-center`}
                  >
                    {selectedLabel === label && (
                      <span className="text-white text-sm">
                        <Check className="cursor-pointer" />
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EventModel;
