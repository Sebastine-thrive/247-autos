/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export
interface MyDocument extends Document {
  brand?: string; // Optional because it might not exist in all documents
  name: string;
}

export default {
  name: "product",
  title: "cars",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "sold",
      title: "Sold",
      type: "boolean",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc: MyDocument, context: { dataset: string }) =>
          context.dataset === "production"
            ? `${doc.brand}-${doc.name}`
            : `${doc.brand}-${doc.name}`,
      },
      maxLength: 90,
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "extra_details",
      title: "Extra_details",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
  ],
};

// options: {
//   // include category if dataset is production
//   source: (doc, context) => context.dataset === 'production' ? `${doc.category}-${doc.title}` : doc.title
// }

// type: "slug",
// options: {
//   source: "name",
//   maxLength: 90,

// source: (doc: Record<string, any>) => `${doc.Brand}-${doc.Name}`,

// (doc: MyDocument, context: { dataset: string }) =>
//           context.dataset === "production"
//             ? `${doc.brand}-${doc.name}`
//             : `${doc.brand}-${doc.name}`,
