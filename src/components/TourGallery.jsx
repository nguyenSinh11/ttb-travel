import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function TourGallery({ cover, gallery = [], title = "" }) {
  const images = useMemo(() => {
    const arr = [cover, ...(gallery || [])].filter(Boolean);
    return Array.from(new Set(arr));
  }, [cover, gallery]);

  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);

  if (!images.length) return null;

  const current = images[idx];
  const prev = () => setIdx((v) => (v - 1 + images.length) % images.length);
  const next = () => setIdx((v) => (v + 1) % images.length);

  return (
    <>
      <div className="relative">
        {/* Main */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100
                     shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        >
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <img
              src={current}
              alt={title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>

          {/* cinematic overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/10" />

          {/* iOS glass badge */}
          {images.length > 1 && (
            <div
              className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold
                         bg-white/18 text-white border border-white/25 backdrop-blur-md
                         shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            >
              {idx + 1}/{images.length}
            </div>
          )}
        </button>

        {/* Prev/Next */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2
                         h-11 w-11 rounded-full bg-white/20 border border-white/25 text-white
                         backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                         hover:bg-white/30 transition"
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2
                         h-11 w-11 rounded-full bg-white/20 border border-white/25 text-white
                         backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                         hover:bg-white/30 transition"
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIdx(i)}
                className={`relative shrink-0 overflow-hidden rounded-xl border transition
                  ${
                    i === idx
                      ? "border-emerald-400 ring-2 ring-emerald-300/40"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
              >
                <img src={src} alt="" className="h-16 w-24 object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current}
              alt={title}
              className="w-full max-h-[82vh] object-contain rounded-2xl"
            />

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 h-10 w-10 rounded-full
                         bg-white/20 border border-white/25 text-white backdrop-blur-md
                         hover:bg-white/30 transition flex items-center justify-center"
              aria-label="Close"
            >
              <X />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2
                             h-11 w-11 rounded-full bg-white/20 border border-white/25 text-white
                             backdrop-blur-md hover:bg-white/30 transition"
                  aria-label="Previous"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2
                             h-11 w-11 rounded-full bg-white/20 border border-white/25 text-white
                             backdrop-blur-md hover:bg-white/30 transition"
                  aria-label="Next"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
