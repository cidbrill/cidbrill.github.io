import { useEffect, useRef, useState } from "react";

/* Components */
import Reveal from "@/components/animations/Reveal";
import TimelineStart from "@/components/cards/practicum/timeline/TimelineStart";
import TimelineItem from "@/components/cards/practicum/timeline/TimelineItem";
import TimelineEnd from "@/components/cards/practicum/timeline/TimelineEnd";

/* Data */
import { timeline } from "@/data/timeline";

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
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
      id="timeline"
      className="scroll-mt-20 mx-auto flex w-full max-w-7xl flex-col items-center bg-background px-10 py-10 2xl:py-20"
    >
      <Reveal>
        <div className="flex flex-col items-center">
          {/* Title */}
          <div className="flex flex-col items-center">
            <h2 className="dauphin text-5xl font-semibold">
              Timeline
            </h2>

            <span
              className={`mt-4 h-0.5 self-stretch bg-foreground transition-transform duration-500 origin-center ${
                isVisible
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
            />
          </div>

          {/* Description */}
          <div className="mt-10 max-w-2xl text-center leading-relaxed text-muted-foreground">
            <p>
              A chronological overview of the activities completed throughout
              <br />
              my 486-hour practicum at{" "}
              <span className="font-medium text-foreground">
                OGIS Philippines, Inc.
              </span>
            </p>
          </div>
        </div>
      </Reveal>

      {/* Timeline */}
      <div className="relative mt-20 w-full">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-55 bottom-65 -translate-x-1/2 border-l-2 border-dashed border-border" />

        <TimelineStart
          title={timeline[0].title}
          date={timeline[0].date}
          description={timeline[0].description}
        />

        {timeline.slice(1, -1).map((item, index) => (
          <TimelineItem
            key={item.id}
            title={item.title}
            date={item.date}
            description={item.description}
            side={index % 2 === 0 ? "left" : "right"}
            delay={index * 100}
          />
        ))}

        <TimelineEnd
          title={timeline[timeline.length - 1].title}
          date={timeline[timeline.length - 1].date}
          description={timeline[timeline.length - 1].description}
          delay={timeline.length * 100}
        />
      </div>
    </section>
  );
}
