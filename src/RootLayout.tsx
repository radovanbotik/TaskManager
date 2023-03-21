import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex bg-red-800">
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
