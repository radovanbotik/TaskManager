import React from "react";
import { useLoaderData, LoaderFunction, ActionFunction, redirect, Form } from "react-router-dom";
import { TaskCalls } from "../calls";
import TaskRow from "../components/TaskRow";
import { TaskType } from "../types/types";
import moment from "moment";
import TableLink from "../components/TableLink";

export const action: ActionFunction = async ({ request, params: { taskId } }) => {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  console.log(body);
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
  const task = useLoaderData() as TaskType;
  const parseTime: (timestring: number) => string = timestring => {
    return moment(timestring).format("YYYY-MM-D");
  };

  return (
    <div className="w-full bg-white py-4 px-4 md:py-7 md:px-8 xl:px-10">
      <div className="mt-7 overflow-x-auto">
        <Form method="post">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr className="h-16 rounded border border-gray-100">
                {/* name */}
                <td className="">
                  <div className="flex items-center pl-5">
                    <input
                      className="mr-2 text-base font-medium leading-none text-gray-700"
                      defaultValue={task.title}
                      name="title"
                    />
                  </div>
                </td>
                {/* urgent */}
                <td className="pl-24">
                  <div className="flex items-center">
                    {/* <IconUrgent /> */}
                    <select
                      className="ml-2 text-sm leading-none text-gray-600"
                      defaultValue={task.urgent}
                      name="urgent"
                    >
                      <option value="true">urgent</option>
                      <option value="false">not urgent</option>
                    </select>
                  </div>
                </td>
                {/* created */}
                <td className="pl-5">
                  <div className="flex items-center">
                    {/* <IconCreated /> */}
                    <input
                      className="ml-2 text-sm leading-none text-gray-600"
                      type="date"
                      name="createdOn"
                      defaultValue={parseTime(task.createdOn)}
                    />
                  </div>
                </td>
                {/* edited */}
                <td className="pl-5">
                  <div className="flex items-center">
                    {/* <IconEdited /> */}
                    <input
                      className="ml-2 text-sm leading-none text-gray-600"
                      type="date"
                      name="editedOn"
                      defaultValue={parseTime(task.editedOn)}
                    />
                  </div>
                </td>
                {/* due */}
                <td className="pl-5">
                  Due
                  <input
                    className={`rounded  py-3 px-3 text-sm leading-none   focus:outline-none`}
                    defaultValue={parseTime(task.dueTo)}
                    type="date"
                    name="dueTo"
                  />
                </td>
                <td>
                  <button
                    className="block w-full cursor-pointer py-4 px-4 text-xs hover:bg-indigo-700 hover:text-white"
                    type="submit"
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
        {/* <Form action="delete" method="post">
          <button
            className="block w-full cursor-pointer py-4 px-4 text-xs hover:bg-indigo-700 hover:text-white"
            type="submit"
          >
            delete
          </button>
        </Form> */}
      </div>
    </div>
  );
};

export default TaskEditView;
