{/* Components */}
import {
  Card,
  CardContent
} from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"

{/* Icons */}
import {
  Code,
  Network,
  Shield
} from "lucide-react"

export default function About() {
  return (
    <section id="about" className="h-[90vh] bg-background px-6 py-20 flex flex-col items-center scroll-mt-20">
      {/* Title */}
      <div className="text-center space-y-4">
        <h2 className="dauphin text-5xl font-semibold">About Me</h2>
        <Separator orientation="horizontal" className="w-40 border-2 border-black" />
      </div>

      {/* Description */}
      <div className="max-w-2xl text-center mt-10 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          I am a 4th-year BS Information Technology student at Mapúa Malayan Colleges Laguna, specializing in cybersecurity.
          My interests lie in networking, including routing and switching, internet technologies, and building reliable network infrastructures.
          With a strong foundation in both security and systems, I aspire to become a software engineer, network administrator,
          or IT/cybersecurity specialist, contributing to the development of secure and efficient technological solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid md:grid-cols-3 gap-8 w-full max-w-5xl">

        {/* Card 1 */}
        <Card className="text-center hover:shadow-md transition-all hover:-translate-y-1">
          <CardContent className="p-8 space-y-4">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-muted">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg">Software Development</h3>
            <p className="text-muted-foreground text-sm">
              Developing modern applications with clean, maintainable code and a focus on performance and scalability.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="text-center hover:shadow-md transition-all hover:-translate-y-1">
          <CardContent className="p-8 space-y-4">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-muted">
              <Network className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg">Networking</h3>
            <p className="text-muted-foreground text-sm">
              Experience in routing and switching, internet technologies, and building reliable network infrastructures.
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="text-center hover:shadow-md transition-all hover:-translate-y-1">
          <CardContent className="p-8 space-y-4">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-muted">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg">Cybersecurity</h3>
            <p className="text-muted-foreground text-sm">
              Focused on securing systems through vulnerability assessment and cryptographic techniques.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
