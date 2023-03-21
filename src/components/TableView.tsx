import React from "react";
import { Link } from "react-router-dom";
import { TaskType } from "../types/types";

type ViewProps = Pick<TaskType, "id">;

const TableView = ({ id }: ViewProps) => {
  return (
    <td className="pl-4">
      <Link
        to={`${id}`}
        className="block rounded bg-gray-100 py-3 px-5 text-sm leading-none text-gray-600 hover:bg-gray-200 focus:outline-none"
      >
        View
      </Link>
    </td>
  );
};

export default TableView;
