// eslint-disable-next-line import/no-anonymous-default-export
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
      title: "year",
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
      type: "string",
      options: {
        source: "name",
        maxLength: 90,
      },
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
