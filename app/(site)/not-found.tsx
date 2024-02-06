import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="w-[100vw] h-[98vh] flex-col flex justify-center text-center items-center xs:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px]">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p> Looking for 247 Autos?</p>

      <div className="p-4 my-4 flex justify-center items-center ">
        <FaChevronLeft />

        <div className="mr-2">
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
