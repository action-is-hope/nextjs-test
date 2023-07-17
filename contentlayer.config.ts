import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    thumbnail: { type: "string" },
    date: { type: "date", required: true },
    description: { type: "markdown" },
    prerequisites: { type: "list", of: { type: "string" } },
    stacks: { type: "list", of: { type: "string" } },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `components/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "markdown" },
    category: { type: "string", required: true },
    date: { type: "date", required: true },
    thumbnail: { type: "string" },
    prerequisites: { type: "list", of: { type: "string" } },
  },
  computedFields: {
    url: {
      type: "string",
      // resolve: (post) => `${post._raw.flattenedPath}`,
      resolve: (post) => post._raw.sourceFileName.split(".")[0],
    },
  },
}));

export default makeSource({
  contentDirPath: "_content",
  documentTypes: [Post, Component],
});
