import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconCreated from "../icons/IconCreated";
import IconEdited from "../icons/IconEdited";
import IconUrgent from "../icons/IconUrgent";
import { TaskType } from "../types/types";
import moment from "moment";
import IconOptions from "../icons/IconOptions";

const TaskRow = ({ createdOn, dueTo, editedOn, id, status, title, urgent }: TaskType) => {
  const [show, setShow] = useState(false);

  const parseTime: (timestring: number) => string = timestring => {
    return moment(timestring).format("Do MMMM");
  };

  return (
    <>
      <tr className="h-16 rounded border border-gray-100">
        {/* Name */}
        <td className="">
          <div className="flex items-center pl-5">
            <p className="mr-2 text-base font-medium leading-none text-gray-700">{title}</p>
            {/* <IconAttachment /> */}
          </div>
        </td>
        {/* Urgent */}
        <td className="pl-24">
          <div className="flex items-center">
            <IconUrgent />
            <p className="ml-2 text-sm leading-none text-gray-600">{urgent === true ? "Urgent" : "Not Urgent"}</p>
          </div>
        </td>
        {/* Created */}
        <td className="pl-5">
          <div className="flex items-center">
            <IconCreated />
            <p className="ml-2 text-sm leading-none text-gray-600">{parseTime(createdOn)}</p>
          </div>
        </td>
        {/* Edited */}
        <td className="pl-5">
          <div className="flex items-center">
            <IconEdited />
            <p className="ml-2 text-sm leading-none text-gray-600">{parseTime(editedOn)}</p>
          </div>
        </td>
        {/* Due */}
        <td className="pl-5">
          <button className="rounded bg-red-100 py-3 px-3 text-sm leading-none text-red-500 hover:bg-red-200 focus:outline-none">
            Due {parseTime(dueTo)}
          </button>
        </td>
        {/* View */}
        <td className="pl-4">
          <Link
            to={`${id}`}
            className="rounded bg-gray-100 py-3 px-5 text-sm leading-none text-gray-600 hover:bg-gray-200 focus:outline-none"
          >
            View
          </Link>
        </td>
        {/* More */}
        <td>
          <div className="relative px-5 pt-2">
            <button className="focus:outline-none" onClick={() => setShow(prev => !prev)}>
              <IconOptions />
            </button>

            {show && (
              <div className="dropdown-content absolute right-0 z-30 mr-6 w-24 bg-white shadow ">
                <Link
                  to={`${id}/edit`}
                  className="block w-full cursor-pointer py-4 px-4 text-xs hover:bg-indigo-700 hover:text-white"
                >
                  <p>Edit</p>
                </Link>
                <Link
                  to={`${id}/delete`}
                  className="block w-full cursor-pointer py-4 px-4 text-xs hover:bg-indigo-700 hover:text-white"
                >
                  <p>Delete</p>
                </Link>
              </div>
            )}
          </div>
        </td>
      </tr>
      <tr className="h-3" />
    </>
  );
};

export default TaskRow;
