import TaskRow from "./TaskRow";

function TA() {
  return (
    <>
      <div>
        <div className="w-full sm:px-6">
          {/* Filter */}
          <div className="px-4 py-4 md:px-10 md:py-7">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold leading-normal text-gray-800 sm:text-lg md:text-xl lg:text-2xl">
                Tasks
              </p>
              <div className="flex cursor-pointer items-center rounded bg-gray-200 py-3 px-4 text-sm font-medium leading-none text-gray-600 hover:bg-gray-300">
                <p>Sort By:</p>
                <select className="ml-1 bg-transparent focus:outline-none">
                  <option className="text-sm text-indigo-800">Latest</option>
                  <option className="text-sm text-indigo-800">Oldest</option>
                  <option className="text-sm text-indigo-800">Latest</option>
                </select>
              </div>
            </div>
          </div>
          {/* Body */}
          <div className="bg-white py-4 px-4 md:py-7 md:px-8 xl:px-10">
            {/* TABS + NEW TASK */}
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
                onclick="popuphandler(true)"
                className="mt-4 inline-flex items-start justify-start rounded bg-indigo-700 px-6 py-3 hover:bg-indigo-600 focus:outline-none sm:mt-0"
              >
                <p className="text-sm font-medium leading-none text-white">Add Task</p>
              </button>
            </div>
            {/* TABLE / RECORDS */}
            {/* <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <tbody>
                  <TaskRow />
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
        {/* <style>
          {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
        </style> */}
      </div>
    </>
  );
}

export default TA;
