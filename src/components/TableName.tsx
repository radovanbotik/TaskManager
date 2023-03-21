import React from "react";
import { TaskType } from "../types/types";

type NameProps = Pick<TaskType, "title">;

const TableName = ({ title }: NameProps) => {
  return (
    <td className="">
      <div className="flex items-center pl-5">
        <p className="mr-2 text-base font-medium leading-none text-gray-700">{title}</p>
      </div>
    </td>
  );
};

export default TableName;
