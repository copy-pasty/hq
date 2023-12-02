import type { ServerRuntime } from "next";
import Link from "next/link";

export const runtime: ServerRuntime = "edge";

export default function Home() {
  return (
    <main className="p-10">
      <Link href="/">
        <h1>copy pasty</h1>
      </Link>
    </main>
  );
}
