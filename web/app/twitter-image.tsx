import { ImageResponse } from "next/og";

import { OgImageBase } from "../components/og/base";

export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const runtime = "edge";
export const alt =
  "copy pasty - composable libraries, patterns and guides with best-in-class DX";

export default async function Image() {
  const inter = await fetch(
    new URL("./inter-regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(<OgImageBase />, {
    emoji: "noto",
    fonts: [{ name: "Inter", data: inter, style: "normal", weight: 400 }],
  });
}
