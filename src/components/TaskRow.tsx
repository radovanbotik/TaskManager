import React, { useState } from "react";
import { TaskType } from "../types/types";
import moment from "moment";
import IconOptions from "../icons/IconOptions";
import TableName from "./TableName";
import TableUrgent from "./TableUrgent";
import TableCreated from "./TableCreated";
import TableEdited from "./TableEdited";
import TableDue from "./TableDue";
import TableLink from "./TableLink";
import TableDropdown from "./TableDropdown";

const TaskRow = ({ createdOn, dueTo, editedOn, id, status, title, urgent }: TaskType) => {
  const [show, setShow] = useState(false);

  const parseTime: (timestring: number) => string = timestring => {
    return moment(timestring).format("Do MMMM");
  };

  return (
    <>
      <tr className="h-16 rounded border border-gray-100">
        <TableName title={title} />
        <TableUrgent urgent={urgent} />
        <TableCreated createdOn={createdOn} />
        <TableEdited editedOn={editedOn} />
        <TableDue dueTo={dueTo} />
        {/* View */}
        {/* <td className="pl-4">
          <Link
            to={`${id}`}
            className="block rounded bg-gray-100 py-3 px-5 text-sm leading-none text-gray-600 hover:bg-gray-200 focus:outline-none"
          >
            View
          </Link>
        </td> */}
        <td>
          <div className="relative px-5 pt-2">
            <button className="focus:outline-none" onClick={() => setShow(prev => !prev)}>
              <IconOptions />
            </button>

            {show && <TableDropdown id={id} />}
          </div>
        </td>
      </tr>
      <tr className="h-3" />
    </>
  );
};

export default TaskRow;
