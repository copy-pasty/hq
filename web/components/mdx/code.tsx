"use client";

import { Copy } from "@phosphor-icons/react";
import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";

export function Code(props: PropsWithChildren) {
  const ref = useRef<HTMLElement>(null);

  return (
    <div className="relative inline-block w-full max-w-3xl overflow-x-auto rounded-xl bg-neutral-800 p-4 text-xs leading-normal tracking-normal text-neutral-100">
      <CopyCodeButton innerTextElementRef={ref} />
      <code ref={ref}>{props.children}</code>
    </div>
  );
}

function CopyCodeButton(props: {
  innerTextElementRef: React.RefObject<HTMLElement>;
}) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => setHasCopied(false), 1000);

      return () => clearTimeout(timeout);
    }
  });

  async function copy() {
    await navigator.clipboard.writeText(
      props.innerTextElementRef.current?.innerText ?? ""
    );

    setHasCopied(true);
  }

  return (
    <button
      className="absolute right-2 top-2 flex h-8 items-center justify-center rounded-md p-2 font-sans text-xs text-neutral-400 hover:bg-neutral-600 hover:text-white focus:bg-neutral-600 focus:text-white"
      onClick={copy}
    >
      {!hasCopied && <Copy className="h-[1.15rem] w-[1.15rem]" />}
      {hasCopied && <p>Copied!</p>}
    </button>
  );
}
