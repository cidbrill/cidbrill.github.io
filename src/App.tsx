{/* Components */}
import { ScrollArea } from "@/components/ui/scroll-area"
import PageHeader from "./components/headers/PageHeader"
import ThemeSwitch from "./components/switches/ThemeSwitch"

{/* Sections */}
import {
  About,
  Certifications,
  Contact,
  Profile,
  Projects,
  Skills
} from "@/sections"

function App() {
  return (
    <ScrollArea className="h-screen w-full">
      <main className="min-h-screen">
        <PageHeader />
        <ThemeSwitch />
        
        <Profile />
        <About />
        <Certifications />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </ScrollArea>
  )
}

export default App
