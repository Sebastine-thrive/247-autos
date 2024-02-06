import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

export async function getFirstTenProductsOnSale() {
  const productQuery = `*[_type == "product"][0...4]`;
  const firstTenCarsOnSale = await client.fetch(productQuery, {
    cache: "no-store",
  });
  if (!firstTenCarsOnSale) {
    throw new Error("No cars-on-sale found");
  }
  return firstTenCarsOnSale;
}

export async function getAllProductsOnSaleInBatches() {
  const productQuery = `*[_type == "product"]`;
  const AllCarsOnSale = await client.fetch(productQuery, { cache: "no-store" });
  if (!AllCarsOnSale) {
    throw new Error("Could not get all the cars on sale");
  }
  return AllCarsOnSale;
}

export function formatPriceInMillion(price: number): string {
  const carPriceInMillion = (price / 1000000).toFixed(2);
  return ` ${carPriceInMillion}M`;
}

// const firstTenCarsOnSale = await client.fetch(productQuery, {
//   cache: "no-store",
//   // next: { revalidate: 3600 }
// });
