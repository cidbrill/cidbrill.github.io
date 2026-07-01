export default function PageHeader() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10">
        <div className="text-2xl font-semibold tracking-wide">
          <span className="dauphin">Cid Brillantes</span>
        </div>

        <nav className="flex gap-10 text-sm font-medium tracking-wide">
          <a
            href="#profile"
            className="transition-colors hover:text-foreground"
          >
            PROFILE
          </a>

          <a
            href="#certifications"
            className="transition-colors hover:text-foreground"
          >
            CERTIFICATIONS
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-foreground"
          >
            PROJECTS
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-foreground"
          >
            SKILLS
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-foreground"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}
