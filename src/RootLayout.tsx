import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex bg-red-800">
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex w-full justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
