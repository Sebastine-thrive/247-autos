import { BlogProps } from "@/app/types/types";
import Image from "next/image";
// import { BlogPortableTextComponent } from "./PortableTextComponents";
import { formatDate } from "../../utils/utils";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

// import { TableOfContents } from "./FindHeadings";
// import { client } from "@/sanity/lib/client";

const BlogPost: React.FC<BlogProps> = ({ blog }) => {
  const {
    title,
    author,
    category,
    publishedAt,
    timeTakenToComplete,
    body1,
    body2,
    images,
    postImages,
    summary,
    references,
  } = blog;
  // console.log(author, paragraph1);

  // const outline = await getTableOfContents();

  // console.log(outline)
  return (
    <div className="bg-[#f1f1f1]">
      <div className="h-[50vh] z-10 lg:h-[60vh] py-4 bg-black">
        <Image
          src={images?.length > 0 ? urlForImage(images[0]) : ""}
          alt="blog main image"
          className="w-full h-[50vh] lg:h-fit max-h-[60vh] bg-black mb-4"
          width={100}
          height={50}
          priority
        />
      </div>
      {/* <div className="blog-container min-h-[90vh] w-[100%] mx-8 md:[w-80%] lg:w-[70%] xl:w-[60%] flex flex-col  md:m-auto bg-[#f1f1f1]"> */}

      <div className="bg-white mt-8 z-20 min-h-[50vh] mx-auto  w-full px-4 lg:px-8 md:[w-80%] lg:w-[70%] xl:w-[60%] max-w-full">
        <div className="blogPage-header py-4 px-1 bg-customYellow">
          <h1 className="text-black">{title} </h1>
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="flex flex-col md:block ">
                {" "}
                <span className="mt-2">
                  {" "}
                  By <span className="mr-0 "> {author} </span>{" "}
                </span>{" "}
                <span className="ml-0 md:ml-2">{formatDate(publishedAt)} </span>
              </p>
              <p>
                {" "}
                <span className="mr-1 capitalize"> {category}</span> |{" "}
                <span className="ml-1">{timeTakenToComplete} mins</span>
              </p>
            </div>
            <div className="hidden md:block">
              <p> Share this article: Faceboook | Twitter </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-2">
          {/* Blog content */}
          <div className="my-1">
            {/* <h2> Table of contents </h2> */}
            {/* <TableOfContents outline = {outline} /> */}
          </div>
          {/* Main Blog Posts */}
          <div className="blog-posts my-2 px-1 ">
            <div className="">
              <PortableText value={body1} />
              {/* <BlogPortableTextComponent props={body1} /> */}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center lg:items-start mt-2">
              {postImages.map((image, index) => (
                <Image
                  src={urlForImage(image)}
                  key={index}
                  alt="blog post images"
                  width={200}
                  height={150}
                  priority
                  className=" w-[200] h-[150px] mx-2 md:mx-1"
                />
              ))}
            </div>
            <div>
              <PortableText value={body2} />
              {/* <BlogPortableTextComponent props={body2} /> */}
            </div>
          </div>
          <div className="summary mt-2">
            <PortableText value={summary} />
          </div>
          <div className="summary mt-2 overflow-hidden">
            <PortableText value={references} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPost;
