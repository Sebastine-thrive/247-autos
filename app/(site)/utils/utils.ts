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

export function formatPriceInMillion(price: number): string {
  const carPriceInMillion = (price / 1000000).toFixed(2);
  return ` ${carPriceInMillion}M`;
}

// *[_type == 'movie' && releaseYear >= 1979]
