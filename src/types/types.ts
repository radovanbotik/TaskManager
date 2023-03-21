export type TaskType = {
  createdOn: number;
  editedOn: number;
  dueTo: number;
  title: string;
  urgent: boolean;
  status: "active" | "completed";
  id: string;
};
