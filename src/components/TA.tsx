import React, { useState } from "react";
import IconAttachment from "../icons/IconAttachment";
import IconCheckbox from "../icons/IconCheckbox";
import IconCreated from "../icons/IconCreated";
import IconEdited from "../icons/IconEdited";
import IconUrgent from "../icons/IconUrgent";

function Index() {
  const [show, setShow] = useState(null);
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
            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <tbody>
                  <tr className="h-16 rounded border border-gray-100">
                    {/* Checkbox */}
                    {/* <td>
                      <div className="ml-5">
                        <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm bg-gray-200">
                          <input type="checkbox" className="checkbox absolute h-full w-full cursor-pointer opacity-0" />
                          <div className="check-icon  rounded-sm bg-indigo-700 text-white">
                            <IconCheckbox />
                          </div>
                        </div>
                      </div>
                    </td> */}
                    {/* Name */}
                    <td className="">
                      <div className="flex items-center pl-5">
                        <p className="mr-2 text-base font-medium leading-none text-gray-700">
                          Marketing Keynote Presentation
                        </p>
                        {/* <IconAttachment /> */}
                      </div>
                    </td>
                    {/* Urgent */}
                    <td className="pl-24">
                      <div className="flex items-center">
                        <IconUrgent />
                        <p className="ml-2 text-sm leading-none text-gray-600">Urgent</p>
                      </div>
                    </td>
                    {/* Created */}
                    <td className="pl-5">
                      <div className="flex items-center">
                        <IconCreated />
                        <p className="ml-2 text-sm leading-none text-gray-600">04/07</p>
                      </div>
                    </td>
                    {/* Edited */}
                    <td className="pl-5">
                      <div className="flex items-center">
                        <IconEdited />
                        <p className="ml-2 text-sm leading-none text-gray-600">04/07</p>
                      </div>
                    </td>
                    {/* Due */}
                    <td className="pl-5">
                      <button className="rounded bg-red-100 py-3 px-3 text-sm leading-none text-red-500 hover:bg-red-200 focus:outline-none">
                        Due today at 18:00
                      </button>
                    </td>
                    {/* View */}
                    <td className="pl-4">
                      <button className="rounded bg-gray-100 py-3 px-5 text-sm leading-none text-gray-600 hover:bg-gray-200 focus:outline-none">
                        View
                      </button>
                    </td>
                    {/* More */}
                    <td>
                      <div className="relative px-5 pt-2">
                        {show == 0 ? (
                          <button className="focus:outline-none" onClick={() => setShow(null)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                                stroke="#9CA3AF"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                                stroke="#9CA3AF"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                                stroke="#9CA3AF"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        ) : (
                          <button className="focus:outline-none" onClick={() => setShow(0)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                                stroke="#9CA3AF"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                                stroke="#9CA3AF"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                                stroke="#9CA3AF"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        )}
                        {show == 0 && (
                          <div className="dropdown-content absolute right-0 z-30 mr-6 w-24 bg-white shadow ">
                            <div className="w-full cursor-pointer py-4 px-4 text-xs hover:bg-indigo-700 hover:text-white">
                              <p>Edit</p>
                            </div>
                            <div className="w-full cursor-pointer py-4 px-4 text-xs hover:bg-indigo-700 hover:text-white">
                              <p>Delete</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr className="h-3" />
                </tbody>
              </table>
            </div>
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

export default Index;
