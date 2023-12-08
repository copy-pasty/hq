import "highlight.js/styles/vs2015.min.css";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
// eslint-disable-next-line import/no-unresolved
import { allPatterns } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMDXComponent } from "next-contentlayer/hooks";

import { mdxComponents } from "../../../../components/mdx/mdx-components";

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

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = allPatterns.find(
    (guide) => guide._raw.flattenedPath === params.slug
  );

  if (!guide) {
    return notFound();
  }

  const MDXContent = getMDXComponent(guide.body.code);

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
