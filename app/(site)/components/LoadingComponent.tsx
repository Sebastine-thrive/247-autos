import React from "react";
import sandTimer from "./../../../public/assets/images/sandtimer1.gif";
import Image from "next/image";

const LoadingComponent: React.FC = () => {
  return (
    <div className="loading-container min-h-[98vh] flex justify-center text-center">
      <div className="text-[#cb9f5c] text-xl flex justify-center ">
        <div className="flex items-center">
          {" "}
          <Image src={sandTimer} width={100} height={100}  alt="hour glass animation" />
          <p className="ml-4"> Loading... please wait! </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default LoadingComponent;
