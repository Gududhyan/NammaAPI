import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  variant?: "color" | "white";
  className?: string;
  priority?: boolean;
};

// public/logo.png (light backgrounds) and public/logo-white.png (dark/navy
// backgrounds) — replace these two files to update the logo site-wide.
export function Logo({ variant = "color", className, priority = false }: LogoProps) {
  const src = variant === "white" ? "/logo-white.png" : "/logo.png";

  return (
    <Link href="/" className={`flex items-center ${className ?? ""}`} aria-label="NammaAPI home">
      <Image src={src} alt="NammaAPI" width={1024} height={274} priority={priority} className="h-9 w-auto" />
    </Link>
  );
}
