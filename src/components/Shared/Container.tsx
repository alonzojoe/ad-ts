import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {children}
    </div>
  );
};

export default Container;
