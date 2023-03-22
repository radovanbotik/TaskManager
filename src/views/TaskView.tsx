import React from "react";
import { useLoaderData, LoaderFunction, ActionFunction, Form, redirect } from "react-router-dom";
import { TaskCalls } from "../calls";
import { TaskType } from "../types/types";

export const loader: LoaderFunction = async ({ params: { taskId } }) => {
  if (taskId) return await TaskCalls.getTask(taskId);
  throw new Error("no Id matching");
};
const TaskView = () => {
  const task = useLoaderData() as TaskType;
  return <div></div>;
};

export default TaskView;
