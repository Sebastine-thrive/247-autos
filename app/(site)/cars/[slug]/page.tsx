import { client } from "@/sanity/lib/client";
import { Product } from "@/app/types/types";
import { Slug } from "@/app/types/types";
import ProductDetails from "../../components/productDetails/ProductDetails";

export async function generateStaticParams() {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query, { cache: "no-store" });
  return products.map((cars: Product) => ({
    slug: cars?.slug?.current,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: Slug };
}) {
  return {
    title: `${slug}`,
    description: `{Buy genuine ${slug} with ease at fair prices}`,
  };
}

export default async function ProductDetailsPage({
  params: { slug },
}: {
  params: { slug: Slug };
}) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const product = await client.fetch(query);

  return <ProductDetails product={product} />;
}