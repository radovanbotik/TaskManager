import React from "react";

const TDCreated = () => {
  return (
    <td className="pl-5">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
          <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M4.16669 5V5.00667"
            stroke="#52525B"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16669 10V10.0067"
            stroke="#52525B"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16669 15V15.0067"
            stroke="#52525B"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="ml-2 text-sm leading-none text-gray-600">04/07</p>
      </div>
    </td>
  );
};

export default TDCreated;
