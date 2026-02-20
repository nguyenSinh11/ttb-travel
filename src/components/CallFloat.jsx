import { PhoneCall } from "lucide-react";

export default function CallFloat({
  phone = "0437125999",
  label = "Call Now",
  position = "left", // left | right
}) {
  const tel = String(phone).replace(/\s/g, "");
  const isLeft = position === "left";

  return (
    <a
      href={`tel:${tel}`}
      className={`fixed bottom-5 ${isLeft ? "left-5" : "right-5"} z-50 group select-none`}
      aria-label={`${label} ${phone}`}
    >
      <div className="flex items-center gap-3">
        {isLeft && (
          <div className="hidden sm:block rounded-full bg-slate-900/90 backdrop-blur text-white text-xs px-3 py-2 shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
            {label}: {phone}
          </div>
        )}

        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-red-500/30 blur-md animate-pulse" />
          <div className="relative h-14 w-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl flex items-center justify-center transition active:scale-95">
            <PhoneCall className="h-6 w-6" />
          </div>
        </div>

        {!isLeft && (
          <div className="hidden sm:block rounded-full bg-slate-900/90 backdrop-blur text-white text-xs px-3 py-2 shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
            {label}: {phone}
          </div>
        )}
      </div>
    </a>
  );
}