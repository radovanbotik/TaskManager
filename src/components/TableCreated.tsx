import React from "react";
import IconCreated from "../icons/IconCreated";
import { TaskType } from "../types/types";
import moment from "moment";

type CreatedProps = Pick<TaskType, "createdOn">;

const TableCreated = ({ createdOn }: CreatedProps) => {
  const parseTime: (timestring: number) => string = timestring => {
    return moment(timestring).format("Do MMMM");
  };

  return (
    <td className="pl-5">
      <div className="flex items-center">
        <IconCreated />
        <p className="ml-2 text-sm leading-none text-gray-600">{parseTime(createdOn)}</p>
      </div>
    </td>
  );
};

export default TableCreated;
