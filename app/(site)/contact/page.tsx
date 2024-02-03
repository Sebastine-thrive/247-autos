import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact-us",
};

export default function Contact() {
  return (
    <div className="min-h-[90vh] p-4 lg:w-[70%] xl:w-[60%] flex flex-col items-center m-auto">
      <div className="my-4 border-b-1 border-[#616161]">
        <h1 className="text-2xl -1">Contact Us</h1>
        <p> 247 autos is here to help you if you have any questions. </p>
      </div>

      <div className="my-2">
        <h2> True Car Autos Ltd.</h2>
        <p className="-1 capiltalize">
          {" "}
          35 Willie Obiano Street; by Obunagu Road,
          <br /> Awka, Anambra State.
        </p>
      </div>

      <div className="my-2">
        {/* Customer support */}
        <h3 className="-1">Customer Support</h3>
        <p className="-1"> +2347069651539 </p>
      </div>
    </div>
  );
}
