import { useEffect, useState } from "react"

{/* Components */}
import { Switch } from "@/components/ui/switch"

{/* Icons */}
import {
  Moon,
  Sun
} from "lucide-react"

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement

    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div className="fixed bottom-4 left-4 flex items-center gap-2 bg-background border border-border rounded-full px-3 py-2 shadow-md">
      <Sun className="h-4 w-4" />
      <Switch
        checked={isDark}
        onCheckedChange={setIsDark}
      />
      <Moon className="h-4 w-4" />
    </div>
  )
}
