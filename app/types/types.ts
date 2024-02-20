// Define the interface for a single product
export interface Slug {
  _type: string;
  current: string;
}

export interface Product {
  price: number;
  name: string;
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
  slug?: Slug;
  sold?: boolean;
}

// Define the type for an array of products
export type ProductsArray = Product[];

export interface ProductListPropsOptions {
  productsOnSale: Product[];
  productsSold: Product[];
}

export interface ProductListProps {
  products: Product[];
}

export interface CardProps {
  product: Product;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}

export type SearchTermType = string;

export interface MainBlogData {
  title: string;
  category: string;
  images: any[];
  publishedAt: Date;
  timeTakenToComplete: number;
  slug?: Slug;
}
export interface BlogCardProps {
  mainBlogData: MainBlogData;
}

export type mainBlogDataArray = MainBlogData[];

export interface BlogData {
  title: string;
  name: string;
  author: string;
  category: string;
  timeTakenToComplete: number;
  images: any[];
  postImages: any[];
  otherImages: any[]; // Assuming the image property is an array of any type
  publishedAt: Date;
  body1: any[];
  body2: any[];
  summary: any[];
  references: any[];
  _type: string;
  _createdAt: string;
  _id: string;
  slug: Slug;
  _updatedAt: string;
  _rev: string;
}

export interface BlogProps {
  blog: BlogData;
}
export interface BlogListProps {
  blog: BlogData[];
}
