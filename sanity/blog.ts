/* eslint-disable import/no-anonymous-default-export */
interface MyDocument extends Document {
  author: string;
  title: string;
}

export default {
  name: "blog",
  title: "Blog",
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
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "body1",
      title: "Body1",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "postImages",
      title: "PostImages",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "body2",
      title: "Body2",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "PublishedAt",
      type: "date",
    },
    {
      name: "timeTakenToComplete",
      title: "TimeTakenToComplete",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc: MyDocument, context: { dataset: string }) =>
          context.dataset === "production"
            ? `${doc.author}-${doc.title}`
            : `${doc.author}-${doc.title}`,
      },
      maxLength: 90,
    },
    {
      name: "summary",
      title: "summary",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "references",
      title: "References",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
