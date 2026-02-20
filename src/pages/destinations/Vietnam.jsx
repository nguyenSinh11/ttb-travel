import { Link } from "react-router-dom";
import PageShell from "../../components/PageShell";

export default function Vietnam() {
  return (
    <PageShell
      title="Vietnam"
      subtitle="From the northern mountains to the Mekong Delta — discover Vietnam through immersive, tailor-made journeys."
      heroImage="/images/pages/Vietnam3.jpg"
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Destinations", href: "/destinations/vietnam" },
        { label: "Vietnam" },
      ]}
    >
      {/* ...keep the rest of your page content the same... */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card
          title="Highlights"
          items={[
            "Hanoi & cultural heritage",
            "Ha Long Bay & cruises",
            "Central Vietnam: Hue – Hoi An",
            "Ho Chi Minh City & Mekong",
          ]}
        />
        <Card
          title="Best for"
          items={[
            "First-time travelers",
            "Food & culture lovers",
            "Nature and landscapes",
            "Family trips and couples",
          ]}
        />
        <Card
          title="Travel style"
          items={[
            "Private tours",
            "Small group options",
            "Comfort to premium hotels",
            "Local experiences",
          ]}
        />
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-extrabold text-slate-900">
          Ready to plan your Vietnam trip?
        </h2>
        <p className="mt-2 text-slate-600">
          Explore our curated tours or request a custom itinerary.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Link
            to="/tours?dest=VN"
            className="inline-flex justify-center rounded-xl bg-emerald-700 px-5 py-3 text-white font-bold hover:bg-emerald-800 transition"
          >
            View Vietnam Tours
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 font-bold hover:bg-slate-50 transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

function Card({ title, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="font-extrabold text-slate-900">{title}</div>
      <ul className="mt-3 space-y-2 text-slate-600 list-disc pl-5">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}