import React from "react";
import TableLink from "./TableLink";
import { TaskType } from "../types/types";
import { Form } from "react-router-dom";

type DropdownProps = Pick<TaskType, "id">;

const TableDropdown = ({ id }: DropdownProps) => {
  return (
    <div className="dropdown-content absolute right-0 z-30 mr-6 w-24 bg-white shadow ">
      <TableLink id={id} action="edit">
        Edit
      </TableLink>
      <Form method="post" action={`delete`}>
        <button
          className="block w-full cursor-pointer py-4 px-4 text-xs hover:bg-indigo-700 hover:text-white"
          type="submit"
        >
          Delete
        </button>
      </Form>
    </div>
  );
};

export default TableDropdown;
