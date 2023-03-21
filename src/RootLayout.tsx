import React from "react";
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
