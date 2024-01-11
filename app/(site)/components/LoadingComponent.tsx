import React from "react";

const LoadingComponent : React.FC = () => {
  return (
    <div className="loading-container flex justify-center text-center">
      <p className="text-[#d21108] text-xl "> ⌛ Loading... please wait! </p>{" "}
    </div>
  );
}

export default LoadingComponent;
