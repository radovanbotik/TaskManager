import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import TasksView, { loader as tasksLoader, action as createTask } from "./views/TasksView";
import TaskView, { loader as taskLoader } from "./views/TaskView";
import TaskEditView, { loader as EditLoader, action as updateTask } from "./views/TaskEditView";
import ErrorView from "./views/ErrorView";
import TaskDeleteView, { action as deleteTask } from "./views/TaskDeleteView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "tasks",
        element: <TasksView />,
        loader: tasksLoader,
        action: createTask,
      },
      {
        path: "tasks/:taskId",
        element: <TaskView />,
        loader: taskLoader,
      },
      {
        path: "tasks/:taskId/edit",
        element: <TaskEditView />,
        loader: EditLoader,
        action: updateTask,
      },
      {
        path: "tasks/:taskId/delete",
        action: deleteTask,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
