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
}

export default function TimelineStart({
  title,
  date,
  description,
}: Props) {
  return (
    <Reveal>
      <div className="flex w-full flex-col items-center pb-5">
        {/* Card */}
        <Card className="w-full max-w-xl rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <CardContent className="space-y-4 p-7">
            <h3 className="text-2xl font-semibold">
              {title}
            </h3>

            <p className="leading-relaxed text-muted-foreground">
              {description}
            </p>
          </CardContent>
        </Card>

        {/* Timeline Marker */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="h-5 w-5 rounded-full border-4 border-background bg-foreground shadow-sm" />

          <div className="flex h-7 items-center justify-center whitespace-nowrap rounded-full bg-muted px-3 text-xs font-medium text-foreground shadow-sm">
            {date}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
