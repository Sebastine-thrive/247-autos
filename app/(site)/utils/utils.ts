import { client } from "@/sanity/lib/client";

export async function getFirstTenProductsOnSale() {
  const productQuery = `*[_type == "product"][0...4]`;
  const firstTenCarsOnSale = await client.fetch(productQuery, {
    // cache: "no-store",
    next: { revalidate: 3600 }
  });
  if (!firstTenCarsOnSale) {
    throw new Error("No cars-on-sale found");
  }
  return firstTenCarsOnSale;
}

export async function getAllProductsOnSaleInBatches() {
  const productQuery = `*[_type == "product"]`;
  const AllCarsOnSale = await client.fetch(productQuery);
  if (!AllCarsOnSale) {
    throw new Error("Could not get all the cars on sale");
  }
  return AllCarsOnSale;
}
