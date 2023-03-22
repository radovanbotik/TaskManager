import axios, { AxiosResponse } from "axios";
import { TaskType } from "./types/types";

const instance = axios.create({
  baseURL: "https://64142c6e7d342ac7c4e4e933.mockapi.io/",
  timeout: 10000,
});

const response = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(response),
  post: (url: string, body: {}) => instance.post(url, body).then(response),
  put: (url: string, body: {}) => instance.put(url, body).then(response),
  delete: (url: string) => instance.delete(url).then(response),
};

export const TaskCalls = {
  getTasks: (): Promise<TaskType[]> => requests.get("task"),
  getTask: (taskId: string): Promise<TaskType> => requests.get(`task/${taskId}`),
  createTask: (): Promise<Partial<TaskType>> =>
    requests.post("task", {
      id: Math.random().toString(36).substring(2, 9),
      createdOn: Date.now(),
      dueTo: Date.now(),
      status: "active",
      urgent: "false",
      desc: "This is an editable field...",
      title: "New Task",
    }),
  updateTask: (taskId: string, body: TaskType | Partial<TaskType>): Promise<TaskType> =>
    requests.put(`task/${taskId}`, body),
  deleteTask: (taskId: string): Promise<void> => requests.delete(`task/${taskId}`),
};
