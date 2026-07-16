import { useEffect, useRef, useState } from "react";

/* Components */
import Reveal from "@/components/animations/Reveal";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

/* Data */
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="scroll-mt-20 mx-auto w-full max-w-7xl bg-background px-10 py-9 2xl:pb-20"
    >
      <Reveal>
        {/* Heading */}
        <div className="flex justify-center">
          <div className="inline-flex flex-col items-center">
            <h2 className="dauphin text-5xl font-semibold">
              Skills
            </h2>

            <span
              className={`mt-4 h-0.5 w-full origin-center bg-foreground transition-transform duration-500 ${
                  isVisible ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <Card
              key={group.title}
              className={`h-35 py-5 rounded-3xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
              index === skillGroups.length - 1
                  ? "col-span-2 mx-auto w-[48%]"
                  : ""
              }`}
            >
              <CardContent className="space-y-4 px-6">
                <h3 className="text-sm font-semibold uppercase">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-muted text-foreground rounded-lg hover:bg-muted p-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
