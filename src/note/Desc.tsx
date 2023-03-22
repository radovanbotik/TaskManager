import React from "react";
import { TaskType } from "../types/types";

type DescProps = Pick<TaskType, "desc"> & { isEditing: boolean };

const Desc = ({ desc, isEditing }: DescProps) => {
  if (isEditing)
    return (
      <textarea
        className="block w-full resize-none text-sm text-gray-800 dark:text-gray-100"
        defaultValue={desc}
        name="desc"
      />
    );
  return <p className="text-sm text-gray-800 dark:text-gray-100">{desc}</p>;
};

export default Desc;
