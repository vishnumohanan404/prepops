"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-7 h-7"
    >
      <Sun className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 w-4 h-4" />
      <Moon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 w-4 h-4" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
