import type { MDXComponents } from "mdx/types";
import type { Route } from "next";
import Link from "next/link";

import { Code } from "./code";
import { CopyHeadingLink } from "./copy-heading-link";

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...props }) => (
    <Link {...props} href={href as Route}>
      {children}
    </Link>
  ),
  h1: ({ id, children }) => (
    <div className="relative w-fit">
      <Link
        href={`#${id}`}
        className="relative block w-fit items-center justify-center hover:text-neutral-400 focus:text-neutral-400"
      >
        <h1 id={id} className="text-2xl leading-loose">
          {children}
        </h1>
      </Link>
      <CopyHeadingLink id={id} />
    </div>
  ),
  h2: ({ id, children }) => (
    <div className="relative w-fit">
      <Link
        href={`#${id}`}
        className="relative block w-fit items-center justify-center hover:text-neutral-400 focus:text-neutral-400"
      >
        <h2 id={id} className="mt-10 text-xl font-medium leading-loose">
          {children}
        </h2>
      </Link>
      <CopyHeadingLink id={id} />
    </div>
  ),
  h3: ({ id, children }) => (
    <div className="relative w-fit">
      <Link
        href={`#${id}`}
        className="block w-fit items-center justify-center hover:text-neutral-400 focus:text-neutral-400"
      >
        <h3 id={id} className="mt-10 text-lg leading-loose">
          {children}
        </h3>
      </Link>
      <CopyHeadingLink id={id} />
    </div>
  ),
  h4: ({ id, children }) => (
    <div className="relative w-fit">
      <Link
        href={`#${id}`}
        className="block w-fit items-center justify-center hover:text-neutral-400 focus:text-neutral-400"
      >
        <h4 id={id} className="mt-2 text-base leading-loose">
          {children}
        </h4>
      </Link>
      <CopyHeadingLink id={id} />
    </div>
  ),
  ul: ({ children }) => (
    <ul className="ml-8 list-disc leading-relaxed">{children}</ul>
  ),
  li: ({ children }) => <li className="my-2 leading-relaxed">{children}</li>,
  ol: ({ children }) => (
    <ol className="ml-8 list-decimal leading-relaxed">{children}</ol>
  ),
  p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
  code: ({ children }) => <Code>{children}</Code>,
};
