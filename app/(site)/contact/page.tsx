import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import whatsappIcon from "../../../public/assets/logo/logo_socials/whatsapp-icon.png";

export const metadata: Metadata = {
  title: "Contact-us",
};

export default function Contact() {
  return (
    <div className="contact-container min-h-[90vh] h-auto px-4 pb-8 lg:w-[70%] xl:w-[60%] flex flex-col justify-center items-center m-auto ">
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
        <h3>Click to send a DM</h3>
        <div className="whatsapp icon mt-2 cursor-pointer">
          <Link href="https://wa.me/2347069651539">
            {/* Image */}

            <Image
              src={whatsappIcon}
              alt="whatsapp icon"
              width={100}
              height={100}
              className="whatsappIcon-image rounded-sm w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] sm:w-auto mx-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
