import React from "react";
import { useLoaderData, LoaderFunction, ActionFunction, Form, redirect } from "react-router-dom";
import { TaskCalls } from "../calls";
import Task from "../components/Task";
import { TaskType } from "../types/types";

export const loader: LoaderFunction = async ({ params: { taskId } }) => {
  if (taskId) return await TaskCalls.getTask(taskId);
  throw new Error("no Id matching");
};
const TaskView = () => {
  const task = useLoaderData() as TaskType;
  return (
    <div className="w-full bg-white py-4 px-4 md:py-7 md:px-8 xl:px-10">
      <div className="mt-7 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <Task {...task} />
        </table>
      </div>
    </div>
  );
};

export default TaskView;
