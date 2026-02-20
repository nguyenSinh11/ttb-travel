import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import tours from "../data/tours.json";
import news from "../data/news.json";
import TourCard from "../components/TourCard";
import NewsCard from "../components/NewsCard";
import HeroSlider from "../components/HeroSlider";
import Reveal from "../components/Reveal";
import PageLoader from "../components/PageLoader";
import SupportDock from "../components/SupportDock";
import CallFloat from "../components/CallFloat";
import SupportRightBar from "../components/SupportRightBar";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <PageLoader show={loading} />

      {/* Customer support floating actions */}
      <SupportDock
        messengerUrl="https://www.facebook.com/"
        zaloUrl="https://zalo.me"
        email="support@ttbtravel.com"
        phone="0437125999"
      />
      <SupportRightBar
        phone="0437125999"
        facebookUrl="https://www.facebook.com/"
        zaloUrl="https://zalo.me"
        email="support@ttbtravel.com"
      />

      {/* <CallFloat phone="0437125999" label="Call Now" position="left" /> */}

      {!loading && (
        <>
          {/* Banner Slider */}
          <HeroSlider />

          {/* Company intro */}
          <section className="container-app py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <Reveal className="lg:col-span-5" delay={100}>
                <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src="/images/news/VietNamsin.jpeg"
                    alt="About company"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>

              <div className="lg:col-span-7">
                <Reveal delay={150}>
                  <h2 className="text-3xl font-black tracking-tight">
                    About TTB Travel
                  </h2>
                </Reveal>

                <Reveal delay={250}>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    TTB Travel is built on the philosophy of “go deeper to truly
                    understand” — not just sightseeing, but connecting with the
                    culture, people, and local rhythms of life. We design trips
                    to be streamlined, clear, and transparent: from itinerary
                    and pricing to what is included and excluded. Instead of
                    chasing volume, our team prioritizes the quality of the
                    experience: choosing suitable accommodations, keeping a
                    balanced pace, and creating activities that feel like “living
                    with” rather than simply “passing through”.
                    <br />
                    <br />
                    For experiential routes such as local homestays, highland
                    trekking, or coastal journeys, TTB Travel partners with local
                    providers to ensure community benefits and preserve cultural
                    identity. Travelers are encouraged to respect nature,
                    minimize plastic waste, and explore responsibly. We believe
                    a memorable trip doesn’t need to be flashy — it only needs to
                    match your needs, stay safe, and be meaningful enough to
                    bring home stories that truly matter.
                  </p>
                </Reveal>

                <Reveal delay={350}>
                  <div className="mt-6 flex gap-3">
                    <Link
                      to="/tours"
                      className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800"
                    >
                      Explore Tours
                    </Link>
                    <Link
                      to="/contact"
                      className="px-6 py-3 rounded-xl border border-slate-200 font-bold hover:bg-slate-50"
                    >
                      Contact for Consultation
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* News section */}
          <section className="bg-[#f3f1ee]">
            <div className="container-app py-14">
              <Reveal className="text-center max-w-3xl mx-auto">
                <div className="text-xs tracking-[0.3em] uppercase text-slate-600">
                  Stories
                </div>
                <h2 className="mt-3 text-3xl md:text-4xl font-black">
                  HOMESTAY EXPERIENCES
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Stories and articles to help you better understand immersive
                  travel, local culture, and how we design each journey.
                </p>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {news.slice(0, 3).map((n, i) => (
                  <Reveal key={n.id} delay={100 * (i + 1)}>
                    <NewsCard item={n} />
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-10 text-center" delay={200}>
                <Link
                  to="/news"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-red-400 text-red-500 font-bold hover:bg-red-50"
                >
                  VIEW ALL STORIES
                </Link>
              </Reveal>
            </div>
          </section>

          {/* Featured tours */}
          <section className="container-app py-12">
            <Reveal className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-black">Featured Tours</h2>
              <Link to="/tours" className="font-bold text-emerald-700 hover:underline">
                View all →
              </Link>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {tours.slice(0, 3).map((t, i) => (
                <Reveal key={t.id} delay={100 * (i + 1)}>
                  <TourCard tour={t} />
                </Reveal>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
