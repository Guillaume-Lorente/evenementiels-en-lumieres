"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
];

const prestationsItems = [
  { href: "/prestations/wedding-planner", label: "Wedding Planner" },
  { href: "/prestations/event-planner", label: "Event Planner" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrestationsOpen, setIsPrestationsOpen] = useState(false);

  function closeAll() {
    setIsMenuOpen(false);
    setIsPrestationsOpen(false);
  }

  return (
    <header className="bg-[var(--primary)] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={closeAll}>
          <div className="h-16 w-auto">
            <Image
              src="/logo2.png"
              alt="Evénementiels en Lumières"
              width={200}
              height={60}
              priority
              className="h-full w-auto"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className="rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Accueil
          </Link>

          <div className="group relative">
            <Link
              href="/prestations"
              className="flex items-center rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Nos prestations
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <div className="invisible absolute left-0 top-full z-50 mt-2 w-60 translate-y-2 rounded-2xl border border-white/10 bg-white/95 p-2 opacity-0 shadow-xl backdrop-blur transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/prestations/wedding-planner"
                className="block rounded-xl px-4 py-3 text-sm text-[var(--primary)] transition hover:bg-[var(--background)]"
              >
                Wedding Planner
              </Link>
              <Link
                href="/prestations/event-planner"
                className="block rounded-xl px-4 py-3 text-sm text-[var(--primary)] transition hover:bg-[var(--background)]"
              >
                Event Planner
              </Link>
            </div>
          </div>

          {navItems
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

          <Link
            href="/contact"
            className="ml-2 rounded-xl bg-[var(--highlight)] px-4 py-2 text-sm font-medium text-[var(--primary)] transition hover:opacity-90"
          >
            Contact
          </Link>
        </nav>

        {/* Burger button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeAll}
      />

      {/* Mobile side panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-[var(--primary)] shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Menu
          </p>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2 text-white transition hover:bg-white/10"
            aria-label="Fermer le menu"
            onClick={closeAll}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col px-6 py-6">
          <Link
            href="/"
            onClick={closeAll}
            className="rounded-xl px-3 py-3 text-base text-white/85 transition hover:bg-white/10 hover:text-white"
          >
            Accueil
          </Link>

          <div className="mt-2 rounded-2xl bg-white/5">
            <div className="flex items-center justify-between">
              <Link
                href="/prestations"
                onClick={closeAll}
                className="flex-1 rounded-l-2xl px-3 py-3 text-base text-white/85 transition hover:text-white"
              >
                Nos prestations
              </Link>

              <button
                type="button"
                aria-label="Ouvrir le sous-menu des prestations"
                className="rounded-r-2xl px-3 py-3 text-white/85 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsPrestationsOpen((prev) => !prev)}
              >
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isPrestationsOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isPrestationsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-2 pb-2">
                {prestationsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className="block rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeAll}
                className="mt-2 rounded-xl px-3 py-3 text-base text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

          <Link
            href="/contact"
            onClick={closeAll}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[var(--highlight)] px-4 py-3 text-sm font-medium text-[var(--primary)] transition hover:opacity-90"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}