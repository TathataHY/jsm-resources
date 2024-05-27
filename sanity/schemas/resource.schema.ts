export const schema = {
  name: "resource",
  title: "Resources",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (rule: any) => rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule: any) => rule.required(),
      options: {
        list: ["nextjs", "frontend", "backend", "fullstack", "other"],
      },
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule: any) => rule.required(),
    },

    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule: any) => rule.required(),
    },
  ],
};
