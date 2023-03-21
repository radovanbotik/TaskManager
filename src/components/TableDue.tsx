import React from "react";
import moment from "moment";
import { TaskType } from "../types/types";

type DueProps = Pick<TaskType, "dueTo">;

const TableDue = ({ dueTo }: DueProps) => {
  const parseTime: (timestring: number) => string = timestring => {
    return moment(timestring).format("Do MMMM");
  };

  return (
    <td className="pl-5">
      <div className="rounded bg-red-100 py-3 px-3 text-sm leading-none text-red-500 hover:bg-red-200 focus:outline-none">
        Due {parseTime(dueTo)}
      </div>
    </td>
  );
};

export default TableDue;
