"use client";

import { KeyReturn, MagnifyingGlass } from "@phosphor-icons/react";
import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useCallback, useId, useState } from "react";

import { cn } from "../cn";

export function Search(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const [value, setValue] = useState("");
  const id = useId();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      if (value === "") {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="group relative w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const query = createQueryString("q", value);

          if (["/"].includes(pathname)) {
            router.push(`${pathname}?${query}` as Route);
          } else {
            router.push(`/?${query}` as Route);
          }
        }}
      >
        <input
          id={id}
          type="text"
          placeholder="search..."
          className={cn(
            "peer h-10 w-full min-w-[8rem] rounded-xl bg-neutral-800 p-4 pl-[40px] pr-10 text-sm outline-none placeholder:text-neutral-400 focus-within:bg-neutral-700 group-hover:bg-neutral-700",
            props.className
          )}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-hover:text-white group-active:text-white peer-focus:text-white">
          <MagnifyingGlass className="h-4 w-4" />
        </div>

        <label
          htmlFor={id}
          className="absolute right-2 top-1/2 ml-4 flex h-6 -translate-y-1/2 select-none items-center justify-center rounded-md border border-neutral-600 px-1.5 text-sm text-neutral-400 hover:text-white active:text-white group-focus-within:border-transparent"
        >
          <div className="hidden group-focus-within:block">
            <KeyReturn className="h-5 w-5" />
          </div>
          <div className="block group-focus-within:hidden">/</div>
        </label>
      </form>
    </div>
  );
}
