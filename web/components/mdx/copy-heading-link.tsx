"use client";

import { Link } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function CopyHeadingLink(props: { id?: string }) {
  const [hasCopied, setHasCopied] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => setHasCopied(false), 1000);

      return () => clearTimeout(timeout);
    }
  });

  async function copy() {
    await navigator.clipboard.writeText(
      `${window.location.origin}${pathname}#${props.id}`
    );
    setHasCopied(true);
  }

  if (!props.id) {
    return null;
  }

  return (
    <button
      className="absolute left-full top-0.5 ml-1 flex h-8 items-center justify-center gap-1 rounded-md p-2 font-sans text-xs text-neutral-400 opacity-0 hover:bg-neutral-600 hover:text-white focus:bg-neutral-600 focus:text-white group-focus-within:opacity-100 group-hover:opacity-100"
      onClick={copy}
    >
      <Link className="h-4 w-4" />
      {hasCopied && "Copied!"}
    </button>
  );
}
