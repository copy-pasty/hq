import { cva } from "class-variance-authority";
import type { Guide, Library, Pattern } from "contentlayer/generated";
import type { Route } from "next";
import Link from "next/link";

const variants = cva(
  "rounded-xl border px-2 py-1 text-xs hover:text-white focus:text-white",
  {
    variants: {
      type: {
        Guide:
          "border-guide-500 bg-guide-500/30 text-guide-50 hover:bg-guide-500/50 focus:bg-guide-500/50",
        Pattern:
          "border-pattern-500 bg-pattern-500/30 text-pattern-50 hover:bg-pattern-500/50 focus:bg-pattern-500/50",
        Library:
          "border-library-500 bg-library-500/30 text-library-50 hover:bg-library-500/50 focus:bg-library-500/50",
      },
    },
  }
);

export function ContentLink({
  content,
  showOwnTypeTag = true,
}: {
  content: Guide | Pattern | Library;
  showOwnTypeTag?: boolean;
}) {
  return (
    <article className="flex flex-col gap-2">
      <Link
        href={content.url as Route}
        className="group max-w-xs rounded-3xl border-2 border-neutral-700 p-3.5 px-5 hover:bg-neutral-900"
      >
        <div>
          <h3 className="font-medium leading-relaxed">{content.title}</h3>
          <h4 className="text-sm leading-relaxed text-neutral-400 group-hover:text-white">
            {content.description}
          </h4>
        </div>
      </Link>

      <div className="flex items-center gap-1">
        {showOwnTypeTag && (
          <Link
            href={
              content.type === "Guide"
                ? "/guides"
                : content.type === "Pattern"
                  ? "/patterns"
                  : "/libraries"
            }
            className={variants({ type: content.type })}
          >
            {content.type.toLocaleLowerCase()}
          </Link>
        )}

        {content.tags.map((tag) => (
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
