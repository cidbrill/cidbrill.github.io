import { useEffect, useState } from "react";

const sections = [
  "profile",
  "certifications",
  "projects",
  "skills"
];

export default function PageHeader() {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10">
        <div className="text-2xl font-semibold tracking-wide">
          <span className="dauphin">Cid Brillantes</span>
        </div>

        <nav className="flex gap-10 text-sm font-medium tracking-wide">
          {sections.map((section) => (
            <a
              href={`#${section}`}
              className="group inline-flex flex-col items-center"
            >
              <span className="transition-colors hover:text-foreground">
                {section.toUpperCase()}
              </span>

              <span
                className={`mt-2 h-0.5 self-stretch bg-foreground transition-all duration-300 origin-center ${
                  activeSection === section ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
