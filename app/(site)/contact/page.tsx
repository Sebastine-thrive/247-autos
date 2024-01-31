import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen p-4 lg:w-[70%] xl:w-[60%] flex flex-col m-auto">
      <div className="mt-8 mb-2 border-b-1 border-customYellow">
        <h1 className="text-2xl my-2">Contact Us</h1>
        <p> 247 autos is here to help you if you have any questions. </p>
      </div>

      <div className="mt-2">
        <h2> True Car Autos Ltd.</h2>
        <p className="mt-1 capiltalize">
          {" "}
          35 Willie Obiano Street; by Obunagu Road,
          <br /> Awka, Anambra State.
        </p>
      </div>

      <div className="mt-2">
        {/* Customer support */}
        <h3 className="mt-1">Customer Support</h3>
        <p className="mt-1"> +234 </p>
        <div>
          {/* <p> Whatsapp link</p> */}

          <Image 
          src=''
          alt=""
          />
        </div>
      </div>
    </div>
  );
}
