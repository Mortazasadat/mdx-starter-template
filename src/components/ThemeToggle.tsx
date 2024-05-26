"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
      className="w-4 h-4 cursor-pointer"
    >
      {resolvedTheme == "light" ? <MoonIcon /> : <SunIcon />}
    </div>
  );
}
