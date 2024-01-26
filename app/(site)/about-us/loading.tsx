import React from "react";
import LoadingComponent from "./../components/LoadingComponent";

const loading: React.FC = () => {
  return (
    <div className="mt-[5rem] flex justify-center text-center">
      <LoadingComponent />
    </div>
  );
};

export default loading;
