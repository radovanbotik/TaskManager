import React from "react";
import { TaskType } from "../types/types";

type TitleProps = Pick<TaskType, "title"> & { isEditing: boolean };

const Title = ({ title, isEditing }: TitleProps) => {
  if (isEditing)
    return (
      <textarea
        className="mb-3 block w-full resize-none font-bold text-gray-800 dark:text-gray-100"
        defaultValue={title}
        name="title"
        wrap="soft"
      />
    );
  return <h4 className="mb-3 font-bold text-gray-800 dark:text-gray-100">{title}</h4>;
};

export default Title;
