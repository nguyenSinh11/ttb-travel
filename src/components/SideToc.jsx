export default function SideToc({ items = [] }) {
  return (
    <aside className="sticky top-24 hidden lg:block">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="text-sm font-bold text-slate-900">Sommaire</div>
        <div className="mt-3 space-y-2">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="block text-sm text-slate-600 hover:text-slate-900 hover:underline"
            >
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}   