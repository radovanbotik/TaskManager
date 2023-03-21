export type TaskType = {
  createdOn: number;
  editedOn: number;
  dueTo: number;
  title: string;
  urgent: boolean;
  status: "active" | "finished";
  id: string;
};
