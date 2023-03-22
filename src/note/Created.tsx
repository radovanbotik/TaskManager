import React from "react";
import { TaskType } from "../types/types";
import moment from "moment";

type CreatedProps = Pick<TaskType, "createdOn">;

const Created = ({ createdOn }: CreatedProps) => {
  const parseTime: (timestring: number, format: string) => string = (timestring, format) => {
    return moment(timestring).format(format);
  };

  return <p className="text-sm dark:text-gray-100">Created on: {parseTime(createdOn, "Do MMMM YYYY")}</p>;
};

export default Created;
