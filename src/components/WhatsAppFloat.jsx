import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat({ phoneE164 }) {
  const msg = encodeURIComponent(
    "Hello, I would like to receive consultation about a tour. Please assist me with more information."
  );
  const href = `https://wa.me/${phoneE164}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center gap-3">
        <div className="hidden sm:block rounded-full bg-slate-900 text-white text-xs px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition">
          Chat on WhatsApp
        </div>
        <div className="h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center justify-center">
          <MessageCircle />
        </div>
      </div>
    </a>
  );
}
