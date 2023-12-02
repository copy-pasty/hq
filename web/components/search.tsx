"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useId } from "react";

import { cn } from "../cn";

export function Search(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const id = useId();

  return (
    <div className="group relative w-full">
      <input
        id={id}
        type="text"
        placeholder="search..."
        className={cn(
          "peer h-10 w-full min-w-[8rem] rounded-xl bg-neutral-800 p-4 pl-[40px] pr-10 text-sm outline-none placeholder:text-neutral-400 focus-within:bg-neutral-700 group-hover:bg-neutral-700",
          props.className
        )}
      />

      <MagnifyingGlass className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 group-hover:text-white group-active:text-white peer-focus:text-white" />

      <label
        htmlFor={id}
        className="absolute right-2 top-1/2 ml-4 flex h-6 -translate-y-1/2 select-none items-center justify-center rounded-md border border-neutral-600 px-1.5 text-sm text-neutral-400 hover:text-white active:text-white"
      >
        /
      </label>
    </div>
  );
}
