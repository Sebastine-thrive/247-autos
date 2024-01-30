import ProductFrame from "../components/productDisplay/ProductFrame";
import { getAllProductsOnSaleInBatches } from "../utils/utils";

export default async function Cars() {
  const allCarsForSale = await getAllProductsOnSaleInBatches();
  return (
    <div className="cars">
      <div>{/* car image */}</div>
      <div>
        <ProductFrame products={allCarsForSale} />
      </div>
    </div>
  );
}
