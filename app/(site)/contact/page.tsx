import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import whatsappIcon from "../../../public/assets/logo/logo_socials/whatsapp-icon.png";

export const metadata: Metadata = {
  title: "Contact-us",
};

export default function Contact() {
  return (
    <div className="w-full bg-[#f1f1f1]">
      <div className="contact-container bg-[#f1f1f1] min-h-[90vh] md-m-auto ">
        <div className="contact-container-heading h-[5rem] px-2 sm:px-0 min-h-[5rem] w-full text-[#2d2720]">
          <h2 className="h-full text-sm md:text-lg lg:text-xl flex justify-center items-center text-white">
            {" "}
            Get in touch! We will love to hear from you!{" "}
          </h2>
        </div>

        <div className=" flex justify-center">
          <div className="w-full lg:w-[70%] flex flex-col  my-8 xl:w-[60%] h-[90vh] px-8 ">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p> 247 autos is here to help you if you have any questions. </p>

            <div className="my-6">
              <h2> 24//7 Autos Ltd.</h2>
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
                    width={80}
                    height={80}
                    className="whatsappIcon-image rounded-sm w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] sm:w-auto "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
