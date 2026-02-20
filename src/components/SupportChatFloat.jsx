import { useMemo, useState } from "react";
import { MessageCircle, X, Mail, MessagesSquare } from "lucide-react";

function openZaloAppFirst(fallbackUrl = "https://zalo.me") {
  const deepLink = "zalo://";
  const timer = setTimeout(() => {
    window.open(fallbackUrl, "_blank", "noreferrer");
  }, 800);

  window.location.href = deepLink;

  window.addEventListener(
    "pagehide",
    () => clearTimeout(timer),
    { once: true }
  );
}

export default function SupportChatFloat({
  messengerUrl = "https://www.facebook.com/",
  zaloUrl = "https://zalo.me",
  email = "support@ttbtravel.com",
  defaultMessage = "Hello, I would like to get tour consultation. Please help me with more information.",
}) {
  const [open, setOpen] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Tour consultation request");
    const body = encodeURIComponent(defaultMessage);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, defaultMessage]);

  const items = useMemo(() => {
    return [
      messengerUrl && {
        key: "messenger",
        label: "Facebook",
        href: messengerUrl,
        icon: <MessagesSquare className="h-5 w-5" />,
      },
      zaloUrl && {
        key: "zalo",
        label: "Zalo",
        href: zaloUrl,
        icon: <MessagesSquare className="h-5 w-5" />,
      },
      {
        key: "email",
        label: "Live chat (send email)",
        href: mailtoHref,
        icon: <Mail className="h-5 w-5" />,
      },
    ].filter(Boolean);
  }, [messengerUrl, zaloUrl, mailtoHref]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[260px] rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
          <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between">
            <div className="font-semibold text-sm">Customer Support</div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-3 space-y-2">
            {items.map((it) => (
              <a
                key={it.key}
                href={it.href}
                target={it.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-3 px-3 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition"
                onClick={(e) => {
                  if (it.key === "zalo") {
                    e.preventDefault();
                    openZaloAppFirst(it.href);
                  }
                }}
              >
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  {it.icon}
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {it.label}
                </div>
              </a>
            ))}

            <div className="text-xs text-slate-500 pt-1">
              * If Facebook/Zalo is not configured, those items will be hidden automatically.
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-3"
        aria-label="Open support chat"
      >
        <div className="hidden sm:block rounded-full bg-slate-900 text-white text-xs px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition">
          Support chat
        </div>

        <div className="h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center justify-center">
          <MessageCircle />
        </div>
      </button>
    </div>
  );
}