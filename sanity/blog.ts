/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "blog",
  title: "blog",
  type: "document",
  fields: [
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "mainImage",
      title: "main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "post",
      title: "Post",
      type: "string",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
    },
    {
      name: "publishedAt",
      title: "publishedAt",
      type: " datetime",
    },
  ],
};
