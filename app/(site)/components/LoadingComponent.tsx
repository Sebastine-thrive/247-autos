import React from "react";
import sandTimer from "./../../../public/assets/images/sandtimer1.gif"
import Image from "next/image";

const LoadingComponent : React.FC = () => {
  return (
    <div className="loading-container min-h-[98vh] flex justify-center text-center">
      <div className="text-[#cb9f5c] text-xl flex items-center "> <div> <Image  src={sandTimer} alt="hour glass animation" />
        </div> ⌛ Loading... please wait! </div>{" "}
    </div>
  );
}

export default LoadingComponent;
