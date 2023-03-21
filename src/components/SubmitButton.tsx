import React, { ReactNode } from "react";

type ButtonProps = {
  type: "submit" | "button" | "reset";
  children: ReactNode;
};

const SubmitButton = ({ type, children }: ButtonProps) => {
  return (
    <button
      // onclick="popuphandler(true)"
      type={type}
      className="mt-4 inline-flex items-start justify-start rounded bg-indigo-700 px-6 py-3 hover:bg-indigo-600 focus:outline-none sm:mt-0"
    >
      <p className="text-sm font-medium leading-none text-white">{children}</p>
    </button>
  );
};

export default SubmitButton;
