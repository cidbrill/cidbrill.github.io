/* Components */
import Reveal from "@/components/animations/Reveal";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface Props {
  title: string;
  date: string;
  description: string;
  side: "left" | "right";
  delay?: number;
}

export default function TimelineItem({
  title,
  date,
  description,
  side,
  delay = 0,
}: Props) {
  const isLeft = side === "left";

  return (
    <Reveal delay={delay}>
      <div className="grid w-full grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] items-center py-5">
        {/* Left Card */}
        <div className="flex justify-end pr-7">
        {isLeft && (
            <Card className="w-full max-w-150 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <CardContent className="space-y-4 p-7">
                <h3 className="text-2xl font-semibold">
                  {title}
                </h3>

                <p className="leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Timeline Marker */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-5 w-5 rounded-full border-4 border-background bg-foreground shadow-sm" />

          <div className="flex h-7 items-center justify-center rounded-full bg-muted px-3 py-1 pb-1.5 text-xs font-medium text-foreground shadow-sm whitespace-nowrap">
            {date}
          </div>
        </div>

        {/* Right Card */}
        <div className="flex justify-start pl-7">
        {!isLeft && (
            <Card className="w-full max-w-150 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <CardContent className="space-y-4 p-7">
                <h3 className="text-2xl font-semibold">
                  {title}
                </h3>

                <p className="leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Reveal>
  );
}
