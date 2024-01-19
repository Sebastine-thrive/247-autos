
// export interface ProductProps {
//   products: Product[];
// }

// Define the interface for a single product
export interface Product {
  price: number;
  details: string;
  category: string;
  _updatedAt: string;
  image: any[]; // Assuming the image property is an array of any type
  year: number;
  _rev: string;
  extra_details: string;
  brand: string;
  _type: string;
  _createdAt: string;
  location: string;
  _id: string;
  slug?:string
  sold?: boolean; // Optional property, as seen in the second product
}

// Define the type for an array of products
export type ProductsArray = Product[];

export interface ProductListProps {
  products: Product[];
}

export interface CardProps {
  product: Product;
}