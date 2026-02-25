import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Nos prestations" },
  // { href: "/realisations", label: "Réalisations" },
];

export default function SiteHeader() {
  return (
    <header className="bg-(--primary) text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
  <div className="h-16 w-auto">
    <Image
      src="/logo.svg"
      alt="Evénementiels en Lumières"
      width={200}
      height={60}
      priority
      className="h-full w-auto"
    />
  </div>
</Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-white/80 transition hover:text-white hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}

          {/* CTA doré */}
          <Link
            href="/contact"
            className="ml-2 rounded-xl bg-(--highlight) px-4 py-2 text-sm font-medium text-(--primary) transition hover:opacity-90"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}