import type { ServerRuntime } from "next";
import Link from "next/link";

import { Logo } from "../components/logo";
import { Search } from "../components/search";

export const runtime: ServerRuntime = "edge";

export default function Home() {
  return (
    <>
      <header className="m-6 flex w-fit flex-col gap-2">
        <Header />

        <div className="flex items-center gap-2">
          <div className="flex flex-1 items-center">
            <Search />
          </div>

          <div className="flex items-center justify-end gap-2">
            <Link
              href="https://x.com/KacperOchmanski"
              target="_blank"
              className="flex h-10 w-11 items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700"
            >
              𝕏
            </Link>

            <Link
              href="https://github.com/copy-pasty"
              target="_blank"
              className="flex h-10 w-11 items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700"
            >
              <GithubLogoSvg />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

function Header() {
  return (
    <div className="w-fit rounded-3xl border-2 border-neutral-700 p-4 px-5">
      <Link href="/" className="group w-fit">
        <h1 className="flex items-center gap-2 group-hover:text-neutral-400">
          <Logo />
          copy pasty
        </h1>
      </Link>

      <h2 className="text-sm text-neutral-400">
        composable libraries, patterns and guides with best-in-class DX
      </h2>
    </div>
  );
}

function GithubLogoSvg() {
  return (
    <svg
      height="18"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.4 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.83 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.13 11.1 3.57 11.81 3.71 12.06C4.43 13.24 5.55 12.9 6.05 12.7C6.13 12.18 6.36 11.82 6.6 11.62C4.81 11.42 2.92 10.73 2.92 7.77C2.92 6.86 3.23 6.16 3.75 5.66C3.66 5.46 3.39 4.64 3.82 3.49C3.82 3.49 4.49 3.28 6.02 4.11C6.67 3.94 7.34 3.85 8.02 3.85C8.69 3.85 9.36 3.94 10.01 4.11C11.54 3.27 12.21 3.49 12.21 3.49C12.64 4.64 12.37 5.46 12.28 5.66C12.8 6.16 13.11 6.86 13.11 7.77
C13.11 10.74 11.22 11.42 9.43 11.63C9.69 11.87 9.92 12.25 9.92 13.01C9.92 14.11 9.91 14.94 9.91 15.2C9.91 15.39 10.06 15.65 10.47 15.58C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      />
    </svg>
  );
}
