/* Components */
import { ScrollArea } from "@/components/ui/scroll-area"
import PageHeader from "./components/headers/PageHeader"
import ThemeSwitch from "./components/switches/ThemeSwitch"
import Reveal from "./components/animations/Reveal"

/* Sections */
import {
  About,
  Certifications,
  Profile,
  Projects
} from "@/sections"

function App() {
  return (
    <ScrollArea className="h-screen">
      <main>
        <PageHeader />
        <ThemeSwitch />
        
        <Reveal>
          <Profile />
        </Reveal>

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Certifications />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>
      </main>
    </ScrollArea>
  )
}

export default App
