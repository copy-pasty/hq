// eslint-disable-next-line import/no-unresolved
import { allPatterns } from "contentlayer/generated";

import { PatternLink } from "../../../components/pattern-link";

export default function PatternsPage() {
  return (
    <div className="flex gap-2">
      {allPatterns
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((pattern) => (
          <PatternLink
            key={pattern._id}
            pattern={pattern}
            showOwnTypeTag={false}
          />
        ))}
    </div>
  );
}
