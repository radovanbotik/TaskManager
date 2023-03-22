export type TaskType = {
  title: string;
  desc: string;
  createdOn: number;
  dueTo: number;
  urgent: "true" | "false";
  status: "active" | "completed";
  id: string;
};
