// eslint-disable-next-line import/no-unresolved
import { allGuides } from "contentlayer/generated";
import { ImageResponse } from "next/og";

import { OgImageTitleDescription } from "../../../../components/og/title-description";

export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const runtime = "edge";
export const alt =
  "copy pasty - composable libraries, patterns and guides with best-in-class DX";

export default async function Image({ params }: { params: { slug: string } }) {
  const guide = allGuides.find(
    (guide) =>
      guide._raw.flattenedPath.split("guides/").join("") === params.slug
  );

  if (!guide) {
    throw new Error(`Could not find guide with slug ${params.slug}`);
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
        title={guide.title}
        description={guide.description}
        type="guide"
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
