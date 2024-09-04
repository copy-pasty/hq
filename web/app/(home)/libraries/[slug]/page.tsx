import "highlight.js/styles/vs2015.min.css";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
// eslint-disable-next-line import/no-unresolved
import { allLibraries } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMDXComponent } from "next-contentlayer/hooks";

import { mdxComponents } from "../../../../components/mdx/mdx-components";

export function generateStaticParams() {
  return allLibraries.map((library) => ({
    slug: library._raw.flattenedPath.split("libraries/").join(""),
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const library = allLibraries.find(
    (library) =>
      library._raw.flattenedPath.split("libraries/").join("") === params.slug
  );

  if (!library) {
    throw new Error(`Guide ${params.slug} not found`);
  }

  return { title: library.title, description: library.description };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const library = allLibraries.find(
    (library) =>
      library._raw.flattenedPath.split("libraries/").join("") === params.slug
  );

  if (!library) {
    return notFound();
  }

  const MDXContent = getMDXComponent(library.body.code);

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
          href="/libraries"
          className="text-library-500 hover:text-library-50 focus:text-library-50 flex items-center justify-center"
        >
          libraries
        </Link>
        <ArrowRight />

        <p>{library.title}</p>
      </div>

      <article className="mx-auto my-24 max-w-3xl">
        <h1 className="text-xl font-medium leading-relaxed">{library.title}</h1>
        <h2 className="text-sm leading-relaxed text-neutral-400">
          {library.description}
        </h2>

        <div className="mt-24">
          <MDXContent components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
