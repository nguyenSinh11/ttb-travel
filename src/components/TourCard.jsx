import { Link } from "react-router-dom";
import { formatVND } from "../utils/format";

export default function TourCard({ tour }) {
  return (
    <Link
      to={`/tours/${tour.id}`}
      className="group block rounded-2xl border border-slate-200 overflow-hidden bg-white
                 transition will-change-transform
                 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <img
          src={tour.cover}
          alt={tour.title}
          className="h-full w-full object-cover transition duration-700
                     group-hover:scale-[1.04]"
        />

        {/* iOS-like glass label */}
        <div
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold
                     bg-white/18 text-white border border-white/25 backdrop-blur-md
                     shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
        >
          {tour.location} • {tour.duration}
        </div>

        {/* subtle gradient for premium vibe */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-extrabold text-lg leading-snug text-slate-900 group-hover:text-slate-950">
          {tour.title}
        </h3>

        <div className="mt-3 flex items-end justify-between">
          <div>
            <div className="text-xs text-slate-500">Giá từ</div>
            <div className="text-xl font-black text-emerald-700">
              {formatVND(tour.priceFrom)}
            </div>
          </div>

          {/* hint arrow (không cần button nữa) */}
          <div
            className="h-10 w-10 rounded-full border border-slate-200 bg-white
                       flex items-center justify-center
                       transition group-hover:translate-x-0.5 group-hover:bg-slate-50"
            aria-hidden="true"
          >
            <span className="text-lg">›</span>
          </div>
        </div>

        {/* highlights preview */}
        {tour.highlights?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tour.highlights.slice(0, 3).map((h) => (
              <span
                key={h}
                className="text-xs font-semibold px-2.5 py-1 rounded-full
                           bg-emerald-50 text-emerald-800 border border-emerald-100"
              >
                {h}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
