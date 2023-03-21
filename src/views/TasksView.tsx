import React from "react";
import { useLoaderData, redirect, LoaderFunction, Form } from "react-router-dom";
import { TaskCalls } from "../calls";
import TaskRow from "../components/TaskRow";
import { TaskType } from "../types/types";

export const loader: LoaderFunction = async () => {
  return await TaskCalls.getTasks();
};

export const action = async () => {
  const { id } = await TaskCalls.createTask();
  return redirect(`${id}/edit`);
};

const TasksView = () => {
  const tasks = useLoaderData() as TaskType[];
  return (
    <div className="bg-white py-4 px-4 md:py-7 md:px-8 xl:px-10">
      <div className="mt-7 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <tbody>
            {tasks.map(task => (
              <TaskRow key={task.id} {...task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksView;
