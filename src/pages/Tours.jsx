import tours from "../data/tours.json";
import TourCard from "../components/TourCard";

export default function Tours() {
  return (
    <section className="container-app py-10">
      <h1 className="text-3xl font-black">Tours</h1>
      <p className="mt-2 text-slate-600">
        Choose a tour — explore the details — submit the form to be contacted by our team.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map((t) => (
          <TourCard key={t.id} tour={t} />
        ))}
      </div>
    </section>
  );
}
