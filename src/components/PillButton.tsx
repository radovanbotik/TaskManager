import React, { ReactNode } from "react";

type PillButtonProps = {
  type: "button" | "submit" | "reset";
  value: "all" | "completed" | "active";
  children: ReactNode;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const PillButton = ({ type, children, value, handleClick }: PillButtonProps) => {
  return (
    <button value={value} onClick={e => handleClick(e)}>
      <div className="rounded-full bg-indigo-100 py-2 px-8 text-indigo-700">
        <p>{children}</p>
      </div>
    </button>
  );
};

export default PillButton;
