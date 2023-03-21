import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TaskType } from "../types/types";

type LinkProps = Pick<TaskType, "id"> & {
  children: ReactNode;
  action: "delete" | "edit";
};

const TableLink = ({ id, children, action }: LinkProps) => {
  return (
    <Link
      to={`${id}/${action}`}
      className="block w-full cursor-pointer py-4 px-4 text-xs hover:bg-indigo-700 hover:text-white"
    >
      <p>{children}</p>
    </Link>
  );
};

export default TableLink;
