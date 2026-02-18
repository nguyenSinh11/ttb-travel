import { useParams, Link } from "react-router-dom";
import news from "../data/news.json";

export default function NewsDetail() {
  const { id } = useParams();
  const item = news.find((x) => x.id === id);

  if (!item) {
    return (
      <section className="container-app py-12">
        <h1 className="text-2xl font-black">Article not found</h1>
        <Link
          to="/news"
          className="mt-4 inline-block font-bold text-emerald-700 hover:underline"
        >
          ← Back to stories
        </Link>
      </section>
    );
  }

  return (
    <article>
      {/* Cover hero */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src={item.cover}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-app relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight">
              {item.title}
            </h1>
            <p className="mt-3 text-white/85 text-lg md:text-2xl">
              {item.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container-app py-14">
        <div className="max-w-4xl mx-auto">
          {item.body?.map((b, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-2xl font-black tracking-tight">
                {b.heading}
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                {b.text}
              </p>
            </div>
          ))}

          {/* Gallery */}
          {item.gallery?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {item.gallery.map((src) => (
                <div
                  key={src}
                  className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-12">
            <Link
              to="/news"
              className="font-bold text-emerald-700 hover:underline"
            >
              ← Back to stories
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
