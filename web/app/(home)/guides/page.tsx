// eslint-disable-next-line import/no-unresolved
import { allGuides } from "contentlayer/generated";

import { ContentLink } from "../../../components/content-link";

export default function GuidesPage() {
  return (
    <div className="flex gap-2">
      {allGuides
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((pattern) => (
          <ContentLink
            key={pattern._id}
            content={pattern}
            showOwnTypeTag={false}
          />
        ))}
    </div>
  );
}
