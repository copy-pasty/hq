import type { Pattern } from "contentlayer/generated";
import type { Route } from "next";
import Link from "next/link";

export function PatternLink({
  pattern,
  showOwnTypeTag = true,
}: {
  pattern: Pattern;
  showOwnTypeTag?: boolean;
}) {
  return (
    <article className="flex flex-col gap-2">
      <Link
        href={pattern.url as Route}
        className="group max-w-sm rounded-3xl border-2 border-neutral-700 p-4 px-5 hover:bg-neutral-900"
      >
        <div>
          <h3 className="font-medium leading-loose">{pattern.title}</h3>
          <h4 className="text-sm leading-relaxed text-neutral-400 group-hover:text-white">
            {pattern.description}
          </h4>
        </div>
      </Link>

      <div className="flex items-center gap-1">
        {showOwnTypeTag && (
          <p className="border-pattern-500 bg-pattern-500/30 rounded-xl border px-2 py-1 text-xs text-neutral-400">
            {pattern.type.toLocaleLowerCase()}
          </p>
        )}

        {pattern.tags.map((tag) => (
          <p
            key={tag}
            className="rounded-xl bg-neutral-800 px-2 py-1 text-xs text-neutral-400"
          >
            {tag}
          </p>
        ))}
      </div>
    </article>
  );
}
