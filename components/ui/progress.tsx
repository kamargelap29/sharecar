import * as React from "react";
// import { Container } from "../layout";

export const Progress = () => {
  return (
    <div className="relative flex bg-sc-light outline-none p-2 w-full rounded-full">
      <div className="absolute inset-0 bg-gradient-to-tr from-sc-green to-sc-blue rounded-full animate-runProgress "></div>
    </div>
  );
};
