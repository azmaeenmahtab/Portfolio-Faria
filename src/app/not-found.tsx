import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Decorative */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-tint) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <p
        className="text-8xl sm:text-9xl font-bold text-[var(--color-accent-tint)] mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        404
      </p>
      <h1
        className="text-2xl sm:text-3xl font-bold mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Page not found
      </h1>
      <p className="text-[var(--color-muted)] mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <Link href="/" className="btn-primary cursor-pointer">
        Go back home
      </Link>
    </div>
  );
}
