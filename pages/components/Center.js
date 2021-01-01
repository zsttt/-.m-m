
import React from "react";

const Center = ({ children }) => {
  return (
    <div className="flex flex-col justify-center h-screen bg-red-400">{children}</div>
  );
};

export default Center;