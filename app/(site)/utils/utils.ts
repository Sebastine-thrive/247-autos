import { client } from "@/sanity/lib/client";

export async function getFirstTenProductsOnSale() {
    const productQuery = `*[_type == "product"][0...2]`;
    const firstTenCarsOnSale = await client.fetch(productQuery);
    if (!firstTenCarsOnSale) {
      throw new Error("No cars-on-sale found");
    }
    return firstTenCarsOnSale;
  }