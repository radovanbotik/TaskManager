import React from "react";
import TableLink from "./TableLink";
import { TaskType } from "../types/types";

type DropdownProps = Pick<TaskType, "id">;

const TableDropdown = ({ id }: DropdownProps) => {
  return (
    <div className="dropdown-content absolute right-0 z-30 mr-6 w-24 bg-white shadow ">
      <TableLink id={id} action="edit">
        Edit
      </TableLink>
      <TableLink id={id} action="delete">
        Delete
      </TableLink>
    </div>
  );
};

export default TableDropdown;
