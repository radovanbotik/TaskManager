import React, { useEffect, useState } from "react";
import { useLoaderData, redirect, LoaderFunction, Form } from "react-router-dom";
import { TaskCalls } from "../calls";
import ActionNav from "../components/ActionNav";
import PillButton from "../components/PillButton";
import SubmitButton from "../components/SubmitButton";
import TaskRow from "../components/TaskRow";
import { TaskType } from "../types/types";

export const loader: LoaderFunction = async () => {
  return await TaskCalls.getTasks();
};

export const action = async () => {
  const { id } = await TaskCalls.createTask();
  // return redirect(`${id}/edit`);
  return "hello";
};

const TasksView = () => {
  const fetchedTasks = useLoaderData() as TaskType[];
  const [tasks, setTasks] = useState<TaskType[]>(fetchedTasks);
  const [category, setCategory] = useState("all");

  const handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = e => {
    setCategory(e.currentTarget.value);
  };

  useEffect(() => {
    if (category === "all") {
      return setTasks(fetchedTasks);
    }
    if (category === "active") setTasks(fetchedTasks.filter(task => task.status === "active"));
    if (category === "completed") setTasks(fetchedTasks.filter(task => task.status === "completed"));
  }, [category]);

  return (
    <div className="w-full bg-white py-4 px-4 md:py-7 md:px-8 xl:px-10">
      <div className="items-center justify-between sm:flex">
        <div className="flex items-center">
          <PillButton type="button" handleClick={handleClick} value="all">
            All
          </PillButton>
          <PillButton type="button" handleClick={handleClick} value="completed">
            Done
          </PillButton>
          <PillButton type="button" handleClick={handleClick} value="active">
            Pending
          </PillButton>
        </div>
        <Form method="post">
          <SubmitButton type="submit">Add Task</SubmitButton>
        </Form>
      </div>
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
