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
  delay?: number;
}

export default function TimelineEnd({
  title,
  date,
  description,
  delay = 0,
}: Props) {
  return (
    <Reveal delay={delay}>
      <div className="flex w-full flex-col items-center pt-5">
        {/* Timeline Marker */}
        <div className="flex flex-col items-center">
          <div className="h-5 w-5 rounded-full border-4 border-background bg-foreground shadow-sm" />

          <div className="mt-2 flex h-7 items-center rounded-full bg-muted px-3 text-xs font-medium text-foreground shadow-sm whitespace-nowrap">
            {date}
          </div>
        </div>

        {/* Card */}
        <Card className="mt-8 w-full max-w-2xl rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <CardContent className="space-y-4 p-7">
            <h3 className="text-2xl font-semibold">
              {title}
            </h3>

            <p className="leading-relaxed text-muted-foreground">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
    </Reveal>
  );
}
