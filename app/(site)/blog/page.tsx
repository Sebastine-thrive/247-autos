import React from "react";
import Image from "next/image";
import completeImage from "./../../../public/assets/images/complete.svg";

export const blogData = [
  {
    imageSrc: completeImage,
    imageAlt: "complete circle image",
    title: "Wholistic Servicing",
    description:
      "Import/buy, sales and delivery, repairs, pimping and maintenance for your ride.",
    className: "benefits__servicing",
  },
];

const page: React.FC = () => {
  return (
    <div className="blog">
      {/* car on road photo */}

      <div className="min-h-[50px] w-full"></div>

      {/*3 blog cards */}
      <div className="w-[300px] h-[300px]">
        {blogData.map((blog, index) => (
          <div key={index}>
            <div className="w-[300px] h-[150px]">
              <Image alt={blog.imageAlt} src={blog.imageSrc} />
            </div>
            <div className="p-2 rounded-sm">
              <div>
                {/* class | .  time for reading |  date */}
                <div className="flex items-center">
                  <p className="mr-2">Topic</p>
                  <div className="w-2 h-2 bg-black rounded-sm"></div>
                  <p className="ml-2">5 mins read</p>
                  <div className="w-2 h-2 bg-black rounded-sm"></div>
                  <p className="ml-2">Jan 20, 2024</p>
                </div>
              </div>
              <h4 className="my-1 capitalize"> title</h4>
            </div>
            <p className="capitalize underline my-1"> read more</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
