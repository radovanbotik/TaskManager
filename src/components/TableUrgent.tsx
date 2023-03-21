import React from "react";
import IconUrgent from "../icons/IconUrgent";
import { TaskType } from "../types/types";

type UrgentProps = Pick<TaskType, "urgent">;

const TableUrgent = ({ urgent }: UrgentProps) => {
  return (
    <td className="pl-24">
      <div className="flex items-center">
        <IconUrgent />
        <p className="ml-2 text-sm leading-none text-gray-600">{urgent === true ? "Urgent" : "Not Urgent"}</p>
      </div>
    </td>
  );
};

export default TableUrgent;
