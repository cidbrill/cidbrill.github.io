/* Components */
import { ScrollArea } from "@/components/ui/scroll-area"

import PageHeader from "./components/headers/PageHeader"
import ThemeSwitch from "./components/switches/ThemeSwitch"

/* Sections */
import {
  About,
  Certifications,
  Profile
} from "@/sections"

function App() {
  return (
    <ScrollArea className="h-screen">
      <main>
        <PageHeader />
        <ThemeSwitch />
        
        <Profile />
        <About />
        <Certifications />
      </main>
    </ScrollArea>
  )
}

export default App
