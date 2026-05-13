"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryImage } from "@/data/gallery";

type Props = {
  images: GalleryImage[];
  initialCount?: number;
  step?: number;
};

export default function Gallery({
  images,
  initialCount = 6,
  step = 6,
}: Props) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleImages = useMemo(
    () => images.slice(0, visibleCount),
    [images, visibleCount]
  );

  const hasMore = visibleCount < images.length;

  return (
    <div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visibleImages.map((image, index) => (
          <div
            key={image.src}
            className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={1200}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              priority={index < 2}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-80" />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-sm font-semibold text-white drop-shadow">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + step, images.length)
              )
            }
            className="rounded-full border border-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
          >
            Voir plus
          </button>
        </div>
      )}
    </div>
  );
}