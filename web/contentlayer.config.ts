import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

export const Pattern = defineDocumentType(() => ({
  name: "Pattern",
  filePathPattern: `./patterns/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    createdAt: { type: "date", required: true },
    updatedAt: { type: "date", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (pattern) => `/${pattern._raw.flattenedPath}`,
    },
  },
}));

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `./guides/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    createdAt: { type: "date", required: true },
    updatedAt: { type: "date", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (guide) => `/${guide._raw.flattenedPath}`,
    },
  },
}));

export const Library = defineDocumentType(() => ({
  name: "Library",
  filePathPattern: `./libraries/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    createdAt: { type: "date", required: true },
    updatedAt: { type: "date", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (library) => `/${library._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./app/(home)",
  documentTypes: [Pattern, Guide, Library],
  mdx: {
    rehypePlugins: [highlight as any, rehypeSlug],
  },
});
