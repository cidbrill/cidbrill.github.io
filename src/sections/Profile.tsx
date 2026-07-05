/* Components */
import { Button } from "@/components/ui/button";

/* Icons */
import {
  FileText,
  MoveUpRight
} from "lucide-react";

import { SiGmail } from "react-icons/si";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Profile() {
  return (
    <section
      id="profile"
      className="scroll-mt-20 mx-auto w-full max-w-7xl bg-background px-10 pt-23 2xl:pt-32 2xl:pb-12"
    >
      <div className="grid grid-cols-[0.95fr_1.05fr] border-2 border-foreground">
        {/* Left */}
        <div className="flex items-center">
          <div className="flex max-w-xl flex-col gap-8 px-20">
            <h1 className="dauphin text-7xl leading-none">
              Cid Brillantes
            </h1>

            <p className="text-lg leading-relaxed tracking-wide text-muted-foreground">
              BSIT student passionate about software engineering,
              networking, and cybersecurity—focused on building secure
              and efficient systems.
            </p>

            <div className="flex gap-4">
              <a href="#about">
                <Button
                  variant="outline"
                  className="h-10 w-40 rounded-none"
                >
                  ABOUT ME
                  <MoveUpRight className="h-4 w-4" />
                </Button>
              </a>

              <a
                href="/Brillantes_Résumé.pdf"
                download
              >
                <Button
                  className="relative h-10 w-40 rounded-none"
                >
                  RÉSUMÉ
                  <FileText className="h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-sm text-muted-foreground">
                @cidbrill
              </span>

              <div className="flex items-center gap-6">
                <a
                  href="mailto:iam.cidbrill@gmail.com"
                  aria-label="Email"
                  className="transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <SiGmail className="h-8 w-8" />
                </a>

                <a
                  href="https://www.linkedin.com/in/cidbrill/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <FaLinkedin className="h-8 w-8" />
                </a>

                <a
                  href="https://github.com/cidbrill"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <FaGithub className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center p-8">
          <img
            src="profile.jpg"
            alt="Cid Brillantes"
            className="max-h-175 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
