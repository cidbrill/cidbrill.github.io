import { useEffect, useState } from "react";

/* Components */
import { ScrollArea } from "@/components/ui/scroll-area"
import PageHeader from "./components/headers/PageHeader"
import PageFooter from "./components/footers/PageFooter";
import ThemeSwitch from "./components/switches/ThemeSwitch"

/* Sections */
import {
  PortfolioAbout,
  Certifications,
  PortfolioHome,
  Projects,
  Skills
} from "@/sections/portfolio"

import {
  PracticumAbout,
  PracticumHome,
  Timeline
} from "@/sections/practicum"

function App() {
  const [mode, setMode] = useState<"portfolio" | "practicum">("portfolio");

  useEffect(() => {
    requestAnimationFrame(() => {
      const home = document.getElementById("home");

      if (home) {
        home.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        history.replaceState(null, "", "#home");
      }
    });
  }, [mode]);

  return (
    <ScrollArea className="h-screen">
      <main>
        <PageHeader
          mode={mode}
          setMode={setMode}
        />

        <ThemeSwitch />

        {/* Portfolio */}
        {mode === "portfolio" && (
          <>
            <PortfolioHome mode={mode} />
            <PortfolioAbout />
            <Certifications />
            <Projects />
            <Skills />
          </>
        )}

        {/* Practicum */}
        {mode === "practicum" && (
          <>
            <PracticumHome mode={mode} />
            <PracticumAbout />
            <Timeline />
          </>
        )}

        <PageFooter />
      </main>
    </ScrollArea>
  );
}

export default App
