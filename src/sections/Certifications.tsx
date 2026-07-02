import { useRef, useState } from "react";

/* Components */
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

/* Data */
import { certifications } from "@/data/certifications";

/* Icons */
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";

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
    <section
      id="certifications"
      className="scroll-mt-20 mx-auto w-full max-w-7xl bg-background px-10 py-9 2xl:py-10"
    >
      <div className="flex min-h-[80vh] flex-col">
        {/* Heading */}
        <div>
          <h2 className="dauphin text-5xl font-semibold tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-1 gap-10">
          {/* LEFT SIDE */}
          <div className="flex w-[48%] flex-col justify-between gap-5">
            {/* Preview */}
            <div className="relative flex h-110 items-center justify-center overflow-hidden rounded-3xl border border-border bg-background">
              <img
                key={certifications[selectedIndex].id}
                src={certifications[selectedIndex].image}
                alt={certifications[selectedIndex].title}
                className="h-96 w-auto animate-in fade-in object-contain duration-300"
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
                {String(selectedIndex + 1).padStart(2, "0")} of{" "}
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
          <ScrollArea className="h-128 flex-1 pr-10">
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
                      isActive
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* Number */}
                    <div className="min-w-15 flex flex-col items-start">
                      <span
                        className={`text-4xl font-semibold italic transition-colors duration-300 ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`mt-2 h-0.5 bg-foreground transition-all duration-300 ${
                          isActive ? "w-8" : "w-0"
                        }`}
                      />
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

                        <span className="pt-1.5 whitespace-nowrap text-sm text-muted-foreground">
                          Issued: {certification.issued}
                        </span>
                      </div>

                      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
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
      </div>
    </section>
  );
}
