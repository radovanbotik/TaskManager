import React from "react";
import IconEdited from "../icons/IconEdited";
import moment from "moment";
import { TaskType } from "../types/types";

type EditedProps = Pick<TaskType, "editedOn">;

const TableEdited = ({ editedOn }: EditedProps) => {
  const parseTime: (timestring: number) => string = timestring => {
    return moment(timestring).format("Do MMMM");
  };

  return (
    <td className="pl-5">
      <div className="flex items-center">
        <IconEdited />
        <p className="ml-2 text-sm leading-none text-gray-600">{parseTime(editedOn)}</p>
      </div>
    </td>
  );
};

export default TableEdited;
