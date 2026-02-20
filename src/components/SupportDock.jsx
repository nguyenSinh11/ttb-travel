import { useMemo, useState } from "react";
import { MessageCircle, X, Mail, Send, MessagesSquare } from "lucide-react";

function openZaloAppFirst(fallbackUrl = "https://zalo.me") {
  const deepLink = "zalo://";
  const timer = setTimeout(() => {
    window.open(fallbackUrl, "_blank", "noreferrer");
  }, 800);

  window.location.href = deepLink;

  window.addEventListener("pagehide", () => clearTimeout(timer), { once: true });
}

export default function SupportDock({
  messengerUrl = "https://www.facebook.com/",
  zaloUrl = "https://zalo.me",
  email = "support@ttbtravel.com",
  phone = "0437125999",
  embedded = false, // ✅ NEW: when true, do not use fixed positioning
}) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("quick"); // quick | live
  const [form, setForm] = useState({ name: "", phone: "", note: "" });

  const defaultBody = useMemo(() => {
    return [
      "Hello, I would like to get tour consultation.",
      "",
      `Full name: ${form.name || "(not provided)"}`,
      `Phone: ${form.phone || phone || "(not provided)"}`,
      `Message: ${form.note || "(not provided)"}`,
      "",
      "Thank you!",
    ].join("\n");
  }, [form, phone]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Tour consultation request");
    const body = encodeURIComponent(defaultBody);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, defaultBody]);

  const quickItems = useMemo(() => {
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
        label: "Quick email",
        href: mailtoHref,
        icon: <Mail className="h-5 w-5" />,
      },
    ].filter(Boolean);
  }, [messengerUrl, zaloUrl, mailtoHref]);

  const canShowQuick = quickItems.length > 0;

  return (
    <div className={embedded ? "relative" : "fixed bottom-5 right-5 z-50"}>
      {open && (
        <div className="mb-3 w-[310px] max-w-[calc(100vw-40px)] rounded-2xl border border-slate-200 bg-white/90 backdrop-blur shadow-2xl overflow-hidden">
          <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between">
            <div className="font-semibold text-sm">Customer Support</div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-3 pt-3">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTab("quick")}
                className={`rounded-xl px-3 py-2 text-sm font-semibold border transition ${
                  tab === "quick"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white border-slate-200 hover:bg-slate-50"
                }`}
              >
                Chat channels
              </button>
              <button
                onClick={() => setTab("live")}
                className={`rounded-xl px-3 py-2 text-sm font-semibold border transition ${
                  tab === "live"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white border-slate-200 hover:bg-slate-50"
                }`}
              >
                Live chat
              </button>
            </div>
          </div>

          <div className="p-3">
            {tab === "quick" && (
              <div className="space-y-2">
                {canShowQuick ? (
                  quickItems.map((it) => (
                    <a
                      key={it.key}
                      href={it.href}
                      target={it.href.startsWith("mailto:") ? "_self" : "_blank"}
                      rel="noreferrer"
                      className="flex items-center gap-3 px-3 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition active:scale-[0.99]"
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
                  ))
                ) : (
                  <div className="text-sm text-slate-600 leading-relaxed">
                    Facebook/Zalo is not configured yet. You can use the{" "}
                    <span className="font-semibold">Live chat</span> tab to send a quick request.
                  </div>
                )}

                <div className="pt-1 text-[12px] text-slate-500">
                  Hotline: <span className="font-semibold">{phone}</span>
                </div>
              </div>
            )}

            {tab === "live" && (
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailtoHref;
                }}
              >
                <div className="grid grid-cols-1 gap-2">
                  <input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Full name"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/20"
                  />
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    placeholder="Phone number"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/20"
                  />
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm((s) => ({ ...s, note: e.target.value }))}
                    placeholder="What tour do you need? Travel date? Number of guests?"
                    rows={3}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/20 resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold hover:bg-slate-50 transition"
                    title="Open a pre-filled email"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold shadow-lg transition active:scale-95"
                  >
                    <Send className="h-4 w-4" />
                    Send
                  </button>
                </div>

                <div className="text-[12px] text-slate-500 leading-relaxed">
                  * This live chat currently sends a quick email (lightweight and easy to test).
                  You can integrate a real live chat later (e.g., Tawk, Crisp).
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-3 select-none"
        aria-label="Open support chat"
      >
        <div className="hidden sm:block rounded-full bg-slate-900/90 backdrop-blur text-white text-xs px-3 py-2 shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
          Support chat
        </div>

        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-emerald-500/25 blur-md" />
          <div className="relative h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center justify-center transition active:scale-95">
            <MessageCircle className="h-6 w-6" />
          </div>
        </div>
      </button>
    </div>
  );
}