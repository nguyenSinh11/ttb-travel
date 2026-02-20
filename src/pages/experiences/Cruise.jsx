import { Link } from "react-router-dom";
import PageShell from "../../components/PageShell";

export default function Cruise() {
  return (
    <PageShell
      title="Cruise Experiences"
      subtitle="Premium cruise journeys across iconic waters — combining comfort, scenery, and curated shore activities."
      heroImage="/images/pages/Vietnam3.jpg"
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Experiences", href: "/experiences/cruise" },
        { label: "Cruise" },
      ]}
    >
      {/* keep content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card
          title="What to expect"
          items={[
            "Comfortable cabins and service",
            "Scenic routes and photo stops",
            "Curated activities and excursions",
            "Flexible pace with relaxation time",
          ]}
        />
        <Card
          title="Great for"
          items={[
            "Couples and honeymooners",
            "Families seeking comfort",
            "Slow travel lovers",
            "Short escape or full itinerary",
          ]}
        />
        <Card
          title="Optional upgrades"
          items={[
            "Premium cabin categories",
            "Private transfers",
            "Private guide excursions",
            "Special occasions setup",
          ]}
        />
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-extrabold text-slate-900">Find cruise tours</h2>
        <p className="mt-2 text-slate-600">
          Browse cruise itineraries or ask for a tailored cruise-based trip.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Link
            to="/tours?type=cruise"
            className="inline-flex justify-center rounded-xl bg-emerald-700 px-5 py-3 text-white font-bold hover:bg-emerald-800 transition"
          >
            View Cruise Tours
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 font-bold hover:bg-slate-50 transition"
          >
            Request Cruise Proposal
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