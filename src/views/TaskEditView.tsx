import React from "react";
import { useLoaderData, LoaderFunction, ActionFunction, redirect, Form } from "react-router-dom";
import { TaskCalls } from "../calls";

export const action: ActionFunction = async ({ request, params: { taskId } }) => {
  const formData = await request.formData();
  const body = { ...Object.fromEntries(formData) };
  console.log("triggered");
  if (taskId) {
    await TaskCalls.updateTask(taskId, body);
    return redirect(`/tasks`);
  }
  throw new Error("taskId does not exist");
};

export const loader: LoaderFunction = async ({ params: { taskId } }) => {
  if (taskId) return await TaskCalls.getTask(taskId);
  throw new Error("taskId does not exist");
};

const TaskEditView = () => {
  return <div></div>;
};

export default TaskEditView;
