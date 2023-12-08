import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: {
    default:
      "copy pasty - composable libraries, patterns and guides with best-in-class DX",
    template: `%s - copy pasty`,
  },
  description:
    "composable libraries, patterns and guides with best-in-class DX",
  metadataBase: new URL("https://copypasty.dev"),
  twitter: {
    card: "summary_large_image",
    site: "@kacperochmanski",
    creator: "@kacperochmanski",
    title: "copy pasty",
    description:
      "composable libraries, patterns and guides with best-in-class DX",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      {/* <head>
        <SandpackStyles />
      </head> */}
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
