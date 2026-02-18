import { Link } from "react-router-dom";

export default function NewsCard({ item }) {
  return (
    <div className="bg-white">
      {/* Image clickable + zoom hover */}
      <Link to={`/news/${item.id}`} className="block group">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={item.cover}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
      </Link>

      <div className="pt-5 text-center">
        <h3 className="font-black text-lg">{item.title}</h3>

        <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
          {item.excerpt}
        </p>

        <Link
          to={`/news/${item.id}`}
          className="inline-block mt-4 font-bold underline underline-offset-4"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
}
