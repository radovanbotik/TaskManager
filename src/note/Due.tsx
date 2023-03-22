import React from "react";
import moment from "moment";
import { TaskType } from "../types/types";

type DueProps = Pick<TaskType, "dueTo"> & { isEditing: boolean };

const Due = ({ dueTo, isEditing }: DueProps) => {
  const parseTime: (timestring: number, format: string) => string = (timestring, format) => {
    return moment(timestring).format(format);
  };

  const parseTimeInput: (timestring: number) => string = timestring => {
    return moment(timestring).format("YYYY-MM-D");
  };

  if (isEditing)
    return <input type="date" defaultValue={parseTimeInput(dueTo)} className="ml-2 dark:text-gray-400" name="dueTo" />;

  return <p className="ml-2 dark:text-gray-400">{parseTime(dueTo, "Do MMMM")}</p>;
};

export default Due;
