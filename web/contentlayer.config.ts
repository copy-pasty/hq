import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

export const Pattern = defineDocumentType(() => ({
  name: "Pattern",
  filePathPattern: `**/*.mdx`,
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
      resolve: (pattern) => `/patterns/${pattern._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./app/(home)/patterns",
  documentTypes: [Pattern],
  mdx: {
    rehypePlugins: [highlight as any, rehypeSlug],
  },
});
