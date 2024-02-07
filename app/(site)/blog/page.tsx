import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { BlogData } from "./../components/blogComponents/BlogData";

export const metadata: Metadata = {
  title: "Blog",
};

const page: React.FC = () => {
  return (
    <div className="blog-container min-h-[90vh] p-4 lg:w-[70%] xl:w-[60%] flex flex-col justify-center items-center m-auto">
      <div className="blog-container-heading mt-2  min-h-[80px] p-2 text-white text-2xl font-bold flex flex-col items-center text-center">
        <h2> The Blog is upcoming. Watch this space for it!</h2>
      </div>

      {/*3 blog cards */}
      <div className="">
        {BlogData.map((blog, index) => (
          <div key={index} className="w-[300px] h-[400px]">
            <div className="w-[300px] max-h-[200px]">
              <Image
                alt={blog.imageAlt}
                src={blog.imageSrc}
                width={300}
                height={150}
              />
            </div>
            <div className="p-2 rounded-sm max-h-[150px]">
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
