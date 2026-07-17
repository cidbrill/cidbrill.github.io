/* Components */
import { Button } from "@/components/ui/button";
import Reveal from "@/components/animations/Reveal";

/* Icons */
import {
  FileText,
  MoveUpRight,
} from "lucide-react";

interface Props {
  mode: "portfolio" | "practicum";
}

export default function Home({ mode }: Props) {
  return (
    <section
      id="home"
      className="scroll-mt-20 mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center bg-background px-10 pt-20 pb-12"
    >
      <Reveal key={mode}>
        <div className="flex max-w-3xl flex-col items-center gap-8 text-center">
          <h1 className="dauphin text-8xl leading-none">
            Practicum Journey
          </h1>

          <div>
            <span className="text-base font-semibold uppercase tracking-[0.3em] text-foreground">
              OGIS Philippines Inc.
            </span>
            <br />
            <span className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
              April 2026 &nbsp;&bull;&nbsp; July 2026
            </span>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed tracking-wide text-muted-foreground">
            Look into my experience with{" "}
            <span className="font-semibold text-foreground">
              <a
                href="https://ogisphilippines.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-muted-foreground"
              >
                OGIS Philippines, Inc.
              </a>
            </span>{" "}
            through this timeline of the milestones I achieved throughout my
            practicum
          </p>

          <div className="flex gap-4">
            <a href="#about">
              <Button className="h-10 w-60 rounded-none">
                ABOUT THE PRACTICUM
                <MoveUpRight className="h-4 w-4" />
              </Button>
            </a>

            <a
              href="/Practicum_Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="h-10 w-50 rounded-none"
                disabled
              >
                NARRATIVE REPORT
                <FileText className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
