{/* Components */}
import { Button } from "@/components/ui/button";

{/* Icons */}
import { MoveUpRight } from "lucide-react"
import { SiGmail } from "react-icons/si";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa"

export default function Profile() {
  return (
    <section id="profile" className="p-10 bg-background">
      <div className="h-20 w-full" />
      <div className="h-[80vh] w-full border-2 border-foreground flex">
        <div className="w-1/2">
          <div className="h-full p-20 text-lg tracking-wide flex flex-col justify-center">
            <span className="dauphin text-8xl">Cid Brillantes</span>
            <br />
            <span className="text-muted-foreground">BSIT student passionate about software engineering, networking, and cybersecurity—focused on building secure and efficient systems.</span>
            <br />
            <br />
            <div>
              <a href="#about">
                <Button
                  variant="outline"
                  className="relative h-10 w-50 rounded-none border-black flex items-center justify-center"
                >
                  ABOUT ME
                  <MoveUpRight className="absolute right-4 h-4 w-4" />
                </Button>
              </a>
            </div>
            <br />
            <br />
            <span className="text-sm text-muted-foreground">@cidbrill</span>
            <div className="flex gap-6 mt-4">
              <a
                href="mailto:iam.cidbrill@gmail.com"
              >
                <SiGmail className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/cidbrill/"
              >
                <FaLinkedin className="h-8 w-8" />
              </a>
              <a
                href="https://github.com/cidbrill"
              >
                <FaGithub className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-5 flex items-center justify-center">
          <img
            src="profile.png"
            alt="Profile"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
