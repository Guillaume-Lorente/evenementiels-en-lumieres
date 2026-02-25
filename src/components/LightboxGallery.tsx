"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type GalleryItem = {
  src: string;
  alt: string;
};

export default function LightboxGallery({ items }: { items: GalleryItem[] }) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = activeIndex === null ? null : safeItems[activeIndex];

  function close() {
    setActiveIndex(null);
  }

  function prev() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + safeItems.length) % safeItems.length);
  }

  function next() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % safeItems.length);
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {safeItems.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl border bg-black/5 text-left"
            aria-label={`Ouvrir l'image : ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority={i < 4}
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={close}
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
          }}
          tabIndex={-1}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-black">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-t px-4 py-3">
              <p className="text-sm opacity-80">{active.alt}</p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-xl border px-3 py-2 text-sm hover:bg-black/5"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-xl border px-3 py-2 text-sm hover:bg-black/5"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-xl border px-3 py-2 text-sm hover:bg-black/5"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
