import React from "react";
import moment from "moment";
import { TaskType } from "../types/types";

type DueProps = Pick<TaskType, "dueTo">;

const TableDue = ({ dueTo }: DueProps) => {
  const addDays: (days: number) => number = days => {
    return days * 24 * 60 * 60 * 1000;
  };

  const parseTime: (date: number) => string = date => {
    return moment(date).format("Do MMMM");
  };

  const dueDate = parseTime(dueTo);
  const today = parseTime(Date.now());
  const isToday = dueDate === today;
  const isExpired = dueTo + addDays(0.5) < Date.now();

  return (
    <td className="pl-5">
      <div
        className={`rounded  ${
          isExpired
            ? "bg-red-100 text-red-500 hover:bg-red-200"
            : isToday
            ? "bg-amber-100 text-amber-500 hover:bg-amber-200"
            : "bg-green-100 text-green-500 hover:bg-green-200"
        } py-3 px-3 text-sm leading-none   focus:outline-none`}
      >
        {isExpired ? "Was Due" : "Due"} {parseTime(dueTo)}
      </div>
    </td>
  );
};

export default TableDue;
