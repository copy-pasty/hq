// eslint-disable-next-line import/no-unresolved
import { allLibraries } from "contentlayer/generated";
import type { Metadata } from "next";

import { ContentLink } from "../../../components/content-link";

export const metadata: Metadata = {
  title: "libraries",
  description: "composable libraries with best-in-class DX",
};

export default function GuidesPage() {
  return (
    <div className="flex gap-2">
      {allLibraries
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
