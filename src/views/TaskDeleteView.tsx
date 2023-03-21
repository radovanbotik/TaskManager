import React from "react";
import { redirect, ActionFunction, Form } from "react-router-dom";
import { TaskCalls } from "../calls";

export const action: ActionFunction = async ({ params: { taskId } }) => {
  if (taskId) {
    console.log(taskId);
    await TaskCalls.deleteTask(taskId);
    return redirect(`/`);
  } else throw new Error("taskId does not exist.");
};

const TaskDeleteView = () => {
  return <div></div>;
};

export default TaskDeleteView;
