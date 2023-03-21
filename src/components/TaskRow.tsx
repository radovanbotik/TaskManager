import React, { useState } from "react";
import { TaskType } from "../types/types";
import IconOptions from "../icons/IconOptions";
import TableName from "./TableName";
import TableUrgent from "./TableUrgent";
import TableCreated from "./TableCreated";
import TableEdited from "./TableEdited";
import TableDue from "./TableDue";
import TableDropdown from "./TableDropdown";
import TableView from "./TableView";

const TaskRow = ({ createdOn, dueTo, editedOn, id, status, title, urgent }: TaskType) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <tr className="h-16 rounded border border-gray-100">
        <TableName title={title} />
        <TableUrgent urgent={urgent} />
        <TableCreated createdOn={createdOn} />
        <TableEdited editedOn={editedOn} />
        <TableDue dueTo={dueTo} />
        <TableView id={id} />
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
