"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ContrastIcon } from "@/components/ContrastIcon";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = resolvedTheme ?? theme; // handles "system"
  const toggleTheme = () => {
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  };

  // skeleton while mounting
  if (!mounted) {
    return (
      <div className="fixed top-1 right-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Switch theme"
          className="ring-primary bg-muted text-primary h-5 w-5 rounded-full ring-2 transition-colors"
        >
          <ContrastIcon className="h-3 w-3" />
          <span className="sr-only">Theme</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed top-1 right-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label={
          current === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        className={`h-5 w-5 rounded-full transition-colors ${
          current === "dark"
            ? "ring-primary bg-muted text-primary ring-2"
            : "ring-primary bg-muted text-primary ring-2"
        }`}
      >
        <ContrastIcon className="h-3 w-3" />
        <span className="sr-only">{current === "dark" ? "Light" : "Dark"}</span>
      </Button>
    </div>
  );
}
