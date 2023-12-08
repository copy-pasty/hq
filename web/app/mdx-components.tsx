import type { MDXComponents } from "mdx/types";
import type { Route } from "next";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as Route}>{children}</Link>,
  h1: ({ children }) => <h1 className="text-2xl leading-loose">{children}</h1>,
  h2: ({ children }) => (
    <h2 className="mt-10 text-xl font-medium leading-loose">{children}</h2>
  ),
  ul: ({ children }) => (
    <ul className="ml-8 list-disc leading-relaxed">{children}</ul>
  ),
  li: ({ children }) => <li className="my-2 leading-relaxed">{children}</li>,
  ol: ({ children }) => (
    <ol className="ml-8 list-decimal leading-relaxed">{children}</ol>
  ),
  p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
  code: ({ children }) => (
    <div className="rounded-xl bg-neutral-800 p-2 text-neutral-100">
      <code>{children}</code>
    </div>
  ),
};
