import React from "react";
import { useLoaderData, LoaderFunction, ActionFunction } from "react-router-dom";
import { TaskCalls } from "../calls";

export const action: ActionFunction = async ({ request, params: { taskId } }) => {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  if (taskId) return await TaskCalls.updateTask(taskId, body);
};

export const loader: LoaderFunction = async ({ params: { taskId } }) => {
  if (taskId) return await TaskCalls.getTask(taskId);
  throw new Error("taskId does not exist");
};

const TaskEditView = () => {
  const task = useLoaderData();
  console.log(task);
  return <div></div>;
};

export default TaskEditView;
