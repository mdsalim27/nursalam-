import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1320px] w-full mx-auto px-4 lg:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;