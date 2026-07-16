import { useEffect, useState } from "react";

const portfolioSections = [
  "home",
  "certifications",
  "projects",
  "skills",
];

const practicumSections = [
  "home",
  "timeline",
];

interface Props {
  mode: "portfolio" | "practicum";
  setMode: React.Dispatch<
    React.SetStateAction<"portfolio" | "practicum">
  >;
}

export default function PageHeader({
  mode,
  setMode,
}: Props) {
  const sections = mode === "portfolio"
    ? portfolioSections
    : practicumSections;

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setActiveSection("home");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: mode === "portfolio" ? 0.5 : 0.05,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [mode]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10">
        <div className="text-2xl font-semibold tracking-wide">
          <span className="dauphin">Cid Brillantes</span>
        </div>

        <div className="flex items-center gap-10">
          <nav className="flex gap-10 text-sm font-medium tracking-wide">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="group inline-flex flex-col items-center"
              >
                <span className="mt-4 transition-colors hover:text-foreground">
                  {section.toUpperCase()}
                </span>

                <span
                  className={`mt-3 h-0.5 self-stretch bg-foreground transition-all duration-300 origin-center ${
                    activeSection === section ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <button
            onClick={() =>
              setMode(
                mode === "portfolio"
                  ? "practicum"
                  : "portfolio"
              )
            }
            className="h-10 w-32 border border-foreground rounded-none text-xs font-semibold tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
          >
            {mode === "portfolio" ? "PRACTICUM" : "PORTFOLIO"}
          </button>
        </div>
      </div>
    </header>
  );
}
