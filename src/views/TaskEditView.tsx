import React from "react";
import { useLoaderData, LoaderFunction, ActionFunction, redirect } from "react-router-dom";
import { TaskCalls } from "../calls";

export const action: ActionFunction = async ({ request, params: { taskId } }) => {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  if (taskId) {
    await TaskCalls.updateTask(taskId, body);
    return redirect(`/tasks/${taskId}`);
  }
  throw new Error("taskId does not exist");
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
