import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import BlogCard from "../components/blogComponents/BlogCard";
import { getBlogPostsMainData } from "../utils/utils";
import { MainBlogData } from "@/app/types/types";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const blogMainData: MainBlogData[] = await getBlogPostsMainData();

  return (
    <div className="w-full ">
      <div className="blog-container min-h-[90vh]  md:m-auto ">
        <div className="blog-container-heading h-[5rem] px-2 sm:px-0 min-h-[5rem] w-full text-[#2d2720]">
          <h2 className="h-full flex justify-center items-center text-white">
            {" "}
            Stay updated! Let good information power your drive.
          </h2>
        </div>

        <div className="w-full lg:w-[70%] xl:w-[60%]  mx-auto ">
          <div className="mt-16 flex flex-wrap justify-center gap-4 mx-auto">
            {/* Blog cards  */}

            {blogMainData.map((blogData, index) => (
              <div className="" key={index}>
                <BlogCard mainBlogData={blogData} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
