import { useState } from "react";

/* Components */
import {
  ScrollArea,
  ScrollBar,
} from "@/components/ui/scroll-area";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

/* Data */
import { projects } from "@/data/projects";

/* Icons */
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section
      id="projects"
      className="scroll-mt-20 relative mx-auto w-full max-w-7xl bg-background px-10 py-9 2xl:pb-20"
    >
      {/* Heading */}
      <div className="flex justify-end">
        <h2 className="dauphin text-5xl font-semibold tracking-tight">
          Projects
        </h2>
      </div>

      {/* Content */}
      <div className="mt-10 grid grid-cols-[58.5%_40%] gap-4">
        {/* LEFT PANEL */}
        <ScrollArea className="w-full overflow-hidden">
          <div className="grid grid-flow-col grid-rows-2 gap-4 p-0.5 pb-4">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                className="h-58 w-80 cursor-pointer overflow-hidden rounded-2xl gap-0 p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Thumbnail */}
                <div className="p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-28 w-full rounded-t-xl object-cover"
                  />
                </div>

                <CardContent className="px-3 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {project.release}
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* RIGHT PANEL */}
        <div className="sticky top-28 h-120.75 border-2 border-foreground bg-background">
          {/* Preview */}
          <div className="flex h-64 items-center justify-center bg-[#1b1b1b]">
            {selectedProject ? (
              <img
                key={selectedProject.id}
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full animate-in fade-in duration-300 object-cover"
              />
            ) : (
              <span className="text-lg text-white">
                Preview
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex h-[calc(100%-16rem)] flex-col p-7">
            {selectedProject ? (
              <>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-semibold">
                      {selectedProject.title}
                    </h3>

                    <span className="text-sm text-muted-foreground">
                      {selectedProject.release}
                    </span>
                  </div>

                  <p className="leading-relaxed text-sm text-muted-foreground">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <Badge
                        key={tech}
                        className="rounded-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub Repository"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <FaGithub className="h-7 w-7" />
                    </a>
                  )}
                </div>
              </>
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-muted-foreground">
                  Select a project to preview its details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
