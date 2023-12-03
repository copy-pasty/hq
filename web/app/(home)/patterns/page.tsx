// eslint-disable-next-line import/no-unresolved
import { allPatterns } from "contentlayer/generated";

import { PatternLink } from "../../../components/pattern-link";

export default function PatternsPage() {
  const sortedPatterns = allPatterns.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="flex gap-2">
      {sortedPatterns.map((pattern) => (
        <PatternLink key={pattern._id} pattern={pattern} />
      ))}
    </div>
  );
}
