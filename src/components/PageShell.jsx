import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageShell({
  title,
  subtitle,
  crumbs = [{ label: "Home", href: "/" }],
  heroImage,
  children,
}) {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative border-b border-slate-200 overflow-hidden">
        {heroImage ? (
          <>
            <img
              src={heroImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-white/10" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        )}

        <div className="relative container-app py-12 md:py-16">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 text-sm ${
              heroImage ? "text-white/80" : "text-slate-500"
            }`}
          >
            {crumbs.map((c, idx) => (
              <div key={c.href || c.label} className="flex items-center gap-2">
                {idx > 0 && (
                  <ChevronRight
                    size={16}
                    className={heroImage ? "opacity-70" : "opacity-70"}
                  />
                )}
                {c.href ? (
                  <Link
                    to={c.href}
                    className={heroImage ? "hover:text-white" : "hover:text-slate-700"}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className={heroImage ? "text-white" : "text-slate-700"}>
                    {c.label}
                  </span>
                )}
              </div>
            ))}
          </div>

          <h1
            className={`mt-4 text-3xl md:text-4xl font-extrabold tracking-tight ${
              heroImage ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`mt-3 max-w-3xl leading-relaxed ${
                heroImage ? "text-white/85" : "text-slate-600"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <section className="container-app py-10">{children}</section>
    </main>
  );
}