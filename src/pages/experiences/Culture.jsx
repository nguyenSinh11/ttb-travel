import { Link } from "react-router-dom";
import PageShell from "../../components/PageShell";

export default function Culture() {
  return (
    <PageShell
      title="Culture Experiences"
      subtitle="Heritage, local life, crafts, and cuisine — deeper cultural moments built into your itinerary."
      heroImage="/images/pages/hoangsuphi3.jpg"
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Experiences", href: "/experiences/culture" },
        { label: "Culture" },
      ]}
    >
      {/* keep content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Block
          title="Local immersion"
          text="Markets, neighborhoods, village life, and meaningful encounters with local communities."
        />
        <Block
          title="Cuisine"
          text="Food walks, local specialties, and hands-on cooking sessions depending on destination."
        />
        <Block
          title="Heritage"
          text="History-focused routes with museums, temples, old towns, and UNESCO areas."
        />
        <Block
          title="Crafts & traditions"
          text="Handicraft villages, artisan workshops, and cultural performances when relevant."
        />
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-extrabold text-slate-900">
          Explore culture tours
        </h2>
        <p className="mt-2 text-slate-600">
          Browse culture-focused itineraries or build a custom cultural route.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Link
            to="/tours?type=culture"
            className="inline-flex justify-center rounded-xl bg-emerald-700 px-5 py-3 text-white font-bold hover:bg-emerald-800 transition"
          >
            View Culture Tours
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 font-bold hover:bg-slate-50 transition"
          >
            Request a Cultural Itinerary
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