import { client } from "@/sanity/lib/client";

export async function getFirstFewProductsOnSale() {
  const productQuery = `*[_type == "product" && sold != true][0...4]`;
  const firstTenCarsOnSale = await client.fetch(productQuery, {
    // revalidate every 12 hours
    // next: { revalidate: 43200 },
  });
  if (!firstTenCarsOnSale) {
    throw new Error("No cars-on-sale found");
  }
  return firstTenCarsOnSale;
}

export async function getFirstFewProductSold() {
  const productQuery = `*[_type == "product" && sold == true][0...4]`;
  const firstTenCarsOnSale = await client.fetch(productQuery, {
    // revalidate every 12 hours
    // next: { revalidate: 43200 },
  });
  if (!firstTenCarsOnSale) {
    throw new Error("No cars-on-sale found");
  }
  return firstTenCarsOnSale;
}

export async function getAllProductsOnSaleInBatches() {
  const productQuery = `*[_type == "product" && sold != true]`;
  const AllCarsOnSale = await client.fetch(productQuery, {
    // revalidate every 12 hours
    // next: { revalidate: 43200 },
  });
  if (!AllCarsOnSale) {
    throw new Error("Could not get all the cars on sale");
  }
  return AllCarsOnSale;
}

export function formatPriceInMillion(price: number) {
  const carPriceInMillion = (price / 1000000).toFixed(2);
  return ` ${carPriceInMillion}M`;
}

export async function searchByNameOrBrand(searchTerm: string) {
  const filters = `_type == "products" && (brand === ${searchTerm} || name === ${searchTerm})`;
  const baseQuery = `*[${filters}]`;

  const query = baseQuery;

  const searchedProducts = await client.fetch(query, { cache: "no-store" });
  if (!searchedProducts) {
    throw new Error("Could not get any products with that name or brand");
  }
  return searchedProducts;
}

export async function getBlogPostsMainData() {
  const blogQuery = `*[_type == "blog"]{title, category, images, publishedAt, timeTakenToComplete,slug}
  `;
  const blogPostsMainData = await client.fetch(
    blogQuery,
    { cache: "no-store" }
    // revalidate every 12 hours
  );
  if (!blogPostsMainData) {
    throw new Error("Could not get the blogs");
  }
  return blogPostsMainData;
}

export async function getBlogPosts() {
  const blogQuery = `*[_type == "blog"]`;
  const blogPosts = await client.fetch(
    blogQuery,
    { cache: "no-store" }
    // { next: { revalidate: 60 } }
  );
  if (!blogPosts) {
    throw new Error("Could not get the blogs");
  }
  return blogPosts;
}

export async function getTableOfContents() {
  const query = `*[ _type == "blog" ] {
  body,
  "headings": body[length(style) == 2 && string::startsWith(style, "h")]
}`;
  const TableOfContents = await client.fetch(query);
  if (!TableOfContents) {
    throw new Error("Could not fetch the table of contents");
  }
  return TableOfContents;
}

export function formatDate(publishedAt: Date): string {
  const date = new Date(publishedAt);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

