import news from "../data/news.json";
import NewsCard from "../components/NewsCard";

export default function News() {
  return (
    <section className="bg-[#f3f1ee]">
      <div className="container-app py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-black">Resources / Stories</h1>
          <p className="mt-4 text-slate-600">
            Select an article to explore detailed journeys, images, and stories.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {news.map((n) => (
            <NewsCard key={n.id} item={n} />
          ))}
        </div>
      </div>
    </section>
  );
}
