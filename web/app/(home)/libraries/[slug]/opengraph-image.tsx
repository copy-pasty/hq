// eslint-disable-next-line import/no-unresolved
import { allLibraries } from "contentlayer/generated";
import { ImageResponse } from "next/og";

import { OgImageTitleDescription } from "../../../../components/og/title-description";

export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const runtime = "edge";
export const alt =
  "copy pasty - composable libraries, patterns and guides with best-in-class DX";

export default async function Image({ params }: { params: { slug: string } }) {
  const library = allLibraries.find(
    (library) =>
      library._raw.flattenedPath.split("libraries/").join("") === params.slug
  );

  if (!library) {
    throw new Error(`Could not find library with slug ${params.slug}`);
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
        title={library.title}
        description={library.description}
        type="library"
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
