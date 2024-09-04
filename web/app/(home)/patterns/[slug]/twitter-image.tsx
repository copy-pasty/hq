// eslint-disable-next-line import/no-unresolved
import { allPatterns } from "contentlayer/generated";
import { ImageResponse } from "next/og";

import { OgImageTitleDescription } from "../../../../components/og/title-description";

export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const runtime = "edge";
export const alt =
  "copy pasty - composable libraries, patterns and guides with best-in-class DX";

export default async function Image({ params }: { params: { slug: string } }) {
  const pattern = allPatterns.find(
    (pattern) =>
      pattern._raw.flattenedPath.split("patterns/").join("") === params.slug
  );

  if (!pattern) {
    throw new Error(`Could not find pattern with slug ${params.slug}`);
  }

  const inter = fetch(
    new URL("../../../inter-regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const interMedium = fetch(
    new URL("../../../inter-medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fonts = await Promise.all([inter, interMedium]);

  return new ImageResponse(
    (
      <OgImageTitleDescription
        title={pattern.title}
        description={pattern.description}
        type="pattern"
      />
    ),
    {
      emoji: "noto",
      fonts: [
        { name: "Inter", data: fonts[0], style: "normal", weight: 400 },
        { name: "Inter", data: fonts[1], style: "normal", weight: 500 },
      ],
    }
  );
}
