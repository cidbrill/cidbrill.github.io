import { useEffect, useState } from "react";

/* Components */
import { Switch } from "@/components/ui/switch";

/* Icons */
import {
  Moon,
  Sun
} from "lucide-react";

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setIsDark(storedTheme === "dark");
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setIsDark(prefersDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="fixed bottom-6 left-6 z-9999 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 shadow-md backdrop-blur-sm">
      <Sun className="h-4 w-4 text-muted-foreground" />

      <Switch
        checked={isDark}
        onCheckedChange={setIsDark}
        aria-label="Toggle dark mode"
      />

      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}
