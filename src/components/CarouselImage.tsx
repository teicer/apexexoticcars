"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type CarouselImage = {
  id: string;
  image: string | StaticImageData;
  alt?: string;
};

type Props = {
  images: CarouselImage[];
  duration?: number;
};

export default function ImageCarousel({ images, duration = 4000 }: Props) {
  const [active, setActive] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const maxCycles = 5;
  useEffect(() => {
    if (images.length <= 1) return;
    if (cycles >= maxCycles) return;

    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % images.length;

        if (next === 0) {
          setCycles((c) => c + 1);
        }

        return next;
      });

      setProgressKey((key) => key + 1);
    }, duration);

    return () => clearInterval(interval);
  }, [images.length, duration, cycles, active]);

  const handleIndicatorClick = (index: number) => {
    setActive(index);
    setProgressKey((key) => key + 1);
  };

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="relative w-full overflow-hidden rounded-4xl">
        {images.map((img, index) => (
          <Image
            key={img.id}
            src={img.image}
            alt={img.alt ?? "carousel-image"}
            priority
            quality={75}
            className={`
              absolute inset-0 h-full w-full rounded-4xl object-cover
              transition-opacity duration-1000
              ${active === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        <div className="aspect-video w-full" />
      </div>

      <div className="flex items-center gap-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className="relative h-0.75 w-14 cursor-pointer overflow-hidden rounded-full bg-card-foreground/50"
          >
            {active === index && (
              <div
                key={progressKey}
                className={`
                  absolute left-0 top-0 h-full bg-primary
                   ${cycles >= maxCycles ? "w-full" : "animate-progress"}
                `}
                style={{
                  animationDuration: `${duration}ms`,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
