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

  const products = await client.fetch(query);
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

// async function displayOtherProducts(arr, slugValue) {
//   return arr.filter((obj) => obj.slug.current !== slugValue);
// }

export default async function ProductDetailsPage({
  params: { slug },
}: {
  params: { slug: Slug };
}) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const product = await client.fetch(query);

  //   const allProducts = await getProducts();
  //   const otherProducts = await displayOtherProducts(allProducts, slug);

  return <ProductDetails product={product} />;
}

//   products={otherProducts}
//   slug={slug} />;
