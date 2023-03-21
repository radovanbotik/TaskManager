import React, { ReactNode } from "react";

type TableDataProps = {
  paddingLeft?: number;
  icon: ReactNode;
  data: string;
};

const TD = ({ paddingLeft, icon, data }: TableDataProps) => {
  return (
    <td className={`${paddingLeft && `pl-${paddingLeft}`}`}>
      <div className="flex items-center">
        {icon}
        <p>{data}</p>
      </div>
    </td>
  );
};

export default TD;
