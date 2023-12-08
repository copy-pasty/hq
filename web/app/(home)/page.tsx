// eslint-disable-next-line import/no-unresolved
import { allPatterns } from "contentlayer/generated";

import { PatternLink } from "../../components/pattern-link";

export default function HomePage(props: { searchParams: { q?: string } }) {
  const q = props.searchParams.q?.toLowerCase();
  const allPatternsFiltered = allPatterns.filter((pattern) => {
    if (!q) {
      return true;
    }

    return (
      pattern.title.toLowerCase().includes(q) ||
      pattern.description.toLowerCase().includes(q) ||
      pattern.tags?.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex flex-col gap-2">
      {allPatternsFiltered.length === 0 && q && (
        <div className="flex w-full flex-col items-center justify-center text-center">
          <p className="text-lg">
            No results for "<span className="font-medium">{q}</span>"
          </p>

          <p className="text-sm text-neutral-400">
            Try searching for something else
          </p>
        </div>
      )}

      {allPatternsFiltered.length > 0 && q && (
        <p className="text-neutral-400">
          {allPatternsFiltered.length}{" "}
          {allPatternsFiltered.length === 1 ? "result" : "results"} for{" "}
          <span className="font-medium">"{q}"</span>
        </p>
      )}

      <div className="flex gap-2">
        {allPatternsFiltered
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((pattern) => (
            <PatternLink key={pattern._id} pattern={pattern} />
          ))}
      </div>
    </div>
  );
}
