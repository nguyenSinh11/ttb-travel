import { useParams, Link } from "react-router-dom";
import tours from "../data/tours.json";
import { formatVND } from "../utils/format";
import TourInquiryForm from "../components/TourInquiryForm";
import TourGallery from "../components/TourGallery";

export default function TourDetail() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <section className="container-app py-10">
        <h1 className="text-2xl font-black">Tour not found</h1>
        <Link
          to="/tours"
          className="mt-4 inline-block font-bold text-emerald-700 hover:underline"
        >
          ← Back to Tours
        </Link>
      </section>
    );
  }

  return (
    <section className="container-app py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Gallery iOS-glass */}
          <TourGallery cover={tour.cover} gallery={tour.gallery} title={tour.title} />

          <div className="mt-7">
            <div className="text-sm text-slate-500">
              {tour.location} • {tour.duration}
            </div>

            <h1 className="text-3xl font-black mt-1">{tour.title}</h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="text-slate-500">Starting from</div>
              <div className="text-2xl font-black text-emerald-700">
                {formatVND(tour.priceFrom)}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-black">Highlights</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                {tour.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-black">Itinerary</h2>
              <div className="mt-3 space-y-3">
                {tour.itinerary.map((it) => (
                  <div
                    key={it.day}
                    className="rounded-2xl border border-slate-200 p-5 bg-white
                               shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
                  >
                    <div className="font-bold">{it.day}</div>
                    <div className="text-slate-700 mt-1">{it.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-2xl border border-slate-200 p-5 bg-white
                           shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
              >
                <h3 className="font-black">Included</h3>
                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                  {tour.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl border border-slate-200 p-5 bg-white
                           shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
              >
                <h3 className="font-black">Not Included</h3>
                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                  {tour.excludes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:sticky lg:top-6 h-fit">
          <div
            className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md
                       shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
          >
            <div className="p-5 border-b border-slate-200/70">
              <div className="text-xs tracking-[0.3em] uppercase text-slate-500">
                Request
              </div>
              <div className="mt-2 text-lg font-black text-slate-900">
                Get quick consultation
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Fill in your details — our team will contact you via Email/WhatsApp.
              </div>
            </div>

            <div className="p-5">
              <TourInquiryForm tourTitle={tour.title} />
            </div>
          </div>

          <Link
            to="/tours"
            className="mt-4 block text-center rounded-xl border border-slate-200 py-3 font-bold hover:bg-slate-50"
          >
            ← Browse other tours
          </Link>
        </div>
      </div>
    </section>
  );
}
