import React from "react";
import { TaskType } from "../types/types";
import { useFetcher } from "react-router-dom";
import { ExclamationCircleIcon as ExclamationSolid } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon as ExclamationOutline } from "@heroicons/react/24/outline";

type UrgentProps = Pick<TaskType, "urgent"> & Pick<TaskType, "id">;

const Urgent = ({ urgent, id }: UrgentProps) => {
  const fetcher = useFetcher();
  let isUrgent = urgent;

  return (
    <fetcher.Form method="post" action={`${id}/edit`}>
      <button className="h-full w-full" name="urgent" value={`${isUrgent === "true" ? "false" : "true"}`} type="submit">
        {isUrgent === "true" ? <ExclamationSolid /> : <ExclamationOutline />}
      </button>
    </fetcher.Form>
  );
};

export default Urgent;
