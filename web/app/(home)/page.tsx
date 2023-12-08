// eslint-disable-next-line import/no-unresolved
import type { Guide, Pattern } from "contentlayer/generated";
// eslint-disable-next-line import/no-unresolved
import { allGuides, allPatterns } from "contentlayer/generated";
import type { ServerRuntime } from "next";

import { ContentLink } from "../../components/content-link";

export const runtime: ServerRuntime = "edge";

export default function HomePage(props: { searchParams: { q?: string } }) {
  const q = props.searchParams.q?.toLowerCase();
  const filteredContent = getFilteredContent(q);

  return (
    <div className="flex flex-col gap-2">
      {filteredContent.length === 0 && q && (
        <div className="flex w-full flex-col items-center justify-center text-center">
          <p className="text-lg">
            No results for "<span className="font-medium">{q}</span>"
          </p>

          <p className="text-sm text-neutral-400">
            Try searching for something else
          </p>
        </div>
      )}

      {filteredContent.length > 0 && q && (
        <p className="text-neutral-400">
          {filteredContent.length}{" "}
          {filteredContent.length === 1 ? "result" : "results"} for{" "}
          <span className="font-medium">"{q}"</span>
        </p>
      )}

      <div className="flex gap-2">
        {filteredContent.map((content) => (
          <ContentLink key={content._id} content={content} />
        ))}
      </div>
    </div>
  );
}

function getFilteredContent(search?: string) {
  if (!search) {
    return [...allPatterns, ...allGuides].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  const content: (Guide | Pattern)[] = [];

  allPatterns.forEach((pattern) => {
    if (
      pattern.type.toLocaleLowerCase().includes(search) ||
      pattern.title.toLowerCase().includes(search) ||
      pattern.description.toLowerCase().includes(search) ||
      pattern.tags?.some((tag) => tag.toLowerCase().includes(search))
    ) {
      content.push(pattern);
    }
  });

  allGuides.forEach((guide) => {
    if (
      guide.type.toLocaleLowerCase().includes(search) ||
      guide.title.toLowerCase().includes(search) ||
      guide.description.toLowerCase().includes(search) ||
      guide.tags?.some((tag) => tag.toLowerCase().includes(search))
    ) {
      content.push(guide);
    }
  });

  return content.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
