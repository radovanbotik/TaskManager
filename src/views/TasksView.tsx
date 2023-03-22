import React, { useEffect, useState } from "react";
import { useLoaderData, redirect, LoaderFunction, Form } from "react-router-dom";
import { TaskCalls } from "../calls";
import PillButton from "../components/PillButton";
import SubmitButton from "../components/SubmitButton";
import { TaskType } from "../types/types";
import Note from "../note/Note";

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
  }, [category, fetchedTasks]);

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
      <div className="container mx-auto py-20 px-6">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tasks.map(task => (
            <Note key={task.id} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksView;
