/* Components */
import Reveal from "@/components/animations/Reveal";
import { Card } from "@/components/ui/card";
import Stats from "@/components/cards/practicum/about/Stats";

import {
  Award,
  BriefcaseBusiness,
  ClockCheck,
  TableOfContents,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 mx-auto w-full max-w-7xl px-10 py-6 2xl:py-12"
    >
      <Reveal>
        <div className="flex justify-start">
          <h2 className="dauphin text-5xl font-semibold">
            About the Practicum
          </h2>
        </div>

        <Card className="mt-6 overflow-hidden rounded-3xl p-0 shadow-sm">
          <div className="grid grid-cols-[44%_56%] items-stretch">
            {/* Image */}
            <div className="relative min-h-140">
              <img
                src="/ogis.jpg"
                alt="OGIS Philippines"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Right Panel */}
            <div className="flex flex-col justify-between p-7">
              {/* Overview */}
              <div>
                <h3 className="mt-2 text-4xl font-semibold">
                  OGIS Philippines, Inc.
                </h3>

                <p className="mt-1 text-muted-foreground">
                  Data Engineering Intern
                </p>

                <div className="my-4 h-px bg-border" />

                <p className="text-lg leading-relaxed tracking-wide text-muted-foreground">
                  Completed my 486-hour practicum requirement under the CODEX Internship Program with OGIS Philippines, Inc., gaining hands-on experience in AWS technologies, data analytics, business intelligence, Power Platform tools, and project management.
                </p>
              </div>

              {/* Statistics */}
              <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-2xl border">
                <Stats
                  className="border-r border-b"
                  icon={<ClockCheck className="h-5 w-5" />}
                  value="486"
                  label="Hours Completed"
                />

                <Stats
                  className="border-b"
                  icon={<TableOfContents className="h-5 w-5" />}
                  value="3"
                  label="Training Phases"
                />

                <Stats
                  className="border-r"
                  icon={<BriefcaseBusiness className="h-5 w-5" />}
                  value="3"
                  label="Projects Supported"
                />

                <Stats
                  icon={<Award className="h-5 w-5" />}
                  value="7"
                  label="Certificates Earned"
                />
              </div>
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
