import { BlogCardProps, MainBlogData } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/lib/image";
import { formatDate } from "../../utils/utils";

const BlogCard: React.FC<BlogCardProps> = ({ mainBlogData }) => {
  const { title, publishedAt, category, images, timeTakenToComplete, slug } =
    mainBlogData;
  // const formattedDate: string = publishedAt?.toLocaleDateString();

  // const date = new Date(publishedAt);
  // const formattedDate = date.toLocaleDateString("en-US", {
  //   day: "2-digit",
  //   month: "long",
  //   year: "numeric",
  // });

  // console.log(mainBlogData);
  return (
    <div className="blog-card w-[300px] h-[300px] rounded-md cursor-pointer border border-customYellow">
      <div className="w-[300px] max-h-[200px] rounded-md">
        <Image
          src={images?.length > 0 ? urlForImage(images[0]) : ""}
          alt="blog post pic"
          width={300}
          height={150}
          className="w-[300px] h-[180px] rounded-t-md bg-black"
          priority
        />
      </div>
      <div className="p-2 rounded-sm max-h-[200px]">
        <div>
          {/* class | .  time for reading |  date */}
          <div className="flex items-center text-[#636b8a] capitalize text-xs">
            <p className="mr-1">{category}</p>
            <p className="dot text-lg font-bold mb-[5px]">.</p>
            <p className="mx-1">{timeTakenToComplete} mins read</p>
            <p className="dot text-lg font-bold  mb-[5px]">.</p>
            <p className="ml-1">{formatDate(publishedAt)}</p>
          </div>
        </div>
        <h4 className="my-1 capitalize text-black"> {title}</h4>
        <Link href={`/blog/${slug?.current}`} className="blog-card-link">
          <p className="capitalize inline-block underline my-2 text-black cursor-pointer hover:text-[#cb9f5c]">
            {" "}
            Read more
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
