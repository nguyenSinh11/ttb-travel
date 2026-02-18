export default function PageLoader({ show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="mx-auto h-14 w-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-lg">
          T
        </div>

        <div className="mt-5 font-black tracking-wide text-lg">TTB TRAVEL</div>
        <div className="mt-1 text-sm text-slate-500">
          Preparing your journey…
        </div>

        {/* shimmer bar */}
        <div className="mt-5 h-2 w-72 max-w-[70vw] rounded-full bg-slate-100 overflow-hidden mx-auto">
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-slate-300/70 to-transparent animate-[shimmer_1.2s_infinite]" />
        </div>

        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(320%); }
          }
        `}</style>
      </div>
    </div>
  );
}
