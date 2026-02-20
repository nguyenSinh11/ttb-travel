import { PhoneCall, Facebook, MessageCircle } from "lucide-react";
import SupportDock from "./SupportDock";

function openZaloAppFirst(fallbackUrl = "https://zalo.me") {
  const deepLink = "zalo://";
  const timer = setTimeout(() => {
    window.open(fallbackUrl, "_blank", "noreferrer");
  }, 800);

  window.location.href = deepLink;

  window.addEventListener("pagehide", () => clearTimeout(timer), { once: true });
}

export default function SupportRightBar({
  phone = "0437125999",
  facebookUrl = "https://www.facebook.com/",
  zaloUrl = "https://zalo.me",
  email = "support@ttbtravel.com",
}) {
  const tel = String(phone).replace(/\s/g, "");

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Facebook */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3"
        aria-label="Open Facebook"
      >
        <div className="hidden sm:block rounded-full bg-slate-900/90 backdrop-blur text-white text-xs px-3 py-2 shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
          Facebook
        </div>
        <div className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl flex items-center justify-center transition active:scale-95">
          <Facebook className="h-6 w-6" />
        </div>
      </a>

      {/* Zalo */}
      <button
        type="button"
        onClick={() => openZaloAppFirst(zaloUrl)}
        className="group flex items-center gap-3"
        aria-label="Open Zalo"
      >
        <div className="hidden sm:block rounded-full bg-slate-900/90 backdrop-blur text-white text-xs px-3 py-2 shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
          Zalo
        </div>
        <div className="h-14 w-14 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-xl flex items-center justify-center transition active:scale-95">
          {/* simple bubble icon (no Zalo svg yet) */}
          <MessageCircle className="h-6 w-6" />
        </div>
      </button>

      {/* Call */}
      <a
        href={`tel:${tel}`}
        className="group flex items-center gap-3"
        aria-label={`Call Now ${phone}`}
      >
        <div className="hidden sm:block rounded-full bg-slate-900/90 backdrop-blur text-white text-xs px-3 py-2 shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
          Call Now: {phone}
        </div>
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-red-500/30 blur-md animate-pulse" />
          <div className="relative h-14 w-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl flex items-center justify-center transition active:scale-95">
            <PhoneCall className="h-6 w-6" />
          </div>
        </div>
      </a>

      {/* Support chat (panel + button) */}
      <SupportDock
        embedded
        messengerUrl={facebookUrl}
        zaloUrl={zaloUrl}
        email={email}
        phone={phone}
      />
    </div>
  );
}