import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

{/* Components */}
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

{/* Data */}
import { certifications } from "@/data/certifications";

export default function Certifications() {
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollToItem = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  
  const handlePrevious = () => {
    const newIndex =
      selectedIndex === 0
        ? certifications.length - 1
        : selectedIndex - 1;

    setSelectedIndex(newIndex);
    scrollToItem(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      selectedIndex === certifications.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedIndex(newIndex);
    scrollToItem(newIndex);
  };

  return (
    <section id="certifications" className="h-[90vh] bg-background px-20 py-15 flex flex-col justify-between">
      {/* Heading */}
      <div>
        <h2 className="dauphin text-5xl font-semibold tracking-tight">
          Certifications
        </h2>
      </div>

      {/* Content */}
      <div className="flex justify-between">
        {/* LEFT SIDE */}
        <div className="w-1/2 flex flex-col gap-5 justify-between">
          {/* Preview */}
          <div className="relative h-110 overflow-hidden rounded-3xl border border-border bg-background">
            <img
              src={certifications[selectedIndex].image}
              alt={certifications[selectedIndex].title}
              className="h-full w-full object-contain p-4"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between px-2">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-black bg-transparent hover:bg-black hover:text-white"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <span className="text-sm text-muted-foreground">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(certifications.length).padStart(2, "0")}
            </span>

            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-black bg-transparent hover:bg-black hover:text-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <ScrollArea className="h-128 w-185 pr-10">
          <div className="flex flex-col">
            {certifications.map((certification, index) => {
              const isActive = selectedIndex === index;

              return (
                <button
                  key={certification.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  onClick={() => {
                    setSelectedIndex(index);
                    scrollToItem(index);
                  }}
                  className={`group flex gap-4 py-4 text-left transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* Number */}
                  <div className="min-w-15">
                    <span className="text-4xl font-semibold italic text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-3xl font-semibold leading-none tracking-tight">
                          {certification.title}
                        </h3>

                        <p className="mt-2 text-lg text-muted-foreground">
                          {certification.organization}
                        </p>
                      </div>

                      <span className="whitespace-nowrap text-sm text-muted-foreground">
                        Issued: {certification.issued}
                      </span>
                    </div>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {certification.description}
                    </p>

                    <Separator className="mt-8" />
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
