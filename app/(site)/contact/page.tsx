import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact-us",
};

export default function Contact() {
  return (
    <div className="contact-container min-h-[90vh] h-auto px-4 py-8 lg:w-[70%] xl:w-[60%] flex flex-col justify-center items-center m-auto ">
      <div className=" contact-heading">
        <h1 className="text-2xl">Contact Us</h1>
        <p> 247 autos is here to help you if you have any questions. </p>
      </div>

      <div className="my-6">
        <h2> True Car Autos Ltd.</h2>
        <p className="capiltalize">
          {" "}
          35 Willie Obiano Street; by Obunagu Road,
          <br /> Awka, Anambra State.
        </p>
      </div>

      <div className="mb-6 customer-support">
        {/* Customer support */}
        <h3 className="">Customer Support</h3>
        <p className=""> +2347069651539 </p>
      </div>

      <div className="mb-6 customer-support">
        {/* Customer support */}
        <h3 className="">Send a DM</h3>
        <div>
          {/* <Image src={} alt="whatsapp icon" /> */}
        </div>
      </div>
    </div>
  );
}
