export default function PageHeader() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 px-10 border-b border-border flex items-center justify-between bg-background z-50">
      <div className="text-2xl font-semibold tracking-wide">
        <span className="dauphin">Cid Brillantes</span>
      </div>
      <nav className="flex gap-10 text-sm font-medium tracking-wide">
        <a href="#profile" className="hover:text-foreground transition-colors">
          PROFILE
        </a>
        <a href="#certifications" className="hover:text-foreground transition-colors">
          CERTIFICATIONS
        </a>
        <a href="#projects" className="hover:text-foreground transition-colors">
          PROJECTS
        </a>
        <a href="#skills" className="hover:text-foreground transition-colors">
          SKILLS
        </a>
        <a href="#contact" className="hover:text-foreground transition-colors">
          CONTACT
        </a>
      </nav>
    </header>
  )
}
