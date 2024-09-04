import "highlight.js/styles/vs2015.min.css";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
// eslint-disable-next-line import/no-unresolved
import { allPatterns } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMDXComponent } from "next-contentlayer/hooks";

import { mdxComponents } from "../../../../components/mdx/mdx-components";

export function generateStaticParams() {
  return allPatterns.map((pattern) => ({
    slug: pattern._raw.flattenedPath.split("patterns/").join(""),
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const pattern = allPatterns.find(
    (pattern) =>
      pattern._raw.flattenedPath.split("patterns/").join("") === params.slug
  );

  if (!pattern) {
    throw new Error(`Pattern ${params.slug} not found`);
  }

  return { title: pattern.title, description: pattern.description };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const pattern = allPatterns.find(
    (pattern) =>
      pattern._raw.flattenedPath.split("patterns/").join("") === params.slug
  );

  if (!pattern) {
    return notFound();
  }

  const MDXContent = getMDXComponent(pattern.body.code);

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
          className="text-pattern-400 hover:text-pattern-200 focus:text-pattern-200 flex items-center justify-center"
        >
          patterns
        </Link>
        <ArrowRight />

        <p>{pattern.title}</p>
      </div>

      <article className="mx-auto my-24 max-w-3xl">
        <h1 className="text-xl font-medium leading-relaxed">{pattern.title}</h1>
        <h2 className="text-sm leading-relaxed text-neutral-400">
          {pattern.description}
        </h2>

        <div className="mt-24">
          <MDXContent components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
