{/* Components */}
import { ScrollArea } from "@/components/ui/scroll-area"

import PageHeader from "./components/headers/PageHeader"
import ThemeSwitch from "./components/switches/ThemeSwitch"

{/* Sections */}
import { Profile } from "@/sections"

function App() {
  return (
    <ScrollArea>
      <main>
        <PageHeader />
        <ThemeSwitch />
        
        <Profile />
      </main>
    </ScrollArea>
  )
}

export default App
