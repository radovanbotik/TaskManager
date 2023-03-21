import React from "react";
import { useLoaderData, LoaderFunction, ActionFunction, Form, redirect } from "react-router-dom";
import { TaskCalls } from "../calls";

export const loader: LoaderFunction = async ({ params: { taskId } }) => {
  if (taskId) return await TaskCalls.getTask(taskId);
  throw new Error("no Id matching");
};
const TaskView = () => {
  const task = useLoaderData();
  return (
    <div>
      task view
      <Form method="post" action="delete">
        <button type="submit">delete</button>
      </Form>
    </div>
  );
};

export default TaskView;
