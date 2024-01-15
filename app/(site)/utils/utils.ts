import { client } from "@/sanity/lib/client";

export async function getBestSellingProducts() {
    const productQuery = `*[_type == "product"]`;
    const carsData = await client.fetch(productQuery);
    if (!carsData) {
      throw new Error("No product found");
    }
    return carsData;
  }