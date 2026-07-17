/* Icons */
import { SiGmail } from "react-icons/si";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function PageFooter() {
  return (
    <footer className="mt-5 border-t">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Cid Brillantes. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:iam.cidbrill@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <SiGmail className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/cidbrill/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/cidbrill"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
