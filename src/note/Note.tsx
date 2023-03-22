import React, { useEffect, useState } from "react";
import { TaskType } from "../types/types";
import { Form } from "react-router-dom";
import IconAlarm from "./IconAlaram";
import IconPencil from "./IconPencil";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Title from "./Title";
import Desc from "./Desc";
import Due from "./Due";
import Created from "./Created";
import IconButton from "./IconButton";
import Urgent from "./Urgent";

const Note = ({ id, title, createdOn, dueTo, desc, urgent }: TaskType) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const confirmChanges = () => {
    setTimeout(() => setIsEditing(false), 500);
  };

  return (
    <div className="mb-6 flex h-80 w-full flex-col justify-between rounded-lg border border-yellow-400 bg-yellow-400 py-5 px-4">
      <Form method="post" action={`${id}/edit`}>
        {/* title + desc*/}
        <div>
          <Title title={title} isEditing={isEditing} />
          <Desc desc={desc} isEditing={isEditing} />
        </div>
        {/* body */}
        <div className="justify-self-end">
          <div className="mb-3 flex items-center">
            {/*Due Date */}
            <div className="flex items-center rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-400">
              <IconAlarm />
              <Due dueTo={dueTo} isEditing={isEditing} />
            </div>
          </div>
          {/* Actions */}
          <div className="flex items-center justify-between text-gray-800">
            <Created createdOn={createdOn} />
            {/* Start Edit & Confirm Edit & Cancel Edit */}
            {!isEditing && <IconButton type="button" icon={<IconPencil />} handleClick={startEditing} />}
            {isEditing && <IconButton type="submit" icon={<CheckCircleIcon />} handleClick={confirmChanges} />}
            {isEditing && <IconButton type="button" icon={<XCircleIcon />} handleClick={cancelEditing} />}
          </div>
        </div>
      </Form>
      {/* Urgent */}
      <div className="ml-2 h-8 w-8 rounded-full bg-gray-800 p-1 text-yellow-500 dark:bg-gray-100">
        <Urgent urgent={urgent} id={id} />
      </div>
    </div>
  );
};

export default Note;
