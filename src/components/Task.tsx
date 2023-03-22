import React, { useState } from "react";
import { TaskType } from "../types/types";
import { Link, Form } from "react-router-dom";
import IconOptions from "../icons/IconOptions";
import TableName from "./TableName";
import TableUrgent from "./TableUrgent";
import TableCreated from "./TableCreated";
import TableEdited from "./TableEdited";
import TableDue from "./TableDue";
import TableDropdown from "./TableDropdown";
import TableView from "./TableView";

const Task = ({ createdOn, dueTo, editedOn, id, status, title, urgent }: TaskType) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <tr className="h-16 rounded border border-gray-100">
        <TableName title={title} />
        <TableUrgent urgent={urgent} />
        <TableCreated createdOn={createdOn} />
        <TableEdited editedOn={editedOn} />
        <TableDue dueTo={dueTo} />
        <td>
          <div className="relative px-5 pt-2">
            <button className="focus:outline-none" onClick={() => setShow(prev => !prev)}>
              <IconOptions />
            </button>

            {show && (
              <div className="dropdown-content absolute right-0 z-30 mr-6 w-24 bg-white shadow ">
                <Link
                  to={"edit"}
                  className="block w-full cursor-pointer py-4 px-4 text-xs hover:bg-indigo-700 hover:text-white"
                >
                  Edit
                </Link>
                <Form method="post" action={`delete`}>
                  <button
                    className="block w-full cursor-pointer py-4 px-4 text-xs hover:bg-indigo-700 hover:text-white"
                    type="submit"
                  >
                    Delete
                  </button>
                </Form>
              </div>
            )}
          </div>
        </td>
      </tr>
      <tr className="h-3" />
    </>
  );
};

export default Task;
