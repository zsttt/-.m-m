
import React from "react";

const Stack = ({ children }) => {
  return (
    <div className="flex flex-col text-center items-center  bg-blue-100">
        {children}
    </div>
  );
};

export default Stack;