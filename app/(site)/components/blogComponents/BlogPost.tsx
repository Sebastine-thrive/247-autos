"use client";
import { useState } from "react";
import { BlogProps } from "@/app/types/types";
import Image from "next/image";
// import { BlogPortableTextComponent } from "./PortableTextComponents";
import { formatDate } from "../../utils/utils";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
// import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link";

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

  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // const url = window.location.href;
  const hashtags = ["#iKnowMyCars"];

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

      <div className="bg-white mt-8 z-20 min-h-[50vh] mx-auto  w-full px-4 lg:px-8 md:[w-80%] lg:w-[70%] xl:w-[60%] max-w-full">
        <div className="blogPage-header py-4 px-1 bg-customYellow">
          <h1 className="text-black">{title} </h1>
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="flex flex-col md:block ">
                {" "}
                <span className="mt-2">
                  {" "}
                  By <span className="mr-0 text-black "> {author} </span>{" "}
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
              <p> Share this article on: </p>
              <div className="flex ">
                {/* Facebook */}
                <div className="facebook-share mx-1">
                  <FacebookShareButton url={currentUrl} hashtag="#iKnowMyCars">
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                </div>
                {/* Twitter */}
                <div className="twitter-share mx-1">
                  <TwitterShareButton
                    url={currentUrl}
                    hashtags={hashtags}
                    title={title}
                  >
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </div>
                {/* Whatsapp Share */}
                <div className="whatsapp-share mx-1">
                  <WhatsappShareButton
                    url={currentUrl}
                    title={title}
                    separator="--"
                  >
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 mx-1 flex justify-between w-full">
            <Link href="/blog">
              <div className="flex items-center hover:underline">
                <div className="mr-2">
                  <MdOutlineKeyboardBackspace />
                </div>
                <p>Back to Blog</p>
              </div>
            </Link>

            <Link href="/cars">
              <div className="flex items-center text-customRed hover:underline px-2">
                <div className="mr-2">
                  <MdOutlineKeyboardBackspace />
                </div>
                <p>Shop Cars</p>
              </div>
            </Link>
          </div>


          
          {/* Share display on small screens */}
          <div className="flex md:hidden">
            <p> Share this article on: </p>
            <div className="flex ml-2 ">
              {/* Facebook */}
              <div className="facebook-share mx-3">
                <FacebookShareButton url={currentUrl} hashtag="iKnowMyCars">
                  <FacebookIcon size={20} round={true} />
                </FacebookShareButton>
              </div>
              {/* Twitter */}
              <div className="twitter-share mx-3">
                <TwitterShareButton
                  url={currentUrl}
                  hashtags={hashtags}
                  title={title}
                >
                  <TwitterIcon size={20} round={true} />
                </TwitterShareButton>
              </div>
              {/* Whatsapp Share */}
              <div className="whatsapp-share mx-3">
                <WhatsappShareButton
                  url={currentUrl}
                  title={title}
                  separator="--"
                >
                  <WhatsappIcon size={20} round={true} />
                </WhatsappShareButton>
              </div>
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
