import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorView = () => {
  const error = useRouteError() as Error;
  console.log(error);
  return <div>{error.message}</div>;
};

export default ErrorView;
