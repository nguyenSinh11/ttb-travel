import { Link } from "react-router-dom";
import PageShell from "../../components/PageShell";

export default function SoutheastAsia() {
  return (
    <PageShell
      title="Southeast Asia"
      subtitle="Multi-country journeys designed for comfort, culture, and seamless logistics across the region."
      heroImage="/images/pages/langchai1.jpg"
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Destinations", href: "/destinations/southeast-asia" },
        { label: "Southeast Asia" },
      ]}
    >
      {/* keep content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Block
          title="Popular combinations"
          text="Vietnam + Cambodia, Vietnam + Laos, or a full Indochina loop depending on your time and travel style."
        />
        <Block
          title="What we handle"
          text="Border logistics, transfers, guides, curated hotels, and a cohesive experience across countries."
        />
        <Block
          title="Ideal trip length"
          text="10–21 days, depending on the number of countries and pace you prefer."
        />
        <Block
          title="Best for"
          text="Cultural immersion, iconic landscapes, and travelers looking for a smooth end-to-end itinerary."
        />
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-extrabold text-slate-900">
          Explore tours across Southeast Asia
        </h2>
        <p className="mt-2 text-slate-600">
          Discover multi-destination programs or build your own itinerary.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Link
            to="/tours?dest=SEA"
            className="inline-flex justify-center rounded-xl bg-emerald-700 px-5 py-3 text-white font-bold hover:bg-emerald-800 transition"
          >
            View SEA Tours
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 font-bold hover:bg-slate-50 transition"
          >
            Plan a Multi-Country Trip
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

function Block({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="font-extrabold text-slate-900">{title}</div>
      <p className="mt-2 text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}