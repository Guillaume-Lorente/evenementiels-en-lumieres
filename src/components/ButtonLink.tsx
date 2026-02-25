import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "highlight" | "secondary" | "secondary-light";
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "highlight",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  let styles = "";

  if (variant === "highlight") {
    styles =
      "bg-[var(--highlight)] text-[var(--primary)] shadow-lg hover:shadow-xl hover:scale-[1.02]";
  }

  if (variant === "secondary") {
    styles =
      "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white";
  }

  if (variant === "secondary-light") {
    styles =
      "border border-white/70 text-white hover:bg-white hover:text-[var(--primary)]";
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}