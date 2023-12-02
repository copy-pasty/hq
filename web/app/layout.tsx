import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "copy pasty",
  description:
    "composable libraries, patterns and guides with best-in-class DX",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
