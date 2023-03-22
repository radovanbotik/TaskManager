import React, { ReactNode } from "react";

type ButtonsProps = {
  type: "submit" | "reset" | "button";
  handleClick: () => void;
  icon: ReactNode;
};

const IconButton = ({ type, handleClick, icon }: ButtonsProps) => {
  return (
    <button
      type={type}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
