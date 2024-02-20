import { client } from "@/sanity/lib/client";
import { BlogData } from "@/app/types/types";
import { Slug } from "@/app/types/types";
import BlogPost from "../../components/blogComponents/BlogPost";

export async function generateStaticParams() {
  const query = `*[_type == "blog"] {
    slug {
      current
    }
  }
  `;

  const blogPosts = await client.fetch(query, { cache: "no-store" });
  return blogPosts.map((posts: BlogData) => ({
    slug: posts?.slug?.current,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: Slug };
}) {
  return {
    title: `${slug}`,
  };
}

export default async function BlogPostDetailsPage({
  params: { slug },
}: {
  params: { slug: Slug };
}) {
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;

  const blogDetails = await client.fetch(query);

  return <BlogPost blog={blogDetails} />;
}
