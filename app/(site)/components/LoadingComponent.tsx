import React from "react";

const LoadingComponent : React.FC = () => {
  return (
    <div className="loading-container flex justify-center text-center">
      <p className="text-[#cb9f5c] text-xl "> ⌛ Loading... please wait! </p>{" "}
    </div>
  );
}

export default LoadingComponent;
