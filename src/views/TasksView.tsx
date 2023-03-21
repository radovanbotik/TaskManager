import React from "react";
import { useLoaderData, redirect, LoaderFunction, Form } from "react-router-dom";
import { TaskCalls } from "../calls";

export const loader: LoaderFunction = async () => {
  return await TaskCalls.getTasks();
};

export const action = async () => {
  const { id } = await TaskCalls.createTask();
  return redirect(`${id}/edit`);
};

const TasksView = () => {
  const tasks = useLoaderData();
  return (
    <div>
      <Form method="post">
        <button type="submit">create</button>
      </Form>
    </div>
  );
};

export default TasksView;
