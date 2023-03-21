import React from "react";

const ActionNav = () => {
  return (
    <div className="items-center justify-between sm:flex">
      <div className="flex items-center">
        <a href="javascript:void(0)">
          <div className="rounded-full bg-indigo-100 py-2 px-8 text-indigo-700">
            <p>All</p>
          </div>
        </a>
        <a href="javascript:void(0)">
          <div className="ml-4 rounded-full py-2 px-8 text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 sm:ml-8">
            <p>Done</p>
          </div>
        </a>
        <a href="javascript:void(0)">
          <div className="ml-4 rounded-full py-2 px-8 text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 sm:ml-8">
            <p>Pending</p>
          </div>
        </a>
      </div>
      <button
        // onclick="popuphandler(true)"
        className="mt-4 inline-flex items-start justify-start rounded bg-indigo-700 px-6 py-3 hover:bg-indigo-600 focus:outline-none sm:mt-0"
      >
        <p className="text-sm font-medium leading-none text-white">Add Task</p>
      </button>
    </div>
  );
};

export default ActionNav;
