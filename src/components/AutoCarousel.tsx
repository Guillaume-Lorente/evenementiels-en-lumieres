"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  images: string[];
};

export default function AutoCarousel({ images }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrame: number;
    let position = 0;
    const speed = 0.3; // vitesse (plus petit = plus lent)

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-6 will-change-transform"
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="relative h-80 w-105 shrink-0 overflow-hidden rounded-3xl shadow-lg"
          >
            <Image
              src={src}
              alt="Événement"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}