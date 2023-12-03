import "highlight.js/styles/vs2015.min.css";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
// eslint-disable-next-line import/no-unresolved
import { allPatterns } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

export function generateStaticParams() {
  return allPatterns.map((guide) => ({ slug: guide._raw.flattenedPath }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = allPatterns.find(
    (guide) => guide._raw.flattenedPath === params.slug
  );

  if (!guide) {
    throw new Error(`Guide ${params.slug} not found`);
  }

  return { title: guide.title, description: guide.description };
}

const mdxComponents: MDXComponents = {
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

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = allPatterns.find(
    (guide) => guide._raw.flattenedPath === params.slug
  );

  if (!guide) {
    return notFound();
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MDXContent = useMDXComponent(guide.body.code);

  return (
    <div>
      <div className="mx-auto flex max-w-3xl items-center gap-1.5 text-xs">
        <Link
          href="/"
          className="flex items-center justify-center text-neutral-400 hover:text-white focus:text-white"
        >
          home
        </Link>
        <ArrowRight />

        <Link
          href="/patterns"
          className="flex items-center justify-center text-neutral-400 hover:text-white focus:text-white"
        >
          patterns
        </Link>
        <ArrowRight />

        <p>{guide.title}</p>
      </div>

      <article className="mx-auto my-24 max-w-3xl">
        <h1 className="text-xl font-medium leading-relaxed">{guide.title}</h1>
        <h2 className="text-sm leading-relaxed text-neutral-400">
          {guide.description}
        </h2>

        <div className="mt-24">
          <MDXContent components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
